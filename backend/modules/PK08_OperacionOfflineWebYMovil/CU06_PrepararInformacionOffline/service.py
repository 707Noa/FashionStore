"""Service de CU6 — Preparar información para operación offline."""

from datetime import datetime, timezone
from sqlalchemy import select
from sqlalchemy.orm import Session

from modules.P7_GestionSaaSySuscripciones.CU05_GestionarSuscripcionEmpresa.service import (
    CapacidadesEmpresa,
    FuncionalidadNoHabilitadaError,
)
from modules.P6_InnovacionYAnalisis.CU32_GestionarPromociones.precio_efectivo import (
    obtener_precios_efectivos,
)

from .repository import PreparacionOfflineRepository
from .schemas import (
    CategoriaOut,
    CiudadOut,
    ColeccionOut,
    ColorOut,
    ClienteMinimosOut,
    MetadataPreparacionOut,
    PreparacionOfflineOut,
    ProductoOut,
    SucursalOut,
    TallaOut,
    TemporadaOut,
    VarianteOut,
)


class SucursalNoEncontradaError(Exception):
    """Sucursal no existe o no pertenece a la empresa."""


class PreparacionOfflineService:
    """Coordina preparación de información para operación offline."""

    def __init__(self, db: Session):
        self.db = db
        self.repo = PreparacionOfflineRepository(db)

    def obtener_sucursales(self, empresa_id: int) -> list:
        """Obtiene las sucursales activas de una empresa para el selector."""
        from modules.P1_SucursalesYCatalogos.Models.sucursal import Sucursal

        stmt = (
            select(Sucursal)
            .where(
                Sucursal.empresa_id == empresa_id,
                Sucursal.is_active.is_(True),
            )
            .order_by(Sucursal.nombre)
        )
        return list(self.db.execute(stmt).scalars().all())

    def preparar(self, sucursal_id: int, empresa_id: int) -> PreparacionOfflineOut:
        """Prepara toda la información necesaria para operación offline.

        Validaciones:
        - empresa_id proviene del usuario autenticado
        - sucursal pertenece a la empresa
        - empresa tiene capacidad offline habilitada

        Obtiene:
        - productos activos
        - variantes con precios
        - existencias por sucursal
        - tallas y colores
        - clientes mínimos
        """

        # 1. Validar capacidad offline
        capacidades = CapacidadesEmpresa(self.db, empresa_id)
        try:
            capacidades.validar_acceso_a("operacion_offline")
        except FuncionalidadNoHabilitadaError as exc:
            raise exc

        # 2. Validar sucursal pertenece a empresa
        sucursal = self.repo.obtener_sucursal(sucursal_id, empresa_id)
        if not sucursal:
            raise SucursalNoEncontradaError(
                f"Sucursal {sucursal_id} no existe o no pertenece a la empresa"
            )

        # 3. Obtener productos de la empresa
        productos_db = self.repo.obtener_productos(empresa_id)

        # Calcular precios efectivos (con promociones) igual que CU11
        precios_efectivos = obtener_precios_efectivos(self.db, productos_db)

        productos_out = []
        for prod in productos_db:
            # Obtener variantes de este producto
            variantes_db = self.repo.obtener_variantes(prod.id)
            variantes_out = []

            for var in variantes_db:
                # Obtener stock disponible para esta sucursal
                stock = self.repo.obtener_stock(var.id, sucursal_id)

                # Convertir Decimal a float explícitamente para evitar serialización como string
                precio_float = float(prod.precio_venta)

                variantes_out.append(VarianteOut(
                    id=var.id,
                    producto_id=var.producto_id,
                    talla_id=var.talla_id,
                    talla_nombre=var.talla.nombre,
                    color_id=var.color_id,
                    color_nombre=var.color.nombre,
                    precio=precio_float,
                    stock_disponible=stock,
                ))

            if variantes_out:  # Solo incluir si tiene variantes
                # Obtener precio efectivo (con promoción si aplica)
                precio_info = precios_efectivos.get(prod.id)
                productos_out.append(ProductoOut(
                    id=prod.id,
                    nombre=prod.nombre,
                    categoria_id=prod.categoria_id,
                    coleccion_id=prod.coleccion_id,
                    es_activo=prod.is_active,
                    variantes=variantes_out,
                    precio_base=float(precio_info.precio_base) if precio_info else float(prod.precio_venta),
                    precio_final=float(precio_info.precio_final) if precio_info else float(prod.precio_venta),
                    en_promocion=precio_info.en_promocion if precio_info else False,
                    porcentaje_descuento=float(precio_info.porcentaje_descuento) if precio_info and precio_info.porcentaje_descuento else None,
                    imagen_principal_url=prod.imagen_principal_url,
                ))

        # 4. Obtener ciudades (todas las ciudades activas del sistema)
        print("[CU06 CHECKPOINT] Antes de obtener_ciudades()")
        ciudades = self.repo.obtener_ciudades()
        print(f"[CU06 CHECKPOINT] Después de obtener_ciudades() - total: {len(ciudades)}")
        ciudades_out = [CiudadOut(id=c.id, nombre=c.nombre) for c in ciudades]
        print(f"[CU06 CITIES API] total: {len(ciudades_out)}")
        for c in ciudades_out:
            print(f"  - {c.nombre}")

        # 5. Obtener catálogos
        tallas = self.repo.obtener_tallas(empresa_id=empresa_id)
        tallas_out = [TallaOut(id=t.id, nombre=t.nombre) for t in tallas]

        colores = self.repo.obtener_colores(empresa_id=empresa_id)
        colores_out = [ColorOut(id=c.id, nombre=c.nombre) for c in colores]

        categorias = self.repo.obtener_categorias(empresa_id=empresa_id)
        categorias_out = [CategoriaOut(id=c.id, nombre=c.nombre) for c in categorias]

        colecciones = self.repo.obtener_colecciones(empresa_id=empresa_id)
        colecciones_out = [
            ColeccionOut(
                id=col.id,
                nombre=col.nombre,
                descripcion=col.descripcion,
                imagen_destacada_url=col.imagen_destacada_url,
                es_destacada_inicio=col.es_destacada_inicio,
                temporada=TemporadaOut(id=col.temporada.id, nombre=col.temporada.nombre),
            )
            for col in colecciones
        ]

        # 6. Obtener clientes mínimos
        clientes = self.repo.obtener_clientes_minimos(empresa_id)
        clientes_out = [
            ClienteMinimosOut(id=c.id, nombre=c.nombre, correo=c.correo)
            for c in clientes
        ]

        # 8. Metadata de preparación
        metadata = MetadataPreparacionOut(
            fecha_preparacion=datetime.now(timezone.utc),
            version=1,
            estado="PREPARADO",
            empresa_id=empresa_id,
            sucursal_id=sucursal_id,
        )

        # 9. Respuesta
        return PreparacionOfflineOut(
            sucursal=SucursalOut(
                id=sucursal.id,
                nombre=sucursal.nombre,
                id_ciudad=sucursal.ciudad_id if sucursal.ciudad_id else None,
                ciudad=sucursal.ciudad.nombre if sucursal.ciudad else None,
                es_activa=sucursal.is_active,
            ),
            ciudades=ciudades_out,
            productos=productos_out,
            tallas=tallas_out,
            colores=colores_out,
            categorias=categorias_out,
            colecciones=colecciones_out,
            clientes_minimos=clientes_out,
            metadata=metadata,
        )
