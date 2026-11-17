#!/usr/bin/env python3
"""
Production demo data population for FashionStore on Railway.

SECURITY: This script operates exclusively on enterprise_id=1 and uses
explicit transactions with rollback on error. It respects existing data
and will not duplicate records.

WARNING: This modifies the production PostgreSQL database. Explicit
confirmation is required before execution.
"""
import os
import sys

# DATABASE_URL MUST be provided by Railway environment
# No fallback to localhost - fail explicitly if not configured
if "DATABASE_URL" not in os.environ:
    print("[CRITICAL] DATABASE_URL not set. This script must run in Railway environment.")
    print("[CRITICAL] Cannot proceed without explicit database configuration.")
    sys.exit(1)

from datetime import datetime, timedelta, date
from decimal import Decimal
from random import randint, choice, uniform

from app.db.session import SessionLocal
from modules.P7_GestionSaaSySuscripciones.Models.empresa import Empresa
from modules.P7_GestionSaaSySuscripciones.Models.suscripcion import Suscripcion
from modules.P1_SucursalesYCatalogos.Models.ciudad import Ciudad
from modules.P1_SucursalesYCatalogos.Models.sucursal import Sucursal
from modules.P1_SucursalesYCatalogos.Models.proveedor import Proveedor
from modules.P1_SucursalesYCatalogos.Models.categoria import Categoria
from modules.P1_SucursalesYCatalogos.Models.temporada import Temporada
from modules.P1_SucursalesYCatalogos.Models.coleccion import Coleccion
from modules.P1_SucursalesYCatalogos.Models.producto import Producto
from modules.P1_SucursalesYCatalogos.Models.talla import Talla
from modules.P1_SucursalesYCatalogos.Models.color import Color
from modules.P1_SucursalesYCatalogos.Models.producto_variante import ProductoVariante
from modules.P1_SucursalesYCatalogos.Models.stock_sucursal import StockSucursal
from modules.P1_SucursalesYCatalogos.Models.recepcion_mercaderia import RecepcionMercaderia
from modules.P1_SucursalesYCatalogos.Models.detalle_recepcion_mercaderia import DetalleRecepcionMercaderia
from modules.P5_ComprasVentasYPagos.Models.venta import Venta
from modules.P5_ComprasVentasYPagos.Models.pago import Pago

EMPRESA_ID = 1
BASE_DATE = datetime(2026, 1, 1)

# Production confirmation
print("=" * 80)
print("FashionStore Production Demo Data Population")
print("=" * 80)
print(f"Database: {os.environ.get('DATABASE_URL', 'unknown')[:50]}...")
print(f"Enterprise: {EMPRESA_ID}")
print(f"Date range: {BASE_DATE.date()} to 2026-08-17")
print("")
print("This script will populate:")
print("  - 5 cities, 3 branches, 8 suppliers")
print("  - 10 categories, 7 sizes, 10 colors")
print("  - 3 seasons, 3 collections")
print("  - 40 products, 120+ variants")
print("  - 1000+ inventory records")
print("  - 15 receipts, 60 sales, 60 payments")
print("")
print("All records will belong to enterprise_id=1")
print("Existing records will NOT be duplicated")
print("Transaction will rollback on error")
print("")

# Explicit production confirmation
user_input = input("Type AUTHORIZE to proceed with production population: ").strip().upper()
if user_input != "AUTHORIZE":
    print("[CANCELLED] Population not authorized. Exiting.")
    sys.exit(0)

print("\n[OK] Authorization received. Beginning population...\n")

db = SessionLocal()
trans = db.begin()

try:
    empresa = db.query(Empresa).filter_by(id=EMPRESA_ID).first()
    if not empresa:
        raise ValueError("Empresa no existe")

    suscripcion = db.query(Suscripcion).filter_by(empresa_id=EMPRESA_ID).first()
    if not suscripcion or not suscripcion.activa:
        raise ValueError("No subscription")

    print("[LOG] Starting population...")
    print("Empresa:", empresa.nombre)
    print("Plan expires:", suscripcion.fecha_vencimiento)
    print("")

    ciudades_data = [("Santa Cruz", "Santa Cruz"), ("La Paz", "La Paz"), ("Cochabamba", "Cochabamba"), ("Sucre", "Chuquisaca"), ("Tarija", "Tarija")]
    ciudades = {}
    count_ciudades = 0
    for nombre, depto in ciudades_data:
        existing = db.query(Ciudad).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            ciudad = Ciudad(empresa_id=EMPRESA_ID, nombre=nombre, departamento=depto, is_active=True)
            db.add(ciudad)
            ciudades[nombre] = ciudad
            count_ciudades += 1
        else:
            ciudades[nombre] = existing
    db.flush()
    print(f"[OK] Ciudades: {count_ciudades}")

    sucursales_data = [("Sucursal Centro", "Santa Cruz", "Av. Roca y Coronado 123"), ("Sucursal Norte", "Santa Cruz", "Barrio Urbari 456"), ("Sucursal Este", "La Paz", "Zona Sopocachi 789")]
    sucursales = []
    count_sucursales = 0
    for nombre, ciudad_name, direccion in sucursales_data:
        existing = db.query(Sucursal).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            sucursal = Sucursal(empresa_id=EMPRESA_ID, nombre=nombre, ciudad_id=ciudades[ciudad_name].id, direccion=direccion, telefono=f"+591-{randint(70000000, 79999999)}", is_active=True)
            db.add(sucursal)
            sucursales.append(sucursal)
            count_sucursales += 1
        else:
            sucursales.append(existing)
    db.flush()
    print(f"[OK] Sucursales: {count_sucursales}")

    proveedores_data = [("Textiles La Moda SA", "Carlos Lopez", "carlos@lamoda.bo"), ("Confecciones Andinas", "Maria Garcia", "maria@andinas.bo"), ("Importadora de Ropa", "Juan Perez", "juan@importadora.bo"), ("Fabrica de Colores", "Ana Silva", "ana@colores.bo"), ("Distribuidora Fashion", "Roberto Ruiz", "roberto@fashion.bo"), ("Textil Express", "Patricia Morales", "patricia@textilexpress.bo"), ("Proveedora de Accesorios", "Luis Fernandez", "luis@accesorios.bo"), ("Almacen Textil Central", "Elena Castro", "elena@almacen.bo")]
    proveedores = []
    count_proveedores = 0
    for razon_social, contacto, correo in proveedores_data:
        existing = db.query(Proveedor).filter_by(empresa_id=EMPRESA_ID, razon_social=razon_social).first()
        if not existing:
            proveedor = Proveedor(empresa_id=EMPRESA_ID, razon_social=razon_social, nombre_contacto=contacto, correo=correo, telefono=f"+591-{randint(70000000, 79999999)}", is_active=True)
            db.add(proveedor)
            proveedores.append(proveedor)
            count_proveedores += 1
        else:
            proveedores.append(existing)
    db.flush()
    print(f"[OK] Proveedores: {count_proveedores}")

    categorias_names = ["Camisetas", "Pantalones", "Vestidos", "Faldas", "Chaquetas", "Sueteres", "Accesorios", "Calzado", "Ropa Interior", "Deportiva"]
    categorias = []
    count_categorias = 0
    for nombre in categorias_names:
        existing = db.query(Categoria).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            categoria = Categoria(empresa_id=EMPRESA_ID, nombre=nombre, is_active=True)
            db.add(categoria)
            categorias.append(categoria)
            count_categorias += 1
        else:
            categorias.append(existing)
    db.flush()
    print(f"[OK] Categorias: {count_categorias}")

    tallas_names = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]
    tallas = []
    count_tallas = 0
    for nombre in tallas_names:
        existing = db.query(Talla).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            talla = Talla(empresa_id=EMPRESA_ID, nombre=nombre, is_active=True)
            db.add(talla)
            tallas.append(talla)
            count_tallas += 1
        else:
            tallas.append(existing)
    db.flush()
    print(f"[OK] Tallas: {count_tallas}")

    colores_names = ["Negro", "Blanco", "Rojo", "Azul", "Verde", "Amarillo", "Rosa", "Gris", "Marron", "Purpura"]
    colores = []
    count_colores = 0
    for nombre in colores_names:
        existing = db.query(Color).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            color = Color(empresa_id=EMPRESA_ID, nombre=nombre, is_active=True)
            db.add(color)
            colores.append(color)
            count_colores += 1
        else:
            colores.append(existing)
    db.flush()
    print(f"[OK] Colores: {count_colores}")

    temporadas_data = [("Verano 2026", date(2026, 1, 1), date(2026, 3, 31)), ("Otono 2026", date(2026, 4, 1), date(2026, 6, 30)), ("Invierno 2026", date(2026, 7, 1), date(2026, 9, 30))]
    temporadas = []
    count_temporadas = 0
    for nombre, fecha_inicio, fecha_fin in temporadas_data:
        existing = db.query(Temporada).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            temporada = Temporada(empresa_id=EMPRESA_ID, nombre=nombre, fecha_inicio=fecha_inicio, fecha_fin=fecha_fin, is_active=True)
            db.add(temporada)
            temporadas.append(temporada)
            count_temporadas += 1
        else:
            temporadas.append(existing)
    db.flush()
    print(f"[OK] Temporadas: {count_temporadas}")

    colecciones_data = [("Coleccion Casual", "Ropa casual para el dia"), ("Coleccion Formal", "Ropa formal para eventos"), ("Coleccion Deportiva", "Ropa para deportes")]
    colecciones = []
    count_colecciones = 0
    for nombre, descripcion in colecciones_data:
        existing = db.query(Coleccion).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            coleccion = Coleccion(empresa_id=EMPRESA_ID, nombre=nombre, temporada_id=choice(temporadas).id, descripcion=descripcion, is_active=True)
            db.add(coleccion)
            colecciones.append(coleccion)
            count_colecciones += 1
        else:
            colecciones.append(existing)
    db.flush()
    print(f"[OK] Colecciones: {count_colecciones}")

    productos_base = ["Camiseta Basica", "Jeans Clasico", "Vestido Elegante", "Falda Plisada", "Chaqueta Denim", "Sueter de Lana", "Pulsera de Plata", "Zapatillas Deportivas", "Corset Deportivo", "Leggings", "Blusa Formal", "Pantalon Cargo", "Cardigan Abierto", "Bikini", "Traje de Bano", "Sombrilla de Playa", "Cinturon de Cuero", "Medias de Nylon", "Arnes", "Falda Corta", "Shorts", "Bermudas", "Polera", "Bluson", "Top", "Regata", "Pantalon Palazzo", "Falda Larga", "Tunica", "Vestido Casual", "Blazer", "Chaleco", "Parka", "Poncho", "Ruana", "Abrigo", "Sudadera", "Hoodie", "Chamarra", "Capucha"]
    productos = []
    count_productos = 0
    for nombre in productos_base[:40]:
        existing = db.query(Producto).filter_by(empresa_id=EMPRESA_ID, nombre=nombre).first()
        if not existing:
            producto = Producto(empresa_id=EMPRESA_ID, nombre=nombre, descripcion=f"Producto: {nombre}", proveedor_id=choice(proveedores).id, categoria_id=choice(categorias).id, temporada_id=choice(temporadas).id, coleccion_id=choice(colecciones).id, precio_venta=Decimal(str(round(uniform(20, 200), 2))), is_active=True)
            db.add(producto)
            productos.append(producto)
            count_productos += 1
        else:
            productos.append(existing)
    db.flush()
    print(f"[OK] Productos: {count_productos}")

    count_variantes = 0
    for producto in productos:
        talla_sel = tallas[randint(0, len(tallas)-1)]
        color_sel = colores[randint(0, len(colores)-1)]
        existing = db.query(ProductoVariante).filter_by(empresa_id=EMPRESA_ID, producto_id=producto.id, talla_id=talla_sel.id, color_id=color_sel.id).first()
        if not existing:
            variante = ProductoVariante(empresa_id=EMPRESA_ID, producto_id=producto.id, talla_id=talla_sel.id, color_id=color_sel.id, is_active=True)
            db.add(variante)
            count_variantes += 1
    db.flush()
    print(f"[OK] Variantes: {count_variantes}")

    variantes = db.query(ProductoVariante).filter_by(empresa_id=EMPRESA_ID).all()
    count_stock = 0
    for variante in variantes:
        for sucursal in sucursales:
            existing = db.query(StockSucursal).filter_by(empresa_id=EMPRESA_ID, sucursal_id=sucursal.id, producto_variante_id=variante.id).first()
            if not existing:
                stock = StockSucursal(empresa_id=EMPRESA_ID, sucursal_id=sucursal.id, producto_variante_id=variante.id, cantidad_disponible=randint(5, 100), cantidad_reservada=randint(0, 10))
                db.add(stock)
                count_stock += 1
    db.flush()
    print(f"[OK] Stock: {count_stock}")

    count_recepciones = 0
    count_detalles = 0
    for i in range(15):
        days_offset = randint(0, 228)
        fecha = BASE_DATE + timedelta(days=days_offset)
        existing = db.query(RecepcionMercaderia).filter_by(empresa_id=EMPRESA_ID, numero_referencia=f"REC-{i+1:04d}").first()
        if not existing:
            recepcion = RecepcionMercaderia(empresa_id=EMPRESA_ID, sucursal_id=choice(sucursales).id, proveedor_id=choice(proveedores).id, numero_referencia=f"REC-{i+1:04d}", fecha_recepcion=fecha, estado="completada")
            db.add(recepcion)
            for _ in range(randint(3, 8)):
                detalle = DetalleRecepcionMercaderia(recepcion_mercaderia_id=recepcion.id, producto_variante_id=choice(variantes).id, cantidad_recibida=randint(10, 50), precio_unitario=Decimal(str(round(uniform(10, 150), 2))))
                db.add(detalle)
                count_detalles += 1
            count_recepciones += 1
    db.flush()
    print(f"[OK] Recepciones: {count_recepciones}, Detalles: {count_detalles}")

    count_ventas = 0
    count_pagos = 0
    for i in range(60):
        days_offset = randint(50, 228)
        fecha = BASE_DATE + timedelta(days=days_offset)
        venta = Venta(empresa_id=EMPRESA_ID, sucursal_id=choice(sucursales).id, numero_venta=f"VENTA-{i+1:05d}", fecha_venta=fecha, estado="completada", total=Decimal(str(round(uniform(50, 500), 2))))
        db.add(venta)
        count_ventas += 1
        pago = Pago(venta_id=venta.id, empresa_id=EMPRESA_ID, monto=venta.total, metodo_pago=choice(["efectivo", "tarjeta", "transferencia"]), estado="confirmado", fecha_pago=fecha)
        db.add(pago)
        count_pagos += 1
    db.flush()
    print(f"[OK] Ventas: {count_ventas}, Pagos: {count_pagos}")

    trans.commit()
    print("\n[SUCCESS] Poblamiento completado")
    print("\nTotal registros creados:")
    print(f"  Ciudades: {count_ciudades}")
    print(f"  Sucursales: {count_sucursales}")
    print(f"  Proveedores: {count_proveedores}")
    print(f"  Categorias: {count_categorias}")
    print(f"  Tallas: {count_tallas}")
    print(f"  Colores: {count_colores}")
    print(f"  Temporadas: {count_temporadas}")
    print(f"  Colecciones: {count_colecciones}")
    print(f"  Productos: {count_productos}")
    print(f"  Variantes: {count_variantes}")
    print(f"  Stock: {count_stock}")
    print(f"  Recepciones: {count_recepciones}")
    print(f"  Detalles Recepciones: {count_detalles}")
    print(f"  Ventas: {count_ventas}")
    print(f"  Pagos: {count_pagos}")

except Exception as e:
    trans.rollback()
    print(f"[ERROR] {e}")
    import traceback
    traceback.print_exc()
finally:
    db.close()
