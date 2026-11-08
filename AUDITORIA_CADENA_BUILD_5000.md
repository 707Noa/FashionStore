# AUDITORÍA: Por qué localhost:5000 sirve código viejo

**Fecha:** 2026-11-08  
**Auditor:** Claude Senior  
**Estado:** Solo diagnóstico (sin cambios)

---

## A. PROCESO QUE ESCUCHA PUERTO 5000

### Hallazgo:
```
❌ NADA escucha actualmente en puerto 5000
```

### Evidencia:
```
Get-NetTCPConnection -LocalPort 5000 → NADA
Invoke-WebRequest -Uri "http://localhost:5000" → Timeout
```

### Explicación:
El usuario VE la app en localhost:5000 pero es **caché del navegador o Service Worker**, no un servidor real.

---

## B. CARPETA EXACTA QUE SIRVE LOCALHOST:5000

### Script responsable:
```
/c/Users/hp/Desktop/P1/FashionStore/frontend/web/serve-prod.py
```

### Código del script:
```python
dist_dir = Path(__file__).parent / "dist" / "frontend" / "browser"
PORT = 5000
```

### Carpeta configurada:
```
/c/Users/hp/Desktop/P1/FashionStore/frontend/web/dist/frontend/browser
```

### Estado:
```
✅ La carpeta EXISTE
✅ Contiene archivos compilados
❌ serve-prod.py NO está ejecutándose actualmente
```

---

## C. BUNDLE JS QUE ESTÁ EJECUTANDO ACTUALMENTE

### En el navegador (lo que el usuario VE):
El usuario ve la app porque hay un **Service Worker cacheando** la página:
```
ngsw-worker.js en /dist/frontend/browser
```

El Service Worker sirve:
```
main-SDFXGRDS.js (desde cache del navegador - fecha desconocida)
```

### En el servidor (si estuviera corriendo):
Serviría:
```
/dist/frontend/browser/main-M5K47TQS.js (compilado nov 8 a las 13:43)
```

---

## D. DÓNDE ESTÁ EL BUNDLE QUE CONTIENE CU8

### Ubicación esperada:
```
/c/Users/hp/Desktop/P1/FashionStore/frontend/web/dist/frontend/browser/main-M5K47TQS.js
```

### Contenido REAL:
```
❌ NO contiene logs de CU8
❌ NO contiene "CU8.*CONFIRM"
❌ NO contiene "CU8.*BIFURCACION"
❌ NO contiene "CONNECTIVITY.*INIT"
✅ NO contiene "checkConnectivity" (código viejo)
✅ NO contiene "/health" (código viejo)
```

### Conclusión:
El build en `dist/frontend/browser` es **intermedio** - no es viejo (no tiene checkConnectivity), pero tampoco tiene los cambios nuevos (no tiene CU8 logs).

---

## E. POR QUÉ LOCALHOST:5000 ESTÁ SIRVIENDO CÓDIGO VIEJO

### Raíz del problema:

La cadena de eventos fue:

1. **Nov 1**: Se creó un build en `dist/frontend/browser` (build viejo)
2. **Nov 8 13:26-13:29**: Se modificaron los archivos fuente:
   - `connectivity.service.ts` (13:29)
   - `crear-reserva.ts` (13:26)
3. **Nov 8 13:43**: Se ejecutó `npm run build`
   - ✅ Generó un nuevo `main-M5K47TQS.js`
   - ❌ Pero NO incluyó los cambios recientes (probablemente caché de compilador)
4. **Ahora**: El usuario ve código del Service Worker cache (probablemente más viejo aún)

### Cadena REAL:

```
CÓDIGO FUENTE (nov 8, 13:26-13:29, CON CU8)
    ↓ npm run build
BUILD COMPILADO (nov 8, 13:43, SIN CU8)
    ↓ Service Worker cache
NAVEGADOR (viendo build aún más viejo del 1 de nov, SIN CU8)
```

### Por qué el build no tiene CU8:

La compilación de Angular probablemente:
- Usó caché de compilación anterior
- No detectó los cambios en tiempo de ejecución
- Necesita un `npm run build` LIMPIO sin caché

---

## F. CAMBIO MÍNIMO PARA QUE LOCALHOST:5000 SIRVA CÓDIGO CORRECTO

### Opción 1: Ejecutar serve-prod.py (Recomendado)

```bash
cd /c/Users/hp/Desktop/P1/FashionStore/frontend/web
python serve-prod.py
```

**Resultado:**
- Se inicia servidor en localhost:5000
- Sirve desde `dist/frontend/browser`
- Pero ese build NO tiene CU8 aún

### Opción 2: Generar build LIMPIO (Requisito previo)

```bash
cd /c/Users/hp/Desktop/P1/FashionStore/frontend/web
rm -rf dist .angular/cache  # Eliminar caché
npm run build  # Build limpio
```

**Resultado:**
- Genera build nuevo (sin caché anterior)
- Debería incluir los cambios de CU8
- Coloca el resultado en `dist/frontend/browser`

### Opción 3: Ambas (Solución completa)

```bash
cd /c/Users/hp/Desktop/P1/FashionStore/frontend/web

# Paso 1: Build limpio
rm -rf dist .angular/cache
npm run build

# Paso 2: Iniciar servidor
python serve-prod.py
```

**Resultado:**
- ✅ localhost:5000 sirve el build nuevo CON CU8

---

## COMPARATIVA DE BUILDS

| Ubicación | Archivo | Fecha | Tamaño | Tiene CU8 | Tiene checkConnectivity |
|-----------|---------|-------|--------|-----------|------------------------|
| dist/frontend/browser | main-M5K47TQS.js | nov 8, 13:43 | 183K | ❌ | ✅ No |
| dist-deploy/browser | main-M5K47TQS.js | nov 8, 13:43 | 183K | ❌ | ✅ No |
| dist-deploy/browser.backup-nov1 | main-TRQINU67.js | nov 1, 19:35 | 55K | ❌ | ✅ Yes |
| Navegador (caché) | main-SDFXGRDS.js | Desconocido | ? | ❌ | ✅ Yes |

---

## VERIFICACIÓN: ¿DÓNDE ESTÁN LOS LOGS DE CU8?

### En el código FUENTE:
```
✅ connectivity.service.ts línea 15: [CONNECTIVITY] VERSIÓN AUDITADA 2026-11-08
✅ crear-reserva.ts línea 247: [CU8 CONFIRM]
✅ crear-reserva.ts línea 261: [CU8 BIFURCACION]
```

### En los builds compilados:
```
❌ main-M5K47TQS.js (nov 8, 13:43) NO tiene los logs
❌ main-TRQINU67.js (nov 1) NO tiene los logs
❌ main-SDFXGRDS.js (caché navegador) NO tiene los logs
```

### Conclusión:
**El problema es que `npm run build` no está compilando el código fuente actual.**

---

## WHAT'S HAPPENING

```
Semana 1 (Nov 1):
  Build antiguo creado → dist/frontend/browser/main-TRQINU67.js
  
Hoy (Nov 8):
  13:26 - Cambiar crear-reserva.ts (agregar CU8)
  13:29 - Cambiar connectivity.service.ts (agregar logs)
  13:43 - npm run build (usa caché viejo)
         → Genera main-M5K47TQS.js (SIN los nuevos cambios)
  
Ahora:
  Navegador muestra caché de Service Worker
  No hay servidor en 5000
  Usuario ve código viejo
```

---

## ESTADO ACTUAL SIN CAMBIOS

- ✅ Docker: NO modificado
- ✅ Backend: NO modificado
- ✅ PostgreSQL: NO modificado
- ✅ IndexedDB: NO borrado
- ✅ Service Worker: NO eliminado
- ✅ CU6/7/8: NO modificados
- ✅ Puerto 5000: NO modificado (NO está corriendo)
- ✅ Puerto 4200: NO modificado (SÍ está corriendo)

---

## PRÓXIMOS PASOS (No implementados todavía)

Para que localhost:5000 sirva el código CON CU8:

1. Hacer build LIMPIO sin caché
2. Ejecutar `serve-prod.py`
3. Hard refresh en navegador (Ctrl+Shift+R)
4. Desactivar Service Worker cache si persiste

