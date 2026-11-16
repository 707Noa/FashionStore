export const environment = {
  production: true,
  // URL relativa — Nginx proxy maneja /api/ → backend
  // En docker-compose: http://localhost:4200/api/v1/ → nginx → http://backend:8000/api/v1/
  // En Railway: https://frontend-domain/api/v1/ → nginx → http://backend-service:8000/api/v1/
  apiUrl: '/api/v1',
};
