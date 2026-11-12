# ---- Etapa 1: build de la aplicación Angular ----
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .
# "build:docker-local" (configuration development) -- NO "npm run build": ese
# script usa la configuration "production" (default en angular.json), que
# compila con environment.ts (la API de Vercel). Este Dockerfile es solo para
# el docker-compose de desarrollo LOCAL, así que necesita el fileReplacement
# de la configuration "development" -> environment.development.ts
# (http://localhost:8000/api/v1), para que el navegador llame al backend
# local y no a producción. El deploy real en Vercel sigue usando
# "npm run build" tal cual (ver vercel.json) y no se ve afectado por este
# cambio.
RUN rm -rf dist .angular node_modules/.cache && npm run build:docker-local

# ---- Etapa 2: servir los archivos estáticos con Nginx ----
FROM nginx:1.27-alpine

ENV BACKEND_HOST=backend
ENV NGINX_ENVSUBST_FILTER=^BACKEND_HOST$

COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80
