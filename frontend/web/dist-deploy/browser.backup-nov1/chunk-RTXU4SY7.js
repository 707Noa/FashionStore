import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-PNHCNXB7.js";

// src/app/core/ui/status-badge/status-badge.ts
function StatusBadge_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 0);
    \u0275\u0275text(1, "Activa");
    \u0275\u0275domElementEnd();
  }
}
function StatusBadge_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275text(1, "Inactiva");
    \u0275\u0275domElementEnd();
  }
}
var StatusBadge = class _StatusBadge {
  active = input.required(
    ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function StatusBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusBadge)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusBadge, selectors: [["app-status-badge"]], inputs: { active: [1, "active"] }, decls: 2, vars: 1, consts: [[1, "badge", "badge--active"], [1, "badge", "badge--inactive"]], template: function StatusBadge_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, StatusBadge_Conditional_0_Template, 2, 0, "span", 0)(1, StatusBadge_Conditional_1_Template, 2, 0, "span", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.active() ? 0 : 1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusBadge, [{
    type: Component,
    args: [{
      selector: "app-status-badge",
      template: `
    @if (active()) {
      <span class="badge badge--active">Activa</span>
    } @else {
      <span class="badge badge--inactive">Inactiva</span>
    }
  `
    }]
  }], null, { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusBadge, { className: "StatusBadge", filePath: "src/app/core/ui/status-badge/status-badge.ts", lineNumber: 13 });
})();

export {
  StatusBadge
};
//# debugId=b783fb50-f3e1-5776-91c6-f8615c7d87d8
//# sourceMappingURL=chunk-RTXU4SY7.js.map
