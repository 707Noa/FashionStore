"""Endpoint de CU6 — Preparar información para operación offline.

Acceso: Usuario autenticado.

Operación:
1. POST /offline/preparar — Preparar información offline de TODAS las sucursales de la empresa.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.deps import get_current_usuario
from app.db.session import get_db
from modules.P2_UsuariosYAccesos.Models.usuario import Usuario
from modules.P7_GestionSaaSySuscripciones.CU05_GestionarSuscripcionEmpresa.service import (
    FuncionalidadNoHabilitadaError,
)

from .schemas import PreparacionOfflineOut
from .service import PreparacionOfflineService, SucursalNoEncontradaError

router = APIRouter(prefix="/offline", tags=["CU6 - Preparar información offline"])


@router.post("/preparar", response_model=list[PreparacionOfflineOut])
def preparar_informacion_offline_completa(
    db: Session = Depends(get_db),
    usuario: Usuario = Depends(get_current_usuario),
) -> list[PreparacionOfflineOut]:
    """Preparar información offline para TODAS las sucursales de la empresa.

    El usuario autenticado obtiene información de TODAS sus sucursales
    necesaria para funcionar sin conexión, manteniendo la disponibilidad
    actual del catálogo (CU12) — el usuario siempre ve stock de todas
    las sucursales, no solo una.

    Validaciones:
    - Usuario debe estar autenticado
    - Empresa debe tener habilitada la capacidad offline

    Responde con array de PreparacionOfflineOut:
    - Uno por cada sucursal activa de la empresa
    - Productos activos con variantes
    - Disponibilidad en cada sucursal
    - Catálogos compartidos (tallas, colores)
    - Clientes mínimos
    - Metadata de preparación
    """
    try:
        servicio = PreparacionOfflineService(db)
        sucursales = servicio.obtener_sucursales(usuario.empresa_id)
        preparaciones = []

        for sucursal in sucursales:
            try:
                preparacion = servicio.preparar(sucursal.id, usuario.empresa_id)
                preparaciones.append(preparacion)
            except SucursalNoEncontradaError as exc:
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail=f"Data integrity error preparing sucursal {sucursal.id}: {str(exc)}",
                ) from exc

        return preparaciones
    except FuncionalidadNoHabilitadaError as exc:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Tu plan no tiene habilitada la funcionalidad de operación offline.",
        ) from exc
