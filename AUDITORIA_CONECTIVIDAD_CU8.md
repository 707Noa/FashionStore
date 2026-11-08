# AUDITORÍA: Detección de Conectividad en CU8

**Fecha:** 2026-11-08  
**Estado:** Pendiente de diagnóstico en navegador

---

## 1. ConnectivityService.isOnline()

### Código ACTUAL en archivo fuente:
```typescript
// Línea 14-15: Constructor
constructor() {
  console.log(`[CONNECTIVITY INIT] ⚠️ NUEVA VERSION CARGADA — navigator.onLine=${navigator.onLine}`);
  this.setupListeners();
}

// Línea 30-37: Método isOnline()
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

### Método `checkConnectivity()`:
**✅ ELIMINADO** — Ya no existe en el código fuente.

---

## 2. BehaviorSubject

```typescript
private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
```

Se inicializa con `navigator.onLine` pero **NO se utiliza en `isOnline()`**.

Se actualiza SOLO con los eventos del navegador:
- `window.addEventListener('online', () => this.isOnlineSubject.next(true));`
- `window.addEventListener('offline', () => this.isOnlineSubject.next(false));`

---

## 3. crear-reserva.ts - Bifurcación Online/Offline

### Código ACTUAL:
```typescript
// Línea 257-281
confirmar(): void {
  console.log('[CU8 CONFIRM] Iniciando flujo de confirmación');
  
  // ... validaciones ...

  // CU8 -- Bifurcación online/offline
  const isOnline = this.connectivity.isOnline();
  console.log(`[CU8 BIFURCACION] isOnline()=${isOnline}`);
  
  if (!isOnline) {
    console.log('[CU8 BIFURCACION] ✅ Entra a OFFLINE — usando IndexedDB');
    this._crearReservaOffline();
    return;
  }

  console.log('[CU8 BIFURCACION] ❌ Entra a ONLINE — usando HTTP');
  this._crearReservaOnline();
}
```

---

## 4. Archivos Modificados en Esta Sesión

```
✅ /frontend/web/src/app/core/services/connectivity.service.ts
   - Eliminado: checkConnectivity()
   - Eliminado: lógica de fetch a /health
   - Cambio: isOnline() ahora retorna navigator.onLine

✅ /frontend/web/src/app/features/reservas/crear-reserva/crear-reserva.ts
   - Agregado: logs de diagnóstico detallados
   - Cambio: bifurcación captura resultado de isOnline() en variable
```

---

## 5. DIAGNÓSTICO ESPERADO

### Cuando **Desconectas Wi-Fi** y creas una reserva, deberías ver en Console:

```
[CONNECTIVITY INIT] ⚠️ NUEVA VERSION CARGADA — navigator.onLine=true (al cargar)
...
(desconectas Wi-Fi)
...
[CU8 CONFIRM] Iniciando flujo de confirmación
[CONNECTIVITY AUDIT] navigator.onLine=false | subject=true | returning=false
[CU8 BIFURCACION] isOnline()=false
[CU8 BIFURCACION] ✅ Entra a OFFLINE — usando IndexedDB
[CU8 OFFLINE] Iniciando guardado en IndexedDB — NO se harán peticiones HTTP
[CU08 OFFLINE] reserva iniciada: {uuid}
[CU08 OFFLINE] detalles encolados: 1
[CU08 OFFLINE] transacción completada: {uuid}
```

### Si ves logs del health check:

```
🔍 Verificando: http://localhost:8000/api/v1/health
📊 Respuesta: 200
```

**Esto significa que el código en el navegador NO es el código que modificamos.** Posibles causas:

1. **Dev server no se reinició** → hay un proceso Node antiguo sirviendo código viejo
2. **Navegador cacheó el JS antiguo** → limpiar caché del navegador (Ctrl+Shift+Delete)
3. **Archivo en dist es viejo** → hay un dist compilado con código antiguo
4. **Service Worker cacheó la app** → limpiar Service Worker

---

## 6. Instrucciones para el Usuario

### PASO 1: Verificar que ves el log de inicialización

Abre la aplicación y en la Console deberías VER INMEDIATAMENTE:

```
[CONNECTIVITY INIT] ⚠️ NUEVA VERSION CARGADA — navigator.onLine=true
```

**Si NO ves este log**: El código nuevo NO se está ejecutando.

### PASO 2: Desconectar Wi-Fi

```javascript
// En Console, ejecuta:
navigator.onLine
```

Debe devolver `false`.

### PASO 3: Crear reserva offline

Presiona el botón de confirmar reserva. En Console deberías ver:

```
[CU8 BIFURCACION] isOnline()=false
[CU8 BIFURCACION] ✅ Entra a OFFLINE — usando IndexedDB
```

Si ves:

```
[CU8 BIFURCACION] isOnline()=true
[CU8 BIFURCACION] ❌ Entra a ONLINE — usando HTTP
```

**Entonces `navigator.onLine` está retornando `true` aunque Wi-Fi esté desconectado.**

---

## 7. Casos Posibles

| Caso | Síntomas | Causa Probable |
|------|----------|---|
| **A** | `navigator.onLine=false` pero `isOnline()=true` | BehaviorSubject desincronizado o hay código que modifica isOnlineSubject |
| **B** | `navigator.onLine=false`, `isOnline()=false`, pero igual entra a ONLINE | `crear-reserva.ts` tiene lógica incorrecta |
| **C** | `navigator.onLine=true` aunque Wi-Fi OFF | Chrome DevTools Offline no funciona o `navigator.onLine` tiene comportamiento inesperado |
| **D** | isOnline() correcto pero otros servicios llaman health check | Hay otro servicio (no ConnectivityService) haciendo fetch a /health |
| **E** | Ves logs del health check antiguo | Dev server antiguo corriendo o caché del navegador |

---

## Próximos Pasos

1. **NO modificar nada todavía**
2. Iniciar dev server fresco: `npm start`
3. Abrir DevTools Console
4. Reportar exactamente qué logs ves
5. Especificar cuál de los 5 casos (A-E) se parece a lo que observas

