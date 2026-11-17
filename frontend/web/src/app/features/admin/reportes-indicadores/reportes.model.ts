// Modelo de CU30 -- Consultar reportes e indicadores (Administrador). Refleja
// 1:1 la forma que devuelve el backend (ver
// P6_InnovacionYAnalisis/CU30_ConsultarReportesIndicadores/schemas.py).
//
// Primera parte: solo el dashboard analítico real sobre PostgreSQL -- sin
// voz, sin Gemini, sin resumen del Encargado (ver reportes.ts).

export interface ResumenReporte {
  ingresos: number;
  ventas_realizadas: number;
  productos_vendidos: number;
  reservas_atendidas: number;
  devoluciones_cambios: number;
  devoluciones: number;
  cambios: number;
  // Ignora fecha_desde/fecha_hasta por diseño -- es una foto del stock
  // ACTUAL (ver backend/service.py).
  stock_bajo: number;
}

export interface VentaPeriodo {
  periodo: string;
  ingresos: number;
  ventas: number;
}

export interface VentaPorTipo {
  tipo: string;
  ventas: number;
  ingresos: number;
}

export interface VentaPorMetodoPago {
  metodo: string;
  ventas: number;
  ingresos: number;
}

export interface VentaPorSucursal {
  sucursal_id: number;
  sucursal: string;
  ventas: number;
  ingresos: number;
}

export interface VentasReporte {
  ingresos_totales: number;
  ventas_totales: number;
  granularidad: 'dia' | 'mes';
  por_periodo: VentaPeriodo[];
  por_tipo: VentaPorTipo[];
  por_metodo_pago: VentaPorMetodoPago[];
  // SIEMPRE [] cuando se filtró una sucursal específica.
  por_sucursal: VentaPorSucursal[];
}

export interface StockBajoItem {
  producto_variante_id: number;
  producto: string;
  color: string;
  talla: string;
  sucursal: string;
  disponible: number;
}

export interface InventarioReporte {
  stock_fisico_total: number;
  stock_reservado_total: number;
  stock_disponible_total: number;
  umbral_stock_bajo: number;
  stock_bajo: StockBajoItem[];
}

export interface ReservasReporte {
  creadas: number;
  atendidas: number;
  canceladas: number;
  vencidas: number;
}

export interface ProductoMasVendido {
  producto_id: number;
  nombre: string;
  unidades: number;
  ingresos: number;
}

export interface ProductosMasVendidosReporte {
  productos: ProductoMasVendido[];
}

export interface ReportesFiltro {
  fecha_desde: string | null;
  fecha_hasta: string | null;
  sucursal_id: number | null;
}

// ---------------------------------------------------------------------
// CU30 -- segunda parte: consulta inteligente (texto/voz + Gemini). Refleja
// 1:1 lo que devuelve POST /reportes/consulta-inteligente (ver backend
// schemas.py) -- Angular nunca llama a Gemini directamente, este es el
// único punto de entrada.
// ---------------------------------------------------------------------

export interface ConsultaInteligenteRequest {
  consulta: string;
  // Estado YA aplicado en el dashboard -- se usa como fallback en el
  // backend cuando la consulta no menciona sucursal/periodo explícitos.
  sucursal_id_actual: number | null;
  fecha_desde_actual: string | null;
  fecha_hasta_actual: string | null;
}

export interface FiltrosResueltos {
  sucursal_id: number | null;
  sucursal_nombre: string | null;
  fecha_desde: string | null;
  fecha_hasta: string | null;
}

export interface ConsultaInteligenteResponse {
  // false cuando Gemini no está disponible, la intención no se reconoció, o
  // la sucursal mencionada no existe -- en ese caso `filtros` es null y NO
  // debe tocarse el dashboard, solo mostrar `resumen` como mensaje.
  exito: boolean;
  intencion: string | null;
  filtros: FiltrosResueltos | null;
  resumen: string;
  // Se ignora en pantalla a propósito: el dashboard ya muestra TODO esto
  // (KPIs/gráficos/listas) al refrescarse con los filtros resueltos -- ver
  // reportes.ts, generarConsultaInteligente().
  datos: unknown;
  // Reporte dinámico (TOP por sucursal/categoría, serie por sucursal). Null
  // en las consultas simples.
  reporte_agrupado?: ReporteAgrupado | null;
  // true cuando `resumen` es una pregunta de aclaración (no se consultó nada,
  // `exito` es false y `datos`/`reporte_agrupado` son null): la pantalla debe
  // mostrarla como aclaración, NUNCA como un reporte.
  requiere_aclaracion?: boolean;
  // Interpretación estructurada que el backend validó (opcional).
  especificacion?: EspecificacionReporte | null;
}

// Especificación VALIDADA por el backend (la IA solo la propone). Refleja
// 1:1 EspecificacionReporte de schemas.py.
export interface VentanaRelativa {
  cantidad: number;
  unidad: 'dias' | 'semanas' | 'meses' | 'anios';
}

export interface EspecificacionReporte {
  intencion: string | null;
  metrica: 'unidades' | 'ingresos';
  agrupacion: 'sucursal' | 'categoria' | null;
  granularidad: 'semana' | 'mes' | null;
  limite: number | null;
  alcance_ranking: 'por_grupo' | 'global' | null;
  orden: 'desc' | 'asc';
  ventana: VentanaRelativa | null;
  categoria: string | null;
  ambiguo: boolean;
  aclaracion: string | null;
}

export interface PeriodoReporte {
  fecha_desde: string | null;
  fecha_hasta: string | null;
  // Texto con las fechas exactas, p. ej. "Últimos 10 meses: del 2026-01-17 al
  // 2026-11-16 (ambos incluidos)".
  descripcion: string;
}

export interface FilaReporte {
  // Posición dentro del grupo (ranking por grupo) o posición GLOBAL
  // (ranking global desglosado). null en series temporales.
  posicion: number | null;
  // Producto (rankings) o periodo "YYYY-MM" / lunes de la semana (series).
  etiqueta: string;
  id: number | null;
  // null cuando la métrica no aplica (series temporales).
  unidades: number | null;
  ingresos: number;
  // Cantidad de ventas (solo series temporales).
  ventas: number | null;
}

export interface GrupoReporte {
  id: number | null;
  nombre: string;
  filas: FilaReporte[];
  // Suma de las filas MOSTRADAS (el TOP N, no toda la sucursal).
  total_unidades: number | null;
  total_ingresos: number;
  // Total de TODO lo vendido por el grupo en el periodo (aunque el TOP N solo
  // muestre una parte). null en el ranking global desglosado y en series.
  total_grupo_unidades: number | null;
  total_grupo_ingresos: number | null;
}

export interface ReporteAgrupado {
  tipo: 'ranking_por_grupo' | 'ranking_global_desglosado' | 'serie_por_grupo';
  titulo: string;
  metrica: 'unidades' | 'ingresos';
  agrupacion: string;
  limite: number | null;
  orden: 'desc' | 'asc';
  granularidad: string | null;
  periodo: PeriodoReporte;
  filtros_aplicados: string[];
  supuestos: string[];
  grupos: GrupoReporte[];
  total_unidades: number | null;
  total_ingresos: number;
  grafico: 'barras_por_grupo' | 'lineas_por_grupo';
}
