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

// src/app/sucursales-catalogo/cu06-gestionar-sucursales/sucursal-admin.service.ts
var SucursalAdminService = class _SucursalAdminService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/sucursales`;
  list(query) {
    let params = new HttpParams();
    if (query?.search) {
      params = params.set("search", query.search);
    }
    if (query?.ciudad_id) {
      params = params.set("ciudad_id", query.ciudad_id);
    }
    if (query?.estado && query.estado !== "all") {
      params = params.set("estado", query.estado);
    }
    return this.http.get(this.baseUrl, { params });
  }
  ciudades(estado) {
    let params = new HttpParams();
    if (estado && estado !== "all") {
      params = params.set("estado", estado);
    }
    return this.http.get(`${environment.apiUrl}/ciudades`, { params });
  }
  createCiudad(payload) {
    return this.http.post(`${environment.apiUrl}/ciudades`, payload);
  }
  setCiudadActive(id, isActive) {
    return this.http.patch(`${environment.apiUrl}/ciudades/${id}/estado`, {
      is_active: isActive
    });
  }
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }
  setActive(id, isActive) {
    return this.http.patch(`${this.baseUrl}/${id}/estado`, {
      is_active: isActive
    });
  }
  deleteCiudad(id) {
    return this.http.delete(`${environment.apiUrl}/ciudades/${id}`);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function SucursalAdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SucursalAdminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SucursalAdminService, factory: _SucursalAdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SucursalAdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SucursalAdminService
};
//# debugId=42ba4dfb-5baf-504b-9074-0548da9d39a3
//# sourceMappingURL=chunk-AL7EOW4V.js.map
