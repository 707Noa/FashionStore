# 📊 AUDITORÍA: Estado Actual del Carrito Offline y Compra Digital

**Fecha:** 2026-11-08  
**Alcance:** Carrito de compras (CU21) + Compra digital (CU22)  
**Metodología:** Análisis de código sin modificaciones  

---

## 1️⃣ FLUJO ACTUAL DE CARRITO ONLINE

### 1.1 Arquitectura

```
Producto → Seleccionar Variante (Talla + Color)
  ↓
AgregarCarrito (CU21) → POST /carrito/items {producto_variante_id}
  ↓
CarritoService.agregarItem() → HTTP
  ↓
Backend crea CarritoItem (item_id único)
  ↓
Mi Carrito (CU21) → GET /carrito
  ↓
Mostrar items con checkboxes seleccionados
  ↓
PATCH /carrito/items/{itemId} {seleccionado: true/false}
  ↓
DELETE /carrito/items/{itemId}
  ↓
Continuar Compra → FinalizarCompra (CU22)
```

### 1.2 Archivos que Manejan Carrito

| Archivo | Función | HTTP |
|---------|---------|------|
| `carrito/carrito.model.ts` | Modelos: CarritoItemOut, CarritoOut | N/A |
| `carrito/carrito.service.ts` | 4 métodos HTTP: consultar, agregarItem, actualizarSeleccion, eliminarItem | TODO |
| `carrito/agregar-carrito/agregar-carrito.ts` | Componente para agregar (CU21) | POST ✓ |
| `carrito/mi-carrito/mi-carrito.ts` | Vista carrito con checkboxes | GET, PATCH, DELETE ✓ |
| `compra-digital/compra-digital.model.ts` | Modelos: LineaCompraOut, ResumenCompraOut, VentaOut | N/A |
| `compra-digital/compra-digital.service.ts` | 3 métodos HTTP: obtenerResumen, listarSucursales, confirmar | TODO |
| `compra-digital/finalizar-compra/finalizar-compra.ts` | Wizard 3 pasos (resumen, sucursal, confirmacion) | GET, POST ✓ |

---

## 2️⃣ OPERACIONES ACTUALES DEL CARRITO

### ✅ AGREGAR PRODUCTO AL CARRITO
**CU21 - AgregarCarrito**

```typescript
// agregar-carrito.ts línea 96
this.service.agregarItem({ producto_variante_id: varianteId }).subscribe(...)

// carrito.service.ts línea 22-24
agregarItem(payload: AgregarItemPayload): Observable<CarritoOut> {
  return this.http.post<CarritoOut>(`${this.baseUrl}/items`, payload);
}
```

**Endpoint:** `POST /carrito/items {producto_variante_id: number}`  
**Respuesta:** CarritoOut (carrito completo actualizado)  
**Bifurcación offline:** ❌ NO EXISTE  

---

### ✅ CONSULTAR CARRITO
**CU21 - MiCarrito**

```typescript
// mi-carrito.ts línea 78
this.service.consultar().subscribe(...)

// carrito.service.ts línea 18-20
consultar(): Observable<CarritoOut> {
  return this.http.get<CarritoOut>(this.baseUrl);
}
```

**Endpoint:** `GET /carrito`  
**Respuesta:** CarritoOut (items con seleccionados, subtotal)  
**Bifurcación offline:** ❌ NO EXISTE  

---

### ✅ MODIFICAR SELECCIÓN DE ITEM
**CU21 - MiCarrito**

```typescript
// mi-carrito.ts línea 95
this.service.actualizarSeleccion(item.item_id, { seleccionado: !item.seleccionado })

// carrito.service.ts línea 26-28
actualizarSeleccion(itemId: number, payload: ActualizarSeleccionPayload): Observable<CarritoOut> {
  return this.http.patch<CarritoOut>(`${this.baseUrl}/items/${itemId}`, payload);
}
```

**Endpoint:** `PATCH /carrito/items/{itemId} {seleccionado: boolean}`  
**Respuesta:** CarritoOut (carrito actualizado con nuevo subtotal)  
**Bifurcación offline:** ❌ NO EXISTE  

---

### ✅ ELIMINAR PRODUCTO DEL CARRITO
**CU21 - MiCarrito**

```typescript
// mi-carrito.ts línea 112
this.service.eliminarItem(item.item_id).subscribe(...)

// carrito.service.ts línea 30-32
eliminarItem(itemId: number): Observable<CarritoOut> {
  return this.http.delete<CarritoOut>(`${this.baseUrl}/items/${itemId}`);
}
```

**Endpoint:** `DELETE /carrito/items/{itemId}`  
**Respuesta:** CarritoOut (carrito sin ese item)  
**Bifurcación offline:** ❌ NO EXISTE  

---

### ✅ OBTENER RESUMEN DE COMPRA
**CU22 - FinalizarCompra**

```typescript
// finalizar-compra.ts línea 89
this.service.obtenerResumen().subscribe(...)

// compra-digital.service.ts línea 18-20
obtenerResumen(): Observable<ResumenCompraOut> {
  return this.http.get<ResumenCompraOut>(`${this.baseUrl}/resumen`);
}
```

**Endpoint:** `GET /compra-digital/resumen`  
**Respuesta:** ResumenCompraOut (items seleccionados + total)  
**Bifurcación offline:** ❌ NO EXISTE  

---

### ✅ LISTAR SUCURSALES POR CIUDAD
**CU22 - FinalizarCompra**

```typescript
// finalizar-compra.ts línea 121
this.service.listarSucursales(id).subscribe(...)

// compra-digital.service.ts línea 22-25
listarSucursales(ciudadId: number): Observable<SucursalCompraOut[]> {
  const params = new HttpParams().set('ciudad_id', ciudadId);
  return this.http.get<SucursalCompraOut[]>(`${this.baseUrl}/sucursales`, { params });
}
```

**Endpoint:** `GET /compra-digital/sucursales?ciudad_id={id}`  
**Respuesta:** Array de SucursalCompraOut (con disponible_para_compra)  
**Bifurcación offline:** ❌ NO EXISTE  

---

### ✅ CONFIRMAR COMPRA
**CU22 - FinalizarCompra**

```typescript
// finalizar-compra.ts línea 154
this.service.confirmar({ sucursal_id: sucursal.id }).subscribe(...)

// compra-digital.service.ts línea 27-29
confirmar(payload: ConfirmarCompraPayload): Observable<VentaOut> {
  return this.http.post<VentaOut>(this.baseUrl, payload);
}
```

**Endpoint:** `POST /compra-digital {sucursal_id: number}`  
**Respuesta:** VentaOut (id, codigo_venta, estado: PENDIENTE_PAGO, etc.)  
**Bifurcación offline:** ❌ NO EXISTE  

---

## 3️⃣ ALMACENAMIENTO LOCAL ACTUAL

### ✅ LocalStorage

**Encontrado:**
- `fashionstore_token` — JWT (AuthService)
- `fashionstore_usuario` — Usuario actual (AuthService)

**Carrito en localStorage:** ❌ NO  

### ✅ IndexedDB v3

**Stores existentes (sin carrito):**
1. `offline_preparacion` — CU6 (productos, variantes, stock, etc.)
2. `offline_ciudades` — CU6/CU7 (ciudades)
3. `offline_reservas` — CU8 (reservas offline con UUID)
4. `offline_reserva_detalles` — CU8 (detalles de reservas)

**Carrito en IndexedDB:** ❌ NO  

### ✅ Cache Storage

**Cacheado por Service Worker:**
- Chunks de Angular (JavaScript)
- Imágenes de productos (vía OfflineImageCacheService)

**Carrito en Cache Storage:** ❌ NO  

---

## 4️⃣ BIFURCACIÓN OFFLINE ACTUAL

### AgregarCarrito (CU21)

```typescript
// agregar-carrito.ts línea 82-91
agregar(): void {
  if (!this.puedeAgregar) return;
  if (!this.isAuthenticated()) {
    // → Navegar a login (sin carrito offline)
  }
  this._agregar(varianteId, false); // → POST siempre
}
```

**Bifurcación offline:** ❌ NO EXISTE  
**Siempre:** POST /carrito/items (requiere backend)

---

### MiCarrito (CU21)

```typescript
// mi-carrito.ts línea 78
cargar(): void {
  this.service.consultar().subscribe(...) // → GET siempre
}

// mi-carrito.ts línea 95
toggleSeleccion(item: CarritoItemOut): void {
  this.service.actualizarSeleccion(...).subscribe(...) // → PATCH siempre
}

// mi-carrito.ts línea 112
eliminar(item: CarritoItemOut): void {
  this.service.eliminarItem(...).subscribe(...) // → DELETE siempre
}
```

**Bifurcación offline:** ❌ NO EXISTE  
**Siempre:** GET, PATCH, DELETE (requieren backend)

---

### FinalizarCompra (CU22)

```typescript
// finalizar-compra.ts línea 89
obtenerResumen(): void {
  this.service.obtenerResumen().subscribe(...) // → GET siempre
}

// finalizar-compra.ts línea 121
seleccionarCiudad(): void {
  this.service.listarSucursales(id).subscribe(...) // → GET siempre
}

// finalizar-compra.ts línea 154
continuarAlPago(): void {
  this.service.confirmar({ sucursal_id }).subscribe(...) // → POST siempre
}
```

**Bifurcación offline:** ❌ NO EXISTE  
**Siempre:** GET, POST (requieren backend)

---

## 5️⃣ VALIDACIONES LOCALES EXISTENTES

### AgregarCarrito

```typescript
protected get puedeAgregar(): boolean {
  return this.productoVarianteId() !== null && !this.submitting();
}
```

**Validaciones locales:**
- ✓ Variante seleccionada
- ✗ NO valida stock
- ✗ NO valida precio
- ✗ NO valida disponibilidad

---

### MiCarrito

```typescript
protected formatearMonto(valor: unknown): string {
  if (typeof valor === 'number' && Number.isFinite(valor)) {
    return valor.toFixed(2);
  }
  console.error(...); // Error si no es número
  return '--';
}
```

**Validaciones locales:**
- ✓ Valida que precio sea number (runtime check)
- ✗ NO valida stock
- ✗ NO valida disponibilidad

---

### FinalizarCompra

```typescript
get haySucursalDisponible(): boolean {
  return this.sucursales().some((s) => s.disponible_para_compra);
}

elegirSucursal(sucursal: SucursalCompraOut): void {
  if (!sucursal.disponible_para_compra) return; // Valida backend
  this.sucursalElegida.set(sucursal);
}
```

**Validaciones locales:**
- ✓ Valida que sucursal tenga disponible_para_compra (calculado por backend, NO por cliente)
- ✗ NO valida stock
- ✗ NO revalida si cambió entre pasos

---

## 6️⃣ IDENTIFICADORES UTILIZADOS

| Concepto | Identificador | Dónde | Tipo |
|----------|---------------|-------|------|
| Producto | `producto_variante_id` | Carrito, Compra | number (backend) |
| Item en carrito | `item_id` | CarritoItemOut, LineaCompraOut | number (backend) |
| Sucursal | `sucursal_id` | Carrito, Compra | number (backend) |
| Venta confirmada | `venta.id` | VentaOut | number (backend) |
| Usuario | token JWT | localStorage | string (backend) |
| Reserva offline | `uuid` (v4) | offline_reservas | string (generado local — CU8) |

**Para carrito offline:** ❌ NO EXISTE IDENTIFICADOR LOCAL  

---

## 7️⃣ DEPENDENCIAS CON BACKEND

### CRÍTICAS (sin ellas, NO funciona nada)

1. **POST /carrito/items** → Crear item en carrito backend
2. **GET /carrito** → Leer carrito del backend
3. **PATCH /carrito/items/{id}** → Actualizar selección en backend
4. **DELETE /carrito/items/{id}** → Eliminar del backend
5. **GET /compra-digital/resumen** → Backend obtiene items seleccionados
6. **GET /compra-digital/sucursales?ciudad_id** → Backend lista sucursales disponibles
7. **POST /compra-digital** → Backend crea Venta (PENDIENTE_PAGO)

**Offline sin bifurcación:** ❌ TODAS FALLAN  

---

## 8️⃣ CÓDIGO REUTILIZABLE PARA FUTURA BIFURCACIÓN OFFLINE

### ✅ Patrón de Bifurcación (de CU8 - Reservas Offline)

```typescript
// Modelo: crear-reserva.ts
if (!this.connectivity.isOnline()) {
  this._crearReservaOffline();
  return;
}
this._crearReservaOnline();
```

**Reutilizar en:** agregarCarrito.ts, mi-carrito.ts, finalizar-compra.ts

---

### ✅ Servicios Disponibles

| Servicio | Ubicación | Propósito |
|----------|-----------|-----------|
| ConnectivityService | core/services | isOnline() — detectar estado |
| OfflineStorageService | core/services | IndexedDB v3 — persistencia |
| OfflineImageCacheService | core/services | Cache imágenes (ya funciona) |
| AuthService | core/services | usuario actual, empresa_id |

**Estado para carrito offline:**
```typescript
protected readonly connectivity = inject(ConnectivityService);
private readonly offlineStorage = inject(OfflineStorageService);
```

---

### ✅ Estructuras de Datos ya Disponibles

| Estructura | Ubicación | Uso |
|-----------|-----------|-----|
| CarritoOut | carrito.model.ts | Estructura para guardar carrito |
| CarritoItemOut | carrito.model.ts | Item individual |
| OfflinePreparacion | offline-storage.service.ts | CU6 — productos, variantes, stock |

**Reutilizar:**
- CarritoOut para serializar carrito offline
- OfflinePreparacion para validar variantes (stock, precio)

---

### ✅ Métodos OfflineStorageService ya Disponibles

```typescript
// Para carrito offline, reutilizar estos:
async getPreparacionActual(empresaId, sucursalId): Promise<OfflinePreparacion>
getVariantePorId(preparacion, varianteId): any | null
validarSucursalPertenece(preparacion, sucursalId, empresaId): boolean
saveReservaOffline(reserva, empresaId): Promise<void>
getReservasOfflinePendientes(empresaId): Promise<any[]>
```

---

## 9️⃣ QUÉ FALTA PARA COMPRA DIGITAL OFFLINE

### Para Agregar Carrito Offline (CU21)

| Tarea | Complejidad | Dependencias |
|-------|-------------|-------------|
| Crear store `offline_carrito` en IndexedDB | Baja | IndexedDB v3 |
| Agregar método `saveCarritoItem()` a OfflineStorageService | Media | offline-carrito store |
| Bifurcación en AgregarCarrito: agregar localmente si offline | Media | ConnectivityService, OfflineStorageService |
| Validar variante existe en CU6 antes de agregar | Media | getPreparacionActual, getVariantePorId |
| Validar stock > 0 | Baja | OfflinePreparacion.variantes |
| Toast con UUID/tempId de item local | Baja | UX |

### Para Ver Carrito Offline (CU21)

| Tarea | Complejidad | Dependencias |
|-------|-------------|-------------|
| Método `getCarritoLocal()` — obtener items de IndexedDB | Media | offline-carrito store |
| Bifurcación en MiCarrito.cargar(): si offline, usa local | Baja | ConnectivityService |
| Sincronizar con backend al conectarse | Alta | CU9 posterior |

### Para Realizar Compra Offline (CU22)

| Tarea | Complejidad | Dependencias |
|-------|-------------|-------------|
| Guardar resumen de compra en IndexedDB | Media | offline_carrito + offline_compra stores |
| Bifurcación en FinalizarCompra.obtenerResumen() | Baja | ConnectivityService |
| Validar sucursal en CU6 (disponible_para_compra) | Media | getPreparacionActual |
| Generar codigo_venta local (temporal UUID) | Baja | UU IDv4 |
| CU9: Sincronizar compras pendientes | Alta | Backend sync logic |

---

## 🔟 ARCHIVOS QUE NECESITARÁN MODIFICACIÓN

### Para CU9 (Compra Digital Offline)

| Archivo | Cambios Requeridos | Líneas Aprox |
|---------|-------------------|-------------|
| `offline-storage.service.ts` | +6 métodos (save/get carrito, save/get compra, etc.) | +200 |
| `agregar-carrito.ts` | Bifurcación online/offline | +60 |
| `mi-carrito.ts` | Bifurcación online/offline | +80 |
| `finalizar-compra.ts` | Bifurcación online/offline | +100 |
| `carrito.service.ts` | SIN CAMBIOS (reutilizar) | 0 |
| `compra-digital.service.ts` | SIN CAMBIOS (reutilizar) | 0 |
| Backend CU22 | Recibir carrito offline en POST (CU9) | FUTURE |
| Backend (nuevo) | CU09_SincronizarCompraDigitalOffline | FUTURE |

---

## 1️⃣1️⃣ RESUMEN EJECUTIVO

### ✅ YA IMPLEMENTADO (100%)
- Carrito online completo (agregar, ver, modificar, eliminar)
- Compra digital online completa (resumen, sucursales, confirmar)
- Infraestructura offline: IndexedDB v3, ConnectivityService, CU6 con datos
- Reservas offline (CU8) como ejemplo de patrón bifurcación

### 🟡 PARCIALMENTE IMPLEMENTADO (0%)
- Nada de carrito offline aún

### ❌ FALTA IMPLEMENTAR (100%)

| Funcionalidad | Estado |
|---|---|
| Agregar al carrito offline | ❌ NO |
| Ver carrito offline | ❌ NO |
| Seleccionar items offline | ❌ NO |
| Eliminar items offline | ❌ NO |
| Obtener resumen compra offline | ❌ NO |
| Listar sucursales offline | ⚠️ Parcial (CU6 tiene sucursales, pero no `disponible_para_compra`) |
| Confirmar compra offline | ❌ NO |
| Sincronizar carrito pendiente (CU9) | ❌ NO |
| Sincronizar compra pendiente (CU9) | ❌ NO |

---

## 1️⃣2️⃣ RIESGOS Y CONSIDERACIONES

### ⚠️ Stock y Precios

**Actual (online):**
- Stock: SIEMPRE del backend (nunca cacheado, nunca local)
- Precio: SIEMPRE actual en backend (CU32 calcula con promociones)

**Para offline:**
- ⚠️ Necesitaremos cachear stock de CU6
- ⚠️ Necesitaremos cachear precio de CU6 (con promociones)
- ⚠️ Riesgo: stock offline ≠ stock en servidor antes de confirmar (CU9 debe revalidar)
- ⚠️ Riesgo: precio offline ≠ precio en servidor (CU9 debe recalcular)

### ⚠️ Disponibilidad de Sucursales

**Actual (online):**
- `disponible_para_compra` calculado por backend EN TIEMPO REAL

**Para offline:**
- ⚠️ No podemos cachear esto (cambia constantemente con el stock)
- Solución: Mostrar todas las sucursales offline, revalidar en CU9

### ⚠️ Identidades Locales

**Para Carrito:**
- Necesitamos temp_item_id (UUID v4) para cada item agregado offline
- Necesitamos temp_carrito_id para la compra completa
- Backend debe poder deduplicar por variante + cantidad en CU9

---

## 1️⃣3️⃣ CONCLUSIÓN

**El carrito digital offline NO está implementado.**

**Lo que SÍ existe y podemos reutilizar:**
1. Patrón de bifurcación (CU8)
2. ConnectivityService (detectar online/offline)
3. OfflineStorageService + IndexedDB v3
4. CU6 con datos (productos, variantes, stock, precios)
5. Modelos TypeScript (CarritoOut, CarritoItemOut)
6. Servicios HTTP (CarritoService, CompraDigitalService)

**Lo que FALTA construir:**
1. Almacenamiento IndexedDB para carrito offline
2. Almacenamiento IndexedDB para compra offline pendiente
3. Bifurcación en agregar-carrito, mi-carrito, finalizar-compra
4. Validaciones locales (usando CU6)
5. UX para mostrar estado offline/sincronización pendiente
6. CU9: sincronización de carrito y compras offline

---

**Estatus para CU9 (Compra Digital Offline):**  
✅ Infraestructura lista  
✅ Servicios reutilizables disponibles  
❌ Bifurcación offline para carrito: NO EXISTE  

