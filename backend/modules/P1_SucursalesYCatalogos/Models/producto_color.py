"""Tabla de asociación Producto <-> Color (muchos a muchos), para CU08.

Vincula el producto con los colores que ofrece, reutilizando los colores ya
existentes de CU09 (no las duplica).

Multitenant: El aislamiento se mantiene porque:
  - Solo accedes a productos que pertenecen a tu empresa
  - Solo accedes a colores que pertenecen a tu empresa
  - Por lo tanto, no puedes asociar productos de Empresa A con colores de Empresa B
"""

from sqlalchemy import Column, ForeignKey, Table

from app.db.base import Base

producto_colores = Table(
    "producto_colores",
    Base.metadata,
    Column("producto_id", ForeignKey("productos.id"), primary_key=True),
    Column("color_id", ForeignKey("colores.id"), primary_key=True),
)
