import {
  ComprobanteService,
  descargarBlob
} from "./chunk-D37JXF2Y.js";
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
  Router
} from "./chunk-OXXL2I3V.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-PNHCNXB7.js";

// src/app/features/cajero/ventas/venta-presencial.service.ts
var VentaPresencialService = class _VentaPresencialService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/ventas-presenciales`;
  baseUrlPagos = `${environment.apiUrl}/pagos-presenciales`;
  buscarProductos(nombre) {
    const params = new HttpParams().set("nombre", nombre);
    return this.http.get(`${this.baseUrl}/productos`, { params });
  }
  crearVentaDirecta(payload) {
    return this.http.post(`${this.baseUrl}/directa`, payload);
  }
  crearVentaDesdeReserva(reservaId) {
    return this.http.post(`${this.baseUrl}/desde-reserva/${reservaId}`, {});
  }
  confirmarPago(ventaId, payload) {
    return this.http.post(`${this.baseUrlPagos}/${ventaId}/confirmar`, payload);
  }
  static \u0275fac = function VentaPresencialService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VentaPresencialService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VentaPresencialService, factory: _VentaPresencialService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentaPresencialService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/cajero/ventas/procesar-pago/procesar-pago.ts
var _forTrack0 = ($index, $item) => $item.producto.id + "-" + $item.variante.id;
function ProcesarPago_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Reserva:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.venta().reserva.codigo_reserva);
  }
}
function ProcesarPago_Conditional_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(detalle_r3.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", detalle_r3.variante.color.nombre, " \xB7 Talla ", detalle_r3.variante.talla.nombre, " \xB7 x", detalle_r3.cantidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", detalle_r3.subtotal.toFixed(2));
  }
}
function ProcesarPago_Conditional_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 23)(7, "span", 24);
    \u0275\u0275text(8, "Monto recibido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275listener("input", function ProcesarPago_Conditional_2_Conditional_26_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.actualizarMontoRecibido($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "span", 21);
    \u0275\u0275text(12, "Cambio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Bs ", ctx_r1.venta().total.toFixed(2));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.montoRecibidoTexto());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Bs ", ctx_r1.cambio().toFixed(2));
  }
}
function ProcesarPago_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 27);
    \u0275\u0275text(2, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "button", 29);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_2_Conditional_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarTipoTarjeta("DEBITO"));
    });
    \u0275\u0275text(5, " D\xE9bito ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_2_Conditional_27_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarTipoTarjeta("CREDITO"));
    });
    \u0275\u0275text(7, " Cr\xE9dito ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 23)(9, "span", 24);
    \u0275\u0275text(10, "Referencia / autorizaci\xF3n (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 30);
    \u0275\u0275listener("input", function ProcesarPago_Conditional_2_Conditional_27_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.actualizarReferencia($event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opcion-tarjeta--activa", ctx_r1.tipoTarjeta() === "DEBITO");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opcion-tarjeta--activa", ctx_r1.tipoTarjeta() === "CREDITO");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.referencia());
  }
}
function ProcesarPago_Conditional_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 31);
    \u0275\u0275text(2, "Confirma el pago cuando hayas verificado la operaci\xF3n.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 23)(4, "span", 24);
    \u0275\u0275text(5, "Referencia de transacci\xF3n (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 30);
    \u0275\u0275listener("input", function ProcesarPago_Conditional_2_Conditional_28_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.actualizarReferencia($event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.referencia());
  }
}
function ProcesarPago_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2, "Procesar pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCerrar());
    });
    \u0275\u0275element(4, "app-icon", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "span")(7, "strong");
    \u0275\u0275text(8, "Venta:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ProcesarPago_Conditional_2_Conditional_10_Template, 4, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 8);
    \u0275\u0275repeaterCreate(12, ProcesarPago_Conditional_2_For_13_Template, 8, 5, "li", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "span");
    \u0275\u0275text(16, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 11);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "button", 13);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.seleccionarMetodo("EFECTIVO"));
    });
    \u0275\u0275text(21, " Efectivo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 13);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.seleccionarMetodo("TARJETA"));
    });
    \u0275\u0275text(23, " Tarjeta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 13);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.seleccionarMetodo("QR"));
    });
    \u0275\u0275text(25, " QR ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, ProcesarPago_Conditional_2_Conditional_26_Template, 15, 3, "div", 14)(27, ProcesarPago_Conditional_2_Conditional_27_Template, 12, 5, "div", 14)(28, ProcesarPago_Conditional_2_Conditional_28_Template, 7, 1, "div", 14);
    \u0275\u0275elementStart(29, "button", 15);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmarPago());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.venta().codigo_venta);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.venta().reserva ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.venta().detalles);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Bs ", ctx_r1.venta().total.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("metodo-card--activo", ctx_r1.metodoSeleccionado() === "EFECTIVO");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("metodo-card--activo", ctx_r1.metodoSeleccionado() === "TARJETA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("metodo-card--activo", ctx_r1.metodoSeleccionado() === "QR");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.metodoSeleccionado() === "EFECTIVO" ? 26 : ctx_r1.metodoSeleccionado() === "TARJETA" ? 27 : ctx_r1.metodoSeleccionado() === "QR" ? 28 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.puedeConfirmar());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmando() ? "Confirmando..." : "Confirmar pago", " ");
  }
}
function ProcesarPago_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Cambio: Bs ", ctx_r1.pagoConfirmado().cambio.toFixed(2));
  }
}
function ProcesarPago_Conditional_3_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_3_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.enviarComprobante());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.enviandoComprobante());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.enviandoComprobante() ? "Enviando..." : "Enviar", " ");
  }
}
function ProcesarPago_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-icon", 32);
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3, "Pago registrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ProcesarPago_Conditional_3_Conditional_10_Template, 2, 1, "span", 37);
    \u0275\u0275elementStart(11, "span", 38);
    \u0275\u0275text(12, "Comprobante generado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 39)(14, "button", 40);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verComprobante());
    });
    \u0275\u0275text(15, "Ver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 41);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.descargarComprobante());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProcesarPago_Conditional_3_Conditional_18_Template, 2, 2, "button", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 43)(20, "button", 44);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCerrar());
    });
    \u0275\u0275text(21, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 45);
    \u0275\u0275listener("click", function ProcesarPago_Conditional_3_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNuevaVenta());
    });
    \u0275\u0275text(23, "Nueva venta");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pagoConfirmado().codigo_venta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total: Bs ", ctx_r1.pagoConfirmado().total.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("M\xE9todo: ", ctx_r1.etiquetaMetodo(ctx_r1.pagoConfirmado().metodo_pago));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pagoConfirmado().metodo_pago === "EFECTIVO" ? 10 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.descargandoComprobante());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.descargandoComprobante() ? "Descargando..." : "Descargar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneClienteRegistrado() ? 18 : -1);
  }
}
var ProcesarPago = class _ProcesarPago {
  service = inject(VentaPresencialService);
  toast = inject(ToastService);
  comprobanteService = inject(ComprobanteService);
  router = inject(Router);
  venta = input.required(
    ...ngDevMode ? [{ debugName: "venta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cerrar = output();
  pagoRegistrado = output();
  nuevaVenta = output();
  resolveMediaUrl = resolveMediaUrl;
  paso = signal(
    "formulario",
    ...ngDevMode ? [{ debugName: "paso" }] : (
      /* istanbul ignore next */
      []
    )
  );
  metodoSeleccionado = signal(
    null,
    ...ngDevMode ? [{ debugName: "metodoSeleccionado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  montoRecibidoTexto = signal(
    "",
    ...ngDevMode ? [{ debugName: "montoRecibidoTexto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tipoTarjeta = signal(
    null,
    ...ngDevMode ? [{ debugName: "tipoTarjeta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  referencia = signal(
    "",
    ...ngDevMode ? [{ debugName: "referencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmando = signal(
    false,
    ...ngDevMode ? [{ debugName: "confirmando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pagoConfirmado = signal(
    null,
    ...ngDevMode ? [{ debugName: "pagoConfirmado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // CU31 -- Emitir comprobante de venta. "Enviar" solo tiene sentido si la
  // venta tiene un Cliente registrado -- eso SOLO ocurre cuando viene de una
  // Reserva (CU24 nunca guarda cliente_id en una venta directa de
  // mostrador, ver CU24_RegistrarVentaPresencial/service.py), mismo dato ya
  // disponible en `venta().reserva`, sin pedir nada nuevo al backend.
  tieneClienteRegistrado = computed(
    () => this.venta().reserva !== null,
    ...ngDevMode ? [{ debugName: "tieneClienteRegistrado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  descargandoComprobante = signal(
    false,
    ...ngDevMode ? [{ debugName: "descargandoComprobante" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviandoComprobante = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviandoComprobante" }] : (
      /* istanbul ignore next */
      []
    )
  );
  montoRecibidoNumero = computed(
    () => {
      const valor = Number(this.montoRecibidoTexto().replace(",", "."));
      return Number.isFinite(valor) ? valor : 0;
    },
    ...ngDevMode ? [{ debugName: "montoRecibidoNumero" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cambio = computed(
    () => {
      const recibido = this.montoRecibidoNumero();
      const total = this.venta().total;
      return recibido >= total ? recibido - total : 0;
    },
    ...ngDevMode ? [{ debugName: "cambio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  puedeConfirmar = computed(
    () => {
      if (this.confirmando()) {
        return false;
      }
      const metodo = this.metodoSeleccionado();
      if (metodo === "EFECTIVO") {
        return this.montoRecibidoNumero() >= this.venta().total;
      }
      if (metodo === "TARJETA") {
        return this.tipoTarjeta() !== null;
      }
      return metodo === "QR";
    },
    ...ngDevMode ? [{ debugName: "puedeConfirmar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  seleccionarMetodo(metodo) {
    this.metodoSeleccionado.set(metodo);
  }
  actualizarMontoRecibido(valor) {
    this.montoRecibidoTexto.set(valor);
  }
  seleccionarTipoTarjeta(tipo) {
    this.tipoTarjeta.set(tipo);
  }
  actualizarReferencia(valor) {
    this.referencia.set(valor);
  }
  confirmarPago() {
    const metodo = this.metodoSeleccionado();
    if (!metodo || !this.puedeConfirmar()) {
      return;
    }
    let payload;
    if (metodo === "EFECTIVO") {
      payload = { metodo_pago: "EFECTIVO", monto_recibido: this.montoRecibidoNumero() };
    } else if (metodo === "TARJETA") {
      const referencia = this.referencia().trim();
      payload = __spreadValues({
        metodo_pago: "TARJETA",
        tipo_tarjeta: this.tipoTarjeta()
      }, referencia ? { referencia } : {});
    } else {
      const referencia = this.referencia().trim();
      payload = __spreadValues({ metodo_pago: "QR" }, referencia ? { referencia } : {});
    }
    this.confirmando.set(true);
    this.service.confirmarPago(this.venta().id, payload).subscribe({
      next: (pago) => {
        this.confirmando.set(false);
        this.pagoConfirmado.set(pago);
        this.paso.set("confirmado");
        this.pagoRegistrado.emit();
      },
      error: (err) => {
        this.confirmando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo registrar el pago. Int\xE9ntalo nuevamente.");
      }
    });
  }
  onCerrar() {
    if (this.confirmando()) {
      return;
    }
    this.cerrar.emit();
  }
  onNuevaVenta() {
    this.nuevaVenta.emit();
  }
  etiquetaMetodo(metodo) {
    const etiquetas = { EFECTIVO: "Efectivo", TARJETA: "Tarjeta", QR: "QR" };
    return etiquetas[metodo] ?? metodo;
  }
  verComprobante() {
    this.router.navigateByUrl(`/cajero/comprobante/${this.venta().id}`);
  }
  descargarComprobante() {
    if (this.descargandoComprobante()) {
      return;
    }
    const ventaId = this.venta().id;
    const codigoVenta = this.pagoConfirmado()?.codigo_venta ?? this.venta().codigo_venta;
    this.descargandoComprobante.set(true);
    this.comprobanteService.descargarPdf(ventaId).subscribe({
      next: (blob) => {
        this.descargandoComprobante.set(false);
        descargarBlob(blob, `${codigoVenta}.pdf`);
      },
      error: () => {
        this.descargandoComprobante.set(false);
        this.toast.error("No se pudo descargar el comprobante. Int\xE9ntalo nuevamente.");
      }
    });
  }
  enviarComprobante() {
    if (this.enviandoComprobante()) {
      return;
    }
    this.enviandoComprobante.set(true);
    this.comprobanteService.enviar(this.venta().id).subscribe({
      next: (respuesta) => {
        this.enviandoComprobante.set(false);
        if (respuesta.enviado) {
          this.toast.brand(respuesta.mensaje);
        } else {
          this.toast.error(respuesta.mensaje);
        }
      },
      error: (err) => {
        this.enviandoComprobante.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo enviar el comprobante. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function ProcesarPago_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProcesarPago)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProcesarPago, selectors: [["app-procesar-pago"]], inputs: { venta: [1, "venta"] }, outputs: { cerrar: "cerrar", pagoRegistrado: "pagoRegistrado", nuevaVenta: "nuevaVenta" }, decls: 4, vars: 1, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-ficha", 3, "click"], [1, "pago-registrado"], [1, "modal-ficha__header"], [1, "modal-ficha__titulo"], ["type", "button", "aria-label", "Cerrar", 1, "modal-ficha__cerrar", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "modal-ficha__venta"], [1, "modal-ficha__productos"], [1, "producto-linea"], [1, "modal-ficha__total"], [1, "modal-ficha__total-valor"], [1, "metodos-pago"], ["type", "button", 1, "metodo-card", 3, "click"], [1, "metodo-detalle"], ["type", "button", 1, "btn", "btn--primary", "modal-ficha__confirmar", 3, "click", "disabled"], [1, "producto-linea__info"], [1, "producto-linea__nombre"], [1, "producto-linea__variante"], [1, "producto-linea__subtotal"], [1, "campo-monto"], [1, "campo-monto__label"], [1, "campo-monto__valor"], [1, "campo"], [1, "campo__label"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 1, "campo__input", 3, "input", "value"], [1, "campo-monto__valor", "campo-monto__valor--cambio"], [1, "metodo-detalle__subtitulo"], [1, "opciones-tarjeta"], ["type", "button", 1, "opcion-tarjeta", 3, "click"], ["type", "text", "maxlength", "120", 1, "campo__input", 3, "input", "value"], [1, "metodo-detalle__texto"], ["name", "bag", 2, "width", "30px", "height", "30px"], [1, "pago-registrado__titulo"], [1, "pago-registrado__codigo"], [1, "pago-registrado__total"], [1, "pago-registrado__metodo"], [1, "pago-registrado__cambio"], [1, "pago-registrado__comprobante"], [1, "pago-registrado__comprobante-acciones"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "disabled"], [1, "pago-registrado__acciones"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click"]], template: function ProcesarPago_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ProcesarPago_Template_div_click_0_listener() {
        return ctx.onCerrar();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ProcesarPago_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275conditionalCreate(2, ProcesarPago_Conditional_2_Template, 31, 12)(3, ProcesarPago_Conditional_3_Template, 24, 7, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.paso() === "formulario" ? 2 : ctx.paso() === "confirmado" && ctx.pagoConfirmado() ? 3 : -1);
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: color-mix(in srgb, black 45%, transparent);\n  animation: _ngcontent-%COMP%_procesar-pago-aparecer 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_procesar-pago-aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-ficha[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--%NS%color-white);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 22px;\n}\n.modal-ficha__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-ficha__titulo[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text);\n}\n.modal-ficha__cerrar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n}\n.modal-ficha__cerrar[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-border);\n  color: var(--%NS%color-text);\n}\n.modal-ficha__venta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n  padding: 10px 14px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.modal-ficha__venta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.modal-ficha__productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 180px;\n  overflow-y: auto;\n}\n.producto-linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.producto-linea[_ngcontent-%COMP%]    + .producto-linea[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.producto-linea__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.producto-linea__nombre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.producto-linea__variante[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-linea__subtotal[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  white-space: nowrap;\n}\n.modal-ficha__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.modal-ficha__total-valor[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.metodos-pago[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.metodo-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 18px 10px;\n  border: 1.5px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  background: var(--%NS%color-white);\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  transition:\n    border-color var(--%NS%transition-fast),\n    background var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.metodo-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n}\n.metodo-card--activo[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n  box-shadow: inset 0 0 0 1.5px var(--%NS%color-primary);\n}\n.metodo-detalle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 14px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-bg);\n}\n.metodo-detalle__subtitulo[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.metodo-detalle__texto[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.campo__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.campo__input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 14px;\n  color: var(--%NS%color-text);\n}\n.campo__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.campo-monto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.campo-monto__valor[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.campo-monto__valor--cambio[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text);\n}\n.opciones-tarjeta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.opcion-tarjeta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border: 1.5px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.opcion-tarjeta--activa[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n}\n.modal-ficha__confirmar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.pago-registrado[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px 10px;\n  text-align: center;\n}\n.pago-registrado[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  margin-bottom: 4px;\n}\n.pago-registrado__titulo[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.pago-registrado__codigo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.03em;\n}\n.pago-registrado__total[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.pago-registrado__metodo[_ngcontent-%COMP%], \n.pago-registrado__cambio[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.pago-registrado__comprobante[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.pago-registrado__comprobante-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 6px;\n  width: 100%;\n}\n.pago-registrado__comprobante-acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 100px;\n}\n.pago-registrado__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  margin-top: 14px;\n  width: 100%;\n}\n.pago-registrado__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 150px;\n}\n@media (max-width: 640px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .modal-ficha[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 100%;\n    max-height: 92vh;\n    border-radius: var(--%NS%radius-lg) var(--%NS%radius-lg) 0 0;\n  }\n  .metodos-pago[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .opciones-tarjeta[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pago-registrado__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .pago-registrado__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=procesar-pago-EIBCOHAI.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcesarPago, [{
    type: Component,
    args: [{ selector: "app-procesar-pago", imports: [Icon], template: `<div class="modal-overlay" (click)="onCerrar()">\r
  <div class="modal-ficha" (click)="$event.stopPropagation()">\r
    @if (paso() === 'formulario') {\r
      <div class="modal-ficha__header">\r
        <span class="modal-ficha__titulo">Procesar pago</span>\r
        <button type="button" class="modal-ficha__cerrar" (click)="onCerrar()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </div>\r
\r
      <div class="modal-ficha__venta">\r
        <span><strong>Venta:</strong> {{ venta().codigo_venta }}</span>\r
        @if (venta().reserva) {\r
          <span><strong>Reserva:</strong> {{ venta().reserva!.codigo_reserva }}</span>\r
        }\r
      </div>\r
\r
      <ul class="modal-ficha__productos">\r
        @for (detalle of venta().detalles; track detalle.producto.id + '-' + detalle.variante.id) {\r
          <li class="producto-linea">\r
            <div class="producto-linea__info">\r
              <span class="producto-linea__nombre">{{ detalle.producto.nombre }}</span>\r
              <span class="producto-linea__variante">\r
                {{ detalle.variante.color.nombre }} \xB7 Talla {{ detalle.variante.talla.nombre }} \xB7 x{{ detalle.cantidad }}\r
              </span>\r
            </div>\r
            <span class="producto-linea__subtotal">Bs {{ detalle.subtotal.toFixed(2) }}</span>\r
          </li>\r
        }\r
      </ul>\r
\r
      <div class="modal-ficha__total">\r
        <span>Total</span>\r
        <span class="modal-ficha__total-valor">Bs {{ venta().total.toFixed(2) }}</span>\r
      </div>\r
\r
      <div class="metodos-pago">\r
        <button\r
          type="button"\r
          class="metodo-card"\r
          [class.metodo-card--activo]="metodoSeleccionado() === 'EFECTIVO'"\r
          (click)="seleccionarMetodo('EFECTIVO')"\r
        >\r
          Efectivo\r
        </button>\r
        <button\r
          type="button"\r
          class="metodo-card"\r
          [class.metodo-card--activo]="metodoSeleccionado() === 'TARJETA'"\r
          (click)="seleccionarMetodo('TARJETA')"\r
        >\r
          Tarjeta\r
        </button>\r
        <button\r
          type="button"\r
          class="metodo-card"\r
          [class.metodo-card--activo]="metodoSeleccionado() === 'QR'"\r
          (click)="seleccionarMetodo('QR')"\r
        >\r
          QR\r
        </button>\r
      </div>\r
\r
      @if (metodoSeleccionado() === 'EFECTIVO') {\r
        <div class="metodo-detalle">\r
          <div class="campo-monto">\r
            <span class="campo-monto__label">Total</span>\r
            <span class="campo-monto__valor">Bs {{ venta().total.toFixed(2) }}</span>\r
          </div>\r
          <label class="campo">\r
            <span class="campo__label">Monto recibido</span>\r
            <input\r
              type="number"\r
              min="0"\r
              step="0.01"\r
              class="campo__input"\r
              [value]="montoRecibidoTexto()"\r
              (input)="actualizarMontoRecibido($any($event.target).value)"\r
              placeholder="0.00"\r
            />\r
          </label>\r
          <div class="campo-monto">\r
            <span class="campo-monto__label">Cambio</span>\r
            <span class="campo-monto__valor campo-monto__valor--cambio">Bs {{ cambio().toFixed(2) }}</span>\r
          </div>\r
        </div>\r
      } @else if (metodoSeleccionado() === 'TARJETA') {\r
        <div class="metodo-detalle">\r
          <span class="metodo-detalle__subtitulo">Tipo</span>\r
          <div class="opciones-tarjeta">\r
            <button\r
              type="button"\r
              class="opcion-tarjeta"\r
              [class.opcion-tarjeta--activa]="tipoTarjeta() === 'DEBITO'"\r
              (click)="seleccionarTipoTarjeta('DEBITO')"\r
            >\r
              D\xE9bito\r
            </button>\r
            <button\r
              type="button"\r
              class="opcion-tarjeta"\r
              [class.opcion-tarjeta--activa]="tipoTarjeta() === 'CREDITO'"\r
              (click)="seleccionarTipoTarjeta('CREDITO')"\r
            >\r
              Cr\xE9dito\r
            </button>\r
          </div>\r
          <label class="campo">\r
            <span class="campo__label">Referencia / autorizaci\xF3n (opcional)</span>\r
            <input\r
              type="text"\r
              class="campo__input"\r
              [value]="referencia()"\r
              (input)="actualizarReferencia($any($event.target).value)"\r
              maxlength="120"\r
            />\r
          </label>\r
        </div>\r
      } @else if (metodoSeleccionado() === 'QR') {\r
        <div class="metodo-detalle">\r
          <p class="metodo-detalle__texto">Confirma el pago cuando hayas verificado la operaci\xF3n.</p>\r
          <label class="campo">\r
            <span class="campo__label">Referencia de transacci\xF3n (opcional)</span>\r
            <input\r
              type="text"\r
              class="campo__input"\r
              [value]="referencia()"\r
              (input)="actualizarReferencia($any($event.target).value)"\r
              maxlength="120"\r
            />\r
          </label>\r
        </div>\r
      }\r
\r
      <button\r
        type="button"\r
        class="btn btn--primary modal-ficha__confirmar"\r
        [disabled]="!puedeConfirmar()"\r
        (click)="confirmarPago()"\r
      >\r
        {{ confirmando() ? 'Confirmando...' : 'Confirmar pago' }}\r
      </button>\r
    } @else if (paso() === 'confirmado' && pagoConfirmado()) {\r
      <div class="pago-registrado">\r
        <app-icon name="bag" style="width: 30px; height: 30px" />\r
        <span class="pago-registrado__titulo">Pago registrado</span>\r
        <span class="pago-registrado__codigo">{{ pagoConfirmado()!.codigo_venta }}</span>\r
        <span class="pago-registrado__total">Total: Bs {{ pagoConfirmado()!.total.toFixed(2) }}</span>\r
        <span class="pago-registrado__metodo">M\xE9todo: {{ etiquetaMetodo(pagoConfirmado()!.metodo_pago) }}</span>\r
        @if (pagoConfirmado()!.metodo_pago === 'EFECTIVO') {\r
          <span class="pago-registrado__cambio">Cambio: Bs {{ pagoConfirmado()!.cambio!.toFixed(2) }}</span>\r
        }\r
        <span class="pago-registrado__comprobante">Comprobante generado.</span>\r
\r
        <div class="pago-registrado__comprobante-acciones">\r
          <button type="button" class="btn btn--ghost btn--sm" (click)="verComprobante()">Ver</button>\r
          <button\r
            type="button"\r
            class="btn btn--ghost btn--sm"\r
            [disabled]="descargandoComprobante()"\r
            (click)="descargarComprobante()"\r
          >\r
            {{ descargandoComprobante() ? 'Descargando...' : 'Descargar' }}\r
          </button>\r
          @if (tieneClienteRegistrado()) {\r
            <button\r
              type="button"\r
              class="btn btn--ghost btn--sm"\r
              [disabled]="enviandoComprobante()"\r
              (click)="enviarComprobante()"\r
            >\r
              {{ enviandoComprobante() ? 'Enviando...' : 'Enviar' }}\r
            </button>\r
          }\r
        </div>\r
\r
        <div class="pago-registrado__acciones">\r
          <button type="button" class="btn btn--ghost" (click)="onCerrar()">Cerrar</button>\r
          <button type="button" class="btn btn--primary" (click)="onNuevaVenta()">Nueva venta</button>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/cajero/ventas/procesar-pago/procesar-pago.scss */\n:host {\n  display: block;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: color-mix(in srgb, black 45%, transparent);\n  animation: procesar-pago-aparecer 0.15s ease;\n}\n@keyframes procesar-pago-aparecer {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-ficha {\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: var(--color-white);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 22px;\n}\n.modal-ficha__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-ficha__titulo {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--color-text);\n}\n.modal-ficha__cerrar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n}\n.modal-ficha__cerrar:hover {\n  background: var(--color-border);\n  color: var(--color-text);\n}\n.modal-ficha__venta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n  padding: 10px 14px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n  font-size: 13px;\n  color: var(--color-text);\n}\n.modal-ficha__venta strong {\n  font-weight: 700;\n}\n.modal-ficha__productos {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 180px;\n  overflow-y: auto;\n}\n.producto-linea {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.producto-linea + .producto-linea {\n  padding-top: 10px;\n  border-top: 1px dashed var(--color-border);\n}\n.producto-linea__info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.producto-linea__nombre {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.producto-linea__variante {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.producto-linea__subtotal {\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.modal-ficha__total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.modal-ficha__total-valor {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.metodos-pago {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.metodo-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 18px 10px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  background: var(--color-white);\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  transition:\n    border-color var(--transition-fast),\n    background var(--transition-fast),\n    color var(--transition-fast);\n}\n.metodo-card:hover {\n  border-color: var(--color-primary);\n}\n.metodo-card--activo {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n  box-shadow: inset 0 0 0 1.5px var(--color-primary);\n}\n.metodo-detalle {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-bg);\n}\n.metodo-detalle__subtitulo {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.metodo-detalle__texto {\n  margin: 0;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.campo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.campo__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.campo__input {\n  padding: 10px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 14px;\n  color: var(--color-text);\n}\n.campo__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.campo-monto {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.campo-monto__valor {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.campo-monto__valor--cambio {\n  color: var(--color-text);\n}\n.opciones-tarjeta {\n  display: flex;\n  gap: 10px;\n}\n.opcion-tarjeta {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.opcion-tarjeta--activa {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n}\n.modal-ficha__confirmar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.pago-registrado {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px 10px;\n  text-align: center;\n}\n.pago-registrado app-icon {\n  color: var(--color-primary);\n  margin-bottom: 4px;\n}\n.pago-registrado__titulo {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.pago-registrado__codigo {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n  letter-spacing: 0.03em;\n}\n.pago-registrado__total {\n  margin-top: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.pago-registrado__metodo,\n.pago-registrado__cambio {\n  font-size: 13.5px;\n  color: var(--color-text-secondary);\n}\n.pago-registrado__comprobante {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.pago-registrado__comprobante-acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 6px;\n  width: 100%;\n}\n.pago-registrado__comprobante-acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 100px;\n}\n.pago-registrado__acciones {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  margin-top: 14px;\n  width: 100%;\n}\n.pago-registrado__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 150px;\n}\n@media (max-width: 640px) {\n  .modal-overlay {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .modal-ficha {\n    max-width: none;\n    width: 100%;\n    max-height: 92vh;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  }\n  .metodos-pago {\n    grid-template-columns: 1fr;\n  }\n  .opciones-tarjeta {\n    flex-direction: column;\n  }\n  .pago-registrado__acciones {\n    flex-direction: column-reverse;\n  }\n  .pago-registrado__acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=procesar-pago-EIBCOHAI.css.map */\n"] }]
  }], null, { venta: [{ type: Input, args: [{ isSignal: true, alias: "venta", required: true }] }], cerrar: [{ type: Output, args: ["cerrar"] }], pagoRegistrado: [{ type: Output, args: ["pagoRegistrado"] }], nuevaVenta: [{ type: Output, args: ["nuevaVenta"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProcesarPago, { className: "ProcesarPago", filePath: "src/app/features/cajero/ventas/procesar-pago/procesar-pago.ts", lineNumber: 51 });
})();

export {
  VentaPresencialService,
  ProcesarPago
};
//# debugId=9a3d3c70-c4ed-5357-9c67-3a2f1e45f923
//# sourceMappingURL=chunk-KVUTSISM.js.map
