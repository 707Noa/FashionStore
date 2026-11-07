import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { ProductoDisponibilidad, DisponibilidadSucursal, VarianteDisponible } from './disponibilidad.model';
import { ConnectivityService } from '../../../../core/services/connectivity.service';
import { OfflinePreparacionService } from '../../../operacion-offline/servicios/offline-preparacion.service';
import { AuthService } from '../../../../core/services/auth.service';

/** Consume la consulta pública de disponibilidad de CU12 -- sin token, apto para Invitado y Cliente. */
@Injectable({ providedIn: 'root' })
export class DisponibilidadService {
  private readonly http = inject(HttpClient);
  private readonly connectivity = inject(ConnectivityService);
  private readonly offlinePreparacion = inject(OfflinePreparacionService);
  private readonly authService = inject(AuthService);
  private readonly baseUrl = `${environment.apiUrl}/disponibilidad`;

  /**
   * El backend de CU12 siempre responde con todas las variantes activas del
   * producto por sucursal (ver ProductoDisponibilidad); no filtra por talla
   * ni color. tallaId/colorId se aceptan y se envían igual -- por si un
   * futuro ajuste del backend los usa para acotar la respuesta -- pero hoy
   * el filtrado real por variante ocurre en el componente sobre `variantes`.
   */
  consultar(
    productoId: number,
    tallaId?: number,
    colorId?: number,
    ciudadId?: number,
  ): Observable<ProductoDisponibilidad> {
    if (!this.connectivity.isOnline()) {
      return from(this.consultarOffline(productoId));
    }

    let params = new HttpParams().set('producto_id', productoId);
    if (tallaId) {
      params = params.set('talla_id', tallaId);
    }
    if (colorId) {
      params = params.set('color_id', colorId);
    }
    if (ciudadId) {
      params = params.set('ciudad_id', ciudadId);
    }

    return this.http.get<ProductoDisponibilidad>(this.baseUrl, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        // Si backend devuelve errores críticos (504, 503, 502, 500, 408, 429, 0),
        // intentar fallback a disponibilidad offline
        const isCriticalError =
          error.status === 0 ||
          error.status === 408 ||
          error.status === 429 ||
          error.status >= 500;

        if (isCriticalError) {
          console.warn(
            `[CU07 AVAILABILITY FALLBACK] Backend error ${error.status || 'UNKNOWN'} — usando datos offline`,
          );
          return from(this.consultarOffline(productoId)).pipe(
            catchError(() => {
              // Si offline también falla, devolver error original
              return of(undefined as any);
            }),
          );
        }

        // Para otros errores (4xx), propagar el error
        throw error;
      }),
    );
  }

  private async consultarOffline(productoId: number): Promise<ProductoDisponibilidad> {
    const usuario = this.authService.usuario();
    if (!usuario?.empresa_id) {
      throw new Error('No hay información disponible para consultar disponibilidad sin conexión.');
    }

    const preparaciones = await this.offlinePreparacion.obtenerTodasLasPreparaciones(
      usuario.empresa_id,
    );

    if (preparaciones.length === 0) {
      throw new Error('No hay información disponible para consultar disponibilidad sin conexión.');
    }

    // Usar Map para deduplicar por sucursal_id
    const disponibilidadMap = new Map<number, DisponibilidadSucursal>();

    preparaciones.forEach((prep) => {
      const producto = prep.productos.find((p) => p.id === productoId);
      if (producto) {
        // Si esta sucursal ya existe en el map, combinar variantes
        if (disponibilidadMap.has(prep.sucursal.id)) {
          const existing = disponibilidadMap.get(prep.sucursal.id)!;
          const nuevasVariantes: VarianteDisponible[] = producto.variantes.map((v) => ({
            producto_variante_id: v.id,
            talla_id: v.talla_id,
            talla: v.talla_nombre,
            color_id: v.color_id,
            color: v.color_nombre,
            cantidad: v.stock_disponible,
          }));

          // Combinar variantes (evitar duplicadas por id)
          const variantesMap = new Map<number, VarianteDisponible>();
          existing.variantes.forEach((v) => variantesMap.set(v.producto_variante_id, v));
          nuevasVariantes.forEach((v) => variantesMap.set(v.producto_variante_id, v));
          existing.variantes = Array.from(variantesMap.values());
        } else {
          // Primera vez que vemos esta sucursal
          const variantes: VarianteDisponible[] = producto.variantes.map((v) => ({
            producto_variante_id: v.id,
            talla_id: v.talla_id,
            talla: v.talla_nombre,
            color_id: v.color_id,
            color: v.color_nombre,
            cantidad: v.stock_disponible,
          }));

          disponibilidadMap.set(prep.sucursal.id, {
            sucursal_id: prep.sucursal.id,
            sucursal: prep.sucursal.nombre,
            ciudad_id: 0,
            ciudad: prep.sucursal.ciudad || '',
            variantes,
          });
        }
      }
    });

    const disponibilidad = Array.from(disponibilidadMap.values());

    if (disponibilidad.length === 0) {
      throw new Error(`Producto ${productoId} no encontrado en información local.`);
    }

    return {
      producto_id: productoId,
      disponibilidad,
    };
  }
}
