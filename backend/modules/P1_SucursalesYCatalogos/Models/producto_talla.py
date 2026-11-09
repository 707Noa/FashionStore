"""Tabla de asociación Producto <-> Talla (muchos a muchos), para CU08.

Vincula el producto con las tallas que ofrece, reutilizando las tallas ya
existentes de CU09 (no las duplica).

Multitenant: El aislamiento se mantiene porque:
  - Solo accedes a productos que pertenecen a tu empresa
  - Solo accedes a tallas que pertenecen a tu empresa
  - Por lo tanto, no puedes asociar productos de Empresa A con tallas de Empresa B
"""

from sqlalchemy import Column, ForeignKey, Table

from app.db.base import Base

producto_tallas = Table(
    "producto_tallas",
    Base.metadata,
    Column("producto_id", ForeignKey("productos.id"), primary_key=True),
    Column("talla_id", ForeignKey("tallas.id"), primary_key=True),
)
