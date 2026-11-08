import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PNHCNXB7.js";

// src/app/features/pago-electronico/pago-electronico.service.ts
var PagoElectronicoService = class _PagoElectronicoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/pagos`;
  crearCheckout(payload) {
    return this.http.post(`${this.baseUrl}/checkout`, payload);
  }
  verificarPago(payload) {
    return this.http.post(`${this.baseUrl}/verificar`, payload);
  }
  static \u0275fac = function PagoElectronicoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagoElectronicoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagoElectronicoService, factory: _PagoElectronicoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagoElectronicoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PagoElectronicoService
};
//# debugId=bfbced29-55b8-5218-93a7-c2a6d9d182c4
//# sourceMappingURL=chunk-DJ5A2SMW.js.map
