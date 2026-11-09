#!/usr/bin/env python
"""Script para actualizar la contraseña del SUPERADMIN."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from app.core.security import hash_password  # noqa: E402
from app.db.session import SessionLocal  # noqa: E402
from modules.P2_UsuariosYAccesos.Models.usuario import Usuario  # noqa: E402

db = SessionLocal()
try:
    usuario = db.query(Usuario).filter(Usuario.correo == "superadmin@fashionstore.com").first()
    if not usuario:
        print("✗ SUPERADMIN no encontrado")
        sys.exit(1)

    usuario.password_hash = hash_password("admin123")
    db.commit()
    print("✓ Contraseña del SUPERADMIN actualizada a 'admin123'")
finally:
    db.close()
