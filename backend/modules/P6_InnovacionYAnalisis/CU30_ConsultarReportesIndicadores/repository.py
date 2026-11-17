"""Acceso a datos de CU30 -- Consultar reportes e indicadores (Administrador).

Solo lectura -- reutiliza Venta/VentaDetalle/Pago (CU22-CU25), StockSucursal
(CU08/CU14/CU17), Reserva (CU17-CU20), DevolucionCambio (CU26) y Sucursal
(CU06) tal cual existen. Ninguna tabla propia, ninguna escritura.

Toda agregación (sumas, conteos, agrupaciones, rankings) se hace aquí, en
SQL -- nunca se traen filas sueltas a Python para sumarlas ahí (salvo el
ranking de productos y la lista de stock bajo, que ya vienen acotados por
LIMIT en la propia consulta).
"""

import re
import unicodedata
from datetime import date, datetime, time, timedelta, timezone
from decimal import Decimal

from sqlalchemy import Date, and_, cast, func, select
from sqlalchemy.orm import Session

from modules.P1_SucursalesYCatalogos.Models.color import Color
from modules.P1_SucursalesYCatalogos.Models.producto import Producto
from modules.P1_SucursalesYCatalogos.Models.producto_variante import ProductoVariante
from modules.P1_SucursalesYCatalogos.Models.stock_sucursal import StockSucursal
from modules.P1_SucursalesYCatalogos.Models.sucursal import Sucursal
from modules.P1_SucursalesYCatalogos.Models.talla import Talla
from modules.P4_ReservasYAtencion.Models.reserva import Reserva
from modules.P5_ComprasVentasYPagos.Models.devolucion import DevolucionCambio
from modules.P5_ComprasVentasYPagos.Models.pago import EstadoPago, Pago
from modules.P5_ComprasVentasYPagos.Models.venta import EstadoVenta, Venta, VentaDetalle


def _inicio_del_dia(dia: date) -> datetime:
    return datetime.combine(dia, time.min, tzinfo=timezone.utc)


def _inicio_del_dia_siguiente(dia: date) -> datetime:
    return _inicio_del_dia(dia) + timedelta(days=1)


def normalizar_nombre(valor: str) -> str:
    """Minúsculas, sin tildes, sin signos y con espacios simples: "El  Bajío!"
    -> "el bajio". Solo para COMPARAR nombres; nunca se muestra al usuario."""
    sin_tildes = "".join(c for c in unicodedata.normalize("NFD", valor.lower()) if unicodedata.category(c) != "Mn")
    return " ".join(re.sub(r"[^a-z0-9]+", " ", sin_tildes).split())


def coincidencias_por_nombre(nombre: str, sucursales: list) -> list:
    """Sucursales o categorías (cualquier objeto con `.nombre`, ya limitado a
    los de la empresa) que corresponden al nombre mencionado, por PALABRAS
    COMPLETAS -- nunca por fragmentos dentro
    de una palabra ("Este" jamás coincide con "Oeste"). Tres niveles; se usa
    el primero que tenga coincidencias:
      1. nombre idéntico una vez normalizado ("canoto" = "Cañoto");
      2. lo mencionado son palabras completas del nombre de la sucursal
         ("Mall" -> "Mall Ventura");
      3. el nombre de la sucursal son palabras completas de lo mencionado
         ("la sucursal El Bajío" -> "El bajío").
    Devuelve [] si no hay ninguna, y más de una si es ambiguo (el llamador
    debe pedir aclaración en vez de elegir una al azar)."""
    objetivo = normalizar_nombre(nombre)
    if not objetivo:
        return []
    palabras_objetivo = objetivo.split()
    candidatas = [(s, normalizar_nombre(s.nombre)) for s in sucursales]
    candidatas = [(s, n) for s, n in candidatas if n]

    exactas = [s for s, n in candidatas if n == objetivo]
    if exactas:
        return exactas
    contenidas = [s for s, n in candidatas if set(palabras_objetivo) <= set(n.split())]
    if contenidas:
        return contenidas
    return [s for s, n in candidatas if set(n.split()) <= set(palabras_objetivo)]


class SucursalLecturaRepository:
    def __init__(self, db: Session):
        self.db = db

    def listar_activas(self, empresa_id: int) -> list[Sucursal]:
        stmt = select(Sucursal).where(Sucursal.is_active.is_(True), Sucursal.empresa_id == empresa_id).order_by(Sucursal.nombre)
        return list(self.db.execute(stmt).scalars().all())

    def get_activa(self, sucursal_id: int, empresa_id: int) -> Sucursal | None:
        stmt = select(Sucursal).where(Sucursal.id == sucursal_id, Sucursal.empresa_id == empresa_id, Sucursal.is_active.is_(True))
        return self.db.execute(stmt).scalar_one_or_none()

    def buscar_coincidencias(self, nombre: str, empresa_id: int) -> list[Sucursal]:
        """Resuelve el nombre libre que devuelve la IA (CU30, consulta
        inteligente) contra las sucursales REALES ACTIVAS DE LA EMPRESA
        AUTENTICADA (listar_activas filtra por empresa_id). Coincidencia por
        palabras completas -- ver coincidencias_por_nombre. Puede devolver
        0 (no existe), 1 (resuelta) o varias (ambigua)."""
        return coincidencias_por_nombre(nombre, self.listar_activas(empresa_id))

    def buscar_por_nombre(self, nombre: str, empresa_id: int) -> Sucursal | None:
        """La sucursal si la coincidencia es ÚNICA; None si no existe o si es
        ambigua (para distinguirlo, usar buscar_coincidencias). Nunca elige
        una al azar entre varias."""
        coincidencias = self.buscar_coincidencias(nombre, empresa_id)
        return coincidencias[0] if len(coincidencias) == 1 else None


class CategoriaLecturaRepository:
    def __init__(self, db: Session):
        self.db = db

    def buscar_coincidencias(self, nombre: str, empresa_id: int) -> list:
        """Categorías DE LA EMPRESA AUTENTICADA (filtro por empresa_id) que
        corresponden al nombre mencionado, con la misma coincidencia por
        palabras completas que las sucursales (coincidencias_por_nombre):
        "Pantalón" NO coincide con "Pantalones". Puede devolver 0 (no
        existe), 1 (resuelta) o varias (ambigua)."""
        from modules.P1_SucursalesYCatalogos.Models.categoria import Categoria

        stmt = select(Categoria).where(Categoria.empresa_id == empresa_id).order_by(Categoria.nombre)
        return coincidencias_por_nombre(nombre, list(self.db.execute(stmt).scalars().all()))

    def buscar_por_nombre(self, nombre: str, empresa_id: int):
        """La categoría si la coincidencia es ÚNICA; None si no existe o es
        ambigua (para distinguirlo, usar buscar_coincidencias)."""
        coincidencias = self.buscar_coincidencias(nombre, empresa_id)
        return coincidencias[0] if len(coincidencias) == 1 else None


class VentasReporteRepository:
    """Solo ventas Venta.estado == PAGADA -- nunca PENDIENTE_PAGO (no existe
    un estado "fallida"/"cancelada" separado en este modelo: un pago
    fallido/cancelado simplemente deja la Venta en PENDIENTE_PAGO, ver
    Models/venta.py -- filtrar por PAGADA ya excluye todo lo demás)."""

    def __init__(self, db: Session):
        self.db = db

    def _filtros(self, stmt, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int,
                 categoria_id: int | None = None, producto_id: int | None = None):
        stmt = stmt.where(Venta.estado == EstadoVenta.PAGADA, Venta.empresa_id == empresa_id)
        if desde is not None:
            stmt = stmt.where(Venta.fecha_creacion >= _inicio_del_dia(desde))
        if hasta is not None:
            stmt = stmt.where(Venta.fecha_creacion < _inicio_del_dia_siguiente(hasta))
        if sucursal_id is not None:
            stmt = stmt.where(Venta.sucursal_id == sucursal_id)
        if categoria_id is not None:
            stmt = stmt.where(Producto.categoria_id == categoria_id)
        if producto_id is not None:
            stmt = stmt.where(ProductoVariante.producto_id == producto_id)
        return stmt

    def totales(self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int) -> tuple[Decimal, int]:
        stmt = self._filtros(
            select(func.coalesce(func.sum(Venta.total), 0), func.count(Venta.id)), desde, hasta, sucursal_id, empresa_id
        )
        ingresos, conteo = self.db.execute(stmt).one()
        return Decimal(ingresos), int(conteo)

    def productos_vendidos(self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int) -> int:
        stmt = (
            select(func.coalesce(func.sum(VentaDetalle.cantidad), 0))
            .select_from(VentaDetalle)
            .join(Venta, Venta.id == VentaDetalle.venta_id)
        )
        stmt = self._filtros(stmt, desde, hasta, sucursal_id, empresa_id)
        return int(self.db.execute(stmt).scalar_one())

    def por_periodo(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, granularidad: str, empresa_id: int
    ) -> list[tuple[str, Decimal, int]]:
        columna = (
            func.to_char(Venta.fecha_creacion, "YYYY-MM")
            if granularidad == "mes"
            else cast(Venta.fecha_creacion, Date)
        )
        columna = columna.label("periodo")
        stmt = self._filtros(
            select(columna, func.sum(Venta.total), func.count(Venta.id)), desde, hasta, sucursal_id, empresa_id
        )
        stmt = stmt.group_by(columna).order_by(columna)
        filas = self.db.execute(stmt).all()
        return [(str(periodo), Decimal(ingresos), int(conteo)) for periodo, ingresos, conteo in filas]

    def por_tipo(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int
    ) -> list[tuple[str, int, Decimal]]:
        stmt = self._filtros(
            select(Venta.tipo, func.count(Venta.id), func.sum(Venta.total)), desde, hasta, sucursal_id, empresa_id
        )
        stmt = stmt.group_by(Venta.tipo).order_by(Venta.tipo)
        filas = self.db.execute(stmt).all()
        return [(tipo.value, int(conteo), Decimal(ingresos)) for tipo, conteo, ingresos in filas]

    def por_metodo_pago(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int
    ) -> list[tuple[str, int, Decimal]]:
        """Un único Pago PAGADO por Venta (ver Models/pago.py) -- join
        directo, sin riesgo de duplicar una venta por tener varios intentos
        de pago (los fallidos/cancelados nunca llegan a PAGADO)."""
        stmt = (
            select(Pago.proveedor, func.count(Venta.id), func.sum(Venta.total))
            .select_from(Venta)
            .join(Pago, (Pago.venta_id == Venta.id) & (Pago.estado == EstadoPago.PAGADO))
        )
        stmt = self._filtros(stmt, desde, hasta, sucursal_id, empresa_id)
        stmt = stmt.group_by(Pago.proveedor).order_by(Pago.proveedor)
        filas = self.db.execute(stmt).all()
        return [(proveedor.value, int(conteo), Decimal(ingresos)) for proveedor, conteo, ingresos in filas]

    def por_sucursal(self, desde: date | None, hasta: date | None, empresa_id: int) -> list[tuple[int, str, int, Decimal]]:
        """Todas las sucursales ACTIVAS, incluso con 0 ventas en el periodo
        (LEFT JOIN con los filtros de fecha/estado en el ON, no en el WHERE
        -- así una sucursal sin ventas sigue apareciendo en la comparación
        en vez de desaparecer de la lista). Solo se llama cuando el filtro
        del reporte es "Todas las sucursales" (ver service.py)."""
        condiciones = [Venta.sucursal_id == Sucursal.id, Venta.estado == EstadoVenta.PAGADA, Venta.empresa_id == empresa_id]
        if desde is not None:
            condiciones.append(Venta.fecha_creacion >= _inicio_del_dia(desde))
        if hasta is not None:
            condiciones.append(Venta.fecha_creacion < _inicio_del_dia_siguiente(hasta))
        stmt = (
            select(Sucursal.id, Sucursal.nombre, func.count(Venta.id), func.coalesce(func.sum(Venta.total), 0))
            .select_from(Sucursal)
            .join(Venta, and_(*condiciones), isouter=True)
            .where(Sucursal.is_active.is_(True), Sucursal.empresa_id == empresa_id)
            .group_by(Sucursal.id, Sucursal.nombre)
            .order_by(func.coalesce(func.sum(Venta.total), 0).desc())
        )
        filas = self.db.execute(stmt).all()
        return [(sid, nombre, int(conteo), Decimal(ingresos)) for sid, nombre, conteo, ingresos in filas]

    def top_productos(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, limite: int, empresa_id: int,
        metrica: str = "unidades", orden: str = "desc",
    ) -> list[tuple[int, str, int, Decimal]]:
        """Unidades/ingresos históricos de VentaDetalle (precio congelado al
        momento de la venta, ver Models/venta.py) -- NUNCA el precio_venta
        actual del catálogo."""
        stmt = (
            select(
                Producto.id,
                Producto.nombre,
                func.sum(VentaDetalle.cantidad),
                func.sum(VentaDetalle.subtotal),
            )
            .select_from(VentaDetalle)
            .join(Venta, Venta.id == VentaDetalle.venta_id)
            .join(ProductoVariante, ProductoVariante.id == VentaDetalle.producto_variante_id)
            .join(Producto, Producto.id == ProductoVariante.producto_id)
        )
        stmt = self._filtros(stmt, desde, hasta, sucursal_id, empresa_id)
        valor = func.sum(VentaDetalle.cantidad) if metrica == "unidades" else func.sum(VentaDetalle.subtotal)
        stmt = (
            stmt.group_by(Producto.id, Producto.nombre)
            .order_by(valor.desc() if orden == "desc" else valor.asc(), Producto.nombre, Producto.id)
            .limit(limite)
        )
        filas = self.db.execute(stmt).all()
        return [(pid, nombre, int(unidades), Decimal(ingresos)) for pid, nombre, unidades, ingresos in filas]

    def ventas_por_semana(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int
    ) -> list[tuple[str, Decimal, int]]:
        """Ventas agrupadas por semana (ISO 8601) del rango de fechas."""
        columna = (
            func.to_char(Venta.fecha_creacion, "YYYY-IW")
            .label("semana")
        )
        stmt = self._filtros(
            select(columna, func.sum(Venta.total), func.count(Venta.id)), desde, hasta, sucursal_id, empresa_id
        )
        stmt = stmt.group_by(columna).order_by(columna)
        filas = self.db.execute(stmt).all()
        return [(semana, Decimal(ingresos), int(conteo)) for semana, ingresos, conteo in filas]

    def ventas_por_categoria(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int
    ) -> list[tuple[int, str, int, Decimal]]:
        """Ventas agrupadas por categoría de producto."""
        from modules.P1_SucursalesYCatalogos.Models.categoria import Categoria
        stmt = (
            select(
                Producto.categoria_id,
                Categoria.nombre,
                func.sum(VentaDetalle.cantidad),
                func.sum(VentaDetalle.subtotal),
            )
            .select_from(VentaDetalle)
            .join(Venta, Venta.id == VentaDetalle.venta_id)
            .join(ProductoVariante, ProductoVariante.id == VentaDetalle.producto_variante_id)
            .join(Producto, Producto.id == ProductoVariante.producto_id)
            .join(Categoria, Categoria.id == Producto.categoria_id)
        )
        stmt = self._filtros(stmt, desde, hasta, sucursal_id, empresa_id)
        stmt = (
            stmt.group_by(Producto.categoria_id, Categoria.nombre)
            .order_by(func.sum(VentaDetalle.subtotal).desc())
        )
        filas = self.db.execute(stmt).all()
        return [(cid, nombre, int(unidades), Decimal(ingresos)) for cid, nombre, unidades, ingresos in filas]


    # ------------------------------------------------------------------
    # Reportes dinámicos (consulta inteligente): agrupaciones reales en SQL.
    # SQLAlchemy controlado -- los únicos valores que llegan de la IA son
    # enumeraciones ya validadas (grupo/métrica/orden/granularidad) y enteros
    # acotados; nunca texto SQL.
    # ------------------------------------------------------------------

    def _base_detalle_por_grupo(self, grupo: str, categoria_id: int | None):
        from modules.P1_SucursalesYCatalogos.Models.categoria import Categoria

        if grupo == "sucursal":
            gid, gnombre = Sucursal.id, Sucursal.nombre
        else:
            gid, gnombre = Categoria.id, Categoria.nombre
        stmt = (
            select(
                gid.label("gid"),
                gnombre.label("gnombre"),
                Producto.id.label("pid"),
                Producto.nombre.label("pnombre"),
                func.sum(VentaDetalle.cantidad).label("unidades"),
                func.sum(VentaDetalle.subtotal).label("ingresos"),
            )
            .select_from(VentaDetalle)
            .join(Venta, Venta.id == VentaDetalle.venta_id)
            .join(ProductoVariante, ProductoVariante.id == VentaDetalle.producto_variante_id)
            .join(Producto, Producto.id == ProductoVariante.producto_id)
        )
        if grupo == "sucursal":
            stmt = stmt.join(Sucursal, Sucursal.id == Venta.sucursal_id)
        else:
            stmt = stmt.join(Categoria, Categoria.id == Producto.categoria_id)
        return stmt, gid, gnombre

    def ranking_productos_por_grupo(
        self,
        desde: date | None,
        hasta: date | None,
        sucursal_id: int | None,
        empresa_id: int,
        grupo: str,
        limite: int,
        metrica: str,
        orden: str,
        categoria_id: int | None = None,
    ) -> list[dict]:
        """TOP `limite` productos DENTRO de cada grupo (sucursal/categoría):
        ROW_NUMBER() OVER (PARTITION BY grupo ORDER BY métrica) y recién
        después se corta a rn <= limite -- nunca un LIMIT global previo.
        Empate -> nombre y id, para que el resultado sea determinista."""
        stmt, gid, gnombre = self._base_detalle_por_grupo(grupo, categoria_id)
        stmt = self._filtros(stmt, desde, hasta, sucursal_id, empresa_id, categoria_id=categoria_id)
        if grupo == "sucursal":
            stmt = stmt.where(Sucursal.empresa_id == empresa_id)
        agg = stmt.group_by(gid, gnombre, Producto.id, Producto.nombre).subquery()

        valor = agg.c.unidades if metrica == "unidades" else agg.c.ingresos
        orden_valor = valor.desc() if orden == "desc" else valor.asc()
        ranked = select(
            agg.c.gid,
            agg.c.gnombre,
            agg.c.pid,
            agg.c.pnombre,
            agg.c.unidades,
            agg.c.ingresos,
            func.row_number().over(partition_by=agg.c.gid, order_by=(orden_valor, agg.c.pnombre, agg.c.pid)).label("rn"),
            func.sum(agg.c.unidades).over(partition_by=agg.c.gid).label("tg_unidades"),
            func.sum(agg.c.ingresos).over(partition_by=agg.c.gid).label("tg_ingresos"),
        ).subquery()
        final = select(ranked).where(ranked.c.rn <= limite).order_by(ranked.c.gnombre, ranked.c.gid, ranked.c.rn)
        return [
            {
                "gid": r.gid, "gnombre": r.gnombre, "pid": r.pid, "pnombre": r.pnombre,
                "unidades": int(r.unidades), "ingresos": Decimal(r.ingresos), "rn": int(r.rn),
                "tg_unidades": int(r.tg_unidades), "tg_ingresos": Decimal(r.tg_ingresos),
            }
            for r in self.db.execute(final).all()
        ]

    def ranking_global_desglosado(
        self,
        desde: date | None,
        hasta: date | None,
        sucursal_id: int | None,
        empresa_id: int,
        grupo: str,
        limite: int,
        metrica: str,
        orden: str,
        categoria_id: int | None = None,
    ) -> list[dict]:
        """1) TOP `limite` GLOBAL de productos; 2) el desglose de esos mismos
        productos por grupo. Las unidades de cada producto sumadas entre
        grupos coinciden con su total global."""
        total_u = func.sum(VentaDetalle.cantidad)
        total_i = func.sum(VentaDetalle.subtotal)
        valor = total_u if metrica == "unidades" else total_i
        stmt_top = (
            select(Producto.id)
            .select_from(VentaDetalle)
            .join(Venta, Venta.id == VentaDetalle.venta_id)
            .join(ProductoVariante, ProductoVariante.id == VentaDetalle.producto_variante_id)
            .join(Producto, Producto.id == ProductoVariante.producto_id)
        )
        stmt_top = self._filtros(stmt_top, desde, hasta, sucursal_id, empresa_id, categoria_id=categoria_id)
        stmt_top = (
            stmt_top.group_by(Producto.id, Producto.nombre)
            .order_by(valor.desc() if orden == "desc" else valor.asc(), Producto.nombre, Producto.id)
            .limit(limite)
        )
        top_ids = [r[0] for r in self.db.execute(stmt_top).all()]
        if not top_ids:
            return []
        # Posición global de cada producto (orden del paso 1).
        posicion = {pid: i + 1 for i, pid in enumerate(top_ids)}

        stmt, gid, gnombre = self._base_detalle_por_grupo(grupo, categoria_id)
        stmt = self._filtros(stmt, desde, hasta, sucursal_id, empresa_id, categoria_id=categoria_id)
        if grupo == "sucursal":
            stmt = stmt.where(Sucursal.empresa_id == empresa_id)
        stmt = stmt.where(Producto.id.in_(top_ids)).group_by(gid, gnombre, Producto.id, Producto.nombre)
        filas = self.db.execute(stmt).all()
        return [
            {
                "gid": r.gid, "gnombre": r.gnombre, "pid": r.pid, "pnombre": r.pnombre,
                "unidades": int(r.unidades), "ingresos": Decimal(r.ingresos), "rn": posicion[r.pid],
            }
            for r in filas
        ]

    def serie_por_sucursal(
        self,
        desde: date | None,
        hasta: date | None,
        sucursal_id: int | None,
        empresa_id: int,
        granularidad: str,
    ) -> list[tuple[int, str, str, Decimal, int]]:
        """Ventas (ingresos y cantidad de ventas) por sucursal y por
        semana/mes. Semana = lunes que la inicia (YYYY-MM-DD)."""
        if granularidad == "mes":
            periodo = func.to_char(Venta.fecha_creacion, "YYYY-MM")
        else:
            periodo = func.to_char(func.date_trunc("week", Venta.fecha_creacion), "YYYY-MM-DD")
        periodo = periodo.label("periodo")
        stmt = (
            select(Sucursal.id, Sucursal.nombre, periodo, func.sum(Venta.total), func.count(Venta.id))
            .select_from(Venta)
            .join(Sucursal, Sucursal.id == Venta.sucursal_id)
            .where(Sucursal.empresa_id == empresa_id)
        )
        stmt = self._filtros(stmt, desde, hasta, sucursal_id, empresa_id)
        stmt = stmt.group_by(Sucursal.id, Sucursal.nombre, periodo).order_by(Sucursal.nombre, periodo)
        return [(sid, nombre, str(per), Decimal(ing), int(n)) for sid, nombre, per, ing, n in self.db.execute(stmt).all()]


class InventarioReporteRepository:
    """StockSucursal -- misma fuente y misma fórmula que CU12/CU14
    ("disponible" SIEMPRE cantidad - stock_reservado, nunca el físico
    crudo, clampeado a 0 con GREATEST para nunca mostrar un negativo)."""

    def __init__(self, db: Session):
        self.db = db

    def totales(self, sucursal_id: int | None, empresa_id: int) -> tuple[int, int]:
        stmt = (
            select(
                func.coalesce(func.sum(StockSucursal.cantidad), 0),
                func.coalesce(func.sum(StockSucursal.stock_reservado), 0),
            )
            .join(Sucursal, Sucursal.id == StockSucursal.sucursal_id)
        )
        stmt = stmt.where(Sucursal.empresa_id == empresa_id)
        if sucursal_id is not None:
            stmt = stmt.where(StockSucursal.sucursal_id == sucursal_id)
        fisico, reservado = self.db.execute(stmt).one()
        return int(fisico), int(reservado)

    def _disponible(self):
        return func.greatest(StockSucursal.cantidad - StockSucursal.stock_reservado, 0)

    def contar_stock_bajo(self, sucursal_id: int | None, umbral: int, empresa_id: int) -> int:
        stmt = self._stmt_base_stock_bajo(sucursal_id, umbral, select(func.count()).select_from(StockSucursal), empresa_id)
        return int(self.db.execute(stmt).scalar_one())

    def stock_bajo(self, sucursal_id: int | None, umbral: int, limite: int, empresa_id: int) -> list[tuple]:
        disponible = self._disponible().label("disponible")
        columnas = select(
            ProductoVariante.id,
            Producto.nombre,
            Color.nombre,
            Talla.nombre,
            Sucursal.nombre,
            disponible,
        )
        stmt = self._stmt_base_stock_bajo(sucursal_id, umbral, columnas, empresa_id)
        stmt = stmt.order_by(disponible.asc()).limit(limite)
        return self.db.execute(stmt).all()

    def _stmt_base_stock_bajo(self, sucursal_id: int | None, umbral: int, stmt, empresa_id: int):
        disponible = self._disponible()
        stmt = (
            stmt.select_from(StockSucursal)
            .join(ProductoVariante, ProductoVariante.id == StockSucursal.producto_variante_id)
            .join(Producto, Producto.id == ProductoVariante.producto_id)
            .join(Color, Color.id == ProductoVariante.color_id)
            .join(Talla, Talla.id == ProductoVariante.talla_id)
            .join(Sucursal, Sucursal.id == StockSucursal.sucursal_id)
            .where(
                disponible <= umbral,
                Producto.is_active.is_(True),
                ProductoVariante.is_active.is_(True),
                Sucursal.is_active.is_(True),
                Sucursal.empresa_id == empresa_id,
            )
        )
        if sucursal_id is not None:
            stmt = stmt.where(StockSucursal.sucursal_id == sucursal_id)
        return stmt


class ReservasReporteRepository:
    """Reserva.estado_general (resumen ya calculado por CU17-CU20, ver
    Models/reserva.py) -- CU30 nunca inventa un estado nuevo, solo cuenta
    los reales."""

    def __init__(self, db: Session):
        self.db = db

    def conteos_por_estado(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int
    ) -> dict[str, int]:
        stmt = select(Reserva.estado_general, func.count(Reserva.id)).where(Reserva.empresa_id == empresa_id)
        if desde is not None:
            stmt = stmt.where(Reserva.fecha_reserva >= desde)
        if hasta is not None:
            stmt = stmt.where(Reserva.fecha_reserva <= hasta)
        if sucursal_id is not None:
            stmt = stmt.where(Reserva.sucursal_id == sucursal_id)
        stmt = stmt.group_by(Reserva.estado_general)
        filas = self.db.execute(stmt).all()
        return {estado.value: int(conteo) for estado, conteo in filas}


class DevolucionesReporteRepository:
    """DevolucionCambio (CU26) -- solo lectura, nunca se escribe desde CU30."""

    def __init__(self, db: Session):
        self.db = db

    def conteos_por_tipo(
        self, desde: date | None, hasta: date | None, sucursal_id: int | None, empresa_id: int
    ) -> dict[str, int]:
        stmt = (
            select(DevolucionCambio.tipo, func.count(DevolucionCambio.id))
            .join(Sucursal, Sucursal.id == DevolucionCambio.sucursal_id)
            .where(Sucursal.empresa_id == empresa_id)
        )
        if desde is not None:
            stmt = stmt.where(DevolucionCambio.fecha_creacion >= _inicio_del_dia(desde))
        if hasta is not None:
            stmt = stmt.where(DevolucionCambio.fecha_creacion < _inicio_del_dia_siguiente(hasta))
        if sucursal_id is not None:
            stmt = stmt.where(DevolucionCambio.sucursal_id == sucursal_id)
        stmt = stmt.group_by(DevolucionCambio.tipo)
        filas = self.db.execute(stmt).all()
        return {tipo.value: int(conteo) for tipo, conteo in filas}
