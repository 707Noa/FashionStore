import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  ActivatedRoute
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-ENHVXUH7.js";
import {
  Component,
  Injectable,
  Input,
  Output,
  __spreadValues,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNHCNXB7.js";

// src/app/features/cajero/devoluciones-cambios/devolucion-cambio.service.ts
var DevolucionCambioService = class _DevolucionCambioService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/devoluciones-cambios`;
  buscarVenta(codigoVenta) {
    const params = new HttpParams().set("codigo_venta", codigoVenta);
    return this.http.get(`${this.baseUrl}/buscar`, { params });
  }
  opcionesCambio(ventaId, ventaDetalleId) {
    return this.http.get(`${this.baseUrl}/${ventaId}/opciones-cambio/${ventaDetalleId}`);
  }
  registrarDevolucion(payload) {
    return this.http.post(`${this.baseUrl}/devolucion`, payload);
  }
  registrarCambio(payload) {
    return this.http.post(`${this.baseUrl}/cambio`, payload);
  }
  static \u0275fac = function DevolucionCambioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevolucionCambioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DevolucionCambioService, factory: _DevolucionCambioService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevolucionCambioService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/cajero/devoluciones-cambios/cambiar-modal/cambiar-modal.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.producto_variante_id;
function CambiarModal_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function CambiarModal_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, CambiarModal_Conditional_17_For_2_Template, 1, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CambiarModal_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function CambiarModal_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 19);
    \u0275\u0275text(2, "No hay otras variantes disponibles de este producto.");
    \u0275\u0275elementEnd()();
  }
}
function CambiarModal_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CambiarModal_Conditional_20_For_2_Template_button_click_0_listener() {
      const opcion_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarVariante(opcion_r3));
    });
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opcion_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opcion-variante--activa", ctx_r0.varianteSeleccionada()?.producto_variante_id === opcion_r3.producto_variante_id);
    \u0275\u0275property("disabled", opcion_r3.disponible <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", opcion_r3.color.nombre, " \xB7 ", opcion_r3.talla.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Disp: ", opcion_r3.disponible);
  }
}
function CambiarModal_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, CambiarModal_Conditional_20_For_2_Template, 5, 6, "button", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.opciones());
  }
}
function CambiarModal_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "button", 25);
    \u0275\u0275listener("click", function CambiarModal_Conditional_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.decrementar());
    });
    \u0275\u0275text(5, " \u2212 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 26);
    \u0275\u0275listener("input", function CambiarModal_Conditional_21_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.actualizarCantidad($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function CambiarModal_Conditional_21_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.incrementar());
    });
    \u0275\u0275text(8, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.cantidad() <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("max", ctx_r0.maxCantidad())("value", ctx_r0.cantidad());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cantidad() >= ctx_r0.maxCantidad());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Disponible: ", ctx.disponible);
  }
}
var CambiarModal = class _CambiarModal {
  service = inject(DevolucionCambioService);
  toast = inject(ToastService);
  ventaId = input.required(
    ...ngDevMode ? [{ debugName: "ventaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detalle = input.required(
    ...ngDevMode ? [{ debugName: "detalle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cerrar = output();
  registrada = output();
  cargando = signal(
    true,
    ...ngDevMode ? [{ debugName: "cargando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  opciones = signal(
    [],
    ...ngDevMode ? [{ debugName: "opciones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  varianteSeleccionada = signal(
    null,
    ...ngDevMode ? [{ debugName: "varianteSeleccionada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cantidad = signal(
    1,
    ...ngDevMode ? [{ debugName: "cantidad" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviando = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  maxCantidad = computed(
    () => {
      const variante = this.varianteSeleccionada();
      const disponibleOriginal = this.detalle().cantidad_disponible;
      return variante ? Math.min(disponibleOriginal, variante.disponible) : disponibleOriginal;
    },
    ...ngDevMode ? [{ debugName: "maxCantidad" }] : (
      /* istanbul ignore next */
      []
    )
  );
  puedeConfirmar = computed(
    () => {
      if (this.enviando()) {
        return false;
      }
      const variante = this.varianteSeleccionada();
      if (!variante || variante.disponible <= 0) {
        return false;
      }
      const cantidad = this.cantidad();
      return cantidad >= 1 && cantidad <= this.maxCantidad();
    },
    ...ngDevMode ? [{ debugName: "puedeConfirmar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.service.opcionesCambio(this.ventaId(), this.detalle().venta_detalle_id).subscribe({
      next: (opciones) => {
        this.opciones.set(opciones);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
        this.errorMessage.set("No se pudieron cargar las variantes disponibles.");
      }
    });
  }
  seleccionarVariante(variante) {
    if (variante.disponible <= 0) {
      return;
    }
    this.varianteSeleccionada.set(variante);
    this.cantidad.set(1);
  }
  incrementar() {
    if (this.cantidad() < this.maxCantidad()) {
      this.cantidad.update((c) => c + 1);
    }
  }
  decrementar() {
    if (this.cantidad() > 1) {
      this.cantidad.update((c) => c - 1);
    }
  }
  actualizarCantidad(valor) {
    const numero = Number(valor);
    if (!Number.isFinite(numero)) {
      return;
    }
    this.cantidad.set(Math.min(Math.max(Math.round(numero), 1), this.maxCantidad()));
  }
  confirmar() {
    const variante = this.varianteSeleccionada();
    if (!variante || !this.puedeConfirmar()) {
      return;
    }
    this.enviando.set(true);
    const payload = {
      venta_id: this.ventaId(),
      venta_detalle_id: this.detalle().venta_detalle_id,
      cantidad: this.cantidad(),
      variante_nueva_id: variante.producto_variante_id
    };
    this.service.registrarCambio(payload).subscribe({
      next: () => {
        this.enviando.set(false);
        this.toast.success("Cambio registrado.");
        this.registrada.emit();
      },
      error: (err) => {
        this.enviando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo registrar el cambio. Int\xE9ntalo nuevamente.");
      }
    });
  }
  onCerrar() {
    if (this.enviando()) {
      return;
    }
    this.cerrar.emit();
  }
  static \u0275fac = function CambiarModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CambiarModal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CambiarModal, selectors: [["app-cambiar-modal"]], inputs: { ventaId: [1, "ventaId"], detalle: [1, "detalle"] }, outputs: { cerrar: "cerrar", registrada: "registrada" }, decls: 27, vars: 7, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-ficha", 3, "click"], [1, "modal-ficha__header"], [1, "modal-ficha__titulo"], ["type", "button", "aria-label", "Cerrar", 1, "modal-ficha__cerrar", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "prenda-resumen"], [1, "prenda-resumen__etiqueta"], [1, "prenda-resumen__nombre"], [1, "prenda-resumen__variante"], [1, "campo"], [1, "campo__label"], [1, "opciones-variante"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "modal-ficha__acciones"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "skeleton-chip"], [1, "state-block__title"], ["type", "button", 1, "opcion-variante", 3, "opcion-variante--activa", "disabled"], ["type", "button", 1, "opcion-variante", 3, "click", "disabled"], [1, "opcion-variante__nombre"], [1, "opcion-variante__disponible"], [1, "cantidad-control"], ["type", "button", "aria-label", "Disminuir cantidad", 1, "cantidad-control__btn", 3, "click", "disabled"], ["type", "number", "min", "1", 1, "cantidad-control__input", 3, "input", "max", "value"], ["type", "button", "aria-label", "Aumentar cantidad", 1, "cantidad-control__btn", 3, "click", "disabled"], [1, "campo__ayuda"]], template: function CambiarModal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function CambiarModal_Template_div_click_0_listener() {
        return ctx.onCerrar();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function CambiarModal_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Cambiar prenda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function CambiarModal_Template_button_click_5_listener() {
        return ctx.onCerrar();
      });
      \u0275\u0275element(6, "app-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9, "Actual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
      \u0275\u0275text(16, "Seleccionar nueva variante");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, CambiarModal_Conditional_17_Template, 3, 1, "div", 12)(18, CambiarModal_Conditional_18_Template, 3, 1, "div", 13)(19, CambiarModal_Conditional_19_Template, 3, 0, "div", 14)(20, CambiarModal_Conditional_20_Template, 3, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, CambiarModal_Conditional_21_Template, 11, 5, "div", 10);
      \u0275\u0275elementStart(22, "div", 15)(23, "button", 16);
      \u0275\u0275listener("click", function CambiarModal_Template_button_click_23_listener() {
        return ctx.onCerrar();
      });
      \u0275\u0275text(24, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 17);
      \u0275\u0275listener("click", function CambiarModal_Template_button_click_25_listener() {
        return ctx.confirmar();
      });
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.detalle().producto.nombre);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.detalle().variante.color.nombre, " \xB7 Talla ", ctx.detalle().variante.talla.nombre, " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.cargando() ? 17 : ctx.errorMessage() ? 18 : ctx.opciones().length === 0 ? 19 : 20);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_3_0 = ctx.varianteSeleccionada()) ? 21 : -1, tmp_3_0);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.puedeConfirmar());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.enviando() ? "Cambiando..." : "Cambiar", " ");
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: color-mix(in srgb, black 45%, transparent);\n  animation: _ngcontent-%COMP%_cambiar-modal-aparecer 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_cambiar-modal-aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-ficha[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--%NS%color-white);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 22px;\n}\n.modal-ficha__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-ficha__titulo[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text);\n}\n.modal-ficha__cerrar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n}\n.modal-ficha__cerrar[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-border);\n  color: var(--%NS%color-text);\n}\n.prenda-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px 14px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n}\n.prenda-resumen__etiqueta[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--%NS%color-text-secondary);\n}\n.prenda-resumen__nombre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.prenda-resumen__variante[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.campo__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.campo__ayuda[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.opciones-variante[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.opcion-variante[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  padding: 10px 8px;\n  border: 1.5px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  text-align: center;\n  transition:\n    border-color var(--%NS%transition-fast),\n    background var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.opcion-variante[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n.opcion-variante[_ngcontent-%COMP%]:not(:disabled):hover {\n  border-color: var(--%NS%color-primary);\n}\n.opcion-variante--activa[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  box-shadow: inset 0 0 0 1.5px var(--%NS%color-primary);\n}\n.opcion-variante__nombre[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.opcion-variante__disponible[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--%NS%color-text-secondary);\n}\n.skeleton-chip[_ngcontent-%COMP%] {\n  height: 52px;\n  border-radius: var(--%NS%radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_cambiar-modal-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_cambiar-modal-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n.cantidad-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cantidad-control__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.cantidad-control__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n.cantidad-control__btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n}\n.cantidad-control__input[_ngcontent-%COMP%] {\n  width: 64px;\n  padding: 8px 10px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.cantidad-control__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.modal-ficha__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-ficha__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 110px;\n}\n@media (max-width: 560px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .modal-ficha[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 100%;\n    max-height: 92vh;\n    border-radius: var(--%NS%radius-lg) var(--%NS%radius-lg) 0 0;\n  }\n  .modal-ficha__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .modal-ficha__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=cambiar-modal-ZXMRR47S.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CambiarModal, [{
    type: Component,
    args: [{ selector: "app-cambiar-modal", imports: [Icon], template: `<div class="modal-overlay" (click)="onCerrar()">\r
  <div class="modal-ficha" (click)="$event.stopPropagation()">\r
    <div class="modal-ficha__header">\r
      <span class="modal-ficha__titulo">Cambiar prenda</span>\r
      <button type="button" class="modal-ficha__cerrar" (click)="onCerrar()" aria-label="Cerrar">\r
        <app-icon name="close" style="width: 16px; height: 16px" />\r
      </button>\r
    </div>\r
\r
    <div class="prenda-resumen">\r
      <span class="prenda-resumen__etiqueta">Actual</span>\r
      <span class="prenda-resumen__nombre">{{ detalle().producto.nombre }}</span>\r
      <span class="prenda-resumen__variante">\r
        {{ detalle().variante.color.nombre }} \xB7 Talla {{ detalle().variante.talla.nombre }}\r
      </span>\r
    </div>\r
\r
    <div class="campo">\r
      <span class="campo__label">Seleccionar nueva variante</span>\r
\r
      @if (cargando()) {\r
        <div class="opciones-variante">\r
          @for (i of [1, 2, 3]; track i) {\r
            <div class="skeleton-chip"></div>\r
          }\r
        </div>\r
      } @else if (errorMessage()) {\r
        <div class="state-block state-block--error">\r
          <span class="state-block__title">{{ errorMessage() }}</span>\r
        </div>\r
      } @else if (opciones().length === 0) {\r
        <div class="state-block">\r
          <span class="state-block__title">No hay otras variantes disponibles de este producto.</span>\r
        </div>\r
      } @else {\r
        <div class="opciones-variante">\r
          @for (opcion of opciones(); track opcion.producto_variante_id) {\r
            <button\r
              type="button"\r
              class="opcion-variante"\r
              [class.opcion-variante--activa]="varianteSeleccionada()?.producto_variante_id === opcion.producto_variante_id"\r
              [disabled]="opcion.disponible <= 0"\r
              (click)="seleccionarVariante(opcion)"\r
            >\r
              <span class="opcion-variante__nombre">{{ opcion.color.nombre }} \xB7 {{ opcion.talla.nombre }}</span>\r
              <span class="opcion-variante__disponible">Disp: {{ opcion.disponible }}</span>\r
            </button>\r
          }\r
        </div>\r
      }\r
    </div>\r
\r
    @if (varianteSeleccionada(); as variante) {\r
      <div class="campo">\r
        <span class="campo__label">Cantidad</span>\r
        <div class="cantidad-control">\r
          <button\r
            type="button"\r
            class="cantidad-control__btn"\r
            [disabled]="cantidad() <= 1"\r
            (click)="decrementar()"\r
            aria-label="Disminuir cantidad"\r
          >\r
            \u2212\r
          </button>\r
          <input\r
            type="number"\r
            class="cantidad-control__input"\r
            min="1"\r
            [max]="maxCantidad()"\r
            [value]="cantidad()"\r
            (input)="actualizarCantidad($any($event.target).value)"\r
          />\r
          <button\r
            type="button"\r
            class="cantidad-control__btn"\r
            [disabled]="cantidad() >= maxCantidad()"\r
            (click)="incrementar()"\r
            aria-label="Aumentar cantidad"\r
          >\r
            +\r
          </button>\r
        </div>\r
        <span class="campo__ayuda">Disponible: {{ variante.disponible }}</span>\r
      </div>\r
    }\r
\r
    <div class="modal-ficha__acciones">\r
      <button type="button" class="btn btn--ghost" (click)="onCerrar()">Cancelar</button>\r
      <button type="button" class="btn btn--primary" [disabled]="!puedeConfirmar()" (click)="confirmar()">\r
        {{ enviando() ? 'Cambiando...' : 'Cambiar' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/cajero/devoluciones-cambios/cambiar-modal/cambiar-modal.scss */\n:host {\n  display: block;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: color-mix(in srgb, black 45%, transparent);\n  animation: cambiar-modal-aparecer 0.15s ease;\n}\n@keyframes cambiar-modal-aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-ficha {\n  width: 100%;\n  max-width: 460px;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--color-white);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 22px;\n}\n.modal-ficha__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-ficha__titulo {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--color-text);\n}\n.modal-ficha__cerrar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n}\n.modal-ficha__cerrar:hover {\n  background: var(--color-border);\n  color: var(--color-text);\n}\n.prenda-resumen {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px 14px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n}\n.prenda-resumen__etiqueta {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n}\n.prenda-resumen__nombre {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.prenda-resumen__variante {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.campo {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.campo__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.campo__ayuda {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.opciones-variante {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.opcion-variante {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  padding: 10px 8px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  text-align: center;\n  transition:\n    border-color var(--transition-fast),\n    background var(--transition-fast),\n    color var(--transition-fast);\n}\n.opcion-variante:disabled {\n  opacity: 0.4;\n}\n.opcion-variante:not(:disabled):hover {\n  border-color: var(--color-primary);\n}\n.opcion-variante--activa {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  box-shadow: inset 0 0 0 1.5px var(--color-primary);\n}\n.opcion-variante__nombre {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.opcion-variante__disponible {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n.skeleton-chip {\n  height: 52px;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: cambiar-modal-shimmer 1.4s ease infinite;\n}\n@keyframes cambiar-modal-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n.cantidad-control {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cantidad-control__btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.cantidad-control__btn:disabled {\n  opacity: 0.4;\n}\n.cantidad-control__btn:not(:disabled):hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.cantidad-control__input {\n  width: 64px;\n  padding: 8px 10px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.cantidad-control__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.modal-ficha__acciones {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-ficha__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 110px;\n}\n@media (max-width: 560px) {\n  .modal-overlay {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .modal-ficha {\n    max-width: none;\n    width: 100%;\n    max-height: 92vh;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  }\n  .modal-ficha__acciones {\n    flex-direction: column-reverse;\n  }\n  .modal-ficha__acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=cambiar-modal-ZXMRR47S.css.map */\n"] }]
  }], null, { ventaId: [{ type: Input, args: [{ isSignal: true, alias: "ventaId", required: true }] }], detalle: [{ type: Input, args: [{ isSignal: true, alias: "detalle", required: true }] }], cerrar: [{ type: Output, args: ["cerrar"] }], registrada: [{ type: Output, args: ["registrada"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CambiarModal, { className: "CambiarModal", filePath: "src/app/features/cajero/devoluciones-cambios/cambiar-modal/cambiar-modal.ts", lineNumber: 30 });
})();

// src/app/features/cajero/devoluciones-cambios/devolver-modal/devolver-modal.ts
function DevolverModal_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 10)(1, "span", 11);
    \u0275\u0275text(2, "Observaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 22);
    \u0275\u0275listener("input", function DevolverModal_Conditional_37_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizarObservacion($event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.observacion());
  }
}
var DevolverModal = class _DevolverModal {
  service = inject(DevolucionCambioService);
  toast = inject(ToastService);
  ventaId = input.required(
    ...ngDevMode ? [{ debugName: "ventaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detalle = input.required(
    ...ngDevMode ? [{ debugName: "detalle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cerrar = output();
  registrada = output();
  cantidad = signal(
    1,
    ...ngDevMode ? [{ debugName: "cantidad" }] : (
      /* istanbul ignore next */
      []
    )
  );
  motivo = signal(
    null,
    ...ngDevMode ? [{ debugName: "motivo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  observacion = signal(
    "",
    ...ngDevMode ? [{ debugName: "observacion" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviando = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  puedeConfirmar = computed(
    () => {
      if (this.enviando()) {
        return false;
      }
      const cantidad = this.cantidad();
      if (cantidad < 1 || cantidad > this.detalle().cantidad_disponible) {
        return false;
      }
      const motivo = this.motivo();
      if (!motivo) {
        return false;
      }
      return motivo !== "OTRO" || this.observacion().trim().length > 0;
    },
    ...ngDevMode ? [{ debugName: "puedeConfirmar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  incrementar() {
    if (this.cantidad() < this.detalle().cantidad_disponible) {
      this.cantidad.update((c) => c + 1);
    }
  }
  decrementar() {
    if (this.cantidad() > 1) {
      this.cantidad.update((c) => c - 1);
    }
  }
  actualizarCantidad(valor) {
    const numero = Number(valor);
    if (!Number.isFinite(numero)) {
      return;
    }
    const max = this.detalle().cantidad_disponible;
    this.cantidad.set(Math.min(Math.max(Math.round(numero), 1), max));
  }
  seleccionarMotivo(motivo) {
    this.motivo.set(motivo);
  }
  actualizarObservacion(valor) {
    this.observacion.set(valor);
  }
  confirmar() {
    const motivo = this.motivo();
    if (!motivo || !this.puedeConfirmar()) {
      return;
    }
    this.enviando.set(true);
    const observacion = this.observacion().trim();
    const payload = __spreadValues({
      venta_id: this.ventaId(),
      venta_detalle_id: this.detalle().venta_detalle_id,
      cantidad: this.cantidad(),
      motivo
    }, motivo === "OTRO" && observacion ? { observacion } : {});
    this.service.registrarDevolucion(payload).subscribe({
      next: () => {
        this.enviando.set(false);
        this.toast.success("Devoluci\xF3n registrada.");
        this.registrada.emit();
      },
      error: (err) => {
        this.enviando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo registrar la devoluci\xF3n. Int\xE9ntalo nuevamente.");
      }
    });
  }
  onCerrar() {
    if (this.enviando()) {
      return;
    }
    this.cerrar.emit();
  }
  static \u0275fac = function DevolverModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevolverModal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DevolverModal, selectors: [["app-devolver-modal"]], inputs: { ventaId: [1, "ventaId"], detalle: [1, "detalle"] }, outputs: { cerrar: "cerrar", registrada: "registrada" }, decls: 43, vars: 20, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-ficha", 3, "click"], [1, "modal-ficha__header"], [1, "modal-ficha__titulo"], ["type", "button", "aria-label", "Cerrar", 1, "modal-ficha__cerrar", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "prenda-resumen"], [1, "prenda-resumen__nombre"], [1, "prenda-resumen__variante"], [1, "prenda-resumen__comprada"], [1, "campo"], [1, "campo__label"], [1, "cantidad-control"], ["type", "button", "aria-label", "Disminuir cantidad", 1, "cantidad-control__btn", 3, "click", "disabled"], ["type", "number", "min", "1", 1, "cantidad-control__input", 3, "input", "max", "value"], ["type", "button", "aria-label", "Aumentar cantidad", 1, "cantidad-control__btn", 3, "click", "disabled"], [1, "campo__ayuda"], [1, "motivos"], ["type", "button", 1, "motivo-card", 3, "click"], [1, "modal-ficha__acciones"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "text", "maxlength", "300", "placeholder", "Describe brevemente el motivo", 1, "campo__input", 3, "input", "value"]], template: function DevolverModal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function DevolverModal_Template_div_click_0_listener() {
        return ctx.onCerrar();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function DevolverModal_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Devolver prenda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_5_listener() {
        return ctx.onCerrar();
      });
      \u0275\u0275element(6, "app-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
      \u0275\u0275text(16, "Cantidad a devolver");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "button", 13);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_18_listener() {
        return ctx.decrementar();
      });
      \u0275\u0275text(19, " \u2212 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 14);
      \u0275\u0275listener("input", function DevolverModal_Template_input_input_20_listener($event) {
        return ctx.actualizarCantidad($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_21_listener() {
        return ctx.incrementar();
      });
      \u0275\u0275text(22, " + ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "span", 16);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "span", 11);
      \u0275\u0275text(27, "Motivo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "button", 18);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_29_listener() {
        return ctx.seleccionarMotivo("TALLA");
      });
      \u0275\u0275text(30, " Talla ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 18);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_31_listener() {
        return ctx.seleccionarMotivo("DEFECTO");
      });
      \u0275\u0275text(32, " Defecto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 18);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_33_listener() {
        return ctx.seleccionarMotivo("PRODUCTO_INCORRECTO");
      });
      \u0275\u0275text(34, " Incorrecto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 18);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_35_listener() {
        return ctx.seleccionarMotivo("OTRO");
      });
      \u0275\u0275text(36, " Otro ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(37, DevolverModal_Conditional_37_Template, 4, 1, "label", 10);
      \u0275\u0275elementStart(38, "div", 19)(39, "button", 20);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_39_listener() {
        return ctx.onCerrar();
      });
      \u0275\u0275text(40, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 21);
      \u0275\u0275listener("click", function DevolverModal_Template_button_click_41_listener() {
        return ctx.confirmar();
      });
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.detalle().producto.nombre);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.detalle().variante.color.nombre, " \xB7 Talla ", ctx.detalle().variante.talla.nombre, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Cantidad comprada: ", ctx.detalle().cantidad_comprada);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.cantidad() <= 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("max", ctx.detalle().cantidad_disponible)("value", ctx.cantidad());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.cantidad() >= ctx.detalle().cantidad_disponible);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Disponible: ", ctx.detalle().cantidad_disponible);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("motivo-card--activo", ctx.motivo() === "TALLA");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("motivo-card--activo", ctx.motivo() === "DEFECTO");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("motivo-card--activo", ctx.motivo() === "PRODUCTO_INCORRECTO");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("motivo-card--activo", ctx.motivo() === "OTRO");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.motivo() === "OTRO" ? 37 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.puedeConfirmar());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.enviando() ? "Confirmando..." : "Confirmar", " ");
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: color-mix(in srgb, black 45%, transparent);\n  animation: _ngcontent-%COMP%_devolver-modal-aparecer 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_devolver-modal-aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-ficha[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--%NS%color-white);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 22px;\n}\n.modal-ficha__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-ficha__titulo[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text);\n}\n.modal-ficha__cerrar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n}\n.modal-ficha__cerrar[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-border);\n  color: var(--%NS%color-text);\n}\n.prenda-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px 14px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n}\n.prenda-resumen__nombre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.prenda-resumen__variante[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.prenda-resumen__comprada[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.campo__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.campo__ayuda[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.campo__input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 14px;\n  color: var(--%NS%color-text);\n}\n.campo__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.cantidad-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cantidad-control__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.cantidad-control__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n.cantidad-control__btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n}\n.cantidad-control__input[_ngcontent-%COMP%] {\n  width: 64px;\n  padding: 8px 10px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.cantidad-control__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.motivos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.motivo-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 10px 6px;\n  border: 1.5px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  transition:\n    border-color var(--%NS%transition-fast),\n    background var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.motivo-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n}\n.motivo-card--activo[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n  box-shadow: inset 0 0 0 1.5px var(--%NS%color-primary);\n}\n.modal-ficha__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-ficha__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 110px;\n}\n@media (max-width: 560px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .modal-ficha[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 100%;\n    max-height: 92vh;\n    border-radius: var(--%NS%radius-lg) var(--%NS%radius-lg) 0 0;\n  }\n  .motivos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .modal-ficha__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .modal-ficha__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=devolver-modal-TXRX7XZ4.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevolverModal, [{
    type: Component,
    args: [{ selector: "app-devolver-modal", imports: [Icon], template: `<div class="modal-overlay" (click)="onCerrar()">\r
  <div class="modal-ficha" (click)="$event.stopPropagation()">\r
    <div class="modal-ficha__header">\r
      <span class="modal-ficha__titulo">Devolver prenda</span>\r
      <button type="button" class="modal-ficha__cerrar" (click)="onCerrar()" aria-label="Cerrar">\r
        <app-icon name="close" style="width: 16px; height: 16px" />\r
      </button>\r
    </div>\r
\r
    <div class="prenda-resumen">\r
      <span class="prenda-resumen__nombre">{{ detalle().producto.nombre }}</span>\r
      <span class="prenda-resumen__variante">\r
        {{ detalle().variante.color.nombre }} \xB7 Talla {{ detalle().variante.talla.nombre }}\r
      </span>\r
      <span class="prenda-resumen__comprada">Cantidad comprada: {{ detalle().cantidad_comprada }}</span>\r
    </div>\r
\r
    <div class="campo">\r
      <span class="campo__label">Cantidad a devolver</span>\r
      <div class="cantidad-control">\r
        <button\r
          type="button"\r
          class="cantidad-control__btn"\r
          [disabled]="cantidad() <= 1"\r
          (click)="decrementar()"\r
          aria-label="Disminuir cantidad"\r
        >\r
          \u2212\r
        </button>\r
        <input\r
          type="number"\r
          class="cantidad-control__input"\r
          min="1"\r
          [max]="detalle().cantidad_disponible"\r
          [value]="cantidad()"\r
          (input)="actualizarCantidad($any($event.target).value)"\r
        />\r
        <button\r
          type="button"\r
          class="cantidad-control__btn"\r
          [disabled]="cantidad() >= detalle().cantidad_disponible"\r
          (click)="incrementar()"\r
          aria-label="Aumentar cantidad"\r
        >\r
          +\r
        </button>\r
      </div>\r
      <span class="campo__ayuda">Disponible: {{ detalle().cantidad_disponible }}</span>\r
    </div>\r
\r
    <div class="campo">\r
      <span class="campo__label">Motivo</span>\r
      <div class="motivos">\r
        <button\r
          type="button"\r
          class="motivo-card"\r
          [class.motivo-card--activo]="motivo() === 'TALLA'"\r
          (click)="seleccionarMotivo('TALLA')"\r
        >\r
          Talla\r
        </button>\r
        <button\r
          type="button"\r
          class="motivo-card"\r
          [class.motivo-card--activo]="motivo() === 'DEFECTO'"\r
          (click)="seleccionarMotivo('DEFECTO')"\r
        >\r
          Defecto\r
        </button>\r
        <button\r
          type="button"\r
          class="motivo-card"\r
          [class.motivo-card--activo]="motivo() === 'PRODUCTO_INCORRECTO'"\r
          (click)="seleccionarMotivo('PRODUCTO_INCORRECTO')"\r
        >\r
          Incorrecto\r
        </button>\r
        <button\r
          type="button"\r
          class="motivo-card"\r
          [class.motivo-card--activo]="motivo() === 'OTRO'"\r
          (click)="seleccionarMotivo('OTRO')"\r
        >\r
          Otro\r
        </button>\r
      </div>\r
    </div>\r
\r
    @if (motivo() === 'OTRO') {\r
      <label class="campo">\r
        <span class="campo__label">Observaci\xF3n</span>\r
        <input\r
          type="text"\r
          class="campo__input"\r
          maxlength="300"\r
          [value]="observacion()"\r
          (input)="actualizarObservacion($any($event.target).value)"\r
          placeholder="Describe brevemente el motivo"\r
        />\r
      </label>\r
    }\r
\r
    <div class="modal-ficha__acciones">\r
      <button type="button" class="btn btn--ghost" (click)="onCerrar()">Cancelar</button>\r
      <button type="button" class="btn btn--primary" [disabled]="!puedeConfirmar()" (click)="confirmar()">\r
        {{ enviando() ? 'Confirmando...' : 'Confirmar' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/cajero/devoluciones-cambios/devolver-modal/devolver-modal.scss */\n:host {\n  display: block;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: color-mix(in srgb, black 45%, transparent);\n  animation: devolver-modal-aparecer 0.15s ease;\n}\n@keyframes devolver-modal-aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-ficha {\n  width: 100%;\n  max-width: 440px;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--color-white);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 22px;\n}\n.modal-ficha__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-ficha__titulo {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--color-text);\n}\n.modal-ficha__cerrar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n}\n.modal-ficha__cerrar:hover {\n  background: var(--color-border);\n  color: var(--color-text);\n}\n.prenda-resumen {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px 14px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n}\n.prenda-resumen__nombre {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.prenda-resumen__variante {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.prenda-resumen__comprada {\n  margin-top: 2px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.campo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.campo__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.campo__ayuda {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.campo__input {\n  padding: 10px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 14px;\n  color: var(--color-text);\n}\n.campo__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.cantidad-control {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cantidad-control__btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.cantidad-control__btn:disabled {\n  opacity: 0.4;\n}\n.cantidad-control__btn:not(:disabled):hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.cantidad-control__input {\n  width: 64px;\n  padding: 8px 10px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.cantidad-control__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.motivos {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.motivo-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 10px 6px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--color-text);\n  transition:\n    border-color var(--transition-fast),\n    background var(--transition-fast),\n    color var(--transition-fast);\n}\n.motivo-card:hover {\n  border-color: var(--color-primary);\n}\n.motivo-card--activo {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n  box-shadow: inset 0 0 0 1.5px var(--color-primary);\n}\n.modal-ficha__acciones {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-ficha__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 110px;\n}\n@media (max-width: 560px) {\n  .modal-overlay {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .modal-ficha {\n    max-width: none;\n    width: 100%;\n    max-height: 92vh;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  }\n  .motivos {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .modal-ficha__acciones {\n    flex-direction: column-reverse;\n  }\n  .modal-ficha__acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=devolver-modal-TXRX7XZ4.css.map */\n"] }]
  }], null, { ventaId: [{ type: Input, args: [{ isSignal: true, alias: "ventaId", required: true }] }], detalle: [{ type: Input, args: [{ isSignal: true, alias: "detalle", required: true }] }], cerrar: [{ type: Output, args: ["cerrar"] }], registrada: [{ type: Output, args: ["registrada"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DevolverModal, { className: "DevolverModal", filePath: "src/app/features/cajero/devoluciones-cambios/devolver-modal/devolver-modal.ts", lineNumber: 22 });
})();

// src/app/features/cajero/devoluciones-cambios/devoluciones-cambios.ts
var _forTrack02 = ($index, $item) => $item.venta_detalle_id;
function DevolucionesCambios_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 8);
    \u0275\u0275text(2, "No se encontr\xF3 la venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function DevolucionesCambios_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", v_r2.cliente_nombre);
  }
}
function DevolucionesCambios_Conditional_13_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-icon", 15);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "Ya no hay prendas disponibles para devolver o cambiar.");
    \u0275\u0275elementEnd()();
  }
}
function DevolucionesCambios_Conditional_13_Conditional_25_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const detalle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.resolveMediaUrl(detalle_r4.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", detalle_r4.producto.nombre);
  }
}
function DevolucionesCambios_Conditional_13_Conditional_25_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "app-icon", 28);
    \u0275\u0275elementEnd();
  }
}
function DevolucionesCambios_Conditional_13_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DevolucionesCambios_Conditional_13_Conditional_25_For_2_Conditional_2_Template, 1, 2, "img", 18)(3, DevolucionesCambios_Conditional_13_Conditional_25_For_2_Conditional_3_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25)(14, "button", 26);
    \u0275\u0275listener("click", function DevolucionesCambios_Conditional_13_Conditional_25_For_2_Template_button_click_14_listener() {
      const detalle_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.abrirDevolver(detalle_r4));
    });
    \u0275\u0275text(15, " Devolver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 27);
    \u0275\u0275listener("click", function DevolucionesCambios_Conditional_13_Conditional_25_For_2_Template_button_click_16_listener() {
      const detalle_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.abrirCambiar(detalle_r4));
    });
    \u0275\u0275text(17, " Cambiar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const detalle_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(detalle_r4.producto.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(detalle_r4.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", detalle_r4.variante.color.nombre, " \xB7 Talla ", detalle_r4.variante.talla.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Comprada: ", detalle_r4.cantidad_comprada, " \xB7 Disponible: ", detalle_r4.cantidad_disponible, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", detalle_r4.precio_unitario.toFixed(2), " c/u");
  }
}
function DevolucionesCambios_Conditional_13_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 14);
    \u0275\u0275repeaterCreate(1, DevolucionesCambios_Conditional_13_Conditional_25_For_2_Template, 18, 7, "li", 16, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(v_r2.detalles);
  }
}
function DevolucionesCambios_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "span")(8, "strong");
    \u0275\u0275text(9, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span")(12, "strong");
    \u0275\u0275text(13, "Sucursal:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, DevolucionesCambios_Conditional_13_Conditional_15_Template, 4, 1, "span");
    \u0275\u0275elementStart(16, "span")(17, "strong");
    \u0275\u0275text(18, "Pago:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "strong");
    \u0275\u0275text(22, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(24, DevolucionesCambios_Conditional_13_Conditional_24_Template, 4, 0, "div", 7)(25, DevolucionesCambios_Conditional_13_Conditional_25_Template, 3, 0, "ul", 14);
  }
  if (rf & 2) {
    const v_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Venta ", v_r2.codigo_venta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.tipo === "DIGITAL" ? "Digital" : "Presencial");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fecha(v_r2.fecha_creacion));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", v_r2.sucursal.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r2.cliente_nombre ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.etiquetaMetodo(v_r2.metodo_pago));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Bs ", v_r2.total.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r2.detalles.length === 0 ? 24 : 25);
  }
}
function DevolucionesCambios_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "No se encontr\xF3 una venta pagada con ese c\xF3digo.");
    \u0275\u0275elementEnd()();
  }
}
function DevolucionesCambios_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-devolver-modal", 30);
    \u0275\u0275listener("cerrar", function DevolucionesCambios_Conditional_15_Conditional_0_Template_app_devolver_modal_cerrar_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cerrarDevolver());
    })("registrada", function DevolucionesCambios_Conditional_15_Conditional_0_Template_app_devolver_modal_registrada_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOperacionRegistrada());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("ventaId", v_r6.venta_id)("detalle", ctx);
  }
}
function DevolucionesCambios_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-cambiar-modal", 30);
    \u0275\u0275listener("cerrar", function DevolucionesCambios_Conditional_15_Conditional_1_Template_app_cambiar_modal_cerrar_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cerrarCambiar());
    })("registrada", function DevolucionesCambios_Conditional_15_Conditional_1_Template_app_cambiar_modal_registrada_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOperacionRegistrada());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("ventaId", v_r6.venta_id)("detalle", ctx);
  }
}
function DevolucionesCambios_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DevolucionesCambios_Conditional_15_Conditional_0_Template, 1, 2, "app-devolver-modal", 29);
    \u0275\u0275conditionalCreate(1, DevolucionesCambios_Conditional_15_Conditional_1_Template, 1, 2, "app-cambiar-modal", 29);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.detalleParaDevolver()) ? 0 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.detalleParaCambiar()) ? 1 : -1, tmp_3_0);
  }
}
var DevolucionesCambios = class _DevolucionesCambios {
  service = inject(DevolucionCambioService);
  route = inject(ActivatedRoute);
  resolveMediaUrl = resolveMediaUrl;
  codigo = signal(
    "",
    ...ngDevMode ? [{ debugName: "codigo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  buscando = signal(
    false,
    ...ngDevMode ? [{ debugName: "buscando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  seBusco = signal(
    false,
    ...ngDevMode ? [{ debugName: "seBusco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  venta = signal(
    null,
    ...ngDevMode ? [{ debugName: "venta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detalleParaDevolver = signal(
    null,
    ...ngDevMode ? [{ debugName: "detalleParaDevolver" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detalleParaCambiar = signal(
    null,
    ...ngDevMode ? [{ debugName: "detalleParaCambiar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const codigoPreparado = this.route.snapshot.queryParamMap.get("codigo");
    if (codigoPreparado) {
      this.codigo.set(codigoPreparado.toUpperCase());
      this.buscar();
    }
  }
  actualizarCodigo(valor) {
    this.codigo.set(valor.toUpperCase());
  }
  buscar() {
    const codigo = this.codigo().trim();
    if (!codigo || this.buscando()) {
      return;
    }
    this.buscando.set(true);
    this.errorMessage.set(null);
    this.venta.set(null);
    this.service.buscarVenta(codigo).subscribe({
      next: (venta) => {
        this.buscando.set(false);
        this.seBusco.set(true);
        this.venta.set(venta);
      },
      error: (err) => {
        this.buscando.set(false);
        this.seBusco.set(true);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.errorMessage.set(detalle ?? "No se pudo buscar la venta. Int\xE9ntalo nuevamente.");
      }
    });
  }
  abrirDevolver(detalle) {
    this.detalleParaDevolver.set(detalle);
  }
  cerrarDevolver() {
    this.detalleParaDevolver.set(null);
  }
  abrirCambiar(detalle) {
    this.detalleParaCambiar.set(detalle);
  }
  cerrarCambiar() {
    this.detalleParaCambiar.set(null);
  }
  onOperacionRegistrada() {
    this.detalleParaDevolver.set(null);
    this.detalleParaCambiar.set(null);
    const actual = this.venta();
    if (!actual) {
      return;
    }
    this.service.buscarVenta(actual.codigo_venta).subscribe({
      next: (venta) => this.venta.set(venta)
    });
  }
  etiquetaMetodo(metodo) {
    const etiquetas = {
      STRIPE: "Stripe",
      EFECTIVO: "Efectivo",
      TARJETA: "Tarjeta",
      QR: "QR"
    };
    return etiquetas[metodo] ?? metodo;
  }
  fecha(iso) {
    const fecha = new Date(iso);
    const dd = String(fecha.getDate()).padStart(2, "0");
    const mm = String(fecha.getMonth() + 1).padStart(2, "0");
    const hh = String(fecha.getHours()).padStart(2, "0");
    const min = String(fecha.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${fecha.getFullYear()} ${hh}:${min}`;
  }
  static \u0275fac = function DevolucionesCambios_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevolucionesCambios)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DevolucionesCambios, selectors: [["app-devoluciones-cambios"]], decls: 16, vars: 5, consts: [[1, "page-header"], [1, "buscador"], [1, "campo"], [1, "campo__label"], ["type", "text", "placeholder", "VT-00000", 1, "campo__input", 3, "input", "keyup.enter", "value"], ["type", "button", 1, "btn", "btn--primary", "buscador__boton", 3, "click", "disabled"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "state-block__title"], [1, "venta-card"], [1, "venta-card__header"], [1, "venta-card__codigo"], [1, "venta-card__tipo"], [1, "venta-card__datos"], [1, "detalles-lista"], ["name", "bag", 2, "width", "26px", "height", "26px"], [1, "detalle-card"], [1, "detalle-card__imagen"], [3, "src", "alt"], [1, "detalle-card__placeholder"], [1, "detalle-card__info"], [1, "detalle-card__nombre"], [1, "detalle-card__variante"], [1, "detalle-card__cantidad"], [1, "detalle-card__precio"], [1, "detalle-card__acciones"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click"], ["name", "products", 2, "width", "20px", "height", "20px"], [3, "ventaId", "detalle"], [3, "cerrar", "registrada", "ventaId", "detalle"]], template: function DevolucionesCambios_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Devoluciones y cambios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Gestiona prendas de ventas realizadas.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "label", 2)(7, "span", 3);
      \u0275\u0275text(8, "Buscar venta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 4);
      \u0275\u0275listener("input", function DevolucionesCambios_Template_input_input_9_listener($event) {
        return ctx.actualizarCodigo($event.target.value);
      })("keyup.enter", function DevolucionesCambios_Template_input_keyup_enter_9_listener() {
        return ctx.buscar();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275listener("click", function DevolucionesCambios_Template_button_click_10_listener() {
        return ctx.buscar();
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, DevolucionesCambios_Conditional_12_Template, 5, 1, "div", 6)(13, DevolucionesCambios_Conditional_13_Template, 26, 8)(14, DevolucionesCambios_Conditional_14_Template, 3, 0, "div", 7);
      \u0275\u0275conditionalCreate(15, DevolucionesCambios_Conditional_15_Template, 2, 2);
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.codigo());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.buscando());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.buscando() ? "Buscando..." : "Buscar", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 12 : (tmp_3_0 = ctx.venta()) ? 13 : ctx.seBusco() ? 14 : -1, tmp_3_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_4_0 = ctx.venta()) ? 15 : -1, tmp_4_0);
    }
  }, dependencies: [Icon, DevolverModal, CambiarModal], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.buscador[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  max-width: 420px;\n  margin-bottom: 24px;\n}\n.campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.campo__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.campo__input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 14px;\n  color: var(--%NS%color-text);\n  text-transform: uppercase;\n}\n.campo__input[_ngcontent-%COMP%]::placeholder {\n  text-transform: none;\n}\n.campo__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.buscador__boton[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.venta-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 16px 18px;\n  margin-bottom: 20px;\n}\n.venta-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.venta-card__codigo[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.venta-card__tipo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.venta-card__datos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.venta-card__datos[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.detalles-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 14px;\n  flex-wrap: wrap;\n}\n.detalle-card__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.detalle-card__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-card__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.detalle-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detalle-card__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.detalle-card__variante[_ngcontent-%COMP%], \n.detalle-card__cantidad[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.detalle-card__precio[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.detalle-card__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.detalle-card__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 92px;\n}\n@media (max-width: 560px) {\n  .buscador[_ngcontent-%COMP%] {\n    max-width: none;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .buscador__boton[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detalle-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .detalle-card__info[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .detalle-card__acciones[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detalle-card__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=devoluciones-cambios-LXN57J65.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevolucionesCambios, [{
    type: Component,
    args: [{ selector: "app-devoluciones-cambios", imports: [Icon, DevolverModal, CambiarModal], template: `<div class="page-header">\r
  <h1>Devoluciones y cambios</h1>\r
  <p>Gestiona prendas de ventas realizadas.</p>\r
</div>\r
\r
<div class="buscador">\r
  <label class="campo">\r
    <span class="campo__label">Buscar venta</span>\r
    <input\r
      type="text"\r
      class="campo__input"\r
      placeholder="VT-00000"\r
      [value]="codigo()"\r
      (input)="actualizarCodigo($any($event.target).value)"\r
      (keyup.enter)="buscar()"\r
    />\r
  </label>\r
  <button type="button" class="btn btn--primary buscador__boton" [disabled]="buscando()" (click)="buscar()">\r
    {{ buscando() ? 'Buscando...' : 'Buscar' }}\r
  </button>\r
</div>\r
\r
@if (errorMessage()) {\r
  <div class="state-block state-block--error">\r
    <span class="state-block__title">No se encontr\xF3 la venta</span>\r
    <span>{{ errorMessage() }}</span>\r
  </div>\r
} @else if (venta(); as v) {\r
  <section class="venta-card">\r
    <div class="venta-card__header">\r
      <span class="venta-card__codigo">Venta {{ v.codigo_venta }}</span>\r
      <span class="venta-card__tipo">{{ v.tipo === 'DIGITAL' ? 'Digital' : 'Presencial' }}</span>\r
    </div>\r
\r
    <div class="venta-card__datos">\r
      <span><strong>Fecha:</strong> {{ fecha(v.fecha_creacion) }}</span>\r
      <span><strong>Sucursal:</strong> {{ v.sucursal.nombre }}</span>\r
      @if (v.cliente_nombre) {\r
        <span><strong>Cliente:</strong> {{ v.cliente_nombre }}</span>\r
      }\r
      <span><strong>Pago:</strong> {{ etiquetaMetodo(v.metodo_pago) }}</span>\r
      <span><strong>Total:</strong> Bs {{ v.total.toFixed(2) }}</span>\r
    </div>\r
  </section>\r
\r
  @if (v.detalles.length === 0) {\r
    <div class="state-block">\r
      <app-icon name="bag" style="width: 26px; height: 26px" />\r
      <span class="state-block__title">Ya no hay prendas disponibles para devolver o cambiar.</span>\r
    </div>\r
  } @else {\r
    <ul class="detalles-lista">\r
      @for (detalle of v.detalles; track detalle.venta_detalle_id) {\r
        <li class="detalle-card">\r
          <div class="detalle-card__imagen">\r
            @if (detalle.producto.imagen_principal_url) {\r
              <img\r
                [src]="resolveMediaUrl(detalle.producto.imagen_principal_url)"\r
                [alt]="detalle.producto.nombre"\r
              />\r
            } @else {\r
              <div class="detalle-card__placeholder">\r
                <app-icon name="products" style="width: 20px; height: 20px" />\r
              </div>\r
            }\r
          </div>\r
\r
          <div class="detalle-card__info">\r
            <span class="detalle-card__nombre">{{ detalle.producto.nombre }}</span>\r
            <span class="detalle-card__variante">\r
              {{ detalle.variante.color.nombre }} \xB7 Talla {{ detalle.variante.talla.nombre }}\r
            </span>\r
            <span class="detalle-card__cantidad">\r
              Comprada: {{ detalle.cantidad_comprada }} \xB7 Disponible: {{ detalle.cantidad_disponible }}\r
            </span>\r
            <span class="detalle-card__precio">Bs {{ detalle.precio_unitario.toFixed(2) }} c/u</span>\r
          </div>\r
\r
          <div class="detalle-card__acciones">\r
            <button type="button" class="btn btn--ghost btn--sm" (click)="abrirDevolver(detalle)">\r
              Devolver\r
            </button>\r
            <button type="button" class="btn btn--primary btn--sm" (click)="abrirCambiar(detalle)">\r
              Cambiar\r
            </button>\r
          </div>\r
        </li>\r
      }\r
    </ul>\r
  }\r
} @else if (seBusco()) {\r
  <div class="state-block">\r
    <span class="state-block__title">No se encontr\xF3 una venta pagada con ese c\xF3digo.</span>\r
  </div>\r
}\r
\r
@if (venta(); as v) {\r
  @if (detalleParaDevolver(); as detalle) {\r
    <app-devolver-modal\r
      [ventaId]="v.venta_id"\r
      [detalle]="detalle"\r
      (cerrar)="cerrarDevolver()"\r
      (registrada)="onOperacionRegistrada()"\r
    />\r
  }\r
  @if (detalleParaCambiar(); as detalle) {\r
    <app-cambiar-modal\r
      [ventaId]="v.venta_id"\r
      [detalle]="detalle"\r
      (cerrar)="cerrarCambiar()"\r
      (registrada)="onOperacionRegistrada()"\r
    />\r
  }\r
}\r
`, styles: ["/* src/app/features/cajero/devoluciones-cambios/devoluciones-cambios.scss */\n:host {\n  display: block;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.buscador {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  max-width: 420px;\n  margin-bottom: 24px;\n}\n.campo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.campo__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.campo__input {\n  padding: 10px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 14px;\n  color: var(--color-text);\n  text-transform: uppercase;\n}\n.campo__input::placeholder {\n  text-transform: none;\n}\n.campo__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.buscador__boton {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.venta-card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 16px 18px;\n  margin-bottom: 20px;\n}\n.venta-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.venta-card__codigo {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.venta-card__tipo {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.venta-card__datos {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n  font-size: 13px;\n  color: var(--color-text);\n}\n.venta-card__datos strong {\n  font-weight: 700;\n}\n.detalles-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 14px;\n  flex-wrap: wrap;\n}\n.detalle-card__imagen {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.detalle-card__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-card__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.detalle-card__info {\n  flex: 1;\n  min-width: 180px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detalle-card__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.detalle-card__variante,\n.detalle-card__cantidad {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.detalle-card__precio {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.detalle-card__acciones {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.detalle-card__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 92px;\n}\n@media (max-width: 560px) {\n  .buscador {\n    max-width: none;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .buscador__boton {\n    width: 100%;\n  }\n  .detalle-card {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .detalle-card__info {\n    min-width: 0;\n  }\n  .detalle-card__acciones {\n    width: 100%;\n  }\n  .detalle-card__acciones .btn {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=devoluciones-cambios-LXN57J65.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DevolucionesCambios, { className: "DevolucionesCambios", filePath: "src/app/features/cajero/devoluciones-cambios/devoluciones-cambios.ts", lineNumber: 36 });
})();
export {
  DevolucionesCambios
};
//# debugId=11ae57d2-af9a-5a3d-95c5-f9c331478750
//# sourceMappingURL=chunk-VRXT2IRB.js.map
