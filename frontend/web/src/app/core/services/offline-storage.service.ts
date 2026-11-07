import { Injectable } from '@angular/core';

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
    es_activo: boolean;
    precio_base: number;
    precio_final: number;
    en_promocion: boolean;
    porcentaje_descuento: number | null;
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
    // Normalización defensiva para datos legacy en IndexedDB:
    // Si los datos anteriores guardaron precio como string, convertir a number.
    // Nuevos datos del backend (con float explícito) llegarán como number.
    return {
      ...prep,
      productos: prep.productos.map((prod) => ({
        ...prod,
        variantes: prod.variantes.map((v) => ({
          ...v,
          precio: typeof v.precio === 'string' ? parseFloat(v.precio) : v.precio,
        })),
      })),
    };
  }
}
