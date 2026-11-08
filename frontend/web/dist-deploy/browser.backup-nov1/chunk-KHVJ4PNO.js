// src/app/features/reservas/reserva-formato.ts
function formatearFechaReserva(fechaIso) {
  const [anio, mes, dia] = fechaIso.split("-");
  return `${dia}/${mes}/${anio}`;
}
function formatearHorarioReserva(horaInicio, horaFin) {
  return `${horaInicio.slice(0, 5)} - ${horaFin.slice(0, 5)}`;
}

export {
  formatearFechaReserva,
  formatearHorarioReserva
};
//# debugId=291fcaf4-7fac-5b59-b8b3-518847a009a4
//# sourceMappingURL=chunk-KHVJ4PNO.js.map
