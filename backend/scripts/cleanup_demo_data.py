"""Elimina exclusivamente los datos de demostración DEMO-2026-.

NO elimina:
- Usuarios originales
- Empresa principal
- Datos de producción
- Migraciones
- Configuración

USAR ÚNICAMENTE DESPUÉS DE VALIDAR DATOS FICTICIOS.
"""

import os
import sys
from sqlalchemy import create_engine, text

sys.path.insert(0, str(os.path.dirname(__file__).replace('scripts', '')))
from app.core.config import settings

DEMO_MARKER = "DEMO-2026-"


def cleanup():
    """Eliminar datos ficticios."""
    engine = create_engine(settings.DATABASE_URL, echo=False)

    with engine.begin() as conn:
        try:
            print("=== ELIMINANDO DATOS FICTICIOS ===\n")

            # Orden: respetar FK
            # 1. Detalles de ventas (FK → ventas)
            result = conn.execute(text("""
                DELETE FROM venta_detalles WHERE venta_id IN (
                    SELECT id FROM ventas WHERE codigo_venta LIKE 'VT-%'
                )
            """))
            print(f"Detalles de ventas eliminados: {result.rowcount}")

            # 2. Ventas (FK → usuarios, sucursales)
            result = conn.execute(text("""
                DELETE FROM ventas WHERE codigo_venta LIKE 'VT-%'
            """))
            print(f"Ventas eliminadas: {result.rowcount}")

            # 3. Detalles de recepciones (FK → recepciones)
            result = conn.execute(text("""
                DELETE FROM detalles_recepcion_mercaderia WHERE recepcion_id IN (
                    SELECT id FROM recepciones_mercaderia
                    WHERE observacion LIKE '%Recepción de demostración%'
                )
            """))
            print(f"Detalles de recepciones eliminados: {result.rowcount}")

            # 4. Recepciones (FK → proveedores, sucursales, usuarios)
            result = conn.execute(text("""
                DELETE FROM recepciones_mercaderia
                WHERE observacion LIKE '%Recepción de demostración%'
            """))
            print(f"Recepciones eliminadas: {result.rowcount}")

            # 5. Stock (FK → sucursales, variantes)
            result = conn.execute(text("""
                DELETE FROM stock_sucursal WHERE sucursal_id IN (
                    SELECT id FROM sucursales WHERE nombre LIKE '%DEMO-2026%'
                )
            """))
            print(f"Stock eliminado: {result.rowcount}")

            # 6. Variantes (FK → productos)
            result = conn.execute(text("""
                DELETE FROM producto_variantes WHERE producto_id IN (
                    SELECT id FROM productos WHERE nombre LIKE '%DEMO-2026%'
                )
            """))
            print(f"Variantes eliminadas: {result.rowcount}")

            # 7. Productos (FK → proveedores, categorías, temporadas, colecciones)
            result = conn.execute(text("""
                DELETE FROM productos WHERE nombre LIKE '%DEMO-2026%'
            """))
            print(f"Productos eliminados: {result.rowcount}")

            # 8. Sucursales (FK → ciudades, empresas)
            result = conn.execute(text("""
                DELETE FROM sucursales WHERE nombre LIKE '%DEMO-2026%'
            """))
            print(f"Sucursales eliminadas: {result.rowcount}")

            # 9. Ciudades
            result = conn.execute(text("""
                DELETE FROM ciudades WHERE nombre LIKE '%DEMO-2026%'
            """))
            print(f"Ciudades eliminadas: {result.rowcount}")

            # 10. Proveedores
            result = conn.execute(text("""
                DELETE FROM proveedores WHERE razon_social LIKE '%DEMO-2026%'
            """))
            print(f"Proveedores eliminados: {result.rowcount}")

            # 11. Colecciones
            result = conn.execute(text("""
                DELETE FROM colecciones WHERE nombre LIKE '%DEMO-2026%'
            """))
            print(f"Colecciones eliminadas: {result.rowcount}")

            # 12. Temporadas
            result = conn.execute(text("""
                DELETE FROM temporadas WHERE nombre LIKE '%DEMO-2026%'
            """))
            print(f"Temporadas eliminadas: {result.rowcount}")

            # 13. Categorías
            result = conn.execute(text("""
                DELETE FROM categorias WHERE nombre LIKE '%DEMO-2026%'
            """))
            print(f"Categorías eliminadas: {result.rowcount}")

            # 14. Usuario admin demo
            result = conn.execute(text("""
                DELETE FROM usuarios WHERE correo LIKE '%demo-2026-admin%'
            """))
            print(f"Usuario admin demo eliminado: {result.rowcount}")

            print("\n[OK] Datos ficticios eliminados completamente.")
            print("[OK] Empresa principal y usuarios originales INTACTOS.")
            return True

        except Exception as e:
            print(f"\n[ERROR] Error durante la reversión: {e}")
            return False


def main():
    if cleanup():
        sys.exit(0)
    else:
        sys.exit(1)


if __name__ == "__main__":
    main()
