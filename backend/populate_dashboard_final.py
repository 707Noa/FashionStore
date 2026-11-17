#!/usr/bin/env python3
"""
Enrich FashionStore demo data with dashboard reporting data.

This script complements populate_final.py by:
1. Updating existing 60 sales to PAGADA state with diverse payment methods
2. Creating ~40 reservas with different states
3. Creating ~15 devoluciones/cambios linked to existing sales
4. Enabling dashboard metrics: ingresos, ventas por semana/tipo/sucursal/categoría

SECURITY: Operates exclusively on enterprise_id=1 with explicit confirmation.
Respects existing data and implements idempotence.
"""
import os
import sys

if "DATABASE_URL" not in os.environ:
    print("[CRITICAL] DATABASE_URL not set. This script must run in Railway environment.")
    sys.exit(1)

from datetime import datetime, timedelta, date, time
from decimal import Decimal
from random import randint, choice, uniform

from app.db.session import SessionLocal
from modules.P7_GestionSaaSySuscripciones.Models.empresa import Empresa
from modules.P2_UsuariosYAccesos.Models.usuario import Usuario
from modules.P2_UsuariosYAccesos.Models.rol import RolUsuario
from modules.P1_SucursalesYCatalogos.Models.sucursal import Sucursal
from modules.P1_SucursalesYCatalogos.Models.producto_variante import ProductoVariante
from modules.P4_ReservasYAtencion.Models.reserva import Reserva, ReservaDetalle, EstadoReserva, calcular_estado_general
from modules.P5_ComprasVentasYPagos.Models.venta import Venta, VentaDetalle, EstadoVenta
from modules.P5_ComprasVentasYPagos.Models.pago import Pago, ProveedorPago, EstadoPago
from modules.P5_ComprasVentasYPagos.Models.devolucion import DevolucionCambio, TipoOperacionDevolucion, MotivoDevolucion

EMPRESA_ID = 1
BASE_DATE = datetime(2026, 1, 1)

print("=" * 80)
print("FashionStore Dashboard Demo Data Enrichment")
print("=" * 80)
print(f"Database: {os.environ.get('DATABASE_URL', 'unknown')[:50]}...")
print(f"Enterprise: {EMPRESA_ID}")
print("")
print("This script will:")
print("  - Update 60 existing sales to PAGADA state")
print("  - Diversify payment methods (STRIPE, EFECTIVO, TARJETA, QR)")
print("  - Create ~40 clientes")
print("  - Create ~40 reservas with various states")
print("  - Create ~15 devoluciones/cambios linked to sales")
print("  - Idempotent execution")
print("")

user_input = input("Type AUTHORIZE to proceed: ").strip().upper()
if user_input != "AUTHORIZE":
    print("[CANCELLED] Not authorized. Exiting.")
    sys.exit(0)

print("\n[OK] Authorization received. Beginning enrichment...\n")

db = SessionLocal()
trans = db.begin()

try:
    empresa = db.query(Empresa).filter_by(id=EMPRESA_ID).first()
    if not empresa:
        raise ValueError(f"Empresa {EMPRESA_ID} no existe")

    print(f"[OK] Empresa: {empresa.nombre}")

    sucursales = db.query(Sucursal).filter_by(empresa_id=EMPRESA_ID).all()
    if not sucursales:
        raise ValueError("No sucursales found")

    variantes = db.query(ProductoVariante).all()
    if not variantes:
        raise ValueError("No variantes found")

    # === ACTUALIZAR VENTAS A PAGADA ===
    count_ventas_updated = 0
    ventas = db.query(Venta).filter_by(empresa_id=EMPRESA_ID).all()

    for venta in ventas:
        if venta.estado != EstadoVenta.PAGADA:
            venta.estado = EstadoVenta.PAGADA
            count_ventas_updated += 1

            # Actualizar pago asociado
            pago = db.query(Pago).filter_by(venta_id=venta.id).first()
            if pago and pago.estado != EstadoPago.PAGADO:
                # Diversify payment methods
                pago.proveedor = choice([ProveedorPago.STRIPE, ProveedorPago.EFECTIVO, ProveedorPago.TARJETA, ProveedorPago.QR])
                pago.estado = EstadoPago.PAGADO

                if pago.proveedor == ProveedorPago.STRIPE:
                    pago.stripe_payment_intent_id = f"pi_demo_{venta.id:06d}"

    db.flush()
    print(f"[OK] Ventas actualizadas a PAGADA: {count_ventas_updated}")

    # === CREAR CLIENTES PARA RESERVAS ===
    count_clientes = 0
    clientes = []
    for idx in range(1, 41):
        correo_cliente = f"cliente_{idx}@fashionstore.demo"
        existing_cliente = db.query(Usuario).filter_by(correo=correo_cliente).first()

        if not existing_cliente:
            cliente = Usuario(
                empresa_id=EMPRESA_ID,
                nombre=f"Cliente Demo {idx}",
                correo=correo_cliente,
                password_hash="demo_password_hash",
                rol=RolUsuario.CLIENTE
            )
            db.add(cliente)
            clientes.append(cliente)
            count_clientes += 1
        else:
            clientes.append(existing_cliente)

    db.flush()
    print(f"[OK] Clientes: {count_clientes}")

    # === CREAR CAJERO PARA DEVOLUCIONES ===
    correo_cajero = "cajero_demo@fashionstore.demo"
    cajero = db.query(Usuario).filter_by(correo=correo_cajero).first()

    if not cajero:
        cajero = Usuario(
            empresa_id=EMPRESA_ID,
            nombre="Cajero Demo",
            correo=correo_cajero,
            password_hash="demo_password_hash",
            rol=RolUsuario.CAJERO
        )
        db.add(cajero)
        db.flush()
        print(f"[OK] Cajero creado: {cajero.id}")
    else:
        print(f"[OK] Cajero existe: {cajero.id}")

    # === CREAR RESERVAS ===
    count_reservas = 0
    count_reserva_detalles = 0

    for idx, cliente in enumerate(clientes):
        codigo_reserva = f"RS-{idx+1:06d}"
        existing_reserva = db.query(Reserva).filter_by(codigo_reserva=codigo_reserva).first()

        if not existing_reserva:
            days_offset = randint(0, 180)
            fecha_reserva = BASE_DATE + timedelta(days=days_offset)
            hora_inicio = time(randint(9, 18), choice([0, 15, 30, 45]))

            estados_posibles = [EstadoReserva.PENDIENTE, EstadoReserva.PREPARADA, EstadoReserva.EN_ATENCION,
                               EstadoReserva.LISTA_PARA_CAJA, EstadoReserva.ATENDIDA, EstadoReserva.CANCELADA, EstadoReserva.VENCIDA]

            reserva = Reserva(
                empresa_id=EMPRESA_ID,
                cliente_id=cliente.id,
                sucursal_id=choice(sucursales).id,
                codigo_reserva=codigo_reserva,
                fecha_reserva=fecha_reserva.date(),
                hora_inicio=hora_inicio,
                estado_general=EstadoReserva.PENDIENTE
            )
            db.add(reserva)
            db.flush()
            count_reservas += 1

            # Crear detalles de reserva
            for _ in range(randint(1, 3)):
                variante = choice(variantes)
                estado_detalle = choice(estados_posibles)

                detalle = ReservaDetalle(
                    reserva_id=reserva.id,
                    producto_variante_id=variante.id,
                    cantidad=randint(1, 3),
                    estado=estado_detalle
                )
                db.add(detalle)
                count_reserva_detalles += 1

            db.flush()
            # Recalcular estado general basado en detalles
            detalles_estados = [d.estado for d in db.query(ReservaDetalle).filter_by(reserva_id=reserva.id).all()]
            reserva.estado_general = calcular_estado_general(detalles_estados)

    db.flush()
    print(f"[OK] Reservas: {count_reservas}, Detalles: {count_reserva_detalles}")

    # === CREAR DEVOLUCIONES/CAMBIOS ===
    count_devoluciones = 0
    venta_detalles = db.query(VentaDetalle).join(Venta).filter(Venta.empresa_id == EMPRESA_ID).limit(30).all()

    for idx, venta_detalle in enumerate(venta_detalles[:15]):
        tipo_op = choice([TipoOperacionDevolucion.DEVOLUCION, TipoOperacionDevolucion.CAMBIO])

        # Idempotencia: verificar si ya existe devolución para este detalle
        existing = db.query(DevolucionCambio).filter_by(venta_detalle_id=venta_detalle.id).first()

        if not existing:
            devolucion = DevolucionCambio(
                venta_id=venta_detalle.venta_id,
                venta_detalle_id=venta_detalle.id,
                variante_original_id=venta_detalle.producto_variante_id,
                tipo=tipo_op,
                cantidad=min(randint(1, venta_detalle.cantidad), venta_detalle.cantidad),
                cajero_id=cajero.id,
                sucursal_id=db.query(Venta).filter_by(id=venta_detalle.venta_id).first().sucursal_id
            )

            if tipo_op == TipoOperacionDevolucion.DEVOLUCION:
                devolucion.motivo = choice([MotivoDevolucion.TALLA, MotivoDevolucion.DEFECTO])
                devolucion.observacion = f"Demo devolución {idx+1}"
                devolucion.metodo_reembolso = choice([ProveedorPago.STRIPE, ProveedorPago.EFECTIVO, ProveedorPago.TARJETA, ProveedorPago.QR])
                devolucion.monto_reembolso = venta_detalle.precio_unitario * devolucion.cantidad
                devolucion.estado_reembolso = "REGISTRADO"
            else:  # CAMBIO
                variante_nueva = choice(variantes)
                devolucion.variante_nueva_id = variante_nueva.id

            db.add(devolucion)
            count_devoluciones += 1

    db.flush()
    print(f"[OK] Devoluciones/Cambios: {count_devoluciones}")

    trans.commit()
    print("\n[SUCCESS] Dashboard data enrichment completed")
    print(f"\nTotal records updated/created:")
    print(f"  Ventas actualizadas a PAGADA: {count_ventas_updated}")
    print(f"  Clientes: {count_clientes}")
    print(f"  Reservas: {count_reservas}")
    print(f"  Detalles Reserva: {count_reserva_detalles}")
    print(f"  Devoluciones/Cambios: {count_devoluciones}")

except Exception as e:
    trans.rollback()
    print(f"[ERROR] {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
finally:
    db.close()
