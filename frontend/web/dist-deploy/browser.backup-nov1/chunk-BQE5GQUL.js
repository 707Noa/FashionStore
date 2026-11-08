import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-ENHVXUH7.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PNHCNXB7.js";

// src/app/features/encargado/shared/panel-encargado.service.ts
var PanelEncargadoService = class _PanelEncargadoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/stock-sucursal/panel`;
  miSucursal() {
    return this.http.get(`${this.baseUrl}/mi-sucursal`);
  }
  listarInventario(search) {
    let params = new HttpParams();
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(`${this.baseUrl}/productos`, { params });
  }
  static \u0275fac = function PanelEncargadoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelEncargadoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PanelEncargadoService, factory: _PanelEncargadoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelEncargadoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PanelEncargadoService
};
//# debugId=8c30c30e-14c8-51f5-bf14-533529c51430
//# sourceMappingURL=chunk-BQE5GQUL.js.map
