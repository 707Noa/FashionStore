import {
  RouterLink
} from "./chunk-OXXL2I3V.js";
import {
  CommonModule
} from "./chunk-BQM6CYO4.js";
import "./chunk-ENHVXUH7.js";
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

// src/app/features/superadmin/dashboard/dashboard.ts
var _forTrack0 = ($index, $item) => $item.label;
function SuperadminDashboard_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.label);
  }
}
var SuperadminDashboard = class _SuperadminDashboard {
  statsCards = [
    { label: "Empresas", icon: "branches", value: "\u2014" },
    { label: "Empresas activas", icon: "dashboard", value: "\u2014" },
    { label: "Administradores", icon: "users", value: "\u2014" }
  ];
  static \u0275fac = function SuperadminDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminDashboard, selectors: [["app-superadmin-dashboard"]], decls: 16, vars: 0, consts: [[1, "dashboard"], [1, "stats-grid"], [1, "stat-card"], [1, "section"], [1, "section-title"], [1, "actions-grid"], ["href", "/superadmin/registrar-empresa", 1, "action-card"], [1, "action-icon"], [1, "action-text"], [1, "action-title"], [1, "action-description"], [1, "stat-value"], [1, "stat-label"]], template: function SuperadminDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, SuperadminDashboard_For_3_Template, 5, 2, "div", 2, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 3)(5, "h2", 4);
      \u0275\u0275text(6, "Acciones r\xE1pidas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "div", 5)(8, "a", 6)(9, "span", 7);
      \u0275\u0275text(10, "\u2795");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13, "Registrar empresa");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p", 10);
      \u0275\u0275text(15, "Agregar una nueva empresa a la plataforma.");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statsCards);
    }
  }, dependencies: [CommonModule], styles: ["\n.dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all var(--%NS%transition-fast);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  box-shadow: var(--%NS%shadow-small);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  margin-bottom: 8px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n  text-align: center;\n  line-height: 1.3;\n}\n.section[_ngcontent-%COMP%] {\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-white);\n  text-decoration: none;\n  color: inherit;\n  transition: all var(--%NS%transition-fast);\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 4%, white);\n}\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.action-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.action-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  display: block;\n}\n.action-description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n  line-height: 1.3;\n}\n@media (max-width: 768px) {\n  .dashboard[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 12px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard-P5XB455U.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminDashboard, [{
    type: Component,
    args: [{ selector: "app-superadmin-dashboard", imports: [CommonModule, RouterLink], standalone: true, template: '<div class="dashboard">\n  <!-- Stats Cards -->\n  <div class="stats-grid">\n    @for (card of statsCards; track card.label) {\n      <div class="stat-card">\n        <div class="stat-value">{{ card.value }}</div>\n        <div class="stat-label">{{ card.label }}</div>\n      </div>\n    }\n  </div>\n\n  <!-- Quick Actions -->\n  <div class="section">\n    <h2 class="section-title">Acciones r\xE1pidas</h2>\n    <div class="actions-grid">\n      <a href="/superadmin/registrar-empresa" class="action-card">\n        <span class="action-icon">\u2795</span>\n        <div class="action-text">\n          <span class="action-title">Registrar empresa</span>\n          <p class="action-description">Agregar una nueva empresa a la plataforma.</p>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/features/superadmin/dashboard/dashboard.scss */\n.dashboard {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n}\n.stat-card {\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all var(--transition-fast);\n}\n.stat-card:hover {\n  border-color: var(--color-primary);\n  box-shadow: var(--shadow-small);\n}\n.stat-value {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--color-primary);\n  margin-bottom: 8px;\n}\n.stat-label {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  text-align: center;\n  line-height: 1.3;\n}\n.section {\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.section-title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.action-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-white);\n  text-decoration: none;\n  color: inherit;\n  transition: all var(--transition-fast);\n}\n.action-card:hover {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 4%, white);\n}\n.action-icon {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.action-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.action-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n  display: block;\n}\n.action-description {\n  margin: 0;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  line-height: 1.3;\n}\n@media (max-width: 768px) {\n  .dashboard {\n    gap: 16px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 12px;\n  }\n  .stat-card {\n    padding: 16px;\n  }\n  .stat-value {\n    font-size: 24px;\n  }\n  .actions-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard-P5XB455U.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminDashboard, { className: "SuperadminDashboard", filePath: "src/app/features/superadmin/dashboard/dashboard.ts", lineNumber: 12 });
})();
export {
  SuperadminDashboard
};
//# debugId=ba4b5931-19b6-56aa-9ece-af71581ff9b1
//# sourceMappingURL=chunk-AMDWSGS7.js.map
