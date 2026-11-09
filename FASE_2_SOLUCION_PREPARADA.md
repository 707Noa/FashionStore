# FASE 2: SOLUCIÓN PREPARADA (Lista para aplicar tras diagnóstico)

**Estado:** Preparada, NO APLICADA todavía  
**Basada en:** Patrón real de Andrés + Auditoría FASE 1

---

## PROBLEMA IDENTIFICADO EN AUDITORÍA

`ConnectivityService.isOnline()` solo retorna `navigator.onLine` sin combinar con `isOnlineSubject`.

**Patrón correcto (de Andrés):**
```typescript
const isOffline = !this.offlineService.isOnline() || (typeof navigator !== 'undefined' && !navigator.onLine);
```

**En nuestro contexto significa:**
- Considera OFFLINE si navigator.onLine es false O si BehaviorSubject es false
- Considera ONLINE solo si AMBAS son true

---

## CAMBIO ÚNICO (PHASE 2)

### ARCHIVO: `connectivity.service.ts`

#### ANTES (actual - débil):
```typescript
isOnline(): boolean {
  const online = navigator.onLine;
  const subjectValue = this.isOnlineSubject.value;
  console.log(`[CONNECTIVITY AUDIT] navigator.onLine=${online} | subject=${subjectValue} | returning=${online}`);
  if (online !== subjectValue) {
    console.log(`[CONNECTIVITY WARNING] Desincronización: navigator.onLine !== BehaviorSubject`);
  }
  return online;  // ❌ SOLO navigator.onLine
}
```

#### DESPUÉS (fuerte - patrón Andrés):
```typescript
isOnline(): boolean {
  // Combinar AMBAS fuentes de verdad: navigator.onLine AND BehaviorSubject
  const navigatorOnline = typeof navigator !== 'undefined' && navigator.onLine;
  const subjectOnline = this.isOnlineSubject.value;
  const online = navigatorOnline && subjectOnline;
  
  console.log(`[CONNECTIVITY] navigator=${navigatorOnline} | subject=${subjectOnline} | isOnline=${online}`);
  
  return online;
}
```

---

## EXPLICACIÓN DEL CAMBIO

### Antes:
- Si `navigator.onLine === false` → retorna `false` ✅
- Si `navigator.onLine === true` → retorna `true` (aunque BehaviorSubject sea false) ❌

### Después:
- Si `navigator.onLine === false` → retorna `false` ✅
- Si `BehaviorSubject === false` → retorna `false` ✅
- Solo si AMBAS son true → retorna `true` ✅

---

## LÍNEA DE CÓDIGO EXACTA A CAMBIAR

**Archivo:** `/frontend/web/src/app/core/services/connectivity.service.ts`  
**Líneas:** 31-39

---

## COMANDOS PARA APLICAR (si se necesita)

```bash
cd /c/Users/hp/Desktop/P1/FashionStore/frontend/web

# 1. Compilar
npx tsc --noEmit

# 2. Build
npm run build

# 3. Reiniciar dev server
npm start
```

---

## VERIFICACIÓN TRAS APLICAR

### En Console (con Wi-Fi desconectado):

```javascript
navigator.onLine  // debe ser false

// Abre Console ejecutando esto:
// (En nuestros logs aparecerá automáticamente)
```

Debe aparecer:
```
[CONNECTIVITY] navigator=false | subject=false | isOnline=false
[CU8 BIFURCACION] isOnline()=false
[CU8 BIFURCACION] ✅ Entra a OFFLINE — usando IndexedDB
[CU08 OFFLINE] reserva iniciada: ...
```

---

## ¿POR QUÉ ESTE CAMBIO ES SEGURO?

1. **Solo modifica la lógica de decisión** — No toca IndexedDB, Service Workers, ni CU7
2. **Sigue el patrón comprobado de Andrés** — Código que ya funciona en otro proyecto
3. **Es defensivo** — Requiere AMBAS fuentes (navigator + service) para confiar en online
4. **No rompe compatibilidad** — Toda referencia a `isOnline()` funciona igual, solo más robusto
5. **Reversible** — Si algo sale mal, revertir es una línea

---

## APLICAR SOLO SI:

El diagnóstico (FASE 1) muestra:

```
[CU8 BIFURCACION] isOnline()=true
[CU8 BIFURCACION] ❌ Entra a ONLINE — usando HTTP
```

**Cuando debería ser:**

```
[CU8 BIFURCACION] isOnline()=false
[CU8 BIFURCACION] ✅ Entra a OFFLINE — usando IndexedDB
```

Y se confirma que `navigator.onLine === false`.

---

## ARCHIVOS A NO MODIFICAR EN FASE 2

```
✅ NO tocar CU7
✅ NO tocar CU6
✅ NO tocar IndexedDB
✅ NO tocar crear-reserva.ts bifurcación
✅ NO tocar saveReservaOffline()
✅ NO tocar backend
✅ NO tocar Service Worker
✅ NO tocar offline-storage.service.ts
```

Solo: `connectivity.service.ts` líneas 31-39

---

## STATUS ACTUAL

- ✅ FASE 1: Auditoría completada
- ⏸️ FASE 2: Solución preparada, esperando diagnóstico
- ⏳ FASE 3: Será ejecución de FASE 2 si necesario
- ⏳ FASE 4: Verificación de IndexedDB (solo si persiste)
- ⏳ FASE 5: Verificación final

