import {
  SucursalPublicaService
} from "./chunk-CYFUGY7Z.js";
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
  Router,
  RouterLink
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
  inject,
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

// src/app/features/compra-digital/compra-digital.service.ts
var CompraDigitalService = class _CompraDigitalService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/compra-digital`;
  obtenerResumen() {
    return this.http.get(`${this.baseUrl}/resumen`);
  }
  listarSucursales(ciudadId) {
    const params = new HttpParams().set("ciudad_id", ciudadId);
    return this.http.get(`${this.baseUrl}/sucursales`, { params });
  }
  confirmar(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  static \u0275fac = function CompraDigitalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompraDigitalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompraDigitalService, factory: _CompraDigitalService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompraDigitalService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/compra-digital/finalizar-compra/finalizar-compra.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => [1, 2];
var _forTrack0 = ($index, $item) => $item.item_id;
var _forTrack1 = ($index, $item) => $item.id;
function FinalizarCompra_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function FinalizarCompra_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, FinalizarCompra_Conditional_2_For_2_Template, 1, 0, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function FinalizarCompra_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "No se pudo continuar con la compra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6, "Volver al carrito");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const linea_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.resolveMediaUrl(linea_r3.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", linea_r3.producto.nombre);
  }
}
function FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-icon", 23);
    \u0275\u0275elementEnd();
  }
}
function FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const linea_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bs ", linea_r3.precio_base.toFixed(2));
  }
}
function FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const linea_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", linea_r3.porcentaje_descuento, "%");
  }
}
function FinalizarCompra_Conditional_4_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 13);
    \u0275\u0275conditionalCreate(2, FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_2_Template, 1, 2, "img", 14)(3, FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_3_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19);
    \u0275\u0275conditionalCreate(10, FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_10_Template, 2, 1, "span", 20);
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, FinalizarCompra_Conditional_4_Conditional_0_For_7_Conditional_13_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const linea_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(linea_r3.producto.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(linea_r3.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", linea_r3.variante.color.nombre, " \xB7 ", linea_r3.variante.talla.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(linea_r3.en_promocion ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", linea_r3.precio_unitario.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275conditional(linea_r3.en_promocion ? 13 : -1);
  }
}
function FinalizarCompra_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h1");
    \u0275\u0275text(2, "Finalizar compra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Revisa las prendas que vas a comprar.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275repeaterCreate(6, FinalizarCompra_Conditional_4_Conditional_0_For_7_Template, 14, 7, "article", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "span", 10);
    \u0275\u0275text(10, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275listener("click", function FinalizarCompra_Conditional_4_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.irAElegirSucursal());
    });
    \u0275\u0275text(14, " Elegir sucursal de retiro ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.resumen().items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Bs ", ctx_r0.resumen().total.toFixed(2));
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ciudad_r5 = ctx.$implicit;
    \u0275\u0275property("value", ciudad_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ciudad_r5.nombre);
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, FinalizarCompra_Conditional_4_Conditional_1_Conditional_13_For_2_Template, 1, 0, "div", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "Sin disponibilidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No existe una sucursal con disponibilidad para todas las prendas seleccionadas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6, "Volver al carrito");
    \u0275\u0275elementEnd()();
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_Conditional_15_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "No disponible para todas las prendas");
    \u0275\u0275elementEnd();
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function FinalizarCompra_Conditional_4_Conditional_1_Conditional_15_For_2_Template_button_click_0_listener() {
      const sucursal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.elegirSucursal(sucursal_r7));
    });
    \u0275\u0275elementStart(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, FinalizarCompra_Conditional_4_Conditional_1_Conditional_15_For_2_Conditional_5_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sucursal_r7 = ctx.$implicit;
    \u0275\u0275classProp("sucursal-card--no-disponible", !sucursal_r7.disponible_para_compra);
    \u0275\u0275property("disabled", !sucursal_r7.disponible_para_compra);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sucursal_r7.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sucursal_r7.direccion);
    \u0275\u0275advance();
    \u0275\u0275conditional(!sucursal_r7.disponible_para_compra ? 5 : -1);
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, FinalizarCompra_Conditional_4_Conditional_1_Conditional_15_For_2_Template, 6, 6, "button", 32, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.sucursales());
  }
}
function FinalizarCompra_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h1");
    \u0275\u0275text(2, "Sucursal de retiro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Elige la ciudad y la sucursal donde retirar\xE1s tu compra.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 24)(6, "span", 25);
    \u0275\u0275text(7, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 26);
    \u0275\u0275listener("change", function FinalizarCompra_Conditional_4_Conditional_1_Template_select_change_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarCiudad($event.target.value));
    });
    \u0275\u0275elementStart(9, "option", 27);
    \u0275\u0275text(10, "Selecciona una ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, FinalizarCompra_Conditional_4_Conditional_1_For_12_Template, 2, 2, "option", 28, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, FinalizarCompra_Conditional_4_Conditional_1_Conditional_13_Template, 3, 1, "div", 2)(14, FinalizarCompra_Conditional_4_Conditional_1_Conditional_14_Template, 7, 0, "div", 3)(15, FinalizarCompra_Conditional_4_Conditional_1_Conditional_15_Template, 3, 0, "div", 29);
    \u0275\u0275elementStart(16, "button", 30);
    \u0275\u0275listener("click", function FinalizarCompra_Conditional_4_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.volverAResumen());
    });
    \u0275\u0275text(17, "Volver");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.ciudades());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.cargandoSucursales() ? 13 : ctx_r0.sucursalesConsultadas() && !ctx_r0.haySucursalDisponible ? 14 : ctx_r0.sucursalesConsultadas() ? 15 : -1);
  }
}
function FinalizarCompra_Conditional_4_Conditional_2_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const linea_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.resolveMediaUrl(linea_r9.producto.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", linea_r9.producto.nombre);
  }
}
function FinalizarCompra_Conditional_4_Conditional_2_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-icon", 23);
    \u0275\u0275elementEnd();
  }
}
function FinalizarCompra_Conditional_4_Conditional_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 13);
    \u0275\u0275conditionalCreate(2, FinalizarCompra_Conditional_4_Conditional_2_For_12_Conditional_2_Template, 1, 2, "img", 14)(3, FinalizarCompra_Conditional_4_Conditional_2_For_12_Conditional_3_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const linea_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(linea_r9.producto.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(linea_r9.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", linea_r9.variante.color.nombre, " \xB7 ", linea_r9.variante.talla.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", linea_r9.precio_unitario.toFixed(2));
  }
}
function FinalizarCompra_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h1");
    \u0275\u0275text(2, "Resumen de compra");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 37)(4, "span", 38);
    \u0275\u0275text(5, "Sucursal de retiro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 2);
    \u0275\u0275repeaterCreate(11, FinalizarCompra_Conditional_4_Conditional_2_For_12_Template, 11, 5, "article", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 41)(19, "button", 42);
    \u0275\u0275listener("click", function FinalizarCompra_Conditional_4_Conditional_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.volverAElegirSucursal());
    });
    \u0275\u0275text(20, " Volver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 43);
    \u0275\u0275listener("click", function FinalizarCompra_Conditional_4_Conditional_2_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.continuarAlPago());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.sucursalElegida().nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.sucursalElegida().direccion);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.resumen().items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Bs ", ctx_r0.resumen().total.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.confirmando());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.confirmando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirmando() ? "Procesando..." : "Continuar al pago", " ");
  }
}
function FinalizarCompra_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FinalizarCompra_Conditional_4_Conditional_0_Template, 15, 1);
    \u0275\u0275conditionalCreate(1, FinalizarCompra_Conditional_4_Conditional_1_Template, 18, 1);
    \u0275\u0275conditionalCreate(2, FinalizarCompra_Conditional_4_Conditional_2_Template, 23, 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.paso() === "resumen" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.paso() === "sucursal" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.paso() === "confirmacion" && ctx_r0.sucursalElegida() ? 2 : -1);
  }
}
var FinalizarCompra = class _FinalizarCompra {
  service = inject(CompraDigitalService);
  sucursalesPublicas = inject(SucursalPublicaService);
  toast = inject(ToastService);
  router = inject(Router);
  resolveMediaUrl = resolveMediaUrl;
  paso = signal(
    "resumen",
    ...ngDevMode ? [{ debugName: "paso" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  resumen = signal(
    null,
    ...ngDevMode ? [{ debugName: "resumen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ciudades = signal(
    [],
    ...ngDevMode ? [{ debugName: "ciudades" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ciudadSeleccionadaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "ciudadSeleccionadaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cargandoSucursales = signal(
    false,
    ...ngDevMode ? [{ debugName: "cargandoSucursales" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sucursalesConsultadas = signal(
    false,
    ...ngDevMode ? [{ debugName: "sucursalesConsultadas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sucursales = signal(
    [],
    ...ngDevMode ? [{ debugName: "sucursales" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sucursalElegida = signal(
    null,
    ...ngDevMode ? [{ debugName: "sucursalElegida" }] : (
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
  get haySucursalDisponible() {
    return this.sucursales().some((s) => s.disponible_para_compra);
  }
  ngOnInit() {
    this.cargarResumen();
    this.sucursalesPublicas.listCiudades().subscribe({
      next: (ciudades) => this.ciudades.set(ciudades),
      error: () => this.ciudades.set([])
    });
  }
  cargarResumen() {
    this.cargando.set(true);
    this.errorMessage.set(null);
    this.service.obtenerResumen().subscribe({
      next: (resumen) => {
        this.resumen.set(resumen);
        this.cargando.set(false);
      },
      error: (err) => {
        this.cargando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.errorMessage.set(detalle ?? "No hay prendas seleccionadas para continuar.");
      }
    });
  }
  irAElegirSucursal() {
    this.paso.set("sucursal");
  }
  volverAResumen() {
    this.paso.set("resumen");
  }
  seleccionarCiudad(ciudadId) {
    const id = Number(ciudadId);
    if (!id) {
      this.ciudadSeleccionadaId.set(null);
      this.sucursalesConsultadas.set(false);
      this.sucursales.set([]);
      return;
    }
    this.ciudadSeleccionadaId.set(id);
    this.cargandoSucursales.set(true);
    this.sucursalesConsultadas.set(false);
    this.service.listarSucursales(id).subscribe({
      next: (sucursales) => {
        this.sucursales.set(sucursales);
        this.cargandoSucursales.set(false);
        this.sucursalesConsultadas.set(true);
      },
      error: () => {
        this.sucursales.set([]);
        this.cargandoSucursales.set(false);
        this.sucursalesConsultadas.set(true);
        this.toast.error("No se pudo consultar las sucursales de esa ciudad. Int\xE9ntalo nuevamente.");
      }
    });
  }
  elegirSucursal(sucursal) {
    if (!sucursal.disponible_para_compra) {
      return;
    }
    this.sucursalElegida.set(sucursal);
    this.paso.set("confirmacion");
  }
  volverAElegirSucursal() {
    this.paso.set("sucursal");
  }
  continuarAlPago() {
    const sucursal = this.sucursalElegida();
    if (!sucursal || this.confirmando()) {
      return;
    }
    this.confirmando.set(true);
    this.service.confirmar({ sucursal_id: sucursal.id }).subscribe({
      next: (venta) => {
        this.confirmando.set(false);
        this.router.navigate(["/home/pago/iniciar"], { queryParams: { venta_id: venta.id } });
      },
      error: (err) => {
        this.confirmando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo continuar con la compra. Int\xE9ntalo nuevamente.");
        this.paso.set("sucursal");
      }
    });
  }
  static \u0275fac = function FinalizarCompra_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinalizarCompra)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinalizarCompra, selectors: [["app-finalizar-compra"]], decls: 5, vars: 1, consts: [[1, "container", "finalizar-compra-page"], [1, "finalizar-compra-ancho"], [1, "item-lista"], [1, "state-block", "state-block--error"], [1, "skeleton-item"], [1, "state-block__title"], ["routerLink", "/carrito", 1, "btn", "btn--primary"], [1, "page-header"], [1, "item-linea"], [1, "compra-resumen"], [1, "compra-resumen__label"], [1, "compra-resumen__valor"], ["type", "button", 1, "btn", "btn--primary", "paso-siguiente", 3, "click"], [1, "item-linea__imagen"], ["loading", "lazy", 3, "src", "alt"], [1, "item-linea__placeholder"], [1, "item-linea__info"], [1, "item-linea__nombre"], [1, "item-linea__variante"], [1, "item-linea__precios"], [1, "precio-anterior"], [1, "item-linea__precio"], [1, "precio-descuento"], ["name", "products", 2, "width", "24px", "height", "24px"], [1, "campo-ciudad"], [1, "campo-ciudad__label"], [1, "campo-ciudad__select", 3, "change"], ["value", ""], [3, "value"], [1, "sucursal-lista"], ["type", "button", 1, "btn", "btn--ghost", "paso-anterior", 3, "click"], [1, "skeleton-item", "skeleton-item--sm"], ["type", "button", 1, "sucursal-card", 3, "sucursal-card--no-disponible", "disabled"], ["type", "button", 1, "sucursal-card", 3, "click", "disabled"], [1, "sucursal-card__nombre"], [1, "sucursal-card__direccion"], [1, "sucursal-card__aviso"], [1, "sucursal-elegida"], [1, "sucursal-elegida__label"], [1, "sucursal-elegida__nombre"], [1, "sucursal-elegida__direccion"], [1, "acciones-confirmacion"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"]], template: function FinalizarCompra_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, FinalizarCompra_Conditional_2_Template, 3, 1, "div", 2)(3, FinalizarCompra_Conditional_3_Template, 7, 1, "div", 3)(4, FinalizarCompra_Conditional_4_Template, 3, 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cargando() ? 2 : ctx.errorMessage() ? 3 : 4);
    }
  }, dependencies: [Icon, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.finalizar-compra-page[_ngcontent-%COMP%] {\n  padding-top: 28px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n}\n.finalizar-compra-ancho[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 760px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.item-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.item-linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.item-linea__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.item-linea__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-linea__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.item-linea__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.item-linea__nombre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.item-linea__variante[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.item-linea__precio[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  white-space: nowrap;\n}\n.item-linea__precios[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.precio-anterior[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: line-through;\n  white-space: nowrap;\n}\n.precio-descuento[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.compra-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 20px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.compra-resumen__label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.compra-resumen__valor[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.paso-siguiente[_ngcontent-%COMP%], \n.paso-anterior[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  min-width: 240px;\n}\n.campo-ciudad[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.campo-ciudad__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.campo-ciudad__select[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 14px;\n  color: var(--%NS%color-text);\n}\n.campo-ciudad__select[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.sucursal-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sucursal-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  padding: 14px 18px;\n  background: var(--%NS%color-white);\n  border: 1.5px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  text-align: left;\n  transition: border-color var(--%NS%transition-fast), box-shadow var(--%NS%transition-fast);\n}\n.sucursal-card[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--%NS%color-primary);\n  box-shadow: var(--%NS%shadow-medium);\n}\n.sucursal-card--no-disponible[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.sucursal-card__nombre[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.sucursal-card__direccion[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.sucursal-card__aviso[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-danger);\n}\n.sucursal-elegida[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 14px 18px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.sucursal-elegida__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.sucursal-elegida__nombre[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.sucursal-elegida__direccion[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.acciones-confirmacion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.acciones-confirmacion[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 180px;\n}\n.skeleton-item[_ngcontent-%COMP%] {\n  height: 88px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n.skeleton-item--sm[_ngcontent-%COMP%] {\n  height: 64px;\n}\n@media (max-width: 560px) {\n  .finalizar-compra-page[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n  .item-linea[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .paso-siguiente[_ngcontent-%COMP%], \n   .paso-anterior[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .acciones-confirmacion[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .acciones-confirmacion[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=finalizar-compra-XOB2EMYB.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinalizarCompra, [{
    type: Component,
    args: [{ selector: "app-finalizar-compra", imports: [Icon, RouterLink], template: `<div class="container finalizar-compra-page">\r
  <div class="finalizar-compra-ancho">\r
    @if (cargando()) {\r
      <div class="item-lista">\r
        @for (i of [1, 2, 3]; track i) {\r
          <div class="skeleton-item"></div>\r
        }\r
      </div>\r
    } @else if (errorMessage()) {\r
      <div class="state-block state-block--error">\r
        <span class="state-block__title">No se pudo continuar con la compra</span>\r
        <span>{{ errorMessage() }}</span>\r
        <a routerLink="/carrito" class="btn btn--primary">Volver al carrito</a>\r
      </div>\r
    } @else {\r
      <!-- Paso 1: FINALIZAR COMPRA -- prendas seleccionadas -->\r
      @if (paso() === 'resumen') {\r
        <div class="page-header">\r
          <h1>Finalizar compra</h1>\r
          <p>Revisa las prendas que vas a comprar.</p>\r
        </div>\r
\r
        <div class="item-lista">\r
          @for (linea of resumen()!.items; track linea.item_id) {\r
            <article class="item-linea">\r
              <div class="item-linea__imagen">\r
                @if (linea.producto.imagen_principal_url) {\r
                  <img\r
                    [src]="resolveMediaUrl(linea.producto.imagen_principal_url)"\r
                    [alt]="linea.producto.nombre"\r
                    loading="lazy"\r
                  />\r
                } @else {\r
                  <div class="item-linea__placeholder">\r
                    <app-icon name="products" style="width: 24px; height: 24px" />\r
                  </div>\r
                }\r
              </div>\r
              <div class="item-linea__info">\r
                <span class="item-linea__nombre">{{ linea.producto.nombre }}</span>\r
                <span class="item-linea__variante">{{ linea.variante.color.nombre }} \xB7 {{ linea.variante.talla.nombre }}</span>\r
              </div>\r
              <div class="item-linea__precios">\r
                @if (linea.en_promocion) {\r
                  <span class="precio-anterior">Bs {{ linea.precio_base.toFixed(2) }}</span>\r
                }\r
                <span class="item-linea__precio">Bs {{ linea.precio_unitario.toFixed(2) }}</span>\r
                @if (linea.en_promocion) {\r
                  <span class="precio-descuento">-{{ linea.porcentaje_descuento }}%</span>\r
                }\r
              </div>\r
            </article>\r
          }\r
        </div>\r
\r
        <div class="compra-resumen">\r
          <span class="compra-resumen__label">Subtotal</span>\r
          <span class="compra-resumen__valor">Bs {{ resumen()!.total.toFixed(2) }}</span>\r
        </div>\r
\r
        <button type="button" class="btn btn--primary paso-siguiente" (click)="irAElegirSucursal()">\r
          Elegir sucursal de retiro\r
        </button>\r
      }\r
\r
      <!-- Paso 2: Ciudad -> Sucursal de retiro -->\r
      @if (paso() === 'sucursal') {\r
        <div class="page-header">\r
          <h1>Sucursal de retiro</h1>\r
          <p>Elige la ciudad y la sucursal donde retirar\xE1s tu compra.</p>\r
        </div>\r
\r
        <label class="campo-ciudad">\r
          <span class="campo-ciudad__label">Ciudad</span>\r
          <select class="campo-ciudad__select" (change)="seleccionarCiudad($any($event.target).value)">\r
            <option value="">Selecciona una ciudad</option>\r
            @for (ciudad of ciudades(); track ciudad.id) {\r
              <option [value]="ciudad.id">{{ ciudad.nombre }}</option>\r
            }\r
          </select>\r
        </label>\r
\r
        @if (cargandoSucursales()) {\r
          <div class="item-lista">\r
            @for (i of [1, 2]; track i) {\r
              <div class="skeleton-item skeleton-item--sm"></div>\r
            }\r
          </div>\r
        } @else if (sucursalesConsultadas() && !haySucursalDisponible) {\r
          <div class="state-block state-block--error">\r
            <span class="state-block__title">Sin disponibilidad</span>\r
            <span>No existe una sucursal con disponibilidad para todas las prendas seleccionadas.</span>\r
            <a routerLink="/carrito" class="btn btn--primary">Volver al carrito</a>\r
          </div>\r
        } @else if (sucursalesConsultadas()) {\r
          <div class="sucursal-lista">\r
            @for (sucursal of sucursales(); track sucursal.id) {\r
              <button\r
                type="button"\r
                class="sucursal-card"\r
                [class.sucursal-card--no-disponible]="!sucursal.disponible_para_compra"\r
                [disabled]="!sucursal.disponible_para_compra"\r
                (click)="elegirSucursal(sucursal)"\r
              >\r
                <span class="sucursal-card__nombre">{{ sucursal.nombre }}</span>\r
                <span class="sucursal-card__direccion">{{ sucursal.direccion }}</span>\r
                @if (!sucursal.disponible_para_compra) {\r
                  <span class="sucursal-card__aviso">No disponible para todas las prendas</span>\r
                }\r
              </button>\r
            }\r
          </div>\r
        }\r
\r
        <button type="button" class="btn btn--ghost paso-anterior" (click)="volverAResumen()">Volver</button>\r
      }\r
\r
      <!-- Paso 3: RESUMEN DE COMPRA -->\r
      @if (paso() === 'confirmacion' && sucursalElegida()) {\r
        <div class="page-header">\r
          <h1>Resumen de compra</h1>\r
        </div>\r
\r
        <div class="sucursal-elegida">\r
          <span class="sucursal-elegida__label">Sucursal de retiro</span>\r
          <span class="sucursal-elegida__nombre">{{ sucursalElegida()!.nombre }}</span>\r
          <span class="sucursal-elegida__direccion">{{ sucursalElegida()!.direccion }}</span>\r
        </div>\r
\r
        <div class="item-lista">\r
          @for (linea of resumen()!.items; track linea.item_id) {\r
            <article class="item-linea">\r
              <div class="item-linea__imagen">\r
                @if (linea.producto.imagen_principal_url) {\r
                  <img\r
                    [src]="resolveMediaUrl(linea.producto.imagen_principal_url)"\r
                    [alt]="linea.producto.nombre"\r
                    loading="lazy"\r
                  />\r
                } @else {\r
                  <div class="item-linea__placeholder">\r
                    <app-icon name="products" style="width: 24px; height: 24px" />\r
                  </div>\r
                }\r
              </div>\r
              <div class="item-linea__info">\r
                <span class="item-linea__nombre">{{ linea.producto.nombre }}</span>\r
                <span class="item-linea__variante">{{ linea.variante.color.nombre }} \xB7 {{ linea.variante.talla.nombre }}</span>\r
              </div>\r
              <span class="item-linea__precio">Bs {{ linea.precio_unitario.toFixed(2) }}</span>\r
            </article>\r
          }\r
        </div>\r
\r
        <div class="compra-resumen">\r
          <span class="compra-resumen__label">Total</span>\r
          <span class="compra-resumen__valor">Bs {{ resumen()!.total.toFixed(2) }}</span>\r
        </div>\r
\r
        <div class="acciones-confirmacion">\r
          <button type="button" class="btn btn--ghost" [disabled]="confirmando()" (click)="volverAElegirSucursal()">\r
            Volver\r
          </button>\r
          <button type="button" class="btn btn--primary" [disabled]="confirmando()" (click)="continuarAlPago()">\r
            {{ confirmando() ? 'Procesando...' : 'Continuar al pago' }}\r
          </button>\r
        </div>\r
      }\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/compra-digital/finalizar-compra/finalizar-compra.scss */\n:host {\n  display: block;\n}\n.finalizar-compra-page {\n  padding-top: 28px;\n  padding-bottom: 56px;\n  display: flex;\n  justify-content: center;\n}\n.finalizar-compra-ancho {\n  width: 100%;\n  max-width: 760px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.page-header {\n  text-align: center;\n}\n.page-header h1 {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13.5px;\n  color: var(--color-text-secondary);\n}\n.item-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.item-linea {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.item-linea__imagen {\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.item-linea__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-linea__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.item-linea__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.item-linea__nombre {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.item-linea__variante {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.item-linea__precio {\n  flex-shrink: 0;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.item-linea__precios {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.precio-anterior {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  text-decoration: line-through;\n  white-space: nowrap;\n}\n.precio-descuento {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n  font-size: 10.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.compra-resumen {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 20px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.compra-resumen__label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.compra-resumen__valor {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.paso-siguiente,\n.paso-anterior {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  min-width: 240px;\n}\n.campo-ciudad {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.campo-ciudad__label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.campo-ciudad__select {\n  padding: 11px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 14px;\n  color: var(--color-text);\n}\n.campo-ciudad__select:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.sucursal-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sucursal-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  padding: 14px 18px;\n  background: var(--color-white);\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  text-align: left;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.sucursal-card:hover:not(:disabled) {\n  border-color: var(--color-primary);\n  box-shadow: var(--shadow-medium);\n}\n.sucursal-card--no-disponible {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.sucursal-card__nombre {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.sucursal-card__direccion {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.sucursal-card__aviso {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-danger);\n}\n.sucursal-elegida {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 14px 18px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.sucursal-elegida__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.sucursal-elegida__nombre {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.sucursal-elegida__direccion {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.acciones-confirmacion {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.acciones-confirmacion .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 180px;\n}\n.skeleton-item {\n  height: 88px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n.skeleton-item--sm {\n  height: 64px;\n}\n@media (max-width: 560px) {\n  .finalizar-compra-page {\n    padding-top: 20px;\n  }\n  .item-linea {\n    padding: 12px 14px;\n  }\n  .paso-siguiente,\n  .paso-anterior {\n    width: 100%;\n    min-width: 0;\n  }\n  .acciones-confirmacion {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n  .acciones-confirmacion .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=finalizar-compra-XOB2EMYB.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinalizarCompra, { className: "FinalizarCompra", filePath: "src/app/features/compra-digital/finalizar-compra/finalizar-compra.ts", lineNumber: 52 });
})();
export {
  FinalizarCompra
};
//# debugId=bf519c6d-0003-5e64-bfca-8f5b92a79318
//# sourceMappingURL=chunk-2L56EDMD.js.map
