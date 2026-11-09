import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import {
  CatalogoProductosQuery,
  CategoriaPublica,
  ColeccionPublica,
  ColorPublico,
  ProductoPublico,
  TallaPublica,
} from './catalogo.model';
import { ConnectivityService } from '../../../core/services/connectivity.service';
import { OfflinePreparacionService } from '../../operacion-offline/servicios/offline-preparacion.service';
import { AuthService } from '../../../core/services/auth.service';
import { OfflineStorageService } from '../../../core/services/offline-storage.service';

/** Consume el catálogo público de CU11 -- sin token, apto para Invitado y Cliente. */
@Injectable({ providedIn: 'root' })
export class CatalogoService {
  private readonly http = inject(HttpClient);
  private readonly connectivity = inject(ConnectivityService);
  private readonly offlinePreparacion = inject(OfflinePreparacionService);
  private readonly authService = inject(AuthService);
  private readonly offlineStorage = inject(OfflineStorageService);
  private readonly baseUrl = `${environment.apiUrl}/catalogo`;

  listCategorias(empresaId?: number | null): Observable<CategoriaPublica[]> {
    if (!this.connectivity.isOnline()) {
      return from(this.getCategoriasOffline());
    }
    let params = new HttpParams();
    if (empresaId !== null && empresaId !== undefined) {
      params = params.set('empresa_id', empresaId);
    }
    return this.http.get<CategoriaPublica[]>(`${this.baseUrl}/categorias`, { params });
  }

  listColecciones(temporadaId?: number): Observable<ColeccionPublica[]> {
    if (!this.connectivity.isOnline()) {
      return from(this.getColeccionesOffline());
    }
    let params = new HttpParams();
    if (temporadaId) {
      params = params.set('temporada_id', temporadaId);
    }
    return this.http.get<ColeccionPublica[]>(`${this.baseUrl}/colecciones`, { params });
  }

  listTallas(): Observable<TallaPublica[]> {
    if (!this.connectivity.isOnline()) {
      return from(this.getTallasOffline());
    }
    return this.http.get<TallaPublica[]>(`${this.baseUrl}/tallas`);
  }

  listColores(): Observable<ColorPublico[]> {
    if (!this.connectivity.isOnline()) {
      return from(this.getColoresOffline());
    }
    return this.http.get<ColorPublico[]>(`${this.baseUrl}/colores`);
  }

  listProductos(query?: CatalogoProductosQuery): Observable<ProductoPublico[]> {
    if (!this.connectivity.isOnline()) {
      return from(this.getProductosOffline(query));
    }

    let params = new HttpParams();
    if (query?.search) {
      params = params.set('search', query.search);
    }
    if (query?.categoria_id) {
      params = params.set('categoria_id', query.categoria_id);
    }
    if (query?.coleccion_id) {
      params = params.set('coleccion_id', query.coleccion_id);
    }
    if (query?.talla_id) {
      params = params.set('talla_id', query.talla_id);
    }
    if (query?.color_id) {
      params = params.set('color_id', query.color_id);
    }
    if (query?.empresa_id !== null && query?.empresa_id !== undefined) {
      params = params.set('empresa_id', query.empresa_id);
    }
    return this.http.get<ProductoPublico[]>(`${this.baseUrl}/productos`, { params });
  }

  getProducto(id: number): Observable<ProductoPublico> {
    if (!this.connectivity.isOnline()) {
      return from(this.getProductoOffline(id));
    }
    // Intentar obtener del servidor; si falla, fallback a IndexedDB
    return this.http.get<ProductoPublico>(`${this.baseUrl}/productos/${id}`).pipe(
      catchError((error) => {
        // Si es 404, no es un error de transporte — producto realmente no existe
        if (error.status === 404) {
          return throwError(() => error);
        }
        // Otros errores (500, timeout, ERR_FAILED, etc.) → intentar IndexedDB
        console.log(`[CATALOGO] Fallo al obtener producto ${id} del servidor, intentando IndexedDB...`, error.status);
        return from(this.getProductoOffline(id));
      })
    );
  }

  private async getTallasOffline(): Promise<TallaPublica[]> {
    const usuario = this.authService.usuario();
    if (!usuario?.empresa_id) {
      return [];
    }

    const preparaciones = await this.offlinePreparacion.obtenerTodasLasPreparaciones(
      usuario.empresa_id,
    );

    const tallasMap = new Map<number, TallaPublica>();
    preparaciones.forEach((prep) => {
      prep.tallas.forEach((t) => {
        if (!tallasMap.has(t.id)) {
          tallasMap.set(t.id, { id: t.id, nombre: t.nombre });
        }
      });
    });

    return Array.from(tallasMap.values());
  }

  private async getColoresOffline(): Promise<ColorPublico[]> {
    const usuario = this.authService.usuario();
    if (!usuario?.empresa_id) {
      return [];
    }

    const preparaciones = await this.offlinePreparacion.obtenerTodasLasPreparaciones(
      usuario.empresa_id,
    );

    const coloresMap = new Map<number, ColorPublico>();
    preparaciones.forEach((prep) => {
      prep.colores.forEach((c) => {
        if (!coloresMap.has(c.id)) {
          coloresMap.set(c.id, { id: c.id, nombre: c.nombre });
        }
      });
    });

    return Array.from(coloresMap.values());
  }

  private async getProductosOffline(query?: CatalogoProductosQuery): Promise<ProductoPublico[]> {
    const usuario = this.authService.usuario();
    if (!usuario?.empresa_id) {
      throw new Error('No hay información disponible para consultar el catálogo sin conexión.');
    }

    let preparaciones = await this.offlinePreparacion.obtenerTodasLasPreparaciones(
      usuario.empresa_id,
    );

    if (preparaciones.length === 0) {
      throw new Error('No hay información disponible para consultar el catálogo sin conexión.');
    }

    const productosSet = new Map<number, ProductoPublico>();

    preparaciones.forEach((prep) => {
      prep.productos.forEach((prod) => {
        if (prod.es_activo && !productosSet.has(prod.id)) {
          // Backend (CU06) ya calcula precios efectivos con promociones
          const precio_venta = prod.variantes?.[0]?.precio ?? 0;
          const producto: ProductoPublico = {
            id: prod.id,
            nombre: prod.nombre,
            descripcion: null,
            precio_venta: precio_venta,
            precio_base: prod.precio_base,
            precio_final: prod.precio_final,
            en_promocion: prod.en_promocion,
            porcentaje_descuento: prod.porcentaje_descuento,
            imagen_principal_url: prod.imagen_principal_url,
            imagenes: [],
            categoria: { id: prod.categoria_id, nombre: '', imagen_url: null },
            temporada: { id: 0, nombre: '' },
            coleccion: { id: 0, nombre: '', descripcion: null, temporada: { id: 0, nombre: '' } },
            tallas: [],
            colores: [],
          };
          productosSet.set(prod.id, producto);
        }
      });
    });

    let productos = Array.from(productosSet.values());

    if (query?.categoria_id) {
      productos = productos.filter((p) => p.categoria.id === query.categoria_id);
    }

    if (query?.search) {
      const searchLower = query.search.toLowerCase();
      productos = productos.filter((p) => p.nombre.toLowerCase().includes(searchLower));
    }

    return productos;
  }

  private async getProductoOffline(id: number): Promise<ProductoPublico> {
    const usuario = this.authService.usuario();
    if (!usuario?.empresa_id) {
      throw new Error('No hay información disponible para consultar el catálogo sin conexión.');
    }

    const preparaciones = await this.offlinePreparacion.obtenerTodasLasPreparaciones(
      usuario.empresa_id,
    );

    if (preparaciones.length === 0) {
      throw new Error('No hay información disponible para consultar el catálogo sin conexión.');
    }

    for (const prep of preparaciones) {
      const producto = prep.productos.find((p) => p.id === id && p.es_activo);
      if (producto) {
        const tallas = prep.tallas;
        const colores = prep.colores;

        const tallaMap = new Map(tallas.map((t) => [t.id, t.nombre]));
        const colorMap = new Map(colores.map((c) => [c.id, c.nombre]));

        const tallasList = producto.variantes.map((v) => ({
          id: v.talla_id,
          nombre: tallaMap.get(v.talla_id) || '',
        }));

        const coloresList = producto.variantes.map((v) => ({
          id: v.color_id,
          nombre: colorMap.get(v.color_id) || '',
        }));

        // Backend (CU06) ya calcula precios efectivos con promociones
        const precio_venta = producto.variantes?.[0]?.precio ?? 0;

        return {
          id: producto.id,
          nombre: producto.nombre,
          descripcion: null,
          precio_venta: precio_venta,
          precio_base: producto.precio_base,
          precio_final: producto.precio_final,
          en_promocion: producto.en_promocion,
          porcentaje_descuento: producto.porcentaje_descuento,
          imagen_principal_url: producto.imagen_principal_url,
          imagenes: [],
          categoria: { id: producto.categoria_id, nombre: '', imagen_url: null },
          temporada: { id: 0, nombre: '' },
          coleccion: {
            id: 0,
            nombre: '',
            descripcion: null,
            temporada: { id: 0, nombre: '' },
          },
          tallas: [...new Map(tallasList.map((t) => [t.id, t])).values()],
          colores: [...new Map(coloresList.map((c) => [c.id, c])).values()],
        };
      }
    }

    throw new Error(`Producto ${id} no encontrado en información local.`);
  }


  private async getCategoriasOffline(): Promise<CategoriaPublica[]> {
    const usuario = this.authService.usuario();
    if (!usuario?.empresa_id) {
      return [];
    }

    try {
      const categorias = await this.offlineStorage.getCategoriasOffline(usuario.empresa_id);
      return categorias.map((cat) => ({
        id: cat.id,
        nombre: cat.nombre,
        imagen_url: null,
      }));
    } catch (error) {
      console.error('Error al obtener categorías offline:', error);
      return [];
    }
  }

  private async getColeccionesOffline(): Promise<ColeccionPublica[]> {
    const usuario = this.authService.usuario();
    if (!usuario?.empresa_id) {
      return [];
    }

    try {
      const colecciones = await this.offlineStorage.getColeccionesOffline(usuario.empresa_id);
      return colecciones.map((col) => ({
        id: col.id,
        nombre: col.nombre,
        descripcion: col.descripcion,
        temporada: col.temporada,
      }));
    } catch (error) {
      console.error('Error al obtener colecciones offline:', error);
      return [];
    }
  }
}
