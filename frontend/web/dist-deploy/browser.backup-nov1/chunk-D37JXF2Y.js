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

// src/app/features/comprobantes/comprobante.service.ts
var ComprobanteService = class _ComprobanteService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/comprobantes`;
  obtener(ventaId) {
    return this.http.get(`${this.baseUrl}/${ventaId}`);
  }
  descargarPdf(ventaId) {
    return this.http.get(`${this.baseUrl}/${ventaId}/pdf`, { responseType: "blob" });
  }
  enviar(ventaId) {
    return this.http.post(`${this.baseUrl}/${ventaId}/enviar`, {});
  }
  static \u0275fac = function ComprobanteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComprobanteService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ComprobanteService, factory: _ComprobanteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComprobanteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
function descargarBlob(blob, nombreArchivo) {
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = nombreArchivo;
  enlace.click();
  URL.revokeObjectURL(url);
}

export {
  ComprobanteService,
  descargarBlob
};
//# debugId=e2719ce5-7341-5b4c-80cb-4ca1fb33f603
//# sourceMappingURL=chunk-D37JXF2Y.js.map
