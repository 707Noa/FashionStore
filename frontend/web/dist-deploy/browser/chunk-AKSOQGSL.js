import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/cajero/inicio/inicio.ts
var Inicio = class _Inicio {
  authService = inject(AuthService);
  usuario = this.authService.usuario;
  static \u0275fac = function Inicio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inicio)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Inicio, selectors: [["app-cajero-inicio"]], decls: 21, vars: 1, consts: [[1, "admin-card", "welcome"], [1, "accesos"], ["routerLink", "/cajero/ventas/nueva", 1, "acceso-card"], [1, "acceso-card__titulo"], [1, "acceso-card__texto"], ["routerLink", "/cajero/reservas-pendientes", 1, "acceso-card"], ["routerLink", "/cajero/devoluciones", 1, "acceso-card"]], template: function Inicio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h3");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Elige qu\xE9 quieres hacer.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "a", 2)(7, "span", 3);
      \u0275\u0275text(8, "Ventas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "Registra una venta directa de mostrador.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "a", 5)(12, "span", 3);
      \u0275\u0275text(13, "Reservas para caja");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 4);
      \u0275\u0275text(15, "Cobra las reservas que ya llegaron a caja.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "a", 6)(17, "span", 3);
      \u0275\u0275text(18, "Devoluciones y cambios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 4);
      \u0275\u0275text(20, "Gestiona prendas de ventas realizadas.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\xA1Bienvenido", ctx.usuario()?.nombre ? ", " + ctx.usuario().nombre : "", "!");
    }
  }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.welcome[_ngcontent-%COMP%] {\n  padding: 22px 24px;\n  margin-bottom: 20px;\n}\n.welcome[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n  max-width: 480px;\n}\n.accesos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n.acceso-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 18px;\n  transition: box-shadow var(--%NS%transition-fast), border-color var(--%NS%transition-fast);\n}\n.acceso-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--%NS%shadow-medium);\n  border-color: var(--%NS%color-primary);\n}\n.acceso-card__titulo[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.acceso-card__texto[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n/*# sourceMappingURL=inicio-W54NITYB.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inicio, [{
    type: Component,
    args: [{ selector: "app-cajero-inicio", imports: [RouterLink], template: `<section class="admin-card welcome">\r
  <h3>\xA1Bienvenido{{ usuario()?.nombre ? ', ' + usuario()!.nombre : '' }}!</h3>\r
  <p>Elige qu\xE9 quieres hacer.</p>\r
</section>\r
\r
<div class="accesos">\r
  <a routerLink="/cajero/ventas/nueva" class="acceso-card">\r
    <span class="acceso-card__titulo">Ventas</span>\r
    <span class="acceso-card__texto">Registra una venta directa de mostrador.</span>\r
  </a>\r
  <a routerLink="/cajero/reservas-pendientes" class="acceso-card">\r
    <span class="acceso-card__titulo">Reservas para caja</span>\r
    <span class="acceso-card__texto">Cobra las reservas que ya llegaron a caja.</span>\r
  </a>\r
  <a routerLink="/cajero/devoluciones" class="acceso-card">\r
    <span class="acceso-card__titulo">Devoluciones y cambios</span>\r
    <span class="acceso-card__texto">Gestiona prendas de ventas realizadas.</span>\r
  </a>\r
</div>\r
`, styles: ["/* src/app/features/cajero/inicio/inicio.scss */\n:host {\n  display: block;\n}\n.welcome {\n  padding: 22px 24px;\n  margin-bottom: 20px;\n}\n.welcome h3 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.welcome p {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  max-width: 480px;\n}\n.accesos {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n.acceso-card {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 18px;\n  transition: box-shadow var(--transition-fast), border-color var(--transition-fast);\n}\n.acceso-card:hover {\n  box-shadow: var(--shadow-medium);\n  border-color: var(--color-primary);\n}\n.acceso-card__titulo {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.acceso-card__texto {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=inicio-W54NITYB.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Inicio, { className: "Inicio", filePath: "src/app/features/cajero/inicio/inicio.ts", lineNumber: 17 });
})();
export {
  Inicio
};
//# debugId=5ff8f9f6-ed63-51ae-831a-f2a3fd3d5149
//# sourceMappingURL=chunk-AKSOQGSL.js.map
