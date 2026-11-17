"""Add plan capability fields (SaaS feature flags).

Revision ID: 004_add_plan_capabilities
Revises: 003_crear_operaciones_sincronizacion_log
Create Date: 2026-11-16

These fields define which features are enabled for each plan tier:
- gestion_productos: Can manage products and inventory
- gestion_ventas: Can register sales
- reservas: Can create reservations
- operacion_offline: Can sync offline operations
- reportes_convencionales: Can access standard reports
- reportes_generativos_ia: Can access AI-generated reports (premium)

All default to True except reportes_generativos_ia (premium feature).
"""
from alembic import op
import sqlalchemy as sa


revision = '004_add_plan_capabilities'
down_revision = '003_crear_operaciones_sincronizacion_log'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column(
        'planes',
        sa.Column('gestion_productos', sa.Boolean(), nullable=False, server_default=sa.true())
    )
    op.add_column(
        'planes',
        sa.Column('gestion_ventas', sa.Boolean(), nullable=False, server_default=sa.true())
    )
    op.add_column(
        'planes',
        sa.Column('reservas', sa.Boolean(), nullable=False, server_default=sa.true())
    )
    op.add_column(
        'planes',
        sa.Column('operacion_offline', sa.Boolean(), nullable=False, server_default=sa.true())
    )
    op.add_column(
        'planes',
        sa.Column('reportes_convencionales', sa.Boolean(), nullable=False, server_default=sa.true())
    )
    op.add_column(
        'planes',
        sa.Column('reportes_generativos_ia', sa.Boolean(), nullable=False, server_default=sa.false())
    )


def downgrade() -> None:
    # WARNING: Downgrading will permanently delete the capability field values.
    # Back up your database before downgrading if these values are important.
    op.drop_column('planes', 'reportes_generativos_ia')
    op.drop_column('planes', 'reportes_convencionales')
    op.drop_column('planes', 'operacion_offline')
    op.drop_column('planes', 'reservas')
    op.drop_column('planes', 'gestion_ventas')
    op.drop_column('planes', 'gestion_productos')
