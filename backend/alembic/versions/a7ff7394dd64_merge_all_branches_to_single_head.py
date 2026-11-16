"""Merge all branches to single head

Revision ID: a7ff7394dd64
Revises: 002_add_suscripciones_table, fix_producto_variantes_is_active, k2l3m4n5o6p7
Create Date: 2026-11-08 22:12:31.199014

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a7ff7394dd64'
down_revision: Union[str, Sequence[str], None] = ('002_add_suscripciones_table', 'fix_producto_variantes_is_active', 'k2l3m4n5o6p7')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # Expand alembic_version.version_num to allow longer revision IDs (e.g., 003_crear_operaciones_sincronizacion_log)
    op.execute("ALTER TABLE alembic_version ALTER COLUMN version_num TYPE VARCHAR(128)")
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
