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
  Output,
  filter,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PNHCNXB7.js";

// src/app/layouts/cajero-layout/cajero-header/cajero-header.ts
function CajeroHeader_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle());
  }
}
var CajeroHeader = class _CajeroHeader {
  authService = inject(AuthService);
  router = inject(Router);
  title = input(
    "Panel de Cajero",
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
  // Botón hamburguesa -- visible solo en tablet/móvil (ver
  // cajero-header.scss), abre el drawer del sidebar (CajeroLayout).
  abrirMenu = output();
  usuario = this.authService.usuario;
  get iniciales() {
    const nombre = this.usuario()?.nombre ?? "";
    return nombre.charAt(0).toUpperCase() || "C";
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
  static \u0275fac = function CajeroHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CajeroHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CajeroHeader, selectors: [["app-cajero-header"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"] }, outputs: { abrirMenu: "abrirMenu" }, decls: 13, vars: 4, consts: [["type", "button", "aria-label", "Abrir men\xFA", 1, "menu-toggle", 3, "click"], ["name", "menu", 2, "width", "20px", "height", "20px"], [1, "header-text"], [1, "header-actions"], [1, "avatar"], [1, "profile-name"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"]], template: function CajeroHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CajeroHeader_Template_button_click_0_listener() {
        return ctx.abrirMenu.emit();
      });
      \u0275\u0275element(1, "app-icon", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, CajeroHeader_Conditional_5_Template, 2, 1, "p");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function CajeroHeader_Template_button_click_11_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(12, "Cerrar sesi\xF3n");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle() ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.iniciales);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.usuario()?.nombre ?? "Cajero");
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 26px;\n  background: var(--%NS%color-white);\n  border-bottom: 1px solid var(--%NS%color-border);\n  flex-wrap: wrap;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-text);\n}\n.menu-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.header-text[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n@media (max-width: 480px) {\n  [_nghost-%COMP%] {\n    padding: 14px 16px;\n  }\n  .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=cajero-header-X5PKDK3G.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CajeroHeader, [{
    type: Component,
    args: [{ selector: "app-cajero-header", imports: [Icon], template: `<button\r
  type="button"\r
  class="menu-toggle"\r
  (click)="abrirMenu.emit()"\r
  aria-label="Abrir men\xFA"\r
>\r
  <app-icon name="menu" style="width: 20px; height: 20px" />\r
</button>\r
\r
<div class="header-text">\r
  <h1>{{ title() }}</h1>\r
  @if (subtitle()) {\r
    <p>{{ subtitle() }}</p>\r
  }\r
</div>\r
\r
<div class="header-actions">\r
  <div class="avatar">{{ iniciales }}</div>\r
  <span class="profile-name">{{ usuario()?.nombre ?? 'Cajero' }}</span>\r
  <button type="button" class="btn btn--ghost btn--sm" (click)="logout()">Cerrar sesi\xF3n</button>\r
</div>\r
`, styles: ["/* src/app/layouts/cajero-layout/cajero-header/cajero-header.scss */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 26px;\n  background: var(--color-white);\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.menu-toggle {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-white);\n  color: var(--color-text);\n}\n.menu-toggle:hover {\n  background: var(--color-bg);\n}\n.header-text {\n  min-width: 0;\n  flex: 1;\n}\n.header-text h1 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.header-text p {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: var(--color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.profile-name {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .menu-toggle {\n    display: inline-flex;\n  }\n}\n@media (max-width: 480px) {\n  :host {\n    padding: 14px 16px;\n  }\n  .header-text p {\n    display: none;\n  }\n  .profile-name {\n    display: none;\n  }\n}\n/*# sourceMappingURL=cajero-header-X5PKDK3G.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], abrirMenu: [{ type: Output, args: ["abrirMenu"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CajeroHeader, { className: "CajeroHeader", filePath: "src/app/layouts/cajero-layout/cajero-header/cajero-header.ts", lineNumber: 12 });
})();

// src/app/layouts/cajero-layout/cajero-sidebar/cajero-sidebar.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.route;
function CajeroSidebar_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function CajeroSidebar_For_9_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navegar.emit());
    });
    \u0275\u0275element(1, "app-icon", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r3.exact ?? false));
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
var CajeroSidebar = class _CajeroSidebar {
  // "Ventas" es CU24 (venta directa). "Reservas para caja" es la
  // integración de CU20 ya existente (reservas-pendientes.ts) -- prendas
  // que el Encargado dejó LISTA_PARA_CAJA. "Historial" es CU27 -- ítem
  // propio, separado de "Ventas" a propósito (requerimiento explícito: no
  // mezclarlos). "Devoluciones y cambios" es CU26. "Mi perfil" reutiliza el
  // mismo componente MiPerfil (CU04) que ya usan Cliente/Encargado/
  // Proveedor, nunca duplicado.
  navItems = [
    { label: "Inicio", icon: "dashboard", route: "/cajero", exact: true },
    { label: "Ventas", icon: "sales", route: "/cajero/ventas/nueva" },
    { label: "Reservas para caja", icon: "reservations", route: "/cajero/reservas-pendientes" },
    { label: "Historial", icon: "reports", route: "/cajero/historial" },
    { label: "Devoluciones y cambios", icon: "edit", route: "/cajero/devoluciones" },
    { label: "Mi perfil", icon: "user", route: "/cajero/mi-perfil" }
  ];
  // Emitido al elegir cualquier ítem -- CajeroLayout lo usa para cerrar el
  // drawer en tablet/móvil (en escritorio no tiene efecto, el sidebar ya
  // está siempre visible).
  navegar = output();
  static \u0275fac = function CajeroSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CajeroSidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CajeroSidebar, selectors: [["app-cajero-sidebar"]], outputs: { navegar: "navegar" }, decls: 10, vars: 0, consts: [[1, "brand"], [1, "brand__mark"], [1, "brand__tag"], [1, "nav"], ["routerLinkActive", "is-active", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "is-active", 1, "nav-item", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "nav-icon", 3, "name"]], template: function CajeroSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "FASHION");
      \u0275\u0275element(3, "br");
      \u0275\u0275text(4, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 2);
      \u0275\u0275text(6, "Cajero");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 3);
      \u0275\u0275repeaterCreate(8, CajeroSidebar_For_9_Template, 4, 6, "a", 4, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.navItems);
    }
  }, dependencies: [RouterLink, RouterLinkActive, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--%NS%color-white);\n  border-right: 1px solid var(--%NS%color-border);\n  padding: 22px 14px;\n  overflow-y: auto;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 0 8px 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.brand__mark[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-primary);\n}\n.brand__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--%NS%color-text);\n  white-space: nowrap;\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.nav-item.is-active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=cajero-sidebar-U3ODBK4R.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CajeroSidebar, [{
    type: Component,
    args: [{ selector: "app-cajero-sidebar", imports: [RouterLink, RouterLinkActive, Icon], template: '<div class="brand">\r\n  <span class="brand__mark">FASHION<br />STORE</span>\r\n  <span class="brand__tag">Cajero</span>\r\n</div>\r\n\r\n<nav class="nav">\r\n  @for (item of navItems; track item.route) {\r\n    <a\r\n      [routerLink]="item.route"\r\n      routerLinkActive="is-active"\r\n      [routerLinkActiveOptions]="{ exact: item.exact ?? false }"\r\n      class="nav-item"\r\n      (click)="navegar.emit()"\r\n    >\r\n      <app-icon [name]="item.icon" class="nav-icon" />\r\n      <span>{{ item.label }}</span>\r\n    </a>\r\n  }\r\n</nav>\r\n', styles: ["/* src/app/layouts/cajero-layout/cajero-sidebar/cajero-sidebar.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--color-white);\n  border-right: 1px solid var(--color-border);\n  padding: 22px 14px;\n  overflow-y: auto;\n}\n.brand {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 0 8px 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n.brand__mark {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--color-primary);\n}\n.brand__tag {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-icon {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text);\n  white-space: nowrap;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.nav-item:hover {\n  background: var(--color-bg);\n}\n.nav-item.is-active {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=cajero-sidebar-U3ODBK4R.css.map */\n"] }]
  }], null, { navegar: [{ type: Output, args: ["navegar"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CajeroSidebar, { className: "CajeroSidebar", filePath: "src/app/layouts/cajero-layout/cajero-sidebar/cajero-sidebar.ts", lineNumber: 18 });
})();

// src/app/layouts/cajero-layout/cajero-layout.ts
function CajeroLayout_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function CajeroLayout_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
var CajeroLayout = class _CajeroLayout {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  headerTitle = signal(
    "Panel de Cajero",
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
  drawerAbierto = signal(
    false,
    ...ngDevMode ? [{ debugName: "drawerAbierto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed()).subscribe(() => {
      this.readHeaderFromRoute();
      this.drawerAbierto.set(false);
    });
    this.readHeaderFromRoute();
  }
  abrirDrawer() {
    this.drawerAbierto.set(true);
  }
  cerrarDrawer() {
    this.drawerAbierto.set(false);
  }
  readHeaderFromRoute() {
    let route = this.activatedRoute.firstChild;
    while (route?.firstChild) {
      route = route.firstChild;
    }
    const data = route?.snapshot?.data ?? {};
    this.headerTitle.set(data["headerTitle"] ?? "Panel de Cajero");
    this.headerSubtitle.set(data["headerSubtitle"] ?? "");
  }
  static \u0275fac = function CajeroLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CajeroLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CajeroLayout, selectors: [["app-cajero-layout"]], decls: 7, vars: 5, consts: [[1, "cajero-layout__sidebar"], [3, "navegar"], [1, "cajero-layout__overlay"], [1, "cajero-layout__main"], [3, "abrirMenu", "title", "subtitle"], [1, "cajero-layout__content"], [1, "cajero-layout__overlay", 3, "click"]], template: function CajeroLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "app-cajero-sidebar", 1);
      \u0275\u0275listener("navegar", function CajeroLayout_Template_app_cajero_sidebar_navegar_1_listener() {
        return ctx.cerrarDrawer();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(2, CajeroLayout_Conditional_2_Template, 1, 0, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "app-cajero-header", 4);
      \u0275\u0275listener("abrirMenu", function CajeroLayout_Template_app_cajero_header_abrirMenu_4_listener() {
        return ctx.abrirDrawer();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "main", 5);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("is-open", ctx.drawerAbierto());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.drawerAbierto() ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("title", ctx.headerTitle())("subtitle", ctx.headerSubtitle());
    }
  }, dependencies: [RouterOutlet, CajeroSidebar, CajeroHeader], styles: ["\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  height: 100vh;\n  background: var(--%NS%color-bg);\n}\n.cajero-layout__sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n.cajero-layout__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.cajero-layout__content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 26px;\n}\n.cajero-layout__overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 1fr;\n    height: 100vh;\n  }\n  .cajero-layout__sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0 auto 0 0;\n    width: 260px;\n    max-width: 82vw;\n    z-index: 1001;\n    transform: translateX(-100%);\n    transition: transform var(--%NS%transition-fast);\n    box-shadow: var(--%NS%shadow-medium);\n  }\n  .cajero-layout__sidebar.is-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .cajero-layout__overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 1000;\n    background: color-mix(in srgb, black 45%, transparent);\n  }\n  .cajero-layout__content[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n}\n/*# sourceMappingURL=cajero-layout-WV2AXPNU.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CajeroLayout, [{
    type: Component,
    args: [{ selector: "app-cajero-layout", imports: [RouterOutlet, CajeroSidebar, CajeroHeader], template: '<aside class="cajero-layout__sidebar" [class.is-open]="drawerAbierto()">\r\n  <app-cajero-sidebar (navegar)="cerrarDrawer()" />\r\n</aside>\r\n\r\n@if (drawerAbierto()) {\r\n  <div class="cajero-layout__overlay" (click)="cerrarDrawer()"></div>\r\n}\r\n\r\n<div class="cajero-layout__main">\r\n  <app-cajero-header\r\n    [title]="headerTitle()"\r\n    [subtitle]="headerSubtitle()"\r\n    (abrirMenu)="abrirDrawer()"\r\n  />\r\n  <main class="cajero-layout__content">\r\n    <router-outlet />\r\n  </main>\r\n</div>\r\n', styles: ["/* src/app/layouts/cajero-layout/cajero-layout.scss */\n:host {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  height: 100vh;\n  background: var(--color-bg);\n}\n.cajero-layout__sidebar {\n  height: 100vh;\n  overflow: hidden;\n}\n.cajero-layout__main {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.cajero-layout__content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 26px;\n}\n.cajero-layout__overlay {\n  display: none;\n}\n@media (max-width: 900px) {\n  :host {\n    grid-template-columns: 1fr;\n    height: 100vh;\n  }\n  .cajero-layout__sidebar {\n    position: fixed;\n    inset: 0 auto 0 0;\n    width: 260px;\n    max-width: 82vw;\n    z-index: 1001;\n    transform: translateX(-100%);\n    transition: transform var(--transition-fast);\n    box-shadow: var(--shadow-medium);\n  }\n  .cajero-layout__sidebar.is-open {\n    transform: translateX(0);\n  }\n  .cajero-layout__overlay {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 1000;\n    background: color-mix(in srgb, black 45%, transparent);\n  }\n  .cajero-layout__content {\n    padding: 18px 16px;\n  }\n}\n/*# sourceMappingURL=cajero-layout-WV2AXPNU.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CajeroLayout, { className: "CajeroLayout", filePath: "src/app/layouts/cajero-layout/cajero-layout.ts", lineNumber: 24 });
})();
export {
  CajeroLayout
};
//# debugId=fa377815-b760-5e67-8a03-0ec9e7dbd346
//# sourceMappingURL=chunk-HILCXL5U.js.map
