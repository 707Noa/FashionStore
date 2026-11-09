import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { resolveMediaUrl } from '../../../../core/utils/resolve-media-url';
import { ConnectivityService } from '../../../../core/services/connectivity.service';
import { OfflineStorageService } from '../../../../core/services/offline-storage.service';
import { AuthService } from '../../../../core/services/auth.service';

interface ColeccionDestacada {
  id: number;
  imagen_destacada_url: string | null;
  nombre?: string;
  descripcion?: string | null;
}

@Component({
  selector: 'app-hero-banner',
  imports: [RouterLink],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
})
export class HeroBanner implements OnInit {
  private readonly http = inject(HttpClient);
  protected readonly connectivity = inject(ConnectivityService);
  private readonly offlineStorage = inject(OfflineStorageService);
  private readonly authService = inject(AuthService);

  protected readonly coleccionDestacada = signal<ColeccionDestacada | null>(null);
  protected readonly resolveMediaUrl = resolveMediaUrl;

  ngOnInit(): void {
    this.cargarColeccion();
  }

  private cargarColeccion(): void {
    if (this.connectivity.isOnline()) {
      // ONLINE: usar endpoint público
      this.http
        .get<ColeccionDestacada | null>(`${environment.apiUrl}/colecciones/destacada`)
        .subscribe({
          next: (coleccion) => this.coleccionDestacada.set(coleccion),
          error: () => this.coleccionDestacada.set(null),
        });
    } else {
      // OFFLINE: usar datos almacenados localmente
      this.cargarColeccionDestacadaOffline();
    }
  }

  private async cargarColeccionDestacadaOffline(): Promise<void> {
    try {
      const usuario = this.authService.usuario();
      if (!usuario?.empresa_id) {
        console.warn('[HERO BANNER] No usuario disponible para cargar colección offline');
        this.coleccionDestacada.set(null);
        return;
      }

      const colecciones = await this.offlineStorage.getColeccionesOffline(usuario.empresa_id);
      const coleccionDestacada = colecciones.find((col) => col.es_destacada_inicio);

      if (coleccionDestacada) {
        console.log('[HERO BANNER OFFLINE] Colección destacada encontrada:', coleccionDestacada.nombre);
        this.coleccionDestacada.set({
          id: coleccionDestacada.id,
          imagen_destacada_url: coleccionDestacada.imagen_destacada_url,
          nombre: coleccionDestacada.nombre,
          descripcion: coleccionDestacada.descripcion,
        });
      } else {
        console.log('[HERO BANNER OFFLINE] No hay colección destacada disponible');
        this.coleccionDestacada.set(null);
      }
    } catch (error) {
      console.error('[HERO BANNER OFFLINE ERROR]', error);
      this.coleccionDestacada.set(null);
    }
  }
}
