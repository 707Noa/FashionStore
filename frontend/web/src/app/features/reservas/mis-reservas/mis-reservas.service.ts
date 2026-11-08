import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ReservaOut } from '../crear-reserva/crear-reserva.model';
import { OfflineStorageService } from '../../../core/services/offline-storage.service';

/** Consume CU18 -- Consultar reserva (Cliente). Reutiliza GET /reservas/mias,
 * el mismo endpoint que ya expone CU17 (ver backend
 * modules/P4_ReservasYAtencion/CU18_ConsultarReserva/__init__.py). */
@Injectable({ providedIn: 'root' })
export class MisReservasService {
  private readonly http = inject(HttpClient);
  private readonly offlineStorage = inject(OfflineStorageService);
  private readonly baseUrl = `${environment.apiUrl}/reservas`;

  listarMias(): Observable<ReservaOut[]> {
    return this.http.get<ReservaOut[]>(`${this.baseUrl}/mias`);
  }

  listarMiasOffline(empresaId: number, clienteId: number): Observable<any[]> {
    return from(this.offlineStorage.getReservasOfflineCompletas(empresaId, clienteId));
  }
}
