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

// src/app/features/encargado/inicio/inicio.ts
var Inicio = class _Inicio {
  authService = inject(AuthService);
  usuario = this.authService.usuario;
  static \u0275fac = function Inicio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inicio)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Inicio, selectors: [["app-encargado-inicio"]], decls: 7, vars: 1, consts: [[1, "admin-card", "welcome"], ["routerLink", "/mi-perfil", 1, "btn", "btn--primary"]], template: function Inicio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h3");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, " La gesti\xF3n de stock por sucursal todav\xEDa se est\xE1 preparando. Por ahora puedes revisar y actualizar tus datos de contacto en tu perfil. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 1);
      \u0275\u0275text(6, "Ir a mi perfil");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\xA1Bienvenido", ctx.usuario()?.nombre ? ", " + ctx.usuario().nombre : "", "!");
    }
  }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.welcome[_ngcontent-%COMP%] {\n  padding: 22px 24px;\n}\n.welcome[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n  max-width: 480px;\n}\n/*# sourceMappingURL=inicio-XMJJXP63.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inicio, [{
    type: Component,
    args: [{ selector: "app-encargado-inicio", imports: [RouterLink], template: `<section class="admin-card welcome">\r
  <h3>\xA1Bienvenido{{ usuario()?.nombre ? ', ' + usuario()!.nombre : '' }}!</h3>\r
  <p>\r
    La gesti\xF3n de stock por sucursal todav\xEDa se est\xE1 preparando. Por ahora puedes\r
    revisar y actualizar tus datos de contacto en tu perfil.\r
  </p>\r
  <a routerLink="/mi-perfil" class="btn btn--primary">Ir a mi perfil</a>\r
</section>\r
`, styles: ["/* src/app/features/encargado/inicio/inicio.scss */\n:host {\n  display: block;\n}\n.welcome {\n  padding: 22px 24px;\n}\n.welcome h3 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.welcome p {\n  margin-top: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  max-width: 480px;\n}\n/*# sourceMappingURL=inicio-XMJJXP63.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Inicio, { className: "Inicio", filePath: "src/app/features/encargado/inicio/inicio.ts", lineNumber: 11 });
})();
export {
  Inicio
};
//# debugId=67475385-c4e6-5dea-9e3b-ded6fa8884c7
//# sourceMappingURL=chunk-QDZMTLEG.js.map
