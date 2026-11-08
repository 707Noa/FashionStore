import {
  takeUntilDestroyed
} from "./chunk-JRJUW6WN.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  Input,
  filter,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PNHCNXB7.js";

// src/app/layouts/encargado-layout/encargado-header/encargado-header.ts
function EncargadoHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle());
  }
}
var EncargadoHeader = class _EncargadoHeader {
  authService = inject(AuthService);
  router = inject(Router);
  title = input(
    "Panel de Encargado de Sucursal",
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subtitle = input(
    "",
    ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  usuario = this.authService.usuario;
  get iniciales() {
    const nombre = this.usuario()?.nombre ?? "";
    return nombre.charAt(0).toUpperCase() || "E";
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
  static \u0275fac = function EncargadoHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncargadoHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EncargadoHeader, selectors: [["app-encargado-header"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"] }, decls: 11, vars: 4, consts: [[1, "header-text"], [1, "header-actions"], [1, "avatar"], [1, "profile-name"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"]], template: function EncargadoHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(3, EncargadoHeader_Conditional_3_Template, 2, 1, "p");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 1)(5, "div", 2);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "span", 3);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "button", 4);
      \u0275\u0275domListener("click", function EncargadoHeader_Template_button_click_9_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(10, "Cerrar sesi\xF3n");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle() ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.iniciales);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.usuario()?.nombre ?? "Encargado");
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 26px;\n  background: var(--%NS%color-white);\n  border-bottom: 1px solid var(--%NS%color-border);\n  flex-wrap: wrap;\n}\n.header-text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  [_nghost-%COMP%] {\n    padding: 14px 16px;\n  }\n  .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=encargado-header-FYQIPREX.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncargadoHeader, [{
    type: Component,
    args: [{ selector: "app-encargado-header", imports: [], template: `<div class="header-text">\r
  <h1>{{ title() }}</h1>\r
  @if (subtitle()) {\r
    <p>{{ subtitle() }}</p>\r
  }\r
</div>\r
\r
<div class="header-actions">\r
  <div class="avatar">{{ iniciales }}</div>\r
  <span class="profile-name">{{ usuario()?.nombre ?? 'Encargado' }}</span>\r
  <button type="button" class="btn btn--ghost btn--sm" (click)="logout()">Cerrar sesi\xF3n</button>\r
</div>\r
`, styles: ["/* src/app/layouts/encargado-layout/encargado-header/encargado-header.scss */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 26px;\n  background: var(--color-white);\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.header-text {\n  min-width: 0;\n}\n.header-text h1 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.header-text p {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: var(--color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.profile-name {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  :host {\n    padding: 14px 16px;\n  }\n  .header-text p {\n    display: none;\n  }\n  .profile-name {\n    display: none;\n  }\n}\n/*# sourceMappingURL=encargado-header-FYQIPREX.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EncargadoHeader, { className: "EncargadoHeader", filePath: "src/app/layouts/encargado-layout/encargado-header/encargado-header.ts", lineNumber: 11 });
})();

// src/app/layouts/encargado-layout/encargado-sidebar/encargado-sidebar.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.route;
function EncargadoSidebar_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275element(1, "app-icon", 5);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.exact ?? false));
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var EncargadoSidebar = class _EncargadoSidebar {
  // "Mi perfil" apunta a la ruta propia del Encargado (hija de /encargado),
  // NUNCA a '/mi-perfil' -- esa es la pública de Cliente, en otro layout.
  // "Inventario" es CU14 (CU14_ConsultarInventario, restaurado del stash) --
  // consulta y ajusta el stock real de SU sucursal, resuelta siempre desde
  // el usuario autenticado, nunca desde la URL.
  // "Recepción de mercadería" es CU15: registra mercadería recibida de un
  // proveedor y suma a ese mismo stock -- misma sucursal, misma seguridad.
  // "Movimientos de inventario" es CU16: ajustes manuales justificados
  // (positivos/negativos) sobre ese mismo stock, con trazabilidad -- distinto
  // de CU15 (recepción de proveedor).
  // "Reservas" es CU20: atender (preparar/confirmar llegada/finalizar/enviar
  // a caja) las reservas de prendas (CU17) hechas por Clientes en SU
  // sucursal -- panel de solo esa sucursal, resuelta siempre del token.
  navItems = [
    { label: "Inicio", icon: "dashboard", route: "/encargado", exact: true },
    { label: "Inventario", icon: "inventory", route: "/encargado/inventario" },
    { label: "Recepci\xF3n de mercader\xEDa", icon: "suppliers", route: "/encargado/recepcion-mercaderia" },
    { label: "Movimientos de inventario", icon: "edit", route: "/encargado/movimientos-inventario" },
    { label: "Reservas", icon: "reservations", route: "/encargado/reservas" },
    { label: "Mi perfil", icon: "user", route: "/encargado/mi-perfil" }
  ];
  static \u0275fac = function EncargadoSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncargadoSidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EncargadoSidebar, selectors: [["app-encargado-sidebar"]], decls: 10, vars: 0, consts: [[1, "brand"], [1, "brand__mark"], [1, "brand__tag"], [1, "nav"], ["routerLinkActive", "is-active", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-icon", 3, "name"]], template: function EncargadoSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "FASHION");
      \u0275\u0275element(3, "br");
      \u0275\u0275text(4, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 2);
      \u0275\u0275text(6, "Encargado");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 3);
      \u0275\u0275repeaterCreate(8, EncargadoSidebar_For_9_Template, 4, 6, "a", 4, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.navItems);
    }
  }, dependencies: [RouterLink, RouterLinkActive, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--%NS%color-white);\n  border-right: 1px solid var(--%NS%color-border);\n  padding: 22px 14px;\n  overflow-y: auto;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 0 8px 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.brand__mark[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-primary);\n}\n.brand__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--%NS%color-text);\n  white-space: nowrap;\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.nav-item.is-active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    height: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--%NS%color-border);\n    padding: 10px 14px;\n    overflow-x: auto;\n    overflow-y: visible;\n  }\n  .brand[_ngcontent-%COMP%] {\n    padding: 0 14px 0 0;\n    margin-bottom: 0;\n    border-bottom: none;\n    border-right: 1px solid var(--%NS%color-border);\n    flex-shrink: 0;\n  }\n  .nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 4px;\n    padding-left: 12px;\n  }\n}\n/*# sourceMappingURL=encargado-sidebar-XQTWLOGM.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncargadoSidebar, [{
    type: Component,
    args: [{ selector: "app-encargado-sidebar", imports: [RouterLink, RouterLinkActive, Icon], template: '<div class="brand">\r\n  <span class="brand__mark">FASHION<br />STORE</span>\r\n  <span class="brand__tag">Encargado</span>\r\n</div>\r\n\r\n<nav class="nav">\r\n  @for (item of navItems; track item.route) {\r\n    <a\r\n      [routerLink]="item.route"\r\n      routerLinkActive="is-active"\r\n      [routerLinkActiveOptions]="{ exact: item.exact ?? false }"\r\n      class="nav-item"\r\n    >\r\n      <app-icon [name]="item.icon" class="nav-icon" />\r\n      <span>{{ item.label }}</span>\r\n    </a>\r\n  }\r\n</nav>\r\n', styles: ["/* src/app/layouts/encargado-layout/encargado-sidebar/encargado-sidebar.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--color-white);\n  border-right: 1px solid var(--color-border);\n  padding: 22px 14px;\n  overflow-y: auto;\n}\n.brand {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 0 8px 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n.brand__mark {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--color-primary);\n}\n.brand__tag {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-icon {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text);\n  white-space: nowrap;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.nav-item:hover {\n  background: var(--color-bg);\n}\n.nav-item.is-active {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  :host {\n    flex-direction: row;\n    align-items: center;\n    height: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--color-border);\n    padding: 10px 14px;\n    overflow-x: auto;\n    overflow-y: visible;\n  }\n  .brand {\n    padding: 0 14px 0 0;\n    margin-bottom: 0;\n    border-bottom: none;\n    border-right: 1px solid var(--color-border);\n    flex-shrink: 0;\n  }\n  .nav {\n    flex-direction: row;\n    gap: 4px;\n    padding-left: 12px;\n  }\n}\n/*# sourceMappingURL=encargado-sidebar-XQTWLOGM.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EncargadoSidebar, { className: "EncargadoSidebar", filePath: "src/app/layouts/encargado-layout/encargado-sidebar/encargado-sidebar.ts", lineNumber: 18 });
})();

// src/app/layouts/encargado-layout/encargado-layout.ts
var EncargadoLayout = class _EncargadoLayout {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  headerTitle = signal(
    "Panel de Encargado de Sucursal",
    ...ngDevMode ? [{ debugName: "headerTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  headerSubtitle = signal(
    "",
    ...ngDevMode ? [{ debugName: "headerSubtitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed()).subscribe(() => this.readHeaderFromRoute());
    this.readHeaderFromRoute();
  }
  readHeaderFromRoute() {
    let route = this.activatedRoute.firstChild;
    while (route?.firstChild) {
      route = route.firstChild;
    }
    const data = route?.snapshot?.data ?? {};
    this.headerTitle.set(data["headerTitle"] ?? "Panel de Encargado de Sucursal");
    this.headerSubtitle.set(data["headerSubtitle"] ?? "");
  }
  static \u0275fac = function EncargadoLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncargadoLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EncargadoLayout, selectors: [["app-encargado-layout"]], decls: 6, vars: 2, consts: [[1, "encargado-layout__sidebar"], [1, "encargado-layout__main"], [3, "title", "subtitle"], [1, "encargado-layout__content"]], template: function EncargadoLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0);
      \u0275\u0275element(1, "app-encargado-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-encargado-header", 2);
      \u0275\u0275elementStart(4, "main", 3);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("title", ctx.headerTitle())("subtitle", ctx.headerSubtitle());
    }
  }, dependencies: [RouterOutlet, EncargadoSidebar, EncargadoHeader], styles: ["\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  height: 100vh;\n  background: var(--%NS%color-bg);\n}\n.encargado-layout__sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n.encargado-layout__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.encargado-layout__content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 26px;\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    height: auto;\n    min-height: 100vh;\n  }\n  .encargado-layout__sidebar[_ngcontent-%COMP%] {\n    height: auto;\n    overflow: visible;\n    min-width: 0;\n  }\n  .encargado-layout__main[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .encargado-layout__content[_ngcontent-%COMP%] {\n    overflow-y: visible;\n    padding: 18px 16px;\n  }\n}\n/*# sourceMappingURL=encargado-layout-Q37ZKTRK.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncargadoLayout, [{
    type: Component,
    args: [{ selector: "app-encargado-layout", imports: [RouterOutlet, EncargadoSidebar, EncargadoHeader], template: '<aside class="encargado-layout__sidebar">\r\n  <app-encargado-sidebar />\r\n</aside>\r\n\r\n<div class="encargado-layout__main">\r\n  <app-encargado-header [title]="headerTitle()" [subtitle]="headerSubtitle()" />\r\n  <main class="encargado-layout__content">\r\n    <router-outlet />\r\n  </main>\r\n</div>\r\n', styles: ["/* src/app/layouts/encargado-layout/encargado-layout.scss */\n:host {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  height: 100vh;\n  background: var(--color-bg);\n}\n.encargado-layout__sidebar {\n  height: 100vh;\n  overflow: hidden;\n}\n.encargado-layout__main {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.encargado-layout__content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 26px;\n}\n@media (max-width: 900px) {\n  :host {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    height: auto;\n    min-height: 100vh;\n  }\n  .encargado-layout__sidebar {\n    height: auto;\n    overflow: visible;\n    min-width: 0;\n  }\n  .encargado-layout__main {\n    height: auto;\n  }\n  .encargado-layout__content {\n    overflow-y: visible;\n    padding: 18px 16px;\n  }\n}\n/*# sourceMappingURL=encargado-layout-Q37ZKTRK.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EncargadoLayout, { className: "EncargadoLayout", filePath: "src/app/layouts/encargado-layout/encargado-layout.ts", lineNumber: 14 });
})();
export {
  EncargadoLayout
};
//# debugId=827f23c3-0871-5b5c-858f-10607640b39e
//# sourceMappingURL=chunk-JXUUOUC2.js.map
