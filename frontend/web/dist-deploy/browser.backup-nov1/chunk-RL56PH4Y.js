import {
  PanelProveedorService
} from "./chunk-WFI6N5TU.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
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
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/proveedor/inicio/inicio.ts
var Inicio = class _Inicio {
  panelService = inject(PanelProveedorService);
  authService = inject(AuthService);
  usuario = this.authService.usuario;
  productos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalProductos = computed(
    () => this.productos().length,
    ...ngDevMode ? [{ debugName: "totalProductos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  disponibles = computed(
    () => this.productos().filter((p) => p.disponibilidad).length,
    ...ngDevMode ? [{ debugName: "disponibles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activos = computed(
    () => this.productos().filter((p) => p.is_active).length,
    ...ngDevMode ? [{ debugName: "activos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.panelService.misProductos().subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function Inicio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inicio)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Inicio, selectors: [["app-proveedor-inicio"]], decls: 43, vars: 4, consts: [[1, "admin-card", "welcome"], [1, "stats-grid"], [1, "admin-card", "stat-card"], [1, "stat-card__icon"], ["name", "products", 2, "width", "18px", "height", "18px"], [1, "stat-card__value"], [1, "stat-card__label"], ["name", "power", 2, "width", "18px", "height", "18px"], ["name", "eye", 2, "width", "18px", "height", "18px"], [1, "admin-card", "section", "quick-links"], [1, "quick-links__grid"], ["routerLink", "/proveedor/enviar-producto", 1, "btn", "btn--primary"], ["name", "plus", 2, "width", "14px", "height", "14px"], ["routerLink", "/proveedor/mis-productos", 1, "btn", "btn--ghost"], ["routerLink", "/proveedor/disponibilidad", 1, "btn", "btn--ghost"], ["routerLink", "/proveedor/mi-perfil", 1, "btn", "btn--ghost"]], template: function Inicio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h3");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Desde aqu\xED puedes enviar y administrar la informaci\xF3n de tus prendas para FashionStore.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "div", 2)(7, "span", 3);
      \u0275\u0275element(8, "app-icon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "span", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "Productos enviados");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 2)(15, "span", 3);
      \u0275\u0275element(16, "app-icon", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div")(18, "span", 5);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 6);
      \u0275\u0275text(21, "Disponibles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 2)(23, "span", 3);
      \u0275\u0275element(24, "app-icon", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "span", 5);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 6);
      \u0275\u0275text(29, "Activos");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "section", 9)(31, "h3");
      \u0275\u0275text(32, "Accesos r\xE1pidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 10)(34, "a", 11);
      \u0275\u0275element(35, "app-icon", 12);
      \u0275\u0275text(36, " Enviar producto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 13);
      \u0275\u0275text(38, "Ver mis productos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 14);
      \u0275\u0275text(40, "Actualizar disponibilidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 15);
      \u0275\u0275text(42, "Mi perfil");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\xA1Bienvenido", ctx.usuario()?.nombre ? ", " + ctx.usuario().nombre : "", "!");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.loading() ? "\u2014" : ctx.totalProductos());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.loading() ? "\u2014" : ctx.disponibles());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.loading() ? "\u2014" : ctx.activos());
    }
  }, dependencies: [RouterLink, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.welcome[_ngcontent-%COMP%] {\n  padding: 22px 24px;\n  margin-bottom: 20px;\n}\n.welcome[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  color: var(--%NS%color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.quick-links[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  margin-bottom: 14px;\n}\n.quick-links__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n/*# sourceMappingURL=inicio-U6GYPNIT.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inicio, [{
    type: Component,
    args: [{ selector: "app-proveedor-inicio", imports: [RouterLink, Icon], template: `<section class="admin-card welcome">\r
  <h3>\xA1Bienvenido{{ usuario()?.nombre ? ', ' + usuario()!.nombre : '' }}!</h3>\r
  <p>Desde aqu\xED puedes enviar y administrar la informaci\xF3n de tus prendas para FashionStore.</p>\r
</section>\r
\r
<div class="stats-grid">\r
  <div class="admin-card stat-card">\r
    <span class="stat-card__icon"><app-icon name="products" style="width: 18px; height: 18px" /></span>\r
    <div>\r
      <span class="stat-card__value">{{ loading() ? '\u2014' : totalProductos() }}</span>\r
      <span class="stat-card__label">Productos enviados</span>\r
    </div>\r
  </div>\r
\r
  <div class="admin-card stat-card">\r
    <span class="stat-card__icon"><app-icon name="power" style="width: 18px; height: 18px" /></span>\r
    <div>\r
      <span class="stat-card__value">{{ loading() ? '\u2014' : disponibles() }}</span>\r
      <span class="stat-card__label">Disponibles</span>\r
    </div>\r
  </div>\r
\r
  <div class="admin-card stat-card">\r
    <span class="stat-card__icon"><app-icon name="eye" style="width: 18px; height: 18px" /></span>\r
    <div>\r
      <span class="stat-card__value">{{ loading() ? '\u2014' : activos() }}</span>\r
      <span class="stat-card__label">Activos</span>\r
    </div>\r
  </div>\r
</div>\r
\r
<section class="admin-card section quick-links">\r
  <h3>Accesos r\xE1pidos</h3>\r
  <div class="quick-links__grid">\r
    <a routerLink="/proveedor/enviar-producto" class="btn btn--primary">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Enviar producto\r
    </a>\r
    <a routerLink="/proveedor/mis-productos" class="btn btn--ghost">Ver mis productos</a>\r
    <a routerLink="/proveedor/disponibilidad" class="btn btn--ghost">Actualizar disponibilidad</a>\r
    <a routerLink="/proveedor/mi-perfil" class="btn btn--ghost">Mi perfil</a>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/proveedor/inicio/inicio.scss */\n:host {\n  display: block;\n}\n.welcome {\n  padding: 22px 24px;\n  margin-bottom: 20px;\n}\n.welcome h3 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.welcome p {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.stat-card__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  color: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-card__value {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card__label {\n  display: block;\n  margin-top: 2px;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.quick-links h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin-bottom: 14px;\n}\n.quick-links__grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n/*# sourceMappingURL=inicio-U6GYPNIT.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Inicio, { className: "Inicio", filePath: "src/app/features/proveedor/inicio/inicio.ts", lineNumber: 14 });
})();
export {
  Inicio
};
//# debugId=90a98b2b-faa7-52d3-9297-ed76ead034fb
//# sourceMappingURL=chunk-RL56PH4Y.js.map
