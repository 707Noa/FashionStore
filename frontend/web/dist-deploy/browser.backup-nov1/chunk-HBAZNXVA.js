import {
  formatearFechaReserva,
  formatearHorarioReserva
} from "./chunk-KHVJ4PNO.js";
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
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Component,
  Injectable,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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

// src/app/features/reservas/cancelar-reserva/cancelar-reserva.service.ts
var CancelarReservaService = class _CancelarReservaService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/reservas`;
  cancelarDetalle(detalleId) {
    return this.http.patch(`${this.baseUrl}/detalles/${detalleId}/cancelar`, {});
  }
  static \u0275fac = function CancelarReservaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CancelarReservaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CancelarReservaService, factory: _CancelarReservaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelarReservaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/reservas/cancelar-reserva/cancelar-reserva.ts
function CancelarReserva_Conditional_0_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(ctx_r1.detalle().producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", ctx_r1.detalle().producto.nombre);
  }
}
function CancelarReserva_Conditional_0_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-icon", 18);
    \u0275\u0275elementEnd();
  }
}
function CancelarReserva_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function CancelarReserva_Conditional_0_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    })("keydown.escape", function CancelarReserva_Conditional_0_Conditional_2_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("click", function CancelarReserva_Conditional_0_Conditional_2_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "h2", 5);
    \u0275\u0275text(4, "\xBFDeseas cancelar esta prenda?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 6);
    \u0275\u0275listener("click", function CancelarReserva_Conditional_0_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
    \u0275\u0275conditionalCreate(9, CancelarReserva_Conditional_0_Conditional_2_Conditional_9_Template, 1, 2, "img", 9)(10, CancelarReserva_Conditional_0_Conditional_2_Conditional_10_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "span", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 13);
    \u0275\u0275element(17, "app-icon", 14);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 15)(22, "button", 16);
    \u0275\u0275listener("click", function CancelarReserva_Conditional_0_Conditional_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275text(23, " Volver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 17);
    \u0275\u0275listener("click", function CancelarReserva_Conditional_0_Conditional_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmar());
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.detalle().producto.imagen_principal_url ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.detalle().producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Reserva ", ctx_r1.reserva().codigo_reserva);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.reserva().sucursal.nombre, " \xB7 ", ctx_r1.reserva().sucursal.ciudad.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.fecha, " \xB7 ", ctx_r1.horario);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cancelando());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cancelando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancelando() ? "Cancelando..." : "Cancelar prenda", " ");
  }
}
function CancelarReserva_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function CancelarReserva_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrir());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, CancelarReserva_Conditional_0_Conditional_2_Template, 26, 10, "div", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modalAbierto() ? 2 : -1);
  }
}
var CancelarReserva = class _CancelarReserva {
  service = inject(CancelarReservaService);
  toast = inject(ToastService);
  reserva = input.required(
    ...ngDevMode ? [{ debugName: "reserva" }] : (
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
  cancelada = output();
  resolveMediaUrl = resolveMediaUrl;
  modalAbierto = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalAbierto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cancelando = signal(
    false,
    ...ngDevMode ? [{ debugName: "cancelando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // CU20 (Atender reserva de prendas) amplió los estados: cancelar sigue
  // permitido mientras esa prenda todavía no haya llegado a la sucursal
  // (PENDIENTE o PREPARADA) -- desde EN_ATENCION en adelante el Encargado ya
  // empezó a atenderla (ver backend CU19_CancelarReserva/service.py).
  get puedeCancelar() {
    return this.detalle().estado === "PENDIENTE" || this.detalle().estado === "PREPARADA";
  }
  get fecha() {
    return formatearFechaReserva(this.reserva().fecha_reserva);
  }
  get horario() {
    return formatearHorarioReserva(this.reserva().hora_inicio, this.reserva().hora_fin);
  }
  abrir() {
    this.modalAbierto.set(true);
  }
  cerrar() {
    if (this.cancelando()) {
      return;
    }
    this.modalAbierto.set(false);
  }
  confirmar() {
    if (this.cancelando()) {
      return;
    }
    this.cancelando.set(true);
    this.service.cancelarDetalle(this.detalle().id).subscribe({
      next: (actualizado) => {
        this.cancelando.set(false);
        this.modalAbierto.set(false);
        this.toast.brand("Prenda cancelada correctamente.");
        this.cancelada.emit(actualizado);
      },
      error: (err) => {
        this.cancelando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo cancelar la reserva. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function CancelarReserva_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CancelarReserva)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CancelarReserva, selectors: [["app-cancelar-reserva"]], inputs: { reserva: [1, "reserva"], detalle: [1, "detalle"] }, outputs: { cancelada: "cancelada" }, decls: 1, vars: 1, consts: [["type", "button", 1, "btn", "btn--primary", "btn--sm", "cancelar-btn", 3, "click"], [1, "cancelar-modal-overlay"], [1, "cancelar-modal-overlay", 3, "click", "keydown.escape"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "cancelar-modal-titulo", 1, "cancelar-modal", 3, "click"], [1, "cancelar-modal__header"], ["id", "cancelar-modal-titulo"], ["type", "button", "aria-label", "Cerrar", 1, "cancelar-modal__cerrar", 3, "click"], [1, "cancelar-modal__resumen"], [1, "cancelar-modal__imagen"], [3, "src", "alt"], [1, "cancelar-modal__placeholder"], [1, "cancelar-modal__datos"], [1, "cancelar-modal__nombre"], [1, "cancelar-modal__linea"], ["name", "branches", 2, "width", "12px", "height", "12px"], [1, "cancelar-modal__acciones"], ["type", "button", 1, "btn", "btn--ghost", "cancelar-modal__volver", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--primary", "cancelar-modal__confirmar", 3, "click", "disabled"], ["name", "products", 2, "width", "22px", "height", "22px"]], template: function CancelarReserva_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CancelarReserva_Conditional_0_Template, 3, 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.puedeCancelar ? 0 : -1);
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 4px;\n}\n.cancelar-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.45);\n  animation: _ngcontent-%COMP%_cancelar-overlay-in 150ms ease;\n}\n.cancelar-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 380px;\n  padding: 20px;\n  border-radius: var(--%NS%radius-lg);\n  background: var(--%NS%color-white);\n  box-shadow: var(--%NS%shadow-medium);\n  animation: _ngcontent-%COMP%_cancelar-modal-in 180ms ease;\n}\n.cancelar-modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.cancelar-modal__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.cancelar-modal__cerrar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: none;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n}\n.cancelar-modal__cerrar[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, var(--%NS%color-bg));\n  color: var(--%NS%color-primary);\n}\n.cancelar-modal__resumen[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-bg);\n}\n.cancelar-modal__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--%NS%radius-sm);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.cancelar-modal__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cancelar-modal__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.cancelar-modal__datos[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  justify-content: center;\n}\n.cancelar-modal__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  overflow-wrap: break-word;\n}\n.cancelar-modal__linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.cancelar-modal__linea[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  flex-shrink: 0;\n}\n.cancelar-modal__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.cancelar-modal__volver[_ngcontent-%COMP%], \n.cancelar-modal__confirmar[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: center;\n}\n@keyframes _ngcontent-%COMP%_cancelar-overlay-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_cancelar-modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .cancelar-modal-overlay[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .cancelar-modal[_ngcontent-%COMP%] {\n    max-width: none;\n    border-radius: var(--%NS%radius-lg) var(--%NS%radius-lg) 0 0;\n    animation: _ngcontent-%COMP%_cancelar-modal-in-mobile 200ms ease;\n  }\n  .cancelar-modal__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancelar-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_cancelar-modal-in-mobile {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=cancelar-reserva-C6P6ZPPQ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelarReserva, [{
    type: Component,
    args: [{ selector: "app-cancelar-reserva", imports: [Icon], template: `@if (puedeCancelar) {\r
  <button type="button" class="btn btn--primary btn--sm cancelar-btn" (click)="abrir()">\r
    Cancelar\r
  </button>\r
\r
  @if (modalAbierto()) {\r
    <div class="cancelar-modal-overlay" (click)="cerrar()" (keydown.escape)="cerrar()">\r
      <div\r
        class="cancelar-modal"\r
        role="dialog"\r
        aria-modal="true"\r
        aria-labelledby="cancelar-modal-titulo"\r
        (click)="$event.stopPropagation()"\r
      >\r
        <div class="cancelar-modal__header">\r
          <h2 id="cancelar-modal-titulo">\xBFDeseas cancelar esta prenda?</h2>\r
          <button type="button" class="cancelar-modal__cerrar" (click)="cerrar()" aria-label="Cerrar">\u2715</button>\r
        </div>\r
\r
        <div class="cancelar-modal__resumen">\r
          <div class="cancelar-modal__imagen">\r
            @if (detalle().producto.imagen_principal_url) {\r
              <img\r
                [src]="resolveMediaUrl(detalle().producto.imagen_principal_url)"\r
                [alt]="detalle().producto.nombre"\r
              />\r
            } @else {\r
              <div class="cancelar-modal__placeholder">\r
                <app-icon name="products" style="width: 22px; height: 22px" />\r
              </div>\r
            }\r
          </div>\r
          <div class="cancelar-modal__datos">\r
            <span class="cancelar-modal__nombre">{{ detalle().producto.nombre }}</span>\r
            <span class="cancelar-modal__linea">Reserva {{ reserva().codigo_reserva }}</span>\r
            <span class="cancelar-modal__linea">\r
              <app-icon name="branches" style="width: 12px; height: 12px" />\r
              {{ reserva().sucursal.nombre }} \xB7 {{ reserva().sucursal.ciudad.nombre }}\r
            </span>\r
            <span class="cancelar-modal__linea">{{ fecha }} \xB7 {{ horario }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="cancelar-modal__acciones">\r
          <button\r
            type="button"\r
            class="btn btn--ghost cancelar-modal__volver"\r
            [disabled]="cancelando()"\r
            (click)="cerrar()"\r
          >\r
            Volver\r
          </button>\r
          <button\r
            type="button"\r
            class="btn btn--primary cancelar-modal__confirmar"\r
            [disabled]="cancelando()"\r
            (click)="confirmar()"\r
          >\r
            {{ cancelando() ? 'Cancelando...' : 'Cancelar prenda' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
}\r
`, styles: ["/* src/app/features/reservas/cancelar-reserva/cancelar-reserva.scss */\n:host {\n  display: block;\n  margin-top: 4px;\n}\n.cancelar-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.45);\n  animation: cancelar-overlay-in 150ms ease;\n}\n.cancelar-modal {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 380px;\n  padding: 20px;\n  border-radius: var(--radius-lg);\n  background: var(--color-white);\n  box-shadow: var(--shadow-medium);\n  animation: cancelar-modal-in 180ms ease;\n}\n.cancelar-modal__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.cancelar-modal__header h2 {\n  margin: 0;\n  font-size: 16.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.cancelar-modal__cerrar {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: none;\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n}\n.cancelar-modal__cerrar:hover {\n  background: color-mix(in srgb, var(--color-primary) 10%, var(--color-bg));\n  color: var(--color-primary);\n}\n.cancelar-modal__resumen {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: var(--radius-md);\n  background: var(--color-bg);\n}\n.cancelar-modal__imagen {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.cancelar-modal__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cancelar-modal__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.cancelar-modal__datos {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  justify-content: center;\n}\n.cancelar-modal__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n  overflow-wrap: break-word;\n}\n.cancelar-modal__linea {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.cancelar-modal__linea app-icon {\n  color: var(--color-primary);\n  flex-shrink: 0;\n}\n.cancelar-modal__acciones {\n  display: flex;\n  gap: 10px;\n}\n.cancelar-modal__volver,\n.cancelar-modal__confirmar {\n  flex: 1;\n  justify-content: center;\n}\n@keyframes cancelar-overlay-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes cancelar-modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .cancelar-modal-overlay {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .cancelar-modal {\n    max-width: none;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n    animation: cancelar-modal-in-mobile 200ms ease;\n  }\n  .cancelar-modal__acciones {\n    flex-direction: column-reverse;\n  }\n  .cancelar-btn {\n    width: 100%;\n  }\n}\n@keyframes cancelar-modal-in-mobile {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=cancelar-reserva-C6P6ZPPQ.css.map */\n"] }]
  }], null, { reserva: [{ type: Input, args: [{ isSignal: true, alias: "reserva", required: true }] }], detalle: [{ type: Input, args: [{ isSignal: true, alias: "detalle", required: true }] }], cancelada: [{ type: Output, args: ["cancelada"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CancelarReserva, { className: "CancelarReserva", filePath: "src/app/features/reservas/cancelar-reserva/cancelar-reserva.ts", lineNumber: 40 });
})();

// src/app/features/reservas/estado-reserva.ts
var ETIQUETAS_ESTADO_RESERVA = {
  PENDIENTE: "Pendiente de preparaci\xF3n",
  PREPARADA: "Lista para tu visita",
  EN_ATENCION: "En atenci\xF3n",
  LISTA_PARA_CAJA: "En proceso en sucursal",
  ATENDIDA: "Atendida",
  CANCELADA: "Cancelada",
  VENCIDA: "Vencida"
};
function etiquetaEstadoReserva(estado) {
  return ETIQUETAS_ESTADO_RESERVA[estado];
}

// src/app/features/reservas/mis-reservas/mis-reservas.service.ts
var MisReservasService = class _MisReservasService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/reservas`;
  listarMias() {
    return this.http.get(`${this.baseUrl}/mias`);
  }
  static \u0275fac = function MisReservasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisReservasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MisReservasService, factory: _MisReservasService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReservasService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/reservas/mis-reservas/mis-reservas.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function MisReservas_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function MisReservas_For_8_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionarTab(tab_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r2.tabActiva() === tab_r2.key);
    \u0275\u0275attribute("aria-selected", ctx_r2.tabActiva() === tab_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.etiqueta, " ");
  }
}
function MisReservas_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function MisReservas_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, MisReservas_Conditional_9_For_2_Template, 1, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function MisReservas_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 9);
    \u0275\u0275text(2, "No se pudo cargar tu informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function MisReservas_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cargar());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function MisReservas_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-icon", 11);
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.mensajeVacio);
  }
}
function MisReservas_Conditional_12_For_2_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const detalle_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.resolveMediaUrl(detalle_r6.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", detalle_r6.producto.nombre);
  }
}
function MisReservas_Conditional_12_For_2_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "app-icon", 30);
    \u0275\u0275elementEnd();
  }
}
function MisReservas_Conditional_12_For_2_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const detalle_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 x", detalle_r6.cantidad, " ");
  }
}
function MisReservas_Conditional_12_For_2_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 21)(1, "div", 22);
    \u0275\u0275conditionalCreate(2, MisReservas_Conditional_12_For_2_For_18_Conditional_2_Template, 1, 2, "img", 23)(3, MisReservas_Conditional_12_For_2_For_18_Conditional_3_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, MisReservas_Conditional_12_For_2_For_18_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 28);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "app-cancelar-reserva", 29);
    \u0275\u0275listener("cancelada", function MisReservas_Conditional_12_For_2_For_18_Template_app_cancelar_reserva_cancelada_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const reserva_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDetalleCancelado(reserva_r7.id, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r6 = ctx.$implicit;
    const reserva_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(detalle_r6.producto.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(detalle_r6.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", detalle_r6.variante.color.nombre, " \xB7 Talla ", detalle_r6.variante.talla.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(detalle_r6.cantidad > 1 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("detalle-prenda__estado--" + detalle_r6.estado.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.etiquetaEstadoReserva(detalle_r6.estado), " ");
    \u0275\u0275advance();
    \u0275\u0275property("reserva", reserva_r7)("detalle", detalle_r6);
  }
}
function MisReservas_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 12)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275element(8, "app-icon", 18);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 19)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ul", 20);
    \u0275\u0275repeaterCreate(17, MisReservas_Conditional_12_For_2_For_18_Template, 13, 10, "li", 21, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Reserva ", reserva_r7.codigo_reserva);
    \u0275\u0275advance();
    \u0275\u0275classMap("reserva-card__estado--" + reserva_r7.estado_general.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.etiquetaEstadoReserva(reserva_r7.estado_general), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", reserva_r7.sucursal.nombre, " \xB7 ", reserva_r7.sucursal.ciudad.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fecha(reserva_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.horario(reserva_r7));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(reserva_r7.detalles);
  }
}
function MisReservas_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, MisReservas_Conditional_12_For_2_Template, 19, 8, "article", 12, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.reservasFiltradas());
  }
}
var TABS = [
  {
    key: "pendientes",
    etiqueta: "Pendientes",
    estados: ["PENDIENTE", "PREPARADA", "EN_ATENCION", "LISTA_PARA_CAJA"],
    vacio: "No tienes reservas pendientes."
  },
  {
    key: "atendidas",
    etiqueta: "Atendidas",
    estados: ["ATENDIDA"],
    vacio: "No tienes reservas atendidas."
  },
  {
    key: "canceladas",
    etiqueta: "Canceladas",
    estados: ["CANCELADA", "VENCIDA"],
    vacio: "No tienes reservas canceladas."
  }
];
var MisReservas = class _MisReservas {
  service = inject(MisReservasService);
  cargando = signal(
    true,
    ...ngDevMode ? [{ debugName: "cargando" }] : (
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
  reservas = signal(
    [],
    ...ngDevMode ? [{ debugName: "reservas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resolveMediaUrl = resolveMediaUrl;
  etiquetaEstadoReserva = etiquetaEstadoReserva;
  tabs = TABS;
  tabActiva = signal(
    "pendientes",
    ...ngDevMode ? [{ debugName: "tabActiva" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Filtra en Angular sobre la MISMA respuesta de GET /reservas/mias (CU17/18)
  // -- no hay endpoint nuevo ni parámetro de filtro: el volumen por Cliente
  // es chico y el backend ya trae todo lo necesario en una sola llamada.
  // Filtra por `estado_general` (agregado de TODOS los detalles, ver
  // Models/reserva.py:calcular_estado_general en el backend) -- una reserva
  // con prendas en distinto estado vive en una sola pestaña a la vez, igual
  // que antes de agrupar por reserva.
  reservasFiltradas = computed(
    () => {
      const estados = this.tabs.find((tab) => tab.key === this.tabActiva())?.estados ?? [];
      return this.reservas().filter((reserva) => estados.includes(reserva.estado_general));
    },
    ...ngDevMode ? [{ debugName: "reservasFiltradas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get mensajeVacio() {
    return this.tabs.find((tab) => tab.key === this.tabActiva())?.vacio ?? "";
  }
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.cargando.set(true);
    this.errorMessage.set(null);
    this.service.listarMias().subscribe({
      next: (reservas) => {
        this.reservas.set(reservas);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
        this.errorMessage.set("No se pudieron cargar tus reservas. Int\xE9ntalo nuevamente.");
      }
    });
  }
  horario(reserva) {
    return formatearHorarioReserva(reserva.hora_inicio, reserva.hora_fin);
  }
  fecha(reserva) {
    return formatearFechaReserva(reserva.fecha_reserva);
  }
  seleccionarTab(key) {
    this.tabActiva.set(key);
  }
  // CU19 -- Cancelar reserva: reemplaza SOLO ese detalle (esa prenda) dentro
  // de su reserva en el arreglo local -- feedback instantáneo, sin esperar
  // ninguna respuesta nueva (ver CancelarReserva.confirmar(), que emite el
  // detalle ya actualizado, con estado CANCELADA). El resto de la reserva
  // (y de sus otras prendas) queda intacto en la UI.
  //
  // `estado_general` de la cabecera (usado para decidir en qué pestaña vive
  // la tarjeta, ver reservasFiltradas) es un AGREGADO que solo el backend
  // sabe recalcular (Models/reserva.py:calcular_estado_general) -- por eso,
  // además del parche local, se refresca la lista en silencio (sin mostrar
  // el skeleton de `cargando`) para que la tarjeta caiga en la pestaña
  // correcta si ese cambio hizo que toda la reserva pasara, por ejemplo, de
  // "Pendientes" a "Canceladas".
  onDetalleCancelado(reservaId, detalleActualizado) {
    this.reservas.update((lista) => lista.map((reserva) => reserva.id !== reservaId ? reserva : __spreadProps(__spreadValues({}, reserva), {
      detalles: reserva.detalles.map((detalle) => detalle.id === detalleActualizado.id ? detalleActualizado : detalle)
    })));
    this.service.listarMias().subscribe({
      next: (reservas) => this.reservas.set(reservas),
      error: () => void 0
      // el parche local ya quedó aplicado -- un refresco fallido no es crítico.
    });
  }
  static \u0275fac = function MisReservas_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisReservas)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReservas, selectors: [["app-mis-reservas"]], decls: 13, vars: 1, consts: [[1, "container", "mis-reservas-page"], [1, "page-header"], ["role", "tablist", 1, "tabs-reserva"], ["type", "button", "role", "tab", 1, "tab-reserva", 3, "is-active"], [1, "reservas-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], ["type", "button", "role", "tab", 1, "tab-reserva", 3, "click"], [1, "skeleton-card"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["name", "reservations", 2, "width", "28px", "height", "28px"], [1, "reserva-card"], [1, "reserva-card__header"], [1, "reserva-card__header-top"], [1, "reserva-card__codigo"], [1, "reserva-card__estado"], [1, "reserva-card__sucursal"], ["name", "branches", 2, "width", "13px", "height", "13px"], [1, "reserva-card__horario"], [1, "reserva-card__detalles-lista"], [1, "detalle-prenda"], [1, "detalle-prenda__imagen"], [3, "src", "alt"], [1, "detalle-prenda__placeholder"], [1, "detalle-prenda__info"], [1, "detalle-prenda__nombre"], [1, "detalle-prenda__variante"], [1, "detalle-prenda__estado"], [3, "cancelada", "reserva", "detalle"], ["name", "products", 2, "width", "20px", "height", "20px"]], template: function MisReservas_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Mis reservas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Consulta el estado de las prendas que has reservado en nuestras sucursales.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275repeaterCreate(7, MisReservas_For_8_Template, 2, 4, "button", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, MisReservas_Conditional_9_Template, 3, 1, "div", 4)(10, MisReservas_Conditional_10_Template, 7, 1, "div", 5)(11, MisReservas_Conditional_11_Template, 4, 1, "div", 6)(12, MisReservas_Conditional_12_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cargando() ? 9 : ctx.errorMessage() ? 10 : ctx.reservasFiltradas().length === 0 ? 11 : 12);
    }
  }, dependencies: [Icon, CancelarReserva], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.mis-reservas-page[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 48px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.tabs-reserva[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.tab-reserva[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 999px;\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background var(--%NS%transition-fast),\n    border-color var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.tab-reserva[_ngcontent-%COMP%]:hover:not(.is-active) {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n}\n.tab-reserva.is-active[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.reservas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.reserva-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 14px;\n  transition: box-shadow var(--%NS%transition-fast);\n}\n.reserva-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--%NS%shadow-medium);\n}\n.reserva-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.reserva-card__header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__codigo[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.reserva-card__sucursal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text);\n}\n.reserva-card__sucursal[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  flex-shrink: 0;\n}\n.reserva-card__horario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px 8px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.reserva-card__estado[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.reserva-card__estado--pendiente[_ngcontent-%COMP%], \n.reserva-card__estado--preparada[_ngcontent-%COMP%], \n.reserva-card__estado--en_atencion[_ngcontent-%COMP%], \n.reserva-card__estado--lista_para_caja[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.reserva-card__estado--atendida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.reserva-card__estado--cancelada[_ngcontent-%COMP%], \n.reserva-card__estado--vencida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-inactive-bg);\n  color: var(--%NS%color-inactive-text);\n}\n.reserva-card__detalles-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-prenda[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.detalle-prenda[_ngcontent-%COMP%]    + .detalle-prenda[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.detalle-prenda__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.detalle-prenda__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-prenda__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.detalle-prenda__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detalle-prenda__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.detalle-prenda__variante[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.detalle-prenda__estado[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 2px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.detalle-prenda__estado--pendiente[_ngcontent-%COMP%], \n.detalle-prenda__estado--preparada[_ngcontent-%COMP%], \n.detalle-prenda__estado--en_atencion[_ngcontent-%COMP%], \n.detalle-prenda__estado--lista_para_caja[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.detalle-prenda__estado--atendida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.detalle-prenda__estado--cancelada[_ngcontent-%COMP%], \n.detalle-prenda__estado--vencida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-inactive-bg);\n  color: var(--%NS%color-inactive-text);\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 124px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 480px) {\n  .tab-reserva[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n    padding: 10px 12px;\n  }\n  .reservas-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detalle-prenda[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .cancelar-btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n}\n/*# sourceMappingURL=mis-reservas-NT6RZKA6.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReservas, [{
    type: Component,
    args: [{ selector: "app-mis-reservas", imports: [Icon, CancelarReserva], template: `<div class="container mis-reservas-page">\r
  <div class="page-header">\r
    <h1>Mis reservas</h1>\r
    <p>Consulta el estado de las prendas que has reservado en nuestras sucursales.</p>\r
  </div>\r
\r
  <div class="tabs-reserva" role="tablist">\r
    @for (tab of tabs; track tab.key) {\r
      <button\r
        type="button"\r
        class="tab-reserva"\r
        role="tab"\r
        [class.is-active]="tabActiva() === tab.key"\r
        [attr.aria-selected]="tabActiva() === tab.key"\r
        (click)="seleccionarTab(tab.key)"\r
      >\r
        {{ tab.etiqueta }}\r
      </button>\r
    }\r
  </div>\r
\r
  @if (cargando()) {\r
    <div class="reservas-grid">\r
      @for (i of [1, 2, 3]; track i) {\r
        <div class="skeleton-card"></div>\r
      }\r
    </div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar tu informaci\xF3n</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="cargar()">Reintentar</button>\r
    </div>\r
  } @else if (reservasFiltradas().length === 0) {\r
    <div class="state-block">\r
      <app-icon name="reservations" style="width: 28px; height: 28px" />\r
      <span class="state-block__title">{{ mensajeVacio }}</span>\r
    </div>\r
  } @else {\r
    <div class="reservas-grid">\r
      @for (reserva of reservasFiltradas(); track reserva.id) {\r
        <article class="reserva-card">\r
          <div class="reserva-card__header">\r
            <div class="reserva-card__header-top">\r
              <span class="reserva-card__codigo">Reserva {{ reserva.codigo_reserva }}</span>\r
              <span\r
                class="reserva-card__estado"\r
                [class]="'reserva-card__estado--' + reserva.estado_general.toLowerCase()"\r
              >\r
                {{ etiquetaEstadoReserva(reserva.estado_general) }}\r
              </span>\r
            </div>\r
\r
            <div class="reserva-card__sucursal">\r
              <app-icon name="branches" style="width: 13px; height: 13px" />\r
              <span>{{ reserva.sucursal.nombre }} \xB7 {{ reserva.sucursal.ciudad.nombre }}</span>\r
            </div>\r
\r
            <div class="reserva-card__horario">\r
              <span>{{ fecha(reserva) }}</span>\r
              <span>{{ horario(reserva) }}</span>\r
            </div>\r
          </div>\r
\r
          <ul class="reserva-card__detalles-lista">\r
            @for (detalle of reserva.detalles; track detalle.id) {\r
              <li class="detalle-prenda">\r
                <div class="detalle-prenda__imagen">\r
                  @if (detalle.producto.imagen_principal_url) {\r
                    <img\r
                      [src]="resolveMediaUrl(detalle.producto.imagen_principal_url)"\r
                      [alt]="detalle.producto.nombre"\r
                    />\r
                  } @else {\r
                    <div class="detalle-prenda__placeholder">\r
                      <app-icon name="products" style="width: 20px; height: 20px" />\r
                    </div>\r
                  }\r
                </div>\r
\r
                <div class="detalle-prenda__info">\r
                  <span class="detalle-prenda__nombre">{{ detalle.producto.nombre }}</span>\r
                  <span class="detalle-prenda__variante">\r
                    {{ detalle.variante.color.nombre }} \xB7 Talla {{ detalle.variante.talla.nombre }}\r
                    @if (detalle.cantidad > 1) {\r
                      \xB7 x{{ detalle.cantidad }}\r
                    }\r
                  </span>\r
                  <span\r
                    class="detalle-prenda__estado"\r
                    [class]="'detalle-prenda__estado--' + detalle.estado.toLowerCase()"\r
                  >\r
                    {{ etiquetaEstadoReserva(detalle.estado) }}\r
                  </span>\r
                </div>\r
\r
                <app-cancelar-reserva\r
                  [reserva]="reserva"\r
                  [detalle]="detalle"\r
                  (cancelada)="onDetalleCancelado(reserva.id, $event)"\r
                />\r
              </li>\r
            }\r
          </ul>\r
        </article>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/reservas/mis-reservas/mis-reservas.scss */\n:host {\n  display: block;\n}\n.mis-reservas-page {\n  padding-top: 24px;\n  padding-bottom: 48px;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.tabs-reserva {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.tab-reserva {\n  padding: 9px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  background: var(--color-white);\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    border-color var(--transition-fast),\n    color var(--transition-fast);\n}\n.tab-reserva:hover:not(.is-active) {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.tab-reserva.is-active {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-white);\n}\n.reservas-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.reserva-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 14px;\n  transition: box-shadow var(--transition-fast);\n}\n.reserva-card:hover {\n  box-shadow: var(--shadow-medium);\n}\n.reserva-card__header {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n.reserva-card__header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__codigo {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.reserva-card__sucursal {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--color-text);\n}\n.reserva-card__sucursal app-icon {\n  color: var(--color-primary);\n  flex-shrink: 0;\n}\n.reserva-card__horario {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px 8px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.reserva-card__estado {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.reserva-card__estado--pendiente,\n.reserva-card__estado--preparada,\n.reserva-card__estado--en_atencion,\n.reserva-card__estado--lista_para_caja {\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.reserva-card__estado--atendida {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.reserva-card__estado--cancelada,\n.reserva-card__estado--vencida {\n  background: var(--color-inactive-bg);\n  color: var(--color-inactive-text);\n}\n.reserva-card__detalles-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-prenda {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.detalle-prenda + .detalle-prenda {\n  padding-top: 10px;\n  border-top: 1px dashed var(--color-border);\n}\n.detalle-prenda__imagen {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.detalle-prenda__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-prenda__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.detalle-prenda__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detalle-prenda__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.detalle-prenda__variante {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.detalle-prenda__estado {\n  align-self: flex-start;\n  margin-top: 2px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.detalle-prenda__estado--pendiente,\n.detalle-prenda__estado--preparada,\n.detalle-prenda__estado--en_atencion,\n.detalle-prenda__estado--lista_para_caja {\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.detalle-prenda__estado--atendida {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.detalle-prenda__estado--cancelada,\n.detalle-prenda__estado--vencida {\n  background: var(--color-inactive-bg);\n  color: var(--color-inactive-text);\n}\n.skeleton-card {\n  height: 124px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 480px) {\n  .tab-reserva {\n    flex: 1;\n    text-align: center;\n    padding: 10px 12px;\n  }\n  .reservas-grid {\n    grid-template-columns: 1fr;\n  }\n  .detalle-prenda {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .cancelar-btn {\n    margin-left: auto;\n  }\n}\n/*# sourceMappingURL=mis-reservas-NT6RZKA6.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReservas, { className: "MisReservas", filePath: "src/app/features/reservas/mis-reservas/mis-reservas.ts", lineNumber: 73 });
})();
export {
  MisReservas
};
//# debugId=30cfdb66-bd99-545e-b017-1053ec6ce572
//# sourceMappingURL=chunk-HBAZNXVA.js.map
