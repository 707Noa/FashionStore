"""Generador de datos históricos de demostración para FashionStore.

Crea 3 sucursales, 60 productos, 5 proveedores, 45 compras y 250 ventas
distribuidas entre junio y octubre de 2026.

Ajustado al schema SQLAlchemy real de FashionStore.
"""

import os
import sys
from datetime import date, datetime, timedelta
from decimal import Decimal
from random import choice, randint, random, seed as random_seed

from sqlalchemy import create_engine, text
from sqlalchemy.orm import Session

sys.path.insert(0, str(os.path.dirname(__file__).replace('scripts', '')))

from app.db.base import Base
from app.core.config import settings
from modules.P7_GestionSaaSySuscripciones.Models.empresa import Empresa
from modules.P1_SucursalesYCatalogos.Models.ciudad import Ciudad
from modules.P1_SucursalesYCatalogos.Models.sucursal import Sucursal
from modules.P1_SucursalesYCatalogos.Models.categoria import Categoria
from modules.P1_SucursalesYCatalogos.Models.talla import Talla
from modules.P1_SucursalesYCatalogos.Models.color import Color
from modules.P1_SucursalesYCatalogos.Models.temporada import Temporada
from modules.P1_SucursalesYCatalogos.Models.coleccion import Coleccion
from modules.P1_SucursalesYCatalogos.Models.producto import Producto
from modules.P1_SucursalesYCatalogos.Models.producto_variante import ProductoVariante
from modules.P1_SucursalesYCatalogos.Models.proveedor import Proveedor
from modules.P1_SucursalesYCatalogos.Models.stock_sucursal import StockSucursal
from modules.P1_SucursalesYCatalogos.Models.recepcion_mercaderia import RecepcionMercaderia
from modules.P1_SucursalesYCatalogos.Models.detalle_recepcion_mercaderia import DetalleRecepcionMercaderia
from modules.P2_UsuariosYAccesos.Models.usuario import Usuario
from modules.P2_UsuariosYAccesos.Models.rol import RolUsuario
from modules.P5_ComprasVentasYPagos.Models.venta import Venta, VentaDetalle, TipoVenta, EstadoVenta
from modules.P4_ReservasYAtencion.Models.reserva import Reserva
from app.core.security import hash_password

random_seed(42)
DEMO_MARKER = "DEMO-2026-"


class DemoDataGenerator:
    """Generador ajustado al schema real de FashionStore."""

    def __init__(self, session: Session):
        self.session = session
        self.empresa_id = None
        self.admin_usuario = None
        self.created_ids = {
            'ciudades': [],
            'sucursales': [],
            'categorias': [],
            'tallas': [],
            'colores': [],
            'temporada': None,
            'coleccion': None,
            'productos': [],
            'variantes': [],
            'proveedores': [],
            'recepciones': [],
            'ventas': [],
            'stocks': [],
        }

    def run(self):
        """Ejecutar el generador completo."""
        try:
            print("=== GENERADOR DE DATOS DE DEMOSTRACIÓN ===\n")

            self._setup_empresa()
            if self._check_existing_demo():
                print("[ERROR] Datos de demostración ya existen. Abortando.")
                return False

            print("1. Creando usuario admin...")
            self._create_admin_usuario()

            print("2. Creando ciudades...")
            self._create_ciudades()

            print("3. Creando sucursales...")
            self._create_sucursales()

            print("4. Creando catálogo (categorías, tallas, colores)...")
            self._create_catalogo_base()

            print("5. Creando temporada y colección...")
            self._create_temporada_coleccion()

            print("6. Creando proveedores...")
            self._create_proveedores()

            print("7. Creando 60 productos con variantes...")
            self._create_productos()

            print("8. Inicializando stock...")
            self._initialize_stock()

            print("9. Creando 45 recepciones de mercadería...")
            self._create_recepciones()

            print("10. Creando 250 ventas históricas...")
            self._create_ventas()

            self.session.commit()
            print("\n[OK] Datos de demostración creados exitosamente.")
            self._print_summary()
            return True

        except Exception as e:
            self.session.rollback()
            print(f"\n[ERROR] Error: {e}")
            import traceback
            traceback.print_exc()
            return False

    def _setup_empresa(self):
        """Verificar que existe la empresa principal."""
        empresa = self.session.query(Empresa).filter_by(
            nombre="FashionStore - Empresa Principal"
        ).first()

        if not empresa:
            raise Exception("Empresa principal no encontrada. Ejecuta migrations primero.")

        self.empresa_id = empresa.id
        print(f"Usando empresa: {empresa.nombre} (ID: {self.empresa_id})")

    def _check_existing_demo(self) -> bool:
        """Verificar si ya existen datos de demostración."""
        existing = self.session.query(Sucursal).filter(
            Sucursal.nombre.like(f"%{DEMO_MARKER}%")
        ).first()
        return existing is not None

    def _create_admin_usuario(self):
        """Crear usuario admin para recepciones."""
        admin = Usuario(
            nombre="Admin Demo",
            correo=f"{DEMO_MARKER.lower()}admin@demo.local",
            password_hash=hash_password("demo123456"),
            rol=RolUsuario.ADMINISTRADOR,
            empresa_id=self.empresa_id,
            is_active=True
        )
        self.session.add(admin)
        self.session.flush()
        self.admin_usuario = admin

    def _create_ciudades(self):
        """Crear 3 ciudades."""
        ciudades_datos = [
            ("La Paz", "La Paz"),
            ("Cochabamba", "Cochabamba"),
            ("Santa Cruz", "Santa Cruz"),
        ]

        for nombre, dpto in ciudades_datos:
            ciudad = Ciudad(
                nombre=f"{DEMO_MARKER}{nombre}",
                departamento=dpto,
                empresa_id=self.empresa_id
            )
            self.session.add(ciudad)
            self.created_ids['ciudades'].append(ciudad)

        self.session.flush()

    def _create_sucursales(self):
        """Crear 3 sucursales."""
        ciudades = self.created_ids['ciudades']
        sucursales_datos = [
            (f"{DEMO_MARKER}Casa Matriz Centro", ciudades[0].id, "Av. Principal 123"),
            (f"{DEMO_MARKER}Sucursal Norte", ciudades[1].id, "Av. Norte 456"),
            (f"{DEMO_MARKER}Sucursal Sur", ciudades[2].id, "Av. Sur 789"),
        ]

        for nombre, ciudad_id, direccion in sucursales_datos:
            sucursal = Sucursal(
                nombre=nombre,
                ciudad_id=ciudad_id,
                direccion=direccion,
                telefono="+591-2-123-4567",
                empresa_id=self.empresa_id,
                is_active=True
            )
            self.session.add(sucursal)
            self.created_ids['sucursales'].append(sucursal)

        self.session.flush()

    def _create_catalogo_base(self):
        """Crear categorías, tallas y colores."""
        categorias_nombres = [
            "Camisetas", "Pantalones", "Vestidos", "Chaquetas", "Zapatos", "Accesorios"
        ]
        for nombre in categorias_nombres:
            cat = Categoria(
                nombre=f"{DEMO_MARKER}{nombre}",
                is_active=True
            )
            self.session.add(cat)
            self.created_ids['categorias'].append(cat)

        tallas_nombres = ["XS", "S", "M", "L", "XL", "XXL"]
        for nombre in tallas_nombres:
            existing = self.session.query(Talla).filter_by(nombre=nombre).first()
            if not existing:
                talla = Talla(
                    nombre=nombre,
                    is_active=True
                )
                self.session.add(talla)
            else:
                talla = existing
            self.created_ids['tallas'].append(talla)

        colores_nombres = ["Negro", "Blanco", "Rojo", "Azul", "Verde", "Gris", "Beige"]
        for nombre in colores_nombres:
            existing = self.session.query(Color).filter_by(nombre=nombre).first()
            if not existing:
                color = Color(
                    nombre=nombre,
                    is_active=True
                )
                self.session.add(color)
            else:
                color = existing
            self.created_ids['colores'].append(color)

        self.session.flush()

    def _create_temporada_coleccion(self):
        """Crear temporada y colección."""
        temporada = Temporada(
            nombre=f"{DEMO_MARKER}2026-Q3",
            fecha_inicio=date(2026, 7, 1),
            fecha_fin=date(2026, 9, 30),
            is_active=True,
            empresa_id=self.empresa_id
        )
        self.session.add(temporada)
        self.session.flush()
        self.created_ids['temporada'] = temporada

        coleccion = Coleccion(
            nombre=f"{DEMO_MARKER}Coleccion Q3",
            temporada_id=temporada.id,
            is_active=True,
            es_destacada_inicio=False,
            empresa_id=self.empresa_id
        )
        self.session.add(coleccion)
        self.session.flush()
        self.created_ids['coleccion'] = coleccion

    def _create_proveedores(self):
        """Crear 5 proveedores."""
        proveedores_datos = [
            ("Textiles del Mundo", "Juan Pérez"),
            ("Moda Global", "María García"),
            ("Fábrica Suramericana", "Carlos López"),
            ("Importadores Directos", "Ana Rodríguez"),
            ("Textiles Éticos", "Roberto Martínez"),
        ]

        for razon_social, contacto in proveedores_datos:
            proveedor = Proveedor(
                razon_social=f"{DEMO_MARKER}{razon_social}",
                nombre_contacto=contacto,
                correo=f"{razon_social.lower().replace(' ', '')}@demo.local",
                telefono=f"+591 2 123456{randint(0, 99):02d}",
                is_active=True,
                empresa_id=self.empresa_id
            )
            self.session.add(proveedor)
            self.created_ids['proveedores'].append(proveedor)

        self.session.flush()

    def _create_productos(self):
        """Crear 60 productos con variantes."""
        categorias = self.created_ids['categorias']
        tallas = self.created_ids['tallas'][1:5]
        colores = self.created_ids['colores'][:4]
        proveedores = self.created_ids['proveedores']
        temporada = self.created_ids['temporada']
        coleccion = self.created_ids['coleccion']

        nombres_productos = [
            "Camiseta Básica", "Polo Deportivo", "Remera Estampada",
            "Pantalón Vaquero", "Pantalón Cargo", "Pantalón Formal",
            "Vestido Casual", "Vestido Formal", "Vestido Floral",
            "Chaqueta Jeans", "Chaqueta Formal", "Blazer",
            "Zapatilla Deportiva", "Zapato Formal", "Sandalia",
            "Gorro", "Bufanda", "Mochila", "Cinturón", "Cartera"
        ]

        for i in range(60):
            nombre = f"{DEMO_MARKER}{nombres_productos[i % len(nombres_productos)]}-{i//len(nombres_productos)}"
            categoria = choice(categorias)
            proveedor = choice(proveedores)
            precio = Decimal(str(round(randint(50, 500) + random(), 2)))

            producto = Producto(
                nombre=nombre,
                descripcion=f"Producto de demostración {i+1}",
                precio_venta=precio,
                categoria_id=categoria.id,
                proveedor_id=proveedor.id,
                temporada_id=temporada.id,
                coleccion_id=coleccion.id,
                is_active=True,
                empresa_id=self.empresa_id
            )
            self.session.add(producto)
            self.created_ids['productos'].append(producto)

        self.session.flush()

        productos = self.session.query(Producto).filter(
            Producto.nombre.like(f"%{DEMO_MARKER}%")
        ).all()

        for producto in productos:
            for talla in tallas:
                for color in colores:
                    variante = ProductoVariante(
                        producto_id=producto.id,
                        talla_id=talla.id,
                        color_id=color.id,
                        is_active=True
                    )
                    self.session.add(variante)
                    self.created_ids['variantes'].append(variante)

        self.session.flush()

    def _initialize_stock(self):
        """Inicializar stock en sucursales."""
        sucursales = self.created_ids['sucursales']
        variantes = self.session.query(ProductoVariante).all()

        for sucursal in sucursales:
            for variante in variantes:
                cantidad = randint(5, 50)
                stock = StockSucursal(
                    sucursal_id=sucursal.id,
                    producto_variante_id=variante.id,
                    cantidad=cantidad,
                    stock_reservado=0
                )
                self.session.add(stock)
                self.created_ids['stocks'].append(stock)

        self.session.flush()

    def _create_recepciones(self):
        """Crear 45 recepciones de mercadería."""
        sucursales = self.created_ids['sucursales']
        proveedores = self.created_ids['proveedores']
        variantes = self.session.query(ProductoVariante).all()

        for i in range(45):
            fecha_base = datetime(2026, 6, 1)
            dias_offset = randint(0, 151)
            fecha = fecha_base + timedelta(days=dias_offset)

            recepcion = RecepcionMercaderia(
                proveedor_id=choice(proveedores).id,
                sucursal_id=choice(sucursales).id,
                usuario_id=self.admin_usuario.id,
                fecha_hora=fecha,
                observacion=f"Recepción de demostración {i+1}"
            )
            self.session.add(recepcion)
            self.session.flush()
            self.created_ids['recepciones'].append(recepcion)

            for _ in range(randint(2, 8)):
                variante = choice(variantes)
                cantidad = randint(10, 100)
                detalle = DetalleRecepcionMercaderia(
                    recepcion_id=recepcion.id,
                    producto_variante_id=variante.id,
                    cantidad_recibida=cantidad
                )
                self.session.add(detalle)

        self.session.flush()

    def _create_ventas(self):
        """Crear 250 ventas."""
        sucursales = self.created_ids['sucursales']
        variantes = self.session.query(ProductoVariante).all()
        productos = self.session.query(Producto).filter(
            Producto.nombre.like(f"%{DEMO_MARKER}%")
        ).all()

        precio_map = {p.id: p.precio_venta for p in productos}

        venta_counter = 1
        for i in range(250):
            fecha_base = datetime(2026, 6, 1)
            dias_offset = randint(0, 151)
            fecha = fecha_base + timedelta(days=dias_offset)

            sucursal = choice(sucursales)
            codigo_venta = f"VT-{venta_counter:06d}"
            venta_counter += 1

            venta = Venta(
                codigo_venta=codigo_venta,
                cliente_id=None,
                sucursal_id=sucursal.id,
                tipo=TipoVenta.PRESENCIAL,
                estado=EstadoVenta.PENDIENTE_PAGO,
                total=Decimal("0"),
                fecha_creacion=fecha,
                cajero_id=self.admin_usuario.id,
                empresa_id=self.empresa_id
            )
            self.session.add(venta)
            self.session.flush()
            self.created_ids['ventas'].append(venta)

            total_venta = Decimal("0")
            for _ in range(randint(1, 5)):
                variante = choice(variantes)
                cantidad = randint(1, 3)
                precio_unitario = precio_map.get(variante.producto_id, Decimal("100.00"))
                subtotal = precio_unitario * Decimal(cantidad)
                total_venta += subtotal

                detalle = VentaDetalle(
                    venta_id=venta.id,
                    producto_variante_id=variante.id,
                    cantidad=cantidad,
                    precio_unitario=precio_unitario,
                    subtotal=subtotal
                )
                self.session.add(detalle)

            venta.total = total_venta
            self.session.flush()

    def _print_summary(self):
        """Imprimir resumen de datos creados."""
        print("\n=== RESUMEN ===")
        print(f"Sucursales: {len(self.created_ids['sucursales'])}")
        print(f"Categorías: {len(self.created_ids['categorias'])}")
        print(f"Tallas: {len(self.created_ids['tallas'])}")
        print(f"Colores: {len(self.created_ids['colores'])}")
        print(f"Productos: {len(self.created_ids['productos'])}")
        print(f"Variantes: {len(self.created_ids['variantes'])}")
        print(f"Proveedores: {len(self.created_ids['proveedores'])}")
        print(f"Recepciones: {len(self.created_ids['recepciones'])}")
        print(f"Ventas: {len(self.created_ids['ventas'])}")
        print(f"Stock: {len(self.created_ids['stocks'])}")


def main():
    engine = create_engine(settings.DATABASE_URL, echo=False)

    with Session(engine) as session:
        generator = DemoDataGenerator(session)
        return generator.run()


if __name__ == "__main__":
    import sys
    success = main()
    sys.exit(0 if success else 1)
