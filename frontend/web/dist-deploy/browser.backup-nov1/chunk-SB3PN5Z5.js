import {
  ProcesarPago,
  VentaPresencialService
} from "./chunk-KVUTSISM.js";
import {
  formatearFechaReserva,
  formatearHorarioReserva
} from "./chunk-KHVJ4PNO.js";
import "./chunk-D37JXF2Y.js";
import "./chunk-TQ6XHBF5.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  Router,
  RouterLink
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Component,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/features/cajero/reservas-pendientes/reservas-pendientes.service.ts
var ReservasPendientesService = class _ReservasPendientesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/reservas`;
  listarPendientes() {
    return this.http.get(`${this.baseUrl}/cajero/pendientes`);
  }
  static \u0275fac = function ReservasPendientesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservasPendientesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservasPendientesService, factory: _ReservasPendientesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservasPendientesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/cajero/reservas-pendientes/reservas-pendientes.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function ReservasPendientes_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function ReservasPendientes_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ReservasPendientes_Conditional_10_For_2_Template, 1, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ReservasPendientes_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 9);
    \u0275\u0275text(2, "No se pudo cargar la informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function ReservasPendientes_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargar());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function ReservasPendientes_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-icon", 11);
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3, "No hay reservas pendientes de atenci\xF3n.");
    \u0275\u0275elementEnd()();
  }
}
function ReservasPendientes_Conditional_13_For_2_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
  if (rf & 2) {
    const detalle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(detalle_r4.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", detalle_r4.producto.nombre);
  }
}
function ReservasPendientes_Conditional_13_For_2_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "app-icon", 29);
    \u0275\u0275elementEnd();
  }
}
function ReservasPendientes_Conditional_13_For_2_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const detalle_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 x", detalle_r4.cantidad, " ");
  }
}
function ReservasPendientes_Conditional_13_For_2_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21)(1, "div", 23);
    \u0275\u0275conditionalCreate(2, ReservasPendientes_Conditional_13_For_2_For_18_Conditional_2_Template, 1, 2, "img", 24)(3, ReservasPendientes_Conditional_13_For_2_For_18_Conditional_3_Template, 2, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, ReservasPendientes_Conditional_13_For_2_For_18_Conditional_9_Template, 1, 1);
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
    \u0275\u0275advance();
    \u0275\u0275conditional(detalle_r4.cantidad > 1 ? 9 : -1);
  }
}
function ReservasPendientes_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 12)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "Lista para caja");
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
    \u0275\u0275repeaterCreate(17, ReservasPendientes_Conditional_13_For_2_For_18_Template, 10, 5, "li", 21, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function ReservasPendientes_Conditional_13_For_2_Template_button_click_19_listener() {
      const reserva_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cargarVenta(reserva_r5));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Reserva ", reserva_r5.codigo_reserva);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(reserva_r5.cliente.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fecha(reserva_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.horario(reserva_r5));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(reserva_r5.detalles);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cargandoVenta() !== null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cargandoVenta() === reserva_r5.id ? "Cargando..." : "Cargar venta", " ");
  }
}
function ReservasPendientes_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ReservasPendientes_Conditional_13_For_2_Template, 21, 6, "article", 12, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.reservas());
  }
}
function ReservasPendientes_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-procesar-pago", 30);
    \u0275\u0275listener("cerrar", function ReservasPendientes_Conditional_14_Template_app_procesar_pago_cerrar_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalPago());
    })("pagoRegistrado", function ReservasPendientes_Conditional_14_Template_app_procesar_pago_pagoRegistrado_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPagoRegistrado());
    })("nuevaVenta", function ReservasPendientes_Conditional_14_Template_app_procesar_pago_nuevaVenta_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNuevaVentaDesdeModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("venta", ctx_r1.ventaParaPago());
  }
}
var ReservasPendientes = class _ReservasPendientes {
  service = inject(ReservasPendientesService);
  ventaPresencialService = inject(VentaPresencialService);
  router = inject(Router);
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
  cargandoVenta = signal(
    null,
    ...ngDevMode ? [{ debugName: "cargandoVenta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ventaParaPago = signal(
    null,
    ...ngDevMode ? [{ debugName: "ventaParaPago" }] : (
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
    this.service.listarPendientes().subscribe({
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
  cargarVenta(reserva) {
    if (this.cargandoVenta() !== null) {
      return;
    }
    this.cargandoVenta.set(reserva.id);
    this.ventaPresencialService.crearVentaDesdeReserva(reserva.id).subscribe({
      next: (venta) => {
        this.cargandoVenta.set(null);
        this.ventaParaPago.set(venta);
      },
      error: () => {
        this.cargandoVenta.set(null);
        this.errorMessage.set("No se pudo cargar la venta de esa reserva. Int\xE9ntalo nuevamente.");
      }
    });
  }
  cerrarModalPago() {
    this.ventaParaPago.set(null);
  }
  onPagoRegistrado() {
    this.ventaParaPago.set(null);
    this.cargar();
  }
  onNuevaVentaDesdeModal() {
    this.ventaParaPago.set(null);
    this.router.navigateByUrl("/cajero/ventas/nueva");
  }
  static \u0275fac = function ReservasPendientes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservasPendientes)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservasPendientes, selectors: [["app-reservas-pendientes-cajero"]], decls: 15, vars: 2, consts: [[1, "cajero-content"], [1, "page-header", "page-header--con-accion"], ["routerLink", "/cajero/ventas/nueva", 1, "btn", "btn--primary", "page-header__accion"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "reservas-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], [3, "venta"], [1, "skeleton-card"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["name", "reservations", 2, "width", "28px", "height", "28px"], [1, "reserva-card"], [1, "reserva-card__header"], [1, "reserva-card__header-top"], [1, "reserva-card__codigo"], [1, "reserva-card__estado"], [1, "reserva-card__cliente"], ["name", "user", 2, "width", "13px", "height", "13px"], [1, "reserva-card__horario"], [1, "reserva-card__detalles-lista"], [1, "detalle-prenda"], ["type", "button", 1, "btn", "btn--primary", "reserva-card__cargar-venta", 3, "click", "disabled"], [1, "detalle-prenda__imagen"], [3, "src", "alt"], [1, "detalle-prenda__placeholder"], [1, "detalle-prenda__info"], [1, "detalle-prenda__nombre"], [1, "detalle-prenda__variante"], ["name", "products", 2, "width", "20px", "height", "20px"], [3, "cerrar", "pagoRegistrado", "nuevaVenta", "venta"]], template: function ReservasPendientes_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Reservas pendientes de atenci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Reservas que tu sucursal ya dej\xF3 listas para continuar el proceso.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 2);
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nueva venta ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, ReservasPendientes_Conditional_10_Template, 3, 1, "div", 4)(11, ReservasPendientes_Conditional_11_Template, 7, 1, "div", 5)(12, ReservasPendientes_Conditional_12_Template, 4, 0, "div", 6)(13, ReservasPendientes_Conditional_13_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, ReservasPendientes_Conditional_14_Template, 1, 1, "app-procesar-pago", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.cargando() ? 10 : ctx.errorMessage() ? 11 : ctx.reservas().length === 0 ? 12 : 13);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.ventaParaPago() ? 14 : -1);
    }
  }, dependencies: [Icon, RouterLink, ProcesarPago], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.cajero-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.page-header--con-accion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.page-header__accion[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.reservas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.reserva-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 14px;\n  transition: box-shadow var(--%NS%transition-fast);\n}\n.reserva-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--%NS%shadow-medium);\n}\n.reserva-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.reserva-card__header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__codigo[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.reserva-card__cliente[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text);\n}\n.reserva-card__cliente[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  flex-shrink: 0;\n}\n.reserva-card__horario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px 8px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.reserva-card__estado[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.reserva-card__detalles-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-prenda[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.detalle-prenda[_ngcontent-%COMP%]    + .detalle-prenda[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px dashed var(--%NS%color-border);\n}\n.detalle-prenda__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.detalle-prenda__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-prenda__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.detalle-prenda__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detalle-prenda__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.detalle-prenda__variante[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.reserva-card__cargar-venta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  align-self: stretch;\n  margin-top: 2px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 124px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 480px) {\n  .reservas-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detalle-prenda[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .page-header__accion[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=reservas-pendientes-UZJ5BQ3N.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservasPendientes, [{
    type: Component,
    args: [{ selector: "app-reservas-pendientes-cajero", imports: [Icon, RouterLink, ProcesarPago], template: `<div class="cajero-content">\r
  <div class="page-header page-header--con-accion">\r
    <div>\r
      <h1>Reservas pendientes de atenci\xF3n</h1>\r
      <p>Reservas que tu sucursal ya dej\xF3 listas para continuar el proceso.</p>\r
    </div>\r
    <a routerLink="/cajero/ventas/nueva" class="btn btn--primary page-header__accion">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nueva venta\r
    </a>\r
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
        <span class="state-block__title">No se pudo cargar la informaci\xF3n</span>\r
        <span>{{ errorMessage() }}</span>\r
        <button type="button" class="btn btn--ghost btn--sm" (click)="cargar()">Reintentar</button>\r
      </div>\r
    } @else if (reservas().length === 0) {\r
      <div class="state-block">\r
        <app-icon name="reservations" style="width: 28px; height: 28px" />\r
        <span class="state-block__title">No hay reservas pendientes de atenci\xF3n.</span>\r
      </div>\r
    } @else {\r
      <div class="reservas-grid">\r
        @for (reserva of reservas(); track reserva.id) {\r
          <article class="reserva-card">\r
            <div class="reserva-card__header">\r
              <div class="reserva-card__header-top">\r
                <span class="reserva-card__codigo">Reserva {{ reserva.codigo_reserva }}</span>\r
                <span class="reserva-card__estado">Lista para caja</span>\r
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
                  </div>\r
                </li>\r
              }\r
            </ul>\r
\r
            <button\r
              type="button"\r
              class="btn btn--primary reserva-card__cargar-venta"\r
              [disabled]="cargandoVenta() !== null"\r
              (click)="cargarVenta(reserva)"\r
            >\r
              {{ cargandoVenta() === reserva.id ? 'Cargando...' : 'Cargar venta' }}\r
            </button>\r
          </article>\r
        }\r
      </div>\r
    }\r
  </div>\r
\r
@if (ventaParaPago()) {\r
  <app-procesar-pago\r
    [venta]="ventaParaPago()!"\r
    (cerrar)="cerrarModalPago()"\r
    (pagoRegistrado)="onPagoRegistrado()"\r
    (nuevaVenta)="onNuevaVentaDesdeModal()"\r
  />\r
}\r
`, styles: ["/* src/app/features/cajero/reservas-pendientes/reservas-pendientes.scss */\n:host {\n  display: block;\n}\n.cajero-content {\n  padding: 0;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.page-header--con-accion {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.page-header__accion {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.reservas-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.reserva-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 14px;\n  transition: box-shadow var(--transition-fast);\n}\n.reserva-card:hover {\n  box-shadow: var(--shadow-medium);\n}\n.reserva-card__header {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n.reserva-card__header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__codigo {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.reserva-card__cliente {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--color-text);\n}\n.reserva-card__cliente app-icon {\n  color: var(--color-primary);\n  flex-shrink: 0;\n}\n.reserva-card__horario {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px 8px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.reserva-card__estado {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.reserva-card__detalles-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.detalle-prenda {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.detalle-prenda + .detalle-prenda {\n  padding-top: 10px;\n  border-top: 1px dashed var(--color-border);\n}\n.detalle-prenda__imagen {\n  flex-shrink: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.detalle-prenda__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detalle-prenda__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.detalle-prenda__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detalle-prenda__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.detalle-prenda__variante {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.reserva-card__cargar-venta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  align-self: stretch;\n  margin-top: 2px;\n}\n.skeleton-card {\n  height: 124px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 480px) {\n  .reservas-grid {\n    grid-template-columns: 1fr;\n  }\n  .detalle-prenda {\n    flex-wrap: wrap;\n  }\n  .page-header__accion {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=reservas-pendientes-UZJ5BQ3N.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservasPendientes, { className: "ReservasPendientes", filePath: "src/app/features/cajero/reservas-pendientes/reservas-pendientes.ts", lineNumber: 43 });
})();
export {
  ReservasPendientes
};
//# debugId=a34e3686-dc46-59f8-8654-f3ea747b1fc5
//# sourceMappingURL=chunk-SB3PN5Z5.js.map
