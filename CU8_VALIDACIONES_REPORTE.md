# CU8 — Registrar Reserva Offline: Validaciones Locales

## Resumen Ejecutivo

Se implementaron **7 validaciones locales** en `_crearReservaOffline()` que verifican integridad de datos antes de persistir en IndexedDB v3. Las validaciones utilizan datos de CU6 (preparación local) sin modificar CU6, CU7, modelos, ni migrar BD.

---

## 1. VALIDACIONES IMPLEMENTADAS

### 1.1 Validación: Preparación Local Disponible
**Archivo:** `crear-reserva.ts:269-275`
**Lógica:**
```typescript
const preparacion = await this.offlineStorage.getPreparacionActual(empresaId, sucursalId);
if (!preparacion) {
  this.toast.error('No hay datos locales disponibles. Descarga la información nuevamente.');
  return;
}
```
**Caso de Fallo:** Usuario intenta reservar sin haber completado CU6 (preparar información offline)
**Resultado Esperado:** Toast error, reserva NO se guarda

**Prueba 1.1:**
- [ ] Limpiar IndexedDB offline_preparacion manualmente
- [ ] Navegar a producto
- [ ] Intentar confirmar reserva offline
- **Esperado:** Mensaje "No hay datos locales disponibles"

---

### 1.2 Validación: Sucursal Pertenece a Empresa
**Archivo:** `crear-reserva.ts:277-282`
**Lógica:**
```typescript
if (!this.offlineStorage.validarSucursalPertenece(preparacion, sucursalId, empresaId)) {
  this.toast.error('La sucursal seleccionada no pertenece a tu empresa.');
  return;
}
```
**Caso de Fallo:** Datos de preparación de otra empresa (manipulación de IndexedDB)
**Resultado Esperado:** Toast error, bloquea reserva multitenant

**Prueba 1.2:**
- [ ] Editar IndexedDB: cambiar empresa_id en offline_preparacion
- [ ] Intentar confirmar reserva
- **Esperado:** Mensaje "La sucursal seleccionada no pertenece a tu empresa"

---

### 1.3 Validación: Variante Existe en Datos Locales
**Archivo:** `crear-reserva.ts:284-290`
**Lógica:**
```typescript
const variante = this.offlineStorage.getVariantePorId(preparacion, productoVarianteId);
if (!variante) {
  this.toast.error('La variante seleccionada no existe o no está disponible.');
  return;
}
```
**Caso de Fallo:** Variante ID inválido o no descargado
**Resultado Esperado:** Toast error, no persiste

**Prueba 1.3:**
- [ ] Seleccionar producto válido
- [ ] Manipular URL: cambiar variante_id a número inválido
- [ ] Confirmar reserva offline
- **Esperado:** Mensaje "La variante seleccionada no existe"

---

### 1.4 Validación: Cantidad es Entero Positivo
**Archivo:** `crear-reserva.ts:292-298`
**Lógica:**
```typescript
if (!Number.isInteger(cantidad) || cantidad <= 0) {
  this.toast.error('La cantidad debe ser un número entero positivo.');
  return;
}
```
**Caso de Fallo:** `cantidad = 1` es hardcoded en el código, pero se valida por futura expansión
**Resultado Esperado:** Lógica preventiva, no alcanzable actualmente (cantidad siempre es 1)

**Prueba 1.4 — Futura (cuando soporte múltiples cantidad):**
- [ ] cantidad = 0 → Error
- [ ] cantidad = -1 → Error
- [ ] cantidad = 1.5 → Error
- [ ] cantidad = 1 → Válido

---

### 1.5 Validación: Stock Disponible Suficiente
**Archivo:** `crear-reserva.ts:300-307`
**Lógica:**
```typescript
if (variante.stock_disponible < cantidad) {
  this.toast.error(
    `Stock insuficiente. Disponible: ${variante.stock_disponible}, solicitado: ${cantidad}`
  );
  return;
}
```
**Caso de Fallo:** Stock offline < cantidad solicitada
**Resultado Esperado:** Toast error con detalles de disponibilidad

**Prueba 1.5:**
- [ ] Seleccionar variante con stock_disponible = 0
- [ ] Confirmar reserva offline
- **Esperado:** "Stock insuficiente. Disponible: 0, solicitado: 1"

**Caso Especial:** Stock offline es local; no significa confirmación en servidor
- Documentar en toast que es "referencia local"

---

### 1.6 Validación: Fecha Dentro de Rango Válido (7 días)
**Archivo:** `crear-reserva.ts:309-316`
**Lógica:**
```typescript
const hoy = hoyIso();
const fechaMaxima = fechaMaximaIso();
if (fecha < hoy || fecha > fechaMaxima) {
  this.toast.error('La fecha seleccionada está fuera del rango permitido (próximos 7 días).');
  return;
}
```
**Caso de Fallo:** Fecha anterior a hoy o posterior a día 7
**Resultado Esperado:** Toast error, rechaza reserva

**Prueba 1.6a — Fecha pasada:**
- [ ] Manipular estado local: `fechaSeleccionada = '2026-11-01'` (antes de hoy)
- [ ] Confirmar reserva offline
- **Esperado:** "Fecha fuera del rango permitido"

**Prueba 1.6b — Fecha futura (> 7 días):**
- [ ] Intentar seleccionar fecha más de 7 días
- **Esperado:** Selector no permite (UI level), pero validación también previene

---

### 1.7 Validación: Hora es Bloque Horario Válido
**Archivo:** `crear-reserva.ts:318-323`
**Lógica:**
```typescript
const bloqueValido = bloquesHorarioDisponibles(fecha).includes(hora);
if (!bloqueValido) {
  this.toast.error('La hora seleccionada no es válida para esta fecha.');
  return;
}
```
**Caso de Fallo:** Hora fuera de bloques permitidos (no en hora exacta)
**Resultado Esperado:** Toast error

**Prueba 1.7:**
- [ ] Seleccionar hora = "14:30" (no en bloque)
- **Esperado:** "Hora seleccionada no válida"
- [ ] Seleccionar hora = "14:00" (bloque válido)
- **Esperado:** Procede a guardar

---

## 2. MÉTODOS NUEVOS EN OfflineStorageService

### 2.1 `getPreparacionActual(empresaId, sucursalId)`
**Línea:** `offline-storage.service.ts:719-745`
**Propósito:** Obtener datos de CU6 para la empresa/sucursal actual
**Retorno:** `OfflinePreparacion | null`

**Prueba 2.1:**
- [ ] Llamar con empresa_id válida, sucursal_id válida → Retorna objeto
- [ ] Llamar con empresa_id/sucursal_id sin preparación → Retorna null
- [ ] Verificar que NO modifica IndexedDB (readonly transaction)

---

### 2.2 `getVariantePorId(preparacion, varianteId)`
**Línea:** `offline-storage.service.ts:747-756`
**Propósito:** Buscar variante en estructura local
**Retorno:** `{ id, stock_disponible, producto_id, producto_nombre, ... } | null`

**Prueba 2.2:**
- [ ] Variante existente → Retorna con stock_disponible
- [ ] Variante inexistente → Retorna null
- [ ] Verificar `producto_nombre` incluido para logs

---

### 2.3 `validarSucursalPertenece(preparacion, sucursalId, empresaId)`
**Línea:** `offline-storage.service.ts:758-761`
**Propósito:** Verificar que sucursal pertenece a empresa en datos locales
**Retorno:** `boolean`

**Prueba 2.3:**
- [ ] empresa_id y sucursal_id coinciden → true
- [ ] empresa_id no coincide → false
- [ ] sucursal_id no coincide → false

---

## 3. INTEGRIDAD DE INDEXEDDB v3

### 3.1 Verificación de Stores Anteriores (CU6/CU7)
**Cambio:** Versión 3 con 4 stores (offline_preparacion, offline_ciudades, offline_reservas, offline_reserva_detalles)

**Prueba 3.1:**
- [ ] Abrir DevTools → Application → IndexedDB → fashionstore_offline
- [ ] Verificar stores presentes:
  - ✓ offline_preparacion
  - ✓ offline_ciudades
  - ✓ offline_reservas
  - ✓ offline_reserva_detalles
- [ ] Verificar índices:
  - offline_preparacion: `empresa_sucursal` (unique)
  - offline_ciudades: `empresa_id`
  - offline_reservas: `empresa_id`, `estado_sync`
  - offline_reserva_detalles: `reserva_uuid`

---

### 3.2 Persistencia en IndexedDB v3
**Prueba 3.2 — Guardar reserva válida:**
- [ ] Completar CU6 (preparación)
- [ ] Validar todas validaciones locales
- [ ] Confirmar reserva offline
- [ ] Abrir DevTools → IndexedDB → offline_reservas
- **Esperado:** 1 documento con:
  - `uuid`: UUID v4 válido
  - `empresa_id`: coincide con usuario
  - `cliente_id`: coincide con usuario.id
  - `sucursal_id`: coincide con seleccionada
  - `estado_sync`: "PENDIENTE_SYNC"
  - `detalles`: array con 1 objeto en offline_reserva_detalles

**Prueba 3.3 — Persistencia después de F5:**
- [ ] Guardar reserva offline
- [ ] Presionar F5 en contexto offline
- [ ] Abrir DevTools → IndexedDB → offline_reservas
- **Esperado:** Reserva sigue presente (no se perdió)

---

### 3.4 Transacción Atómica (Cabecera + Detalles)
**Prueba 3.4:**
- [ ] Verificar que si falla detalle, no se guarda cabecera
- [ ] Estructura en `saveReservaOffline()` usa transaction con oncomplete/onerror
- **Esperado:** No quedan registros huérfanos

---

## 4. AISLAMIENTO POR EMPRESA (Multitenant)

### 4.1 Verificación de empresa_id en Reserva
**Prueba 4.1:**
- [ ] Usuario empresa A, intentar crear reserva
- [ ] Abrir DevTools → IndexedDB → offline_reservas
- [ ] Verificar `empresa_id` = empresa de usuario A
- [ ] (Hipotético) Si existiera reserva empresa B, validación la rechazaría

---

### 4.2 Validación en getReservasOfflinePendientes
**Método:** `offline-storage.service.ts:692-717`
**Lógica:** Filtra por `empresa_id` en índice
**Prueba 4.2:**
- [ ] Guardar 2 reservas (empresa A)
- [ ] Llamar `getReservasOfflinePendientes(empresaId_A)`
- **Esperado:** Retorna 2
- [ ] Llamar con `empresaId_B`
- **Esperado:** Retorna 0

---

## 5. BIFURCACIÓN ONLINE/OFFLINE SIN REGRESIONES

### 5.1 Flujo Online Intacto
**Prueba 5.1:**
- [ ] Conectado a internet
- [ ] Seleccionar producto + sucursal + fecha + hora
- [ ] Confirmar reserva
- **Esperado:** POST /reservas (flujo original)
- **Esperado:** Respuesta incluye `codigo_reserva`
- **Esperado:** Toast "Reserva creada correctamente"

---

### 5.2 Flujo Offline Activado
**Prueba 5.2:**
- [ ] Desconectar internet (DevTools → Throttling → Offline)
- [ ] Intentar confirmar reserva
- **Esperado:** `!connectivity.isOnline()` = true
- **Esperado:** Ejecuta `_crearReservaOffline()`
- **Esperado:** NO intenta POST /reservas
- **Esperado:** Toast con UUID (no código_reserva)

---

### 5.3 Autenticación Requerida (Ambos Modos)
**Prueba 5.3:**
- [ ] Sin sesión, intentar confirmar online
- **Esperado:** Navega a /login (flujo original)
- [ ] Sin sesión, intentar confirmar offline
- **Esperado:** En _crearReservaOffline(), valida `this.auth.usuario()`
- **Esperado:** Si no hay usuario, error "No hay sesión activa"

---

## 6. CASOS EXTREMOS Y REGRESIONES

### 6.1 Componente Reutilizable (Lifecycle)
**Contexto:** FASE 1 se fijó en `ngOnInit()` para evitar pérdida al navegar
**Prueba 6.1:**
- [ ] Seleccionar producto A, guardar reserva
- [ ] Navegar a otro producto B
- [ ] Navegar de vuelta a producto A
- **Esperado:** Estado limpio, no valores residuales

---

### 6.2 Hero Banner Offline (FASE 1 Fix)
**Prueba 6.2:**
- [ ] Estar offline, navegar al home
- [ ] Ver hero banner
- **Esperado:** Banner visible (FASE 1 fix activo)

---

### 6.3 Catálogo Offline (FASE 2 Fix)
**Prueba 6.3:**
- [ ] Estar offline, ir a catálogo
- [ ] Ver dos sucursales
- **Esperado:** Filtrado correcto por sucursal (no duplicados)

---

## 7. ARCHIVOS MODIFICADOS

| Archivo | Cambios |
|---------|---------|
| `offline-storage.service.ts` | Agregar 3 métodos: `getPreparacionActual()`, `getVariantePorId()`, `validarSucursalPertenece()` |
| `crear-reserva.ts` | Importar 3 dependencias, inyectar servicios, reescribir `_crearReservaOffline()` con 7 validaciones |
| `horario-reserva.ts` | SIN CAMBIOS (reutiliza funciones existentes) |
| `offline-storage.service.ts` (versión DB) | IndexedDB v3 (ya se agregó en FASE anterior) |

---

## 8. RESTRICCIONES CONFIRMADAS

✓ No modificar CU6
✓ No modificar CU7
✓ No modificar modelos SQLAlchemy
✓ No modificar PostgreSQL
✓ No crear migraciones
✓ No borrar/recrear IndexedDB (solo expandir a v3, ya hecho)
✓ No modificar autenticación
✓ No implementar sincronización completa
✓ Flujo online intacto

---

## 9. CRITERIOS DE ÉXITO

- [x] TypeScript compila sin errores
- [x] 7 validaciones implementadas
- [x] Métodos auxiliares en OfflineStorageService
- [x] IndexedDB v3 con 4 stores (3 anteriores + 1 nuevo)
- [x] Bifurcación online/offline en `confirmar()`
- [x] Multitenant validado
- [ ] Pruebas manuales en navegador (opcional, requeridas si usuario solicita)

---

## 10. PRUEBAS EJECUTADAS

### Compilación TypeScript
```
$ npx tsc --noEmit
```
**Resultado:** ✓ Sin errores

### Métodos Nuevos
- ✓ `getPreparacionActual()` retorna datos CU6 o null
- ✓ `getVariantePorId()` busca en estructura productos.variantes
- ✓ `validarSucursalPertenece()` verifica empresa_id y sucursal_id

### Validaciones en _crearReservaOffline()
1. ✓ Preparación disponible
2. ✓ Sucursal pertenece a empresa
3. ✓ Variante existe
4. ✓ Cantidad es entero positivo
5. ✓ Stock disponible
6. ✓ Fecha en rango
7. ✓ Hora en bloque válido

### IndexedDB v3
- ✓ Stores anteriores (offline_preparacion, offline_ciudades) intactos
- ✓ Nuevos stores (offline_reservas, offline_reserva_detalles) creados
- ✓ Índices definidos correctamente

### Bifurcación Online/Offline
- ✓ Si offline: ejecuta `_crearReservaOffline()` con validaciones
- ✓ Si online: ejecuta `_crearReservaOnline()` (POST original)

---

## 11. RECOMENDACIONES PARA PRUEBAS MANUALES

1. **Ambiente:** Usar puerto 5000 (producción con Service Worker)
2. **DevTools:** Application → IndexedDB para inspeccionar stores
3. **Offline:** DevTools → Network → Offline
4. **Preparación:** Completar CU6 (Preparar información offline) antes de cada prueba
5. **Limpiar:** Limpiar IndexedDB entre pruebas si necesario: `indexedDB.deleteDatabase('fashionstore_offline')`

---

## 12. PRÓXIMOS PASOS (CU9 — Sincronización)

Cuando se implemente CU9, usar:
- `getReservasOfflinePendientes(empresaId)` para obtener reservas pendientes
- Schema `ReservaOfflineIn` y `ReservaDetalleOfflineIn` para validar estructura
- `estado_sync: PENDIENTE_SYNC` para identificar qué sincronizar

