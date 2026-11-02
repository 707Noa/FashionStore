import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PNHCNXB7.js";

// src/app/features/admin/dashboard/dashboard.ts
var _forTrack0 = ($index, $item) => $item.title;
function Dashboard_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.message);
  }
}
var Dashboard = class _Dashboard {
  cards = [
    { title: "Sucursales", message: "Todav\xEDa no existen sucursales registradas." },
    { title: "Productos", message: "Todav\xEDa no existen productos registrados." },
    { title: "Reservas", message: "Todav\xEDa no existen reservas registradas." },
    { title: "Ventas", message: "Todav\xEDa no existen ventas registradas." }
  ];
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 6, vars: 0, consts: [[1, "dashboard-grid"], [1, "admin-card", "dashboard-card"], [1, "admin-card", "dashboard-hint"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, Dashboard_For_2_Template, 5, 2, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "p");
      \u0275\u0275text(5, "Configure FashionStore para comenzar: cree sucursales, categor\xEDas y productos desde el men\xFA.");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cards);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.dashboard-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.dashboard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.dashboard-hint[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 18px 20px;\n}\n.dashboard-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n/*# sourceMappingURL=dashboard-6VDU3267.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", template: '<div class="dashboard-grid">\r\n  @for (card of cards; track card.title) {\r\n    <div class="admin-card dashboard-card">\r\n      <h3>{{ card.title }}</h3>\r\n      <p>{{ card.message }}</p>\r\n    </div>\r\n  }\r\n</div>\r\n\r\n<div class="admin-card dashboard-hint">\r\n  <p>Configure FashionStore para comenzar: cree sucursales, categor\xEDas y productos desde el men\xFA.</p>\r\n</div>\r\n', styles: ["/* src/app/features/admin/dashboard/dashboard.scss */\n:host {\n  display: block;\n}\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.dashboard-card {\n  padding: 20px;\n}\n.dashboard-card h3 {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.dashboard-card p {\n  margin-top: 8px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.dashboard-hint {\n  margin-top: 16px;\n  padding: 18px 20px;\n}\n.dashboard-hint p {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=dashboard-6VDU3267.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/features/admin/dashboard/dashboard.ts", lineNumber: 13 });
})();
export {
  Dashboard
};
//# debugId=64013895-0c55-5e7a-9c20-06f55b0a7f72
//# sourceMappingURL=chunk-SNFXYEIM.js.map
