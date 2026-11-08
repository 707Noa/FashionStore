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

// src/app/features/public/sucursales/sucursal.service.ts
var SucursalPublicaService = class _SucursalPublicaService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/sucursales-publicas`;
  listCiudades() {
    return this.http.get(`${this.baseUrl}/ciudades`);
  }
  listSucursales(ciudadId) {
    let params = new HttpParams();
    if (ciudadId) {
      params = params.set("ciudad_id", ciudadId);
    }
    return this.http.get(`${this.baseUrl}/sucursales`, { params });
  }
  getSucursal(id) {
    return this.http.get(`${this.baseUrl}/sucursales/${id}`);
  }
  static \u0275fac = function SucursalPublicaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SucursalPublicaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SucursalPublicaService, factory: _SucursalPublicaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SucursalPublicaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SucursalPublicaService
};
//# debugId=8cb65c0d-d315-5140-8655-acb2d8ed9425
//# sourceMappingURL=chunk-CYFUGY7Z.js.map
