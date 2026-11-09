import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConnectivityService } from '../../core/services/connectivity.service';
import { AuthService } from '../../core/services/auth.service';
import { ConsultaOperacionesLocalesService } from '../operacion-offline/cu10-consultar-datos-operaciones-locales/consulta-operaciones-locales.service';
import { FiltroHistorial, VentaHistorialOut } from './historial-compras.model';

/** Consume CU27 -- Consultar historial de compras. Requiere un CLIENTE o un
 * CAJERO autenticado (el interceptor HTTP ya adjunta el Bearer token). El
 * backend resuelve SIEMPRE del token de quién son las ventas -- este
 * servicio nunca envía cliente_id ni sucursal_id, solo los filtros
 * (fecha/código). Compartido entre features/cliente/historial-compras y
 * features/cajero/historial -- un único servicio, nunca duplicado. */
@Injectable({ providedIn: 'root' })
export class HistorialComprasService {
  private readonly http = inject(HttpClient);
  private readonly connectivity = inject(ConnectivityService);
  private readonly auth = inject(AuthService);
  private readonly cu10 = inject(ConsultaOperacionesLocalesService);
  private readonly baseUrl = `${environment.apiUrl}/historial-compras`;

  private construirParams(filtro: FiltroHistorial): HttpParams {
    let params = new HttpParams();
    if (filtro.desde) {
      params = params.set('desde', filtro.desde);
    }
    if (filtro.hasta) {
      params = params.set('hasta', filtro.hasta);
    }
    if (filtro.codigo_venta) {
      params = params.set('codigo_venta', filtro.codigo_venta);
    }
    return params;
  }

  listarMias(filtro: FiltroHistorial): Observable<VentaHistorialOut[]> {
    return this.http.get<VentaHistorialOut[]>(`${this.baseUrl}/mias`, { params: this.construirParams(filtro) });
  }

  listarSucursal(filtro: FiltroHistorial): Observable<VentaHistorialOut[]> {
    const isOnline = this.connectivity.isOnline();

    if (!isOnline) {
      // CU9 — Offline: obtener ventas guardadas localmente
      return from(this.listarSucursalOffline(filtro));
    }

    // Online: obtener del backend
    return this.http.get<VentaHistorialOut[]>(`${this.baseUrl}/sucursal`, {
      params: this.construirParams(filtro),
    });
  }

  // CU10 — Obtener ventas offline desde IndexedDB (delegada a CU10)
  private async listarSucursalOffline(filtro: FiltroHistorial): Promise<VentaHistorialOut[]> {
    try {
      const usuario = this.auth.usuario();
      const empresaId = usuario?.empresa_id || 1;

      // Consultar operaciones locales a través de CU10
      const ventasOffline = await this.cu10.consultarVentasOffline(empresaId);

      if (!ventasOffline || ventasOffline.length === 0) {
        console.log('[CU10 HISTORIAL] No hay ventas offline para empresa:', empresaId);
        return [];
      }

      // Mapear VentaOfflineCompleta a VentaHistorialOut
      const ventasHistorial: VentaHistorialOut[] = ventasOffline.map((v: any) => ({
        venta_id: v.venta_id,
        codigo_venta: v.codigo_venta,
        fecha: v.fecha,
        sucursal: v.sucursal,
        cliente_nombre: v.cliente_nombre,
        tipo: v.tipo,
        metodo_pago: v.metodo_pago,
        total: v.total,
        tiene_postventa: v.tiene_postventa,
        leyenda_postventa: v.leyenda_postventa,
      }));

      console.log('[CU10 HISTORIAL] Ventas offline consultadas a través de CU10:', ventasHistorial.length);
      return ventasHistorial;
    } catch (error) {
      console.error('[CU10 HISTORIAL] Error al consultar ventas offline:', error);
      return [];
    }
  }
}
