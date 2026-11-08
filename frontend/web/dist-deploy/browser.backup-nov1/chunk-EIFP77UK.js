import {
  ComprobanteDetalle
} from "./chunk-RPL4A5A2.js";
import {
  ComprobanteService,
  descargarBlob
} from "./chunk-D37JXF2Y.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import "./chunk-VOZDT4OK.js";
import "./chunk-KUJLGORD.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/cajero/comprobantes/comprobante-cajero.ts
function ComprobanteCajero_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function ComprobanteCajero_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2, "No se pudo cargar el comprobante");
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
function ComprobanteCajero_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ComprobanteCajero_Conditional_8_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.enviar());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.enviando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.enviando() ? "Enviando..." : "Enviar", " ");
  }
}
function ComprobanteCajero_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-comprobante-detalle", 5);
    \u0275\u0275elementStart(1, "div", 6)(2, "button", 7);
    \u0275\u0275listener("click", function ComprobanteCajero_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.descargar());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ComprobanteCajero_Conditional_8_Conditional_4_Template, 2, 2, "button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comp_r4 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("comprobante", comp_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.descargando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.descargando() ? "Descargando..." : "Descargar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(comp_r4.cliente ? 4 : -1);
  }
}
var ComprobanteCajero = class _ComprobanteCajero {
  route = inject(ActivatedRoute);
  service = inject(ComprobanteService);
  toast = inject(ToastService);
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
  comprobante = signal(
    null,
    ...ngDevMode ? [{ debugName: "comprobante" }] : (
      /* istanbul ignore next */
      []
    )
  );
  descargando = signal(
    false,
    ...ngDevMode ? [{ debugName: "descargando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviando = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const ventaId = Number(this.route.snapshot.paramMap.get("ventaId"));
    if (!ventaId) {
      this.cargando.set(false);
      this.errorMessage.set("Comprobante no encontrado.");
      return;
    }
    this.service.obtener(ventaId).subscribe({
      next: (comprobante) => {
        this.cargando.set(false);
        this.comprobante.set(comprobante);
      },
      error: (err) => {
        this.cargando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.errorMessage.set(detalle ?? "No se pudo cargar el comprobante. Int\xE9ntalo nuevamente.");
      }
    });
  }
  descargar() {
    const comprobante = this.comprobante();
    if (!comprobante || this.descargando()) {
      return;
    }
    this.descargando.set(true);
    this.service.descargarPdf(comprobante.venta_id).subscribe({
      next: (blob) => {
        this.descargando.set(false);
        descargarBlob(blob, `${comprobante.codigo_venta}.pdf`);
      },
      error: () => {
        this.descargando.set(false);
        this.toast.error("No se pudo descargar el comprobante. Int\xE9ntalo nuevamente.");
      }
    });
  }
  enviar() {
    const comprobante = this.comprobante();
    if (!comprobante || this.enviando()) {
      return;
    }
    this.enviando.set(true);
    this.service.enviar(comprobante.venta_id).subscribe({
      next: (respuesta) => {
        this.enviando.set(false);
        if (respuesta.enviado) {
          this.toast.brand(respuesta.mensaje);
        } else {
          this.toast.error(respuesta.mensaje);
        }
      },
      error: (err) => {
        this.enviando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo enviar el comprobante. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function ComprobanteCajero_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComprobanteCajero)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComprobanteCajero, selectors: [["app-comprobante-cajero"]], decls: 9, vars: 1, consts: [[1, "cajero-content"], [1, "page-header"], [1, "skeleton-comprobante"], [1, "state-block", "state-block--error"], [1, "state-block__title"], [3, "comprobante"], [1, "comprobante-page__acciones"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"]], template: function ComprobanteCajero_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Comprobante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Detalle de la venta ya pagada.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ComprobanteCajero_Conditional_6_Template, 1, 0, "div", 2)(7, ComprobanteCajero_Conditional_7_Template, 5, 1, "div", 3)(8, ComprobanteCajero_Conditional_8_Template, 5, 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.cargando() ? 6 : ctx.errorMessage() ? 7 : (tmp_0_0 = ctx.comprobante()) ? 8 : -1, tmp_0_0);
    }
  }, dependencies: [ComprobanteDetalle], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.cajero-content[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.comprobante-page__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  margin-top: 20px;\n}\n.comprobante-page__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 140px;\n}\n.skeleton-comprobante[_ngcontent-%COMP%] {\n  max-width: 640px;\n  height: 420px;\n  margin: 0 auto;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_comprobante-cajero-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_comprobante-cajero-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 560px) {\n  .comprobante-page__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .comprobante-page__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobante-cajero-LEGAP2ZI.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComprobanteCajero, [{
    type: Component,
    args: [{ selector: "app-comprobante-cajero", imports: [ComprobanteDetalle], template: `<div class="cajero-content">\r
  <div class="page-header">\r
    <h1>Comprobante</h1>\r
    <p>Detalle de la venta ya pagada.</p>\r
  </div>\r
\r
  @if (cargando()) {\r
    <div class="skeleton-comprobante"></div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar el comprobante</span>\r
      <span>{{ errorMessage() }}</span>\r
    </div>\r
  } @else if (comprobante(); as comp) {\r
    <app-comprobante-detalle [comprobante]="comp" />\r
\r
    <div class="comprobante-page__acciones">\r
      <button type="button" class="btn btn--primary" [disabled]="descargando()" (click)="descargar()">\r
        {{ descargando() ? 'Descargando...' : 'Descargar' }}\r
      </button>\r
      @if (comp.cliente) {\r
        <button type="button" class="btn btn--ghost" [disabled]="enviando()" (click)="enviar()">\r
          {{ enviando() ? 'Enviando...' : 'Enviar' }}\r
        </button>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/cajero/comprobantes/comprobante-cajero.scss */\n:host {\n  display: block;\n}\n.cajero-content {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.comprobante-page__acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  margin-top: 20px;\n}\n.comprobante-page__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 140px;\n}\n.skeleton-comprobante {\n  max-width: 640px;\n  height: 420px;\n  margin: 0 auto;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: comprobante-cajero-shimmer 1.4s ease infinite;\n}\n@keyframes comprobante-cajero-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 560px) {\n  .comprobante-page__acciones {\n    flex-direction: column-reverse;\n  }\n  .comprobante-page__acciones .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobante-cajero-LEGAP2ZI.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComprobanteCajero, { className: "ComprobanteCajero", filePath: "src/app/features/cajero/comprobantes/comprobante-cajero.ts", lineNumber: 32 });
})();
export {
  ComprobanteCajero
};
//# debugId=55525b16-8b34-578b-b436-ae3a98dc85ee
//# sourceMappingURL=chunk-EIFP77UK.js.map
