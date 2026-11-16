#!/bin/sh
set -e

# Script de inicialización para Nginx
# Reemplaza variables de entorno en nginx.conf
#
# BACKEND_URL: destino del proxy hacia FastAPI
# - Desarrollo: backend:8000 (nombre de servicio en docker-compose)
# - Railway: backend-service:8000 (servicio en red privada Railway)
#
# Si BACKEND_URL no está definida, usa default "backend:8000"

BACKEND_URL="${BACKEND_URL:-backend:8000}"

# Reemplazar ${BACKEND_URL} en nginx.conf
# Usar sed con delimitador | para evitar conflictos con caracteres especiales
sed -i "s|\${BACKEND_URL}|$BACKEND_URL|g" /etc/nginx/conf.d/default.conf

# Validar sintaxis de Nginx
nginx -t

# Iniciar Nginx
exec nginx -g 'daemon off;'
