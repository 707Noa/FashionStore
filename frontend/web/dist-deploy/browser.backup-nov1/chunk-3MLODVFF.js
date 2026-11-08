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

// src/app/sucursales-catalogo/cu08-gestionar-productos/producto.service.ts
var ProductoService = class _ProductoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/productos`;
  list(query) {
    let params = new HttpParams();
    if (query?.search) {
      params = params.set("search", query.search);
    }
    if (query?.categoria_id) {
      params = params.set("categoria_id", query.categoria_id);
    }
    if (query?.temporada_id) {
      params = params.set("temporada_id", query.temporada_id);
    }
    if (query?.coleccion_id) {
      params = params.set("coleccion_id", query.coleccion_id);
    }
    if (query?.proveedor_id) {
      params = params.set("proveedor_id", query.proveedor_id);
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
  listPropuestas(estado = "PENDIENTE", proveedorId) {
    let params = new HttpParams().set("estado", estado);
    if (proveedorId) {
      params = params.set("proveedor_id", proveedorId);
    }
    return this.http.get(`${this.baseUrl}/propuestas`, { params });
  }
  rechazarPropuesta(id) {
    return this.http.patch(`${this.baseUrl}/propuestas/${id}/rechazar`, {});
  }
  setImagenPrincipal(id, archivo) {
    const formData = new FormData();
    formData.append("archivo", archivo);
    return this.http.post(`${this.baseUrl}/${id}/imagen-principal`, formData);
  }
  addImagen(id, archivo) {
    const formData = new FormData();
    formData.append("archivo", archivo);
    return this.http.post(`${this.baseUrl}/${id}/imagenes`, formData);
  }
  removeImagen(id, imagenId) {
    return this.http.delete(`${this.baseUrl}/${id}/imagenes/${imagenId}`);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function ProductoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductoService, factory: _ProductoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProductoService
};
//# debugId=5588678b-732c-5eaa-942c-ef8465ebf99a
//# sourceMappingURL=chunk-3MLODVFF.js.map
