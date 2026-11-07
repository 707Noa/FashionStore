from pathlib import Path
from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from app.core.image_storage import UPLOADS_ROOT

router = APIRouter(tags=["offline-media"])


@router.get("/media/{path:path}", response_class=FileResponse)
async def get_image(path: str):
    """Sirve imágenes con headers CORS aplicados por el middleware."""
    file_path = UPLOADS_ROOT / path

    if not file_path.exists() or not file_path.is_file():
        raise HTTPException(status_code=404, detail="Imagen no encontrada")

    # Verificar que el path es relativo a UPLOADS_ROOT (prevenir directory traversal)
    try:
        file_path.relative_to(UPLOADS_ROOT)
    except ValueError:
        raise HTTPException(status_code=403, detail="Acceso denegado")

    return FileResponse(file_path)
