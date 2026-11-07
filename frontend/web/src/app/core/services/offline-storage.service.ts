import { Injectable } from '@angular/core';

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    h = (h << 5) - h + char;
    h = h & h; // Convert to 32bit integer
  }
  return Math.abs(h);
}

export interface OfflinePreparacion {
  sucursal: {
    id: number;
    nombre: string;
    ciudad: string | null;
    es_activa: boolean;
  };
  productos: Array<{
    id: number;
    nombre: string;
    categoria_id: number;
    coleccion_id: number;
    es_activo: boolean;
    precio_base: number;
    precio_final: number;
    en_promocion: boolean;
    porcentaje_descuento: number | null;
    imagen_principal_url: string | null;
    variantes: Array<{
      id: number;
      producto_id: number;
      talla_id: number;
      talla_nombre: string;
      color_id: number;
      color_nombre: string;
      precio: number;
      stock_disponible: number;
    }>;
  }>;
  tallas: Array<{
    id: number;
    nombre: string;
  }>;
  colores: Array<{
    id: number;
    nombre: string;
  }>;
  categorias: Array<{
    id: number;
    nombre: string;
  }>;
  colecciones: Array<{
    id: number;
    nombre: string;
    descripcion: string | null;
    imagen_destacada_url: string | null;
    es_destacada_inicio: boolean;
    temporada: { id: number; nombre: string };
  }>;
  clientes_minimos: Array<{
    id: number;
    nombre: string;
    correo: string;
  }>;
  metadata: {
    fecha_preparacion: string;
    version: number;
    estado: string;
    empresa_id: number;
    sucursal_id: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class OfflineStorageService {
  private dbName = 'fashionstore_offline';
  private db: IDBDatabase | null = null;
  private readonly dbReady: Promise<void>;

  constructor() {
    this.dbReady = this.initializeDB();
  }

  private initializeDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 2);

      request.onerror = () => {
        const error = new Error('Error al abrir IndexedDB');
        console.error(error);
        reject(error);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Crear object stores si no existen
        if (!db.objectStoreNames.contains('offline_preparacion')) {
          const preparacionStore = db.createObjectStore('offline_preparacion', { keyPath: 'id' });
          preparacionStore.createIndex('empresa_sucursal', ['empresa_id', 'sucursal_id'], {
            unique: true,
          });
          console.log('Object Store offline_preparacion creado');
        }
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('IndexedDB inicializado correctamente');
        resolve();
      };
    });
  }

  async savePreparacion(preparacion: OfflinePreparacion, empresaId: number): Promise<void> {
    await this.dbReady;
    const db = this.db;

    if (!db) {
      throw new Error('IndexedDB no está disponible');
    }

    const transaction = db.transaction(['offline_preparacion'], 'readwrite');
    const store = transaction.objectStore('offline_preparacion');

    const dataToStore = {
      id: `${empresaId}_${preparacion.metadata.sucursal_id}`,
      empresa_id: empresaId,
      sucursal_id: preparacion.metadata.sucursal_id,
      data: preparacion,
      timestamp: new Date().toISOString(),
    };

    return new Promise((resolve, reject) => {
      const request = store.put(dataToStore);

      request.onsuccess = () => {
        console.log(`Preparación guardada: empresa=${empresaId}, sucursal=${preparacion.metadata.sucursal_id}`);
      };

      request.onerror = () => {
        const error = new Error(`Error al guardar preparación en IndexedDB: ${request.error?.message}`);
        console.error(error);
        reject(error);
      };

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction error: ${transaction.error?.message}`));
      };
    });
  }

  async getPreparacion(empresaId: number, sucursalId: number): Promise<OfflinePreparacion | null> {
    await this.dbReady;
    const db = this.db;

    if (!db) {
      throw new Error('IndexedDB no está disponible');
    }

    const transaction = db.transaction(['offline_preparacion'], 'readonly');
    const store = transaction.objectStore('offline_preparacion');

    return new Promise((resolve, reject) => {
      let result: OfflinePreparacion | null = null;
      const request = store.get(`${empresaId}_${sucursalId}`);

      request.onsuccess = () => {
        result = request.result ? this.normalizarPreparacion(request.result.data) : null;
      };

      request.onerror = () => {
        const error = new Error(`Error al obtener preparación de IndexedDB: ${request.error?.message}`);
        console.error(error);
        reject(error);
      };

      transaction.oncomplete = () => {
        resolve(result);
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction error: ${transaction.error?.message}`));
      };
    });
  }

  async getAllPreparaciones(empresaId: number): Promise<OfflinePreparacion[]> {
    await this.dbReady;
    const db = this.db;

    if (!db) {
      throw new Error('IndexedDB no está disponible');
    }

    const transaction = db.transaction(['offline_preparacion'], 'readonly');
    const store = transaction.objectStore('offline_preparacion');
    const index = store.index('empresa_sucursal');

    return new Promise((resolve, reject) => {
      let results: OfflinePreparacion[] = [];
      const request = index.getAll(IDBKeyRange.bound([empresaId, 0], [empresaId, Infinity]));

      request.onsuccess = () => {
        const rawResults = request.result || [];
        console.log(`Obtenidas ${rawResults.length} preparaciones para empresa ${empresaId}`);
        results = rawResults.map((r) => this.normalizarPreparacion(r.data));
      };

      request.onerror = () => {
        const error = new Error(`Error al obtener preparaciones de IndexedDB: ${request.error?.message}`);
        console.error(error);
        reject(error);
      };

      transaction.oncomplete = () => {
        resolve(results);
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction error: ${transaction.error?.message}`));
      };
    });
  }

  async deletePreparacion(empresaId: number, sucursalId: number): Promise<void> {
    await this.dbReady;
    const db = this.db;

    if (!db) {
      throw new Error('IndexedDB no está disponible');
    }

    const transaction = db.transaction(['offline_preparacion'], 'readwrite');
    const store = transaction.objectStore('offline_preparacion');

    return new Promise((resolve, reject) => {
      const request = store.delete(`${empresaId}_${sucursalId}`);

      request.onsuccess = () => {
        console.log(`Preparación eliminada: empresa=${empresaId}, sucursal=${sucursalId}`);
      };

      request.onerror = () => {
        const error = new Error(`Error al eliminar preparación de IndexedDB: ${request.error?.message}`);
        console.error(error);
        reject(error);
      };

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction error: ${transaction.error?.message}`));
      };
    });
  }

  async clearAllPreparaciones(): Promise<void> {
    await this.dbReady;
    const db = this.db;

    if (!db) {
      throw new Error('IndexedDB no está disponible');
    }

    const transaction = db.transaction(['offline_preparacion'], 'readwrite');
    const store = transaction.objectStore('offline_preparacion');

    return new Promise((resolve, reject) => {
      const request = store.clear();

      request.onsuccess = () => {
        console.log('IndexedDB limpiado completamente');
      };

      request.onerror = () => {
        const error = new Error(`Error al limpiar IndexedDB: ${request.error?.message}`);
        console.error(error);
        reject(error);
      };

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction error: ${transaction.error?.message}`));
      };
    });
  }

  private normalizarPreparacion(prep: OfflinePreparacion): OfflinePreparacion {
    // Normalización defensiva para datos legacy y validación de precios.
    return {
      ...prep,
      productos: prep.productos.map((prod) => {
        const precioBase = this.normalizarPrecio(prod.precio_base);
        const precioFinal = this.normalizarPrecio(prod.precio_final);
        const porcentajeDesc = prod.porcentaje_descuento
          ? this.normalizarPrecio(prod.porcentaje_descuento)
          : null;

        return {
          ...prod,
          precio_base: precioBase,
          precio_final: precioFinal,
          porcentaje_descuento: porcentajeDesc,
          variantes: prod.variantes.map((v) => ({
            ...v,
            precio: this.normalizarPrecio(v.precio),
          })),
        };
      }),
    };
  }

  private normalizarPrecio(valor: any): number {
    const num = typeof valor === 'string' ? parseFloat(valor) : Number(valor);
    if (!isFinite(num)) {
      console.warn(`Precio inválido recibido: ${valor}, usando 0`);
      return 0;
    }
    return num;
  }

  async getDisponibilidadProductoOffline(
    empresaId: number,
    productoId: number,
  ): Promise<Array<{
    sucursal_id: number;
    sucursal: string;
    ciudad_id: number;
    ciudad: string;
    variantes: Array<{
      producto_variante_id: number;
      talla_id: number;
      talla: string;
      color_id: number;
      color: string;
      cantidad: number;
    }>;
  }>> {
    try {
      const preparaciones = await this.getAllPreparaciones(empresaId);

      // Deduplicar por sucursal_id usando Map
      const disponibilidadMap = new Map<number, {
        sucursal_id: number;
        sucursal: string;
        ciudad_id: number;
        ciudad: string;
        variantes: Array<{
          producto_variante_id: number;
          talla_id: number;
          talla: string;
          color_id: number;
          color: string;
          cantidad: number;
        }>;
      }>();

      for (const prep of preparaciones) {
        const producto = prep.productos.find((p) => p.id === productoId);
        if (!producto) {
          continue;
        }

        const ciudadId = hash(prep.sucursal.ciudad || 'sin-ciudad');

        // Si ya existe esta sucursal, combinar variantes
        if (disponibilidadMap.has(prep.sucursal.id)) {
          const existing = disponibilidadMap.get(prep.sucursal.id)!;
          const nuevasVariantes = producto.variantes.map((v) => ({
            producto_variante_id: v.id,
            talla_id: v.talla_id,
            talla: v.talla_nombre,
            color_id: v.color_id,
            color: v.color_nombre,
            cantidad: v.stock_disponible,
          }));

          // Deduplicar variantes por producto_variante_id
          const variantesMap = new Map();
          existing.variantes.forEach((v) => variantesMap.set(v.producto_variante_id, v));
          nuevasVariantes.forEach((v) => variantesMap.set(v.producto_variante_id, v));
          existing.variantes = Array.from(variantesMap.values());
        } else {
          // Primera vez que vemos esta sucursal
          disponibilidadMap.set(prep.sucursal.id, {
            sucursal_id: prep.sucursal.id,
            sucursal: prep.sucursal.nombre,
            ciudad_id: ciudadId,
            ciudad: prep.sucursal.ciudad || 'Sin ciudad',
            variantes: producto.variantes.map((v) => ({
              producto_variante_id: v.id,
              talla_id: v.talla_id,
              talla: v.talla_nombre,
              color_id: v.color_id,
              color: v.color_nombre,
              cantidad: v.stock_disponible,
            })),
          });
        }
      }

      return Array.from(disponibilidadMap.values());
    } catch (error) {
      console.error('Error al obtener disponibilidad offline:', error);
      return [];
    }
  }

  async getCiudadesOffline(empresaId: number): Promise<Array<{ id: number; nombre: string }>> {
    try {
      const preparaciones = await this.getAllPreparaciones(empresaId);
      const ciudadesMap = new Map<number, string>();

      for (const prep of preparaciones) {
        const ciudadId = hash(prep.sucursal.ciudad || 'sin-ciudad');
        if (!ciudadesMap.has(ciudadId)) {
          ciudadesMap.set(ciudadId, prep.sucursal.ciudad || 'Sin ciudad');
        }
      }

      return Array.from(ciudadesMap, ([id, nombre]) => ({ id, nombre }));
    } catch (error) {
      console.error('Error al obtener ciudades offline:', error);
      return [];
    }
  }

  async getCategoriasOffline(empresaId: number): Promise<Array<{ id: number; nombre: string }>> {
    try {
      const preparaciones = await this.getAllPreparaciones(empresaId);
      const categoriasMap = new Map<number, string>();

      for (const prep of preparaciones) {
        // Defensivo: categorias puede no existir en datos antiguos
        if (prep.categorias && Array.isArray(prep.categorias)) {
          for (const cat of prep.categorias) {
            if (!categoriasMap.has(cat.id)) {
              categoriasMap.set(cat.id, cat.nombre);
            }
          }
        }
      }

      return Array.from(categoriasMap, ([id, nombre]) => ({ id, nombre }));
    } catch (error) {
      console.error('Error al obtener categorías offline:', error);
      return [];
    }
  }

  async getColeccionesOffline(empresaId: number): Promise<
    Array<{
      id: number;
      nombre: string;
      descripcion: string | null;
      imagen_destacada_url: string | null;
      es_destacada_inicio: boolean;
      temporada: { id: number; nombre: string };
    }>
  > {
    try {
      const preparaciones = await this.getAllPreparaciones(empresaId);
      const coleccionesMap = new Map<
        number,
        {
          id: number;
          nombre: string;
          descripcion: string | null;
          imagen_destacada_url: string | null;
          es_destacada_inicio: boolean;
          temporada: { id: number; nombre: string };
        }
      >();

      for (const prep of preparaciones) {
        // Defensivo: colecciones puede no existir en datos antiguos
        if (prep.colecciones && Array.isArray(prep.colecciones)) {
          for (const col of prep.colecciones) {
            if (!coleccionesMap.has(col.id)) {
              coleccionesMap.set(col.id, {
                id: col.id,
                nombre: col.nombre,
                descripcion: col.descripcion,
                imagen_destacada_url: col.imagen_destacada_url,
                es_destacada_inicio: col.es_destacada_inicio,
                temporada: col.temporada,
              });
            }
          }
        }
      }

      return Array.from(coleccionesMap.values());
    } catch (error) {
      console.error('Error al obtener colecciones offline:', error);
      return [];
    }
  }
}
