// src/app/core/utils/ruta-por-rol.ts
var RUTA_POR_ROL = {
  SUPERADMIN: "/superadmin",
  ADMINISTRADOR: "/admin",
  ENCARGADO_SUCURSAL: "/encargado",
  PROVEEDOR: "/proveedor",
  // CAJERO -- integración mínima de CU20: una pantalla puntual ("Reservas
  // pendientes de atención", ver features/cajero/reservas-pendientes), NUNCA
  // el fallback a '/' que causaba el bug original (CAJERO se veía como un
  // Cliente). Todavía no es un panel completo -- CU24 (Registrar venta) y
  // CU25 (Procesar pago) son quienes lo necesitarían, fuera de alcance.
  CAJERO: "/cajero",
  CLIENTE: "/home"
};

export {
  RUTA_POR_ROL
};
//# debugId=bad38a34-1bf9-5d93-920a-01376729809a
//# sourceMappingURL=chunk-IK7D7AHK.js.map
