"""Schemas para CU6 — Preparar información offline."""

from datetime import datetime
from decimal import Decimal
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


class VarianteOut(BaseModel):
    """Variante de producto con disponibilidad."""
    id: int
    producto_id: int
    talla_id: int
    talla_nombre: str
    color_id: int
    color_nombre: str
    precio: Decimal
    stock_disponible: int

    class Config:
        from_attributes = True


class ProductoOut(BaseModel):
    """Producto con variantes para almacenamiento local."""
    id: int
    nombre: str
    categoria_id: int
    es_activo: bool
    variantes: list[VarianteOut]

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
    clientes_minimos: list[ClienteMinimosOut]
    metadata: MetadataPreparacionOut

    class Config:
        from_attributes = True
