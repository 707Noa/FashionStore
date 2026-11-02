import {
  PagoElectronicoService
} from "./chunk-DJ5A2SMW.js";
import {
  ComprobanteService
} from "./chunk-D37JXF2Y.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/pago-electronico/resultado-pago/resultado-pago.ts
var _c0 = (a0) => ["/comprobante", a0];
var _c1 = () => ["/pago/iniciar"];
var _c2 = (a0) => ({ venta_id: a0 });
function ResultadoPago_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "span", 5);
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "Verificando tu pago...");
    \u0275\u0275elementEnd()();
  }
}
function ResultadoPago_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-icon", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "Compra realizada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "Pago realizado correctamente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11, "Enviamos el comprobante a tu correo registrado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13)(13, "span", 14);
    \u0275\u0275text(14, "Retiro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 17)(20, "a", 18);
    \u0275\u0275text(21, "Ver comprobante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 19);
    \u0275\u0275text(23, "Seguir comprando");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.venta().codigo_venta);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Total: Bs ", ctx_r0.venta().total.toFixed(2));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.venta().sucursal.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.venta().sucursal.ciudad);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, ctx_r0.venta().id));
  }
}
function ResultadoPago_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1, " Reintentar pago ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c1))("queryParams", \u0275\u0275pureFunction1(3, _c2, ctx_r0.ventaId()));
  }
}
function ResultadoPago_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 20);
    \u0275\u0275text(2, "El pago no fue completado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "a", 22);
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ResultadoPago_Conditional_4_Conditional_6_Template, 2, 5, "a", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.ventaId() ? 6 : -1);
  }
}
var ResultadoPago = class _ResultadoPago {
  route = inject(ActivatedRoute);
  service = inject(PagoElectronicoService);
  comprobanteService = inject(ComprobanteService);
  estado = signal(
    "verificando",
    ...ngDevMode ? [{ debugName: "estado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  venta = signal(
    null,
    ...ngDevMode ? [{ debugName: "venta" }] : (
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
    const params = this.route.snapshot.queryParamMap;
    const ventaIdParam = params.get("venta_id");
    this.ventaId.set(ventaIdParam ? Number(ventaIdParam) : null);
    if (params.get("cancelado") === "1") {
      this.estado.set("no-completado");
      return;
    }
    const sessionId = params.get("session_id");
    if (!sessionId) {
      this.estado.set("no-completado");
      return;
    }
    this.service.verificarPago({ session_id: sessionId }).subscribe({
      next: (venta) => {
        this.venta.set(venta);
        this.estado.set("pagado");
        this.comprobanteService.enviar(venta.id).subscribe({ error: () => void 0 });
      },
      error: () => {
        this.estado.set("no-completado");
      }
    });
  }
  static \u0275fac = function ResultadoPago_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResultadoPago)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResultadoPago, selectors: [["app-resultado-pago"]], decls: 5, vars: 1, consts: [[1, "container", "resultado-pago-page"], [1, "resultado-pago-ancho"], [1, "resultado-pago-cargando"], [1, "compra-realizada"], [1, "state-block", "state-block--error"], [1, "resultado-pago-spinner"], [1, "resultado-pago-cargando__texto"], ["name", "bag", 2, "width", "34px", "height", "34px"], [1, "compra-realizada__titulo"], [1, "compra-realizada__codigo"], [1, "compra-realizada__mensaje"], [1, "compra-realizada__total"], [1, "compra-realizada__correo"], [1, "compra-realizada__retiro"], [1, "compra-realizada__retiro-label"], [1, "compra-realizada__retiro-sucursal"], [1, "compra-realizada__retiro-ciudad"], [1, "compra-realizada__acciones"], [1, "btn", "btn--ghost", 3, "routerLink"], ["routerLink", "/home/catalogo", 1, "btn", "btn--primary"], [1, "state-block__title"], [1, "resultado-pago-acciones"], ["routerLink", "/carrito", 1, "btn", "btn--ghost"], [1, "btn", "btn--primary", 3, "routerLink", "queryParams"]], template: function ResultadoPago_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ResultadoPago_Conditional_2_Template, 4, 0, "div", 2)(3, ResultadoPago_Conditional_3_Template, 24, 7, "div", 3)(4, ResultadoPago_Conditional_4_Template, 7, 1, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.estado() === "verificando" ? 2 : ctx.estado() === "pagado" && ctx.venta() ? 3 : 4);
    }
  }, dependencies: [Icon, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.resultado-pago-page[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n  min-height: 320px;\n}\n.resultado-pago-ancho[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n}\n.resultado-pago-cargando[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 48px 20px;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.resultado-pago-cargando__texto[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.resultado-pago-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 3px solid var(--%NS%color-border);\n  border-top-color: var(--%NS%color-primary);\n  animation: _ngcontent-%COMP%_resultado-pago-girar 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_resultado-pago-girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.resultado-pago-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n.resultado-pago-acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 150px;\n}\n.compra-realizada[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 48px 24px;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.compra-realizada[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  margin-bottom: 4px;\n}\n.compra-realizada__titulo[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.compra-realizada__codigo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.03em;\n}\n.compra-realizada__mensaje[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.compra-realizada__total[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.compra-realizada__retiro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 100%;\n  margin: 14px 0 6px;\n  padding: 14px 16px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n}\n.compra-realizada__retiro-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--%NS%color-text-secondary);\n}\n.compra-realizada__retiro-sucursal[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.compra-realizada__retiro-ciudad[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.compra-realizada__correo[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.compra-realizada__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 14px;\n}\n.compra-realizada__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 160px;\n}\n@media (max-width: 560px) {\n  .resultado-pago-page[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .resultado-pago-acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .resultado-pago-acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .compra-realizada[_ngcontent-%COMP%] {\n    padding: 40px 18px;\n  }\n  .compra-realizada__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    width: 100%;\n  }\n  .compra-realizada__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=resultado-pago-6S4UBPUH.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultadoPago, [{
    type: Component,
    args: [{ selector: "app-resultado-pago", imports: [Icon, RouterLink], template: `<div class="container resultado-pago-page">\r
  <div class="resultado-pago-ancho">\r
    @if (estado() === 'verificando') {\r
      <div class="resultado-pago-cargando">\r
        <span class="resultado-pago-spinner"></span>\r
        <span class="resultado-pago-cargando__texto">Verificando tu pago...</span>\r
      </div>\r
    } @else if (estado() === 'pagado' && venta()) {\r
      <div class="compra-realizada">\r
        <app-icon name="bag" style="width: 34px; height: 34px" />\r
        <span class="compra-realizada__titulo">Compra realizada</span>\r
        <span class="compra-realizada__codigo">{{ venta()!.codigo_venta }}</span>\r
        <span class="compra-realizada__mensaje">Pago realizado correctamente</span>\r
        <span class="compra-realizada__total">Total: Bs {{ venta()!.total.toFixed(2) }}</span>\r
        <span class="compra-realizada__correo">Enviamos el comprobante a tu correo registrado.</span>\r
\r
        <div class="compra-realizada__retiro">\r
          <span class="compra-realizada__retiro-label">Retiro</span>\r
          <span class="compra-realizada__retiro-sucursal">{{ venta()!.sucursal.nombre }}</span>\r
          <span class="compra-realizada__retiro-ciudad">{{ venta()!.sucursal.ciudad }}</span>\r
        </div>\r
\r
        <div class="compra-realizada__acciones">\r
          <a [routerLink]="['/comprobante', venta()!.id]" class="btn btn--ghost">Ver comprobante</a>\r
          <a routerLink="/home/catalogo" class="btn btn--primary">Seguir comprando</a>\r
        </div>\r
      </div>\r
    } @else {\r
      <div class="state-block state-block--error">\r
        <span class="state-block__title">El pago no fue completado.</span>\r
        <div class="resultado-pago-acciones">\r
          <a routerLink="/carrito" class="btn btn--ghost">Volver</a>\r
          @if (ventaId()) {\r
            <a [routerLink]="['/pago/iniciar']" [queryParams]="{ venta_id: ventaId() }" class="btn btn--primary">\r
              Reintentar pago\r
            </a>\r
          }\r
        </div>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/pago-electronico/resultado-pago/resultado-pago.scss */\n:host {\n  display: block;\n}\n.resultado-pago-page {\n  padding-top: 40px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n  min-height: 320px;\n}\n.resultado-pago-ancho {\n  width: 100%;\n  max-width: 480px;\n}\n.resultado-pago-cargando {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 48px 20px;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.resultado-pago-cargando__texto {\n  font-size: 13.5px;\n  color: var(--color-text-secondary);\n}\n.resultado-pago-spinner {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 3px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  animation: resultado-pago-girar 0.8s linear infinite;\n}\n@keyframes resultado-pago-girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.resultado-pago-acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n.resultado-pago-acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 150px;\n}\n.compra-realizada {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 48px 24px;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.compra-realizada app-icon {\n  color: var(--color-primary);\n  margin-bottom: 4px;\n}\n.compra-realizada__titulo {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.compra-realizada__codigo {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n  letter-spacing: 0.03em;\n}\n.compra-realizada__mensaje {\n  font-size: 13.5px;\n  color: var(--color-text-secondary);\n}\n.compra-realizada__total {\n  margin-top: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.compra-realizada__retiro {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 100%;\n  margin: 14px 0 6px;\n  padding: 14px 16px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n}\n.compra-realizada__retiro-label {\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n}\n.compra-realizada__retiro-sucursal {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.compra-realizada__retiro-ciudad {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.compra-realizada__correo {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.compra-realizada__acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 14px;\n}\n.compra-realizada__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 160px;\n}\n@media (max-width: 560px) {\n  .resultado-pago-page {\n    padding-top: 24px;\n  }\n  .resultado-pago-acciones {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .resultado-pago-acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n  .compra-realizada {\n    padding: 40px 18px;\n  }\n  .compra-realizada__acciones {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    width: 100%;\n  }\n  .compra-realizada__acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=resultado-pago-6S4UBPUH.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResultadoPago, { className: "ResultadoPago", filePath: "src/app/features/pago-electronico/resultado-pago/resultado-pago.ts", lineNumber: 48 });
})();
export {
  ResultadoPago
};
//# debugId=d4be4b67-ade3-5389-8d4a-57917ce2ff5a
//# sourceMappingURL=chunk-GROP4X3O.js.map
