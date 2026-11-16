# FashionStore — Despliegue en Railway

## Visión General

FashionStore se despliega en Railway como **tres servicios independientes** dentro del mismo proyecto:

1. **Backend** (FastAPI + Uvicorn)
   - Raíz: `/backend`
   - Puerto: Asignado dinámicamente por Railway vía variable `$PORT`
   - Variables necesarias: DATABASE_URL, CORS_ORIGINS, JWT_SECRET_KEY, etc.

2. **Frontend** (Angular + Nginx)
   - Raíz: `/frontend/web`
   - Puerto: 80 (Nginx estándar)
   - Variables necesarias: BACKEND_URL (para proxy interno)

3. **PostgreSQL** (Base de datos)
   - Variables: Generadas automáticamente por Railway
   - Red: Privada (Backend se conecta internamente)
   - DATABASE_URL: Inyectada automáticamente

Los servicios se comunican vía **red privada Railway**, sin exponer el backend al público.

---

## Arquitectura

```
Usuario Final
    │
    ├─► HTTPS://[frontend-domain-railway.app] (Nginx)
    │        │
    │        ├─► [GET] HTML/JS/CSS
    │        │
    │        └─► [GET/POST] /api/v1/... (Nginx proxy)
    │                        │
    │                        └─► http://backend:8000/api/v1/...
    │                             (Red privada Railway)
    │
    └─► Aplicación móvil
         │
         └─► HTTPS://[backend-domain-railway.app]/api/v1/...
              (Conexión pública — si se expone)
```

---

## Configuración en Railway

### Backend Service

**Root:** `/backend`

**Dockerfile:** `backend/Dockerfile`

**Variables de Entorno:**
```
APP_ENV=production
API_V1_PREFIX=/api/v1
CORS_ORIGINS=https://[frontend-domain-railway.app]
FRONTEND_URL=https://[frontend-domain-railway.app]
JWT_SECRET_KEY=[generar: openssl rand -hex 32]
JWT_ALGORITHM=HS256
JWT_EXPIRE_MINUTES=1440
ADMIN_INITIAL_EMAIL=admin@fashionstore.com
ADMIN_INITIAL_PASSWORD=[cambiar en producción]
SUPERADMIN_INITIAL_EMAIL=superadmin@fashionstore.com
SUPERADMIN_INITIAL_PASSWORD=[cambiar en producción]
EMPRESA_INICIAL_NOMBRE=FashionStore - Empresa Principal
(+ otras variables según necesidad)
```

**DATABASE_URL:** 
- NO configurar manualmente — Railway PostgreSQL la proporciona automáticamente
- Formato: `postgresql+psycopg://[user]:[pass]@[host]:[port]/[db]`
- Backend la normaliza automáticamente (ver `app/core/config.py`)

**Health Check:**
- Endpoint: `GET /api/v1/health` (implementado en `app/routers/health.py`)
- Esperado: HTTP 200 con JSON response

**Puerto:**
- Railway asigna dinámicamente vía variable `$PORT`
- Dockerfile: `CMD ["/bin/sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]`

### Frontend Service

**Root:** `/frontend/web`

**Dockerfile:** `frontend/web/Dockerfile`

**Variables de Entorno:**
```
BACKEND_URL=backend:8000
```

**Explicación:**
- Railway resuelve `backend:8000` a través de la red privada (conexión interna)
- Nginx usa esta variable para proxiar `/api/v1/...` al backend
- Ver `frontend/web/nginx-entrypoint.sh` para cómo se reemplaza en startup

**Build:**
- Comando: `npm run build` (producción)
- Usa `environment.ts` con `apiUrl: '/api/v1'` (URL relativa)
- Nginx proxy maneja el backend

**Puerto:**
- Nginx escucha en puerto 80
- Railway mapea automáticamente a dominio público

### PostgreSQL Service

**Variables Automáticas:**
- Railway genera: `DATABASE_URL`
- Backend la recibe automáticamente como variable de entorno
- NO es necesario configurar manualmente

**Conexión Privada:**
- Backend accede como `db:5432` internamente (en docker-compose)
- En Railway: accede a través de red privada con nombre de servicio

**Healthcheck:**
- Railway detecta automáticamente si PostgreSQL está saludable

---

## Despliegue Paso a Paso

### 1. Crear Proyecto Railway

```bash
# Vía web:
# - railway.app → New Project → Deploy from GitHub
# - Seleccionar repositorio FashionStore
# - Railway detectará automáticamente backend/ y frontend/web/
```

### 2. Agregar Servicio PostgreSQL

```bash
# Vía web:
# - Railway dashboard → + New → Database → PostgreSQL
# - Database name: fashionstore
# - Railway genera DATABASE_URL automáticamente
```

### 3. Configurar Backend Service

```bash
# Variables de entorno → Backend service → Add Variable
APP_ENV=production
API_V1_PREFIX=/api/v1
CORS_ORIGINS=https://[frontend-domain]
FRONTEND_URL=https://[frontend-domain]
JWT_SECRET_KEY=[generar seguro]
(+ rest según .env.production.example)
```

### 4. Configurar Frontend Service

```bash
# Variables de entorno → Frontend service → Add Variable
BACKEND_URL=backend:8000
```

### 5. Desplegar

```bash
# Opción A: Git push (automático)
git add .
git commit -m "Despliegue Railway: PostgreSQL, Backend, Frontend"
git push origin main

# Opción B: Manual redeploy en Railway dashboard
# → Service → Redeploy
```

### 6. Verificar Despliegue

```bash
# Health Check
curl https://[backend-domain-railway.app]/api/v1/health

# Frontend carga
curl https://[frontend-domain-railway.app]/

# API desde frontend
# DevTools → Network → Buscar /api/v1/ call
# Debe devolver 200 OK sin CORS errors
```

---

## Troubleshooting

### "502 Bad Gateway" en Frontend

**Causa:** Nginx no puede conectar a backend

**Verificar:**
1. `BACKEND_URL=backend:8000` en Frontend service variables
2. Backend service está **healthy** (verdes en dashboard)
3. Logs: `Railway → Frontend → Logs` → buscar `upstream`

**Solución:**
- Si Backend está down: revisar logs Backend
- Si BACKEND_URL es incorrecto: actualizar a `backend:8000`

### "Cannot connect to database"

**Causa:** DATABASE_URL no configurada o formato incorrecto

**Verificar:**
1. PostgreSQL service está **running**
2. Backend service recibe `DATABASE_URL`:
   ```
   Railway → Backend → Variables → DATABASE_URL existe
   ```
3. Si falta: copiar desde PostgreSQL service info

### "ModuleNotFoundError: No module named 'psycopg2'"

**Causa:** requirements.txt con driver incorrecto

**Verificado:** ✅ requirements.txt tiene `psycopg[binary]==3.2.10`

**Solución:** Backend normaliza automáticamente `postgresql://` → `postgresql+psycopg://`

### Frontend carga pero API calls fallan

**Causa:** CORS o URL backend incorrecta

**Verificar:**
1. DevTools → Network → /api/v1/ request
2. Response headers: `Access-Control-Allow-Origin` presente
3. Backend `CORS_ORIGINS` incluye dominio frontend

---

## Configuración de Dominio Personalizado

### Agregar Dominio

1. **Backend:** Railway → Backend service → Settings → Custom Domain
   - Ej: `api.fashionstore.com`

2. **Frontend:** Railway → Frontend service → Settings → Custom Domain
   - Ej: `fashionstore.com`

3. **DNS:** Apuntar dominios a Railway nameservers

4. **Actualizar variables:**

   **Backend:**
   ```
   CORS_ORIGINS=https://fashionstore.com
   FRONTEND_URL=https://fashionstore.com
   ```

   **Frontend:**
   ```
   BACKEND_URL=api.fashionstore.com:8000
   ```

---

## Migraciones de Base de Datos

### Primera Ejecución

```bash
# Vía Railway Shell:
# Backend service → Connect (terminal)

alembic upgrade head
python scripts/seed_admin.py
python scripts/seed_empresa.py
```

### Migraciones Posteriores

```bash
# En Git:
git add backend/alembic/versions/
git commit -m "Migration: agregar columna X"
git push origin main

# Railway redeploya automáticamente
```

---

## Respaldo y Recuperación

### Backup Automático

Railway PostgreSQL (plan Pro) incluye backups automáticos.

### Backup Manual

```bash
pg_dump "$DATABASE_URL" > backup_$(date +%Y%m%d).sql
```

### Restaurar

```bash
psql "$DATABASE_URL" < backup_YYYYMMDD.sql
```

---

## Monitoreo

### Logs en Vivo

```bash
# Vía Railway CLI
railway logs --tail -f backend
railway logs --tail -f frontend
railway logs --tail -f postgres
```

### Métricas (Plan Pro)

Railway dashboard → Metrics:
- CPU, Memoria, Red
- Request count
- Error rate
- Response time

---

## Rollback

Si un deploy falla:

1. Railway → Service → Deployments
2. Seleccionar deployment anterior (green checkmark)
3. Click **Rollback**
4. Se revierte instantáneamente

---

## Próximos Pasos

- [ ] Configurar dominio personalizado
- [ ] Cambiar contraseñas iniciales en producción
- [ ] Configurar backups automáticos (Plan Pro)
- [ ] Monitoreo y alertas
- [ ] SSL/TLS (automático con Railway)

---

**Documentación Railway oficial:** https://docs.railway.app
