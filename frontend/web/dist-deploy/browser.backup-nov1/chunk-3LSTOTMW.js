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

// src/app/sucursales-catalogo/atributos/services/category.service.ts
var CategoryService = class _CategoryService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/categorias`;
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
  setImagen(id, archivo) {
    const formData = new FormData();
    formData.append("archivo", archivo);
    return this.http.post(`${this.baseUrl}/${id}/imagen`, formData);
  }
  removeImagen(id) {
    return this.http.delete(`${this.baseUrl}/${id}/imagen`);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/sucursales-catalogo/atributos/services/color.service.ts
var ColorService = class _ColorService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/colores`;
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
  static \u0275fac = function ColorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ColorService, factory: _ColorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/sucursales-catalogo/atributos/services/size.service.ts
var SizeService = class _SizeService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/tallas`;
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
  static \u0275fac = function SizeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SizeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SizeService, factory: _SizeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SizeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CategoryService,
  ColorService,
  SizeService
};
//# debugId=ec452e79-f9a6-5028-8a6f-faf84845924e
//# sourceMappingURL=chunk-3LSTOTMW.js.map
