import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

const CACHE_NAME = 'fashionstore-offline-images-v1';

@Injectable({ providedIn: 'root' })
export class OfflineImageCacheService {
  private readonly apiUrl = environment.apiUrl;

  /**
   * Normaliza URL de imagen evitando duplicación de /api/v1.
   * Si la URL ya contiene /api/v1, no lo agrega de nuevo.
   */
  private normalizeImageUrl(relativeOrAbsoluteUrl: string): string {
    // Si ya es absoluta, devolverla tal cual
    if (relativeOrAbsoluteUrl.startsWith('http')) {
      return relativeOrAbsoluteUrl;
    }

    // Si ya contiene /api/v1, solo agregar el base URL sin /api/v1
    if (relativeOrAbsoluteUrl.includes('/api/v1')) {
      const baseUrl = this.apiUrl.replace('/api/v1', '');
      return baseUrl + relativeOrAbsoluteUrl;
    }

    // Si solo contiene /media, agregar el apiUrl completo
    return this.apiUrl + relativeOrAbsoluteUrl;
  }

  /**
   * Cachea imágenes de una lista de productos para disponibilidad offline.
   * No bloquea si una imagen falla — continúa cacheando el resto.
   */
  async cacheProductImages(products: Array<{ imagen_principal_url?: string | null }>): Promise<void> {
    try {
      const cache = await caches.open(CACHE_NAME);
      const imagesToCache: string[] = [];

      // Recopilar todas las URLs únicas
      for (const product of products) {
        if (product.imagen_principal_url) {
          imagesToCache.push(product.imagen_principal_url);
        }
      }

      // Eliminar duplicados
      const uniqueImages = Array.from(new Set(imagesToCache));

      // Cachear cada imagen sin bloquear si una falla
      for (const imageUrl of uniqueImages) {
        try {
          const absoluteUrl = this.normalizeImageUrl(imageUrl);

          console.log(
            `[CU07 IMAGE CACHE] URL original: ${imageUrl} | Normalizada: ${absoluteUrl}`,
          );

          const response = await fetch(absoluteUrl);
          if (response.ok) {
            // IMPORTANTE: Guardar con URL absoluta normalizada para que cache.match() la encuentre
            await cache.put(absoluteUrl, response.clone());
            console.log(`[CU07 IMAGE CACHE] HTTP: 200 | CACHE: OK | Key: ${absoluteUrl}`);
          } else {
            console.warn(
              `[CU07 IMAGE CACHE] No se pudo descargar: ${absoluteUrl} (status ${response.status})`,
            );
          }
        } catch (error) {
          console.warn(`[CU07 IMAGE CACHE] Error: ${imageUrl}`, error);
        }
      }
    } catch (error) {
      console.error('Error al abrir Cache Storage:', error);
    }
  }

  /**
   * Obtiene una imagen del cache si está disponible, sino devuelve null.
   * El componente debe tener un fallback visual.
   */
  async getImageFromCache(imageUrl: string | null | undefined): Promise<Blob | null> {
    if (!imageUrl) {
      return null;
    }

    try {
      const cache = await caches.open(CACHE_NAME);

      // Construir todas las variaciones posibles de la URL
      const urlVariations = [
        this.normalizeImageUrl(imageUrl),  // URL absoluta normalizada (http://localhost:8000/...)
        imageUrl,                            // URL original (relativa o absoluta)
        `http://localhost:4200${imageUrl}`, // Variante frontend localhost (para búsqueda)
      ];

      // Intentar cada variación
      for (const url of urlVariations) {
        const response = await cache.match(url);
        if (response) {
          console.log(`[CU07 IMAGE FROM CACHE] ✓ Encontrada: ${url}`);
          return await response.blob();
        }
      }

      console.warn(`[CU07 IMAGE FROM CACHE] ✗ No encontrada: ${imageUrl}`);
    } catch (error) {
      console.warn(`Error al leer imagen del cache: ${imageUrl}`, error);
    }

    return null;
  }

  /**
   * Genera una URL de objeto (blob:) para una imagen cacheada.
   * El componente debe revocar esta URL después de usarla para liberar memoria.
   */
  async getImageBlobUrl(imageUrl: string | null | undefined): Promise<string | null> {
    const blob = await this.getImageFromCache(imageUrl);
    if (blob) {
      const blobUrl = URL.createObjectURL(blob);
      console.log(`[CU07 IMAGE BLOBURL] Creado: ${blobUrl}`);
      return blobUrl;
    }
    console.warn(`[CU07 IMAGE BLOBURL] No se pudo obtener imagen: ${imageUrl}`);
    return null;
  }

  /**
   * Limpia el cache de imágenes (útil para debug o reset).
   */
  async clearImageCache(): Promise<void> {
    try {
      await caches.delete(CACHE_NAME);
    } catch (error) {
      console.error('Error al limpiar cache de imágenes:', error);
    }
  }
}
