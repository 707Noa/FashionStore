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

// src/app/features/public/catalogo/catalogo.service.ts
var CatalogoService = class _CatalogoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/catalogo`;
  listCategorias(empresaId) {
    let params = new HttpParams();
    if (empresaId !== null && empresaId !== void 0) {
      params = params.set("empresa_id", empresaId);
    }
    return this.http.get(`${this.baseUrl}/categorias`, { params });
  }
  listColecciones(temporadaId) {
    let params = new HttpParams();
    if (temporadaId) {
      params = params.set("temporada_id", temporadaId);
    }
    return this.http.get(`${this.baseUrl}/colecciones`, { params });
  }
  listTallas() {
    return this.http.get(`${this.baseUrl}/tallas`);
  }
  listColores() {
    return this.http.get(`${this.baseUrl}/colores`);
  }
  listProductos(query) {
    let params = new HttpParams();
    if (query?.search) {
      params = params.set("search", query.search);
    }
    if (query?.categoria_id) {
      params = params.set("categoria_id", query.categoria_id);
    }
    if (query?.coleccion_id) {
      params = params.set("coleccion_id", query.coleccion_id);
    }
    if (query?.talla_id) {
      params = params.set("talla_id", query.talla_id);
    }
    if (query?.color_id) {
      params = params.set("color_id", query.color_id);
    }
    if (query?.empresa_id !== null && query?.empresa_id !== void 0) {
      params = params.set("empresa_id", query.empresa_id);
    }
    return this.http.get(`${this.baseUrl}/productos`, { params });
  }
  getProducto(id) {
    return this.http.get(`${this.baseUrl}/productos/${id}`);
  }
  static \u0275fac = function CatalogoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CatalogoService, factory: _CatalogoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CatalogoService
};
//# debugId=6c962827-f5d5-546d-b2d8-5adee19c3b8d
//# sourceMappingURL=chunk-PBZJP2BS.js.map
