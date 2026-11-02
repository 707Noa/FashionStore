import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { OfflinePreparacionService } from '../servicios/offline-preparacion.service';

interface EstadoPreparacion {
  estado: 'no-preparado' | 'preparando' | 'preparado' | 'error';
  mensaje: string;
  fechaUltimaActualizacion?: string;
  sucursalesPreparadas?: number;
  sucursalesTotales?: number;
}

@Component({
  selector: 'app-preparar-offline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="offline-container">
      <div class="offline-card">
        <h2>Estado de información disponible para operación offline</h2>

        <div class="estado-box">
          <div class="estado-item">
            <span class="label">Estado actual:</span>
            <span [ngClass]="'estado-' + estado.estado">
              {{ getEstadoTexto() }}
            </span>
          </div>

          <div *ngIf="estado.sucursalesPreparadas" class="estado-item">
            <span class="label">Sucursales preparadas:</span>
            <span>{{ estado.sucursalesPreparadas }} / {{ estado.sucursalesTotales }}</span>
          </div>

          <div *ngIf="estado.fechaUltimaActualizacion" class="estado-item">
            <span class="label">Última actualización:</span>
            <span>{{ estado.fechaUltimaActualizacion | date : 'dd/MM/yyyy HH:mm' }}</span>
          </div>

          <div *ngIf="estado.estado === 'preparado'" class="estado-item success">
            ✓ Información disponible para todas las sucursales
          </div>
        </div>

        <div *ngIf="estado.estado === 'error'" class="mensaje-error">
          {{ estado.mensaje }}
        </div>

        <div *ngIf="estado.estado === 'preparando'" class="progreso">
          <div class="spinner"></div>
          <p>Preparando información local...</p>
        </div>

        <button
          (click)="actualizarInformacion()"
          [disabled]="estado.estado === 'preparando'"
          class="btn btn-primary"
        >
          {{
            estado.estado === 'preparando'
              ? 'Actualizando...'
              : 'Actualizar información local'
          }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .offline-container {
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }

      .offline-card {
        background: white;
        border-radius: 8px;
        padding: 2rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      h2 {
        margin-top: 0;
        margin-bottom: 1.5rem;
        color: #333;
        font-size: 1.5rem;
      }

      .estado-box {
        background: #f9f9f9;
        border-left: 4px solid #1976d2;
        padding: 1rem;
        margin: 1.5rem 0;
        border-radius: 4px;
      }

      .estado-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
        font-size: 0.95rem;
      }

      .estado-item:last-child {
        margin-bottom: 0;
      }

      .label {
        font-weight: 500;
        color: #666;
      }

      .estado-no-preparado {
        color: #ff9800;
        font-weight: 600;
      }

      .estado-preparando {
        color: #2196f3;
        font-weight: 600;
      }

      .estado-preparado {
        color: #4caf50;
        font-weight: 600;
      }

      .estado-error {
        color: #f44336;
        font-weight: 600;
      }

      .estado-item.success {
        color: #4caf50;
        font-weight: 500;
        margin-top: 0.75rem;
      }

      .mensaje-error {
        background: #ffebee;
        color: #c62828;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        border-left: 4px solid #c62828;
      }

      .progreso {
        text-align: center;
        padding: 2rem 0;
      }

      .spinner {
        width: 40px;
        height: 40px;
        margin: 0 auto 1rem;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #1976d2;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .btn {
        width: 100%;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
        margin-top: 1rem;
      }

      .btn-primary {
        background: #1976d2;
        color: white;
      }

      .btn-primary:hover:not(:disabled) {
        background: #1565c0;
      }

      .btn-primary:disabled {
        background: #bdbdbd;
        cursor: not-allowed;
      }

      @media (max-width: 768px) {
        .offline-container {
          padding: 1rem;
        }

        .offline-card {
          padding: 1.5rem;
        }

        h2 {
          font-size: 1.25rem;
        }
      }
    `,
  ],
})
export class PrepararOfflineComponent implements OnInit {
  private authService = inject(AuthService);
  private offlinePreparacionService = inject(OfflinePreparacionService);

  estado: EstadoPreparacion = {
    estado: 'no-preparado',
    mensaje: '',
  };

  ngOnInit(): void {
    this.verificarEstadoActual();
  }

  private async verificarEstadoActual(): Promise<void> {
    const usuario = this.authService.usuario();
    if (!usuario || !usuario.empresa_id) {
      return;
    }

    const empresaId = usuario.empresa_id;

    try {
      // Obtener todas las preparaciones guardadas
      const preparaciones = await this.offlinePreparacionService.obtenerTodasLasPreparaciones(
        empresaId,
      );

      if (preparaciones.length > 0) {
        // Usar la preparación más reciente
        const maReciente = preparaciones.reduce((prev, current) =>
          new Date(current.metadata.fecha_preparacion) >
          new Date(prev.metadata.fecha_preparacion)
            ? current
            : prev,
        );

        this.estado = {
          estado: 'preparado',
          mensaje: '',
          fechaUltimaActualizacion: maReciente.metadata.fecha_preparacion,
          sucursalesPreparadas: preparaciones.length,
          sucursalesTotales: preparaciones.length,
        };
      }
    } catch (error) {
      console.error('Error al verificar estado offline:', error);
    }
  }

  async actualizarInformacion(): Promise<void> {
    const usuario = this.authService.usuario();
    if (!usuario || !usuario.empresa_id) {
      this.estado = {
        estado: 'error',
        mensaje: 'No se pudo obtener la información del usuario',
      };
      return;
    }

    // Verificar si hay conexión a Internet
    if (!navigator.onLine) {
      this.estado = {
        estado: 'error',
        mensaje:
          'Se necesita conexión a Internet para actualizar la información offline.',
      };
      return;
    }

    this.estado = {
      estado: 'preparando',
      mensaje: 'Descargando información...',
      sucursalesPreparadas: 0,
    };

    try {
      const preparaciones = await this.offlinePreparacionService
        .prepararInformacionCompleta()
        .toPromise();

      if (!preparaciones || preparaciones.length === 0) {
        throw new Error('No se recibió información del servidor');
      }

      // Guardar cada preparación en IndexedDB
      for (const prep of preparaciones) {
        const guardado = await this.offlinePreparacionService.guardarPreparacion(
          prep,
          usuario.empresa_id,
        );

        if (!guardado) {
          throw new Error('Error al guardar información en almacenamiento local');
        }
      }

      // Actualizar estado
      const maReciente = preparaciones.reduce((prev, current) =>
        new Date(current.metadata.fecha_preparacion) >
        new Date(prev.metadata.fecha_preparacion)
          ? current
          : prev,
      );

      this.estado = {
        estado: 'preparado',
        mensaje: '',
        fechaUltimaActualizacion: maReciente.metadata.fecha_preparacion,
        sucursalesPreparadas: preparaciones.length,
        sucursalesTotales: preparaciones.length,
      };
    } catch (error) {
      console.error('Error al actualizar información offline:', error);

      const preparacionesActuales =
        await this.offlinePreparacionService.obtenerTodasLasPreparaciones(usuario.empresa_id);

      if (preparacionesActuales.length > 0) {
        this.estado = {
          estado: 'error',
          mensaje: 'Error al actualizar. Se conservan los datos anteriores.',
          sucursalesPreparadas: preparacionesActuales.length,
          sucursalesTotales: preparacionesActuales.length,
        };
      } else {
        this.estado = {
          estado: 'error',
          mensaje:
            (error instanceof Error ? error.message : 'Error desconocido') ||
            'Error al preparar la información. Intenta nuevamente.',
        };
      }
    }
  }

  getEstadoTexto(): string {
    switch (this.estado.estado) {
      case 'no-preparado':
        return 'No preparado';
      case 'preparando':
        return 'Preparando...';
      case 'preparado':
        return '✓ Preparado';
      case 'error':
        return 'Error';
      default:
        return '';
    }
  }
}
