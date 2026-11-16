# ---- Etapa 1: build de la aplicación Angular ----
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .

RUN rm -rf dist .angular node_modules/.cache && npm run build

# ---- Etapa 2: servir los archivos estáticos con Nginx ----
FROM nginx:1.27-alpine

# Copiar script de inicialización
COPY nginx-entrypoint.sh /docker-entrypoint.d/90-backend-url.sh
RUN chmod +x /docker-entrypoint.d/90-backend-url.sh

# Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos compilados
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

# Nginx ejecuta scripts en /docker-entrypoint.d/ automaticamente antes de iniciar
# No es necesario especificar ENTRYPOINT ni CMD personalizados
