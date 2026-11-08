import {
  RUTA_POR_ROL
} from "./chunk-IK7D7AHK.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  Router
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-PNHCNXB7.js";

// src/app/core/pages/no-autorizado/no-autorizado.ts
var NoAutorizado = class _NoAutorizado {
  authService = inject(AuthService);
  router = inject(Router);
  // Si la sesión tiene un rol reconocido, vuelve a SU propio panel (no a la
  // ruta que le fue negada) -- así un Encargado que cae aquí por navegar a
  // /admin, por ejemplo, no queda varado. Sin sesión o con un rol que no
  // está en el mapa, la única salida razonable es volver a iniciar sesión.
  volver() {
    const rol = this.authService.usuario()?.rol;
    const destino = rol ? RUTA_POR_ROL[rol] : void 0;
    if (destino) {
      this.router.navigateByUrl(destino);
      return;
    }
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  static \u0275fac = function NoAutorizado_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoAutorizado)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoAutorizado, selectors: [["app-no-autorizado"]], decls: 8, vars: 0, consts: [[1, "no-autorizado-page"], [1, "no-autorizado-card"], ["type", "button", 1, "btn", "btn--primary", 3, "click"]], template: function NoAutorizado_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Acceso no autorizado");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5, "Tu cuenta no tiene permiso para ver esta p\xE1gina.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "button", 2);
      \u0275\u0275domListener("click", function NoAutorizado_Template_button_click_6_listener() {
        return ctx.volver();
      });
      \u0275\u0275text(7, "Volver");
      \u0275\u0275domElementEnd()()();
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.no-autorizado-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--%NS%color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--%NS%color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--%NS%color-bg);\n}\n.no-autorizado-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 8px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 40px 36px;\n}\n.no-autorizado-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.no-autorizado-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n  margin-bottom: 12px;\n}\n@media (max-width: 480px) {\n  .no-autorizado-page[_ngcontent-%COMP%] {\n    padding: 28px 16px;\n  }\n  .no-autorizado-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=no-autorizado-DL44IWXF.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoAutorizado, [{
    type: Component,
    args: [{ selector: "app-no-autorizado", template: '<div class="no-autorizado-page">\r\n  <div class="no-autorizado-card">\r\n    <h1>Acceso no autorizado</h1>\r\n    <p>Tu cuenta no tiene permiso para ver esta p\xE1gina.</p>\r\n    <button type="button" class="btn btn--primary" (click)="volver()">Volver</button>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/core/pages/no-autorizado/no-autorizado.scss */\n:host {\n  display: block;\n}\n.no-autorizado-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--color-bg);\n}\n.no-autorizado-card {\n  width: 100%;\n  max-width: 380px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 8px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 40px 36px;\n}\n.no-autorizado-card h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.no-autorizado-card p {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  margin-bottom: 12px;\n}\n@media (max-width: 480px) {\n  .no-autorizado-page {\n    padding: 28px 16px;\n  }\n  .no-autorizado-card {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=no-autorizado-DL44IWXF.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoAutorizado, { className: "NoAutorizado", filePath: "src/app/core/pages/no-autorizado/no-autorizado.ts", lineNumber: 24 });
})();
export {
  NoAutorizado
};
//# debugId=fbc61027-b341-5860-a832-cdf7ff01faac
//# sourceMappingURL=chunk-4B4LDUTR.js.map
