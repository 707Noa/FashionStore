"""Consulta inteligente de CU30 (segunda parte) -- texto/voz del
Administrador -> Gemini interpreta intención y criterios -> FastAPI los
valida/resuelve -> reutiliza ReportesService (primera parte, NUNCA una
consulta nueva) -> Gemini redacta un resumen SOLO a partir de esos datos
reales.

Flujo, siempre en este orden (nunca al revés -- ver gemini_client.py):
  1. INTERPRETAR -- gemini_client.interpretar_consulta_reporte devuelve
     intención + sucursal/periodo en texto libre. Si Gemini no está
     disponible, se responde con el mensaje de fallback -- el dashboard
     base (filtros manuales) sigue funcionando igual.
  2. VALIDAR/RESOLVER -- FastAPI, NUNCA Gemini:
       - la intención debe estar en gemini_client.INTENCIONES_VALIDAS;
       - el nombre de sucursal se resuelve contra PostgreSQL
         (SucursalLecturaRepository.buscar_por_nombre) -- si no la
         menciona, se mantiene la ya aplicada en el dashboard
         (`sucursal_id_actual` del request);
       - las fechas se calculan SIEMPRE en Python a partir de la expresión
         temporal (ver _resolver_periodo) -- un rango exacto que Gemini
         haya escrito solo se usa si además es un ISO-8601 válido; si no
         mencionó ningún periodo, se mantiene el ya aplicado en el
         dashboard (`fecha_desde_actual`/`fecha_hasta_actual`).
  3. CONSULTAR -- llama al método de ReportesService que YA existe para
     esa intención (ver _obtener_datos) -- nunca una query nueva.
  4. REDACTAR -- con los datos reales ya obtenidos, arma un "Reporte" de
     texto y pide a Gemini un resumen (generar_resumen_reporte). Si esta
     llamada falla, se usa una redacción propia por plantilla (_resumen_
     plantilla) -- los datos nunca se pierden por esto.

`datos` en la respuesta SIEMPRE sale del paso 3 -- Gemini jamás decide qué
datos se devuelven, solo interpretación de la consulta y redacción final.
"""

import logging
from datetime import date, timedelta

from pydantic import ValidationError
from sqlalchemy.orm import Session

from .gemini_client import (
    INTENCIONES_VALIDAS,
    GeminiNoDisponibleError,
    ProveedorIAInvalidoError,
    generar_resumen_reporte,
    interpretar_consulta_reporte,
)
from .interpretacion_reglas import completar_interpretacion, extraer_pistas
from .repository import CategoriaLecturaRepository, SucursalLecturaRepository
from .reporte_agrupado_service import ReporteAgrupadoService, resolver_ventana
from .schemas import (
    ConsultaInteligenteRequest,
    ConsultaInteligenteResponse,
    EspecificacionReporte,
    ReporteAgrupadoOut,
    FiltrosResueltosOut,
    InventarioReporteOut,
    ProductosMasVendidosReporteOut,
    ReservasReporteOut,
    ResumenReporteOut,
    VentasReporteOut,
)
from .service import (
    _LIMITE_TOP_PRODUCTOS,
    RangoFechaInvalidoError,
    ReportesService,
    SucursalInvalidaError,
)

logger = logging.getLogger(__name__)


class SucursalMencionadaNoEncontradaError(Exception):
    """El nombre de sucursal que interpretó Gemini no coincide con ninguna
    sucursal activa real -- distinto de "no mencionó ninguna" (ese caso
    simplemente mantiene la sucursal ya aplicada en el dashboard, ver
    _resolver_sucursal)."""


class SucursalAmbiguaError(Exception):
    """El nombre mencionado coincide con VARIAS sucursales activas de la
    empresa autenticada: no se elige una al azar, se pide aclaración."""

    def __init__(self, mencionado: str, nombres: list[str]):
        super().__init__(mencionado)
        self.mencionado = mencionado
        self.nombres = nombres


_MSG_IA_NO_DISPONIBLE = (
    "La consulta inteligente no está disponible en este momento. Puedes utilizar los filtros manuales."
)
_MSG_INTENCION_NO_RECONOCIDA = (
    "No pude identificar ese reporte. Puedes consultar ventas, inventario, reservas, "
    "productos más vendidos o devoluciones."
)
_MSG_SUCURSAL_NO_ENCONTRADA = "No encontré una sucursal con ese nombre."
_MSG_SIN_DATOS = "No hay información para el periodo seleccionado."

_MESES_ES = {
    "enero": 1,
    "febrero": 2,
    "marzo": 3,
    "abril": 4,
    "mayo": 5,
    "junio": 6,
    "julio": 7,
    "agosto": 8,
    "septiembre": 9,
    "setiembre": 9,
    "octubre": 10,
    "noviembre": 11,
    "diciembre": 12,
}


def _parsear_fecha_iso(valor) -> date | None:
    if not isinstance(valor, str) or not valor.strip():
        return None
    try:
        return date.fromisoformat(valor.strip())
    except ValueError:
        return None


def _resolver_periodo(
    periodo: object, mes_nombre: object, fecha_desde_ia: object, fecha_hasta_ia: object
) -> tuple[date | None, date | None]:
    """SIEMPRE calculado por Python -- nunca confía en una fecha que Gemini
    haya escrito, salvo un rango explícito de días que además sea un
    ISO-8601 válido (ver docstring del módulo)."""
    hoy = date.today()

    if periodo == "hoy":
        return hoy, hoy
    if periodo == "ayer":
        ayer = hoy - timedelta(days=1)
        return ayer, ayer
    if periodo == "esta_semana":
        return hoy - timedelta(days=hoy.weekday()), hoy
    if periodo == "este_mes":
        return hoy.replace(day=1), hoy
    if periodo == "mes_pasado":
        primer_dia_mes_actual = hoy.replace(day=1)
        ultimo_dia_mes_pasado = primer_dia_mes_actual - timedelta(days=1)
        return ultimo_dia_mes_pasado.replace(day=1), ultimo_dia_mes_pasado
    if periodo == "este_anio":
        return hoy.replace(month=1, day=1), hoy

    if isinstance(mes_nombre, str) and mes_nombre.strip():
        numero_mes = _MESES_ES.get(mes_nombre.strip().lower())
        if numero_mes is not None:
            primer_dia = date(hoy.year, numero_mes, 1)
            # Truco estándar: día 28 + 4 días siempre cae en el mes
            # siguiente; volver al día 1 de ESE mes y restar un día da el
            # último día real del mes buscado (28/29/30/31).
            ultimo_dia = (date(hoy.year, numero_mes, 28) + timedelta(days=4)).replace(day=1) - timedelta(days=1)
            return primer_dia, ultimo_dia

    desde_valida = _parsear_fecha_iso(fecha_desde_ia)
    hasta_valida = _parsear_fecha_iso(fecha_hasta_ia)
    if desde_valida is not None or hasta_valida is not None:
        if desde_valida is not None and hasta_valida is not None and desde_valida > hasta_valida:
            return hasta_valida, desde_valida
        return desde_valida, hasta_valida

    return None, None


def _encabezado_contexto(desde: date | None, hasta: date | None, sucursal_nombre: str | None) -> str:
    if desde and hasta:
        periodo = f"{desde.isoformat()} a {hasta.isoformat()}"
    elif desde:
        periodo = f"desde {desde.isoformat()}"
    elif hasta:
        periodo = f"hasta {hasta.isoformat()}"
    else:
        periodo = "todo el histórico"
    sucursal = sucursal_nombre or "todas las sucursales"
    return f"Periodo: {periodo}\nSucursal: {sucursal}\n"

_INTENCIONES_VENTAS = ("ventas", "ingresos", "ventas_por_sucursal")
# TOP por defecto cuando el Administrador no indica cuántos: el mismo de los
# endpoints existentes (5), para que "productos más vendidos" y "productos más
# vendidos por sucursal" no cambien de tamaño sin que el usuario lo pida.
_LIMITE_TOP_POR_DEFECTO = _LIMITE_TOP_PRODUCTOS
_MSG_CATEGORIA_NO_ENCONTRADA = "No encontré una categoría con ese nombre."
_MSG_CATEGORIA_NO_SOPORTADA = (
    "Por ahora solo puedo filtrar por categoría los productos más vendidos agrupados por sucursal "
    "o por categoría. ¿Quieres ese reporte?"
)
_MSG_AGRUPACION_NO_SOPORTADA = (
    "Puedo agrupar los productos más vendidos por sucursal o por categoría, y mostrar las ventas "
    "por sucursal semana a semana o mes a mes. ¿Cuál de esos reportes necesitas?"
)
_MSG_PERIODO_REQUERIDO = (
    "Para comparar sucursales por semana o mes necesito un periodo. ¿De cuándo a cuándo "
    "(por ejemplo, los últimos 3 meses)?"
)


def _normalizar_entero(valor: object) -> object:
    if isinstance(valor, float) and valor.is_integer():
        return int(valor)
    if isinstance(valor, str) and valor.strip().isdigit():
        return int(valor.strip())
    return valor


_MARCAS_RANKING_GLOBAL = ("global", "en total", "toda la empresa", "de toda", "desglos", "desagreg")


def construir_especificacion(interpretado: dict, consulta: str = "") -> EspecificacionReporte:
    """Valida lo que propuso la IA campo por campo con el modelo Pydantic:
    un valor inválido se descarta (queda el default) sin tumbar la consulta.
    Los valores de enumeración fuera de la lista cerrada nunca pasan."""
    campos = {}
    for nombre in EspecificacionReporte.model_fields:
        if nombre == "intencion" or nombre not in interpretado or interpretado[nombre] is None:
            continue
        valor = interpretado[nombre]
        if nombre == "limite":
            valor = _normalizar_entero(valor)
        if nombre == "ventana" and isinstance(valor, dict):
            valor = {**valor, "cantidad": _normalizar_entero(valor.get("cantidad"))}
        try:
            EspecificacionReporte.model_validate({nombre: valor})
        except ValidationError:
            continue
        campos[nombre] = valor
    # Guarda determinista: el TOP "global desglosado" solo se acepta si el
    # usuario lo pidió con palabras explícitas; un LLM pequeño tiende a
    # marcarlo de más ("10 más vendidos agrupados por sucursal" = TOP por
    # sucursal, no global).
    if campos.get("alcance_ranking") == "global" and not any(m in consulta.lower() for m in _MARCAS_RANKING_GLOBAL):
        campos["alcance_ranking"] = "por_grupo"
    return EspecificacionReporte.model_validate({**campos, "intencion": interpretado.get("intencion")})


def _describir_rango(desde: date | None, hasta: date | None) -> str:
    if desde and hasta:
        return f"Del {desde.isoformat()} al {hasta.isoformat()} (ambos incluidos)"
    if desde:
        return f"Desde {desde.isoformat()}"
    if hasta:
        return f"Hasta {hasta.isoformat()}"
    return "Todo el histórico de ventas"


def _resumen_plantilla_agrupado(r: ReporteAgrupadoOut) -> str:
    """Resumen redactado SOLO a partir de los datos reales del reporte."""
    partes = [f"{r.titulo}. {r.periodo.descripcion}."]
    if r.tipo == "serie_por_grupo":
        mejor =max(r.grupos, key=lambda g: g.total_ingresos)
        partes.append(f"Ingresos totales: Bs {r.total_ingresos:.2f}.")
        partes.append(f"La sucursal con mayores ingresos fue {mejor.nombre} (Bs {mejor.total_ingresos:.2f}).")
        sin = [g.nombre for g in r.grupos if g.total_ingresos <= 0]
    else:
        con_ventas = [g for g in r.grupos if g.filas]
        for g in con_ventas:
            top = g.filas[0]
            partes.append(f"En {g.nombre}: {top.etiqueta} encabeza con {top.unidades} unidades (Bs {top.ingresos:.2f}).")
        partes.append(f"Total en las filas mostradas: {r.total_unidades} unidades, Bs {r.total_ingresos:.2f}.")
        sin = [g.nombre for g in r.grupos if not g.filas]
    if sin:
        partes.append("Sin ventas en el periodo: " + ", ".join(sin) + ".")
    return " ".join(partes)


class ConsultaInteligenteService:
    def __init__(self, db: Session, empresa_id: int):
        self._reportes = ReportesService(db)
        self._sucursales = SucursalLecturaRepository(db)
        self._categorias = CategoriaLecturaRepository(db)
        self._agrupados = ReporteAgrupadoService(db)
        self._empresa_id = empresa_id

    def consultar(self, payload: ConsultaInteligenteRequest) -> ConsultaInteligenteResponse:
        try:
            interpretado = interpretar_consulta_reporte(payload.consulta)
        except ProveedorIAInvalidoError:
            # Error de configuración (IA_PROVIDER): no se tapa con las pistas.
            return self._respuesta_fallback(_MSG_IA_NO_DISPONIBLE)
        except GeminiNoDisponibleError:
            # La IA falló (JSON roto, red): se intenta con las pistas
            # deterministas del texto; si ni así hay intención, fallback.
            interpretado = extraer_pistas(payload.consulta)
            if interpretado.get("intencion") is None:
                return self._respuesta_fallback(_MSG_IA_NO_DISPONIBLE)
        interpretado = completar_interpretacion(interpretado, payload.consulta)

        intencion = interpretado.get("intencion")
        if intencion not in INTENCIONES_VALIDAS:
            return self._respuesta_fallback(_MSG_INTENCION_NO_RECONOCIDA)

        spec = construir_especificacion(interpretado, payload.consulta)
        if spec.ambiguo and spec.aclaracion:
            return self._respuesta_aclaracion(spec.aclaracion, spec)

        ruta = self._ruta_reporte(spec)
        if ruta == "no_soportado":
            return self._respuesta_aclaracion(_MSG_AGRUPACION_NO_SOPORTADA, spec)
        if ruta == "categoria_no_soportada":
            return self._respuesta_aclaracion(_MSG_CATEGORIA_NO_SOPORTADA, spec)

        desde, hasta, descripcion_periodo = self._resolver_fechas(spec, interpretado)
        if desde is None and hasta is None:
            desde, hasta = payload.fecha_desde_actual, payload.fecha_hasta_actual
            descripcion_periodo = None

        # "Comparar/ventas por sucursal" sobre un periodo acotado: serie por
        # sucursal. Sin granularidad explícita se elige según el largo del
        # periodo (<= 62 días: semana; más: mes) y se informa como supuesto.
        granularidad_por_defecto = False
        if (
            ruta == "simple"
            and desde is not None
            and hasta is not None
            and spec.granularidad is None
            and spec.categoria is None
            and (
                spec.intencion == "ventas_por_sucursal"
                or (spec.agrupacion == "sucursal" and spec.intencion in _INTENCIONES_VENTAS)
            )
        ):
            granularidad = "semana" if (hasta - desde).days <= 62 else "mes"
            spec = spec.model_copy(update={"granularidad": granularidad})
            ruta, granularidad_por_defecto = "serie", True

        # Un reporte agrupado POR sucursal no puede heredar el filtro de
        # sucursal del dashboard (anularía la agrupación): solo se filtra si
        # la consulta menciona una sucursal explícitamente.
        sucursal_actual = None if (ruta != "simple" and spec.agrupacion in (None, "sucursal")) else payload.sucursal_id_actual
        try:
            sucursal_id, sucursal_nombre = self._resolver_sucursal(interpretado.get("sucursal"), sucursal_actual)
        except SucursalMencionadaNoEncontradaError:
            return self._respuesta_fallback(_MSG_SUCURSAL_NO_ENCONTRADA)
        except SucursalAmbiguaError as ambigua:
            return self._respuesta_aclaracion(
                f"Hay varias sucursales que coinciden con «{ambigua.mencionado.strip()[:60]}»: "
                f"{', '.join(ambigua.nombres)}. ¿De cuál quieres el reporte?",
                spec,
            )

        filtros = FiltrosResueltosOut(
            sucursal_id=sucursal_id, sucursal_nombre=sucursal_nombre, fecha_desde=desde, fecha_hasta=hasta
        )

        if ruta != "simple":
            return self._consultar_agrupado(
                ruta, spec, filtros, desde, hasta, descripcion_periodo, sucursal_id, sucursal_nombre,
                granularidad_por_defecto,
            )

        try:
            datos, contexto, hay_datos = self._obtener_datos(
                intencion, desde, hasta, sucursal_id, sucursal_nombre, spec
            )
        except (RangoFechaInvalidoError, SucursalInvalidaError):
            # Defensivo -- no debería ocurrir (sucursal_id ya viene resuelto
            # y activo, y _resolver_periodo nunca invierte un rango), pero
            # ante cualquier caso raro se degrada al mismo fallback amigable
            # en vez de romper el dashboard.
            return self._respuesta_fallback(_MSG_IA_NO_DISPONIBLE)

        if not hay_datos:
            return ConsultaInteligenteResponse(
                exito=True, intencion=intencion, filtros=filtros, resumen=_MSG_SIN_DATOS, datos=datos
            )

        try:
            resumen = generar_resumen_reporte(contexto)
        except GeminiNoDisponibleError:
            resumen = self._resumen_plantilla(datos)

        return ConsultaInteligenteResponse(
            exito=True, intencion=intencion, filtros=filtros, resumen=resumen, datos=datos, especificacion=spec
        )

    @staticmethod
    def _ruta_reporte(spec: EspecificacionReporte) -> str:
        """simple | ranking | serie | no_soportado | categoria_no_soportada --
        decide qué consulta controlada ejecutar según la especificación
        validada. Un filtro de categoría solo existe en el ranking de
        productos: en cualquier otra ruta NUNCA se ignora en silencio (se
        pide aclaración en vez de devolver un reporte sin filtrar)."""
        ruta = ConsultaInteligenteService._ruta_base(spec)
        if isinstance(spec.categoria, str) and spec.categoria.strip() and ruta in ("simple", "serie"):
            return "categoria_no_soportada"
        return ruta

    @staticmethod
    def _ruta_base(spec: EspecificacionReporte) -> str:
        intencion = spec.intencion
        if intencion == "productos_mas_vendidos" and spec.agrupacion is not None:
            return "ranking"
        if spec.granularidad is not None:
            if intencion in _INTENCIONES_VENTAS and spec.agrupacion in (None, "sucursal"):
                return "serie"
            return "no_soportado"
        if spec.agrupacion is not None:
            # Agrupar ventas por sucursal ya lo resuelven los reportes existentes.
            if spec.agrupacion == "sucursal" and intencion in _INTENCIONES_VENTAS:
                return "simple"
            return "no_soportado"
        return "simple"

    @staticmethod
    def _resolver_fechas(spec: EspecificacionReporte, interpretado: dict):
        if spec.ventana is not None:
            return resolver_ventana(spec.ventana.cantidad, spec.ventana.unidad)
        desde, hasta = _resolver_periodo(
            interpretado.get("periodo"),
            interpretado.get("mes_nombre"),
            interpretado.get("fecha_desde"),
            interpretado.get("fecha_hasta"),
        )
        if desde is None and hasta is None:
            return None, None, None
        return desde, hasta, _describir_rango(desde, hasta)

    def _consultar_agrupado(
        self, ruta, spec, filtros, desde, hasta, descripcion_periodo, sucursal_id, sucursal_nombre,
        granularidad_por_defecto: bool = False,
    ) -> ConsultaInteligenteResponse:
        filtros_aplicados = [f"Sucursal: {sucursal_nombre}" if sucursal_nombre else "Sucursales: todas"]
        supuestos: list[str] = []
        if granularidad_por_defecto:
            supuestos.append(
                f"No indicaste el detalle: agrupé las ventas por {spec.granularidad} según el largo del periodo."
            )
        categoria_id = None
        if isinstance(spec.categoria, str) and spec.categoria.strip():
            coincidencias = self._categorias.buscar_coincidencias(spec.categoria, self._empresa_id)
            if not coincidencias:
                return self._respuesta_fallback(_MSG_CATEGORIA_NO_ENCONTRADA)
            if len(coincidencias) > 1:
                return self._respuesta_aclaracion(
                    f"Hay varias categorías que coinciden con «{spec.categoria.strip()[:60]}»: "
                    f"{', '.join(c.nombre for c in coincidencias)}. ¿De cuál quieres el reporte?",
                    spec,
                )
            categoria = coincidencias[0]
            categoria_id = categoria.id
            filtros_aplicados.append(f"Categoría: {categoria.nombre}")
        if desde is None and hasta is None:
            if ruta == "serie":
                return self._respuesta_aclaracion(_MSG_PERIODO_REQUERIDO, spec)
            descripcion_periodo = "Todo el histórico de ventas"
        descripcion_periodo = descripcion_periodo or _describir_rango(desde, hasta)
        filtros_aplicados.append("Solo ventas PAGADAS de tu empresa")

        try:
            if ruta == "ranking":
                limite = spec.limite or _LIMITE_TOP_POR_DEFECTO
                alcance = spec.alcance_ranking or "por_grupo"
                nombre_grupo = "sucursal" if spec.agrupacion == "sucursal" else "categoría"
                if spec.alcance_ranking is None:
                    supuestos.append(
                        f"Interpreté el ranking como el TOP {limite} dentro de cada {nombre_grupo} (no un TOP global)."
                    )
                if spec.limite is None:
                    supuestos.append(f"No indicaste cuántos: usé TOP {_LIMITE_TOP_POR_DEFECTO}.")
                reporte = self._agrupados.ranking_productos(
                    empresa_id=self._empresa_id, desde=desde, hasta=hasta, descripcion_periodo=descripcion_periodo,
                    sucursal_id=sucursal_id, agrupacion=spec.agrupacion, limite=limite, metrica=spec.metrica,
                    orden=spec.orden, alcance=alcance, categoria_id=categoria_id,
                    filtros_aplicados=filtros_aplicados, supuestos=supuestos,
                )
            else:
                reporte = self._agrupados.serie_ventas_por_sucursal(
                    empresa_id=self._empresa_id, desde=desde, hasta=hasta, descripcion_periodo=descripcion_periodo,
                    sucursal_id=sucursal_id, granularidad=spec.granularidad,
                    filtros_aplicados=filtros_aplicados, supuestos=supuestos,
                )
        except (RangoFechaInvalidoError, SucursalInvalidaError):
            return self._respuesta_fallback(_MSG_IA_NO_DISPONIBLE)

        hay_datos = any(
            (f.unidades or 0) > 0 or f.ingresos > 0 or (f.ventas or 0) > 0 for g in reporte.grupos for f in g.filas
        )
        if not hay_datos:
            resumen = f"No hay ventas registradas para este reporte en el periodo. {descripcion_periodo}."
        else:
            # Narrativa DETERMINISTA: solo cifras del resultado, sin riesgo de
            # que un LLM confunda unidades con ventas o invente conclusiones.
            resumen = _resumen_plantilla_agrupado(reporte)
        return ConsultaInteligenteResponse(
            exito=True, intencion=spec.intencion, filtros=filtros, resumen=resumen, datos=None,
            reporte_agrupado=reporte, especificacion=spec,
        )

    def _resolver_sucursal(self, nombre_mencionado: object, sucursal_id_actual: int | None):
        """Devuelve (sucursal_id, sucursal_nombre) -- ambos None cuando no
        aplica ningún filtro de sucursal. Lanza
        SucursalMencionadaNoEncontradaError cuando SÍ mencionó un nombre
        pero no coincide con ninguna sucursal activa real de la empresa, y
        SucursalAmbiguaError cuando coincide con varias."""
        if isinstance(nombre_mencionado, str) and nombre_mencionado.strip():
            coincidencias = self._sucursales.buscar_coincidencias(nombre_mencionado, self._empresa_id)
            if not coincidencias:
                raise SucursalMencionadaNoEncontradaError
            if len(coincidencias) > 1:
                raise SucursalAmbiguaError(nombre_mencionado, [s.nombre for s in coincidencias])
            return coincidencias[0].id, coincidencias[0].nombre

        if sucursal_id_actual is not None:
            sucursal = self._sucursales.get_activa(sucursal_id_actual, self._empresa_id)
            if sucursal is not None:
                return sucursal.id, sucursal.nombre

        return None, None

    def _obtener_datos(
        self,
        intencion: str,
        desde: date | None,
        hasta: date | None,
        sucursal_id: int | None,
        sucursal_nombre: str | None,
        spec: EspecificacionReporte | None = None,
    ):
        encabezado = _encabezado_contexto(desde, hasta, sucursal_nombre)

        if intencion in ("resumen_general", "devoluciones_cambios"):
            datos = self._reportes.resumen(desde, hasta, sucursal_id, self._empresa_id)
            contexto = (
                f"{encabezado}"
                f"Ingresos: Bs {datos.ingresos:.2f}\n"
                f"Ventas realizadas: {datos.ventas_realizadas}\n"
                f"Productos vendidos: {datos.productos_vendidos}\n"
                f"Reservas atendidas: {datos.reservas_atendidas}\n"
                f"Devoluciones: {datos.devoluciones}\n"
                f"Cambios: {datos.cambios}\n"
                f"Variantes con stock bajo: {datos.stock_bajo}"
            )
            if intencion == "devoluciones_cambios":
                hay_datos = datos.devoluciones > 0 or datos.cambios > 0
            else:
                hay_datos = (
                    datos.ventas_realizadas > 0
                    or datos.reservas_atendidas > 0
                    or datos.devoluciones > 0
                    or datos.cambios > 0
                )
            return datos, contexto, hay_datos

        if intencion in ("ventas", "ingresos", "ventas_por_sucursal", "ventas_por_metodo_pago", "ventas_por_tipo"):
            datos = self._reportes.ventas(desde, hasta, sucursal_id, self._empresa_id)
            lineas = [
                encabezado,
                f"Ingresos totales: Bs {datos.ingresos_totales:.2f}",
                f"Ventas totales: {datos.ventas_totales}",
            ]
            if datos.por_tipo:
                lineas.append(
                    "Por tipo: " + ", ".join(f"{p.tipo} {p.ventas} (Bs {p.ingresos:.2f})" for p in datos.por_tipo)
                )
            if datos.por_metodo_pago:
                lineas.append(
                    "Por método de pago: "
                    + ", ".join(f"{p.metodo} {p.ventas} (Bs {p.ingresos:.2f})" for p in datos.por_metodo_pago)
                )
            if datos.por_sucursal:
                lineas.append(
                    "Por sucursal: " + ", ".join(f"{p.sucursal} Bs {p.ingresos:.2f}" for p in datos.por_sucursal)
                )
            return datos, "\n".join(lineas), datos.ventas_totales > 0

        if intencion == "productos_mas_vendidos":
            datos = self._reportes.productos_mas_vendidos(
                desde, hasta, sucursal_id, self._empresa_id,
                limite=(spec.limite if spec and spec.limite else None),
                metrica=(spec.metrica if spec else "unidades"),
                orden=(spec.orden if spec else "desc"),
            )
            if datos.productos:
                contexto = encabezado + "Productos más vendidos:\n" + "\n".join(
                    f"- {p.nombre}: {p.unidades} unidades, Bs {p.ingresos:.2f}" for p in datos.productos
                )
            else:
                contexto = encabezado + "Sin productos vendidos en el periodo."
            return datos, contexto, len(datos.productos) > 0

        if intencion in ("inventario", "stock_bajo"):
            datos = self._reportes.inventario(sucursal_id, self._empresa_id)
            lineas = [
                f"Sucursal: {sucursal_nombre or 'todas las sucursales'}",
                f"Stock físico total: {datos.stock_fisico_total}",
                f"Stock reservado: {datos.stock_reservado_total}",
                f"Stock disponible: {datos.stock_disponible_total}",
                f"Umbral de stock bajo: {datos.umbral_stock_bajo}",
            ]
            if datos.stock_bajo:
                lineas.append(
                    "Variantes con stock bajo: "
                    + ", ".join(
                        f"{i.producto} ({i.color}/{i.talla}) en {i.sucursal}: {i.disponible}"
                        for i in datos.stock_bajo
                    )
                )
            else:
                lineas.append("Sin variantes con stock bajo.")
            contexto = "\n".join(lineas)
            hay_datos = datos.stock_fisico_total > 0 if intencion == "inventario" else len(datos.stock_bajo) > 0
            return datos, contexto, hay_datos

        if intencion == "reservas":
            datos = self._reportes.reservas(desde, hasta, sucursal_id, self._empresa_id)
            contexto = (
                f"{encabezado}"
                f"Reservas creadas: {datos.creadas}\n"
                f"Atendidas: {datos.atendidas}\n"
                f"Canceladas: {datos.canceladas}\n"
                f"Vencidas: {datos.vencidas}"
            )
            return datos, contexto, datos.creadas > 0

        # No debería llegar acá -- `intencion` ya se validó contra la lista
        # cerrada (gemini_client.INTENCIONES_VALIDAS) antes de este método.
        raise AssertionError(f"CU30 -- intención sin manejar: {intencion!r}")

    @staticmethod
    def _resumen_plantilla(datos) -> str:
        if isinstance(datos, ResumenReporteOut):
            return f"Ingresos: Bs {datos.ingresos:.2f}. Ventas realizadas: {datos.ventas_realizadas}."
        if isinstance(datos, VentasReporteOut):
            return f"Ingresos totales: Bs {datos.ingresos_totales:.2f} en {datos.ventas_totales} ventas."
        if isinstance(datos, ProductosMasVendidosReporteOut):
            principal = datos.productos[0]
            return f"El producto más vendido fue {principal.nombre}, con {principal.unidades} unidades."
        if isinstance(datos, InventarioReporteOut):
            return (
                f"Stock disponible: {datos.stock_disponible_total} unidades. "
                f"{len(datos.stock_bajo)} variante(s) con stock bajo."
            )
        if isinstance(datos, ReservasReporteOut):
            return f"Reservas creadas: {datos.creadas}, atendidas: {datos.atendidas}."
        return "Datos obtenidos correctamente."  # pragma: no cover - defensivo

    @staticmethod
    def _respuesta_aclaracion(pregunta: str, spec: EspecificacionReporte) -> ConsultaInteligenteResponse:
        return ConsultaInteligenteResponse(
            exito=False, intencion=spec.intencion, filtros=None, resumen=pregunta, datos=None,
            especificacion=spec, requiere_aclaracion=True,
        )

    @staticmethod
    def _respuesta_fallback(mensaje: str) -> ConsultaInteligenteResponse:
        return ConsultaInteligenteResponse(exito=False, intencion=None, filtros=None, resumen=mensaje, datos=None)
