import { Component, input, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { resolveMediaUrl } from '../../../../core/utils/resolve-media-url';
import { OfflineMediaPipe } from '../../../../core/pipes/offline-media.pipe';
import { CommonModule } from '@angular/common';
import { Icon } from '../../../../core/ui/icon/icon';
import { ProductoPublico } from '../../catalogo/catalogo.model';

@Component({
  selector: 'app-product-card',
  imports: [Icon, RouterLink, CommonModule, OfflineMediaPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<ProductoPublico>();
  protected readonly resolveMediaUrl = resolveMediaUrl;
  protected readonly imageError = signal(false);
  protected readonly isFavorite = signal(false);

  toggleFavorite(event: Event): void {
    event.preventDefault();
    this.isFavorite.update((value) => !value);
  }
}
