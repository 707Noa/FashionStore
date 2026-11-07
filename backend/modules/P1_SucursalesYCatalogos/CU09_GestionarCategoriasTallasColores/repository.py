"""Acceso a datos de Categoría, Talla y Color necesario para CU09.

Consulta los mismos modelos que expone modules/P1_SucursalesYCatalogos/Models;
no crea tablas ni modelos paralelos.
"""

from sqlalchemy import func, select
from sqlalchemy.orm import Session

from modules.P1_SucursalesYCatalogos.Models.categoria import Categoria
from modules.P1_SucursalesYCatalogos.Models.color import Color
from modules.P1_SucursalesYCatalogos.Models.talla import Talla


class CategoriasRepository:
    def __init__(self, db: Session):
        self.db = db

    def listar(self, search: str | None = None, is_active: bool | None = None, empresa_id: int | None = None) -> list[Categoria]:
        stmt = select(Categoria)
        if empresa_id is not None:
            stmt = stmt.where(Categoria.empresa_id == empresa_id)
        if search:
            stmt = stmt.where(func.lower(Categoria.nombre).like(f"%{search.strip().lower()}%"))
        if is_active is not None:
            stmt = stmt.where(Categoria.is_active == is_active)
        stmt = stmt.order_by(Categoria.nombre)
        return list(self.db.execute(stmt).scalars().all())

    def get_by_id(self, categoria_id: int, empresa_id: int | None = None) -> Categoria | None:
        stmt = select(Categoria).where(Categoria.id == categoria_id)
        if empresa_id is not None:
            stmt = stmt.where(Categoria.empresa_id == empresa_id)
        return self.db.execute(stmt).scalar_one_or_none()

    def existe_nombre(self, nombre: str, empresa_id: int | None = None, excluyendo_id: int | None = None) -> bool:
        stmt = select(func.count()).select_from(Categoria).where(
            func.lower(Categoria.nombre) == nombre.strip().lower()
        )
        if empresa_id is not None:
            stmt = stmt.where(Categoria.empresa_id == empresa_id)
        if excluyendo_id is not None:
            stmt = stmt.where(Categoria.id != excluyendo_id)
        return self.db.execute(stmt).scalar_one() > 0

    def crear(self, categoria: Categoria) -> Categoria:
        self.db.add(categoria)
        self.db.commit()
        self.db.refresh(categoria)
        return categoria

    def guardar(self, categoria: Categoria) -> Categoria:
        self.db.commit()
        self.db.refresh(categoria)
        return categoria

    def eliminar(self, categoria: Categoria) -> None:
        self.db.delete(categoria)
        self.db.commit()


class TallasRepository:
    def __init__(self, db: Session):
        self.db = db

    def listar(self, search: str | None = None, is_active: bool | None = None, empresa_id: int | None = None) -> list[Talla]:
        stmt = select(Talla)
        if empresa_id is not None:
            stmt = stmt.where(Talla.empresa_id == empresa_id)
        if search:
            stmt = stmt.where(func.lower(Talla.nombre).like(f"%{search.strip().lower()}%"))
        if is_active is not None:
            stmt = stmt.where(Talla.is_active == is_active)
        stmt = stmt.order_by(Talla.nombre)
        return list(self.db.execute(stmt).scalars().all())

    def get_by_id(self, talla_id: int, empresa_id: int | None = None) -> Talla | None:
        stmt = select(Talla).where(Talla.id == talla_id)
        if empresa_id is not None:
            stmt = stmt.where(Talla.empresa_id == empresa_id)
        return self.db.execute(stmt).scalar_one_or_none()

    def existe_nombre(self, nombre: str, empresa_id: int | None = None, excluyendo_id: int | None = None) -> bool:
        stmt = select(func.count()).select_from(Talla).where(
            func.lower(Talla.nombre) == nombre.strip().lower()
        )
        if empresa_id is not None:
            stmt = stmt.where(Talla.empresa_id == empresa_id)
        if excluyendo_id is not None:
            stmt = stmt.where(Talla.id != excluyendo_id)
        return self.db.execute(stmt).scalar_one() > 0

    def crear(self, talla: Talla) -> Talla:
        self.db.add(talla)
        self.db.commit()
        self.db.refresh(talla)
        return talla

    def guardar(self, talla: Talla) -> Talla:
        self.db.commit()
        self.db.refresh(talla)
        return talla

    def eliminar(self, talla: Talla) -> None:
        self.db.delete(talla)
        self.db.commit()


class ColoresRepository:
    def __init__(self, db: Session):
        self.db = db

    def listar(self, search: str | None = None, is_active: bool | None = None, empresa_id: int | None = None) -> list[Color]:
        stmt = select(Color)
        if empresa_id is not None:
            stmt = stmt.where(Color.empresa_id == empresa_id)
        if search:
            stmt = stmt.where(func.lower(Color.nombre).like(f"%{search.strip().lower()}%"))
        if is_active is not None:
            stmt = stmt.where(Color.is_active == is_active)
        stmt = stmt.order_by(Color.nombre)
        return list(self.db.execute(stmt).scalars().all())

    def get_by_id(self, color_id: int, empresa_id: int | None = None) -> Color | None:
        stmt = select(Color).where(Color.id == color_id)
        if empresa_id is not None:
            stmt = stmt.where(Color.empresa_id == empresa_id)
        return self.db.execute(stmt).scalar_one_or_none()

    def existe_nombre(self, nombre: str, empresa_id: int | None = None, excluyendo_id: int | None = None) -> bool:
        stmt = select(func.count()).select_from(Color).where(
            func.lower(Color.nombre) == nombre.strip().lower()
        )
        if empresa_id is not None:
            stmt = stmt.where(Color.empresa_id == empresa_id)
        if excluyendo_id is not None:
            stmt = stmt.where(Color.id != excluyendo_id)
        return self.db.execute(stmt).scalar_one() > 0

    def crear(self, color: Color) -> Color:
        self.db.add(color)
        self.db.commit()
        self.db.refresh(color)
        return color

    def guardar(self, color: Color) -> Color:
        self.db.commit()
        self.db.refresh(color)
        return color

    def eliminar(self, color: Color) -> None:
        self.db.delete(color)
        self.db.commit()
