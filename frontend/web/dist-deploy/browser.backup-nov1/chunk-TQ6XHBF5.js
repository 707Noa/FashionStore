import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-PNHCNXB7.js";

// src/app/core/ui/toast/toast.service.ts
var AUTO_DISMISS_MS = 4e3;
var ToastService = class _ToastService {
  _toasts = signal(
    [],
    ...ngDevMode ? [{ debugName: "_toasts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toasts = this._toasts.asReadonly();
  nextId = 0;
  success(text) {
    this.push("success", text);
  }
  brand(text) {
    this.push("brand", text);
  }
  error(text) {
    this.push("error", text);
  }
  info(text) {
    this.push("info", text);
  }
  dismiss(id) {
    this._toasts.update((list) => list.filter((toast) => toast.id !== id));
  }
  push(type, text) {
    const id = ++this.nextId;
    this._toasts.update((list) => [...list, { id, type, text }]);
    setTimeout(() => this.dismiss(id), AUTO_DISMISS_MS);
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# debugId=f50961c2-13db-55dc-85e1-e5a033dca992
//# sourceMappingURL=chunk-TQ6XHBF5.js.map
