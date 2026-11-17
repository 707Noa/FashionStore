import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { SucursalAdminService } from '../../../sucursales-catalogo/cu06-gestionar-sucursales/sucursal-admin.service';
import { SuperadminService } from '../../superadmin/services/superadmin.service';
import { CategoryService } from '../../../sucursales-catalogo/atributos/services/category.service';
import { ProductoService } from '../../../sucursales-catalogo/cu08-gestionar-productos/producto.service';
import { ReporteAgrupado } from './reportes.model';
import { Reportes } from './reportes';

/**
 * CU30 -- reportes agrupados en Angular. HTTP SIMULADO (HttpTestingController):
 * no se contacta ningún servidor. Los JSON replican el contrato real del
 * backend (schemas.py: ReporteAgrupadoOut / ConsultaInteligenteResponse).
 * Se prueba el DOM con las clases originales de la pantalla (sin atributos
 * de prueba añadidos al HTML).
 */
const PERIODO = {
  fecha_desde: '2026-01-17',
  fecha_hasta: '2026-11-16',
  descripcion: 'Últimos 10 meses: del 2026-01-17 al 2026-11-16 (ambos incluidos)',
};
const fila = (posicion: number | null, etiqueta: string, unidades: number | null, ingresos: number, ventas: number | null = null) => ({
  posicion, etiqueta, id: null, unidades, ingresos, ventas,
});

function rankingPorGrupo(): ReporteAgrupado {
  const central = Array.from({ length: 10 }, (_, i) => fila(i + 1, `P${String(i + 1).padStart(2, '0')}`, 40 - i * 3, (40 - i * 3) * 10));
  return {
    tipo: 'ranking_por_grupo', titulo: 'Top 10 productos más vendidos por cada sucursal', metrica: 'unidades', agrupacion: 'sucursal',
    limite: 10, orden: 'desc', granularidad: null, periodo: PERIODO,
    filtros_aplicados: ['Sucursales: todas', 'Solo ventas PAGADAS de tu empresa'],
    supuestos: ['Interpreté el ranking como el TOP 10 dentro de cada sucursal (no un TOP global).'],
    grupos: [
      { id: 1, nombre: 'Central', filas: central, total_unidades: 175, total_ingresos: 1750, total_grupo_unidades: 190, total_grupo_ingresos: 1900 },
      { id: 2, nombre: 'Este', filas: [fila(1, 'P07', 9, 90), fila(2, 'P13', 2, 20)], total_unidades: 11, total_ingresos: 110, total_grupo_unidades: 11, total_grupo_ingresos: 110 },
      { id: 3, nombre: 'Sur', filas: [], total_unidades: 0, total_ingresos: 0, total_grupo_unidades: 0, total_grupo_ingresos: 0 },
    ],
    total_unidades: 186, total_ingresos: 1860, grafico: 'barras_por_grupo',
  };
}

function rankingGlobal(): ReporteAgrupado {
  return {
    tipo: 'ranking_global_desglosado', titulo: 'Top 10 global de productos más vendidos, desglosado por sucursal', metrica: 'unidades',
    agrupacion: 'sucursal', limite: 10, orden: 'desc', granularidad: null, periodo: PERIODO,
    filtros_aplicados: ['Sucursales: todas', 'Solo ventas PAGADAS de tu empresa'], supuestos: [],
    grupos: [
      { id: 1, nombre: 'Central', filas: [fila(1, 'P03', 40, 400), fila(3, 'P01', 12, 120)], total_unidades: 52, total_ingresos: 520, total_grupo_unidades: null, total_grupo_ingresos: null },
      { id: 2, nombre: 'Este', filas: [fila(2, 'P07', 15, 150)], total_unidades: 15, total_ingresos: 150, total_grupo_unidades: null, total_grupo_ingresos: null },
    ],
    total_unidades: 67, total_ingresos: 670, grafico: 'barras_por_grupo',
  };
}

function serie(conVentas = true): ReporteAgrupado {
  const meses = ['2026-09', '2026-10', '2026-11'];
  const central = meses.map((m, i) => fila(null, m, null, conVentas ? (i + 1) * 100 : 0, conVentas ? i + 1 : 0));
  return {
    tipo: 'serie_por_grupo', titulo: 'Ventas por sucursal y por mes', metrica: 'ingresos', agrupacion: 'sucursal', limite: null, orden: 'desc',
    granularidad: 'mes', periodo: { fecha_desde: '2026-08-17', fecha_hasta: '2026-11-16', descripcion: 'Últimos 3 meses: del 2026-08-17 al 2026-11-16 (ambos incluidos)' },
    filtros_aplicados: ['Sucursales: todas', 'Solo ventas PAGADAS de tu empresa'], supuestos: ['No indicaste el detalle: agrupé las ventas por mes según el largo del periodo.'],
    grupos: [
      { id: 1, nombre: 'Central', filas: central, total_unidades: null, total_ingresos: conVentas ? 600 : 0, total_grupo_unidades: null, total_grupo_ingresos: conVentas ? 600 : 0 },
      { id: 2, nombre: 'Sur', filas: [], total_unidades: null, total_ingresos: 0, total_grupo_unidades: null, total_grupo_ingresos: 0 },
    ],
    total_unidades: null, total_ingresos: conVentas ? 600 : 0, grafico: 'lineas_por_grupo',
  };
}

const respuesta = (reporte: ReporteAgrupado | null | undefined, extra: Record<string, unknown> = {}) => ({
  exito: true, intencion: 'productos_mas_vendidos',
  filtros: { sucursal_id: null, sucursal_nombre: null, fecha_desde: '2026-01-17', fecha_hasta: '2026-11-16' },
  resumen: 'Resumen determinista del reporte.', datos: null, requiere_aclaracion: false, especificacion: null,
  ...(reporte === undefined ? {} : { reporte_agrupado: reporte }), ...extra,
});
const aclaracion = (mensaje: string) => ({ exito: false, intencion: 'ventas', filtros: null, resumen: mensaje, datos: null, reporte_agrupado: null, requiere_aclaracion: true, especificacion: null });
const aviso = (mensaje: string) => ({ exito: false, intencion: null, filtros: null, resumen: mensaje, datos: null, reporte_agrupado: null, requiere_aclaracion: false });

const DASHBOARD: Record<string, unknown> = {
  '/reportes/resumen': { ingresos: 100, ventas_realizadas: 3, productos_vendidos: 9, reservas_atendidas: 1, devoluciones_cambios: 0, devoluciones: 0, cambios: 0, stock_bajo: 2 },
  '/reportes/ventas': { ingresos_totales: 100, ventas_totales: 3, granularidad: 'dia', por_periodo: [], por_tipo: [], por_metodo_pago: [], por_sucursal: [] },
  '/reportes/inventario': { stock_fisico_total: 10, stock_reservado_total: 1, stock_disponible_total: 9, umbral_stock_bajo: 3, stock_bajo: [] },
  '/reportes/reservas': { creadas: 1, atendidas: 1, canceladas: 0, vencidas: 0 },
  '/reportes/productos-mas-vendidos': { productos: [{ producto_id: 1, nombre: 'Polera', unidades: 5, ingresos: 50 }] },
};

describe('CU30 reportes agrupados (Angular)', () => {
  let fixture: ComponentFixture<Reportes>;
  let http: HttpTestingController;
  let el: HTMLElement;

  const rutaDe = (url: string) => url.substring(url.indexOf('/reportes'));

  /** Responde las 5 consultas del dashboard pendientes (carga inicial o refresco tras una consulta exitosa). */
  function resolverDashboard(): number {
    const pendientes = http.match((r) => r.method === 'GET' && rutaDe(r.url.split('?')[0]) in DASHBOARD);
    pendientes.forEach((r) => r.flush(DASHBOARD[rutaDe(r.request.url.split('?')[0])] as any));
    fixture.detectChanges();
    return pendientes.length;
  }

  function consultar(texto: string, cuerpo: unknown, estado = 200) {
    const input = el.querySelector('input.consulta-ia-form__input') as HTMLInputElement;
    input.value = texto;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    (el.querySelector('button[type=submit]') as HTMLButtonElement).click();
    fixture.detectChanges();
    const req = http.expectOne((r) => r.method === 'POST' && r.url.endsWith('/reportes/consulta-inteligente'));
    if (estado === 200) {
      req.flush(cuerpo as any);
    } else {
      req.flush({ detail: 'error' }, { status: estado, statusText: 'Error' });
    }
    fixture.detectChanges();
    return req.request;
  }

  const q = (sel: string) => el.querySelector(sel);
  const qa = (sel: string) => Array.from(el.querySelectorAll(sel));
  const texto = (sel: string) => (q(sel)?.textContent ?? '').replace(/\s+/g, ' ').trim();
  const celdas = (fila: Element | null) => Array.from(fila?.children ?? []).map((c) => (c.textContent ?? '').trim());

  const REPORTE = '.reporte-dinamico';
  const GRUPO = '.reporte-dinamico__grupo';
  const TITULO_RESUMEN = '.resumen-ia__titulo';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reportes],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: AuthService, useValue: { usuario: () => ({ id: 1, empresa_id: 7, rol: 'ADMINISTRADOR', nombre: 'Admin', correo: 'a@f.test' }) } },
        { provide: SuperadminService, useValue: { getSuscripcionEmpresa: () => of({ plan: { reportes_generativos_ia: true } }) } },
        { provide: SucursalAdminService, useValue: { list: () => of([]) } },
        { provide: CategoryService, useValue: { list: () => of([]) } },
        { provide: ProductoService, useValue: { list: () => of([]) } },
      ],
    }).compileComponents();
    http = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(Reportes);
    el = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(resolverDashboard()).toBe(5);
  });

  afterEach(() => {
    // Si una aserción falla antes de resolver peticiones, verify() lanzaría y dejaría el TestBed sucio para las demás pruebas.
    try {
      http.verify();
    } finally {
      TestBed.resetTestingModule();
    }
  });

  // -------------------------------------------------------------- regresión de la pantalla anterior
  it('regresión: dashboard, KPIs y consulta inteligente siguen funcionando sin reporte agrupado', () => {
    expect(q('.consulta-ia-card')).toBeTruthy();
    expect(q(REPORTE)).toBeNull();
    expect(q('.resumen-ia')).toBeNull();
    expect(el.textContent).toContain('Reportes e indicadores');
    expect(qa('.consulta-ia-ejemplo').length).toBe(3);
  });

  // -------------------------------------------------------------- ausencia de reporte_agrupado
  it('sin reporte_agrupado (campo ausente o null) conserva el comportamiento anterior', () => {
    for (const cuerpo of [respuesta(undefined), respuesta(null)]) {
      const peticion = consultar('Ventas de este mes', cuerpo);
      expect(peticion.body.consulta).toBe('Ventas de este mes');
      expect(q(REPORTE)).toBeNull();
      expect(texto(TITULO_RESUMEN)).toBe('Resumen');
      expect(texto('.resumen-ia__texto')).toBe('Resumen determinista del reporte.');
      expect(resolverDashboard()).toBe(5);                                    // el dashboard se refresca como siempre
    }
  });

  // -------------------------------------------------------------- TOP 10 por sucursal
  it('TOP 10 por sucursal: periodo exacto, filtros, supuestos, tablas por sucursal, totales y gráficos de barras', () => {
    consultar('10 productos más vendidos en los últimos 10 meses agrupados por sucursal', respuesta(rankingPorGrupo()));
    expect(q(REPORTE)).toBeTruthy();
    expect(texto('.reporte-dinamico__titulo')).toBe('Top 10 productos más vendidos por cada sucursal');
    expect(texto('.reporte-dinamico__periodo')).toContain('2026-01-17 al 2026-11-16 (ambos incluidos)');
    const chips = qa('.reporte-dinamico__chips li').map((li) => li.textContent!.replace(/\s+/g, ' ').trim());
    expect(chips).toEqual(expect.arrayContaining(['Sucursales: todas', 'Solo ventas PAGADAS de tu empresa', 'Métrica: unidades vendidas']));
    expect(chips.some((c) => c.startsWith('TOP 10') && c.includes('mayor a menor'))).toBe(true);
    expect(texto('.reporte-dinamico__supuesto')).toContain('no un TOP global');

    const grupos = qa(GRUPO);
    expect(grupos.map((g) => g.querySelector('h4')!.textContent!.trim())).toEqual(['Central', 'Este', 'Sur']);
    const central = grupos[0];
    expect(central.querySelectorAll('tbody tr').length).toBe(10);
    expect(celdas(central.querySelector('thead tr'))).toEqual(['#', 'Producto', 'Unidades', 'Ingresos (Bs)']);
    // total del TOP mostrado (175) vs total vendido en toda la sucursal (190): NO se confunden
    expect(celdas(central.querySelector('tfoot tr:not(.reporte-dinamico__total-grupo)'))).toEqual(['Total mostrado', '175', '1750.00']);
    expect(celdas(central.querySelector('.reporte-dinamico__total-grupo'))).toEqual(['Total vendido en Central', '190', '1900.00']);
    // sucursal sin ventas: estado vacío, sin tabla ni gráfico
    expect(grupos[2].querySelector('.reporte-dinamico__vacio')!.textContent).toContain('Sin ventas en el periodo.');
    expect(grupos[2].querySelector('table')).toBeNull();
    expect(qa('app-grafico-barras').length).toBe(2);                         // Central y Este; Sur no
    expect(qa('app-grafico-lineas').length).toBe(0);
    expect(texto('.reporte-dinamico__total')).toBe('Total general: 186 unidades · Bs 1860.00');
    resolverDashboard();
  });

  // -------------------------------------------------------------- TOP 10 global desglosado
  it('TOP 10 global desglosado: posición global por fila, sin total de sucursal y total general', () => {
    consultar('top 10 global desglosado por sucursal', respuesta(rankingGlobal()));
    const grupos = qa(GRUPO);
    expect(Array.from(grupos[0].querySelectorAll('tbody tr')).map((tr) => tr.querySelector('td')!.textContent!.trim())).toEqual(['1', '3']);
    expect(grupos[1].querySelector('tbody td')!.textContent!.trim()).toBe('2');
    expect(qa('.reporte-dinamico__total-grupo').length).toBe(0);              // null en global: no se inventa un total de sucursal
    expect(celdas(grupos[0].querySelector('tfoot tr'))).toEqual(['Total mostrado', '52', '520.00']);
    expect(texto('.reporte-dinamico__total')).toBe('Total general: 67 unidades · Bs 670.00');
    expect(qa('app-grafico-barras').length).toBe(2);
    resolverDashboard();
  });

  // -------------------------------------------------------------- serie temporal
  it('serie temporal: tabla por periodo, gráfico de líneas y sucursal sin filas en estado vacío', () => {
    consultar('compara las ventas de las sucursales durante los últimos 3 meses', respuesta(serie()));
    const grupos = qa(GRUPO);
    expect(texto('.reporte-dinamico__periodo')).toContain('2026-08-17 al 2026-11-16');
    expect(celdas(grupos[0].querySelector('thead tr'))).toEqual(['Mes', 'Ventas', 'Ingresos (Bs)']);
    expect(grupos[0].querySelectorAll('tbody tr').length).toBe(3);
    expect(celdas(grupos[0].querySelector('tfoot tr'))).toEqual(['Total', '', '600.00']);
    expect(qa('app-grafico-lineas').length).toBe(1);                         // solo Central
    expect(qa('app-grafico-barras').length).toBe(0);
    expect(grupos[1].querySelector('.reporte-dinamico__vacio')!.textContent).toContain('Sin ventas en el periodo.');
    expect(texto('.reporte-dinamico__total')).toBe('Total general: Bs 600.00');
    expect(texto('.reporte-dinamico__supuesto')).toContain('agrupé las ventas por mes');
    resolverDashboard();
  });

  // -------------------------------------------------------------- reporte sin datos
  it('reporte sin datos: estados vacíos, sin tablas ni gráficos', () => {
    const sinVentas = rankingPorGrupo();
    sinVentas.grupos.forEach((g) => { g.filas = []; g.total_unidades = 0; g.total_ingresos = 0; g.total_grupo_unidades = 0; g.total_grupo_ingresos = 0; });
    sinVentas.total_unidades = 0; sinVentas.total_ingresos = 0;
    consultar('x', respuesta(sinVentas, { resumen: 'No hay ventas registradas para este reporte en el periodo.' }));
    expect(texto('.resumen-ia__texto')).toContain('No hay ventas registradas');
    expect(qa('.reporte-dinamico__vacio').length).toBe(3);
    expect(qa(GRUPO + ' table').length).toBe(0);
    expect(qa('app-grafico-barras').length + qa('app-grafico-lineas').length).toBe(0);
    resolverDashboard();
  });

  // -------------------------------------------------------------- aclaraciones y avisos
  it.each([
    ['sucursal ambigua', 'Hay varias sucursales que coinciden con «Mall»: Mall Norte, Mall Ventura. ¿De cuál quieres el reporte?'],
    ['categoría ambigua', 'Hay varias categorías que coinciden con «Camisas»: Camisas Manga Corta, Camisas Manga Larga. ¿De cuál quieres el reporte?'],
    ['filtro no soportado', 'Por ahora solo puedo filtrar por categoría los productos más vendidos agrupados por sucursal o por categoría. ¿Quieres ese reporte?'],
    ['solicitud incompleta', 'Para comparar sucursales por semana o mes necesito un periodo. ¿De cuándo a cuándo (por ejemplo, los últimos 3 meses)?'],
  ])('aclaración (%s): se titula "Aclaración", sin reporte y sin tocar el dashboard', (_caso, mensaje) => {
    consultar('consulta', aclaracion(mensaje));
    expect(texto(TITULO_RESUMEN)).toBe('Aclaración');
    expect(texto('.resumen-ia__texto')).toBe(mensaje);
    expect(q(REPORTE)).toBeNull();
    http.expectNone((r) => r.method === 'GET' && rutaDe(r.url.split('?')[0]) in DASHBOARD);   // no se refrescó nada
  });

  it('aviso (categoría inexistente / sucursal no encontrada): mensaje en el recuadro, sin reporte y sin tocar el dashboard', () => {
    consultar('x', aviso('No encontré una categoría con ese nombre.'));
    expect(texto(TITULO_RESUMEN)).toBe('Resumen');                           // igual que el comportamiento original
    expect(texto('.resumen-ia__texto')).toBe('No encontré una categoría con ese nombre.');
    expect(q(REPORTE)).toBeNull();
    http.expectNone((r) => r.method === 'GET' && rutaDe(r.url.split('?')[0]) in DASHBOARD);
  });

  // -------------------------------------------------------------- error de backend
  it('error de backend: mensaje de no disponible, sin reporte y sin conservar datos de la consulta anterior', () => {
    consultar('primera', respuesta(rankingPorGrupo()));
    resolverDashboard();
    expect(q(REPORTE)).toBeTruthy();
    consultar('segunda', null, 500);
    expect(q(REPORTE)).toBeNull();                                           // el reporte anterior NO queda en pantalla
    expect(texto('.resumen-ia__texto')).toContain('La consulta inteligente no está disponible en este momento');
    expect((el.querySelector('button[type=submit]') as HTMLButtonElement).textContent!.trim()).toBe('GENERAR');
  });

  it('estado de carga: el botón indica GENERANDO y el reporte previo se limpia al iniciar la consulta', () => {
    consultar('primera', respuesta(rankingPorGrupo())); resolverDashboard();
    const input = el.querySelector('input.consulta-ia-form__input') as HTMLInputElement;
    input.value = 'segunda'; input.dispatchEvent(new Event('input')); fixture.detectChanges();
    (el.querySelector('button[type=submit]') as HTMLButtonElement).click(); fixture.detectChanges();
    expect((el.querySelector('button[type=submit]') as HTMLButtonElement).textContent!.trim()).toBe('GENERANDO...');
    expect(q(REPORTE)).toBeNull();                                           // ya no se muestra el de la consulta anterior
    http.expectOne((r) => r.method === 'POST').flush(respuesta(serie()) as any); fixture.detectChanges();
    resolverDashboard();
  });

  // -------------------------------------------------------------- cambio sucesivo entre tipos
  it('cambio sucesivo entre tipos de reporte: solo se ve el de la última consulta', () => {
    const secuencia: [string, unknown, () => void][] = [
      ['uno', respuesta(rankingPorGrupo()), () => { expect(qa(GRUPO).length).toBe(3); expect(qa('app-grafico-barras').length).toBe(2); }],
      ['dos', respuesta(rankingGlobal()), () => { expect(qa(GRUPO).length).toBe(2); expect(qa('.reporte-dinamico__total-grupo').length).toBe(0); }],
      ['tres', respuesta(serie()), () => { expect(qa('app-grafico-lineas').length).toBe(1); expect(qa('app-grafico-barras').length).toBe(0); }],
      ['cuatro', aclaracion('¿Cuál sucursal?'), () => { expect(q(REPORTE)).toBeNull(); expect(texto(TITULO_RESUMEN)).toBe('Aclaración'); }],
      ['cinco', respuesta(null), () => { expect(q(REPORTE)).toBeNull(); expect(texto(TITULO_RESUMEN)).toBe('Resumen'); }],
      ['seis', respuesta(rankingPorGrupo()), () => { expect(qa(GRUPO).length).toBe(3); expect(texto(TITULO_RESUMEN)).toBe('Resumen'); }],
    ];
    for (const [texto_, cuerpo, verificar] of secuencia) {
      consultar(texto_, cuerpo);
      verificar();
      if ((cuerpo as { exito: boolean }).exito) resolverDashboard();
    }
    // LIMPIAR deja la pantalla sin reporte ni mensajes
    (q('.consulta-ia-form .btn--ghost') as HTMLButtonElement).click(); fixture.detectChanges();
    expect(q(REPORTE)).toBeNull(); expect(q('.resumen-ia')).toBeNull();
  });
});
