import {
  ProcesarPago,
  VentaPresencialService
} from "./chunk-KVUTSISM.js";
import "./chunk-D37JXF2Y.js";
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
  Router
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-PNHCNXB7.js";

// src/app/features/cajero/ventas/venta-resumen/venta-resumen.ts
var _forTrack0 = ($index, $item) => $item.producto.id + "-" + $item.variante.id;
function VentaResumen_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 12)(2, "strong");
    \u0275\u0275text(3, "Reserva:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12)(6, "strong");
    \u0275\u0275text(7, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.venta().reserva.codigo_reserva, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.venta().reserva.cliente_nombre, " ");
  }
}
function VentaResumen_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const detalle_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.resolveMediaUrl(detalle_r2.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", detalle_r2.producto.nombre);
  }
}
function VentaResumen_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-icon", 20);
    \u0275\u0275elementEnd();
  }
}
function VentaResumen_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 6)(1, "div", 13);
    \u0275\u0275conditionalCreate(2, VentaResumen_For_9_Conditional_2_Template, 1, 2, "img", 14)(3, VentaResumen_For_9_Conditional_3_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(detalle_r2.producto.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(detalle_r2.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", detalle_r2.variante.color.nombre, " \xB7 Talla ", detalle_r2.variante.talla.nombre, " \xB7 x", detalle_r2.cantidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", detalle_r2.subtotal.toFixed(2));
  }
}
var VentaResumen = class _VentaResumen {
  venta = input.required(
    ...ngDevMode ? [{ debugName: "venta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  volver = output();
  continuarPago = output();
  resolveMediaUrl = resolveMediaUrl;
  onVolver() {
    this.volver.emit();
  }
  onContinuarPago() {
    this.continuarPago.emit();
  }
  static \u0275fac = function VentaResumen_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VentaResumen)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentaResumen, selectors: [["app-venta-resumen"]], inputs: { venta: [1, "venta"] }, outputs: { volver: "volver", continuarPago: "continuarPago" }, decls: 20, vars: 3, consts: [[1, "venta-resumen"], [1, "venta-resumen__header"], [1, "venta-resumen__titulo"], [1, "venta-resumen__codigo"], [1, "venta-resumen__reserva"], [1, "venta-resumen__lista"], [1, "linea-venta"], [1, "venta-resumen__total"], [1, "venta-resumen__total-valor"], [1, "venta-resumen__acciones"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], [1, "venta-resumen__reserva-item"], [1, "linea-venta__imagen"], [3, "src", "alt"], [1, "linea-venta__placeholder"], [1, "linea-venta__info"], [1, "linea-venta__nombre"], [1, "linea-venta__variante"], [1, "linea-venta__subtotal"], ["name", "products", 2, "width", "20px", "height", "20px"]], template: function VentaResumen_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Venta presencial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, VentaResumen_Conditional_6_Template, 9, 2, "div", 4);
      \u0275\u0275elementStart(7, "ul", 5);
      \u0275\u0275repeaterCreate(8, VentaResumen_For_9_Template, 11, 6, "li", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "span");
      \u0275\u0275text(12, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "button", 10);
      \u0275\u0275listener("click", function VentaResumen_Template_button_click_16_listener() {
        return ctx.onVolver();
      });
      \u0275\u0275text(17, "Volver");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275listener("click", function VentaResumen_Template_button_click_18_listener() {
        return ctx.onContinuarPago();
      });
      \u0275\u0275text(19, "Continuar al pago");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.venta().codigo_venta);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.venta().reserva ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.venta().detalles);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Bs ", ctx.venta().total.toFixed(2));
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.venta-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 22px;\n}\n.venta-resumen__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.venta-resumen__titulo[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text);\n}\n.venta-resumen__codigo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.venta-resumen__reserva[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n  padding: 10px 14px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.venta-resumen__reserva-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.venta-resumen__lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.linea-venta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.linea-venta[_ngcontent-%COMP%]    + .linea-venta[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.linea-venta__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.linea-venta__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.linea-venta__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.linea-venta__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.linea-venta__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.linea-venta__variante[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.linea-venta__subtotal[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  white-space: nowrap;\n}\n.venta-resumen__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.venta-resumen__total-valor[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.venta-resumen__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.venta-resumen__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 170px;\n}\n@media (max-width: 560px) {\n  .venta-resumen[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .venta-resumen__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .venta-resumen__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=venta-resumen-EDFNS2T5.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentaResumen, [{
    type: Component,
    args: [{ selector: "app-venta-resumen", imports: [Icon], template: `<div class="venta-resumen">\r
  <div class="venta-resumen__header">\r
    <span class="venta-resumen__titulo">Venta presencial</span>\r
    <span class="venta-resumen__codigo">{{ venta().codigo_venta }}</span>\r
  </div>\r
\r
  @if (venta().reserva) {\r
    <div class="venta-resumen__reserva">\r
      <span class="venta-resumen__reserva-item">\r
        <strong>Reserva:</strong> {{ venta().reserva!.codigo_reserva }}\r
      </span>\r
      <span class="venta-resumen__reserva-item">\r
        <strong>Cliente:</strong> {{ venta().reserva!.cliente_nombre }}\r
      </span>\r
    </div>\r
  }\r
\r
  <ul class="venta-resumen__lista">\r
    @for (detalle of venta().detalles; track detalle.producto.id + '-' + detalle.variante.id) {\r
      <li class="linea-venta">\r
        <div class="linea-venta__imagen">\r
          @if (detalle.producto.imagen_principal_url) {\r
            <img [src]="resolveMediaUrl(detalle.producto.imagen_principal_url)" [alt]="detalle.producto.nombre" />\r
          } @else {\r
            <div class="linea-venta__placeholder">\r
              <app-icon name="products" style="width: 20px; height: 20px" />\r
            </div>\r
          }\r
        </div>\r
        <div class="linea-venta__info">\r
          <span class="linea-venta__nombre">{{ detalle.producto.nombre }}</span>\r
          <span class="linea-venta__variante">\r
            {{ detalle.variante.color.nombre }} \xB7 Talla {{ detalle.variante.talla.nombre }} \xB7 x{{ detalle.cantidad }}\r
          </span>\r
        </div>\r
        <span class="linea-venta__subtotal">Bs {{ detalle.subtotal.toFixed(2) }}</span>\r
      </li>\r
    }\r
  </ul>\r
\r
  <div class="venta-resumen__total">\r
    <span>Total</span>\r
    <span class="venta-resumen__total-valor">Bs {{ venta().total.toFixed(2) }}</span>\r
  </div>\r
\r
  <div class="venta-resumen__acciones">\r
    <button type="button" class="btn btn--ghost" (click)="onVolver()">Volver</button>\r
    <button type="button" class="btn btn--primary" (click)="onContinuarPago()">Continuar al pago</button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/cajero/ventas/venta-resumen/venta-resumen.scss */\n:host {\n  display: block;\n}\n.venta-resumen {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 22px;\n}\n.venta-resumen__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--color-border);\n}\n.venta-resumen__titulo {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--color-text);\n}\n.venta-resumen__codigo {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.venta-resumen__reserva {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n  padding: 10px 14px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n  font-size: 13px;\n  color: var(--color-text);\n}\n.venta-resumen__reserva-item strong {\n  font-weight: 700;\n  color: var(--color-text);\n}\n.venta-resumen__lista {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.linea-venta {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.linea-venta + .linea-venta {\n  padding-top: 12px;\n  border-top: 1px dashed var(--color-border);\n}\n.linea-venta__imagen {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.linea-venta__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.linea-venta__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.linea-venta__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.linea-venta__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.linea-venta__variante {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.linea-venta__subtotal {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.venta-resumen__total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.venta-resumen__total-valor {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.venta-resumen__acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.venta-resumen__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 170px;\n}\n@media (max-width: 560px) {\n  .venta-resumen {\n    padding: 16px;\n  }\n  .venta-resumen__acciones {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .venta-resumen__acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=venta-resumen-EDFNS2T5.css.map */\n"] }]
  }], null, { venta: [{ type: Input, args: [{ isSignal: true, alias: "venta", required: true }] }], volver: [{ type: Output, args: ["volver"] }], continuarPago: [{ type: Output, args: ["continuarPago"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentaResumen, { className: "VentaResumen", filePath: "src/app/features/cajero/ventas/venta-resumen/venta-resumen.ts", lineNumber: 24 });
})();

// src/app/features/cajero/ventas/venta-directa/venta-directa.ts
var _c0 = () => [1, 2];
var _forTrack02 = ($index, $item) => $item.producto_variante_id;
function VentaDirecta_Conditional_1_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function VentaDirecta_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, VentaDirecta_Conditional_1_Conditional_9_For_2_Template, 1, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function VentaDirecta_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('Sin resultados para "', ctx_r1.termino(), '".');
  }
}
function VentaDirecta_Conditional_1_Conditional_11_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const resultado_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(resultado_r4.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", resultado_r4.producto.nombre);
  }
}
function VentaDirecta_Conditional_1_Conditional_11_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-icon", 27);
    \u0275\u0275elementEnd();
  }
}
function VentaDirecta_Conditional_1_Conditional_11_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resultado_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", resultado_r4.porcentaje_descuento, "%");
  }
}
function VentaDirecta_Conditional_1_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "div", 16);
    \u0275\u0275conditionalCreate(2, VentaDirecta_Conditional_1_Conditional_11_For_2_Conditional_2_Template, 1, 2, "img", 17)(3, VentaDirecta_Conditional_1_Conditional_11_For_2_Conditional_3_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "span", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, VentaDirecta_Conditional_1_Conditional_11_For_2_Conditional_14_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 26);
    \u0275\u0275listener("click", function VentaDirecta_Conditional_1_Conditional_11_For_2_Template_button_click_15_listener() {
      const resultado_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.agregarLinea(resultado_r4));
    });
    \u0275\u0275text(16, " Agregar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resultado_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(resultado_r4.producto.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(resultado_r4.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", resultado_r4.variante.color.nombre, " \xB7 Talla ", resultado_r4.variante.talla.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Stock disponible: ", resultado_r4.disponible);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Bs ", resultado_r4.precio_unitario.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275conditional(resultado_r4.en_promocion ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", resultado_r4.disponible <= 0);
  }
}
function VentaDirecta_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, VentaDirecta_Conditional_1_Conditional_11_For_2_Template, 17, 8, "li", 15, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.resultados());
  }
}
function VentaDirecta_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 14);
    \u0275\u0275text(2, "Todav\xEDa no agregaste ninguna prenda.");
    \u0275\u0275elementEnd()();
  }
}
function VentaDirecta_Conditional_1_Conditional_16_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const linea_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", linea_r6.porcentaje_descuento, "%");
  }
}
function VentaDirecta_Conditional_1_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 29)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "button", 36);
    \u0275\u0275listener("click", function VentaDirecta_Conditional_1_Conditional_16_For_2_Template_button_click_7_listener() {
      const linea_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decrementar(linea_r6));
    });
    \u0275\u0275text(8, " \u2212 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 38);
    \u0275\u0275listener("click", function VentaDirecta_Conditional_1_Conditional_16_For_2_Template_button_click_11_listener() {
      const linea_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.incrementar(linea_r6));
    });
    \u0275\u0275text(12, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 39);
    \u0275\u0275text(14);
    \u0275\u0275conditionalCreate(15, VentaDirecta_Conditional_1_Conditional_16_For_2_Conditional_15_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 41);
    \u0275\u0275listener("click", function VentaDirecta_Conditional_1_Conditional_16_For_2_Template_button_click_18_listener() {
      const linea_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.eliminarLinea(linea_r6));
    });
    \u0275\u0275text(19, "Eliminar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const linea_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(linea_r6.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", linea_r6.variante.color.nombre, " \xB7 Talla ", linea_r6.variante.talla.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", linea_r6.cantidad <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(linea_r6.cantidad);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", linea_r6.cantidad >= linea_r6.disponible);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Bs ", linea_r6.precio_unitario.toFixed(2), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(linea_r6.en_promocion ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", (linea_r6.precio_unitario * linea_r6.cantidad).toFixed(2));
  }
}
function VentaDirecta_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 28);
    \u0275\u0275repeaterCreate(1, VentaDirecta_Conditional_1_Conditional_16_For_2_Template, 20, 9, "li", 29, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "span");
    \u0275\u0275text(5, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.lineas());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Bs ", ctx_r1.total().toFixed(2));
  }
}
function VentaDirecta_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1");
    \u0275\u0275text(2, "Nueva venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Busca las prendas y arma la venta directa.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "input", 4);
    \u0275\u0275listener("input", function VentaDirecta_Conditional_1_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizarTermino($event.target.value));
    })("keyup.enter", function VentaDirecta_Conditional_1_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buscar());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function VentaDirecta_Conditional_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buscar());
    });
    \u0275\u0275text(8, "Buscar");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, VentaDirecta_Conditional_1_Conditional_9_Template, 3, 1, "div", 6)(10, VentaDirecta_Conditional_1_Conditional_10_Template, 3, 1, "div", 7)(11, VentaDirecta_Conditional_1_Conditional_11_Template, 3, 0, "ul", 6);
    \u0275\u0275elementStart(12, "div", 8)(13, "span", 9);
    \u0275\u0275text(14, "Detalle de la venta");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, VentaDirecta_Conditional_1_Conditional_15_Template, 3, 0, "div", 7)(16, VentaDirecta_Conditional_1_Conditional_16_Template, 8, 1);
    \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
    \u0275\u0275listener("click", function VentaDirecta_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVolverAlPanel());
    });
    \u0275\u0275text(19, "Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 12);
    \u0275\u0275listener("click", function VentaDirecta_Conditional_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registrarVenta());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.termino());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.buscando() ? 9 : ctx_r1.seBusco() && ctx_r1.resultados().length === 0 ? 10 : ctx_r1.resultados().length > 0 ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.lineas().length === 0 ? 15 : 16);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.lineas().length === 0 || ctx_r1.registrando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.registrando() ? "Registrando..." : "Registrar venta", " ");
  }
}
function VentaDirecta_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1");
    \u0275\u0275text(2, "Venta registrada");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "app-venta-resumen", 42);
    \u0275\u0275listener("volver", function VentaDirecta_Conditional_2_Template_app_venta_resumen_volver_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVolverAlPanel());
    })("continuarPago", function VentaDirecta_Conditional_2_Template_app_venta_resumen_continuarPago_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirModalPago());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("venta", ctx_r1.ventaCreada());
  }
}
function VentaDirecta_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-procesar-pago", 43);
    \u0275\u0275listener("cerrar", function VentaDirecta_Conditional_3_Template_app_procesar_pago_cerrar_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalPago());
    })("pagoRegistrado", function VentaDirecta_Conditional_3_Template_app_procesar_pago_pagoRegistrado_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPagoRegistrado());
    })("nuevaVenta", function VentaDirecta_Conditional_3_Template_app_procesar_pago_nuevaVenta_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNuevaVentaDesdeModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("venta", ctx_r1.ventaCreada());
  }
}
var VentaDirecta = class _VentaDirecta {
  service = inject(VentaPresencialService);
  toast = inject(ToastService);
  router = inject(Router);
  resolveMediaUrl = resolveMediaUrl;
  paso = signal(
    "armando",
    ...ngDevMode ? [{ debugName: "paso" }] : (
      /* istanbul ignore next */
      []
    )
  );
  termino = signal(
    "",
    ...ngDevMode ? [{ debugName: "termino" }] : (
      /* istanbul ignore next */
      []
    )
  );
  buscando = signal(
    false,
    ...ngDevMode ? [{ debugName: "buscando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  seBusco = signal(
    false,
    ...ngDevMode ? [{ debugName: "seBusco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resultados = signal(
    [],
    ...ngDevMode ? [{ debugName: "resultados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  lineas = signal(
    [],
    ...ngDevMode ? [{ debugName: "lineas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  registrando = signal(
    false,
    ...ngDevMode ? [{ debugName: "registrando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ventaCreada = signal(
    null,
    ...ngDevMode ? [{ debugName: "ventaCreada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalPagoAbierto = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalPagoAbierto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  total = computed(
    () => this.lineas().reduce((acumulado, linea) => acumulado + linea.precio_unitario * linea.cantidad, 0),
    ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    )
  );
  actualizarTermino(valor) {
    this.termino.set(valor);
  }
  buscar() {
    const nombre = this.termino().trim();
    if (!nombre) {
      this.resultados.set([]);
      this.seBusco.set(false);
      return;
    }
    this.buscando.set(true);
    this.service.buscarProductos(nombre).subscribe({
      next: (resultados) => {
        this.resultados.set(resultados);
        this.buscando.set(false);
        this.seBusco.set(true);
      },
      error: () => {
        this.buscando.set(false);
        this.seBusco.set(true);
        this.resultados.set([]);
        this.toast.error("No se pudo buscar productos. Int\xE9ntalo nuevamente.");
      }
    });
  }
  agregarLinea(resultado) {
    if (resultado.disponible <= 0) {
      return;
    }
    const yaExiste = this.lineas().some((l) => l.producto_variante_id === resultado.producto_variante_id);
    if (yaExiste) {
      this._incrementarPorId(resultado.producto_variante_id);
      return;
    }
    this.lineas.update((lineas) => [
      ...lineas,
      {
        producto_variante_id: resultado.producto_variante_id,
        producto: resultado.producto,
        variante: resultado.variante,
        precio_unitario: resultado.precio_unitario,
        en_promocion: resultado.en_promocion,
        porcentaje_descuento: resultado.porcentaje_descuento,
        disponible: resultado.disponible,
        cantidad: 1
      }
    ]);
  }
  incrementar(linea) {
    this._incrementarPorId(linea.producto_variante_id);
  }
  decrementar(linea) {
    if (linea.cantidad <= 1) {
      return;
    }
    this.lineas.update((lineas) => lineas.map((l) => l.producto_variante_id === linea.producto_variante_id ? __spreadProps(__spreadValues({}, l), { cantidad: l.cantidad - 1 }) : l));
  }
  eliminarLinea(linea) {
    this.lineas.update((lineas) => lineas.filter((l) => l.producto_variante_id !== linea.producto_variante_id));
  }
  registrarVenta() {
    if (this.lineas().length === 0 || this.registrando()) {
      return;
    }
    this.registrando.set(true);
    const payload = {
      items: this.lineas().map((l) => ({ producto_variante_id: l.producto_variante_id, cantidad: l.cantidad }))
    };
    this.service.crearVentaDirecta(payload).subscribe({
      next: (venta) => {
        this.registrando.set(false);
        this.ventaCreada.set(venta);
        this.paso.set("resumen");
      },
      error: (err) => {
        this.registrando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo registrar la venta. Int\xE9ntalo nuevamente.");
      }
    });
  }
  onVolverAlPanel() {
    this.router.navigateByUrl("/cajero/reservas-pendientes");
  }
  abrirModalPago() {
    this.modalPagoAbierto.set(true);
  }
  cerrarModalPago() {
    this.modalPagoAbierto.set(false);
  }
  onPagoRegistrado() {
    this.router.navigateByUrl("/cajero/reservas-pendientes");
  }
  onNuevaVentaDesdeModal() {
    this.modalPagoAbierto.set(false);
    this.paso.set("armando");
    this.lineas.set([]);
    this.ventaCreada.set(null);
    this.resultados.set([]);
    this.termino.set("");
    this.seBusco.set(false);
  }
  _incrementarPorId(varianteId) {
    const linea = this.lineas().find((l) => l.producto_variante_id === varianteId);
    if (!linea) {
      return;
    }
    if (linea.cantidad >= linea.disponible) {
      this.toast.error("No hay m\xE1s disponibilidad para esa prenda.");
      return;
    }
    this.lineas.update((lineas) => lineas.map((l) => l.producto_variante_id === varianteId ? __spreadProps(__spreadValues({}, l), { cantidad: l.cantidad + 1 }) : l));
  }
  static \u0275fac = function VentaDirecta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VentaDirecta)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentaDirecta, selectors: [["app-venta-directa"]], decls: 4, vars: 2, consts: [[1, "cajero-content"], [3, "venta"], [1, "page-header"], [1, "buscador"], ["type", "text", "placeholder", "Buscar producto por nombre...", 1, "buscador__input", 3, "input", "keyup.enter", "value"], ["type", "button", 1, "btn", "btn--primary", "buscador__boton", 3, "click"], [1, "resultados-lista"], [1, "state-block"], [1, "detalle-venta"], [1, "detalle-venta__titulo"], [1, "detalle-venta__acciones"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "skeleton-linea"], [1, "state-block__title"], [1, "resultado-item"], [1, "resultado-item__imagen"], [3, "src", "alt"], [1, "resultado-item__placeholder"], [1, "resultado-item__info"], [1, "resultado-item__nombre"], [1, "resultado-item__variante"], [1, "resultado-item__stock"], [1, "resultado-item__precios"], [1, "resultado-item__precio"], [1, "precio-descuento"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["name", "products", 2, "width", "20px", "height", "20px"], [1, "lineas-lista"], [1, "linea-detalle"], [1, "detalle-venta__total"], [1, "detalle-venta__total-valor"], [1, "linea-detalle__info"], [1, "linea-detalle__nombre"], [1, "linea-detalle__variante"], [1, "cantidad-control"], ["type", "button", "aria-label", "Disminuir cantidad", 1, "cantidad-control__btn", 3, "click", "disabled"], [1, "cantidad-control__valor"], ["type", "button", "aria-label", "Aumentar cantidad", 1, "cantidad-control__btn", 3, "click", "disabled"], [1, "linea-detalle__precio"], [1, "linea-detalle__subtotal"], ["type", "button", 1, "linea-detalle__eliminar", 3, "click"], [3, "volver", "continuarPago", "venta"], [3, "cerrar", "pagoRegistrado", "nuevaVenta", "venta"]], template: function VentaDirecta_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, VentaDirecta_Conditional_1_Template, 22, 5)(2, VentaDirecta_Conditional_2_Template, 4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, VentaDirecta_Conditional_3_Template, 1, 1, "app-procesar-pago", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.paso() === "armando" ? 1 : ctx.paso() === "resumen" && ctx.ventaCreada() ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modalPagoAbierto() && ctx.ventaCreada() ? 3 : -1);
    }
  }, dependencies: [Icon, VentaResumen, ProcesarPago], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.cajero-content[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.buscador[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.buscador__input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 11px 14px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 14px;\n  color: var(--%NS%color-text);\n}\n.buscador__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.buscador__boton[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  min-width: 110px;\n}\n.resultados-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.resultado-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.resultado-item__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.resultado-item__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.resultado-item__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.resultado-item__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.resultado-item__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.resultado-item__variante[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.resultado-item__stock[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.resultado-item__precio[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  white-space: nowrap;\n}\n.resultado-item__precios[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.precio-descuento[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.detalle-venta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 18px;\n}\n.detalle-venta__titulo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.lineas-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.linea-detalle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.linea-detalle[_ngcontent-%COMP%]    + .linea-detalle[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.linea-detalle__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.linea-detalle__nombre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.linea-detalle__variante[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.linea-detalle__precio[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n  white-space: nowrap;\n}\n.linea-detalle__subtotal[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  white-space: nowrap;\n  min-width: 70px;\n  text-align: right;\n}\n.linea-detalle__eliminar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: none;\n  background: none;\n  padding: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: underline;\n}\n.linea-detalle__eliminar[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-danger);\n}\n.cantidad-control[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 3px 5px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 999px;\n  background: var(--%NS%color-bg);\n}\n.cantidad-control__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border: none;\n  border-radius: 50%;\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-primary);\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1;\n  box-shadow: var(--%NS%shadow-soft);\n}\n.cantidad-control__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cantidad-control__valor[_ngcontent-%COMP%] {\n  min-width: 14px;\n  text-align: center;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.detalle-venta__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.detalle-venta__total-valor[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.detalle-venta__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.detalle-venta__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 170px;\n}\n.skeleton-linea[_ngcontent-%COMP%] {\n  height: 68px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 560px) {\n  .buscador[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .buscador__boton[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .resultado-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .resultado-item__precio[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: right;\n  }\n  .resultado-item__precios[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .resultado-item[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .linea-detalle[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .linea-detalle__subtotal[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .detalle-venta__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .detalle-venta__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=venta-directa-5SBNOTP2.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentaDirecta, [{
    type: Component,
    args: [{ selector: "app-venta-directa", imports: [Icon, VentaResumen, ProcesarPago], template: `<div class="cajero-content">\r
  @if (paso() === 'armando') {\r
      <div class="page-header">\r
        <h1>Nueva venta</h1>\r
        <p>Busca las prendas y arma la venta directa.</p>\r
      </div>\r
\r
      <div class="buscador">\r
        <input\r
          type="text"\r
          class="buscador__input"\r
          placeholder="Buscar producto por nombre..."\r
          [value]="termino()"\r
          (input)="actualizarTermino($any($event.target).value)"\r
          (keyup.enter)="buscar()"\r
        />\r
        <button type="button" class="btn btn--primary buscador__boton" (click)="buscar()">Buscar</button>\r
      </div>\r
\r
      @if (buscando()) {\r
        <div class="resultados-lista">\r
          @for (i of [1, 2]; track i) {\r
            <div class="skeleton-linea"></div>\r
          }\r
        </div>\r
      } @else if (seBusco() && resultados().length === 0) {\r
        <div class="state-block">\r
          <span class="state-block__title">Sin resultados para "{{ termino() }}".</span>\r
        </div>\r
      } @else if (resultados().length > 0) {\r
        <ul class="resultados-lista">\r
          @for (resultado of resultados(); track resultado.producto_variante_id) {\r
            <li class="resultado-item">\r
              <div class="resultado-item__imagen">\r
                @if (resultado.producto.imagen_principal_url) {\r
                  <img [src]="resolveMediaUrl(resultado.producto.imagen_principal_url)" [alt]="resultado.producto.nombre" />\r
                } @else {\r
                  <div class="resultado-item__placeholder">\r
                    <app-icon name="products" style="width: 20px; height: 20px" />\r
                  </div>\r
                }\r
              </div>\r
              <div class="resultado-item__info">\r
                <span class="resultado-item__nombre">{{ resultado.producto.nombre }}</span>\r
                <span class="resultado-item__variante">\r
                  {{ resultado.variante.color.nombre }} \xB7 Talla {{ resultado.variante.talla.nombre }}\r
                </span>\r
                <span class="resultado-item__stock">Stock disponible: {{ resultado.disponible }}</span>\r
              </div>\r
              <div class="resultado-item__precios">\r
                <span class="resultado-item__precio">Bs {{ resultado.precio_unitario.toFixed(2) }}</span>\r
                @if (resultado.en_promocion) {\r
                  <span class="precio-descuento">-{{ resultado.porcentaje_descuento }}%</span>\r
                }\r
              </div>\r
              <button\r
                type="button"\r
                class="btn btn--primary btn--sm"\r
                [disabled]="resultado.disponible <= 0"\r
                (click)="agregarLinea(resultado)"\r
              >\r
                Agregar\r
              </button>\r
            </li>\r
          }\r
        </ul>\r
      }\r
\r
      <div class="detalle-venta">\r
        <span class="detalle-venta__titulo">Detalle de la venta</span>\r
\r
        @if (lineas().length === 0) {\r
          <div class="state-block">\r
            <span class="state-block__title">Todav\xEDa no agregaste ninguna prenda.</span>\r
          </div>\r
        } @else {\r
          <ul class="lineas-lista">\r
            @for (linea of lineas(); track linea.producto_variante_id) {\r
              <li class="linea-detalle">\r
                <div class="linea-detalle__info">\r
                  <span class="linea-detalle__nombre">{{ linea.producto.nombre }}</span>\r
                  <span class="linea-detalle__variante">\r
                    {{ linea.variante.color.nombre }} \xB7 Talla {{ linea.variante.talla.nombre }}\r
                  </span>\r
                </div>\r
\r
                <div class="cantidad-control">\r
                  <button\r
                    type="button"\r
                    class="cantidad-control__btn"\r
                    [disabled]="linea.cantidad <= 1"\r
                    (click)="decrementar(linea)"\r
                    aria-label="Disminuir cantidad"\r
                  >\r
                    \u2212\r
                  </button>\r
                  <span class="cantidad-control__valor">{{ linea.cantidad }}</span>\r
                  <button\r
                    type="button"\r
                    class="cantidad-control__btn"\r
                    [disabled]="linea.cantidad >= linea.disponible"\r
                    (click)="incrementar(linea)"\r
                    aria-label="Aumentar cantidad"\r
                  >\r
                    +\r
                  </button>\r
                </div>\r
\r
                <span class="linea-detalle__precio">\r
                  Bs {{ linea.precio_unitario.toFixed(2) }}\r
                  @if (linea.en_promocion) {\r
                    <span class="precio-descuento">-{{ linea.porcentaje_descuento }}%</span>\r
                  }\r
                </span>\r
                <span class="linea-detalle__subtotal">Bs {{ (linea.precio_unitario * linea.cantidad).toFixed(2) }}</span>\r
\r
                <button type="button" class="linea-detalle__eliminar" (click)="eliminarLinea(linea)">Eliminar</button>\r
              </li>\r
            }\r
          </ul>\r
\r
          <div class="detalle-venta__total">\r
            <span>Total</span>\r
            <span class="detalle-venta__total-valor">Bs {{ total().toFixed(2) }}</span>\r
          </div>\r
        }\r
\r
        <div class="detalle-venta__acciones">\r
          <button type="button" class="btn btn--ghost" (click)="onVolverAlPanel()">Volver</button>\r
          <button\r
            type="button"\r
            class="btn btn--primary"\r
            [disabled]="lineas().length === 0 || registrando()"\r
            (click)="registrarVenta()"\r
          >\r
            {{ registrando() ? 'Registrando...' : 'Registrar venta' }}\r
          </button>\r
        </div>\r
      </div>\r
    } @else if (paso() === 'resumen' && ventaCreada()) {\r
      <div class="page-header">\r
        <h1>Venta registrada</h1>\r
      </div>\r
      <app-venta-resumen [venta]="ventaCreada()!" (volver)="onVolverAlPanel()" (continuarPago)="abrirModalPago()" />\r
    }\r
  </div>\r
\r
@if (modalPagoAbierto() && ventaCreada()) {\r
  <app-procesar-pago\r
    [venta]="ventaCreada()!"\r
    (cerrar)="cerrarModalPago()"\r
    (pagoRegistrado)="onPagoRegistrado()"\r
    (nuevaVenta)="onNuevaVentaDesdeModal()"\r
  />\r
}\r
`, styles: ["/* src/app/features/cajero/ventas/venta-directa/venta-directa.scss */\n:host {\n  display: block;\n}\n.cajero-content {\n  max-width: 880px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.buscador {\n  display: flex;\n  gap: 10px;\n}\n.buscador__input {\n  flex: 1;\n  padding: 11px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 14px;\n  color: var(--color-text);\n}\n.buscador__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.buscador__boton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  min-width: 110px;\n}\n.resultados-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.resultado-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.resultado-item__imagen {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.resultado-item__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.resultado-item__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.resultado-item__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.resultado-item__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.resultado-item__variante {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.resultado-item__stock {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.resultado-item__precio {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.resultado-item__precios {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.precio-descuento {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.detalle-venta {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 18px;\n}\n.detalle-venta__titulo {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.lineas-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.linea-detalle {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.linea-detalle + .linea-detalle {\n  padding-top: 10px;\n  border-top: 1px dashed var(--color-border);\n}\n.linea-detalle__info {\n  flex: 1;\n  min-width: 140px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.linea-detalle__nombre {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.linea-detalle__variante {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.linea-detalle__precio {\n  flex-shrink: 0;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  white-space: nowrap;\n}\n.linea-detalle__subtotal {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n  white-space: nowrap;\n  min-width: 70px;\n  text-align: right;\n}\n.linea-detalle__eliminar {\n  flex-shrink: 0;\n  border: none;\n  background: none;\n  padding: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-decoration: underline;\n}\n.linea-detalle__eliminar:hover {\n  color: var(--color-danger);\n}\n.cantidad-control {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 3px 5px;\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  background: var(--color-bg);\n}\n.cantidad-control__btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border: none;\n  border-radius: 50%;\n  background: var(--color-white);\n  color: var(--color-primary);\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1;\n  box-shadow: var(--shadow-soft);\n}\n.cantidad-control__btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cantidad-control__valor {\n  min-width: 14px;\n  text-align: center;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.detalle-venta__total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.detalle-venta__total-valor {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.detalle-venta__acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.detalle-venta__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 170px;\n}\n.skeleton-linea {\n  height: 68px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 560px) {\n  .buscador {\n    flex-direction: column;\n  }\n  .buscador__boton {\n    width: 100%;\n  }\n  .resultado-item {\n    flex-wrap: wrap;\n  }\n  .resultado-item__precio {\n    width: 100%;\n    text-align: right;\n  }\n  .resultado-item__precios {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .resultado-item button.btn {\n    width: 100%;\n  }\n  .linea-detalle {\n    padding-bottom: 10px;\n  }\n  .linea-detalle__subtotal {\n    text-align: left;\n  }\n  .detalle-venta__acciones {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .detalle-venta__acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=venta-directa-5SBNOTP2.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentaDirecta, { className: "VentaDirecta", filePath: "src/app/features/cajero/ventas/venta-directa/venta-directa.ts", lineNumber: 62 });
})();
export {
  VentaDirecta
};
//# debugId=115574d4-1d8e-5898-847e-6902276ddd0e
//# sourceMappingURL=chunk-YBVVGSEY.js.map
