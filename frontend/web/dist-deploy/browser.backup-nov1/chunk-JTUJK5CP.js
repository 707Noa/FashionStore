import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-OB3O2VC6.js";
import {
  ProductCard
} from "./chunk-G5DEM6EB.js";
import {
  CatalogoService
} from "./chunk-PBZJP2BS.js";
import "./chunk-VOZDT4OK.js";
import "./chunk-KUJLGORD.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  ActivatedRoute
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/public/catalogo/catalogo-page/catalogo-page.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _forTrack0 = ($index, $item) => $item.id;
function CatalogoPage_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coleccion_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(coleccion_r2.descripcion);
  }
}
function CatalogoPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CatalogoPage_Conditional_2_Conditional_4_Template, 2, 1, "p");
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function CatalogoPage_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.limpiarColeccion());
    });
    \u0275\u0275text(6, " Ver todo el cat\xE1logo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coleccion_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Colecci\xF3n \xB7 Temporada ", coleccion_r2.temporada.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coleccion_r2.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(coleccion_r2.descripcion ? 4 : -1);
  }
}
function CatalogoPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Cat\xE1logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Explora todas las prendas disponibles en FashionStore.");
    \u0275\u0275elementEnd();
  }
}
function CatalogoPage_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", categoria_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(categoria_r4.nombre);
  }
}
function CatalogoPage_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coleccion_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", coleccion_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(coleccion_r5.nombre);
  }
}
function CatalogoPage_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const talla_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", talla_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(talla_r6.nombre);
  }
}
function CatalogoPage_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", color_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(color_r7.nombre);
  }
}
function CatalogoPage_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function CatalogoPage_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, CatalogoPage_Conditional_26_For_2_Template, 1, 0, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CatalogoPage_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 12);
    \u0275\u0275text(2, "No se pudo cargar el cat\xE1logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function CatalogoPage_Conditional_27_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
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
function CatalogoPage_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 12);
    \u0275\u0275text(2, "No encontramos prendas con esos filtros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Prueba ajustando la b\xFAsqueda o los filtros.");
    \u0275\u0275elementEnd()();
  }
}
function CatalogoPage_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 14);
  }
  if (rf & 2) {
    const producto_r9 = ctx.$implicit;
    \u0275\u0275property("product", producto_r9);
  }
}
function CatalogoPage_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, CatalogoPage_Conditional_29_For_2_Template, 1, 1, "app-product-card", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.productos());
  }
}
var CatalogoPage = class _CatalogoPage {
  catalogoService = inject(CatalogoService);
  route = inject(ActivatedRoute);
  authService = inject(AuthService);
  productos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  categorias = signal(
    [],
    ...ngDevMode ? [{ debugName: "categorias" }] : (
      /* istanbul ignore next */
      []
    )
  );
  colecciones = signal(
    [],
    ...ngDevMode ? [{ debugName: "colecciones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tallas = signal(
    [],
    ...ngDevMode ? [{ debugName: "tallas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  colores = signal(
    [],
    ...ngDevMode ? [{ debugName: "colores" }] : (
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
  categoriaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "categoriaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  coleccionId = signal(
    null,
    ...ngDevMode ? [{ debugName: "coleccionId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tallaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "tallaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  colorId = signal(
    null,
    ...ngDevMode ? [{ debugName: "colorId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchDebounce;
  constructor() {
    this.catalogoService.listCategorias().subscribe((valores) => this.categorias.set(valores));
    this.catalogoService.listColecciones().subscribe((valores) => this.colecciones.set(valores));
    this.catalogoService.listTallas().subscribe((valores) => this.tallas.set(valores));
    this.catalogoService.listColores().subscribe((valores) => this.colores.set(valores));
    const categoriaParam = this.route.snapshot.queryParamMap.get("categoria_id");
    if (categoriaParam) {
      this.categoriaId.set(Number(categoriaParam));
    }
    const coleccionParam = this.route.snapshot.queryParamMap.get("coleccion_id");
    if (coleccionParam) {
      this.coleccionId.set(Number(coleccionParam));
    }
    this.load();
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  onCategoriaChange(value) {
    this.categoriaId.set(value ? Number(value) : null);
    this.load();
  }
  onColeccionChange(value) {
    this.coleccionId.set(value ? Number(value) : null);
    this.load();
  }
  // CU10 -- la colección ya trae su temporada anidada (ver catalogo.model.ts);
  // se busca en la misma lista que ya alimenta el <select>, sin otra llamada.
  get coleccionSeleccionada() {
    const id = this.coleccionId();
    return id ? this.colecciones().find((c) => c.id === id) ?? null : null;
  }
  limpiarColeccion() {
    this.coleccionId.set(null);
    this.load();
  }
  onTallaChange(value) {
    this.tallaId.set(value ? Number(value) : null);
    this.load();
  }
  onColorChange(value) {
    this.colorId.set(value ? Number(value) : null);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    const usuario = this.authService.usuario();
    this.catalogoService.listProductos({
      search: this.searchTerm() || void 0,
      categoria_id: this.categoriaId() ?? void 0,
      coleccion_id: this.coleccionId() ?? void 0,
      talla_id: this.tallaId() ?? void 0,
      color_id: this.colorId() ?? void 0,
      empresa_id: usuario?.empresa_id ?? void 0
    }).subscribe({
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
  static \u0275fac = function CatalogoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogoPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogoPage, selectors: [["app-catalogo-page"]], decls: 30, vars: 11, consts: [[1, "container", "catalogo-page"], [1, "page-header"], [1, "filters"], ["type", "text", "placeholder", "Buscar prendas...", 1, "filters__search", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "product-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "page-header__eyebrow"], ["type", "button", 1, "page-header__clear", 3, "click"], [1, "skeleton-card"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [3, "product"]], template: function CatalogoPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, CatalogoPage_Conditional_2_Template, 7, 3)(3, CatalogoPage_Conditional_3_Template, 4, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "input", 3);
      \u0275\u0275listener("ngModelChange", function CatalogoPage_Template_input_ngModelChange_5_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "select", 4);
      \u0275\u0275listener("ngModelChange", function CatalogoPage_Template_select_ngModelChange_6_listener($event) {
        return ctx.onCategoriaChange($event);
      });
      \u0275\u0275elementStart(7, "option", 5);
      \u0275\u0275text(8, "Todas las categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(9, CatalogoPage_For_10_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(11, "select", 4);
      \u0275\u0275listener("ngModelChange", function CatalogoPage_Template_select_ngModelChange_11_listener($event) {
        return ctx.onColeccionChange($event);
      });
      \u0275\u0275elementStart(12, "option", 5);
      \u0275\u0275text(13, "Todas las colecciones");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(14, CatalogoPage_For_15_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(16, "select", 4);
      \u0275\u0275listener("ngModelChange", function CatalogoPage_Template_select_ngModelChange_16_listener($event) {
        return ctx.onTallaChange($event);
      });
      \u0275\u0275elementStart(17, "option", 5);
      \u0275\u0275text(18, "Todas las tallas");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(19, CatalogoPage_For_20_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(21, "select", 4);
      \u0275\u0275listener("ngModelChange", function CatalogoPage_Template_select_ngModelChange_21_listener($event) {
        return ctx.onColorChange($event);
      });
      \u0275\u0275elementStart(22, "option", 5);
      \u0275\u0275text(23, "Todos los colores");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(24, CatalogoPage_For_25_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, CatalogoPage_Conditional_26_Template, 3, 1, "div", 6)(27, CatalogoPage_Conditional_27_Template, 7, 1, "div", 7)(28, CatalogoPage_Conditional_28_Template, 5, 0, "div", 8)(29, CatalogoPage_Conditional_29_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_0_0 = ctx.coleccionSeleccionada) ? 2 : 3, tmp_0_0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.categoriaId());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categorias());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.coleccionId());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.colecciones());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.tallaId());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tallas());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.colorId());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.colores());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 26 : ctx.errorMessage() ? 27 : ctx.productos().length === 0 ? 28 : 29);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ProductCard], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.catalogo-page[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 48px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.page-header__eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--%NS%color-primary);\n  margin-bottom: 4px;\n}\n.page-header__clear[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: underline;\n}\n.page-header__clear[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 22px;\n}\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  background: var(--%NS%color-white);\n  outline: none;\n}\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%color-primary);\n}\n.filters__search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  border-radius: var(--%NS%radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 900px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 620px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters__search[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=catalogo-page-O4SJBB57.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogoPage, [{
    type: Component,
    args: [{ selector: "app-catalogo-page", imports: [FormsModule, ProductCard], template: '<div class="container catalogo-page">\r\n  <div class="page-header">\r\n    @if (coleccionSeleccionada; as coleccion) {\r\n      <span class="page-header__eyebrow">Colecci\xF3n \xB7 Temporada {{ coleccion.temporada.nombre }}</span>\r\n      <h1>{{ coleccion.nombre }}</h1>\r\n      @if (coleccion.descripcion) {\r\n        <p>{{ coleccion.descripcion }}</p>\r\n      }\r\n      <button type="button" class="page-header__clear" (click)="limpiarColeccion()">\r\n        Ver todo el cat\xE1logo\r\n      </button>\r\n    } @else {\r\n      <h1>Cat\xE1logo</h1>\r\n      <p>Explora todas las prendas disponibles en FashionStore.</p>\r\n    }\r\n  </div>\r\n\r\n  <div class="filters">\r\n    <input\r\n      type="text"\r\n      class="filters__search"\r\n      placeholder="Buscar prendas..."\r\n      [ngModel]="searchTerm()"\r\n      (ngModelChange)="onSearchChange($event)"\r\n    />\r\n\r\n    <select [ngModel]="categoriaId()" (ngModelChange)="onCategoriaChange($event)">\r\n      <option [ngValue]="null">Todas las categor\xEDas</option>\r\n      @for (categoria of categorias(); track categoria.id) {\r\n        <option [ngValue]="categoria.id">{{ categoria.nombre }}</option>\r\n      }\r\n    </select>\r\n\r\n    <select [ngModel]="coleccionId()" (ngModelChange)="onColeccionChange($event)">\r\n      <option [ngValue]="null">Todas las colecciones</option>\r\n      @for (coleccion of colecciones(); track coleccion.id) {\r\n        <option [ngValue]="coleccion.id">{{ coleccion.nombre }}</option>\r\n      }\r\n    </select>\r\n\r\n    <select [ngModel]="tallaId()" (ngModelChange)="onTallaChange($event)">\r\n      <option [ngValue]="null">Todas las tallas</option>\r\n      @for (talla of tallas(); track talla.id) {\r\n        <option [ngValue]="talla.id">{{ talla.nombre }}</option>\r\n      }\r\n    </select>\r\n\r\n    <select [ngModel]="colorId()" (ngModelChange)="onColorChange($event)">\r\n      <option [ngValue]="null">Todos los colores</option>\r\n      @for (color of colores(); track color.id) {\r\n        <option [ngValue]="color.id">{{ color.nombre }}</option>\r\n      }\r\n    </select>\r\n  </div>\r\n\r\n  @if (loading()) {\r\n    <div class="product-grid">\r\n      @for (i of [1, 2, 3, 4, 5, 6, 7, 8]; track i) {\r\n        <div class="skeleton-card"></div>\r\n      }\r\n    </div>\r\n  } @else if (errorMessage()) {\r\n    <div class="state-block state-block--error">\r\n      <span class="state-block__title">No se pudo cargar el cat\xE1logo</span>\r\n      <span>{{ errorMessage() }}</span>\r\n      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r\n    </div>\r\n  } @else if (productos().length === 0) {\r\n    <div class="state-block">\r\n      <span class="state-block__title">No encontramos prendas con esos filtros</span>\r\n      <span>Prueba ajustando la b\xFAsqueda o los filtros.</span>\r\n    </div>\r\n  } @else {\r\n    <div class="product-grid">\r\n      @for (producto of productos(); track producto.id) {\r\n        <app-product-card [product]="producto" />\r\n      }\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/features/public/catalogo/catalogo-page/catalogo-page.scss */\n:host {\n  display: block;\n}\n.catalogo-page {\n  padding-top: 24px;\n  padding-bottom: 48px;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.page-header__eyebrow {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-primary);\n  margin-bottom: 4px;\n}\n.page-header__clear {\n  margin-top: 8px;\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-decoration: underline;\n}\n.page-header__clear:hover {\n  color: var(--color-primary);\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 22px;\n}\n.filters input,\n.filters select {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--color-text);\n  background: var(--color-white);\n  outline: none;\n}\n.filters input:focus,\n.filters select:focus {\n  border-color: var(--color-primary);\n}\n.filters__search {\n  flex: 1;\n  min-width: 200px;\n}\n.filters select {\n  min-width: 150px;\n}\n.product-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n.skeleton-card {\n  aspect-ratio: 3/4;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 900px) {\n  .product-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 620px) {\n  .product-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters select,\n  .filters__search {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=catalogo-page-O4SJBB57.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogoPage, { className: "CatalogoPage", filePath: "src/app/features/public/catalogo/catalogo-page/catalogo-page.ts", lineNumber: 21 });
})();
export {
  CatalogoPage
};
//# debugId=867bac27-5bff-5723-bab3-210ecd6bb854
//# sourceMappingURL=chunk-JTUJK5CP.js.map
