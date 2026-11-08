import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PNHCNXB7.js";

// src/app/features/superadmin/services/superadmin.service.ts
var SuperadminService = class _SuperadminService {
  http = inject(HttpClient);
  apiUrl = "/api/v1";
  getEmpresas() {
    return this.http.get(`${this.apiUrl}/empresas`);
  }
  getEmpresa(id) {
    return this.http.get(`${this.apiUrl}/empresas/${id}`);
  }
  // CU02 — Gestionar administrador de empresa
  getAdministrador(empresaId) {
    return this.http.get(`${this.apiUrl}/empresas/${empresaId}/administrador`);
  }
  updateAdministrador(empresaId, payload) {
    return this.http.put(`${this.apiUrl}/empresas/${empresaId}/administrador`, payload);
  }
  // CU04 — Gestionar Planes SaaS
  getPlanes() {
    return this.http.get(`${this.apiUrl}/planes`);
  }
  getPlan(id) {
    return this.http.get(`${this.apiUrl}/planes/${id}`);
  }
  createPlan(payload) {
    return this.http.post(`${this.apiUrl}/planes`, payload);
  }
  updatePlan(id, payload) {
    return this.http.put(`${this.apiUrl}/planes/${id}`, payload);
  }
  cambiarEstadoPlan(id, payload) {
    return this.http.patch(`${this.apiUrl}/planes/${id}/estado`, payload);
  }
  deletePlan(id) {
    return this.http.delete(`${this.apiUrl}/planes/${id}`);
  }
  // CU05 — Gestionar Suscripción de Empresa
  getSuscripcionEmpresa(empresaId) {
    return this.http.get(`${this.apiUrl}/suscripciones/${empresaId}`);
  }
  asignarSuscripcion(payload) {
    return this.http.post(`${this.apiUrl}/suscripciones`, payload);
  }
  cambiarSuscripcion(empresaId, payload) {
    return this.http.put(`${this.apiUrl}/suscripciones/${empresaId}`, payload);
  }
  renovarSuscripcion(empresaId, payload) {
    return this.http.patch(`${this.apiUrl}/suscripciones/${empresaId}/renovar`, payload);
  }
  cambiarEstadoSuscripcion(empresaId, payload) {
    return this.http.patch(`${this.apiUrl}/suscripciones/${empresaId}/estado`, payload);
  }
  static \u0275fac = function SuperadminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperadminService, factory: _SuperadminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SuperadminService
};
//# debugId=5c399a70-24f3-5d24-bb65-06ada423552b
//# sourceMappingURL=chunk-UN6AH4K6.js.map
