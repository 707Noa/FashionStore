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

// src/app/sucursales-catalogo/gestion-proveedores/proveedor.service.ts
var ProveedorService = class _ProveedorService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/proveedores`;
  list(query) {
    let params = new HttpParams();
    if (query?.search) {
      params = params.set("search", query.search);
    }
    if (query?.estado && query.estado !== "all") {
      params = params.set("estado", query.estado);
    }
    return this.http.get(this.baseUrl, { params });
  }
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }
  setActive(id, isActive) {
    return this.http.patch(`${this.baseUrl}/${id}/estado`, { is_active: isActive });
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function ProveedorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProveedorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProveedorService, factory: _ProveedorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProveedorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProveedorService
};
//# debugId=b122996a-d380-576e-abec-4c37a6b590b0
//# sourceMappingURL=chunk-K5FC2FCH.js.map
