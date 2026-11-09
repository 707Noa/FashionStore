import {
  PagoElectronicoService
} from "./chunk-DJ5A2SMW.js";
import {
  ActivatedRoute,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PNHCNXB7.js";

// src/app/features/pago-electronico/iniciar-pago/iniciar-pago.ts
function IniciarPago_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275text(2, "El pago no fue completado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "a", 6);
    \u0275\u0275text(7, "Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function IniciarPago_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reintentar());
    });
    \u0275\u0275text(9, "Reintentar pago");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function IniciarPago_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3, "Redirigiendo a la pasarela de pago...");
    \u0275\u0275elementEnd()();
  }
}
var IniciarPago = class _IniciarPago {
  route = inject(ActivatedRoute);
  service = inject(PagoElectronicoService);
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ventaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "ventaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const idParam = this.route.snapshot.queryParamMap.get("venta_id");
    const ventaId = idParam ? Number(idParam) : null;
    if (!ventaId) {
      this.errorMessage.set("No se encontr\xF3 la compra a pagar.");
      return;
    }
    this.ventaId.set(ventaId);
    this._iniciarCheckout(ventaId);
  }
  reintentar() {
    const ventaId = this.ventaId();
    if (!ventaId) {
      return;
    }
    this.errorMessage.set(null);
    this._iniciarCheckout(ventaId);
  }
  _iniciarCheckout(ventaId) {
    this.service.crearCheckout({ venta_id: ventaId }).subscribe({
      next: (sesion) => {
        window.location.href = sesion.checkout_url;
      },
      error: (err) => {
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.errorMessage.set(detalle ?? "No se pudo iniciar el pago. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function IniciarPago_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IniciarPago)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IniciarPago, selectors: [["app-iniciar-pago"]], decls: 4, vars: 1, consts: [[1, "container", "iniciar-pago-page"], [1, "iniciar-pago-ancho"], [1, "state-block", "state-block--error"], [1, "iniciar-pago-cargando"], [1, "state-block__title"], [1, "iniciar-pago-acciones"], ["routerLink", "/carrito", 1, "btn", "btn--ghost"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], [1, "iniciar-pago-spinner"], [1, "iniciar-pago-cargando__texto"]], template: function IniciarPago_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, IniciarPago_Conditional_2_Template, 10, 1, "div", 2)(3, IniciarPago_Conditional_3_Template, 4, 0, "div", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMessage() ? 2 : 3);
    }
  }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.iniciar-pago-page[_ngcontent-%COMP%] {\n  padding-top: 56px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n  min-height: 320px;\n}\n.iniciar-pago-ancho[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n}\n.iniciar-pago-cargando[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 48px 20px;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.iniciar-pago-cargando__texto[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.iniciar-pago-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 3px solid var(--%NS%color-border);\n  border-top-color: var(--%NS%color-primary);\n  animation: _ngcontent-%COMP%_iniciar-pago-girar 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_iniciar-pago-girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.iniciar-pago-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 6px;\n}\n.iniciar-pago-acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 150px;\n}\n@media (max-width: 560px) {\n  .iniciar-pago-page[_ngcontent-%COMP%] {\n    padding-top: 32px;\n  }\n  .iniciar-pago-acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .iniciar-pago-acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=iniciar-pago-VOIF6FC7.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IniciarPago, [{
    type: Component,
    args: [{ selector: "app-iniciar-pago", imports: [RouterLink], template: '<div class="container iniciar-pago-page">\r\n  <div class="iniciar-pago-ancho">\r\n    @if (errorMessage()) {\r\n      <div class="state-block state-block--error">\r\n        <span class="state-block__title">El pago no fue completado.</span>\r\n        <span>{{ errorMessage() }}</span>\r\n        <div class="iniciar-pago-acciones">\r\n          <a routerLink="/carrito" class="btn btn--ghost">Volver</a>\r\n          <button type="button" class="btn btn--primary" (click)="reintentar()">Reintentar pago</button>\r\n        </div>\r\n      </div>\r\n    } @else {\r\n      <div class="iniciar-pago-cargando">\r\n        <span class="iniciar-pago-spinner"></span>\r\n        <span class="iniciar-pago-cargando__texto">Redirigiendo a la pasarela de pago...</span>\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/pago-electronico/iniciar-pago/iniciar-pago.scss */\n:host {\n  display: block;\n}\n.iniciar-pago-page {\n  padding-top: 56px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n  min-height: 320px;\n}\n.iniciar-pago-ancho {\n  width: 100%;\n  max-width: 480px;\n}\n.iniciar-pago-cargando {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 48px 20px;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.iniciar-pago-cargando__texto {\n  font-size: 13.5px;\n  color: var(--color-text-secondary);\n}\n.iniciar-pago-spinner {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 3px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  animation: iniciar-pago-girar 0.8s linear infinite;\n}\n@keyframes iniciar-pago-girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.iniciar-pago-acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 6px;\n}\n.iniciar-pago-acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 150px;\n}\n@media (max-width: 560px) {\n  .iniciar-pago-page {\n    padding-top: 32px;\n  }\n  .iniciar-pago-acciones {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .iniciar-pago-acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=iniciar-pago-VOIF6FC7.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IniciarPago, { className: "IniciarPago", filePath: "src/app/features/pago-electronico/iniciar-pago/iniciar-pago.ts", lineNumber: 29 });
})();
export {
  IniciarPago
};
//# debugId=d68d6b7d-5326-5685-a29e-ab21652da137
//# sourceMappingURL=chunk-74Z5H64E.js.map
