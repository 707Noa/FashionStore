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

// src/app/features/carrito/carrito.service.ts
var CarritoService = class _CarritoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/carrito`;
  consultar() {
    return this.http.get(this.baseUrl);
  }
  agregarItem(payload) {
    return this.http.post(`${this.baseUrl}/items`, payload);
  }
  actualizarSeleccion(itemId, payload) {
    return this.http.patch(`${this.baseUrl}/items/${itemId}`, payload);
  }
  eliminarItem(itemId) {
    return this.http.delete(`${this.baseUrl}/items/${itemId}`);
  }
  static \u0275fac = function CarritoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarritoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CarritoService, factory: _CarritoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarritoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CarritoService
};
//# debugId=91ea69ac-381d-5c57-af76-a4c4090b0aaf
//# sourceMappingURL=chunk-XEZGY4VJ.js.map
