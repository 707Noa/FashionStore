import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ConnectivityService } from '../../../core/services/connectivity.service';
import { OfflineStorageService } from '../../../core/services/offline-storage.service';
import { AuthService } from '../../../core/services/auth.service';
import {
  ConfirmarPagoPayload,
  CrearVentaDirectaPayload,
  PagoConfirmadoOut,
  ProductoBusquedaOut,
  VentaPresencialOut,
} from './venta-presencial.model';

/** Consume CU24 (Registrar venta presencial) y CU25 (Procesar pago
 * presencial) -- ambos sobre la MISMA Venta, un solo servicio (no
 * duplicado). Requiere un CAJERO autenticado (el interceptor HTTP ya
 * adjunta el Bearer token). El backend resuelve la sucursal y el cajero
 * SIEMPRE desde el token -- este servicio nunca envía sucursal_id ni
 * cajero_id; tampoco precios, total ni estado, FastAPI los calcula/verifica
 * siempre del lado del servidor. */
@Injectable({ providedIn: 'root' })
export class VentaPresencialService {
  private readonly http = inject(HttpClient);
  private readonly connectivity = inject(ConnectivityService);
  private readonly offlineStorage = inject(OfflineStorageService);
  private readonly auth = inject(AuthService);
  private readonly baseUrl = `${environment.apiUrl}/ventas-presenciales`;
  private readonly baseUrlPagos = `${environment.apiUrl}/pagos-presenciales`;

  buscarProductos(nombre: string): Observable<ProductoBusquedaOut[]> {
    const isOnline = this.connectivity.isOnline();

    if (!isOnline) {
      // CU9 — Offline: buscar en preparación local
      return from(this.buscarProductosOffline(nombre));
    }

    // CU24 — Online: buscar en backend
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<ProductoBusquedaOut[]>(`${this.baseUrl}/productos`, { params });
  }

  // CU9 — Búsqueda offline desde todas las preparaciones locales disponibles
  private async buscarProductosOffline(nombre: string): Promise<ProductoBusquedaOut[]> {
    try {
      const usuario = this.auth.usuario();
      const empresaId = usuario?.empresa_id || 1;

      const preparaciones = await this.offlineStorage.getAllPreparaciones(empresaId);

      if (!preparaciones || preparaciones.length === 0) {
        console.log(`[CU9 BUSQUEDA] No hay preparaciones disponibles offline para empresa=${empresaId}`);
        return [];
      }

      const resultados: ProductoBusquedaOut[] = [];
      const nombreBajo = nombre.toLowerCase();

      for (const preparacion of preparaciones) {
        if (!preparacion.productos) continue;

        for (const producto of preparacion.productos) {
          if (!producto.es_activo) continue;

          if (producto.nombre.toLowerCase().includes(nombreBajo)) {
            for (const variante of producto.variantes) {
              resultados.push({
                producto_variante_id: variante.id,
                producto: { id: producto.id, nombre: producto.nombre, imagen_principal_url: producto.imagen_principal_url },
                variante: { id: variante.id, talla: { id: variante.talla_id, nombre: variante.talla_nombre }, color: { id: variante.color_id, nombre: variante.color_nombre } },
                precio_unitario: variante.precio,
                en_promocion: producto.en_promocion,
                porcentaje_descuento: producto.porcentaje_descuento,
                disponible: variante.stock_disponible,
              });
            }
          }
        }
      }

      console.log(`[CU9 BUSQUEDA] Encontrados ${resultados.length} productos/variantes para: "${nombre}"`);
      return resultados;
    } catch (error) {
      console.error('[CU9 BUSQUEDA] Error al buscar offline:', error);
      return [];
    }
  }

  crearVentaDirecta(payload: CrearVentaDirectaPayload): Observable<VentaPresencialOut> {
    const isOnline = this.connectivity.isOnline();

    if (!isOnline) {
      // CU9 — Offline: construir venta local (sin guardar aún)
      return from(this.crearVentaOfflineResumen(payload));
    }

    // CU24 — Online: crear venta en backend
    return this.http.post<VentaPresencialOut>(`${this.baseUrl}/directa`, payload);
  }

  // CU9 — Construir resumen de venta offline (sin persistencia aún)
  private async crearVentaOfflineResumen(payload: CrearVentaDirectaPayload): Promise<VentaPresencialOut> {
    const usuario = this.auth.usuario();
    const empresaId = usuario?.empresa_id || 1;

    const preparaciones = await this.offlineStorage.getAllPreparaciones(empresaId);
    if (!preparaciones || preparaciones.length === 0) {
      throw new Error(`No hay preparación disponible para crear venta offline (empresa=${empresaId})`);
    }

    let total = 0;
    const detalles: any[] = [];

    for (const item of payload.items) {
      let variante: any = null;
      let producto: any = null;

      for (const prep of preparaciones) {
        for (const p of prep.productos) {
          for (const v of p.variantes) {
            if (v.id === item.producto_variante_id) {
              variante = v;
              producto = p;
              break;
            }
          }
          if (variante) break;
        }
        if (variante) break;
      }

      if (!variante || !producto) {
        throw new Error(`Variante ${item.producto_variante_id} no encontrada offline`);
      }

      const subtotal = variante.precio * item.cantidad;
      total += subtotal;

      detalles.push({
        producto: { id: producto.id, nombre: producto.nombre, imagen_principal_url: producto.imagen_principal_url },
        variante: { id: variante.id, talla: { id: variante.talla_id, nombre: variante.talla_nombre }, color: { id: variante.color_id, nombre: variante.color_nombre } },
        cantidad: item.cantidad,
        precio_unitario: variante.precio,
        subtotal,
      });
    }

    console.log(`[CU9 VENTA] Resumen construido: ${payload.items.length} items, total=${total}`);

    return {
      id: 0,
      codigo_venta: `LOC-${Date.now()}`,
      tipo: 'PRESENCIAL',
      estado: 'PENDIENTE_PAGO',
      origen: 'DIRECTA',
      total,
      fecha_creacion: new Date().toISOString(),
      reserva: null,
      detalles,
    };
  }

  crearVentaDesdeReserva(reservaId: number): Observable<VentaPresencialOut> {
    return this.http.post<VentaPresencialOut>(`${this.baseUrl}/desde-reserva/${reservaId}`, {});
  }

  confirmarPago(ventaId: number, payload: ConfirmarPagoPayload): Observable<PagoConfirmadoOut> {
    return this.http.post<PagoConfirmadoOut>(`${this.baseUrlPagos}/${ventaId}/confirmar`, payload);
  }
}
