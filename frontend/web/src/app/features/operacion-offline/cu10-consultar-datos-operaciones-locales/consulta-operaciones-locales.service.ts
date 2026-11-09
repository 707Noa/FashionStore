import { Injectable, inject } from '@angular/core';
import { OfflineStorageService } from '../../../core/services/offline-storage.service';
import { ReservaOfflineCompleta, VentaOfflineCompleta } from './consulta-operaciones-locales.model';

/**
 * CU10 — Consultar datos y operaciones locales.
 *
 * Servicio de orquestación para consultar operaciones almacenadas en IndexedDB.
 * Reutiliza los métodos de lectura de OfflineStorageService (repositorio compartido).
 * Transforma y presenta datos para visualización.
 *
 * Responsabilidades:
 * - Consultar reservas offline registradas.
 * - Consultar ventas presenciales offline.
 * - Obtener detalles de operaciones.
 * - Recuperar información de sincronización.
 * - Filtrar datos según empresa, sucursal y usuario.
 *
 * NO es responsable de:
 * - Registrar nuevas operaciones (CU8, CU9).
 * - Persistir datos en IndexedDB (OfflineStorageService).
 * - Sincronizar con el backend (casos posteriores).
 */
@Injectable({ providedIn: 'root' })
export class ConsultaOperacionesLocalesService {
  private readonly offlineStorage = inject(OfflineStorageService);

  /**
   * CU10 — Consultar reservas offline completass para visualización.
   * Reutiliza OfflineStorageService.getReservasOfflineCompletas() y retorna datos formateados.
   */
  async consultarReservasOfflineCompletas(
    empresaId: number,
    clienteId: number,
  ): Promise<ReservaOfflineCompleta[]> {
    try {
      const reservas = await this.offlineStorage.getReservasOfflineCompletas(
        empresaId,
        clienteId,
      );
      console.log(
        `[CU10 CONSULTA] Reservas offline consultadas: ${reservas.length} para cliente=${clienteId}`,
      );
      return reservas;
    } catch (error) {
      console.error('[CU10 CONSULTA] Error al consultar reservas offline:', error);
      return [];
    }
  }

  /**
   * CU10 — Consultar ventas presenciales offline para Historial.
   * Reutiliza OfflineStorageService.obtenerVentasOfflinePendientes() y mapea a VentaHistorialOut.
   */
  async consultarVentasOffline(empresaId: number): Promise<VentaOfflineCompleta[]> {
    try {
      const ventas = await this.offlineStorage.obtenerVentasOfflinePendientes(empresaId);

      if (!ventas || ventas.length === 0) {
        console.log(`[CU10 CONSULTA] No hay ventas offline para empresa=${empresaId}`);
        return [];
      }

      // Transformar estructura offline a modelo de visualización
      const ventasFormateadas: VentaOfflineCompleta[] = ventas.map((v: any) => ({
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
        estado_sync: v.estado_sync,
        _origen: 'LOCAL',
      }));

      console.log(`[CU10 CONSULTA] Ventas offline consultadas: ${ventasFormateadas.length}`);
      return ventasFormateadas;
    } catch (error) {
      console.error('[CU10 CONSULTA] Error al consultar ventas offline:', error);
      return [];
    }
  }

  /**
   * CU10 — Consultar detalles de una reserva offline.
   * Reutiliza OfflineStorageService.getDetallesReserva().
   */
  async consultarDetallesReserva(reservaUuid: string): Promise<any[]> {
    try {
      const detalles = await this.offlineStorage.getDetallesReserva(reservaUuid);
      console.log(`[CU10 CONSULTA] Detalles de reserva consultados: ${detalles.length}`);
      return detalles;
    } catch (error) {
      console.error('[CU10 CONSULTA] Error al consultar detalles de reserva:', error);
      return [];
    }
  }

  /**
   * CU10 — Consultar detalles de una venta offline.
   * Reutiliza OfflineStorageService.obtenerDetallesVenta().
   */
  async consultarDetallesVenta(ventaUuid: string): Promise<any[]> {
    try {
      const detalles = await this.offlineStorage.obtenerDetallesVenta(ventaUuid);
      console.log(`[CU10 CONSULTA] Detalles de venta consultados: ${detalles.length} para venta=${ventaUuid}`);
      return detalles;
    } catch (error) {
      console.error('[CU10 CONSULTA] Error al consultar detalles de venta:', error);
      return [];
    }
  }

  /**
   * CU10 — Consultar operaciones pendientes de sincronización.
   * Suma reservas y ventas con estado PENDIENTE_SYNC.
   */
  async consultarOperacionesPendientes(empresaId: number): Promise<{
    reservas_pendientes: number;
    ventas_pendientes: number;
    total_pendientes: number;
  }> {
    try {
      const reservas = await this.offlineStorage.getReservasOfflinePendientes(empresaId);
      const ventas = await this.offlineStorage.obtenerVentasOfflinePendientes(empresaId);

      const resultado = {
        reservas_pendientes: reservas.length,
        ventas_pendientes: ventas.length,
        total_pendientes: reservas.length + ventas.length,
      };

      console.log(
        `[CU10 CONSULTA] Operaciones pendientes: ${resultado.reservas_pendientes} reservas, ${resultado.ventas_pendientes} ventas`,
      );
      return resultado;
    } catch (error) {
      console.error('[CU10 CONSULTA] Error al consultar operaciones pendientes:', error);
      return { reservas_pendientes: 0, ventas_pendientes: 0, total_pendientes: 0 };
    }
  }

  /**
   * CU10 — Consultar si existen operaciones locales pendientes.
   * Retorna true si hay algo que sincronizar.
   */
  async existenOperacionesPendientes(empresaId: number): Promise<boolean> {
    try {
      const operaciones = await this.consultarOperacionesPendientes(empresaId);
      return operaciones.total_pendientes > 0;
    } catch (error) {
      console.error('[CU10 CONSULTA] Error verificando operaciones pendientes:', error);
      return false;
    }
  }
}
