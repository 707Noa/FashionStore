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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-PNHCNXB7.js";

// src/app/features/encargado/reservas/reservas.service.ts
var PanelReservasService = class _PanelReservasService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/reservas`;
  listarPanel() {
    return this.http.get(`${this.baseUrl}/panel`);
  }
  /** Integración mínima con el rol Cajero -- solo cabeceras cuyo
   * estado_general YA es LISTA_PARA_CAJA (ver reservas-pendientes en
   * features/cajero), con `detalles` ya filtrado a las prendas que sí van
   * a caja. */
  listarPendientesCajero() {
    return this.http.get(`${this.baseUrl}/cajero/pendientes`);
  }
  confirmarLlegada(reservaId) {
    return this.http.patch(`${this.baseUrl}/${reservaId}/confirmar-llegada`, {});
  }
  finalizarAtencion(reservaId) {
    return this.http.patch(`${this.baseUrl}/${reservaId}/finalizar-atencion`, {});
  }
  preparar(detalleId) {
    return this.http.patch(`${this.baseUrl}/detalles/${detalleId}/preparar`, {});
  }
  noLaCompra(detalleId) {
    return this.http.patch(`${this.baseUrl}/detalles/${detalleId}/no-la-compra`, {});
  }
  enviarACaja(detalleId) {
    return this.http.patch(`${this.baseUrl}/detalles/${detalleId}/enviar-a-caja`, {});
  }
  static \u0275fac = function PanelReservasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelReservasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PanelReservasService, factory: _PanelReservasService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelReservasService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/encargado/reservas/atender-reserva/atender-reserva.ts
function AtenderReserva_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275domListener("click", function AtenderReserva_Case_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.preparar());
    });
    \u0275\u0275text(2, " Preparar prenda ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.procesando());
  }
}
function AtenderReserva_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275domListener("click", function AtenderReserva_Case_1_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.noLaCompra());
    });
    \u0275\u0275text(2, " No la compra ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 2);
    \u0275\u0275domListener("click", function AtenderReserva_Case_1_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.enviarACaja());
    });
    \u0275\u0275text(4, " Enviar a caja ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.procesando());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.procesando());
  }
}
function AtenderReserva_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AtenderReserva_Case_1_Conditional_0_Template, 5, 2, "div", 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.puedeDecidir ? 0 : -1);
  }
}
var AtenderReserva = class _AtenderReserva {
  service = inject(PanelReservasService);
  toast = inject(ToastService);
  detalle = input.required(
    ...ngDevMode ? [{ debugName: "detalle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  estadoGeneralReserva = input.required(
    ...ngDevMode ? [{ debugName: "estadoGeneralReserva" }] : (
      /* istanbul ignore next */
      []
    )
  );
  actualizada = output();
  procesando = signal(
    false,
    ...ngDevMode ? [{ debugName: "procesando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get puedeDecidir() {
    return this.estadoGeneralReserva() === "EN_ATENCION" && this.detalle().estado === "PREPARADA";
  }
  preparar() {
    this._ejecutar(this.service.preparar(this.detalle().id), "Prenda marcada como preparada.");
  }
  noLaCompra() {
    this._ejecutar(this.service.noLaCompra(this.detalle().id), "Decisi\xF3n guardada: no la compra.");
  }
  enviarACaja() {
    this._ejecutar(this.service.enviarACaja(this.detalle().id), "Decisi\xF3n guardada: va a caja.");
  }
  _ejecutar(accion, mensajeExito) {
    if (this.procesando()) {
      return;
    }
    this.procesando.set(true);
    accion.subscribe({
      next: (actualizada) => {
        this.procesando.set(false);
        this.toast.brand(mensajeExito);
        this.actualizada.emit(actualizada);
      },
      error: (err) => {
        this.procesando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo completar la acci\xF3n. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function AtenderReserva_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AtenderReserva)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AtenderReserva, selectors: [["app-atender-reserva"]], inputs: { detalle: [1, "detalle"], estadoGeneralReserva: [1, "estadoGeneralReserva"] }, outputs: { actualizada: "actualizada" }, decls: 2, vars: 1, consts: [[1, "atender-acciones"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"]], template: function AtenderReserva_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AtenderReserva_Case_0_Template, 3, 1, "div", 0)(1, AtenderReserva_Case_1_Template, 1, 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.detalle().estado) === "PENDIENTE" ? 0 : tmp_0_0 === "PREPARADA" ? 1 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 4px;\n}\n.atender-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .atender-acciones[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=atender-reserva-WCF57DGK.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AtenderReserva, [{
    type: Component,
    args: [{ selector: "app-atender-reserva", template: `@switch (detalle().estado) {\r
  @case ('PENDIENTE') {\r
    <div class="atender-acciones">\r
      <button type="button" class="btn btn--ghost btn--sm" [disabled]="procesando()" (click)="preparar()">\r
        Preparar prenda\r
      </button>\r
    </div>\r
  }\r
  @case ('PREPARADA') {\r
    @if (puedeDecidir) {\r
      <div class="atender-acciones">\r
        <button type="button" class="btn btn--ghost btn--sm" [disabled]="procesando()" (click)="noLaCompra()">\r
          No la compra\r
        </button>\r
        <button type="button" class="btn btn--primary btn--sm" [disabled]="procesando()" (click)="enviarACaja()">\r
          Enviar a caja\r
        </button>\r
      </div>\r
    }\r
  }\r
}\r
`, styles: ["/* src/app/features/encargado/reservas/atender-reserva/atender-reserva.scss */\n:host {\n  display: block;\n  margin-top: 4px;\n}\n.atender-acciones {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .atender-acciones {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=atender-reserva-WCF57DGK.css.map */\n"] }]
  }], null, { detalle: [{ type: Input, args: [{ isSignal: true, alias: "detalle", required: true }] }], estadoGeneralReserva: [{ type: Input, args: [{ isSignal: true, alias: "estadoGeneralReserva", required: true }] }], actualizada: [{ type: Output, args: ["actualizada"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AtenderReserva, { className: "AtenderReserva", filePath: "src/app/features/encargado/reservas/atender-reserva/atender-reserva.ts", lineNumber: 44 });
})();

// src/app/features/encargado/reservas/reservas.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function Reservas_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function Reservas_For_8_Template_button_click_0_listener() {
      const grupo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionarGrupo(grupo_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupo_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r2.grupoActivo() === grupo_r2.key);
    \u0275\u0275attribute("aria-selected", ctx_r2.grupoActivo() === grupo_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", grupo_r2.etiqueta, " ");
  }
}
function Reservas_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function Reservas_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, Reservas_Conditional_9_For_2_Template, 1, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function Reservas_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 10);
    \u0275\u0275text(2, "No se pudo cargar el panel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function Reservas_Conditional_10_Template_button_click_5_listener() {
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
function Reservas_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-icon", 12);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.mensajeVacio);
  }
}
function Reservas_Conditional_12_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function Reservas_Conditional_12_For_2_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const reserva_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmarLlegada(reserva_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reserva_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.confirmandoLlegadaId() === reserva_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.confirmandoLlegadaId() === reserva_r6.id ? "Confirmando..." : "Confirmar llegada", " ");
  }
}
function Reservas_Conditional_12_For_2_For_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const detalle_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.resolveMediaUrl(detalle_r8.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", detalle_r8.producto.nombre);
  }
}
function Reservas_Conditional_12_For_2_For_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "app-icon", 34);
    \u0275\u0275elementEnd();
  }
}
function Reservas_Conditional_12_For_2_For_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const detalle_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 x", detalle_r8.cantidad, " ");
  }
}
function Reservas_Conditional_12_For_2_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23)(1, "div", 26);
    \u0275\u0275conditionalCreate(2, Reservas_Conditional_12_For_2_For_19_Conditional_2_Template, 1, 2, "img", 27)(3, Reservas_Conditional_12_For_2_For_19_Conditional_3_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, Reservas_Conditional_12_For_2_For_19_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-atender-reserva", 33);
    \u0275\u0275listener("actualizada", function Reservas_Conditional_12_For_2_For_19_Template_app_atender_reserva_actualizada_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const reserva_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDetalleActualizado(reserva_r6.id, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const detalle_r8 = ctx.$implicit;
    const reserva_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(detalle_r8.producto.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(detalle_r8.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", detalle_r8.variante.color.nombre, " \xB7 Talla ", detalle_r8.variante.talla.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(detalle_r8.cantidad > 1 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("detalle-prenda__estado--" + detalle_r8.estado.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.etiquetaEstado(detalle_r8.estado), " ");
    \u0275\u0275advance();
    \u0275\u0275property("detalle", detalle_r8)("estadoGeneralReserva", reserva_r6.estado_general);
  }
}
function Reservas_Conditional_12_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function Reservas_Conditional_12_For_2_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const reserva_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirModalFinalizar(reserva_r6));
    });
    \u0275\u0275text(1, " Finalizar atenci\xF3n ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reserva_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.puedeFinalizarAtencion(reserva_r6))("title", ctx_r2.puedeFinalizarAtencion(reserva_r6) ? "" : "Todav\xEDa hay prendas sin una decisi\xF3n.");
  }
}
function Reservas_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 13)(1, "div", 14)(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275element(8, "app-icon", 19);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, Reservas_Conditional_12_For_2_Conditional_16_Template, 2, 2, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul", 22);
    \u0275\u0275repeaterCreate(18, Reservas_Conditional_12_For_2_For_19_Template, 13, 10, "li", 23, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, Reservas_Conditional_12_For_2_Conditional_20_Template, 2, 2, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reserva_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Reserva ", reserva_r6.codigo_reserva);
    \u0275\u0275advance();
    \u0275\u0275classMap("reserva-card__estado--" + reserva_r6.estado_general.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.etiquetaEstado(reserva_r6.estado_general), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(reserva_r6.cliente.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fecha(reserva_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.horario(reserva_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(reserva_r6.estado_general === "PENDIENTE" || reserva_r6.estado_general === "PREPARADA" ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(reserva_r6.detalles);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(reserva_r6.estado_general === "EN_ATENCION" ? 20 : -1);
  }
}
function Reservas_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, Reservas_Conditional_12_For_2_Template, 21, 9, "article", 13, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.reservasFiltradas());
  }
}
function Reservas_Conditional_13_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detalle_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", detalle_r11.producto.nombre, " \xB7 ", detalle_r11.variante.color.nombre, " ", detalle_r11.variante.talla.nombre);
  }
}
function Reservas_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 46);
    \u0275\u0275text(2, "Para caja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 47);
    \u0275\u0275repeaterCreate(4, Reservas_Conditional_13_Conditional_8_For_5_Template, 2, 3, "li", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.detallesParaCaja(reserva_r12));
  }
}
function Reservas_Conditional_13_Conditional_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detalle_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", detalle_r13.producto.nombre, " \xB7 ", detalle_r13.variante.color.nombre, " ", detalle_r13.variante.talla.nombre);
  }
}
function Reservas_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 46);
    \u0275\u0275text(2, "No comprar\xE1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 47);
    \u0275\u0275repeaterCreate(4, Reservas_Conditional_13_Conditional_9_For_5_Template, 2, 3, "li", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.detallesNoCompra(reserva_r12));
  }
}
function Reservas_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function Reservas_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalFinalizar());
    })("keydown.escape", function Reservas_Conditional_13_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalFinalizar());
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275listener("click", function Reservas_Conditional_13_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 38)(3, "h2", 39);
    \u0275\u0275text(4, "\xBFFinalizar la atenci\xF3n de esta reserva?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function Reservas_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalFinalizar());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275conditionalCreate(8, Reservas_Conditional_13_Conditional_8_Template, 6, 0, "div", 42);
    \u0275\u0275conditionalCreate(9, Reservas_Conditional_13_Conditional_9_Template, 6, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43)(11, "button", 44);
    \u0275\u0275listener("click", function Reservas_Conditional_13_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModalFinalizar());
    });
    \u0275\u0275text(12, " Volver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 45);
    \u0275\u0275listener("click", function Reservas_Conditional_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmarFinalizarAtencion());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reserva_r12 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.finalizando());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.detallesParaCaja(reserva_r12).length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.detallesNoCompra(reserva_r12).length > 0 ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.finalizando());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.finalizando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.finalizando() ? "Finalizando..." : "Finalizar atenci\xF3n", " ");
  }
}
var ETIQUETAS_ESTADO = {
  PENDIENTE: "Pendiente",
  PREPARADA: "Preparada",
  EN_ATENCION: "En atenci\xF3n",
  LISTA_PARA_CAJA: "Lista para caja",
  ATENDIDA: "Atendida",
  CANCELADA: "Cancelada",
  VENCIDA: "Vencida"
};
var GRUPOS = [
  {
    key: "pendientes",
    etiqueta: "Pendientes",
    estados: ["PENDIENTE", "PREPARADA"],
    vacio: "No hay reservas pendientes."
  },
  {
    key: "en_atencion",
    etiqueta: "En atenci\xF3n",
    estados: ["EN_ATENCION"],
    vacio: "No hay reservas en atenci\xF3n."
  },
  {
    key: "finalizadas",
    etiqueta: "Finalizadas",
    estados: ["ATENDIDA", "LISTA_PARA_CAJA", "CANCELADA", "VENCIDA"],
    vacio: "No hay reservas finalizadas."
  }
];
var ESTADOS_SIN_DECISION = ["PENDIENTE", "PREPARADA"];
var Reservas = class _Reservas {
  service = inject(PanelReservasService);
  toast = inject(ToastService);
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
  etiquetaEstado = (estado) => ETIQUETAS_ESTADO[estado];
  grupos = GRUPOS;
  grupoActivo = signal(
    "pendientes",
    ...ngDevMode ? [{ debugName: "grupoActivo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Filtra en Angular sobre la MISMA respuesta de GET /reservas/panel -- sin
  // endpoint ni parámetro de filtro nuevos, mismo criterio ya usado por CU18
  // (mis-reservas.ts) para sus propias pestañas. Filtra por `estado_general`
  // (ver backend Models/reserva.py).
  reservasFiltradas = computed(
    () => {
      const estados = this.grupos.find((g) => g.key === this.grupoActivo())?.estados ?? [];
      return this.reservas().filter((reserva) => estados.includes(reserva.estado_general));
    },
    ...ngDevMode ? [{ debugName: "reservasFiltradas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get mensajeVacio() {
    return this.grupos.find((g) => g.key === this.grupoActivo())?.vacio ?? "";
  }
  // "Confirmar llegada" -- id de la reserva en curso, para deshabilitar solo
  // ese botón mientras se procesa (doble clic).
  confirmandoLlegadaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "confirmandoLlegadaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Modal "Finalizar atención" -- reserva sobre la que está abierto (o null,
  // cerrado) y su propio estado de envío.
  reservaAFinalizar = signal(
    null,
    ...ngDevMode ? [{ debugName: "reservaAFinalizar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalizando = signal(
    false,
    ...ngDevMode ? [{ debugName: "finalizando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.cargando.set(true);
    this.errorMessage.set(null);
    this.service.listarPanel().subscribe({
      next: (reservas) => {
        this.reservas.set(reservas);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
        this.errorMessage.set("No se pudieron cargar las reservas. Int\xE9ntalo nuevamente.");
      }
    });
  }
  fecha(reserva) {
    return formatearFechaReserva(reserva.fecha_reserva);
  }
  horario(reserva) {
    return formatearHorarioReserva(reserva.hora_inicio, reserva.hora_fin);
  }
  seleccionarGrupo(key) {
    this.grupoActivo.set(key);
  }
  detallesParaCaja(reserva) {
    return reserva.detalles.filter((d) => d.estado === "LISTA_PARA_CAJA");
  }
  detallesNoCompra(reserva) {
    return reserva.detalles.filter((d) => d.estado === "ATENDIDA");
  }
  puedeFinalizarAtencion(reserva) {
    return reserva.estado_general === "EN_ATENCION" && !reserva.detalles.some((d) => ESTADOS_SIN_DECISION.includes(d.estado));
  }
  // "Confirmar llegada" -- un solo botón por reserva, sin modal (paso de
  // bajo riesgo: no toca stock ni el estado de ninguna prenda).
  confirmarLlegada(reserva) {
    if (this.confirmandoLlegadaId() !== null) {
      return;
    }
    this.confirmandoLlegadaId.set(reserva.id);
    this.service.confirmarLlegada(reserva.id).subscribe({
      next: (actualizada) => {
        this.confirmandoLlegadaId.set(null);
        this.toast.brand("Llegada del cliente confirmada.");
        this.onReservaActualizada(actualizada);
      },
      error: (err) => {
        this.confirmandoLlegadaId.set(null);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo confirmar la llegada. Int\xE9ntalo nuevamente.");
      }
    });
  }
  abrirModalFinalizar(reserva) {
    if (!this.puedeFinalizarAtencion(reserva)) {
      return;
    }
    this.reservaAFinalizar.set(reserva);
  }
  cerrarModalFinalizar() {
    if (this.finalizando()) {
      return;
    }
    this.reservaAFinalizar.set(null);
  }
  confirmarFinalizarAtencion() {
    const reserva = this.reservaAFinalizar();
    if (!reserva || this.finalizando()) {
      return;
    }
    this.finalizando.set(true);
    this.service.finalizarAtencion(reserva.id).subscribe({
      next: (actualizada) => {
        this.finalizando.set(false);
        this.reservaAFinalizar.set(null);
        this.toast.brand("Atenci\xF3n finalizada.");
        this.onReservaActualizada(actualizada);
      },
      error: (err) => {
        this.finalizando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo finalizar la atenci\xF3n. Int\xE9ntalo nuevamente.");
      }
    });
  }
  // Reemplaza la CABECERA completa en el arreglo local -- usado por
  // confirmar llegada / finalizar atención, que devuelven la reserva
  // entera (a diferencia de las acciones por detalle).
  onReservaActualizada(actualizada) {
    this.reservas.update((lista) => lista.map((r) => r.id === actualizada.id ? actualizada : r));
  }
  // Reemplaza SOLO ese detalle (esa prenda) dentro de su reserva en el
  // arreglo local -- feedback instantáneo (ver AtenderReserva, que emite el
  // detalle ya actualizado). Ninguna acción por detalle cambia
  // estado_general (ver backend service.py), así que no hace falta
  // refrescar el panel completo.
  onDetalleActualizado(reservaId, detalleActualizado) {
    this.reservas.update((lista) => lista.map((reserva) => reserva.id !== reservaId ? reserva : __spreadProps(__spreadValues({}, reserva), {
      detalles: reserva.detalles.map((detalle) => detalle.id === detalleActualizado.id ? detalleActualizado : detalle)
    })));
  }
  static \u0275fac = function Reservas_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Reservas)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Reservas, selectors: [["app-reservas-encargado"]], decls: 14, vars: 2, consts: [[1, "reservas-page"], [1, "page-header"], ["role", "tablist", 1, "grupos-reserva"], ["type", "button", "role", "tab", 1, "grupo-reserva", 3, "is-active"], [1, "reservas-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "reserva-modal-overlay"], ["type", "button", "role", "tab", 1, "grupo-reserva", 3, "click"], [1, "skeleton-card"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["name", "reservations", 2, "width", "28px", "height", "28px"], [1, "reserva-card"], [1, "reserva-card__header"], [1, "reserva-card__header-top"], [1, "reserva-card__codigo"], [1, "reserva-card__estado"], [1, "reserva-card__cliente"], ["name", "user", 2, "width", "13px", "height", "13px"], [1, "reserva-card__horario"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", "reserva-card__confirmar-llegada", 3, "disabled"], [1, "reserva-card__detalles-lista"], [1, "detalle-prenda"], ["type", "button", 1, "btn", "btn--primary", "reserva-card__finalizar", 3, "disabled", "title"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", "reserva-card__confirmar-llegada", 3, "click", "disabled"], [1, "detalle-prenda__imagen"], [3, "src", "alt"], [1, "detalle-prenda__placeholder"], [1, "detalle-prenda__info"], [1, "detalle-prenda__nombre"], [1, "detalle-prenda__variante"], [1, "detalle-prenda__estado"], [3, "actualizada", "detalle", "estadoGeneralReserva"], ["name", "products", 2, "width", "20px", "height", "20px"], ["type", "button", 1, "btn", "btn--primary", "reserva-card__finalizar", 3, "click", "disabled", "title"], [1, "reserva-modal-overlay", 3, "click", "keydown.escape"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "finalizar-modal-titulo", 1, "reserva-modal", 3, "click"], [1, "reserva-modal__header"], ["id", "finalizar-modal-titulo"], ["type", "button", "aria-label", "Cerrar", 1, "reserva-modal__cerrar", 3, "click", "disabled"], [1, "reserva-modal__body"], [1, "reserva-modal__seccion"], [1, "reserva-modal__acciones"], ["type", "button", 1, "btn", "btn--ghost", "reserva-modal__volver", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--primary", "reserva-modal__confirmar", 3, "click", "disabled"], [1, "reserva-modal__label"], [1, "finalizar-resumen-lista"]], template: function Reservas_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Reservas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Gestiona las reservas de prendas de tu sucursal.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275repeaterCreate(7, Reservas_For_8_Template, 2, 4, "button", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, Reservas_Conditional_9_Template, 3, 1, "div", 4)(10, Reservas_Conditional_10_Template, 7, 1, "div", 5)(11, Reservas_Conditional_11_Template, 4, 1, "div", 6)(12, Reservas_Conditional_12_Template, 3, 0, "div", 4);
      \u0275\u0275conditionalCreate(13, Reservas_Conditional_13_Template, 15, 6, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.grupos);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cargando() ? 9 : ctx.errorMessage() ? 10 : ctx.reservasFiltradas().length === 0 ? 11 : 12);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_2_0 = ctx.reservaAFinalizar()) ? 13 : -1, tmp_2_0);
    }
  }, dependencies: [Icon, AtenderReserva], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.reservas-page[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.grupos-reserva[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.grupo-reserva[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 999px;\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background var(--%NS%transition-fast),\n    border-color var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.grupo-reserva[_ngcontent-%COMP%]:hover:not(.is-active) {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n}\n.grupo-reserva.is-active[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.reservas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.reserva-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 14px;\n  transition: box-shadow var(--%NS%transition-fast);\n}\n.reserva-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--%NS%shadow-medium);\n}\n.reserva-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.reserva-card__header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__codigo[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.reserva-card__cliente[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text);\n}\n.reserva-card__cliente[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  flex-shrink: 0;\n}\n.reserva-card__horario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px 8px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.reserva-card__confirmar-llegada[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  align-self: flex-start;\n}\n.reserva-card__finalizar[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.reserva-card__estado[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.reserva-card__estado--pendiente[_ngcontent-%COMP%], \n.reserva-card__estado--preparada[_ngcontent-%COMP%], \n.reserva-card__estado--lista_para_caja[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.reserva-card__estado--en_atencion[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.reserva-card__estado--atendida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.reserva-card__estado--cancelada[_ngcontent-%COMP%], \n.reserva-card__estado--vencida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-inactive-bg);\n  color: var(--%NS%color-inactive-text);\n}\n.reserva-card__detalles-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-prenda[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.detalle-prenda[_ngcontent-%COMP%]    + .detalle-prenda[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.detalle-prenda__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.detalle-prenda__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-prenda__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.detalle-prenda__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detalle-prenda__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.detalle-prenda__variante[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.detalle-prenda__estado[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin: 2px 0 4px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.detalle-prenda__estado--pendiente[_ngcontent-%COMP%], \n.detalle-prenda__estado--preparada[_ngcontent-%COMP%], \n.detalle-prenda__estado--lista_para_caja[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.detalle-prenda__estado--en_atencion[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.detalle-prenda__estado--atendida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.detalle-prenda__estado--cancelada[_ngcontent-%COMP%], \n.detalle-prenda__estado--vencida[_ngcontent-%COMP%] {\n  background: var(--%NS%color-inactive-bg);\n  color: var(--%NS%color-inactive-text);\n}\n.reserva-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.45);\n  animation: _ngcontent-%COMP%_reserva-overlay-in 150ms ease;\n}\n.reserva-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 420px;\n  max-height: min(640px, 90vh);\n  overflow-y: auto;\n  padding: 20px;\n  border-radius: var(--%NS%radius-lg);\n  background: var(--%NS%color-white);\n  box-shadow: var(--%NS%shadow-medium);\n  animation: _ngcontent-%COMP%_reserva-modal-in 180ms ease;\n}\n.reserva-modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.reserva-modal__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.reserva-modal__cerrar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: none;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n}\n.reserva-modal__cerrar[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, var(--%NS%color-bg));\n  color: var(--%NS%color-primary);\n}\n.reserva-modal__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.reserva-modal__seccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.reserva-modal__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-text-secondary);\n}\n.finalizar-resumen-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0;\n  padding-left: 18px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.reserva-modal__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.reserva-modal__volver[_ngcontent-%COMP%], \n.reserva-modal__confirmar[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: center;\n}\n@keyframes _ngcontent-%COMP%_reserva-overlay-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_reserva-modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 124px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 480px) {\n  .grupo-reserva[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n    padding: 10px 12px;\n  }\n  .reservas-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detalle-prenda[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .reserva-modal-overlay[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .reserva-modal[_ngcontent-%COMP%] {\n    max-width: none;\n    border-radius: var(--%NS%radius-lg) var(--%NS%radius-lg) 0 0;\n    animation: _ngcontent-%COMP%_reserva-modal-in-mobile 200ms ease;\n  }\n  .reserva-modal__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n@keyframes _ngcontent-%COMP%_reserva-modal-in-mobile {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=reservas-HROSTOIF.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Reservas, [{
    type: Component,
    args: [{ selector: "app-reservas-encargado", imports: [Icon, AtenderReserva], template: `<div class="reservas-page">\r
  <div class="page-header">\r
    <h1>Reservas</h1>\r
    <p>Gestiona las reservas de prendas de tu sucursal.</p>\r
  </div>\r
\r
  <div class="grupos-reserva" role="tablist">\r
    @for (grupo of grupos; track grupo.key) {\r
      <button\r
        type="button"\r
        class="grupo-reserva"\r
        role="tab"\r
        [class.is-active]="grupoActivo() === grupo.key"\r
        [attr.aria-selected]="grupoActivo() === grupo.key"\r
        (click)="seleccionarGrupo(grupo.key)"\r
      >\r
        {{ grupo.etiqueta }}\r
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
      <span class="state-block__title">No se pudo cargar el panel</span>\r
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
                {{ etiquetaEstado(reserva.estado_general) }}\r
              </span>\r
            </div>\r
\r
            <div class="reserva-card__cliente">\r
              <app-icon name="user" style="width: 13px; height: 13px" />\r
              <span>{{ reserva.cliente.nombre }}</span>\r
            </div>\r
\r
            <div class="reserva-card__horario">\r
              <span>{{ fecha(reserva) }}</span>\r
              <span>{{ horario(reserva) }}</span>\r
            </div>\r
\r
            @if (reserva.estado_general === 'PENDIENTE' || reserva.estado_general === 'PREPARADA') {\r
              <button\r
                type="button"\r
                class="btn btn--primary btn--sm reserva-card__confirmar-llegada"\r
                [disabled]="confirmandoLlegadaId() === reserva.id"\r
                (click)="confirmarLlegada(reserva)"\r
              >\r
                {{ confirmandoLlegadaId() === reserva.id ? 'Confirmando...' : 'Confirmar llegada' }}\r
              </button>\r
            }\r
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
                    {{ etiquetaEstado(detalle.estado) }}\r
                  </span>\r
\r
                  <app-atender-reserva\r
                    [detalle]="detalle"\r
                    [estadoGeneralReserva]="reserva.estado_general"\r
                    (actualizada)="onDetalleActualizado(reserva.id, $event)"\r
                  />\r
                </div>\r
              </li>\r
            }\r
          </ul>\r
\r
          @if (reserva.estado_general === 'EN_ATENCION') {\r
            <button\r
              type="button"\r
              class="btn btn--primary reserva-card__finalizar"\r
              [disabled]="!puedeFinalizarAtencion(reserva)"\r
              [title]="puedeFinalizarAtencion(reserva) ? '' : 'Todav\xEDa hay prendas sin una decisi\xF3n.'"\r
              (click)="abrirModalFinalizar(reserva)"\r
            >\r
              Finalizar atenci\xF3n\r
            </button>\r
          }\r
        </article>\r
      }\r
    </div>\r
  }\r
\r
  @if (reservaAFinalizar(); as reserva) {\r
    <div class="reserva-modal-overlay" (click)="cerrarModalFinalizar()" (keydown.escape)="cerrarModalFinalizar()">\r
      <div\r
        class="reserva-modal"\r
        role="dialog"\r
        aria-modal="true"\r
        aria-labelledby="finalizar-modal-titulo"\r
        (click)="$event.stopPropagation()"\r
      >\r
        <div class="reserva-modal__header">\r
          <h2 id="finalizar-modal-titulo">\xBFFinalizar la atenci\xF3n de esta reserva?</h2>\r
          <button\r
            type="button"\r
            class="reserva-modal__cerrar"\r
            [disabled]="finalizando()"\r
            (click)="cerrarModalFinalizar()"\r
            aria-label="Cerrar"\r
          >\r
            \u2715\r
          </button>\r
        </div>\r
\r
        <div class="reserva-modal__body">\r
          @if (detallesParaCaja(reserva).length > 0) {\r
            <div class="reserva-modal__seccion">\r
              <span class="reserva-modal__label">Para caja</span>\r
              <ul class="finalizar-resumen-lista">\r
                @for (detalle of detallesParaCaja(reserva); track detalle.id) {\r
                  <li>{{ detalle.producto.nombre }} \xB7 {{ detalle.variante.color.nombre }} {{ detalle.variante.talla.nombre }}</li>\r
                }\r
              </ul>\r
            </div>\r
          }\r
\r
          @if (detallesNoCompra(reserva).length > 0) {\r
            <div class="reserva-modal__seccion">\r
              <span class="reserva-modal__label">No comprar\xE1</span>\r
              <ul class="finalizar-resumen-lista">\r
                @for (detalle of detallesNoCompra(reserva); track detalle.id) {\r
                  <li>{{ detalle.producto.nombre }} \xB7 {{ detalle.variante.color.nombre }} {{ detalle.variante.talla.nombre }}</li>\r
                }\r
              </ul>\r
            </div>\r
          }\r
        </div>\r
\r
        <div class="reserva-modal__acciones">\r
          <button\r
            type="button"\r
            class="btn btn--ghost reserva-modal__volver"\r
            [disabled]="finalizando()"\r
            (click)="cerrarModalFinalizar()"\r
          >\r
            Volver\r
          </button>\r
          <button\r
            type="button"\r
            class="btn btn--primary reserva-modal__confirmar"\r
            [disabled]="finalizando()"\r
            (click)="confirmarFinalizarAtencion()"\r
          >\r
            {{ finalizando() ? 'Finalizando...' : 'Finalizar atenci\xF3n' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/encargado/reservas/reservas.scss */\n:host {\n  display: block;\n}\n.reservas-page {\n  padding-bottom: 24px;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.grupos-reserva {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.grupo-reserva {\n  padding: 9px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  background: var(--color-white);\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    border-color var(--transition-fast),\n    color var(--transition-fast);\n}\n.grupo-reserva:hover:not(.is-active) {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.grupo-reserva.is-active {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-white);\n}\n.reservas-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.reserva-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 14px;\n  transition: box-shadow var(--transition-fast);\n}\n.reserva-card:hover {\n  box-shadow: var(--shadow-medium);\n}\n.reserva-card__header {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n.reserva-card__header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__codigo {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.reserva-card__cliente {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--color-text);\n}\n.reserva-card__cliente app-icon {\n  color: var(--color-primary);\n  flex-shrink: 0;\n}\n.reserva-card__horario {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px 8px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.reserva-card__confirmar-llegada {\n  margin-top: 4px;\n  align-self: flex-start;\n}\n.reserva-card__finalizar {\n  width: 100%;\n  justify-content: center;\n}\n.reserva-card__estado {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.reserva-card__estado--pendiente,\n.reserva-card__estado--preparada,\n.reserva-card__estado--lista_para_caja {\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.reserva-card__estado--en_atencion {\n  background: var(--color-primary);\n  color: var(--color-white);\n}\n.reserva-card__estado--atendida {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.reserva-card__estado--cancelada,\n.reserva-card__estado--vencida {\n  background: var(--color-inactive-bg);\n  color: var(--color-inactive-text);\n}\n.reserva-card__detalles-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-prenda {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.detalle-prenda + .detalle-prenda {\n  padding-top: 10px;\n  border-top: 1px dashed var(--color-border);\n}\n.detalle-prenda__imagen {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.detalle-prenda__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-prenda__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.detalle-prenda__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detalle-prenda__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.detalle-prenda__variante {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.detalle-prenda__estado {\n  align-self: flex-start;\n  margin: 2px 0 4px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.detalle-prenda__estado--pendiente,\n.detalle-prenda__estado--preparada,\n.detalle-prenda__estado--lista_para_caja {\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.detalle-prenda__estado--en_atencion {\n  background: var(--color-primary);\n  color: var(--color-white);\n}\n.detalle-prenda__estado--atendida {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.detalle-prenda__estado--cancelada,\n.detalle-prenda__estado--vencida {\n  background: var(--color-inactive-bg);\n  color: var(--color-inactive-text);\n}\n.reserva-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.45);\n  animation: reserva-overlay-in 150ms ease;\n}\n.reserva-modal {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 420px;\n  max-height: min(640px, 90vh);\n  overflow-y: auto;\n  padding: 20px;\n  border-radius: var(--radius-lg);\n  background: var(--color-white);\n  box-shadow: var(--shadow-medium);\n  animation: reserva-modal-in 180ms ease;\n}\n.reserva-modal__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.reserva-modal__header h2 {\n  margin: 0;\n  font-size: 16.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.reserva-modal__cerrar {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: none;\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n}\n.reserva-modal__cerrar:hover {\n  background: color-mix(in srgb, var(--color-primary) 10%, var(--color-bg));\n  color: var(--color-primary);\n}\n.reserva-modal__body {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.reserva-modal__seccion {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.reserva-modal__label {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-secondary);\n}\n.finalizar-resumen-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0;\n  padding-left: 18px;\n  font-size: 13px;\n  color: var(--color-text);\n}\n.reserva-modal__acciones {\n  display: flex;\n  gap: 10px;\n}\n.reserva-modal__volver,\n.reserva-modal__confirmar {\n  flex: 1;\n  justify-content: center;\n}\n@keyframes reserva-overlay-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes reserva-modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.skeleton-card {\n  height: 124px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 480px) {\n  .grupo-reserva {\n    flex: 1;\n    text-align: center;\n    padding: 10px 12px;\n  }\n  .reservas-grid {\n    grid-template-columns: 1fr;\n  }\n  .detalle-prenda {\n    flex-wrap: wrap;\n  }\n  .reserva-modal-overlay {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .reserva-modal {\n    max-width: none;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n    animation: reserva-modal-in-mobile 200ms ease;\n  }\n  .reserva-modal__acciones {\n    flex-direction: column-reverse;\n  }\n}\n@keyframes reserva-modal-in-mobile {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=reservas-HROSTOIF.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Reservas, { className: "Reservas", filePath: "src/app/features/encargado/reservas/reservas.ts", lineNumber: 88 });
})();
export {
  Reservas
};
//# debugId=b958784e-80b7-5f3c-9766-888a4ffc24d1
//# sourceMappingURL=chunk-ET243JEY.js.map
