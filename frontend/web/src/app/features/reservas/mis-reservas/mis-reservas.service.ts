import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ReservaOut } from '../crear-reserva/crear-reserva.model';
import { ConsultaOperacionesLocalesService } from '../../../features/operacion-offline/cu10-consultar-datos-operaciones-locales/consulta-operaciones-locales.service';

/** Consume CU18 -- Consultar reserva (Cliente). Reutiliza GET /reservas/mias,
 * el mismo endpoint que ya expone CU17 (ver backend
 * modules/P4_ReservasYAtencion/CU18_ConsultarReserva/__init__.py).
 * Delega consultas offline a CU10. */
@Injectable({ providedIn: 'root' })
export class MisReservasService {
  private readonly http = inject(HttpClient);
  private readonly cu10 = inject(ConsultaOperacionesLocalesService);
  private readonly baseUrl = `${environment.apiUrl}/reservas`;

  listarMias(): Observable<ReservaOut[]> {
    return this.http.get<ReservaOut[]>(`${this.baseUrl}/mias`);
  }

  listarMiasOffline(empresaId: number, clienteId: number): Observable<any[]> {
    return from(this.cu10.consultarReservasOfflineCompletas(empresaId, clienteId));
  }
}
