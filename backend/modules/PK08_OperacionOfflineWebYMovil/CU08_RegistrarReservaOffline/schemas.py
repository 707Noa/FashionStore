"""Esquemas para CU08 — Registrar reserva offline.

Define los contratos que espera recibir CU9 cuando sincronice reservas
creadas localmente durante operación offline.
"""

from pydantic import BaseModel, Field


class ReservaDetalleOfflineIn(BaseModel):
    """Un detalle (prenda) de una reserva registrada offline."""

    producto_variante_id: int = Field(gt=0)
    cantidad: int = Field(gt=0)


class ReservaOfflineIn(BaseModel):
    """Reserva registrada localmente en CU8, enviada para sincronización en CU9.

    Contiene:
    - uuid: identificador único generado localmente
    - datos necesarios para crear la reserva en el servidor
    - detalle: la prenda (o prendas futuras) de la reserva
    """

    uuid: str = Field(min_length=36, max_length=36)
    sucursal_id: int = Field(gt=0)
    fecha_reserva: str  # ISO date: "2026-11-15"
    hora_inicio: str    # HH:MM: "14:00"
    detalles: list[ReservaDetalleOfflineIn]
