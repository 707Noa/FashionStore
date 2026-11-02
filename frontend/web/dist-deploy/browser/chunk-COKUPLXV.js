import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-PNHCNXB7.js";

// src/app/core/ui/confirm-dialog/confirm-dialog.service.ts
var ConfirmDialogService = class _ConfirmDialogService {
  _config = signal(
    null,
    ...ngDevMode ? [{ debugName: "_config" }] : (
      /* istanbul ignore next */
      []
    )
  );
  config = this._config.asReadonly();
  resolver = null;
  confirm(config) {
    this._config.set(config);
    return new Promise((resolve) => {
      this.resolver = resolve;
    });
  }
  resolve(result) {
    this._config.set(null);
    this.resolver?.(result);
    this.resolver = null;
  }
  static \u0275fac = function ConfirmDialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmDialogService, factory: _ConfirmDialogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ConfirmDialogService
};
//# debugId=4af72e5d-7caf-57a3-b343-24125c0bc73e
//# sourceMappingURL=chunk-COKUPLXV.js.map
