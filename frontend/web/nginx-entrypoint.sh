#!/bin/sh
set -e

# Script de inicialización para Nginx con DNS dinámico
#
# BACKEND_URL: destino del proxy hacia FastAPI
# - Desarrollo: backend:8000 (docker-compose, DNS 127.0.0.11)
# - Railway: backend.railway.internal:8080 (private network, DNS fd12::10)
#
# El script detecta automáticamente el DNS del entorno e inyecta
# la configuración correcta de resolver en nginx.conf

BACKEND_URL="${BACKEND_URL:-backend:8000}"

# Detectar DNS del entorno
RESOLVER=$(grep -oE '^nameserver\s+[^ ]+' /etc/resolv.conf 2>/dev/null | head -1 | awk '{print $2}')

if [ -z "$RESOLVER" ]; then
    # Fallback: usar 127.0.0.11 para docker-compose
    RESOLVER="127.0.0.11"
fi

# Generar configuración de resolver para Nginx
# Función auxiliar: si el resolver es IPv6 (contiene :), no agregar puerto explícito
if echo "$RESOLVER" | grep -q ':'; then
    RESOLVER_CONFIG="resolver [$RESOLVER] valid=10s;"
else
    RESOLVER_CONFIG="resolver $RESOLVER valid=10s;"
fi

# Crear configuración temporal con resolver y BACKEND_URL reemplazados
sed -e "s|\${RESOLVER}|$RESOLVER_CONFIG|g" \
    -e "s|\${BACKEND_URL}|$BACKEND_URL|g" \
    /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf 2>/dev/null || {
    # Si no existe .template, procesar directamente default.conf
    sed -i -e "s|\${RESOLVER}|$RESOLVER_CONFIG|g" \
           -e "s|\${BACKEND_URL}|$BACKEND_URL|g" \
           /etc/nginx/conf.d/default.conf
}

# Validar sintaxis de Nginx
nginx -t

# Iniciar Nginx
exec nginx -g 'daemon off;'
