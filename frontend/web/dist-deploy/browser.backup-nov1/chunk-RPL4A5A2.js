import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-PNHCNXB7.js";

// src/app/features/comprobantes/comprobante-detalle/comprobante-detalle.ts
var _forTrack0 = ($index, $item) => $item.producto.id + "-" + $item.variante.id;
function ComprobanteDetalle_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 8);
    \u0275\u0275text(2, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.comprobante().cliente.nombre);
  }
}
function ComprobanteDetalle_For_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const detalle_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.resolveMediaUrl(detalle_r2.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", detalle_r2.producto.nombre);
  }
}
function ComprobanteDetalle_For_40_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-icon", 24);
    \u0275\u0275elementEnd();
  }
}
function ComprobanteDetalle_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "div", 16);
    \u0275\u0275conditionalCreate(2, ComprobanteDetalle_For_40_Conditional_2_Template, 1, 2, "img", 17)(3, ComprobanteDetalle_For_40_Conditional_3_Template, 2, 0, "div", 18);
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
    \u0275\u0275elementStart(11, "span", 23);
    \u0275\u0275text(12);
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
    \u0275\u0275textInterpolate1("Bs ", detalle_r2.precio_unitario.toFixed(2), " c/u");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", detalle_r2.subtotal.toFixed(2));
  }
}
var ComprobanteDetalle = class _ComprobanteDetalle {
  comprobante = input.required(
    ...ngDevMode ? [{ debugName: "comprobante" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resolveMediaUrl = resolveMediaUrl;
  etiquetaMetodo(metodo) {
    const etiquetas = {
      STRIPE: "Stripe",
      EFECTIVO: "Efectivo",
      TARJETA: "Tarjeta",
      QR: "QR"
    };
    return etiquetas[metodo] ?? metodo;
  }
  fecha(iso) {
    const fecha = new Date(iso);
    const dd = String(fecha.getDate()).padStart(2, "0");
    const mm = String(fecha.getMonth() + 1).padStart(2, "0");
    const hh = String(fecha.getHours()).padStart(2, "0");
    const min = String(fecha.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${fecha.getFullYear()} ${hh}:${min}`;
  }
  static \u0275fac = function ComprobanteDetalle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComprobanteDetalle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComprobanteDetalle, selectors: [["app-comprobante-detalle"]], inputs: { comprobante: [1, "comprobante"] }, decls: 46, vars: 8, consts: [[1, "comprobante"], [1, "comprobante__header"], [1, "comprobante__marca"], [1, "comprobante__marca-nombre"], [1, "comprobante__marca-tag"], [1, "comprobante__estado"], [1, "comprobante__datos"], [1, "comprobante__dato", "comprobante__dato--venta"], [1, "comprobante__dato-label"], [1, "comprobante__dato-valor", "comprobante__dato-valor--destacado"], [1, "comprobante__dato"], [1, "comprobante__dato-valor"], [1, "comprobante__productos"], [1, "producto-linea"], [1, "comprobante__total"], [1, "comprobante__total-valor"], [1, "producto-linea__imagen"], [3, "src", "alt"], [1, "producto-linea__placeholder"], [1, "producto-linea__info"], [1, "producto-linea__nombre"], [1, "producto-linea__variante"], [1, "producto-linea__precio"], [1, "producto-linea__subtotal"], ["name", "products", 2, "width", "20px", "height", "20px"]], template: function ComprobanteDetalle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "FASHION");
      \u0275\u0275element(5, "br");
      \u0275\u0275text(6, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "Comprobante interno de compra");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10, "Pagado");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "span", 8);
      \u0275\u0275text(14, "Venta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "span", 8);
      \u0275\u0275text(19, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 11);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(22, ComprobanteDetalle_Conditional_22_Template, 5, 1, "div", 10);
      \u0275\u0275elementStart(23, "div", 10)(24, "span", 8);
      \u0275\u0275text(25, "Sucursal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 11);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 10)(29, "span", 8);
      \u0275\u0275text(30, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 11);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 10)(34, "span", 8);
      \u0275\u0275text(35, "Pago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 11);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "ul", 12);
      \u0275\u0275repeaterCreate(39, ComprobanteDetalle_For_40_Template, 13, 7, "li", 13, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 14)(42, "span");
      \u0275\u0275text(43, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 15);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1(" ", ctx.comprobante().codigo_venta, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.fecha(ctx.comprobante().fecha_creacion));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.comprobante().cliente ? 22 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.comprobante().sucursal.nombre, " (", ctx.comprobante().sucursal.ciudad, ") ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.comprobante().tipo === "DIGITAL" ? "Digital" : "Presencial", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.etiquetaMetodo(ctx.comprobante().metodo_pago));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.comprobante().detalles);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Bs ", ctx.comprobante().total.toFixed(2));
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.comprobante[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 640px;\n  margin: 0 auto;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 24px;\n}\n.comprobante__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.comprobante__marca[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.comprobante__marca-nombre[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-primary);\n}\n.comprobante__marca-tag[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.comprobante__estado[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.comprobante__datos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px 20px;\n}\n.comprobante__dato[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.comprobante__dato--venta[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.comprobante__dato-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-text-secondary);\n}\n.comprobante__dato-valor[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.comprobante__dato-valor--destacado[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.02em;\n}\n.comprobante__productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.producto-linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.producto-linea[_ngcontent-%COMP%]    + .producto-linea[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.producto-linea__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.producto-linea__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.producto-linea__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-linea__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.producto-linea__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.producto-linea__variante[_ngcontent-%COMP%], \n.producto-linea__precio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-linea__subtotal[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  white-space: nowrap;\n}\n.comprobante__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.comprobante__total-valor[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n@media (max-width: 560px) {\n  .comprobante[_ngcontent-%COMP%] {\n    padding: 18px;\n    gap: 14px;\n  }\n  .comprobante__datos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .producto-linea[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .producto-linea__subtotal[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=comprobante-detalle-E5THK5GP.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComprobanteDetalle, [{
    type: Component,
    args: [{ selector: "app-comprobante-detalle", imports: [Icon], template: `<div class="comprobante">\r
  <div class="comprobante__header">\r
    <div class="comprobante__marca">\r
      <span class="comprobante__marca-nombre">FASHION<br />STORE</span>\r
      <span class="comprobante__marca-tag">Comprobante interno de compra</span>\r
    </div>\r
    <span class="comprobante__estado">Pagado</span>\r
  </div>\r
\r
  <div class="comprobante__datos">\r
    <div class="comprobante__dato comprobante__dato--venta">\r
      <span class="comprobante__dato-label">Venta</span>\r
      <span class="comprobante__dato-valor comprobante__dato-valor--destacado">\r
        {{ comprobante().codigo_venta }}\r
      </span>\r
    </div>\r
    <div class="comprobante__dato">\r
      <span class="comprobante__dato-label">Fecha</span>\r
      <span class="comprobante__dato-valor">{{ fecha(comprobante().fecha_creacion) }}</span>\r
    </div>\r
    @if (comprobante().cliente) {\r
      <div class="comprobante__dato">\r
        <span class="comprobante__dato-label">Cliente</span>\r
        <span class="comprobante__dato-valor">{{ comprobante().cliente!.nombre }}</span>\r
      </div>\r
    }\r
    <div class="comprobante__dato">\r
      <span class="comprobante__dato-label">Sucursal</span>\r
      <span class="comprobante__dato-valor">\r
        {{ comprobante().sucursal.nombre }} ({{ comprobante().sucursal.ciudad }})\r
      </span>\r
    </div>\r
    <div class="comprobante__dato">\r
      <span class="comprobante__dato-label">Tipo</span>\r
      <span class="comprobante__dato-valor">\r
        {{ comprobante().tipo === 'DIGITAL' ? 'Digital' : 'Presencial' }}\r
      </span>\r
    </div>\r
    <div class="comprobante__dato">\r
      <span class="comprobante__dato-label">Pago</span>\r
      <span class="comprobante__dato-valor">{{ etiquetaMetodo(comprobante().metodo_pago) }}</span>\r
    </div>\r
  </div>\r
\r
  <ul class="comprobante__productos">\r
    @for (detalle of comprobante().detalles; track detalle.producto.id + '-' + detalle.variante.id) {\r
      <li class="producto-linea">\r
        <div class="producto-linea__imagen">\r
          @if (detalle.producto.imagen_principal_url) {\r
            <img [src]="resolveMediaUrl(detalle.producto.imagen_principal_url)" [alt]="detalle.producto.nombre" />\r
          } @else {\r
            <div class="producto-linea__placeholder">\r
              <app-icon name="products" style="width: 20px; height: 20px" />\r
            </div>\r
          }\r
        </div>\r
        <div class="producto-linea__info">\r
          <span class="producto-linea__nombre">{{ detalle.producto.nombre }}</span>\r
          <span class="producto-linea__variante">\r
            {{ detalle.variante.color.nombre }} \xB7 Talla {{ detalle.variante.talla.nombre }} \xB7 x{{ detalle.cantidad }}\r
          </span>\r
          <span class="producto-linea__precio">Bs {{ detalle.precio_unitario.toFixed(2) }} c/u</span>\r
        </div>\r
        <span class="producto-linea__subtotal">Bs {{ detalle.subtotal.toFixed(2) }}</span>\r
      </li>\r
    }\r
  </ul>\r
\r
  <div class="comprobante__total">\r
    <span>Total</span>\r
    <span class="comprobante__total-valor">Bs {{ comprobante().total.toFixed(2) }}</span>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/comprobantes/comprobante-detalle/comprobante-detalle.scss */\n:host {\n  display: block;\n}\n.comprobante {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 640px;\n  margin: 0 auto;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 24px;\n}\n.comprobante__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n.comprobante__marca {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.comprobante__marca-nombre {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--color-primary);\n}\n.comprobante__marca-tag {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.comprobante__estado {\n  flex-shrink: 0;\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.comprobante__datos {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px 20px;\n}\n.comprobante__dato {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.comprobante__dato--venta {\n  grid-column: 1/-1;\n}\n.comprobante__dato-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-secondary);\n}\n.comprobante__dato-valor {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.comprobante__dato-valor--destacado {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-primary);\n  letter-spacing: 0.02em;\n}\n.comprobante__productos {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.producto-linea {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.producto-linea + .producto-linea {\n  padding-top: 12px;\n  border-top: 1px dashed var(--color-border);\n}\n.producto-linea__imagen {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.producto-linea__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.producto-linea__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.producto-linea__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.producto-linea__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.producto-linea__variante,\n.producto-linea__precio {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.producto-linea__subtotal {\n  flex-shrink: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.comprobante__total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.comprobante__total-valor {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n@media (max-width: 560px) {\n  .comprobante {\n    padding: 18px;\n    gap: 14px;\n  }\n  .comprobante__datos {\n    grid-template-columns: 1fr;\n  }\n  .producto-linea {\n    flex-wrap: wrap;\n  }\n  .producto-linea__subtotal {\n    width: 100%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=comprobante-detalle-E5THK5GP.css.map */\n"] }]
  }], null, { comprobante: [{ type: Input, args: [{ isSignal: true, alias: "comprobante", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComprobanteDetalle, { className: "ComprobanteDetalle", filePath: "src/app/features/comprobantes/comprobante-detalle/comprobante-detalle.ts", lineNumber: 21 });
})();

export {
  ComprobanteDetalle
};
//# debugId=462a6124-24f3-5514-a9e2-13be505165df
//# sourceMappingURL=chunk-RPL4A5A2.js.map
