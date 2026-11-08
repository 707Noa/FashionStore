import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConnectivityService } from '../../core/services/connectivity.service';
import { OfflineStorageService } from '../../core/services/offline-storage.service';
import { AuthService } from '../../core/services/auth.service';
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
  private readonly offlineStorage = inject(OfflineStorageService);
  private readonly auth = inject(AuthService);
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

  // CU9 — Obtener ventas offline desde IndexedDB
  private async listarSucursalOffline(filtro: FiltroHistorial): Promise<VentaHistorialOut[]> {
    try {
      const usuario = this.auth.usuario();
      const empresaId = usuario?.empresa_id || 1;

      const ventas = await this.offlineStorage.obtenerVentasOfflinePendientes(empresaId);

      if (!ventas || ventas.length === 0) {
        console.log('[CU9 HISTORIAL] No hay ventas offline para empresa:', empresaId);
        return [];
      }

      // Mapear estructura offline a VentaHistorialOut
      const ventasHistorial: VentaHistorialOut[] = ventas.map((v: any) => ({
        venta_id: parseInt(v.uuid.slice(0, 8), 16) % 1000000,
        codigo_venta: `LOC-${v.uuid.slice(0, 8).toUpperCase()}`,
        fecha: v.fecha_creacion,
        sucursal: { id: v.sucursal_id, nombre: 'Sucursal Local', ciudad: 'Local' },
        cliente_nombre: 'Cliente Local',
        tipo: 'PRESENCIAL',
        metodo_pago: v.pago?.metodo_pago || 'EFECTIVO',
        total: v.total,
        tiene_postventa: false,
        leyenda_postventa: null,
      }));

      console.log('[CU9 HISTORIAL] Ventas offline cargadas:', ventasHistorial.length);
      return ventasHistorial;
    } catch (error) {
      console.error('[CU9 HISTORIAL] Error al cargar ventas offline:', error);
      return [];
    }
  }
}
