import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
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
    return this.http.get<ProductoDisponibilidad>(this.baseUrl, { params });
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

    const disponibilidad: DisponibilidadSucursal[] = [];

    preparaciones.forEach((prep) => {
      const producto = prep.productos.find((p) => p.id === productoId);
      if (producto) {
        const variantes: VarianteDisponible[] = producto.variantes.map((v) => ({
          producto_variante_id: v.id,
          talla_id: v.talla_id,
          talla: v.talla_nombre,
          color_id: v.color_id,
          color: v.color_nombre,
          cantidad: v.stock_disponible,
        }));

        disponibilidad.push({
          sucursal_id: prep.sucursal.id,
          sucursal: prep.sucursal.nombre,
          ciudad_id: 0,
          ciudad: prep.sucursal.ciudad || '',
          variantes,
        });
      }
    });

    if (disponibilidad.length === 0) {
      throw new Error(`Producto ${productoId} no encontrado en información local.`);
    }

    return {
      producto_id: productoId,
      disponibilidad,
    };
  }
}
