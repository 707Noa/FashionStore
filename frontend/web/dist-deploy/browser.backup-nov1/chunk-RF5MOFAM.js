import {
  FiltroHistorial,
  HistorialComprasService
} from "./chunk-5TYRBE3O.js";
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
  inject,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/cliente/historial-compras/historial-compras.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/comprobante", a0];
var _forTrack0 = ($index, $item) => $item.venta_id;
function HistorialComprasCliente_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function HistorialComprasCliente_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, HistorialComprasCliente_Conditional_7_For_2_Template, 1, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function HistorialComprasCliente_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "No se pudo cargar tu informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function HistorialComprasCliente_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-icon", 8);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "No se encontraron compras.");
    \u0275\u0275elementEnd()();
  }
}
function HistorialComprasCliente_Conditional_10_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const compra_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(compra_r2.leyenda_postventa);
  }
}
function HistorialComprasCliente_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HistorialComprasCliente_Conditional_10_For_2_Conditional_4_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14)(15, "span", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 16);
    \u0275\u0275text(18, "Ver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const compra_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(compra_r2.codigo_venta);
    \u0275\u0275advance();
    \u0275\u0275conditional(compra_r2.leyenda_postventa ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fecha(compra_r2.fecha));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(compra_r2.sucursal.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.etiquetaTipo(compra_r2.tipo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.etiquetaMetodo(compra_r2.metodo_pago));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Bs ", compra_r2.total.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, compra_r2.venta_id));
  }
}
function HistorialComprasCliente_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, HistorialComprasCliente_Conditional_10_For_2_Template, 19, 10, "article", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.compras());
  }
}
var HistorialComprasCliente = class _HistorialComprasCliente {
  service = inject(HistorialComprasService);
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
  compras = signal(
    [],
    ...ngDevMode ? [{ debugName: "compras" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.cargar({});
  }
  cargar(filtro) {
    this.cargando.set(true);
    this.errorMessage.set(null);
    this.service.listarMias(filtro).subscribe({
      next: (compras) => {
        this.cargando.set(false);
        this.compras.set(compras);
      },
      error: (err) => {
        this.cargando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.errorMessage.set(detalle ?? "No se pudieron cargar tus compras. Int\xE9ntalo nuevamente.");
      }
    });
  }
  fecha(iso) {
    const fecha = new Date(iso);
    const dd = String(fecha.getDate()).padStart(2, "0");
    const mm = String(fecha.getMonth() + 1).padStart(2, "0");
    return `${dd}/${mm}/${fecha.getFullYear()}`;
  }
  etiquetaTipo(tipo) {
    return tipo === "DIGITAL" ? "Digital" : "Presencial";
  }
  etiquetaMetodo(metodo) {
    const etiquetas = {
      STRIPE: "Stripe",
      EFECTIVO: "Efectivo",
      TARJETA: "Tarjeta",
      QR: "QR"
    };
    return etiquetas[metodo] ?? metodo;
  }
  static \u0275fac = function HistorialComprasCliente_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistorialComprasCliente)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistorialComprasCliente, selectors: [["app-historial-compras-cliente"]], decls: 11, vars: 1, consts: [[1, "container", "historial-page"], [1, "page-header"], [3, "filtrar"], [1, "compras-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "skeleton-card"], [1, "state-block__title"], ["name", "bag", 2, "width", "28px", "height", "28px"], [1, "compra-card"], [1, "compra-card__header"], [1, "compra-card__codigo"], [1, "compra-card__leyenda"], [1, "compra-card__datos"], [1, "compra-card__footer"], [1, "compra-card__total"], [1, "btn", "btn--primary", "btn--sm", 3, "routerLink"]], template: function HistorialComprasCliente_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Mis compras");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Consulta tus compras realizadas en FashionStore.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-filtro-historial", 2);
      \u0275\u0275listener("filtrar", function HistorialComprasCliente_Template_app_filtro_historial_filtrar_6_listener($event) {
        return ctx.cargar($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, HistorialComprasCliente_Conditional_7_Template, 3, 1, "div", 3)(8, HistorialComprasCliente_Conditional_8_Template, 5, 1, "div", 4)(9, HistorialComprasCliente_Conditional_9_Template, 4, 0, "div", 5)(10, HistorialComprasCliente_Conditional_10_Template, 3, 0, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.cargando() ? 7 : ctx.errorMessage() ? 8 : ctx.compras().length === 0 ? 9 : 10);
    }
  }, dependencies: [RouterLink, Icon, FiltroHistorial], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.historial-page[_ngcontent-%COMP%] {\n  padding: 28px 0 48px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.compras-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.compra-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 16px;\n  transition: box-shadow var(--%NS%transition-fast);\n}\n.compra-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--%NS%shadow-medium);\n}\n.compra-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.compra-card__codigo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.compra-card__leyenda[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.compra-card__datos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.compra-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 10px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.compra-card__total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.compra-card__footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 80px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 150px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_historial-cliente-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_historial-cliente-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 560px) {\n  .compras-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=historial-compras-QYMI2C5M.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistorialComprasCliente, [{
    type: Component,
    args: [{ selector: "app-historial-compras-cliente", imports: [RouterLink, Icon, FiltroHistorial], template: `<div class="container historial-page">\r
  <div class="page-header">\r
    <h1>Mis compras</h1>\r
    <p>Consulta tus compras realizadas en FashionStore.</p>\r
  </div>\r
\r
  <app-filtro-historial (filtrar)="cargar($event)" />\r
\r
  @if (cargando()) {\r
    <div class="compras-grid">\r
      @for (i of [1, 2, 3]; track i) {\r
        <div class="skeleton-card"></div>\r
      }\r
    </div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar tu informaci\xF3n</span>\r
      <span>{{ errorMessage() }}</span>\r
    </div>\r
  } @else if (compras().length === 0) {\r
    <div class="state-block">\r
      <app-icon name="bag" style="width: 28px; height: 28px" />\r
      <span class="state-block__title">No se encontraron compras.</span>\r
    </div>\r
  } @else {\r
    <div class="compras-grid">\r
      @for (compra of compras(); track compra.venta_id) {\r
        <article class="compra-card">\r
          <div class="compra-card__header">\r
            <span class="compra-card__codigo">{{ compra.codigo_venta }}</span>\r
            @if (compra.leyenda_postventa) {\r
              <span class="compra-card__leyenda">{{ compra.leyenda_postventa }}</span>\r
            }\r
          </div>\r
\r
          <div class="compra-card__datos">\r
            <span>{{ fecha(compra.fecha) }}</span>\r
            <span>{{ compra.sucursal.nombre }}</span>\r
            <span>{{ etiquetaTipo(compra.tipo) }}</span>\r
            <span>{{ etiquetaMetodo(compra.metodo_pago) }}</span>\r
          </div>\r
\r
          <div class="compra-card__footer">\r
            <span class="compra-card__total">Bs {{ compra.total.toFixed(2) }}</span>\r
            <a [routerLink]="['/comprobante', compra.venta_id]" class="btn btn--primary btn--sm">Ver</a>\r
          </div>\r
        </article>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/cliente/historial-compras/historial-compras.scss */\n:host {\n  display: block;\n}\n.historial-page {\n  padding: 28px 0 48px;\n}\n.page-header {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.compras-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.compra-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 16px;\n  transition: box-shadow var(--transition-fast);\n}\n.compra-card:hover {\n  box-shadow: var(--shadow-medium);\n}\n.compra-card__header {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.compra-card__codigo {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.compra-card__leyenda {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.compra-card__datos {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.compra-card__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 10px;\n  border-top: 1px dashed var(--color-border);\n}\n.compra-card__total {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.compra-card__footer .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 80px;\n}\n.skeleton-card {\n  height: 150px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: historial-cliente-shimmer 1.4s ease infinite;\n}\n@keyframes historial-cliente-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 560px) {\n  .compras-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=historial-compras-QYMI2C5M.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistorialComprasCliente, { className: "HistorialComprasCliente", filePath: "src/app/features/cliente/historial-compras/historial-compras.ts", lineNumber: 32 });
})();
export {
  HistorialComprasCliente
};
//# debugId=0832032c-c1e1-5d33-aef0-012f2f55af20
//# sourceMappingURL=chunk-RF5MOFAM.js.map
