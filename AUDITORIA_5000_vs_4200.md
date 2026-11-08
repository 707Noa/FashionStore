# AUDITORÍA: Por qué 4200 sirve código viejo y 5000 tenía CU8

**Fecha:** 2026-11-08  
**Estado:** Solo diagnóstico, sin cambios

---

## RESUMEN EJECUTIVO

| Aspecto | 5000 | 4200 |
|---------|------|------|
| **Servidor** | serve-prod.py (offline) | Docker nginx |
| **Build sirviendo** | main-M5K47TQS.js (186 KB) | main-SDFXGRDS.js (59 KB) |
| **Contiene CU8** | ✅ SÍ | ❌ NO |
| **Tamaño relativo** | Grande | Pequeño |
| **Estado actual** | No corre | Corre en Docker |

---

## INFORMACIÓN RECOPILADA

### 1. Builds en el filesystem:

```
frontend/web/dist/frontend/browser/main-M5K47TQS.js
  └─ Tamaño: 186 KB (nov 8, 13:43)
  └─ Contiene: ✅ offline_reservas, ✅ saveReservaOffline
  └─ TIENE CU8

frontend/web/dist-deploy/browser/main-M5K47TQS.js
  └─ Copia del anterior
  └─ TIENE CU8

dist-deploy/browser.backup-nov1/main-TRQINU67.js
  └─ Tamaño: 55 KB (viejo)
  └─ NO TIENE CU8
```

### 2. Build sirviendo Docker en 4200:

```
main-SDFXGRDS.js
  └─ Tamaño: 59 KB (pequeño)
  └─ NO contiene: offline_reservas
  └─ NO contiene: saveReservaOffline
  └─ NO TIENE CU8
```

### 3. Docker status:

```
✅ Frontend corriendo en puerto 4200
✅ Backend corriendo en puerto 8000
✅ PostgreSQL corriendo en puerto 5432
❌ Sin volúmenes montados
```

---

## CONCLUSIÓN

### El problema:

La imagen Docker del frontend contiene un **build muy viejo** (`main-SDFXGRDS.js`, 59 KB) que fue compilado ANTES de CU8.

Aunque reconstruimos la imagen con `docker compose build --no-cache frontend`, el contenedor sigue sirviendo el archivo viejo porque:

1. La nueva imagen fue generada correctamente
2. PERO el Dockerfile copia el build compilado DENTRO de la imagen
3. El build que compiló adentro de Docker NO incluyó CU8

### Por qué 5000 tenía CU8:

El usuario ejecutó `npm run build` localmente DESPUÉS de hacer los cambios de CU8, y eso generó `main-M5K47TQS.js` (186 KB) en `frontend/web/dist/frontend/browser`.

Luego ese build se copió a `dist-deploy/browser`.

Si el usuario hubiera ejecutado `serve-prod.py`, habría servido el build nuevo CON CU8.

### Por qué 4200 NO tiene CU8:

La imagen Docker fue compilada en algún momento anterior cuando todavía no había CU8, y contiene una copia compilada (`main-SDFXGRDS.js`, 59 KB) de esa época.

Aunque reconstruimos con `--no-cache`, el proceso de build dentro de Docker probablemente:
- Copió el código fuente actual (con CU8)
- Pero compiló una versión anterior del bundle (posiblemente por caché de npm o compilador)

---

## SOLUCIÓN IDENTIFICADA

Para que 4200 sirva el build CON CU8:

**Opción A (Recomendada):** Copiar el build nuevo DENTRO de la imagen Docker

1. El build correcto está en: `frontend/web/dist/frontend/browser`
2. Docker lo copia de ahí PERO necesita hacer un rebuild que compile el código actual
3. Actualmente no está compilando correctamente

**Opción B:** Forzar compilación limpia en Docker

1. Limpiar caché de npm en Docker
2. Forzar compilación sin caché
3. Asegurar que use el código fuente actual

---

## PRÓXIMOS PASOS (No implementados)

Para hacer que 4200 sirva CU8:

1. Reconstruir imagen frontend CON limpieza de caché
2. Confirmar que el nuevo build contenga `offline_reservas`
3. Recrear contenedor con la nueva imagen
4. Verificar en 4200 que aparezca el bundle correcto (186 KB, no 59 KB)

---

## ESTADO DE INTEGRIDAD

✅ **Intactos:**
- PostgreSQL (no modificado)
- Backend (no modificado)
- CU6 código (no modificado)
- CU7 código (no modificado)
- CU8 código (no modificado)
- IndexedDB (no modificado)
- Service Workers (no eliminados)
- Volúmenes Docker (no eliminados)

**Problema:** Solo es un asunto de BUILD/DEPLOYMENT, no de lógica.

