import {
  ProductCard
} from "./chunk-G5DEM6EB.js";
import {
  CatalogoService
} from "./chunk-PBZJP2BS.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  RouterLink
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Component,
  HostListener,
  Input,
  ViewChild,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-PNHCNXB7.js";

// src/app/features/public/home/category-card/category-card.ts
var _c0 = () => ["/home/catalogo"];
var _c1 = (a0) => ({ categoria_id: a0 });
function CategoryCard_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 7);
    \u0275\u0275listener("error", function CategoryCard_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(ctx_r1.category().imagen_url), \u0275\u0275sanitizeUrl)("alt", ctx_r1.category().nombre);
  }
}
function CategoryCard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 3);
  }
}
var CategoryCard = class _CategoryCard {
  category = input.required(
    ...ngDevMode ? [{ debugName: "category" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resolveMediaUrl = resolveMediaUrl;
  imageError = signal(
    false,
    ...ngDevMode ? [{ debugName: "imageError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      this.category();
      this.imageError.set(false);
    });
  }
  static \u0275fac = function CategoryCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryCard, selectors: [["app-category-card"]], inputs: { category: [1, "category"] }, decls: 8, vars: 7, consts: [[1, "card", 3, "routerLink", "queryParams"], [1, "card__image"], [3, "src", "alt"], ["name", "bag", 2, "width", "28px", "height", "28px"], [1, "card__footer"], [1, "card__name"], ["name", "arrow-right", 2, "width", "14px", "height", "14px"], [3, "error", "src", "alt"]], template: function CategoryCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, CategoryCard_Conditional_2_Template, 1, 2, "img", 2)(3, CategoryCard_Conditional_3_Template, 1, 0, "app-icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-icon", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0))("queryParams", \u0275\u0275pureFunction1(5, _c1, ctx.category().id));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.category().imagen_url && !ctx.imageError() ? 2 : 3);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.category().nombre);
    }
  }, dependencies: [Icon, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.card[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n  border: 1px solid var(--%NS%color-border);\n  transition: transform var(--%NS%transition-fast), box-shadow var(--%NS%transition-fast);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--%NS%shadow-medium);\n}\n.card__image[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n  background:\n    linear-gradient(\n      160deg,\n      #ded9d2,\n      #c9c2b8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  color: var(--%NS%color-text);\n}\n.card__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=category-card-K7DPK5XK.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryCard, [{
    type: Component,
    args: [{ selector: "app-category-card", imports: [Icon, RouterLink], template: `<a [routerLink]="['/home/catalogo']" [queryParams]="{ categoria_id: category().id }" class="card">\r
  <div class="card__image">\r
    @if (category().imagen_url && !imageError()) {\r
      <img\r
        [src]="resolveMediaUrl(category().imagen_url)"\r
        [alt]="category().nombre"\r
        (error)="imageError.set(true)"\r
      />\r
    } @else {\r
      <app-icon name="bag" style="width: 28px; height: 28px" />\r
    }\r
  </div>\r
  <div class="card__footer">\r
    <span class="card__name">{{ category().nombre }}</span>\r
    <app-icon name="arrow-right" style="width: 14px; height: 14px" />\r
  </div>\r
</a>\r
`, styles: ["/* src/app/features/public/home/category-card/category-card.scss */\n:host {\n  display: block;\n}\n.card {\n  display: block;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  transition: transform var(--transition-fast), box-shadow var(--transition-fast);\n}\n.card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-medium);\n}\n.card__image {\n  aspect-ratio: 1/1;\n  background:\n    linear-gradient(\n      160deg,\n      #ded9d2,\n      #c9c2b8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card__image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  color: var(--color-text);\n}\n.card__name {\n  font-size: 13px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=category-card-K7DPK5XK.css.map */\n"] }]
  }], () => [], { category: [{ type: Input, args: [{ isSignal: true, alias: "category", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryCard, { className: "CategoryCard", filePath: "src/app/features/public/home/category-card/category-card.ts", lineNumber: 13 });
})();

// src/app/features/public/home/category-section/category-section.ts
var _c02 = ["scrollContainer"];
var _c12 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function CategorySection_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function CategorySection_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, CategorySection_Conditional_11_For_2_Template, 1, 0, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c12));
  }
}
function CategorySection_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 11);
    \u0275\u0275text(2, "No se pudieron cargar las categor\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Int\xE9ntalo nuevamente m\xE1s tarde.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function CategorySection_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
}
function CategorySection_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 11);
    \u0275\u0275text(2, "A\xFAn no hay categor\xEDas activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Las categor\xEDas configuradas desde el panel de administraci\xF3n aparecer\xE1n aqu\xED.");
    \u0275\u0275elementEnd()();
  }
}
function CategorySection_Conditional_14_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-category-card", 14);
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275property("category", category_r4);
  }
}
function CategorySection_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13, 0);
    \u0275\u0275listener("scroll", function CategorySection_Conditional_14_Template_div_scroll_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScrollCategorias());
    });
    \u0275\u0275repeaterCreate(2, CategorySection_Conditional_14_For_3_Template, 1, 1, "app-category-card", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
var CategorySection = class _CategorySection {
  catalogoService = inject(CatalogoService);
  authService = inject(AuthService);
  categories = signal(
    [],
    ...ngDevMode ? [{ debugName: "categories" }] : (
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
  hasError = signal(
    false,
    ...ngDevMode ? [{ debugName: "hasError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Scroll horizontal SOLO visible/activo en móvil (ver category-section.scss)
  // -- en desktop/tablet la sección sigue siendo un grid normal, sin overflow,
  // así que estas flechas quedan ocultas por CSS y nunca se disparan.
  scrollContainer = viewChild(
    "scrollContainer",
    ...ngDevMode ? [{ debugName: "scrollContainer" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canScrollLeft = signal(
    false,
    ...ngDevMode ? [{ debugName: "canScrollLeft" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canScrollRight = signal(
    false,
    ...ngDevMode ? [{ debugName: "canScrollRight" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.hasError.set(false);
    const usuario = this.authService.usuario();
    this.catalogoService.listCategorias(usuario?.empresa_id).subscribe({
      next: (categories) => {
        this.categories.set(categories);
        this.loading.set(false);
        queueMicrotask(() => this.actualizarEstadoScroll());
      },
      error: () => {
        this.loading.set(false);
        this.hasError.set(true);
      }
    });
  }
  onScrollCategorias() {
    this.actualizarEstadoScroll();
  }
  onResize() {
    this.actualizarEstadoScroll();
  }
  /** Desplaza una "página" (casi el ancho visible) hacia la izquierda (-1) o
   * derecha (1) -- nunca automático, solo se llama desde clic en flecha (ver
   * category-section.html). Sin loop: al llegar a un extremo, scrollBy deja
   * de avanzar más allá del scrollWidth real del navegador. */
  desplazar(direccion) {
    const el = this.scrollContainer()?.nativeElement;
    if (!el) {
      return;
    }
    el.scrollBy({ left: direccion * el.clientWidth * 0.85, behavior: "smooth" });
  }
  actualizarEstadoScroll() {
    const el = this.scrollContainer()?.nativeElement;
    if (!el) {
      this.canScrollLeft.set(false);
      this.canScrollRight.set(false);
      return;
    }
    const maxScroll = el.scrollWidth - el.clientWidth;
    this.canScrollLeft.set(el.scrollLeft > 4);
    this.canScrollRight.set(el.scrollLeft < maxScroll - 4);
  }
  static \u0275fac = function CategorySection_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategorySection)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategorySection, selectors: [["app-category-section"]], viewQuery: function CategorySection_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.scrollContainer, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostBindings: function CategorySection_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function CategorySection_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 15, vars: 3, consts: [["scrollContainer", ""], [1, "section-header"], [1, "section-header__actions"], [1, "category-nav"], ["type", "button", "aria-label", "Ver categor\xEDas anteriores", 1, "category-carousel__arrow", "category-carousel__arrow--left", 3, "click", "disabled"], ["type", "button", "aria-label", "Ver m\xE1s categor\xEDas", 1, "category-carousel__arrow", "category-carousel__arrow--right", 3, "click", "disabled"], ["routerLink", "/home/catalogo", 1, "section-link"], [1, "category-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "skeleton-card"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "category-grid", 3, "scroll"], [3, "category"]], template: function CategorySection_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h2");
      \u0275\u0275text(2, "Compra por categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function CategorySection_Template_button_click_5_listener() {
        return ctx.desplazar(-1);
      });
      \u0275\u0275text(6, "\u2039");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function CategorySection_Template_button_click_7_listener() {
        return ctx.desplazar(1);
      });
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "Ver todas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, CategorySection_Conditional_11_Template, 3, 1, "div", 7)(12, CategorySection_Conditional_12_Template, 7, 0, "div", 8)(13, CategorySection_Conditional_13_Template, 5, 0, "div", 9)(14, CategorySection_Conditional_14_Template, 4, 0, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", !ctx.canScrollLeft());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canScrollRight());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 11 : ctx.hasError() ? 12 : ctx.categories().length === 0 ? 13 : 14);
    }
  }, dependencies: [CategoryCard, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.section-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.section-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  white-space: nowrap;\n}\n.section-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.category-grid[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 6px;\n}\n.category-carousel__arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  line-height: 1;\n  transition:\n    color var(--%NS%transition-fast),\n    border-color var(--%NS%transition-fast),\n    opacity var(--%NS%transition-fast);\n}\n.category-carousel__arrow[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n}\n.category-carousel__arrow[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  border-radius: var(--%NS%radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 1199px) {\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .category-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .category-grid[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    overflow-y: hidden;\n    scroll-snap-type: x proximity;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n    gap: 10px;\n    padding-bottom: 2px;\n    scrollbar-width: none;\n  }\n  .category-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  app-category-card[_ngcontent-%COMP%] {\n    flex: 0 0 calc(50% - 5px);\n    width: calc(50% - 5px);\n    scroll-snap-align: start;\n  }\n}\n@media (max-width: 479px) {\n  .category-grid[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  app-category-card[_ngcontent-%COMP%] {\n    flex-basis: calc(50% - 4px);\n    width: calc(50% - 4px);\n  }\n}\n/*# sourceMappingURL=category-section-BN5SSOPC.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategorySection, [{
    type: Component,
    args: [{ selector: "app-category-section", imports: [CategoryCard, RouterLink], template: '<div class="section-header">\r\n  <h2>Compra por categor\xEDas</h2>\r\n  <div class="section-header__actions">\r\n    <!-- Flechas SOLO visibles en m\xF3vil (ver category-section.scss) -- viven\r\n         en el header, no junto a las tarjetas, para que el carril de scroll\r\n         de abajo aproveche el 100% del ancho de la secci\xF3n en vez de que\r\n         los propios botones le resten espacio. -->\r\n    <div class="category-nav">\r\n      <button\r\n        type="button"\r\n        class="category-carousel__arrow category-carousel__arrow--left"\r\n        (click)="desplazar(-1)"\r\n        [disabled]="!canScrollLeft()"\r\n        aria-label="Ver categor\xEDas anteriores"\r\n      >\u2039</button>\r\n      <button\r\n        type="button"\r\n        class="category-carousel__arrow category-carousel__arrow--right"\r\n        (click)="desplazar(1)"\r\n        [disabled]="!canScrollRight()"\r\n        aria-label="Ver m\xE1s categor\xEDas"\r\n      >\u203A</button>\r\n    </div>\r\n    <a routerLink="/home/catalogo" class="section-link">Ver todas</a>\r\n  </div>\r\n</div>\r\n\r\n@if (loading()) {\r\n  <div class="category-grid">\r\n    @for (i of [1, 2, 3, 4, 5]; track i) {\r\n      <div class="skeleton-card"></div>\r\n    }\r\n  </div>\r\n} @else if (hasError()) {\r\n  <div class="state-block state-block--error">\r\n    <span class="state-block__title">No se pudieron cargar las categor\xEDas</span>\r\n    <span>Int\xE9ntalo nuevamente m\xE1s tarde.</span>\r\n    <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r\n  </div>\r\n} @else if (categories().length === 0) {\r\n  <div class="state-block">\r\n    <span class="state-block__title">A\xFAn no hay categor\xEDas activas</span>\r\n    <span>Las categor\xEDas configuradas desde el panel de administraci\xF3n aparecer\xE1n aqu\xED.</span>\r\n  </div>\r\n} @else {\r\n  <!-- Grid normal en desktop/tablet; en m\xF3vil (ver category-section.scss) se\r\n       vuelve una fila con scroll horizontal -- nunca autom\xE1tico, solo avanza\r\n       con swipe o con las flechas del header (sin dots, sin loop). -->\r\n  <div class="category-grid" #scrollContainer (scroll)="onScrollCategorias()">\r\n    @for (category of categories(); track category.id) {\r\n      <app-category-card [category]="category" />\r\n    }\r\n  </div>\r\n}\r\n', styles: ["/* src/app/features/public/home/category-section/category-section.scss */\n:host {\n  display: block;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.section-header h2 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.section-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.section-link {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.section-link:hover {\n  text-decoration: underline;\n}\n.category-grid {\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n}\n.category-nav {\n  display: none;\n  align-items: center;\n  gap: 6px;\n}\n.category-carousel__arrow {\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n  background: var(--color-white);\n  color: var(--color-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  line-height: 1;\n  transition:\n    color var(--transition-fast),\n    border-color var(--transition-fast),\n    opacity var(--transition-fast);\n}\n.category-carousel__arrow:hover:not(:disabled) {\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.category-carousel__arrow:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.skeleton-card {\n  aspect-ratio: 3/4;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 1199px) {\n  .category-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .category-nav {\n    display: flex;\n  }\n  .category-grid {\n    display: flex;\n    overflow-x: auto;\n    overflow-y: hidden;\n    scroll-snap-type: x proximity;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n    gap: 10px;\n    padding-bottom: 2px;\n    scrollbar-width: none;\n  }\n  .category-grid::-webkit-scrollbar {\n    display: none;\n  }\n  app-category-card {\n    flex: 0 0 calc(50% - 5px);\n    width: calc(50% - 5px);\n    scroll-snap-align: start;\n  }\n}\n@media (max-width: 479px) {\n  .category-grid {\n    gap: 8px;\n  }\n  app-category-card {\n    flex-basis: calc(50% - 4px);\n    width: calc(50% - 4px);\n  }\n}\n/*# sourceMappingURL=category-section-BN5SSOPC.css.map */\n"] }]
  }], null, { scrollContainer: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategorySection, { className: "CategorySection", filePath: "src/app/features/public/home/category-section/category-section.ts", lineNumber: 14 });
})();

// src/app/features/public/home/featured-products/featured-products.ts
var _c03 = () => [1, 2, 3, 4];
var _forTrack02 = ($index, $item) => $item.id;
function FeaturedProducts_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function FeaturedProducts_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, FeaturedProducts_Conditional_5_For_2_Template, 1, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c03));
  }
}
function FeaturedProducts_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 6);
    \u0275\u0275text(2, "No se pudieron cargar los productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Int\xE9ntalo nuevamente m\xE1s tarde.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function FeaturedProducts_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
}
function FeaturedProducts_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "No hay prendas publicadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Las prendas que el administrador publique aparecer\xE1n aqu\xED.");
    \u0275\u0275elementEnd()();
  }
}
function FeaturedProducts_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 8);
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275property("product", product_r3);
  }
}
function FeaturedProducts_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, FeaturedProducts_Conditional_8_For_2_Template, 1, 1, "app-product-card", 8, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products());
  }
}
var MAX_DESTACADOS = 8;
var FeaturedProducts = class _FeaturedProducts {
  catalogoService = inject(CatalogoService);
  authService = inject(AuthService);
  products = signal(
    [],
    ...ngDevMode ? [{ debugName: "products" }] : (
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
  hasError = signal(
    false,
    ...ngDevMode ? [{ debugName: "hasError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.hasError.set(false);
    const usuario = this.authService.usuario();
    this.catalogoService.listProductos({ empresa_id: usuario?.empresa_id }).subscribe({
      next: (productos) => {
        this.products.set(productos.slice(0, MAX_DESTACADOS));
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.hasError.set(true);
      }
    });
  }
  static \u0275fac = function FeaturedProducts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturedProducts)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturedProducts, selectors: [["app-featured-products"]], decls: 9, vars: 1, consts: [[1, "section-header"], ["routerLink", "/home/catalogo", 1, "section-link"], [1, "product-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "skeleton-card"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [3, "product"]], template: function FeaturedProducts_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Explorar productos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 1);
      \u0275\u0275text(4, "Ver todos");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, FeaturedProducts_Conditional_5_Template, 3, 1, "div", 2)(6, FeaturedProducts_Conditional_6_Template, 7, 0, "div", 3)(7, FeaturedProducts_Conditional_7_Template, 5, 0, "div", 4)(8, FeaturedProducts_Conditional_8_Template, 3, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 5 : ctx.hasError() ? 6 : ctx.products().length === 0 ? 7 : 8);
    }
  }, dependencies: [ProductCard, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.section-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n}\n.section-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.product-grid[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  border-radius: var(--%NS%radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 900px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 620px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=featured-products-UFDAGQ2R.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturedProducts, [{
    type: Component,
    args: [{ selector: "app-featured-products", imports: [ProductCard, RouterLink], template: '<div class="section-header">\r\n  <h2>Explorar productos</h2>\r\n  <a routerLink="/home/catalogo" class="section-link">Ver todos</a>\r\n</div>\r\n\r\n@if (loading()) {\r\n  <div class="product-grid">\r\n    @for (i of [1, 2, 3, 4]; track i) {\r\n      <div class="skeleton-card"></div>\r\n    }\r\n  </div>\r\n} @else if (hasError()) {\r\n  <div class="state-block state-block--error">\r\n    <span class="state-block__title">No se pudieron cargar los productos</span>\r\n    <span>Int\xE9ntalo nuevamente m\xE1s tarde.</span>\r\n    <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r\n  </div>\r\n} @else if (products().length === 0) {\r\n  <div class="state-block">\r\n    <span class="state-block__title">No hay prendas publicadas</span>\r\n    <span>Las prendas que el administrador publique aparecer\xE1n aqu\xED.</span>\r\n  </div>\r\n} @else {\r\n  <div class="product-grid">\r\n    @for (product of products(); track product.id) {\r\n      <app-product-card [product]="product" />\r\n    }\r\n  </div>\r\n}\r\n', styles: ["/* src/app/features/public/home/featured-products/featured-products.scss */\n:host {\n  display: block;\n}\n.section-header {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.section-header h2 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.section-link {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n}\n.section-link:hover {\n  text-decoration: underline;\n}\n.product-grid {\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n.skeleton-card {\n  aspect-ratio: 3/4;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 900px) {\n  .product-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 620px) {\n  .product-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=featured-products-UFDAGQ2R.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturedProducts, { className: "FeaturedProducts", filePath: "src/app/features/public/home/featured-products/featured-products.ts", lineNumber: 16 });
})();

// src/app/features/public/home/hero-banner/hero-banner.ts
var _c04 = (a0) => ({ coleccion_id: a0 });
function HeroBanner_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1, "Explorar colecci\xF3n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c04, ctx.id));
  }
}
function HeroBanner_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.resolveMediaUrl(ctx), \u0275\u0275sanitizeUrl);
  }
}
var HeroBanner = class _HeroBanner {
  http = inject(HttpClient);
  // La colección destacada se gestiona desde CU10 (Admin > Temporadas y
  // colecciones); este componente solo la consume vía el endpoint público
  // /colecciones/destacada. Si no hay ninguna marcada (o falla la carga), el
  // hero se queda con el texto estático y sin imagen/CTA -- nunca rompe.
  coleccionDestacada = signal(
    null,
    ...ngDevMode ? [{ debugName: "coleccionDestacada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resolveMediaUrl = resolveMediaUrl;
  constructor() {
    this.http.get(`${environment.apiUrl}/colecciones/destacada`).subscribe({
      next: (coleccion) => this.coleccionDestacada.set(coleccion),
      error: () => this.coleccionDestacada.set(null)
    });
  }
  static \u0275fac = function HeroBanner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroBanner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroBanner, selectors: [["app-hero-banner"]], decls: 6, vars: 2, consts: [[1, "hero"], [1, "hero__text"], ["routerLink", "/home/catalogo", 1, "hero__cta", 3, "queryParams"], ["alt", "", 1, "hero__image", 3, "src"]], template: function HeroBanner_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "NUEVA COLECCI\xD3N");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, HeroBanner_Conditional_4_Template, 2, 3, "a", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, HeroBanner_Conditional_5_Template, 1, 1, "img", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_0_0 = ctx.coleccionDestacada()) ? 4 : -1, tmp_0_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.coleccionDestacada()?.imagen_destacada_url) ? 5 : -1, tmp_1_0);
    }
  }, dependencies: [RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--%NS%radius-lg);\n  overflow: hidden;\n  padding: clamp(22px, 2.6vw, 34px) clamp(26px, 4vw, 44px);\n  min-height: clamp(176px, 17vw, 232px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: clamp(20px, 3vw, 32px);\n  background:\n    linear-gradient(\n      120deg,\n      #4a0007,\n      var(--%NS%color-primary) 55%,\n      #d1717c 100%);\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    repeating-linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.05) 0px,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px,\n      transparent 15px);\n  pointer-events: none;\n}\n.hero__text[_ngcontent-%COMP%], \n.hero__image[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero__text[_ngcontent-%COMP%] {\n  flex: 1 1 320px;\n  max-width: 420px;\n  color: var(--%NS%color-white);\n}\n.hero__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(22px, 2.4vw, 32px);\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.01em;\n}\n.hero__cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 18px;\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-primary-dark);\n  border: none;\n  border-radius: var(--%NS%radius-sm);\n  padding: 11px 22px;\n  font-size: 13px;\n  font-weight: 700;\n  transition: background var(--%NS%transition-fast), transform var(--%NS%transition-fast);\n}\n.hero__cta[_ngcontent-%COMP%]:hover {\n  background: #f2f2f2;\n  transform: translateY(-1px);\n}\n.hero__image[_ngcontent-%COMP%] {\n  flex: 0 1 320px;\n  align-self: flex-end;\n  max-height: clamp(150px, 15vw, 210px);\n  max-width: 100%;\n  object-fit: contain;\n  object-position: bottom;\n}\n@media (max-width: 1199px) {\n  .hero__image[_ngcontent-%COMP%] {\n    flex-basis: 280px;\n  }\n}\n@media (max-width: 991px) {\n  .hero[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .hero__text[_ngcontent-%COMP%] {\n    flex-basis: 240px;\n  }\n  .hero__image[_ngcontent-%COMP%] {\n    flex-basis: 220px;\n  }\n}\n@media (max-width: 767px) {\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: clamp(22px, 5vw, 28px) 22px;\n    min-height: 0;\n  }\n  .hero__text[_ngcontent-%COMP%] {\n    max-width: none;\n    flex-basis: auto;\n  }\n  .hero__image[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    width: 100%;\n    max-height: 200px;\n    align-self: center;\n    object-position: center;\n  }\n}\n@media (max-width: 479px) {\n  .hero__image[_ngcontent-%COMP%] {\n    max-height: 160px;\n  }\n}\n/*# sourceMappingURL=hero-banner-PKIGALKY.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroBanner, [{
    type: Component,
    args: [{ selector: "app-hero-banner", imports: [RouterLink], template: '<div class="hero">\r\n  <div class="hero__text">\r\n    <h1>NUEVA COLECCI\xD3N</h1>\r\n    @if (coleccionDestacada(); as coleccion) {\r\n      <a\r\n        routerLink="/home/catalogo"\r\n        [queryParams]="{ coleccion_id: coleccion.id }"\r\n        class="hero__cta"\r\n      >Explorar colecci\xF3n</a>\r\n    }\r\n  </div>\r\n\r\n  @if (coleccionDestacada()?.imagen_destacada_url; as imagenUrl) {\r\n    <img [src]="resolveMediaUrl(imagenUrl)" alt="" class="hero__image" />\r\n  }\r\n</div>\r\n', styles: ['/* src/app/features/public/home/hero-banner/hero-banner.scss */\n:host {\n  display: block;\n}\n.hero {\n  position: relative;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  padding: clamp(22px, 2.6vw, 34px) clamp(26px, 4vw, 44px);\n  min-height: clamp(176px, 17vw, 232px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: clamp(20px, 3vw, 32px);\n  background:\n    linear-gradient(\n      120deg,\n      #4a0007,\n      var(--color-primary) 55%,\n      #d1717c 100%);\n}\n.hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    repeating-linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.05) 0px,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px,\n      transparent 15px);\n  pointer-events: none;\n}\n.hero__text,\n.hero__image {\n  position: relative;\n  z-index: 1;\n}\n.hero__text {\n  flex: 1 1 320px;\n  max-width: 420px;\n  color: var(--color-white);\n}\n.hero__text h1 {\n  font-size: clamp(22px, 2.4vw, 32px);\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.01em;\n}\n.hero__cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 18px;\n  background: var(--color-white);\n  color: var(--color-primary-dark);\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 11px 22px;\n  font-size: 13px;\n  font-weight: 700;\n  transition: background var(--transition-fast), transform var(--transition-fast);\n}\n.hero__cta:hover {\n  background: #f2f2f2;\n  transform: translateY(-1px);\n}\n.hero__image {\n  flex: 0 1 320px;\n  align-self: flex-end;\n  max-height: clamp(150px, 15vw, 210px);\n  max-width: 100%;\n  object-fit: contain;\n  object-position: bottom;\n}\n@media (max-width: 1199px) {\n  .hero__image {\n    flex-basis: 280px;\n  }\n}\n@media (max-width: 991px) {\n  .hero {\n    gap: 18px;\n  }\n  .hero__text {\n    flex-basis: 240px;\n  }\n  .hero__image {\n    flex-basis: 220px;\n  }\n}\n@media (max-width: 767px) {\n  .hero {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: clamp(22px, 5vw, 28px) 22px;\n    min-height: 0;\n  }\n  .hero__text {\n    max-width: none;\n    flex-basis: auto;\n  }\n  .hero__image {\n    flex-basis: auto;\n    width: 100%;\n    max-height: 200px;\n    align-self: center;\n    object-position: center;\n  }\n}\n@media (max-width: 479px) {\n  .hero__image {\n    max-height: 160px;\n  }\n}\n/*# sourceMappingURL=hero-banner-PKIGALKY.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroBanner, { className: "HeroBanner", filePath: "src/app/features/public/home/hero-banner/hero-banner.ts", lineNumber: 18 });
})();

// src/app/features/public/home/home.ts
var Home = class _Home {
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 4, vars: 0, consts: [[1, "container", "home"], ["id", "categorias"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-hero-banner")(2, "app-category-section", 1)(3, "app-featured-products");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [HeroBanner, CategorySection, FeaturedProducts], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.home[_ngcontent-%COMP%] {\n  padding-top: 18px;\n  padding-bottom: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 26px;\n}\n/*# sourceMappingURL=home-YLSGAHIS.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [HeroBanner, CategorySection, FeaturedProducts], template: '<div class="container home">\r\n  <app-hero-banner />\r\n  <app-category-section id="categorias" />\r\n  <app-featured-products />\r\n</div>\r\n', styles: ["/* src/app/features/public/home/home.scss */\n:host {\n  display: block;\n}\n.home {\n  padding-top: 18px;\n  padding-bottom: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 26px;\n}\n/*# sourceMappingURL=home-YLSGAHIS.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/features/public/home/home.ts", lineNumber: 12 });
})();
export {
  Home
};
//# debugId=d497d4de-c9c9-58b9-8ce3-6ae5dcdc40ee
//# sourceMappingURL=chunk-KS4DHKCR.js.map
