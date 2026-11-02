"""Acceso a datos para CU6 — Preparar información offline.

Actúa como orquestador de repositories existentes, reutilizando:
- ProductosRepository (CU08)
- StockSucursal (CU14)
- Sucursal (CU06)
- Talla y Color (CU09)
"""

from sqlalchemy import select
from sqlalchemy.orm import Session

from modules.P1_SucursalesYCatalogos.Models.color import Color
from modules.P1_SucursalesYCatalogos.Models.producto import Producto
from modules.P1_SucursalesYCatalogos.Models.producto_variante import ProductoVariante
from modules.P1_SucursalesYCatalogos.Models.stock_sucursal import StockSucursal
from modules.P1_SucursalesYCatalogos.Models.sucursal import Sucursal
from modules.P1_SucursalesYCatalogos.Models.talla import Talla
from modules.P2_UsuariosYAccesos.Models.usuario import Usuario


class PreparacionOfflineRepository:
    """Orquesta obtención de datos para preparación offline."""

    def __init__(self, db: Session):
        self.db = db

    def obtener_sucursal(self, sucursal_id: int, empresa_id: int) -> Sucursal | None:
        """Obtiene sucursal validando tenant."""
        stmt = select(Sucursal).where(
            Sucursal.id == sucursal_id,
            Sucursal.empresa_id == empresa_id,
            Sucursal.is_active.is_(True)
        )
        return self.db.execute(stmt).scalar_one_or_none()

    def obtener_productos(self, empresa_id: int) -> list[Producto]:
        """Obtiene productos activos de la empresa."""
        stmt = select(Producto).where(
            Producto.empresa_id == empresa_id,
            Producto.is_active.is_(True)
        ).order_by(Producto.nombre)
        return list(self.db.execute(stmt).scalars().all())

    def obtener_variantes(self, producto_id: int) -> list[ProductoVariante]:
        """Obtiene variantes activas de un producto."""
        stmt = select(ProductoVariante).where(
            ProductoVariante.producto_id == producto_id,
            ProductoVariante.is_active.is_(True)
        )
        return list(self.db.execute(stmt).scalars().all())

    def obtener_stock(self, producto_variante_id: int, sucursal_id: int) -> int:
        """Obtiene stock disponible (cantidad - reservado)."""
        stmt = select(StockSucursal).where(
            StockSucursal.producto_variante_id == producto_variante_id,
            StockSucursal.sucursal_id == sucursal_id
        )
        stock = self.db.execute(stmt).scalar_one_or_none()
        if not stock:
            return 0
        disponible = max(0, stock.cantidad - stock.stock_reservado)
        return disponible

    def obtener_tallas(self) -> list[Talla]:
        """Obtiene todas las tallas activas."""
        stmt = select(Talla).where(Talla.is_active.is_(True)).order_by(Talla.nombre)
        return list(self.db.execute(stmt).scalars().all())

    def obtener_colores(self) -> list[Color]:
        """Obtiene todos los colores activos."""
        stmt = select(Color).where(Color.is_active.is_(True)).order_by(Color.nombre)
        return list(self.db.execute(stmt).scalars().all())

    def obtener_clientes_minimos(self, empresa_id: int) -> list[Usuario]:
        """Obtiene datos mínimos de clientes de la empresa."""
        stmt = select(Usuario).where(
            Usuario.empresa_id == empresa_id,
            Usuario.is_active.is_(True)
        ).limit(100)
        return list(self.db.execute(stmt).scalars().all())
