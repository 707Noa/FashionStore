import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  CategoriaPublica,
  ColeccionPublica,
  ColorPublico,
  ProductoPublico,
  TallaPublica,
} from '../catalogo.model';
import { CatalogoService } from '../catalogo.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ProductCard } from '../../home/product-card/product-card';
import { ConnectivityService } from '../../../../core/services/connectivity.service';

@Component({
  selector: 'app-catalogo-page',
  imports: [FormsModule, ProductCard, CommonModule],
  templateUrl: './catalogo-page.html',
  styleUrl: './catalogo-page.scss',
})
export class CatalogoPage implements OnInit {
  private readonly catalogoService = inject(CatalogoService);
  private readonly route = inject(ActivatedRoute);
  protected readonly authService = inject(AuthService);
  private readonly connectivity = inject(ConnectivityService);

  protected readonly productos = signal<ProductoPublico[]>([]);
  protected readonly categorias = signal<CategoriaPublica[]>([]);
  protected readonly colecciones = signal<ColeccionPublica[]>([]);
  protected readonly tallas = signal<TallaPublica[]>([]);
  protected readonly colores = signal<ColorPublico[]>([]);
  protected readonly loading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly isOffline = signal(false);

  protected readonly searchTerm = signal('');
  protected readonly categoriaId = signal<number | null>(null);
  protected readonly coleccionId = signal<number | null>(null);
  protected readonly tallaId = signal<number | null>(null);
  protected readonly colorId = signal<number | null>(null);

  private searchDebounce?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.connectivity.isOnline$.subscribe((isOnline) => {
      this.isOffline.set(!isOnline);
      if (!isOnline && this.loading()) {
        this.errorMessage.set('Sin conexión — mostrando información local');
      }
    });

    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.catalogoService.listCategorias().subscribe((valores) => this.categorias.set(valores));
    this.catalogoService.listColecciones().subscribe((valores) => this.colecciones.set(valores));
    this.catalogoService.listTallas().subscribe((valores) => this.tallas.set(valores));
    this.catalogoService.listColores().subscribe((valores) => this.colores.set(valores));

    // Permite llegar con un filtro ya aplicado, ej. desde una tarjeta de categoría.
    const categoriaParam = this.route.snapshot.queryParamMap.get('categoria_id');
    if (categoriaParam) {
      this.categoriaId.set(Number(categoriaParam));
    }
    const coleccionParam = this.route.snapshot.queryParamMap.get('coleccion_id');
    if (coleccionParam) {
      this.coleccionId.set(Number(coleccionParam));
    }

    this.load();
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }

  onCategoriaChange(value: string): void {
    this.categoriaId.set(value ? Number(value) : null);
    this.load();
  }

  onColeccionChange(value: string): void {
    this.coleccionId.set(value ? Number(value) : null);
    this.load();
  }

  // CU10 -- la colección ya trae su temporada anidada (ver catalogo.model.ts);
  // se busca en la misma lista que ya alimenta el <select>, sin otra llamada.
  protected get coleccionSeleccionada(): ColeccionPublica | null {
    const id = this.coleccionId();
    return id ? (this.colecciones().find((c) => c.id === id) ?? null) : null;
  }

  limpiarColeccion(): void {
    this.coleccionId.set(null);
    this.load();
  }

  onTallaChange(value: string): void {
    this.tallaId.set(value ? Number(value) : null);
    this.load();
  }

  onColorChange(value: string): void {
    this.colorId.set(value ? Number(value) : null);
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    const usuario = this.authService.usuario();
    this.catalogoService
      .listProductos({
        search: this.searchTerm() || undefined,
        categoria_id: this.categoriaId() ?? undefined,
        coleccion_id: this.coleccionId() ?? undefined,
        talla_id: this.tallaId() ?? undefined,
        color_id: this.colorId() ?? undefined,
        empresa_id: usuario?.empresa_id ?? undefined,
      })
      .subscribe({
        next: (productos) => {
          this.productos.set(productos);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
          this.productos.set([]);
          this.errorMessage.set('No se pudo conectar con el servidor. Inténtalo nuevamente.');
        },
      });
  }
}
