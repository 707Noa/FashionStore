import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  RouterLink
} from "./chunk-OXXL2I3V.js";
import {
  Component,
  Input,
  effect,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/public/home/product-card/product-card.ts
var _c0 = (a0) => ["/home/producto", a0];
function ProductCard_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 13);
    \u0275\u0275listener("error", function ProductCard_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(ctx_r1.product().imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", ctx_r1.product().nombre);
  }
}
function ProductCard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-icon", 14);
    \u0275\u0275elementEnd();
  }
}
function ProductCard_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bs ", ctx_r1.product().precio_base.toFixed(2));
  }
}
function ProductCard_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r1.product().porcentaje_descuento, "%");
  }
}
var ProductCard = class _ProductCard {
  product = input.required(
    ...ngDevMode ? [{ debugName: "product" }] : (
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
  // Estado puramente visual: la lógica real de favoritos llegará con su propio caso de uso.
  isFavorite = signal(
    false,
    ...ngDevMode ? [{ debugName: "isFavorite" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      this.product();
      this.imageError.set(false);
    });
  }
  toggleFavorite(event) {
    event.preventDefault();
    this.isFavorite.update((value) => !value);
  }
  static \u0275fac = function ProductCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCard, selectors: [["app-product-card"]], inputs: { product: [1, "product"] }, decls: 16, vars: 11, consts: [[1, "card", 3, "routerLink"], [1, "card__image"], [3, "src", "alt"], [1, "card__placeholder"], ["type", "button", "aria-label", "Guardar en favoritos", 1, "card__favorite", 3, "click"], ["name", "heart", 2, "width", "15px", "height", "15px"], [1, "card__info"], [1, "card__coleccion"], [1, "card__name"], [1, "card__precios"], [1, "precio-anterior"], [1, "card__price"], [1, "precio-descuento"], [3, "error", "src", "alt"], ["name", "products", 2, "width", "26px", "height", "26px"]], template: function ProductCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ProductCard_Conditional_2_Template, 1, 2, "img", 2)(3, ProductCard_Conditional_3_Template, 2, 0, "div", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function ProductCard_Template_button_click_4_listener($event) {
        return ctx.toggleFavorite($event);
      });
      \u0275\u0275element(5, "app-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275conditionalCreate(12, ProductCard_Conditional_12_Template, 2, 1, "span", 10);
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, ProductCard_Conditional_15_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, ctx.product().id));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.product().imagen_principal_url && !ctx.imageError() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.isFavorite());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.product().coleccion.nombre);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.product().nombre);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.product().en_promocion ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Bs ", ctx.product().precio_final.toFixed(2));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().en_promocion ? 15 : -1);
    }
  }, dependencies: [Icon, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.card[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  transition: transform var(--%NS%transition-fast), box-shadow var(--%NS%transition-fast);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--%NS%shadow-medium);\n}\n.card__image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3/4;\n  background:\n    linear-gradient(\n      160deg,\n      #f0eeea,\n      #ddd6cb);\n}\n.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.card__favorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--%NS%color-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--%NS%transition-fast), transform var(--%NS%transition-fast);\n}\n.card__favorite[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n.card__favorite.is-active[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n}\n.card__info[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.card__coleccion[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-text-secondary);\n}\n.card__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--%NS%color-text);\n}\n.card__price[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-primary-dark);\n}\n.card__precios[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.precio-anterior[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 6px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=product-card-HWNFPJYZ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCard, [{
    type: Component,
    args: [{ selector: "app-product-card", imports: [Icon, RouterLink], template: `<a [routerLink]="['/home/producto', product().id]" class="card">\r
  <div class="card__image">\r
    @if (product().imagen_principal_url && !imageError()) {\r
      <img\r
        [src]="resolveMediaUrl(product().imagen_principal_url)"\r
        [alt]="product().nombre"\r
        (error)="imageError.set(true)"\r
      />\r
    } @else {\r
      <div class="card__placeholder">\r
        <app-icon name="products" style="width: 26px; height: 26px" />\r
      </div>\r
    }\r
    <button\r
      type="button"\r
      class="card__favorite"\r
      [class.is-active]="isFavorite()"\r
      (click)="toggleFavorite($event)"\r
      aria-label="Guardar en favoritos"\r
    >\r
      <app-icon name="heart" style="width: 15px; height: 15px" />\r
    </button>\r
  </div>\r
  <div class="card__info">\r
    <span class="card__coleccion">{{ product().coleccion.nombre }}</span>\r
    <span class="card__name">{{ product().nombre }}</span>\r
    <div class="card__precios">\r
      @if (product().en_promocion) {\r
        <span class="precio-anterior">Bs {{ product().precio_base.toFixed(2) }}</span>\r
      }\r
      <span class="card__price">Bs {{ product().precio_final.toFixed(2) }}</span>\r
      @if (product().en_promocion) {\r
        <span class="precio-descuento">-{{ product().porcentaje_descuento }}%</span>\r
      }\r
    </div>\r
  </div>\r
</a>\r
`, styles: ["/* src/app/features/public/home/product-card/product-card.scss */\n:host {\n  display: block;\n}\n.card {\n  display: block;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  transition: transform var(--transition-fast), box-shadow var(--transition-fast);\n}\n.card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-medium);\n}\n.card__image {\n  position: relative;\n  aspect-ratio: 3/4;\n  background:\n    linear-gradient(\n      160deg,\n      #f0eeea,\n      #ddd6cb);\n}\n.card__image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.card__favorite {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color var(--transition-fast), transform var(--transition-fast);\n}\n.card__favorite:hover {\n  transform: scale(1.06);\n}\n.card__favorite.is-active {\n  color: var(--color-primary);\n}\n.card__info {\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.card__coleccion {\n  font-size: 10.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-secondary);\n}\n.card__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text);\n}\n.card__price {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-primary-dark);\n}\n.card__precios {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.precio-anterior {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 6px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=product-card-HWNFPJYZ.css.map */\n"] }]
  }], () => [], { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCard, { className: "ProductCard", filePath: "src/app/features/public/home/product-card/product-card.ts", lineNumber: 13 });
})();

export {
  ProductCard
};
//# debugId=1147993d-cf06-561c-9da7-787cbd371d71
//# sourceMappingURL=chunk-G5DEM6EB.js.map
