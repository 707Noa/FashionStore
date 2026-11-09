import {
  CarritoService
} from "./chunk-XEZGY4VJ.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  RouterLink
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  computed,
  inject,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNHCNXB7.js";

// src/app/features/carrito/mi-carrito/mi-carrito.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.item_id;
function MiCarrito_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function MiCarrito_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, MiCarrito_Conditional_7_For_2_Template, 1, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function MiCarrito_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "No se pudo cargar tu carrito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function MiCarrito_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargar());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function MiCarrito_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-icon", 9);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3, "Tu carrito est\xE1 vac\xEDo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275text(5, "Seguir comprando");
    \u0275\u0275elementEnd()();
  }
}
function MiCarrito_Conditional_10_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(item_r4.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", item_r4.producto.nombre);
  }
}
function MiCarrito_Conditional_10_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "app-icon", 30);
    \u0275\u0275elementEnd();
  }
}
function MiCarrito_Conditional_10_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bs ", ctx_r1.formatearMonto(item_r4.precio_base));
  }
}
function MiCarrito_Conditional_10_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", item_r4.porcentaje_descuento, "%");
  }
}
function MiCarrito_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 15)(1, "label", 16)(2, "input", 17);
    \u0275\u0275listener("change", function MiCarrito_Conditional_10_For_2_Template_input_change_2_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSeleccion(item_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275conditionalCreate(5, MiCarrito_Conditional_10_For_2_Conditional_5_Template, 1, 2, "img", 20)(6, MiCarrito_Conditional_10_For_2_Conditional_6_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275conditionalCreate(13, MiCarrito_Conditional_10_For_2_Conditional_13_Template, 2, 1, "span", 26);
    \u0275\u0275elementStart(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, MiCarrito_Conditional_10_For_2_Conditional_16_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 29);
    \u0275\u0275listener("click", function MiCarrito_Conditional_10_For_2_Template_button_click_17_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminar(item_r4));
    });
    \u0275\u0275text(18, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("item-carrito--procesando", ctx_r1.procesandoItemId() === item_r4.item_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", item_r4.seleccionado)("disabled", ctx_r1.procesandoItemId() !== null);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r4.producto.imagen_principal_url ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.variante.color.nombre, " \xB7 ", item_r4.variante.talla.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r4.en_promocion ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Precio: Bs ", ctx_r1.formatearMonto(item_r4.precio_unitario));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.en_promocion ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.procesandoItemId() !== null);
  }
}
function MiCarrito_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 32);
    \u0275\u0275text(3, " CONTINUAR COMPRA ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Subtotal seleccionado: Bs ", ctx_r1.formatearMonto(ctx_r1.carrito().subtotal_seleccionado), " ");
  }
}
function MiCarrito_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Selecciona una prenda para continuar.");
    \u0275\u0275elementEnd();
  }
}
function MiCarrito_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, MiCarrito_Conditional_10_For_2_Template, 19, 12, "article", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275conditionalCreate(4, MiCarrito_Conditional_10_Conditional_4_Template, 4, 1)(5, MiCarrito_Conditional_10_Conditional_5_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.carrito().items);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.haySeleccionados() ? 4 : 5);
  }
}
var MiCarrito = class _MiCarrito {
  service = inject(CarritoService);
  toast = inject(ToastService);
  resolveMediaUrl = resolveMediaUrl;
  cargando = signal(
    true,
    ...ngDevMode ? [{ debugName: "cargando" }] : (
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
  carrito = signal(
    null,
    ...ngDevMode ? [{ debugName: "carrito" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // item_id en curso (seleccionar o eliminar) -- deshabilita solo los
  // controles de ESA tarjeta mientras responde el backend, evita doble clic.
  procesandoItemId = signal(
    null,
    ...ngDevMode ? [{ debugName: "procesandoItemId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  haySeleccionados = computed(
    () => (this.carrito()?.items ?? []).some((item) => item.seleccionado),
    ...ngDevMode ? [{ debugName: "haySeleccionados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.cargar();
  }
  /** Único punto que llama `toFixed(2)` -- ver docstring de la clase. */
  formatearMonto(valor) {
    if (typeof valor === "number" && Number.isFinite(valor)) {
      return valor.toFixed(2);
    }
    console.error("CU21 \xB7 Mi carrito: se esperaba un monto num\xE9rico y lleg\xF3", valor);
    return "--";
  }
  cargar() {
    this.cargando.set(true);
    this.errorMessage.set(null);
    this.service.consultar().subscribe({
      next: (carrito) => {
        this.carrito.set(carrito);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
        this.errorMessage.set("No se pudo cargar tu carrito. Int\xE9ntalo nuevamente.");
      }
    });
  }
  toggleSeleccion(item) {
    if (this.procesandoItemId() !== null) {
      return;
    }
    this.procesandoItemId.set(item.item_id);
    this.service.actualizarSeleccion(item.item_id, { seleccionado: !item.seleccionado }).subscribe({
      next: (carrito) => {
        this.procesandoItemId.set(null);
        this.carrito.set(carrito);
      },
      error: () => {
        this.procesandoItemId.set(null);
        this.toast.error("No se pudo actualizar la selecci\xF3n. Int\xE9ntalo nuevamente.");
      }
    });
  }
  eliminar(item) {
    if (this.procesandoItemId() !== null) {
      return;
    }
    this.procesandoItemId.set(item.item_id);
    this.service.eliminarItem(item.item_id).subscribe({
      next: (carrito) => {
        this.procesandoItemId.set(null);
        this.carrito.set(carrito);
        this.toast.brand("Producto eliminado del carrito.");
      },
      error: (err) => {
        this.procesandoItemId.set(null);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo eliminar el producto. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function MiCarrito_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MiCarrito)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MiCarrito, selectors: [["app-mi-carrito"]], decls: 11, vars: 1, consts: [[1, "container", "mi-carrito-page"], [1, "mi-carrito-ancho"], [1, "page-header"], [1, "item-lista"], [1, "state-block", "state-block--error"], [1, "carrito-vacio"], [1, "skeleton-item"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["name", "bag", 2, "width", "34px", "height", "34px"], [1, "carrito-vacio__titulo"], ["routerLink", "/home/catalogo", 1, "btn", "btn--primary"], [1, "item-carrito", 3, "item-carrito--procesando"], [1, "carrito-resumen"], [1, "carrito-resumen__vacio"], [1, "item-carrito"], [1, "item-carrito__seleccion"], ["type", "checkbox", "aria-label", "Seleccionar para la compra", 3, "change", "checked", "disabled"], [1, "item-carrito__checkbox-visual"], [1, "item-carrito__imagen"], ["loading", "lazy", 3, "src", "alt"], [1, "item-carrito__placeholder"], [1, "item-carrito__info"], [1, "item-carrito__nombre"], [1, "item-carrito__variante"], [1, "item-carrito__precios"], [1, "precio-anterior"], [1, "item-carrito__precio"], [1, "precio-descuento"], ["type", "button", 1, "item-carrito__eliminar", 3, "click", "disabled"], ["name", "products", 2, "width", "26px", "height", "26px"], [1, "carrito-resumen__valor"], ["routerLink", "/home/finalizar-compra", 1, "btn", "btn--primary", "carrito-resumen__continuar"]], template: function MiCarrito_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Mi carrito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Revisa las prendas que quieres comprar.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, MiCarrito_Conditional_7_Template, 3, 1, "div", 3)(8, MiCarrito_Conditional_8_Template, 7, 1, "div", 4)(9, MiCarrito_Conditional_9_Template, 6, 0, "div", 5)(10, MiCarrito_Conditional_10_Template, 6, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.cargando() ? 7 : ctx.errorMessage() ? 8 : ctx.carrito().items.length === 0 ? 9 : 10);
    }
  }, dependencies: [Icon, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.mi-carrito-page[_ngcontent-%COMP%] {\n  padding-top: 28px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n}\n.mi-carrito-ancho[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 760px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  text-align: center;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.carrito-vacio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 64px 20px;\n  text-align: center;\n  color: var(--%NS%color-text-secondary);\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.carrito-vacio[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n}\n.carrito-vacio__titulo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.item-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.item-carrito[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  transition: box-shadow var(--%NS%transition-fast), opacity var(--%NS%transition-fast);\n}\n.item-carrito[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--%NS%shadow-medium);\n}\n.item-carrito--procesando[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item-carrito__seleccion[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n.item-carrito__seleccion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  pointer-events: none;\n}\n.item-carrito__seleccion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .item-carrito__checkbox-visual[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.item-carrito__seleccion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    + .item-carrito__checkbox-visual[_ngcontent-%COMP%] {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 2px;\n}\n.item-carrito__checkbox-visual[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 1.5px solid var(--%NS%color-border);\n  background: var(--%NS%color-white);\n  position: relative;\n  transition: background var(--%NS%transition-fast), border-color var(--%NS%transition-fast);\n}\n.item-carrito__checkbox-visual[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 10px;\n  border: solid var(--%NS%color-white);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity var(--%NS%transition-fast);\n}\n.item-carrito__seleccion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .item-carrito__checkbox-visual[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n}\n.item-carrito__seleccion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .item-carrito__checkbox-visual[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.item-carrito__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 76px;\n  height: 76px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.item-carrito__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-carrito__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.item-carrito__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.item-carrito__nombre[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.item-carrito__variante[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.item-carrito__precio[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.item-carrito__precios[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.precio-anterior[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.item-carrito__eliminar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: none;\n  background: none;\n  padding: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: underline;\n}\n.item-carrito__eliminar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.item-carrito__eliminar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--%NS%color-danger);\n}\n.carrito-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-top: 22px;\n  padding: 18px 22px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.carrito-resumen__valor[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.carrito-resumen__vacio[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 13.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.carrito-resumen__continuar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  letter-spacing: 0.04em;\n}\n.skeleton-item[_ngcontent-%COMP%] {\n  height: 100px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@media (max-width: 560px) {\n  .mi-carrito-page[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n  .item-carrito[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 14px;\n  }\n  .item-carrito__info[_ngcontent-%COMP%] {\n    min-width: 140px;\n  }\n  .item-carrito__eliminar[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: right;\n    margin-top: 4px;\n    padding-top: 10px;\n    border-top: 1px dashed var(--%NS%color-border);\n  }\n  .carrito-resumen[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n    gap: 10px;\n  }\n  .carrito-resumen__continuar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=mi-carrito-3WKLH3LQ.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiCarrito, [{
    type: Component,
    args: [{ selector: "app-mi-carrito", imports: [Icon, RouterLink], template: '<div class="container mi-carrito-page">\r\n  <div class="mi-carrito-ancho">\r\n    <div class="page-header">\r\n      <h1>Mi carrito</h1>\r\n      <p>Revisa las prendas que quieres comprar.</p>\r\n    </div>\r\n\r\n    @if (cargando()) {\r\n      <div class="item-lista">\r\n        @for (i of [1, 2, 3]; track i) {\r\n          <div class="skeleton-item"></div>\r\n        }\r\n      </div>\r\n    } @else if (errorMessage()) {\r\n      <div class="state-block state-block--error">\r\n        <span class="state-block__title">No se pudo cargar tu carrito</span>\r\n        <span>{{ errorMessage() }}</span>\r\n        <button type="button" class="btn btn--ghost btn--sm" (click)="cargar()">Reintentar</button>\r\n      </div>\r\n    } @else if (carrito()!.items.length === 0) {\r\n      <div class="carrito-vacio">\r\n        <app-icon name="bag" style="width: 34px; height: 34px" />\r\n        <span class="carrito-vacio__titulo">Tu carrito est\xE1 vac\xEDo.</span>\r\n        <a routerLink="/home/catalogo" class="btn btn--primary">Seguir comprando</a>\r\n      </div>\r\n    } @else {\r\n      <div class="item-lista">\r\n        @for (item of carrito()!.items; track item.item_id) {\r\n          <article class="item-carrito" [class.item-carrito--procesando]="procesandoItemId() === item.item_id">\r\n            <label class="item-carrito__seleccion">\r\n              <input\r\n                type="checkbox"\r\n                [checked]="item.seleccionado"\r\n                [disabled]="procesandoItemId() !== null"\r\n                (change)="toggleSeleccion(item)"\r\n                aria-label="Seleccionar para la compra"\r\n              />\r\n              <span class="item-carrito__checkbox-visual"></span>\r\n            </label>\r\n\r\n            <div class="item-carrito__imagen">\r\n              @if (item.producto.imagen_principal_url) {\r\n                <img [src]="resolveMediaUrl(item.producto.imagen_principal_url)" [alt]="item.producto.nombre" loading="lazy" />\r\n              } @else {\r\n                <div class="item-carrito__placeholder">\r\n                  <app-icon name="products" style="width: 26px; height: 26px" />\r\n                </div>\r\n              }\r\n            </div>\r\n\r\n            <div class="item-carrito__info">\r\n              <span class="item-carrito__nombre">{{ item.producto.nombre }}</span>\r\n              <span class="item-carrito__variante">{{ item.variante.color.nombre }} \xB7 {{ item.variante.talla.nombre }}</span>\r\n              <div class="item-carrito__precios">\r\n                @if (item.en_promocion) {\r\n                  <span class="precio-anterior">Bs {{ formatearMonto(item.precio_base) }}</span>\r\n                }\r\n                <span class="item-carrito__precio">Precio: Bs {{ formatearMonto(item.precio_unitario) }}</span>\r\n                @if (item.en_promocion) {\r\n                  <span class="precio-descuento">-{{ item.porcentaje_descuento }}%</span>\r\n                }\r\n              </div>\r\n            </div>\r\n\r\n            <button\r\n              type="button"\r\n              class="item-carrito__eliminar"\r\n              [disabled]="procesandoItemId() !== null"\r\n              (click)="eliminar(item)"\r\n            >\r\n              Eliminar\r\n            </button>\r\n          </article>\r\n        }\r\n      </div>\r\n\r\n      <div class="carrito-resumen">\r\n        @if (haySeleccionados()) {\r\n          <span class="carrito-resumen__valor">\r\n            Subtotal seleccionado: Bs {{ formatearMonto(carrito()!.subtotal_seleccionado) }}\r\n          </span>\r\n          <a routerLink="/home/finalizar-compra" class="btn btn--primary carrito-resumen__continuar">\r\n            CONTINUAR COMPRA\r\n          </a>\r\n        } @else {\r\n          <span class="carrito-resumen__vacio">Selecciona una prenda para continuar.</span>\r\n        }\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/features/carrito/mi-carrito/mi-carrito.scss */\n:host {\n  display: block;\n}\n.mi-carrito-page {\n  padding-top: 28px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n}\n.mi-carrito-ancho {\n  width: 100%;\n  max-width: 760px;\n}\n.page-header {\n  margin-bottom: 22px;\n  text-align: center;\n}\n.page-header h1 {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13.5px;\n  color: var(--color-text-secondary);\n}\n.carrito-vacio {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 64px 20px;\n  text-align: center;\n  color: var(--color-text-secondary);\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.carrito-vacio app-icon {\n  color: var(--color-primary);\n}\n.carrito-vacio__titulo {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.item-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.item-carrito {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  transition: box-shadow var(--transition-fast), opacity var(--transition-fast);\n}\n.item-carrito:hover {\n  box-shadow: var(--shadow-medium);\n}\n.item-carrito--procesando {\n  opacity: 0.6;\n}\n.item-carrito__seleccion {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n.item-carrito__seleccion input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  pointer-events: none;\n}\n.item-carrito__seleccion input:disabled + .item-carrito__checkbox-visual {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.item-carrito__seleccion input:focus-visible + .item-carrito__checkbox-visual {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.item-carrito__checkbox-visual {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 1.5px solid var(--color-border);\n  background: var(--color-white);\n  position: relative;\n  transition: background var(--transition-fast), border-color var(--transition-fast);\n}\n.item-carrito__checkbox-visual::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 10px;\n  border: solid var(--color-white);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity var(--transition-fast);\n}\n.item-carrito__seleccion input:checked + .item-carrito__checkbox-visual {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.item-carrito__seleccion input:checked + .item-carrito__checkbox-visual::after {\n  opacity: 1;\n}\n.item-carrito__imagen {\n  flex-shrink: 0;\n  width: 76px;\n  height: 76px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.item-carrito__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-carrito__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.item-carrito__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.item-carrito__nombre {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.item-carrito__variante {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.item-carrito__precio {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.item-carrito__precios {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.precio-anterior {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.item-carrito__eliminar {\n  flex-shrink: 0;\n  border: none;\n  background: none;\n  padding: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-decoration: underline;\n}\n.item-carrito__eliminar:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.item-carrito__eliminar:hover:not(:disabled) {\n  color: var(--color-danger);\n}\n.carrito-resumen {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-top: 22px;\n  padding: 18px 22px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.carrito-resumen__valor {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.carrito-resumen__vacio {\n  width: 100%;\n  text-align: center;\n  font-size: 13.5px;\n  color: var(--color-text-secondary);\n}\n.carrito-resumen__continuar {\n  flex-shrink: 0;\n  letter-spacing: 0.04em;\n}\n.skeleton-item {\n  height: 100px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@media (max-width: 560px) {\n  .mi-carrito-page {\n    padding-top: 20px;\n  }\n  .item-carrito {\n    flex-wrap: wrap;\n    padding: 14px;\n  }\n  .item-carrito__info {\n    min-width: 140px;\n  }\n  .item-carrito__eliminar {\n    width: 100%;\n    text-align: right;\n    margin-top: 4px;\n    padding-top: 10px;\n    border-top: 1px dashed var(--color-border);\n  }\n  .carrito-resumen {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n    gap: 10px;\n  }\n  .carrito-resumen__continuar {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=mi-carrito-3WKLH3LQ.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MiCarrito, { className: "MiCarrito", filePath: "src/app/features/carrito/mi-carrito/mi-carrito.ts", lineNumber: 44 });
})();
export {
  MiCarrito
};
//# debugId=94359c74-32a7-5c5c-b5ce-21667ce7fcd6
//# sourceMappingURL=chunk-4DYJYFND.js.map
