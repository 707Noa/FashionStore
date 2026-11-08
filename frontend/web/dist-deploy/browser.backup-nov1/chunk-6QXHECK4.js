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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PNHCNXB7.js";

// src/app/layouts/superadmin-layout/superadmin-header/superadmin-header.ts
function SuperadminHeader_Conditional_6_Template(rf, ctx) {
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
function SuperadminHeader_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function SuperadminHeader_Conditional_17_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275listener("click", function SuperadminHeader_Conditional_17_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275text(2, "Cerrar sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
}
var SuperadminHeader = class _SuperadminHeader {
  authService = inject(AuthService);
  router = inject(Router);
  title = input(
    "Dashboard",
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
  menuToggle = output();
  usuario = this.authService.usuario;
  menuOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "menuOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get iniciales() {
    const nombre = this.usuario()?.nombre ?? "";
    return nombre.charAt(0).toUpperCase() || "S";
  }
  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
  static \u0275fac = function SuperadminHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminHeader, selectors: [["app-superadmin-header"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"] }, outputs: { menuToggle: "menuToggle" }, decls: 18, vars: 6, consts: [[1, "header-left"], ["type", "button", "aria-label", "Abrir men\xFA", 1, "menu-toggle", 3, "click"], ["name", "menu", 2, "width", "20px", "height", "20px"], [1, "header-text"], [1, "header-actions"], [1, "profile", 3, "click"], [1, "avatar"], [1, "profile-text"], [1, "profile-name"], [1, "profile-role"], ["name", "chevron-down", 2, "width", "14px", "height", "14px"], [1, "profile-menu"], [1, "profile-menu", 3, "click"], [1, "profile-menu__item", "profile-menu__item--danger", 3, "click"]], template: function SuperadminHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function SuperadminHeader_Template_button_click_1_listener() {
        return ctx.menuToggle.emit();
      });
      \u0275\u0275element(2, "app-icon", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, SuperadminHeader_Conditional_6_Template, 2, 1, "p");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275listener("click", function SuperadminHeader_Template_div_click_8_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "app-icon", 10);
      \u0275\u0275conditionalCreate(17, SuperadminHeader_Conditional_17_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle() ? 6 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.iniciales);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.usuario()?.nombre ?? "SuperAdmin");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.usuario()?.rol ?? "SUPERADMIN");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.menuOpen() ? 17 : -1);
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 26px;\n  background: var(--%NS%color-white);\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: var(--%NS%color-text);\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.menu-toggle[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n}\n.header-text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.profile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 5px 8px;\n  border-radius: var(--%NS%radius-md);\n  cursor: pointer;\n  transition: background var(--%NS%transition-fast);\n}\n.profile[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n}\n.profile-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.25;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.profile-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--%NS%color-text-secondary);\n}\n.profile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  box-shadow: var(--%NS%shadow-medium);\n  min-width: 170px;\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  z-index: 50;\n}\n.profile-menu__item[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 12.5px;\n  color: var(--%NS%color-text);\n}\n.profile-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.profile-menu__item--danger[_ngcontent-%COMP%] {\n  color: var(--%NS%color-danger);\n}\n@media (max-width: 900px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 480px) {\n  [_nghost-%COMP%] {\n    padding: 14px 16px;\n  }\n  .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .profile-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=superadmin-header-M2IVERFI.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminHeader, [{
    type: Component,
    args: [{ selector: "app-superadmin-header", imports: [Icon], template: `<div class="header-left">
  <button type="button" class="menu-toggle" (click)="menuToggle.emit()" aria-label="Abrir men\xFA">
    <app-icon name="menu" style="width: 20px; height: 20px" />
  </button>

  <div class="header-text">
    <h1>{{ title() }}</h1>
    @if (subtitle()) {
      <p>{{ subtitle() }}</p>
    }
  </div>
</div>

<div class="header-actions">
  <div class="profile" (click)="toggleMenu()">
    <div class="avatar">{{ iniciales }}</div>
    <div class="profile-text">
      <span class="profile-name">{{ usuario()?.nombre ?? 'SuperAdmin' }}</span>
      <span class="profile-role">{{ usuario()?.rol ?? 'SUPERADMIN' }}</span>
    </div>
    <app-icon name="chevron-down" style="width: 14px; height: 14px" />

    @if (menuOpen()) {
      <div class="profile-menu" (click)="$event.stopPropagation()">
        <span class="profile-menu__item profile-menu__item--danger" (click)="logout()">Cerrar sesi\xF3n</span>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/layouts/superadmin-layout/superadmin-header/superadmin-header.scss */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 26px;\n  background: var(--color-white);\n  border-bottom: 1px solid var(--color-border);\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.menu-toggle {\n  display: none;\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: var(--color-text);\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.menu-toggle:hover {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n}\n.header-text {\n  min-width: 0;\n}\n.header-text h1 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.header-text p {\n  margin-top: 3px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.profile {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 5px 8px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.profile:hover {\n  background: var(--color-bg);\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: var(--color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n}\n.profile-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.25;\n}\n.profile-name {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.profile-role {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n.profile-menu {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-medium);\n  min-width: 170px;\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  z-index: 50;\n}\n.profile-menu__item {\n  padding: 9px 10px;\n  border-radius: var(--radius-sm);\n  font-size: 12.5px;\n  color: var(--color-text);\n}\n.profile-menu__item:hover {\n  background: var(--color-bg);\n}\n.profile-menu__item--danger {\n  color: var(--color-danger);\n}\n@media (max-width: 900px) {\n  .menu-toggle {\n    display: flex;\n  }\n}\n@media (max-width: 480px) {\n  :host {\n    padding: 14px 16px;\n  }\n  .header-text p {\n    display: none;\n  }\n  .profile-text {\n    display: none;\n  }\n}\n/*# sourceMappingURL=superadmin-header-M2IVERFI.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], menuToggle: [{ type: Output, args: ["menuToggle"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminHeader, { className: "SuperadminHeader", filePath: "src/app/layouts/superadmin-layout/superadmin-header/superadmin-header.ts", lineNumber: 12 });
})();

// src/app/layouts/superadmin-layout/superadmin-sidebar/superadmin-sidebar.ts
var _c0 = () => ({ exact: true });
var _forTrack0 = ($index, $item) => $item.label;
function SuperadminSidebar_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275element(1, "app-icon", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function SuperadminSidebar_For_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "app-icon", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", action_r2.route);
    \u0275\u0275advance();
    \u0275\u0275property("name", action_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r2.label);
  }
}
function SuperadminSidebar_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SuperadminSidebar_For_12_Conditional_0_Template, 4, 3, "a", 7);
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    \u0275\u0275conditional(action_r2.route ? 0 : -1);
  }
}
var SuperadminSidebar = class _SuperadminSidebar {
  navItems = [
    { label: "Dashboard", icon: "dashboard", route: "/superadmin" },
    { label: "Empresas", icon: "branches", route: "/superadmin/empresas" },
    { label: "Planes SaaS", icon: "products", route: "/superadmin/planes" },
    { label: "Suscripciones", icon: "inventory", route: "/superadmin/suscripciones" }
  ];
  actions = [
    { label: "Registrar empresa", icon: "plus", route: "/registrar-empresa" }
  ];
  static \u0275fac = function SuperadminSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminSidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminSidebar, selectors: [["app-superadmin-sidebar"]], decls: 13, vars: 0, consts: [[1, "brand"], [1, "brand__mark"], [1, "brand__tag"], [1, "nav"], ["routerLinkActive", "is-active", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-actions"], [1, "nav-icon", 3, "name"], [1, "nav-action", 3, "routerLink"]], template: function SuperadminSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "FASHION");
      \u0275\u0275element(3, "br");
      \u0275\u0275text(4, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 2);
      \u0275\u0275text(6, "SaaS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 3);
      \u0275\u0275repeaterCreate(8, SuperadminSidebar_For_9_Template, 4, 5, "a", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275repeaterCreate(11, SuperadminSidebar_For_12_Template, 1, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.actions);
    }
  }, dependencies: [RouterLink, RouterLinkActive, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--%NS%color-white);\n  border-right: 1px solid var(--%NS%color-border);\n  padding: 22px 14px;\n  overflow-y: auto;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 0 8px 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.brand__mark[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-primary);\n}\n.brand__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--%NS%color-text);\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n  text-decoration: none;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.nav-item.is-active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n  font-weight: 600;\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: auto;\n  padding-top: 10px;\n  border-top: 1px solid var(--%NS%color-border);\n}\n.nav-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--%NS%color-primary);\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n  text-decoration: none;\n}\n.nav-action[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n}\n/*# sourceMappingURL=superadmin-sidebar-YSFKTVAX.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminSidebar, [{
    type: Component,
    args: [{ selector: "app-superadmin-sidebar", imports: [RouterLink, RouterLinkActive, Icon], template: '<div class="brand">\n  <span class="brand__mark">FASHION<br />STORE</span>\n  <span class="brand__tag">SaaS</span>\n</div>\n\n<nav class="nav">\n  @for (item of navItems; track item.label) {\n    <a\n      [routerLink]="item.route"\n      routerLinkActive="is-active"\n      [routerLinkActiveOptions]="{ exact: true }"\n      class="nav-item"\n    >\n      <app-icon [name]="item.icon" class="nav-icon" />\n      <span>{{ item.label }}</span>\n    </a>\n  }\n</nav>\n\n<div class="nav-actions">\n  @for (action of actions; track action.label) {\n    @if (action.route) {\n      <a [routerLink]="action.route" class="nav-action">\n        <app-icon [name]="action.icon" class="nav-icon" />\n        <span>{{ action.label }}</span>\n      </a>\n    }\n  }\n</div>\n', styles: ["/* src/app/layouts/superadmin-layout/superadmin-sidebar/superadmin-sidebar.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--color-white);\n  border-right: 1px solid var(--color-border);\n  padding: 22px 14px;\n  overflow-y: auto;\n}\n.brand {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 0 8px 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n.brand__mark {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0.03em;\n  color: var(--color-primary);\n}\n.brand__tag {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.nav-icon {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text);\n  transition: background var(--transition-fast), color var(--transition-fast);\n  text-decoration: none;\n}\n.nav-item:hover {\n  background: var(--color-bg);\n}\n.nav-item.is-active {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.nav-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: auto;\n  padding-top: 10px;\n  border-top: 1px solid var(--color-border);\n}\n.nav-action {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 10px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-primary);\n  transition: background var(--transition-fast), color var(--transition-fast);\n  text-decoration: none;\n}\n.nav-action:hover {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n}\n/*# sourceMappingURL=superadmin-sidebar-YSFKTVAX.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminSidebar, { className: "SuperadminSidebar", filePath: "src/app/layouts/superadmin-layout/superadmin-sidebar/superadmin-sidebar.ts", lineNumber: 17 });
})();

// src/app/layouts/superadmin-layout/superadmin-layout.ts
function SuperadminLayout_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function SuperadminLayout_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
var SuperadminLayout = class _SuperadminLayout {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  headerTitle = signal(
    "Dashboard",
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
  sidebarOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "sidebarOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed()).subscribe(() => {
      this.readHeaderFromRoute();
      this.sidebarOpen.set(false);
    });
    this.readHeaderFromRoute();
  }
  toggleSidebar() {
    this.sidebarOpen.update((open) => !open);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
  readHeaderFromRoute() {
    let route = this.activatedRoute.firstChild;
    while (route?.firstChild) {
      route = route.firstChild;
    }
    const data = route?.snapshot?.data ?? {};
    this.headerTitle.set(data["headerTitle"] ?? "Dashboard");
    this.headerSubtitle.set(data["headerSubtitle"] ?? "");
  }
  static \u0275fac = function SuperadminLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminLayout, selectors: [["app-superadmin-layout"]], decls: 7, vars: 5, consts: [[1, "superadmin-layout__sidebar"], [1, "superadmin-layout__backdrop"], [1, "superadmin-layout__main"], [3, "menuToggle", "title", "subtitle"], [1, "superadmin-layout__content"], [1, "superadmin-layout__backdrop", 3, "click"]], template: function SuperadminLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0);
      \u0275\u0275element(1, "app-superadmin-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, SuperadminLayout_Conditional_2_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(3, "div", 2)(4, "app-superadmin-header", 3);
      \u0275\u0275listener("menuToggle", function SuperadminLayout_Template_app_superadmin_header_menuToggle_4_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "main", 4);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("is-open", ctx.sidebarOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sidebarOpen() ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("title", ctx.headerTitle())("subtitle", ctx.headerSubtitle());
    }
  }, dependencies: [RouterOutlet, SuperadminSidebar, SuperadminHeader], styles: ["\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  height: 100vh;\n  background: var(--%NS%color-bg);\n}\n.superadmin-layout__sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n.superadmin-layout__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.superadmin-layout__content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 26px;\n}\n.superadmin-layout__backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .superadmin-layout__sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0 auto 0 0;\n    z-index: 500;\n    width: 250px;\n    max-width: 82vw;\n    height: 100vh;\n    transform: translateX(-100%);\n    transition: transform var(--%NS%transition-fast);\n    box-shadow: var(--%NS%shadow-medium);\n  }\n  .superadmin-layout__sidebar.is-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .superadmin-layout__backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 400;\n    background: rgba(20, 20, 20, 0.4);\n    animation: fade-in 160ms ease;\n  }\n}\n/*# sourceMappingURL=superadmin-layout-SKZ56LQZ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminLayout, [{
    type: Component,
    args: [{ selector: "app-superadmin-layout", imports: [RouterOutlet, SuperadminSidebar, SuperadminHeader], template: '<aside class="superadmin-layout__sidebar" [class.is-open]="sidebarOpen()">\n  <app-superadmin-sidebar />\n</aside>\n\n@if (sidebarOpen()) {\n  <div class="superadmin-layout__backdrop" (click)="closeSidebar()"></div>\n}\n\n<div class="superadmin-layout__main">\n  <app-superadmin-header\n    [title]="headerTitle()"\n    [subtitle]="headerSubtitle()"\n    (menuToggle)="toggleSidebar()"\n  />\n  <main class="superadmin-layout__content">\n    <router-outlet />\n  </main>\n</div>\n', styles: ["/* src/app/layouts/superadmin-layout/superadmin-layout.scss */\n:host {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  height: 100vh;\n  background: var(--color-bg);\n}\n.superadmin-layout__sidebar {\n  height: 100vh;\n  overflow: hidden;\n}\n.superadmin-layout__main {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.superadmin-layout__content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 26px;\n}\n.superadmin-layout__backdrop {\n  display: none;\n}\n@media (max-width: 900px) {\n  :host {\n    grid-template-columns: 1fr;\n  }\n  .superadmin-layout__sidebar {\n    position: fixed;\n    inset: 0 auto 0 0;\n    z-index: 500;\n    width: 250px;\n    max-width: 82vw;\n    height: 100vh;\n    transform: translateX(-100%);\n    transition: transform var(--transition-fast);\n    box-shadow: var(--shadow-medium);\n  }\n  .superadmin-layout__sidebar.is-open {\n    transform: translateX(0);\n  }\n  .superadmin-layout__backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 400;\n    background: rgba(20, 20, 20, 0.4);\n    animation: fade-in 160ms ease;\n  }\n}\n/*# sourceMappingURL=superadmin-layout-SKZ56LQZ.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminLayout, { className: "SuperadminLayout", filePath: "src/app/layouts/superadmin-layout/superadmin-layout.ts", lineNumber: 14 });
})();
export {
  SuperadminLayout
};
//# debugId=0cc53348-d5e1-5619-a292-7b3a5458bb35
//# sourceMappingURL=chunk-6QXHECK4.js.map
