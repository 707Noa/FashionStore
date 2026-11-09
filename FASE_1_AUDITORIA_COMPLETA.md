# FASE 1: AUDITORÍA COMPLETA DEL CÓDIGO REAL

**Auditor:** Claude Senior (Angular/PWA/IndexedDB)  
**Fecha:** 2026-11-08  
**Estado:** Inspección completada sin modificaciones de lógica

---

## HALLAZGOS DE LA AUDITORÍA

### 1. ConnectivityService.isOnline()

**Archivo:** `frontend/web/src/app/core/services/connectivity.service.ts`

#### Código Actual (líneas 31-39):
```typescript
isOnline(): boolean {
  const online = navigator.onLine;
  const subjectValue = this.isOnlineSubject.value;
  console.log(`[CONNECTIVITY AUDIT] navigator.onLine=${online} | subject=${subjectValue} | returning=${online}`);
  if (online !== subjectValue) {
    console.log(`[CONNECTIVITY WARNING] Desincronización: navigator.onLine !== BehaviorSubject`);
  }
  return online;
}
```

#### Estado:
✅ **Correcto** — Retorna `navigator.onLine` directamente  
✅ **Incluye diagnóstico** — Chequea si hay desincronización con BehaviorSubject  
❌ **Problema identificado** — NO combina condiciones como en Andrés

#### Lo que hace ACTUALMENTE:
- Retorna `true` si `navigator.onLine === true`
- Retorna `false` si `navigator.onLine === false`

#### Lo que DEBERÍA hacer (patrón de Andrés):
```typescript
const isOffline = !this.offlineService.isOnline() || (typeof navigator !== 'undefined' && !navigator.onLine);
```

Traducido a nuestra arquitectura:
```typescript
// Offline si CUALQUIERA de estas es verdad:
// 1. El servicio dice que no está online
// 2. navigator.onLine es false
```

---

### 2. crear-reserva.ts - Bifurcación

**Archivo:** `frontend/web/src/app/features/reservas/crear-reserva/crear-reserva.ts`  
**Líneas:** 261-272

#### Código Actual:
```typescript
const isOnline = this.connectivity.isOnline();
console.log(`[CU8 BIFURCACION] isOnline()=${isOnline}`);

if (!isOnline) {
  console.log('[CU8 BIFURCACION] ✅ Entra a OFFLINE — usando IndexedDB');
  this._crearReservaOffline();
  return;
}

console.log('[CU8 BIFURCACION] ❌ Entra a ONLINE — usando HTTP');
this._crearReservaOnline();
```

#### Estado:
✅ **Correcta lógica** — Si `isOnline()` es falso, entra a offline  
✅ **Incluye logs** — Permite diagnosticar qué rama se toma  
❌ **Depende de una sola fuente** — Si `isOnline()` es débil, la bifurcación también

---

### 3. offline-storage.service.ts - IndexedDB

**Archivo:** `frontend/web/src/app/core/services/offline-storage.service.ts`

#### Versión IndexedDB (línea 95):
```typescript
const request = indexedDB.open(this.dbName, 4);
```
✅ **Correcto** — Versión 4

#### Object Stores (líneas 121-132):
```typescript
if (!db.objectStoreNames.contains('offline_reservas')) {
  const reservasStore = db.createObjectStore('offline_reservas', { keyPath: 'uuid' });
  reservasStore.createIndex('empresa_id', 'empresa_id');
  reservasStore.createIndex('estado_sync', 'estado_sync');
}

if (!db.objectStoreNames.contains('offline_reserva_detalles')) {
  const detallesStore = db.createObjectStore('offline_reserva_detalles', { keyPath: 'uuid' });
  detallesStore.createIndex('reserva_uuid', 'reserva_uuid');
}
```
✅ **Correcto** — Ambos stores existen con keypaths correctos

#### saveReservaOffline() (líneas 620-703):
```typescript
// Patrón atómico: poner TODO directamente en transacción
reservasStore.put(reservaData);
for (const detalle of reserva.detalles) {
  detallesStore.put({...});
}

transaction.oncomplete = () => resolve();
transaction.onerror = () => reject(...);
transaction.onabort = () => reject(...);
```
✅ **Correcto** — Patrón atómico sin callbacks anidados

---

### 4. Referencias a isOnline() en el código

```
✅ offline-media.pipe.ts
✅ offline-media-resolver.service.ts
✅ catalogo.service.ts (4 referencias)
✅ disponibilidad.service.ts
✅ producto-detalle.ts
✅ hero-banner.ts
✅ crear-reserva.ts (2 referencias)
```

**Hallazgo:** Todas las referencias usan `isOnline()` de forma coherente. No hay conflictos.

---

## ANÁLISIS DEL PROBLEMA

### El usuario reporta:
> "Al desconectar Wi-Fi, CU8 sigue entrando en modo ONLINE"

### Posibles causas identificadas:

#### CAUSA A: `navigator.onLine` siempre retorna `true` (incluso offline)
- **Síntoma:** Chrome DevTools muestra "Offline" pero `navigator.onLine === true`
- **Probable si:** El navegador NO está en modo Offline en DevTools, o hay un emulador que no respeta `navigator.onLine`

#### CAUSA B: El código servido es el VIEJO (antes de nuestros cambios)
- **Síntoma:** Ves logs del health check: `🔍 Verificando: http://localhost:8000/api/v1/health`
- **Probable si:** El dev server no se reinició o el navegador cacheó el JS antiguo

#### CAUSA C: `isOnline()` debe combinar condiciones como Andrés
- **Síntoma:** `navigator.onLine === false` pero `isOnline()` retorna `true` de todas formas
- **Probable si:** Hay lógica adicional que sobrescribe el estado

#### CAUSA D: BehaviorSubject está desincronizado
- **Síntoma:** El log muestra: `[CONNECTIVITY WARNING] Desincronización: navigator.onLine !== BehaviorSubject`
- **Probable si:** Los eventos 'online'/'offline' no se disparan correctamente

---

## PLAN CORRECCIÓN (FASE 2)

La solución correcta siguiendo el patrón de Andrés:

```typescript
// En ConnectivityService
isOnline(): boolean {
  // Combinar AMBAS condiciones como lo hace Andrés
  const navigatorOnline = typeof navigator !== 'undefined' && navigator.onLine;
  const subjectOnline = this.isOnlineSubject.value;
  
  // Offline si CUALQUIERA dice que no está online
  const offline = !navigatorOnline || !subjectOnline;
  
  console.log(`[CONNECTIVITY CHECK] navigator=${navigatorOnline} | subject=${subjectOnline} | isOnline=${!offline}`);
  return !offline;
}
```

**OR más simple (recomendado):**

```typescript
isOnline(): boolean {
  // Online SOLO si AMBAS son true
  return (typeof navigator !== 'undefined' && navigator.onLine) && 
         this.isOnlineSubject.value;
}
```

---

## INSTRUCCIONES PARA DIAGNOSTICAR (AHORA MISMO)

### PASO 1: Verificar que el código nuevo se está sirviendo

1. Abre la aplicación en `http://localhost:5000`
2. Abre DevTools Console (F12)
3. Busca este log en rojo/azul:

```
[CONNECTIVITY] VERSIÓN AUDITADA 2026-11-08 — navigator.onLine=true
[CONNECTIVITY] Usando SOLO navigator.onLine (SIN health check a /health)
```

**Si NO ves este log:**
- El dev server está sirviendo código viejo
- Solución: mata todos los procesos Node y reinicia dev server limpio
- Limpia caché del navegador (Ctrl+Shift+Delete)
- Desactiva Service Workers (DevTools → Application → Service Workers)

**Si SÍ ves el log:**
- El código nuevo se está sirviendo ✅
- Continúa con PASO 2

### PASO 2: Verificar navigator.onLine

1. En Console, ejecuta:
```javascript
console.log('navigator.onLine:', navigator.onLine);
```

**Resultado esperado:** `true` (con internet)

2. Desconecta Wi-Fi físicamente
3. En Console ejecuta:
```javascript
console.log('navigator.onLine:', navigator.onLine);
```

**Resultado esperado:** `false` (sin internet)

**Si sigue siendo `true`:**
- Problema en el navegador o Sistema Operativo
- No es un problema de nuestro código

### PASO 3: Crear una reserva ONLINE y verificar que entra a ONLINE

1. Con Wi-Fi conectado
2. Prepara datos offline (entra a producto, selecciona sucursal, etc.)
3. Presiona "Confirmar reserva"
4. En Console busca:

```
[CU8 BIFURCACION] isOnline()=true
[CU8 BIFURCACION] ❌ Entra a ONLINE — usando HTTP
```

✅ **Correcto** — Entra a ONLINE

### PASO 4: Crear una reserva OFFLINE y verificar que entra a OFFLINE

1. Desconecta Wi-Fi
2. Vuelve a la pantalla de producto
3. Presiona "Confirmar reserva"
4. En Console busca:

```
[CU8 BIFURCACION] isOnline()=false
[CU8 BIFURCACION] ✅ Entra a OFFLINE — usando IndexedDB
[CU08 OFFLINE] reserva iniciada: {uuid}
[CU08 OFFLINE] detalles encolados: 1
[CU08 OFFLINE] transacción completada: {uuid}
```

**Si ves estos logs:**
- ✅ CU8 detecta correctamente offline
- ✅ IndexedDB está funcionando
- **Problema solucionado**

**Si NO ves estos logs:**
- ❌ `isOnline()` retorna `true` aunque `navigator.onLine === false`
- → **Aplicar FASE 2**

---

## RESUMEN AUDITORÍA FASE 1

| Componente | Estado | Acción |
|-----------|--------|--------|
| `ConnectivityService.isOnline()` | ⚠️ Débil | Combinar condiciones (FASE 2) |
| `crear-reserva.ts` bifurcación | ✅ Correcta | Mantener |
| `offline-storage.service.ts` | ✅ Correcta | Mantener |
| IndexedDB stores | ✅ Correcta | Mantener |
| `saveReservaOffline()` | ✅ Correcta | Mantener |

---

## PRÓXIMO PASO

Ejecuta los pasos 1-4 de diagnóstico y reporta:

1. ¿Ves el log de versión auditada?
2. ¿Qué valor retorna `navigator.onLine` offline?
3. ¿Cuál de estos logs ves cuando desconectas Wi-Fi?
   - A: `[CU8 BIFURCACION] isOnline()=false` ✅
   - B: `[CU8 BIFURCACION] isOnline()=true` ❌
   - C: Ninguno (la app no responde)

