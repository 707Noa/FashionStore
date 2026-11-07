import { Pipe, PipeTransform, inject } from '@angular/core';
import { OfflineMediaResolverService } from '../services/offline-media-resolver.service';
import { ConnectivityService } from '../services/connectivity.service';

/**
 * Pipe que resuelve URLs de media considerando offline.
 * Uso: {{ imagenUrl | offlineMedia | async }}
 */
@Pipe({
  name: 'offlineMedia',
  pure: false,
  standalone: true,
})
export class OfflineMediaPipe implements PipeTransform {
  private readonly resolver = inject(OfflineMediaResolverService);
  private readonly connectivity = inject(ConnectivityService);
  private cache = new Map<string | null | undefined, Promise<string | null>>();

  transform(path: string | null | undefined): Promise<string | null> {
    if (!this.cache.has(path)) {
      this.cache.set(
        path,
        this.resolver.resolveImageUrl(path).then((url) => {
          const modo = this.connectivity.isOnline() ? 'ONLINE' : 'OFFLINE';
          const fuente = url?.startsWith('blob:') ? 'CACHE' : 'HTTP';
          console.log(
            `[CU07 IMAGE RENDER] modo: ${modo} | url_original: ${path} | url_final: ${url?.substring(0, 50)}... | fuente: ${fuente}`,
          );
          return url;
        }),
      );
    }
    return this.cache.get(path)!;
  }
}
