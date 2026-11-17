"""Reportes dinámicos de CU30 (consulta inteligente): rankings por grupo y
series por sucursal.

La IA solo propone una EspecificacionReporte (ver schemas.py); aquí se
ejecutan consultas SQLAlchemy CONTROLADAS (repository.py) y se arma la
respuesta estructurada. Nada de SQL generado por la IA, nada de datos
inventados: un grupo sin ventas se informa vacío, no se rellena.
"""

from datetime import date, timedelta
from decimal import Decimal

from sqlalchemy.orm import Session

from .repository import SucursalLecturaRepository, VentasReporteRepository
from .schemas import (
    FilaReporteOut,
    GrupoReporteOut,
    PeriodoReporteOut,
    ReporteAgrupadoOut,
)

_NOMBRE_METRICA = {"unidades": "unidades vendidas", "ingresos": "ingresos (Bs)"}


def restar_meses(base: date, meses: int) -> date:
    """Resta `meses` calendario; si el día no existe en el mes destino se usa
    el último día de ese mes (31-mar menos 1 mes -> 28/29-feb)."""
    indice = base.year * 12 + (base.month - 1) - meses
    anio, mes0 = divmod(indice, 12)
    mes = mes0 + 1
    siguiente = date(anio + (mes // 12), (mes % 12) + 1, 1)
    ultimo_dia = (siguiente - timedelta(days=1)).day
    return date(anio, mes, min(base.day, ultimo_dia))


def resolver_ventana(cantidad: int, unidad: str, hoy: date | None = None) -> tuple[date, date, str]:
    """Definición EXPLÍCITA de "últimos N <unidad>": ventana INCLUSIVA que
    termina hoy y empieza el día siguiente a (hoy - N unidades).
    Ej. hoy=2026-11-16, 10 meses -> 2026-01-17 .. 2026-11-16."""
    hoy = hoy or date.today()
    if unidad == "dias":
        inicio = hoy - timedelta(days=cantidad - 1)
    elif unidad == "semanas":
        inicio = hoy - timedelta(days=cantidad * 7 - 1)
    elif unidad == "meses":
        inicio = restar_meses(hoy, cantidad) + timedelta(days=1)
    else:  # anios
        inicio = restar_meses(hoy, cantidad * 12) + timedelta(days=1)
    descripcion = (
        f"Últimos {cantidad} {unidad}: del {inicio.isoformat()} al {hoy.isoformat()} (ambos incluidos)"
    )
    return inicio, hoy, descripcion


def _etiquetas_periodo(desde: date, hasta: date, granularidad: str) -> list[str]:
    """Todos los periodos del rango (para que cada sucursal tenga la misma
    serie; un periodo sin ventas queda en 0 REAL, no inventado)."""
    if granularidad == "mes":
        etiquetas, anio, mes = [], desde.year, desde.month
        while (anio, mes) <= (hasta.year, hasta.month):
            etiquetas.append(f"{anio:04d}-{mes:02d}")
            anio, mes = (anio + 1, 1) if mes == 12 else (anio, mes + 1)
        return etiquetas
    lunes = desde - timedelta(days=desde.weekday())
    etiquetas = []
    while lunes <= hasta:
        etiquetas.append(lunes.isoformat())
        lunes += timedelta(days=7)
    return etiquetas


class ReporteAgrupadoService:
    def __init__(self, db: Session):
        self._ventas = VentasReporteRepository(db)
        self._sucursales = SucursalLecturaRepository(db)

    def ranking_productos(
        self,
        *,
        empresa_id: int,
        desde: date | None,
        hasta: date | None,
        descripcion_periodo: str,
        sucursal_id: int | None,
        agrupacion: str,
        limite: int,
        metrica: str,
        orden: str,
        alcance: str,
        categoria_id: int | None,
        filtros_aplicados: list[str],
        supuestos: list[str],
    ) -> ReporteAgrupadoOut:
        if alcance == "global":
            filas = self._ventas.ranking_global_desglosado(
                desde, hasta, sucursal_id, empresa_id, agrupacion, limite, metrica, orden, categoria_id
            )
        else:
            filas = self._ventas.ranking_productos_por_grupo(
                desde, hasta, sucursal_id, empresa_id, agrupacion, limite, metrica, orden, categoria_id
            )

        grupos: dict[int, GrupoReporteOut] = {}
        for f in filas:
            g = grupos.get(f["gid"])
            if g is None:
                g = grupos[f["gid"]] = GrupoReporteOut(
                    id=f["gid"],
                    nombre=f["gnombre"],
                    filas=[],
                    total_unidades=0,
                    total_ingresos=0.0,
                    total_grupo_unidades=f.get("tg_unidades"),
                    total_grupo_ingresos=float(f["tg_ingresos"]) if "tg_ingresos" in f else None,
                )
            g.filas.append(
                FilaReporteOut(
                    posicion=f["rn"], etiqueta=f["pnombre"], id=f["pid"],
                    unidades=f["unidades"], ingresos=float(f["ingresos"]),
                )
            )
            g.total_unidades += f["unidades"]
            g.total_ingresos = float(Decimal(str(g.total_ingresos)) + f["ingresos"])

        lista = list(grupos.values())
        if alcance == "global":
            for g in lista:  # en el desglose global las filas van por posición global
                g.filas.sort(key=lambda x: (x.posicion or 0, x.etiqueta))
        else:
            lista.sort(key=lambda g: g.nombre)

        # Sucursales activas sin ventas: se informan vacías (no se inventa nada).
        if agrupacion == "sucursal":
            activas = self._sucursales.listar_activas(empresa_id)
            presentes = {g.id for g in lista}
            for s in activas:
                if s.id not in presentes and (sucursal_id is None or s.id == sucursal_id):
                    lista.append(GrupoReporteOut(id=s.id, nombre=s.nombre, filas=[], total_unidades=0,
                                                 total_ingresos=0.0, total_grupo_unidades=0, total_grupo_ingresos=0.0))
            lista.sort(key=lambda g: g.nombre)

        if alcance == "global":
            # total global = suma del desglose de los productos del TOP.
            total_u = sum(g.total_unidades or 0 for g in lista)
            total_i = float(sum((Decimal(str(g.total_ingresos)) for g in lista), Decimal(0)))
            for g in lista:  # en global el "total del grupo" no aplica
                g.total_grupo_unidades = None
                g.total_grupo_ingresos = None
        else:
            total_u = sum(g.total_unidades or 0 for g in lista)
            total_i = float(sum((Decimal(str(g.total_ingresos)) for g in lista), Decimal(0)))

        nombre_grupo = "sucursal" if agrupacion == "sucursal" else "categoría"
        sentido = "más" if orden == "desc" else "menos"
        if alcance == "global":
            titulo = f"Top {limite} global de productos {sentido} vendidos, desglosado por {nombre_grupo}"
        else:
            titulo = f"Top {limite} productos {sentido} vendidos por cada {nombre_grupo}"

        return ReporteAgrupadoOut(
            tipo="ranking_global_desglosado" if alcance == "global" else "ranking_por_grupo",
            titulo=titulo,
            metrica=metrica,  # type: ignore[arg-type]
            agrupacion=agrupacion,
            limite=limite,
            orden=orden,  # type: ignore[arg-type]
            periodo=PeriodoReporteOut(fecha_desde=desde, fecha_hasta=hasta, descripcion=descripcion_periodo),
            filtros_aplicados=filtros_aplicados,
            supuestos=supuestos,
            grupos=lista,
            total_unidades=total_u,
            total_ingresos=total_i,
            grafico="barras_por_grupo",
        )

    def serie_ventas_por_sucursal(
        self,
        *,
        empresa_id: int,
        desde: date,
        hasta: date,
        descripcion_periodo: str,
        sucursal_id: int | None,
        granularidad: str,
        filtros_aplicados: list[str],
        supuestos: list[str],
    ) -> ReporteAgrupadoOut:
        filas = self._ventas.serie_por_sucursal(desde, hasta, sucursal_id, empresa_id, granularidad)
        etiquetas = _etiquetas_periodo(desde, hasta, granularidad)

        por_sucursal: dict[int, dict] = {}
        for sid, nombre, periodo, ingresos, n in filas:
            por_sucursal.setdefault(sid, {"nombre": nombre, "datos": {}})["datos"][periodo] = (ingresos, n)
        # Sucursales activas sin ninguna venta: aparecen con la serie en 0.
        for s in self._sucursales.listar_activas(empresa_id):
            if sucursal_id is None or s.id == sucursal_id:
                por_sucursal.setdefault(s.id, {"nombre": s.nombre, "datos": {}})

        grupos: list[GrupoReporteOut] = []
        for sid, info in sorted(por_sucursal.items(), key=lambda kv: kv[1]["nombre"]):
            filas_g, total_i, total_v = [], Decimal(0), 0
            for etiqueta in etiquetas:
                ingresos, n = info["datos"].get(etiqueta, (Decimal(0), 0))
                filas_g.append(FilaReporteOut(etiqueta=etiqueta, ingresos=float(ingresos), ventas=n))
                total_i += ingresos
                total_v += n
            grupos.append(
                GrupoReporteOut(
                    id=sid, nombre=info["nombre"], filas=filas_g,
                    total_unidades=None, total_ingresos=float(total_i),
                    total_grupo_unidades=None, total_grupo_ingresos=float(total_i),
                )
            )
        total_ingresos = float(sum((Decimal(str(g.total_ingresos)) for g in grupos), Decimal(0)))
        return ReporteAgrupadoOut(
            tipo="serie_por_grupo",
            titulo=f"Ventas por sucursal y por {granularidad}",
            metrica="ingresos",
            agrupacion="sucursal",
            limite=None,
            orden="desc",
            granularidad=granularidad,
            periodo=PeriodoReporteOut(fecha_desde=desde, fecha_hasta=hasta, descripcion=descripcion_periodo),
            filtros_aplicados=filtros_aplicados,
            supuestos=supuestos,
            grupos=grupos,
            total_unidades=None,
            total_ingresos=total_ingresos,
            grafico="lineas_por_grupo",
        )
