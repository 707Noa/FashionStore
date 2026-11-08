// CU10 — Modelos para consulta de operaciones locales offline

export interface ReservaOfflineCompleta {
  id: number;
  codigo_reserva: string;
  estado_general: string;
  estado_sync: string;
  sucursal: {
    id: number;
    nombre: string;
    ciudad: { id: number; nombre: string };
  };
  fecha: string;
  horario: string;
  detalles: DetalleReservaOffline[];
  _origen: 'LOCAL';
}

export interface DetalleReservaOffline {
  id: number;
  producto: { id: number; nombre: string; imagen_principal_url: string | null };
  variante: {
    id: number;
    talla: { id: number; nombre: string };
    color: { id: number; nombre: string };
  };
  cantidad: number;
  estado: string;
}

export interface VentaOfflineCompleta {
  venta_id: number;
  codigo_venta: string;
  fecha: string;
  sucursal: { id: number; nombre: string; ciudad: string };
  cliente_nombre: string;
  tipo: 'PRESENCIAL';
  metodo_pago: 'EFECTIVO' | 'TARJETA' | 'QR';
  total: number;
  tiene_postventa: boolean;
  leyenda_postventa: string | null;
  estado_sync: string;
  _origen: 'LOCAL';
}

export interface DetalleVentaOffline {
  producto_variante_id: number;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

export interface EstadoOperacionLocal {
  estado_sync: 'PENDIENTE_SYNC' | 'ENVIADA' | 'CONFIRMADA' | 'RECHAZADA';
  pendiente: boolean;
}
