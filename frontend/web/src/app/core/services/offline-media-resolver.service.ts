import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OfflineImageCacheService } from './offline-image-cache.service';
import { ConnectivityService } from './connectivity.service';

/**
 * Resuelve URLs de media considerando disponibilidad offline.
 * - Online: devuelve URL normal
 * - Offline: devuelve blob URL desde cache Storage
 */
@Injectable({ providedIn: 'root' })
export class OfflineMediaResolverService {
  private readonly imageCache = inject(OfflineImageCacheService);
  private readonly connectivity = inject(ConnectivityService);

  /**
   * Resuelve URL de imagen considerando estado offline.
   * IMPORTANTE: Si está offline, NUNCA hace fetch(). Solo usa Cache Storage.
   */
  async resolveImageUrl(path: string | null | undefined): Promise<string | null> {
    if (!path) {
      return null;
    }

    // Si es URL absoluta, devolverla tal cual
    if (/^https?:\/\//i.test(path)) {
      return path;
    }

    const isOnline = this.connectivity.isOnline();

    // Si está OFFLINE: obtener SOLO del cache, nunca hacer HTTP
    if (!isOnline) {
      console.log(`[CU07 IMAGE OFFLINE] Buscando: ${path}`);
      const blobUrl = await this.imageCache.getImageBlobUrl(path);
      if (blobUrl) {
        console.log(`[CU07 IMAGE OFFLINE] CACHE HIT: ${blobUrl}`);
        return blobUrl;
      }
      console.warn(`[CU07 IMAGE OFFLINE] CACHE MISS: ${path}`);
      return null;
    }

    // Si está ONLINE: devolver URL que el navegador cargará normalmente
    // (el Service Worker la interceptará y la cacheará si está configurado)
    const origin = environment.apiUrl.replace(/\/api\/v1\/?$/, '');
    const fullUrl = `${origin}${path}`;
    console.log(`[CU07 IMAGE ONLINE] URL: ${fullUrl}`);
    return fullUrl;
  }
}
