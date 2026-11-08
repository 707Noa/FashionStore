import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OfflinePreparacion, OfflineStorageService } from '../../../core/services/offline-storage.service';
import { OfflineImageCacheService } from '../../../core/services/offline-image-cache.service';

@Injectable({
  providedIn: 'root',
})
export class OfflinePreparacionService {
  private apiUrl = `${environment.apiUrl}/offline`;

  constructor(
    private http: HttpClient,
    private offlineStorage: OfflineStorageService,
    private imageCache: OfflineImageCacheService,
  ) {}

  /**
   * Prepara la información offline para TODAS las sucursales de la empresa.
   * El backend valida que todas pertenecen a la empresa del usuario autenticado.
   * Retorna información de cada sucursal para conservar el mismo flujo de catálogo
   * del P1: el usuario siempre ve stock de todas las sucursales, no solo una.
   */
  prepararInformacionCompleta(): Observable<OfflinePreparacion[]> {
    return this.http.post<OfflinePreparacion[]>(`${this.apiUrl}/preparar`, {});
  }

  /**
   * Guarda la preparación en IndexedDB después de obtenerla del backend.
   * Valida que los datos correspondan a la empresa/sucursal preparada.
   * Cachea las imágenes de productos para disponibilidad offline.
   */
  async guardarPreparacion(
    preparacion: OfflinePreparacion,
    empresaId: number,
  ): Promise<boolean> {
    try {
      // Validar que la preparación corresponde a la empresa
      if (preparacion.metadata.empresa_id !== empresaId) {
        console.error(
          'Error: La preparación recibida no corresponde a la empresa del usuario',
        );
        return false;
      }

      // Diagnóstico: qué está en el paquete
      console.log('[CU07 RESPONSE RAW]');
      console.log(`  ciudades exists: ${('ciudades' in preparacion)}`);
      console.log(`  ciudades value: ${JSON.stringify((preparacion as any).ciudades)}`);
      console.log(`  ciudades type: ${typeof (preparacion as any).ciudades}`);
      console.log(`  is array: ${Array.isArray((preparacion as any).ciudades)}`);

      // Guardar ciudades si están disponibles en el paquete
      if (preparacion.ciudades && Array.isArray(preparacion.ciudades)) {
        console.log(`[CU07 CITIES RECEIVED] total: ${preparacion.ciudades.length}`);
        for (const c of preparacion.ciudades) {
          console.log(`  - ${c.nombre}`);
        }
        await this.offlineStorage.saveCiudades(preparacion.ciudades, empresaId);
      } else {
        console.warn('[CU07 CITIES RECEIVED] NO CIUDADES EN EL PAQUETE');
      }

      // Log de sucursal guardada
      console.log(`[CU07 BRANCHES] Guardadas: 1`);
      console.log(`[CU07 BRANCHES] ${preparacion.sucursal.nombre} → ${preparacion.sucursal.ciudad || 'Sin ciudad'}`);

      // Guardar en IndexedDB
      await this.offlineStorage.savePreparacion(preparacion, empresaId);

      // Verificar que se guardó correctamente
      const verificacion = await this.offlineStorage.getPreparacion(
        empresaId,
        preparacion.metadata.sucursal_id,
      );

      if (!verificacion) {
        console.error('Error: No se pudo verificar la escritura en IndexedDB');
        return false;
      }

      // Cachear imágenes de productos (no-blocking, no debe fallar si hay error)
      this.imageCache.cacheProductImages(preparacion.productos).catch((error) => {
        console.warn('Advertencia: No se pudo cachear imágenes de productos:', error);
      });

      return true;
    } catch (error) {
      console.error('Error al guardar preparación:', error);
      return false;
    }
  }

  /**
   * Obtiene una preparación guardada para una empresa y sucursal.
   * El backend garantiza que precio es number, así que no necesita normalización.
   */
  async obtenerPreparacion(empresaId: number, sucursalId: number): Promise<OfflinePreparacion | null> {
    try {
      return await this.offlineStorage.getPreparacion(empresaId, sucursalId);
    } catch (error) {
      console.error('Error al obtener preparación:', error);
      return null;
    }
  }

  /**
   * Obtiene todas las preparaciones guardadas de una empresa.
   * El backend garantiza que precio es number en JSON.
   */
  async obtenerTodasLasPreparaciones(empresaId: number): Promise<OfflinePreparacion[]> {
    try {
      return await this.offlineStorage.getAllPreparaciones(empresaId);
    } catch (error) {
      console.error('Error al obtener preparaciones:', error);
      return [];
    }
  }

  /**
   * Elimina una preparación específica.
   */
  async eliminarPreparacion(empresaId: number, sucursalId: number): Promise<void> {
    try {
      await this.offlineStorage.deletePreparacion(empresaId, sucursalId);
    } catch (error) {
      console.error('Error al eliminar preparación:', error);
    }
  }
}
