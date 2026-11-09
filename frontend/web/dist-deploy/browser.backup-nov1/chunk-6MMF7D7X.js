import {
  PanelEncargadoService
} from "./chunk-BQE5GQUL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OB3O2VC6.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  Router
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNHCNXB7.js";

// src/app/features/encargado/inventario/inventario.ts
var _forTrack0 = ($index, $item) => $item.coleccionId;
var _forTrack1 = ($index, $item) => $item.categoriaId;
var _forTrack2 = ($index, $item) => $item.id;
function Inventario_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suc_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(suc_r1.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suc_r1.ciudad.nombre);
  }
}
function Inventario_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 10)(2, "div", 10)(3, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function Inventario_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 11);
    \u0275\u0275text(2, "No se pudo cargar el inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function Inventario_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function Inventario_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 11);
    \u0275\u0275text(2, "No hay productos disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Prueba ajustando la b\xFAsqueda.");
    \u0275\u0275elementEnd()();
  }
}
function Inventario_Conditional_10_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupoColeccion_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", grupoColeccion_r5.coleccion.temporada.nombre);
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const producto_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275property("src", ctx_r2.resolveMediaUrl(producto_r9.imagen_principal_url), \u0275\u0275sanitizeUrl);
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "app-icon", 32);
    \u0275\u0275elementEnd();
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_7_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const variante_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" \xB7 Reservado: ", variante_r11.stock_reservado, " \xB7 Disponible: ", variante_r11.disponible, " ");
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_7_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_7_For_3_Conditional_6_Template, 1, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_7_For_3_Template_button_click_7_listener() {
      const variante_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const producto_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.registrarMovimiento(producto_r9, variante_r11.id));
    });
    \u0275\u0275element(8, "app-icon", 39);
    \u0275\u0275text(9, " Registrar movimiento ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const variante_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", variante_r11.talla.nombre, " / ", variante_r11.color.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Stock f\xEDsico: ", variante_r11.cantidad, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(variante_r11.stock_reservado > 0 ? 6 : -1);
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 33);
    \u0275\u0275repeaterCreate(2, Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_7_For_3_Template, 10, 4, "div", 34, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(producto_r9.variantes);
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275listener("click", function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Template_button_click_1_listener() {
      const producto_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.toggleProducto(producto_r9.id));
    });
    \u0275\u0275conditionalCreate(2, Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_2_Template, 1, 1, "img", 27)(3, Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_3_Template, 2, 0, "div", 28);
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Conditional_7_Template, 4, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(producto_r9.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r9.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.productoAbierto(producto_r9.id) ? "chevron-down" : "chevron-right");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.productoAbierto(producto_r9.id) ? 7 : -1);
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_For_2_Template, 8, 4, "div", 25, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupoCategoria_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(grupoCategoria_r7.productos);
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function Inventario_Conditional_10_For_2_Conditional_8_For_2_Template_button_click_1_listener() {
      const grupoCategoria_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const grupoColeccion_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCategoria(grupoColeccion_r5.coleccionId, grupoCategoria_r7.categoriaId));
    });
    \u0275\u0275element(2, "app-icon", 22);
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Inventario_Conditional_10_For_2_Conditional_8_For_2_Conditional_7_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupoCategoria_r7 = ctx.$implicit;
    const grupoColeccion_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r2.categoriaAbierta(grupoColeccion_r5.coleccionId, grupoCategoria_r7.categoriaId) ? "chevron-down" : "chevron-right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grupoCategoria_r7.categoria?.nombre ?? "Sin categor\xEDa");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grupoCategoria_r7.productos.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.categoriaAbierta(grupoColeccion_r5.coleccionId, grupoCategoria_r7.categoriaId) ? 7 : -1);
  }
}
function Inventario_Conditional_10_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, Inventario_Conditional_10_For_2_Conditional_8_For_2_Template, 8, 4, "div", 20, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupoColeccion_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(grupoColeccion_r5.categorias);
  }
}
function Inventario_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "button", 14);
    \u0275\u0275listener("click", function Inventario_Conditional_10_For_2_Template_button_click_1_listener() {
      const grupoColeccion_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleColeccion(grupoColeccion_r5.coleccionId));
    });
    \u0275\u0275element(2, "app-icon", 15);
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, Inventario_Conditional_10_For_2_Conditional_5_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, Inventario_Conditional_10_For_2_Conditional_8_Template, 3, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupoColeccion_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r2.coleccionAbierta(grupoColeccion_r5.coleccionId) ? "chevron-down" : "chevron-right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", grupoColeccion_r5.coleccion?.nombre ?? "Sin colecci\xF3n", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(grupoColeccion_r5.coleccion?.temporada ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grupoColeccion_r5.totalProductos);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.coleccionAbierta(grupoColeccion_r5.coleccionId) ? 8 : -1);
  }
}
function Inventario_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, Inventario_Conditional_10_For_2_Template, 9, 5, "section", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.gruposColeccion);
  }
}
var Inventario = class _Inventario {
  panelService = inject(PanelEncargadoService);
  router = inject(Router);
  resolveMediaUrl = resolveMediaUrl;
  sucursal = signal(
    null,
    ...ngDevMode ? [{ debugName: "sucursal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchTerm = signal(
    "",
    ...ngDevMode ? [{ debugName: "searchTerm" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Estado de expansión del árbol -- todo cerrado por defecto (ninguna
  // colección/categoría/producto se abre automáticamente al cargar).
  // Categoría se identifica con "coleccionId:categoriaId" porque una misma
  // categoría (p. ej. "Poleras") puede repetirse en varias colecciones.
  coleccionesAbiertas = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "coleccionesAbiertas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  categoriasAbiertas = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "categoriasAbiertas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productosAbiertos = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "productosAbiertos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchDebounce;
  constructor() {
    this.panelService.miSucursal().subscribe({ next: (sucursal) => this.sucursal.set(sucursal) });
    this.load();
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.panelService.listarInventario(this.searchTerm() || void 0).subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.productos.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Int\xE9ntalo nuevamente.");
      }
    });
  }
  get gruposColeccion() {
    const porColeccion = /* @__PURE__ */ new Map();
    for (const producto of this.productos()) {
      const coleccion = producto.coleccion ?? null;
      const coleccionId = coleccion?.id ?? null;
      let grupoColeccion = porColeccion.get(coleccionId);
      if (!grupoColeccion) {
        grupoColeccion = { coleccionId, coleccion, categorias: [], totalProductos: 0 };
        porColeccion.set(coleccionId, grupoColeccion);
      }
      grupoColeccion.totalProductos++;
      const categoria = producto.categoria ?? null;
      const categoriaId = categoria?.id ?? null;
      let grupoCategoria = grupoColeccion.categorias.find((c) => c.categoriaId === categoriaId);
      if (!grupoCategoria) {
        grupoCategoria = { categoriaId, categoria, productos: [] };
        grupoColeccion.categorias.push(grupoCategoria);
      }
      grupoCategoria.productos.push(producto);
    }
    const grupos = [...porColeccion.values()];
    for (const grupo of grupos) {
      grupo.categorias.sort((a, b) => (a.categoria?.nombre ?? "").localeCompare(b.categoria?.nombre ?? ""));
    }
    return grupos.sort((a, b) => (a.coleccion?.nombre ?? "").localeCompare(b.coleccion?.nombre ?? ""));
  }
  claveCategoria(coleccionId, categoriaId) {
    return `${coleccionId}:${categoriaId}`;
  }
  coleccionAbierta(coleccionId) {
    return this.coleccionesAbiertas().has(coleccionId);
  }
  categoriaAbierta(coleccionId, categoriaId) {
    return this.categoriasAbiertas().has(this.claveCategoria(coleccionId, categoriaId));
  }
  productoAbierto(productoId) {
    return this.productosAbiertos().has(productoId);
  }
  toggleColeccion(coleccionId) {
    this.coleccionesAbiertas.update((actuales) => {
      const nuevo = new Set(actuales);
      if (nuevo.has(coleccionId)) {
        nuevo.delete(coleccionId);
      } else {
        nuevo.add(coleccionId);
      }
      return nuevo;
    });
  }
  toggleCategoria(coleccionId, categoriaId) {
    const clave = this.claveCategoria(coleccionId, categoriaId);
    this.categoriasAbiertas.update((actuales) => {
      const nuevo = new Set(actuales);
      if (nuevo.has(clave)) {
        nuevo.delete(clave);
      } else {
        nuevo.add(clave);
      }
      return nuevo;
    });
  }
  toggleProducto(productoId) {
    this.productosAbiertos.update((actuales) => {
      const nuevo = new Set(actuales);
      if (nuevo.has(productoId)) {
        nuevo.delete(productoId);
      } else {
        nuevo.add(productoId);
      }
      return nuevo;
    });
  }
  registrarMovimiento(producto, varianteId) {
    this.router.navigate(["/encargado/movimientos-inventario"], {
      queryParams: { productoId: producto.id, varianteId }
    });
  }
  static \u0275fac = function Inventario_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inventario)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Inventario, selectors: [["app-inventario"]], decls: 11, vars: 3, consts: [[1, "inventario-page"], [1, "page-header"], [1, "filters"], ["type", "text", "placeholder", "Buscar producto...", 1, "filters__search", 3, "ngModelChange", "ngModel"], [1, "skeleton-list"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "arbol-inventario"], [1, "page-header__sucursal"], [1, "page-header__ciudad"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "admin-card", "grupo-coleccion"], ["type", "button", 1, "grupo-coleccion__header", 3, "click"], [2, "width", "14px", "height", "14px", 3, "name"], [1, "grupo-coleccion__nombre"], [1, "grupo-coleccion__temporada"], [1, "contador"], [1, "grupo-coleccion__body"], [1, "grupo-categoria"], ["type", "button", 1, "grupo-categoria__header", 3, "click"], [2, "width", "13px", "height", "13px", 3, "name"], [1, "grupo-categoria__nombre"], [1, "grupo-categoria__body"], [1, "producto-item"], ["type", "button", 1, "producto-item__header", 3, "click"], ["alt", "", 1, "producto-item__imagen", 3, "src"], [1, "producto-item__imagen", "producto-item__imagen--placeholder"], [1, "producto-item__nombre"], [1, "producto-item__chevron", 2, "width", "13px", "height", "13px", 3, "name"], [1, "producto-item__detalle"], ["name", "products", 2, "width", "18px", "height", "18px"], [1, "variante-list"], [1, "variante-row"], [1, "variante-row__info"], [1, "variante-row__nombre"], [1, "variante-row__stock"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", "variante-row__accion", 3, "click"], ["name", "edit", 2, "width", "13px", "height", "13px"]], template: function Inventario_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Inventario");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, Inventario_Conditional_4_Template, 4, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "input", 3);
      \u0275\u0275listener("ngModelChange", function Inventario_Template_input_ngModelChange_6_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, Inventario_Conditional_7_Template, 4, 0, "div", 4)(8, Inventario_Conditional_8_Template, 7, 1, "div", 5)(9, Inventario_Conditional_9_Template, 5, 0, "div", 6)(10, Inventario_Conditional_10_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_0_0 = ctx.sucursal()) ? 4 : -1, tmp_0_0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : ctx.errorMessage() ? 8 : ctx.productos().length === 0 ? 9 : 10);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header__sucursal[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.page-header__ciudad[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.filters__search[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  background: var(--%NS%color-white);\n  outline: none;\n}\n.filters__search[_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%color-primary);\n}\n.skeleton-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.arbol-inventario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grupo-coleccion[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.grupo-coleccion__header[_ngcontent-%COMP%], \n.grupo-categoria__header[_ngcontent-%COMP%], \n.producto-item__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  border: none;\n  background: none;\n  cursor: pointer;\n  text-align: left;\n  color: var(--%NS%color-text);\n}\n.grupo-coleccion__header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.grupo-coleccion__header[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.grupo-coleccion__nombre[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 14.5px;\n  font-weight: 700;\n}\n.grupo-coleccion__temporada[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--%NS%color-text-secondary);\n}\n.contador[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: var(--%NS%color-card-bg);\n  color: var(--%NS%color-text-secondary);\n  font-size: 11.5px;\n  font-weight: 700;\n}\n.grupo-coleccion__body[_ngcontent-%COMP%] {\n  padding: 0 20px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.grupo-categoria[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  overflow: hidden;\n}\n.grupo-categoria__header[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  background: var(--%NS%color-white);\n}\n.grupo-categoria__header[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.grupo-categoria__nombre[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.grupo-categoria__body[_ngcontent-%COMP%] {\n  padding: 8px 10px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border-top: 1px solid var(--%NS%color-border);\n}\n.producto-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  overflow: hidden;\n  background: var(--%NS%color-white);\n}\n.producto-item__header[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n}\n.producto-item__imagen[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--%NS%color-card-bg);\n}\n.producto-item__imagen--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-item__nombre[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  font-weight: 600;\n  overflow-wrap: break-word;\n}\n.producto-item__chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-item__detalle[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  border-top: 1px solid var(--%NS%color-border);\n}\n.variante-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.variante-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--%NS%color-border);\n  flex-wrap: wrap;\n}\n.variante-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.variante-row__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.variante-row__nombre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.variante-row__stock[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.variante-row__accion[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n@media (max-width: 560px) {\n  .variante-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .variante-row__accion[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .grupo-coleccion__nombre[_ngcontent-%COMP%], \n   .grupo-categoria__nombre[_ngcontent-%COMP%], \n   .producto-item__nombre[_ngcontent-%COMP%] {\n    font-size: 12.5px;\n  }\n}\n/*# sourceMappingURL=inventario-FUMIDII5.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inventario, [{
    type: Component,
    args: [{ selector: "app-inventario", imports: [FormsModule, Icon], template: `<div class="inventario-page">\r
  <div class="page-header">\r
    <h1>Inventario</h1>\r
    @if (sucursal(); as suc) {\r
      <p class="page-header__sucursal">{{ suc.nombre }}</p>\r
      <p class="page-header__ciudad">{{ suc.ciudad.nombre }}</p>\r
    }\r
  </div>\r
\r
  <div class="filters">\r
    <input\r
      type="text"\r
      class="filters__search"\r
      placeholder="Buscar producto..."\r
      [ngModel]="searchTerm()"\r
      (ngModelChange)="onSearchChange($event)"\r
    />\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="skeleton-list">\r
      <div class="skeleton-row"></div>\r
      <div class="skeleton-row"></div>\r
      <div class="skeleton-row"></div>\r
    </div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar el inventario</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (productos().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">No hay productos disponibles</span>\r
      <span>Prueba ajustando la b\xFAsqueda.</span>\r
    </div>\r
  } @else {\r
    <!-- \xC1rbol Colecci\xF3n -> Categor\xEDa -> Producto -> Variantes, todo cerrado\r
         por defecto (ver coleccionesAbiertas/categoriasAbiertas/productosAbiertos\r
         en inventario.ts) para que un cat\xE1logo grande siga siendo navegable. -->\r
    <div class="arbol-inventario">\r
      @for (grupoColeccion of gruposColeccion; track grupoColeccion.coleccionId) {\r
        <section class="admin-card grupo-coleccion">\r
          <button\r
            type="button"\r
            class="grupo-coleccion__header"\r
            (click)="toggleColeccion(grupoColeccion.coleccionId)"\r
          >\r
            <app-icon\r
              [name]="coleccionAbierta(grupoColeccion.coleccionId) ? 'chevron-down' : 'chevron-right'"\r
              style="width: 14px; height: 14px"\r
            />\r
            <span class="grupo-coleccion__nombre">\r
              {{ grupoColeccion.coleccion?.nombre ?? 'Sin colecci\xF3n' }}\r
              @if (grupoColeccion.coleccion?.temporada) {\r
                <span class="grupo-coleccion__temporada">\xB7 {{ grupoColeccion.coleccion!.temporada.nombre }}</span>\r
              }\r
            </span>\r
            <span class="contador">{{ grupoColeccion.totalProductos }}</span>\r
          </button>\r
\r
          @if (coleccionAbierta(grupoColeccion.coleccionId)) {\r
            <div class="grupo-coleccion__body">\r
              @for (grupoCategoria of grupoColeccion.categorias; track grupoCategoria.categoriaId) {\r
                <div class="grupo-categoria">\r
                  <button\r
                    type="button"\r
                    class="grupo-categoria__header"\r
                    (click)="toggleCategoria(grupoColeccion.coleccionId, grupoCategoria.categoriaId)"\r
                  >\r
                    <app-icon\r
                      [name]="\r
                        categoriaAbierta(grupoColeccion.coleccionId, grupoCategoria.categoriaId)\r
                          ? 'chevron-down'\r
                          : 'chevron-right'\r
                      "\r
                      style="width: 13px; height: 13px"\r
                    />\r
                    <span class="grupo-categoria__nombre">{{ grupoCategoria.categoria?.nombre ?? 'Sin categor\xEDa' }}</span>\r
                    <span class="contador">{{ grupoCategoria.productos.length }}</span>\r
                  </button>\r
\r
                  @if (categoriaAbierta(grupoColeccion.coleccionId, grupoCategoria.categoriaId)) {\r
                    <div class="grupo-categoria__body">\r
                      @for (producto of grupoCategoria.productos; track producto.id) {\r
                        <div class="producto-item">\r
                          <button\r
                            type="button"\r
                            class="producto-item__header"\r
                            (click)="toggleProducto(producto.id)"\r
                          >\r
                            @if (producto.imagen_principal_url) {\r
                              <img\r
                                [src]="resolveMediaUrl(producto.imagen_principal_url)"\r
                                alt=""\r
                                class="producto-item__imagen"\r
                              />\r
                            } @else {\r
                              <div class="producto-item__imagen producto-item__imagen--placeholder">\r
                                <app-icon name="products" style="width: 18px; height: 18px" />\r
                              </div>\r
                            }\r
                            <span class="producto-item__nombre">{{ producto.nombre }}</span>\r
                            <app-icon\r
                              [name]="productoAbierto(producto.id) ? 'chevron-down' : 'chevron-right'"\r
                              style="width: 13px; height: 13px"\r
                              class="producto-item__chevron"\r
                            />\r
                          </button>\r
\r
                          @if (productoAbierto(producto.id)) {\r
                            <div class="producto-item__detalle">\r
                              <div class="variante-list">\r
                                @for (variante of producto.variantes; track variante.id) {\r
                                  <div class="variante-row">\r
                                    <div class="variante-row__info">\r
                                      <span class="variante-row__nombre">\r
                                        {{ variante.talla.nombre }} / {{ variante.color.nombre }}\r
                                      </span>\r
                                      <span class="variante-row__stock">\r
                                        Stock f\xEDsico: {{ variante.cantidad }}\r
                                        @if (variante.stock_reservado > 0) {\r
                                          \xB7 Reservado: {{ variante.stock_reservado }}\r
                                          \xB7 Disponible: {{ variante.disponible }}\r
                                        }\r
                                      </span>\r
                                    </div>\r
                                    <button\r
                                      type="button"\r
                                      class="btn btn--ghost btn--sm variante-row__accion"\r
                                      (click)="registrarMovimiento(producto, variante.id)"\r
                                    >\r
                                      <app-icon name="edit" style="width: 13px; height: 13px" />\r
                                      Registrar movimiento\r
                                    </button>\r
                                  </div>\r
                                }\r
                              </div>\r
                            </div>\r
                          }\r
                        </div>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              }\r
            </div>\r
          }\r
        </section>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/encargado/inventario/inventario.scss */\n:host {\n  display: block;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header__sucursal {\n  margin-top: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.page-header__ciudad {\n  margin-top: 2px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.filters {\n  margin-bottom: 20px;\n}\n.filters__search {\n  width: 100%;\n  max-width: 360px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--color-text);\n  background: var(--color-white);\n  outline: none;\n}\n.filters__search:focus {\n  border-color: var(--color-primary);\n}\n.skeleton-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.arbol-inventario {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grupo-coleccion {\n  padding: 0;\n  overflow: hidden;\n}\n.grupo-coleccion__header,\n.grupo-categoria__header,\n.producto-item__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  border: none;\n  background: none;\n  cursor: pointer;\n  text-align: left;\n  color: var(--color-text);\n}\n.grupo-coleccion__header {\n  padding: 16px 20px;\n}\n.grupo-coleccion__header:hover {\n  background: var(--color-bg);\n}\n.grupo-coleccion__nombre {\n  flex: 1;\n  min-width: 0;\n  font-size: 14.5px;\n  font-weight: 700;\n}\n.grupo-coleccion__temporada {\n  font-weight: 400;\n  color: var(--color-text-secondary);\n}\n.contador {\n  flex-shrink: 0;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: var(--color-card-bg);\n  color: var(--color-text-secondary);\n  font-size: 11.5px;\n  font-weight: 700;\n}\n.grupo-coleccion__body {\n  padding: 0 20px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.grupo-categoria {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.grupo-categoria__header {\n  padding: 11px 14px;\n  background: var(--color-white);\n}\n.grupo-categoria__header:hover {\n  background: var(--color-bg);\n}\n.grupo-categoria__nombre {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.grupo-categoria__body {\n  padding: 8px 10px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border-top: 1px solid var(--color-border);\n}\n.producto-item {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--color-white);\n}\n.producto-item__header {\n  padding: 9px 12px;\n}\n.producto-item__imagen {\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--color-card-bg);\n}\n.producto-item__imagen--placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.producto-item__nombre {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  font-weight: 600;\n  overflow-wrap: break-word;\n}\n.producto-item__chevron {\n  flex-shrink: 0;\n  color: var(--color-text-secondary);\n}\n.producto-item__detalle {\n  padding: 12px 14px 14px;\n  border-top: 1px solid var(--color-border);\n}\n.variante-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.variante-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.variante-row:last-child {\n  border-bottom: none;\n}\n.variante-row__info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.variante-row__nombre {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.variante-row__stock {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.variante-row__accion {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n@media (max-width: 560px) {\n  .variante-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .variante-row__accion {\n    justify-content: center;\n  }\n  .grupo-coleccion__nombre,\n  .grupo-categoria__nombre,\n  .producto-item__nombre {\n    font-size: 12.5px;\n  }\n}\n/*# sourceMappingURL=inventario-FUMIDII5.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Inventario, { className: "Inventario", filePath: "src/app/features/encargado/inventario/inventario.ts", lineNumber: 59 });
})();
export {
  Inventario
};
//# debugId=728c64c2-d836-58ec-ae64-5260726cfa1d
//# sourceMappingURL=chunk-6MMF7D7X.js.map
