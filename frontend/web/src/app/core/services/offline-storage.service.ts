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

  constructor() {
    this.initializeDB();
  }

  private initializeDB(): void {
    const request = indexedDB.open(this.dbName, 1);

    request.onerror = () => {
      console.error('Error al abrir IndexedDB');
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Crear object stores si no existen
      if (!db.objectStoreNames.contains('offline_preparacion')) {
        const preparacionStore = db.createObjectStore('offline_preparacion', { keyPath: 'id' });
        preparacionStore.createIndex('empresa_sucursal', ['empresa_id', 'sucursal_id'], {
          unique: true,
        });
      }
    };

    request.onsuccess = () => {
      this.db = request.result;
    };
  }

  async savePreparacion(preparacion: OfflinePreparacion, empresaId: number): Promise<void> {
    const db = await this.getDB();
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
        resolve();
      };

      request.onerror = () => {
        reject(new Error('Error al guardar preparación en IndexedDB'));
      };
    });
  }

  async getPreparacion(empresaId: number, sucursalId: number): Promise<OfflinePreparacion | null> {
    const db = await this.getDB();
    const transaction = db.transaction(['offline_preparacion'], 'readonly');
    const store = transaction.objectStore('offline_preparacion');

    return new Promise((resolve, reject) => {
      const request = store.get(`${empresaId}_${sucursalId}`);

      request.onsuccess = () => {
        const result = request.result;
        resolve(result ? result.data : null);
      };

      request.onerror = () => {
        reject(new Error('Error al obtener preparación de IndexedDB'));
      };
    });
  }

  async getAllPreparaciones(empresaId: number): Promise<OfflinePreparacion[]> {
    const db = await this.getDB();
    const transaction = db.transaction(['offline_preparacion'], 'readonly');
    const store = transaction.objectStore('offline_preparacion');
    const index = store.index('empresa_sucursal');

    return new Promise((resolve, reject) => {
      const request = index.getAll(IDBKeyRange.bound([empresaId, 0], [empresaId, Infinity]));

      request.onsuccess = () => {
        const results = request.result || [];
        resolve(results.map((r) => r.data));
      };

      request.onerror = () => {
        reject(new Error('Error al obtener preparaciones de IndexedDB'));
      };
    });
  }

  async deletePreparacion(empresaId: number, sucursalId: number): Promise<void> {
    const db = await this.getDB();
    const transaction = db.transaction(['offline_preparacion'], 'readwrite');
    const store = transaction.objectStore('offline_preparacion');

    return new Promise((resolve, reject) => {
      const request = store.delete(`${empresaId}_${sucursalId}`);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(new Error('Error al eliminar preparación de IndexedDB'));
      };
    });
  }

  async clearAllPreparaciones(): Promise<void> {
    const db = await this.getDB();
    const transaction = db.transaction(['offline_preparacion'], 'readwrite');
    const store = transaction.objectStore('offline_preparacion');

    return new Promise((resolve, reject) => {
      const request = store.clear();

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(new Error('Error al limpiar IndexedDB'));
      };
    });
  }

  private getDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db);
        return;
      }

      const request = indexedDB.open(this.dbName);

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onerror = () => {
        reject(new Error('No se pudo conectar a IndexedDB'));
      };
    });
  }
}
