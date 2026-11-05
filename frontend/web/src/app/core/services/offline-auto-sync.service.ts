import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { OfflinePreparacionService } from '../../features/operacion-offline/servicios/offline-preparacion.service';

/**
 * Servicio que dispara automáticamente la preparación CU06 cuando:
 * - Usuario está autenticado
 * - Existe conexión a Internet
 * - Los datos no están ya preparados o son antiguos
 *
 * Ejecución: background, sin bloquear la aplicación
 * Error: conserva datos anteriores, no rompe la app
 */
@Injectable({
  providedIn: 'root',
})
export class OfflineAutoSyncService {
  private readonly authService = inject(AuthService);
  private readonly offlinePreparacion = inject(OfflinePreparacionService);
  private syncInProgress = false;

  /**
   * Intenta preparar información offline automáticamente.
   * Se ejecuta en background sin bloquear.
   * Fallas no afectan el funcionamiento normal.
   */
  async prepararAutomaticamente(): Promise<void> {
    const usuario = this.authService.usuario();

    // Validar: usuario autenticado
    if (!usuario?.empresa_id) {
      return;
    }

    // Validar: conexión disponible
    if (!navigator.onLine) {
      return;
    }

    // Validar: no hay otra preparación en progreso
    if (this.syncInProgress) {
      return;
    }

    this.syncInProgress = true;

    try {
      const preparaciones = await this.offlinePreparacion
        .prepararInformacionCompleta()
        .toPromise();

      if (!preparaciones || preparaciones.length === 0) {
        console.warn('CU06: No se recibió información del servidor');
        return;
      }

      // Guardar cada preparación en IndexedDB
      for (const prep of preparaciones) {
        const guardado = await this.offlinePreparacion.guardarPreparacion(
          prep,
          usuario.empresa_id,
        );

        if (!guardado) {
          console.warn(`CU06: Error al guardar preparación de sucursal ${prep.metadata.sucursal_id}`);
          // No retornar: continuar con otras sucursales
        }
      }

      console.log(`CU06: Información offline actualizada (${preparaciones.length} sucursales)`);
    } catch (error) {
      // Error no es crítico: conservar datos anteriores, no romper app
      console.warn('CU06: Error al preparar información offline', error);
    } finally {
      this.syncInProgress = false;
    }
  }
}
