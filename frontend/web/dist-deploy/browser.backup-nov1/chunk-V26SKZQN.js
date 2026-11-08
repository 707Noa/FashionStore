import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-OB3O2VC6.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  ActivatedRoute
} from "./chunk-OXXL2I3V.js";
import {
  DatePipe
} from "./chunk-BQM6CYO4.js";
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
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-PNHCNXB7.js";

// src/app/features/encargado/movimientos-inventario/movimientos-inventario.service.ts
var MovimientosInventarioService = class _MovimientosInventarioService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/movimientos-inventario/panel`;
  buscarProductos(search) {
    let params = new HttpParams();
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(`${this.baseUrl}/productos`, { params });
  }
  registrar(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  historial(limit = 50) {
    const params = new HttpParams().set("limit", limit);
    return this.http.get(`${this.baseUrl}/historial`, { params });
  }
  static \u0275fac = function MovimientosInventarioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovimientosInventarioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MovimientosInventarioService, factory: _MovimientosInventarioService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovimientosInventarioService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/encargado/movimientos-inventario/movimientos-inventario.ts
var _forTrack0 = ($index, $item) => $item.id;
function MovimientosInventario_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 14);
    \u0275\u0275element(2, "app-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Movimiento registrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18)(9, "span", 19);
    \u0275\u0275text(10, "Stock anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18)(14, "span", 19);
    \u0275\u0275text(15, "Movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "span", 19);
    \u0275\u0275text(20, "Stock actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 21);
    \u0275\u0275listener("click", function MovimientosInventario_Conditional_6_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registrarOtro());
    });
    \u0275\u0275text(24, " Registrar otro movimiento ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const out_r3 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", out_r3.producto.nombre, " \xB7 ", out_r3.variante.color.nombre, " / ", out_r3.variante.talla.nombre, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(out_r3.stock_anterior);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("confirmacion__dato-valor--positivo", out_r3.tipo === "AJUSTE_POSITIVO")("confirmacion__dato-valor--negativo", out_r3.tipo === "AJUSTE_NEGATIVO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", out_r3.tipo === "AJUSTE_POSITIVO" ? "+" : "-", "", out_r3.cantidad, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(out_r3.stock_resultante);
  }
}
function MovimientosInventario_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 22)(2, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function MovimientosInventario_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function MovimientosInventario_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargarProductos());
    });
    \u0275\u0275text(4, " Reintentar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorProductos());
  }
}
function MovimientosInventario_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 23);
    \u0275\u0275text(2, "Sin productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Prueba ajustando la b\xFAsqueda.");
    \u0275\u0275elementEnd()();
  }
}
function MovimientosInventario_Conditional_16_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const producto_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(producto_r6.imagen_principal_url), \u0275\u0275sanitizeUrl);
  }
}
function MovimientosInventario_Conditional_16_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "app-icon", 30);
    \u0275\u0275elementEnd();
  }
}
function MovimientosInventario_Conditional_16_For_2_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function MovimientosInventario_Conditional_16_For_2_Conditional_7_For_5_Template_button_click_0_listener() {
      const variante_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.seleccionarVariante(variante_r8));
    });
    \u0275\u0275elementStart(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const variante_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("is-active", ctx_r1.varianteSeleccionada()?.id === variante_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", variante_r8.color.nombre, " / ", variante_r8.talla.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Stock actual: ", variante_r8.cantidad);
  }
}
function MovimientosInventario_Conditional_16_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h3", 31);
    \u0275\u0275text(2, "Seleccionar variante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275repeaterCreate(4, MovimientosInventario_Conditional_16_For_2_Conditional_7_For_5_Template, 5, 5, "button", 33, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(producto_r6.variantes);
  }
}
function MovimientosInventario_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function MovimientosInventario_Conditional_16_For_2_Template_button_click_0_listener() {
      const producto_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarProducto(producto_r6));
    });
    \u0275\u0275conditionalCreate(1, MovimientosInventario_Conditional_16_For_2_Conditional_1_Template, 1, 1, "img", 25)(2, MovimientosInventario_Conditional_16_For_2_Conditional_2_Template, 2, 0, "div", 26);
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, MovimientosInventario_Conditional_16_For_2_Conditional_7_Template, 6, 0, "div", 29);
  }
  if (rf & 2) {
    const producto_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-active", ctx_r1.productoSeleccionado()?.id === producto_r6.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r6.imagen_principal_url ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r6.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", producto_r6.variantes.length, " variantes");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.productoSeleccionado()?.id === producto_r6.id ? 7 : -1);
  }
}
function MovimientosInventario_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, MovimientosInventario_Conditional_16_For_2_Template, 8, 6, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.productos());
  }
}
function MovimientosInventario_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 4)(1, "h2", 5);
    \u0275\u0275text(2, "Registrar movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37)(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39)(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 42)(12, "label", 43)(13, "span", 44);
    \u0275\u0275text(14, "Tipo de movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 45);
    \u0275\u0275listener("ngModelChange", function MovimientosInventario_Conditional_17_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTipoChange($event));
    });
    \u0275\u0275elementStart(16, "option", 46);
    \u0275\u0275text(17, "Ajuste positivo (+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 47);
    \u0275\u0275text(19, "Ajuste negativo (\u2212)");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 48)(21, "span", 44);
    \u0275\u0275text(22, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 49);
    \u0275\u0275listener("ngModelChange", function MovimientosInventario_Conditional_17_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCantidadChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 50)(25, "span", 44);
    \u0275\u0275text(26, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 51);
    \u0275\u0275listener("ngModelChange", function MovimientosInventario_Conditional_17_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMotivoChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 52)(29, "button", 53);
    \u0275\u0275listener("click", function MovimientosInventario_Conditional_17_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmar());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const variante_r10 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.productoSeleccionado()?.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", variante_r10.color.nombre, " / ", variante_r10.talla.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("producto-seleccionado__stock--cero", variante_r10.cantidad === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Stock actual: ", variante_r10.cantidad, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.tipo());
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.cantidad() || null);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.motivo());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.puedeConfirmar);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Registrando..." : "Registrar movimiento", " ");
  }
}
function MovimientosInventario_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 22)(2, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function MovimientosInventario_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 23);
    \u0275\u0275text(2, "Sin movimientos todav\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Los ajustes que registres aparecer\xE1n aqu\xED.");
    \u0275\u0275elementEnd()();
  }
}
function MovimientosInventario_Conditional_23_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11, "Variante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 56);
    \u0275\u0275text(15, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 57);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 56);
    \u0275\u0275text(19, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 56);
    \u0275\u0275text(23, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 58);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 56);
    \u0275\u0275text(27, "Stock resultante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const movimiento_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, movimiento_r11.fecha_hora, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(movimiento_r11.producto.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", movimiento_r11.variante.color.nombre, " / ", movimiento_r11.variante.talla.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--positivo", movimiento_r11.tipo === "AJUSTE_POSITIVO")("badge--negativo", movimiento_r11.tipo === "AJUSTE_NEGATIVO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", movimiento_r11.tipo === "AJUSTE_POSITIVO" ? "Positivo" : "Negativo", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", movimiento_r11.tipo === "AJUSTE_POSITIVO" ? "+" : "-", "", movimiento_r11.cantidad);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(movimiento_r11.motivo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(movimiento_r11.stock_resultante);
  }
}
function MovimientosInventario_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 54)(2, "span");
    \u0275\u0275text(3, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Variante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Stock resultante");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(16, MovimientosInventario_Conditional_23_For_17_Template, 30, 16, "div", 55, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.historial());
  }
}
var MovimientosInventario = class _MovimientosInventario {
  service = inject(MovimientosInventarioService);
  toast = inject(ToastService);
  route = inject(ActivatedRoute);
  resolveMediaUrl = resolveMediaUrl;
  productos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingProductos = signal(
    true,
    ...ngDevMode ? [{ debugName: "loadingProductos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorProductos = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorProductos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  busqueda = signal(
    "",
    ...ngDevMode ? [{ debugName: "busqueda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productoSeleccionado = signal(
    null,
    ...ngDevMode ? [{ debugName: "productoSeleccionado" }] : (
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
  tipo = signal(
    "AJUSTE_POSITIVO",
    ...ngDevMode ? [{ debugName: "tipo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cantidad = signal(
    0,
    ...ngDevMode ? [{ debugName: "cantidad" }] : (
      /* istanbul ignore next */
      []
    )
  );
  motivo = signal(
    "",
    ...ngDevMode ? [{ debugName: "motivo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resultado = signal(
    null,
    ...ngDevMode ? [{ debugName: "resultado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  historial = signal(
    [],
    ...ngDevMode ? [{ debugName: "historial" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingHistorial = signal(
    true,
    ...ngDevMode ? [{ debugName: "loadingHistorial" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchDebounce;
  productoIdPreseleccionado = null;
  varianteIdPreseleccionada = null;
  constructor() {
    const productoParam = this.route.snapshot.queryParamMap.get("productoId");
    if (productoParam) {
      this.productoIdPreseleccionado = Number(productoParam);
    }
    const varianteParam = this.route.snapshot.queryParamMap.get("varianteId");
    if (varianteParam) {
      this.varianteIdPreseleccionada = Number(varianteParam);
    }
    this.cargarProductos();
    this.cargarHistorial();
  }
  cargarProductos() {
    this.loadingProductos.set(true);
    this.errorProductos.set(null);
    this.service.buscarProductos(this.busqueda() || void 0).subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.loadingProductos.set(false);
        this.aplicarPreseleccion();
      },
      error: () => {
        this.loadingProductos.set(false);
        this.productos.set([]);
        this.errorProductos.set("No se pudo conectar con el servidor. Int\xE9ntalo nuevamente.");
      }
    });
  }
  aplicarPreseleccion() {
    if (this.productoIdPreseleccionado == null) {
      return;
    }
    const producto = this.productos().find((p) => p.id === this.productoIdPreseleccionado);
    if (!producto) {
      return;
    }
    this.seleccionarProducto(producto);
    if (this.varianteIdPreseleccionada != null) {
      const variante = producto.variantes.find((v) => v.id === this.varianteIdPreseleccionada);
      if (variante) {
        this.seleccionarVariante(variante);
      }
    }
    this.productoIdPreseleccionado = null;
    this.varianteIdPreseleccionada = null;
  }
  cargarHistorial() {
    this.loadingHistorial.set(true);
    this.service.historial().subscribe({
      next: (movimientos) => {
        this.historial.set(movimientos);
        this.loadingHistorial.set(false);
      },
      error: () => {
        this.loadingHistorial.set(false);
      }
    });
  }
  onBusquedaChange(value) {
    this.busqueda.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.cargarProductos(), 350);
  }
  seleccionarProducto(producto) {
    this.productoSeleccionado.set(producto);
    this.varianteSeleccionada.set(null);
    this.resultado.set(null);
  }
  seleccionarVariante(variante) {
    this.varianteSeleccionada.set(variante);
    this.resultado.set(null);
  }
  onTipoChange(tipo) {
    this.tipo.set(tipo);
  }
  onCantidadChange(valor) {
    const numero = Math.trunc(Number(valor));
    this.cantidad.set(Number.isFinite(numero) && numero > 0 ? numero : 0);
  }
  onMotivoChange(value) {
    this.motivo.set(value);
  }
  get puedeConfirmar() {
    return this.varianteSeleccionada() != null && this.cantidad() > 0 && this.motivo().trim().length >= 3 && !this.submitting();
  }
  confirmar() {
    const variante = this.varianteSeleccionada();
    if (!variante || !this.puedeConfirmar) {
      return;
    }
    this.submitting.set(true);
    this.service.registrar({
      producto_variante_id: variante.id,
      tipo: this.tipo(),
      cantidad: this.cantidad(),
      motivo: this.motivo().trim()
    }).subscribe({
      next: (out) => {
        this.submitting.set(false);
        this.resultado.set(out);
        this.toast.success("Movimiento registrado correctamente.");
        this.productos.update((lista) => lista.map((p) => p.id !== out.producto.id ? p : __spreadProps(__spreadValues({}, p), {
          variantes: p.variantes.map((v) => v.id === out.variante.id ? __spreadProps(__spreadValues({}, v), { cantidad: out.stock_resultante }) : v)
        })));
        this.varianteSeleccionada.update((v) => v && v.id === out.variante.id ? __spreadProps(__spreadValues({}, v), { cantidad: out.stock_resultante }) : v);
        this.cantidad.set(0);
        this.motivo.set("");
        this.cargarHistorial();
      },
      error: (err) => {
        this.submitting.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo registrar el movimiento. Intenta nuevamente.");
      }
    });
  }
  registrarOtro() {
    this.resultado.set(null);
    this.productoSeleccionado.set(null);
    this.varianteSeleccionada.set(null);
    this.tipo.set("AJUSTE_POSITIVO");
    this.cantidad.set(0);
    this.motivo.set("");
  }
  static \u0275fac = function MovimientosInventario_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovimientosInventario)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovimientosInventario, selectors: [["app-movimientos-inventario"]], decls: 24, vars: 5, consts: [[1, "movimientos-page"], [1, "page-header"], [1, "page-header__subtitulo"], [1, "admin-card", "confirmacion"], [1, "admin-card", "seccion"], [1, "seccion__titulo"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar producto...", 3, "ngModelChange", "ngModel"], [1, "skeleton-list"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "lista-productos"], [1, "historial-tabla"], [1, "confirmacion__icono"], ["name", "edit", 2, "width", "22px", "height", "22px"], [1, "confirmacion__meta"], [1, "confirmacion__resumen"], [1, "confirmacion__dato"], [1, "confirmacion__dato-label"], [1, "confirmacion__dato-valor"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "producto-row", 3, "click"], ["alt", "", 1, "producto-row__imagen", 3, "src"], [1, "producto-row__imagen", "producto-row__imagen--placeholder"], [1, "producto-row__nombre"], [1, "contador"], [1, "variantes-panel"], ["name", "products", 2, "width", "14px", "height", "14px"], [1, "variantes-panel__titulo"], [1, "variante-list"], ["type", "button", 1, "variante-row", 3, "is-active"], ["type", "button", 1, "variante-row", 3, "click"], [1, "variante-row__nombre"], [1, "variante-row__stock"], [1, "producto-seleccionado"], [1, "producto-seleccionado__nombre"], [1, "producto-seleccionado__fila"], [1, "producto-seleccionado__variante"], [1, "producto-seleccionado__stock"], [1, "campos-fila"], [1, "field", "field--tipo"], [1, "field__label"], [1, "tipo-select", 3, "ngModelChange", "ngModel"], ["value", "AJUSTE_POSITIVO"], ["value", "AJUSTE_NEGATIVO"], [1, "field", "field--cantidad"], ["type", "number", "min", "1", 1, "cantidad-input", 3, "ngModelChange", "ngModel"], [1, "field", "field--motivo"], ["rows", "2", "placeholder", "Ej. Prenda da\xF1ada detectada en revisi\xF3n de anaquel", 3, "ngModelChange", "ngModel"], [1, "acciones-form"], ["type", "button", 1, "btn", "btn--primary", "confirmar-btn", 3, "click", "disabled"], [1, "historial-fila", "historial-fila--header"], [1, "historial-fila"], [1, "historial-fila__label"], [1, "badge"], [1, "historial-fila__motivo"]], template: function MovimientosInventario_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Movimientos de inventario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Registra ajustes manuales y justificados de stock: unidades da\xF1adas, p\xE9rdidas o correcciones de conteo f\xEDsico. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, MovimientosInventario_Conditional_6_Template, 25, 11, "section", 3);
      \u0275\u0275elementStart(7, "section", 4)(8, "h2", 5);
      \u0275\u0275text(9, "Buscar producto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "label", 6);
      \u0275\u0275element(11, "app-icon", 7);
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275listener("ngModelChange", function MovimientosInventario_Template_input_ngModelChange_12_listener($event) {
        return ctx.onBusquedaChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, MovimientosInventario_Conditional_13_Template, 3, 0, "div", 9)(14, MovimientosInventario_Conditional_14_Template, 5, 1, "div", 10)(15, MovimientosInventario_Conditional_15_Template, 5, 0, "div", 11)(16, MovimientosInventario_Conditional_16_Template, 3, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, MovimientosInventario_Conditional_17_Template, 31, 11, "section", 4);
      \u0275\u0275elementStart(18, "section", 4)(19, "h2", 5);
      \u0275\u0275text(20, "Historial de tu sucursal");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, MovimientosInventario_Conditional_21_Template, 3, 0, "div", 9)(22, MovimientosInventario_Conditional_22_Template, 5, 0, "div", 11)(23, MovimientosInventario_Conditional_23_Template, 18, 0, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_4_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional((tmp_0_0 = ctx.resultado()) ? 6 : -1, tmp_0_0);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.busqueda());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingProductos() ? 13 : ctx.errorProductos() ? 14 : ctx.productos().length === 0 ? 15 : 16);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_4_0 = ctx.varianteSeleccionada()) ? 17 : -1, tmp_4_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loadingHistorial() ? 21 : ctx.historial().length === 0 ? 22 : 23);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, Icon, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.movimientos-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 920px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header__subtitulo[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n  max-width: 640px;\n}\n.seccion[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n}\n.seccion__titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  line-height: 1.2;\n}\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.skeleton-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.contador[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: var(--%NS%color-card-bg);\n  color: var(--%NS%color-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n}\n.lista-productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.producto-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-white);\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.12s ease;\n}\n.producto-row[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.producto-row.is-active[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-border);\n  background: color-mix(in srgb, var(--%NS%color-primary) 5%, var(--%NS%color-white));\n  box-shadow: inset 3px 0 0 var(--%NS%color-primary);\n}\n.producto-row__imagen[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--%NS%color-card-bg);\n}\n.producto-row__imagen--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-row__nombre[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.variantes-panel[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px 20px;\n  margin: 2px 0 4px;\n  border-left: 2px solid var(--%NS%color-border);\n}\n.variantes-panel__titulo[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text-secondary);\n}\n.variante-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.variante-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-white);\n  cursor: pointer;\n  text-align: left;\n  flex-wrap: wrap;\n  transition: background-color 0.12s ease;\n}\n.variante-row[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.variante-row.is-active[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-border);\n  background: color-mix(in srgb, var(--%NS%color-primary) 7%, var(--%NS%color-white));\n  box-shadow: inset 3px 0 0 var(--%NS%color-primary);\n}\n.variante-row__nombre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.variante-row__stock[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-seleccionado[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  margin-bottom: 18px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-bg);\n}\n.producto-seleccionado__nombre[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.producto-seleccionado__fila[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 4px;\n  flex-wrap: wrap;\n}\n.producto-seleccionado__variante[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-seleccionado__stock[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  white-space: nowrap;\n}\n.producto-seleccionado__stock--cero[_ngcontent-%COMP%] {\n  color: var(--%NS%color-danger);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.tipo-select[_ngcontent-%COMP%], \n.cantidad-input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  background: var(--%NS%color-white);\n  outline: none;\n  font-family: inherit;\n}\n.tipo-select[_ngcontent-%COMP%]:focus, \n.cantidad-input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%color-primary);\n}\n.tipo-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cantidad-input[_ngcontent-%COMP%] {\n  text-align: left;\n  -moz-appearance: textfield;\n}\n.cantidad-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.cantidad-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n.campos-fila[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.field--tipo[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.field--cantidad[_ngcontent-%COMP%] {\n  flex: 0 0 140px;\n}\n.acciones-form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.confirmar-btn[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.confirmacion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 8px;\n  padding: 28px 20px;\n}\n.confirmacion__icono[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--%NS%color-card-bg);\n  color: var(--%NS%color-primary);\n  margin-bottom: 4px;\n}\n.confirmacion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.confirmacion__meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.confirmacion__resumen[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin: 14px 0 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.confirmacion__dato[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: center;\n}\n.confirmacion__dato-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.confirmacion__dato-valor[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.confirmacion__dato-valor--positivo[_ngcontent-%COMP%] {\n  color: var(--%NS%color-success-text);\n}\n.confirmacion__dato-valor--negativo[_ngcontent-%COMP%] {\n  color: var(--%NS%color-danger);\n}\n.badge--positivo[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.badge--negativo[_ngcontent-%COMP%] {\n  background: var(--%NS%color-danger-bg);\n  color: var(--%NS%color-danger);\n}\n.historial-tabla[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-x: auto;\n}\n.historial-fila[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(90px, 1fr) minmax(110px, 1.3fr) minmax(90px, 1fr) minmax(78px, 0.7fr) minmax(60px, 0.6fr) minmax(150px, 1.8fr) minmax(80px, 0.9fr);\n  gap: 12px;\n  align-items: center;\n  padding: 11px 14px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  font-size: 12.5px;\n  color: var(--%NS%color-text);\n}\n.historial-fila--header[_ngcontent-%COMP%] {\n  background: var(--%NS%color-card-bg);\n  font-weight: 700;\n  color: var(--%NS%color-text-secondary);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  padding: 9px 14px;\n}\n.historial-fila__motivo[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  line-height: 1.35;\n}\n.historial-fila__label[_ngcontent-%COMP%] {\n  display: none;\n  font-weight: 700;\n  color: var(--%NS%color-text-secondary);\n  font-size: 11px;\n}\n@media (max-width: 900px) {\n  .historial-fila[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(80px, 1fr) minmax(100px, 1.2fr) minmax(80px, 1fr) minmax(70px, 0.7fr) minmax(50px, 0.6fr) minmax(130px, 1.6fr) minmax(70px, 0.8fr);\n  }\n}\n@media (max-width: 640px) {\n  .movimientos-page[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .campos-fila[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .field--cantidad[_ngcontent-%COMP%] {\n    flex-basis: auto;\n  }\n  .acciones-form[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .confirmar-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .historial-fila--header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .historial-fila[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    row-gap: 8px;\n    padding: 12px 14px;\n  }\n  .historial-fila__label[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 560px) {\n  .search-input[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .producto-seleccionado__fila[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 2px;\n  }\n  .variante-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .confirmacion__resumen[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=movimientos-inventario-Y4BQSRBS.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovimientosInventario, [{
    type: Component,
    args: [{ selector: "app-movimientos-inventario", imports: [FormsModule, Icon, DatePipe], template: `<div class="movimientos-page">\r
  <div class="page-header">\r
    <h1>Movimientos de inventario</h1>\r
    <p class="page-header__subtitulo">\r
      Registra ajustes manuales y justificados de stock: unidades da\xF1adas, p\xE9rdidas o\r
      correcciones de conteo f\xEDsico.\r
    </p>\r
  </div>\r
\r
  @if (resultado(); as out) {\r
    <section class="admin-card confirmacion">\r
      <div class="confirmacion__icono">\r
        <app-icon name="edit" style="width: 22px; height: 22px" />\r
      </div>\r
      <h2>Movimiento registrado</h2>\r
      <p class="confirmacion__meta">\r
        {{ out.producto.nombre }} \xB7 {{ out.variante.color.nombre }} / {{ out.variante.talla.nombre }}\r
      </p>\r
\r
      <div class="confirmacion__resumen">\r
        <div class="confirmacion__dato">\r
          <span class="confirmacion__dato-label">Stock anterior</span>\r
          <span class="confirmacion__dato-valor">{{ out.stock_anterior }}</span>\r
        </div>\r
        <div class="confirmacion__dato">\r
          <span class="confirmacion__dato-label">Movimiento</span>\r
          <span\r
            class="confirmacion__dato-valor"\r
            [class.confirmacion__dato-valor--positivo]="out.tipo === 'AJUSTE_POSITIVO'"\r
            [class.confirmacion__dato-valor--negativo]="out.tipo === 'AJUSTE_NEGATIVO'"\r
          >\r
            {{ out.tipo === 'AJUSTE_POSITIVO' ? '+' : '-' }}{{ out.cantidad }}\r
          </span>\r
        </div>\r
        <div class="confirmacion__dato">\r
          <span class="confirmacion__dato-label">Stock actual</span>\r
          <span class="confirmacion__dato-valor">{{ out.stock_resultante }}</span>\r
        </div>\r
      </div>\r
\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="registrarOtro()">\r
        Registrar otro movimiento\r
      </button>\r
    </section>\r
  }\r
\r
  <section class="admin-card seccion">\r
    <h2 class="seccion__titulo">Buscar producto</h2>\r
\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar producto..."\r
        [ngModel]="busqueda()"\r
        (ngModelChange)="onBusquedaChange($event)"\r
      />\r
    </label>\r
\r
    @if (loadingProductos()) {\r
      <div class="skeleton-list">\r
        <div class="skeleton-row"></div>\r
        <div class="skeleton-row"></div>\r
      </div>\r
    } @else if (errorProductos()) {\r
      <div class="state-block state-block--error">\r
        <span>{{ errorProductos() }}</span>\r
        <button type="button" class="btn btn--ghost btn--sm" (click)="cargarProductos()">\r
          Reintentar\r
        </button>\r
      </div>\r
    } @else if (productos().length === 0) {\r
      <div class="state-block">\r
        <span class="state-block__title">Sin productos</span>\r
        <span>Prueba ajustando la b\xFAsqueda.</span>\r
      </div>\r
    } @else {\r
      <div class="lista-productos">\r
        @for (producto of productos(); track producto.id) {\r
          <button\r
            type="button"\r
            class="producto-row"\r
            [class.is-active]="productoSeleccionado()?.id === producto.id"\r
            (click)="seleccionarProducto(producto)"\r
          >\r
            @if (producto.imagen_principal_url) {\r
              <img\r
                [src]="resolveMediaUrl(producto.imagen_principal_url)"\r
                alt=""\r
                class="producto-row__imagen"\r
              />\r
            } @else {\r
              <div class="producto-row__imagen producto-row__imagen--placeholder">\r
                <app-icon name="products" style="width: 14px; height: 14px" />\r
              </div>\r
            }\r
            <span class="producto-row__nombre">{{ producto.nombre }}</span>\r
            <span class="contador">{{ producto.variantes.length }} variantes</span>\r
          </button>\r
\r
          @if (productoSeleccionado()?.id === producto.id) {\r
            <div class="variantes-panel">\r
              <h3 class="variantes-panel__titulo">Seleccionar variante</h3>\r
\r
              <div class="variante-list">\r
                @for (variante of producto.variantes; track variante.id) {\r
                  <button\r
                    type="button"\r
                    class="variante-row"\r
                    [class.is-active]="varianteSeleccionada()?.id === variante.id"\r
                    (click)="seleccionarVariante(variante)"\r
                  >\r
                    <span class="variante-row__nombre">\r
                      {{ variante.color.nombre }} / {{ variante.talla.nombre }}\r
                    </span>\r
                    <span class="variante-row__stock">Stock actual: {{ variante.cantidad }}</span>\r
                  </button>\r
                }\r
              </div>\r
            </div>\r
          }\r
        }\r
      </div>\r
    }\r
  </section>\r
\r
  @if (varianteSeleccionada(); as variante) {\r
    <section class="admin-card seccion">\r
      <h2 class="seccion__titulo">Registrar movimiento</h2>\r
\r
      <div class="producto-seleccionado">\r
        <div class="producto-seleccionado__nombre">{{ productoSeleccionado()?.nombre }}</div>\r
        <div class="producto-seleccionado__fila">\r
          <span class="producto-seleccionado__variante">\r
            {{ variante.color.nombre }} / {{ variante.talla.nombre }}\r
          </span>\r
          <span\r
            class="producto-seleccionado__stock"\r
            [class.producto-seleccionado__stock--cero]="variante.cantidad === 0"\r
          >\r
            Stock actual: {{ variante.cantidad }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="campos-fila">\r
        <label class="field field--tipo">\r
          <span class="field__label">Tipo de movimiento</span>\r
          <select\r
            class="tipo-select"\r
            [ngModel]="tipo()"\r
            (ngModelChange)="onTipoChange($event)"\r
          >\r
            <option value="AJUSTE_POSITIVO">Ajuste positivo (+)</option>\r
            <option value="AJUSTE_NEGATIVO">Ajuste negativo (\u2212)</option>\r
          </select>\r
        </label>\r
\r
        <label class="field field--cantidad">\r
          <span class="field__label">Cantidad</span>\r
          <input\r
            type="number"\r
            min="1"\r
            class="cantidad-input"\r
            [ngModel]="cantidad() || null"\r
            (ngModelChange)="onCantidadChange($event)"\r
          />\r
        </label>\r
      </div>\r
\r
      <label class="field field--motivo">\r
        <span class="field__label">Motivo</span>\r
        <textarea\r
          rows="2"\r
          placeholder="Ej. Prenda da\xF1ada detectada en revisi\xF3n de anaquel"\r
          [ngModel]="motivo()"\r
          (ngModelChange)="onMotivoChange($event)"\r
        ></textarea>\r
      </label>\r
\r
      <div class="acciones-form">\r
        <button\r
          type="button"\r
          class="btn btn--primary confirmar-btn"\r
          [disabled]="!puedeConfirmar"\r
          (click)="confirmar()"\r
        >\r
          {{ submitting() ? 'Registrando...' : 'Registrar movimiento' }}\r
        </button>\r
      </div>\r
    </section>\r
  }\r
\r
  <section class="admin-card seccion">\r
    <h2 class="seccion__titulo">Historial de tu sucursal</h2>\r
\r
    @if (loadingHistorial()) {\r
      <div class="skeleton-list">\r
        <div class="skeleton-row"></div>\r
        <div class="skeleton-row"></div>\r
      </div>\r
    } @else if (historial().length === 0) {\r
      <div class="state-block">\r
        <span class="state-block__title">Sin movimientos todav\xEDa</span>\r
        <span>Los ajustes que registres aparecer\xE1n aqu\xED.</span>\r
      </div>\r
    } @else {\r
      <div class="historial-tabla">\r
        <div class="historial-fila historial-fila--header">\r
          <span>Fecha</span>\r
          <span>Producto</span>\r
          <span>Variante</span>\r
          <span>Tipo</span>\r
          <span>Cantidad</span>\r
          <span>Motivo</span>\r
          <span>Stock resultante</span>\r
        </div>\r
        @for (movimiento of historial(); track movimiento.id) {\r
          <div class="historial-fila">\r
            <span class="historial-fila__label">Fecha</span>\r
            <span>{{ movimiento.fecha_hora | date: 'dd/MM/yyyy HH:mm' }}</span>\r
\r
            <span class="historial-fila__label">Producto</span>\r
            <span>{{ movimiento.producto.nombre }}</span>\r
\r
            <span class="historial-fila__label">Variante</span>\r
            <span>{{ movimiento.variante.color.nombre }} / {{ movimiento.variante.talla.nombre }}</span>\r
\r
            <span class="historial-fila__label">Tipo</span>\r
            <span\r
              class="badge"\r
              [class.badge--positivo]="movimiento.tipo === 'AJUSTE_POSITIVO'"\r
              [class.badge--negativo]="movimiento.tipo === 'AJUSTE_NEGATIVO'"\r
            >\r
              {{ movimiento.tipo === 'AJUSTE_POSITIVO' ? 'Positivo' : 'Negativo' }}\r
            </span>\r
\r
            <span class="historial-fila__label">Cantidad</span>\r
            <span>{{ movimiento.tipo === 'AJUSTE_POSITIVO' ? '+' : '-' }}{{ movimiento.cantidad }}</span>\r
\r
            <span class="historial-fila__label">Motivo</span>\r
            <span class="historial-fila__motivo">{{ movimiento.motivo }}</span>\r
\r
            <span class="historial-fila__label">Stock resultante</span>\r
            <span>{{ movimiento.stock_resultante }}</span>\r
          </div>\r
        }\r
      </div>\r
    }\r
  </section>\r
</div>\r
`, styles: ["/* src/app/features/encargado/movimientos-inventario/movimientos-inventario.scss */\n:host {\n  display: block;\n}\n.movimientos-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 920px;\n}\n.page-header {\n  margin-bottom: 4px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header__subtitulo {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  max-width: 640px;\n}\n.seccion {\n  padding: 20px 22px;\n}\n.seccion__titulo {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.2;\n}\n.search-input {\n  margin-bottom: 12px;\n}\n.skeleton-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.contador {\n  flex-shrink: 0;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: var(--color-card-bg);\n  color: var(--color-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n}\n.lista-productos {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.producto-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-white);\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.12s ease;\n}\n.producto-row:hover {\n  background: var(--color-bg);\n}\n.producto-row.is-active {\n  border-color: var(--color-border);\n  background: color-mix(in srgb, var(--color-primary) 5%, var(--color-white));\n  box-shadow: inset 3px 0 0 var(--color-primary);\n}\n.producto-row__imagen {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--color-card-bg);\n}\n.producto-row__imagen--placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.producto-row__nombre {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.variantes-panel {\n  padding: 10px 12px 12px 20px;\n  margin: 2px 0 4px;\n  border-left: 2px solid var(--color-border);\n}\n.variantes-panel__titulo {\n  margin-bottom: 8px;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-text-secondary);\n}\n.variante-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.variante-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-white);\n  cursor: pointer;\n  text-align: left;\n  flex-wrap: wrap;\n  transition: background-color 0.12s ease;\n}\n.variante-row:hover {\n  background: var(--color-bg);\n}\n.variante-row.is-active {\n  border-color: var(--color-border);\n  background: color-mix(in srgb, var(--color-primary) 7%, var(--color-white));\n  box-shadow: inset 3px 0 0 var(--color-primary);\n}\n.variante-row__nombre {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.variante-row__stock {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.producto-seleccionado {\n  padding: 12px 14px;\n  margin-bottom: 18px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg);\n}\n.producto-seleccionado__nombre {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.producto-seleccionado__fila {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 4px;\n  flex-wrap: wrap;\n}\n.producto-seleccionado__variante {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.producto-seleccionado__stock {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  white-space: nowrap;\n}\n.producto-seleccionado__stock--cero {\n  color: var(--color-danger);\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.tipo-select,\n.cantidad-input,\n.field textarea {\n  width: 100%;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--color-text);\n  background: var(--color-white);\n  outline: none;\n  font-family: inherit;\n}\n.tipo-select:focus,\n.cantidad-input:focus,\n.field textarea:focus {\n  border-color: var(--color-primary);\n}\n.tipo-select {\n  cursor: pointer;\n}\n.cantidad-input {\n  text-align: left;\n  -moz-appearance: textfield;\n}\n.cantidad-input::-webkit-outer-spin-button,\n.cantidad-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.field textarea {\n  width: 100%;\n  resize: vertical;\n}\n.campos-fila {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.field--tipo {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.field--cantidad {\n  flex: 0 0 140px;\n}\n.acciones-form {\n  display: flex;\n  justify-content: flex-end;\n}\n.confirmar-btn {\n  min-width: 200px;\n}\n.confirmacion {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 8px;\n  padding: 28px 20px;\n}\n.confirmacion__icono {\n  width: 44px;\n  height: 44px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-card-bg);\n  color: var(--color-primary);\n  margin-bottom: 4px;\n}\n.confirmacion h2 {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.confirmacion__meta {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.confirmacion__resumen {\n  display: flex;\n  gap: 24px;\n  margin: 14px 0 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.confirmacion__dato {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: center;\n}\n.confirmacion__dato-label {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.confirmacion__dato-valor {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.confirmacion__dato-valor--positivo {\n  color: var(--color-success-text);\n}\n.confirmacion__dato-valor--negativo {\n  color: var(--color-danger);\n}\n.badge--positivo {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.badge--negativo {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.historial-tabla {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-x: auto;\n}\n.historial-fila {\n  display: grid;\n  grid-template-columns: minmax(90px, 1fr) minmax(110px, 1.3fr) minmax(90px, 1fr) minmax(78px, 0.7fr) minmax(60px, 0.6fr) minmax(150px, 1.8fr) minmax(80px, 0.9fr);\n  gap: 12px;\n  align-items: center;\n  padding: 11px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-size: 12.5px;\n  color: var(--color-text);\n}\n.historial-fila--header {\n  background: var(--color-card-bg);\n  font-weight: 700;\n  color: var(--color-text-secondary);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  padding: 9px 14px;\n}\n.historial-fila__motivo {\n  overflow-wrap: break-word;\n  line-height: 1.35;\n}\n.historial-fila__label {\n  display: none;\n  font-weight: 700;\n  color: var(--color-text-secondary);\n  font-size: 11px;\n}\n@media (max-width: 900px) {\n  .historial-fila {\n    grid-template-columns: minmax(80px, 1fr) minmax(100px, 1.2fr) minmax(80px, 1fr) minmax(70px, 0.7fr) minmax(50px, 0.6fr) minmax(130px, 1.6fr) minmax(70px, 0.8fr);\n  }\n}\n@media (max-width: 640px) {\n  .movimientos-page {\n    max-width: 100%;\n  }\n  .campos-fila {\n    flex-direction: column;\n  }\n  .field--cantidad {\n    flex-basis: auto;\n  }\n  .acciones-form {\n    justify-content: stretch;\n  }\n  .confirmar-btn {\n    width: 100%;\n    min-width: 0;\n  }\n  .historial-fila--header {\n    display: none;\n  }\n  .historial-fila {\n    grid-template-columns: 1fr 1fr;\n    row-gap: 8px;\n    padding: 12px 14px;\n  }\n  .historial-fila__label {\n    display: block;\n  }\n}\n@media (max-width: 560px) {\n  .search-input {\n    max-width: 100%;\n  }\n  .producto-seleccionado__fila {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 2px;\n  }\n  .variante-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .confirmacion__resumen {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=movimientos-inventario-Y4BQSRBS.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovimientosInventario, { className: "MovimientosInventario", filePath: "src/app/features/encargado/movimientos-inventario/movimientos-inventario.ts", lineNumber: 39 });
})();
export {
  MovimientosInventario
};
//# debugId=0d681242-1e72-5aa6-bda9-cd893d49fa90
//# sourceMappingURL=chunk-V26SKZQN.js.map
