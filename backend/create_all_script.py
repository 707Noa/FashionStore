#!/usr/bin/env python
"""Script para ejecutar create_all() con todos los modelos importados."""

import sys
from pathlib import Path

# Ensure the "app" package is importable
sys.path.insert(0, str(Path(__file__).resolve().parent))

from app.db.base import Base
from app.db.session import engine

# Import ALL models so they register with Base.metadata
from modules.P1_SucursalesYCatalogos.Models.categoria import Categoria  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.ciudad import Ciudad  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.coleccion import Coleccion  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.color import Color  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.detalle_recepcion_mercaderia import DetalleRecepcionMercaderia  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.movimiento_inventario import MovimientoInventario  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.producto import Producto  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.producto_color import producto_colores  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.producto_imagen import ProductoImagen  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.producto_proveedor import ProductoProveedor  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.producto_talla import producto_tallas  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.producto_variante import ProductoVariante  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.proveedor import Proveedor  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.recepcion_mercaderia import RecepcionMercaderia  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.stock_sucursal import StockSucursal  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.sucursal import Sucursal  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.talla import Talla  # noqa: F401
from modules.P1_SucursalesYCatalogos.Models.temporada import Temporada  # noqa: F401
from modules.P2_UsuariosYAccesos.Models.password_reset_token import PasswordResetToken  # noqa: F401
from modules.P2_UsuariosYAccesos.Models.usuario import Usuario  # noqa: F401
from modules.P4_ReservasYAtencion.Models.reserva import Reserva, ReservaDetalle  # noqa: F401
from modules.P5_ComprasVentasYPagos.Models.carrito import Carrito, CarritoItem  # noqa: F401
from modules.P5_ComprasVentasYPagos.Models.venta import Venta, VentaDetalle  # noqa: F401
from modules.P5_ComprasVentasYPagos.Models.pago import Pago  # noqa: F401
from modules.P5_ComprasVentasYPagos.Models.devolucion import DevolucionCambio  # noqa: F401
from modules.P6_InnovacionYAnalisis.Models.promocion import Promocion, promocion_productos  # noqa: F401
from modules.P7_GestionSaaSySuscripciones.Models.empresa import Empresa  # noqa: F401
from modules.P7_GestionSaaSySuscripciones.Models.plan import Plan  # noqa: F401
from modules.P7_GestionSaaSySuscripciones.Models.suscripcion import Suscripcion  # noqa: F401

print(f"Modelos registrados en Base.metadata: {len(Base.metadata.tables)}")
for table_name in sorted(Base.metadata.tables.keys()):
    print(f"  - {table_name}")

try:
    print("\nEjecutando create_all()...")
    Base.metadata.create_all(bind=engine)
    print("✓ create_all() completado exitosamente")

    # Verificar tablas creadas
    from sqlalchemy import inspect
    inspector = inspect(engine)
    created_tables = inspector.get_table_names()
    print(f"\n✓ Tablas creadas: {len(created_tables)}/33")

except Exception as e:
    print(f"✗ Error: {type(e).__name__}: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
