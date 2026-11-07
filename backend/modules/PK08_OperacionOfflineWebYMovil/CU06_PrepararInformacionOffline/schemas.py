"""Schemas para CU6 — Preparar información offline."""

from datetime import datetime
from pydantic import BaseModel


class SucursalBasicOut(BaseModel):
    """Información mínima de sucursal para selector."""
    id: int
    nombre: str

    class Config:
        from_attributes = True


class TallaOut(BaseModel):
    """Talla para almacenamiento local."""
    id: int
    nombre: str

    class Config:
        from_attributes = True


class ColorOut(BaseModel):
    """Color para almacenamiento local."""
    id: int
    nombre: str

    class Config:
        from_attributes = True


class CategoriaOut(BaseModel):
    """Categoría para almacenamiento local."""
    id: int
    nombre: str

    class Config:
        from_attributes = True


class TemporadaOut(BaseModel):
    """Temporada para almacenamiento local."""
    id: int
    nombre: str

    class Config:
        from_attributes = True


class ColeccionOut(BaseModel):
    """Colección para almacenamiento local."""
    id: int
    nombre: str
    descripcion: str | None
    imagen_destacada_url: str | None
    es_destacada_inicio: bool
    temporada: TemporadaOut

    class Config:
        from_attributes = True


class VarianteOut(BaseModel):
    """Variante de producto con disponibilidad."""
    id: int
    producto_id: int
    talla_id: int
    talla_nombre: str
    color_id: int
    color_nombre: str
    precio: float
    stock_disponible: int

    class Config:
        from_attributes = True


class ProductoOut(BaseModel):
    """Producto con variantes para almacenamiento local.

    Incluye precios calculados (CU32 -- Gestionar promociones):
    precio_base y precio_final se calculan igual que en CU11 usando obtener_precios_efectivos().
    """
    id: int
    nombre: str
    categoria_id: int
    coleccion_id: int
    es_activo: bool
    variantes: list[VarianteOut]
    precio_base: float
    precio_final: float
    en_promocion: bool
    porcentaje_descuento: float | None
    imagen_principal_url: str | None = None

    class Config:
        from_attributes = True


class SucursalOut(BaseModel):
    """Sucursal para contexto offline."""
    id: int
    nombre: str
    ciudad: str | None
    es_activa: bool

    class Config:
        from_attributes = True


class ClienteMinimosOut(BaseModel):
    """Datos mínimos de cliente para operaciones offline."""
    id: int
    nombre: str
    correo: str

    class Config:
        from_attributes = True


class MetadataPreparacionOut(BaseModel):
    """Metadata de la preparación offline."""
    fecha_preparacion: datetime
    version: int
    estado: str
    empresa_id: int
    sucursal_id: int


class PreparacionOfflineOut(BaseModel):
    """Respuesta completa de preparación offline."""
    sucursal: SucursalOut
    productos: list[ProductoOut]
    tallas: list[TallaOut]
    colores: list[ColorOut]
    categorias: list[CategoriaOut]
    colecciones: list[ColeccionOut]
    clientes_minimos: list[ClienteMinimosOut]
    metadata: MetadataPreparacionOut

    class Config:
        from_attributes = True
