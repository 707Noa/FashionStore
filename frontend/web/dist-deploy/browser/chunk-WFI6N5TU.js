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

// src/app/features/proveedor/shared/panel-proveedor.service.ts
var PanelProveedorService = class _PanelProveedorService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/proveedores/panel`;
  miPerfil() {
    return this.http.get(`${this.baseUrl}/perfil`);
  }
  actualizarMiPerfil(payload) {
    return this.http.put(`${this.baseUrl}/perfil`, payload);
  }
  misProductos() {
    return this.http.get(`${this.baseUrl}/productos`);
  }
  obtenerProducto(id) {
    return this.http.get(`${this.baseUrl}/productos/${id}`);
  }
  enviarProducto(payload) {
    return this.http.post(`${this.baseUrl}/productos`, payload);
  }
  actualizarProducto(id, payload) {
    return this.http.put(`${this.baseUrl}/productos/${id}`, payload);
  }
  establecerImagen(id, archivo) {
    const formData = new FormData();
    formData.append("archivo", archivo);
    return this.http.post(`${this.baseUrl}/productos/${id}/imagen`, formData);
  }
  cambiarDisponibilidad(id, disponibilidad) {
    return this.http.patch(`${this.baseUrl}/productos/${id}/disponibilidad`, {
      disponibilidad
    });
  }
  cambiarEstado(id, isActive) {
    return this.http.patch(`${this.baseUrl}/productos/${id}/estado`, {
      is_active: isActive
    });
  }
  static \u0275fac = function PanelProveedorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelProveedorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PanelProveedorService, factory: _PanelProveedorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelProveedorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PanelProveedorService
};
//# debugId=470db417-0c58-5a8a-a105-2a83102e3f76
//# sourceMappingURL=chunk-WFI6N5TU.js.map
