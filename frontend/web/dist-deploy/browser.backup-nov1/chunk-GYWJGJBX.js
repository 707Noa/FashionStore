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

// src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporada-admin.service.ts
var TemporadaAdminService = class _TemporadaAdminService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/temporadas`;
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
  static \u0275fac = function TemporadaAdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemporadaAdminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TemporadaAdminService, factory: _TemporadaAdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemporadaAdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/coleccion-admin.service.ts
var ColeccionAdminService = class _ColeccionAdminService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/colecciones`;
  list(query) {
    let params = new HttpParams();
    if (query?.search) {
      params = params.set("search", query.search);
    }
    if (query?.temporada_id) {
      params = params.set("temporada_id", query.temporada_id);
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
  setDestacadaInicio(id, destacada) {
    return this.http.patch(`${this.baseUrl}/${id}/destacada-inicio`, {
      es_destacada_inicio: destacada
    });
  }
  setImagenDestacada(id, archivo) {
    const formData = new FormData();
    formData.append("archivo", archivo);
    return this.http.post(`${this.baseUrl}/${id}/imagen-destacada`, formData);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function ColeccionAdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColeccionAdminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ColeccionAdminService, factory: _ColeccionAdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColeccionAdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ColeccionAdminService,
  TemporadaAdminService
};
//# debugId=3aa45a30-0e01-51b3-9168-3ba64254a62a
//# sourceMappingURL=chunk-GYWJGJBX.js.map
