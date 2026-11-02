import {
  PanelEncargadoService
} from "./chunk-BQE5GQUL.js";
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

// src/app/features/encargado/recepcion-mercaderia/recepcion-mercaderia.service.ts
var RecepcionMercaderiaService = class _RecepcionMercaderiaService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/recepciones-mercaderia/panel`;
  listarProveedores() {
    return this.http.get(`${this.baseUrl}/proveedores`);
  }
  listarProductosDelProveedor(proveedorId) {
    return this.http.get(`${this.baseUrl}/proveedores/${proveedorId}/productos`);
  }
  registrar(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  static \u0275fac = function RecepcionMercaderiaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecepcionMercaderiaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecepcionMercaderiaService, factory: _RecepcionMercaderiaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecepcionMercaderiaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/encargado/recepcion-mercaderia/recepcion-mercaderia.ts
var _forTrack0 = ($index, $item) => $item.variante.id;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.varianteId;
function RecepcionMercaderia_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suc_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Sucursal: ", suc_r1.nombre, " \xB7 ", suc_r1.ciudad.nombre);
  }
}
function RecepcionMercaderia_Conditional_5_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detalle_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", detalle_r3.producto.nombre, " \xB7 ", detalle_r3.variante.color.nombre, " / ", detalle_r3.variante.talla.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", detalle_r3.cantidad_recibida);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Stock actual: ", detalle_r3.stock_resultante);
  }
}
function RecepcionMercaderia_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 4);
    \u0275\u0275element(2, "app-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Recepci\xF3n registrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6, " Proveedor: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \xB7 Sucursal: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " \xB7 Registrado por ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275repeaterCreate(16, RecepcionMercaderia_Conditional_5_For_17_Template, 7, 5, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 9);
    \u0275\u0275listener("click", function RecepcionMercaderia_Conditional_5_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.registrarOtra());
    });
    \u0275\u0275text(19, " Registrar otra recepci\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const out_r5 = ctx;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(out_r5.proveedor.razon_social);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(out_r5.sucursal.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(out_r5.registrado_por.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(out_r5.detalles);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function RecepcionMercaderia_Conditional_6_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cargarProveedores());
    });
    \u0275\u0275text(4, " Reintentar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.errorProveedores());
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const proveedor_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", proveedor_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(proveedor_r8.razon_social);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 21);
    \u0275\u0275listener("ngModelChange", function RecepcionMercaderia_Conditional_6_Conditional_7_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onProveedorChange($event));
    });
    \u0275\u0275elementStart(1, "option", 22);
    \u0275\u0275text(2, "Selecciona un proveedor...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RecepcionMercaderia_Conditional_6_Conditional_7_For_4_Template, 2, 2, "option", 22, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r3.proveedorSeleccionadoId());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.proveedores());
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 16)(2, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.errorProductos());
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 29);
    \u0275\u0275text(2, "Sin productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Este proveedor no tiene productos activos en el cat\xE1logo.");
    \u0275\u0275elementEnd()();
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const producto_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r3.resolveMediaUrl(producto_r11.imagen_principal_url), \u0275\u0275sanitizeUrl);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "app-icon", 38);
    \u0275\u0275elementEnd();
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 44)(4, "span", 45);
    \u0275\u0275text(5, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 46);
    \u0275\u0275listener("ngModelChange", function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_10_For_7_Template_input_ngModelChange_6_listener($event) {
      const variante_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r3.onCantidadChange(variante_r14.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const variante_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", variante_r14.color.nombre, " / ", variante_r14.talla.nombre, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.cantidadEditada(variante_r14.id));
    \u0275\u0275control();
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "h3", 39)(2, "span", 15);
    \u0275\u0275text(3, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Variantes recibidas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275repeaterCreate(6, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_10_For_7_Template, 7, 3, "div", 41, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 42)(9, "button", 20);
    \u0275\u0275listener("click", function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.cerrarProducto());
    });
    \u0275\u0275text(10, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_10_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r12);
      const producto_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.agregarARecepcion(producto_r11));
    });
    \u0275\u0275text(12, " Agregar a recepci\xF3n ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const producto_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275repeater(producto_r11.variantes);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Template_button_click_0_listener() {
      const producto_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.abrirProducto(producto_r11));
    });
    \u0275\u0275conditionalCreate(1, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_1_Template, 1, 1, "img", 31)(2, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_2_Template, 2, 0, "div", 32);
    \u0275\u0275elementStart(3, "span", 33)(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Conditional_10_Template, 13, 0, "div", 37);
  }
  if (rf & 2) {
    const producto_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("is-active", ctx_r3.productoSeleccionado()?.id === producto_r11.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r11.imagen_principal_url ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(producto_r11.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", producto_r11.coleccion.nombre, " \xB7 ", producto_r11.categoria.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", producto_r11.variantes.length, " variantes");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.productoSeleccionado()?.id === producto_r11.id ? 10 : -1);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_For_2_Template, 11, 8, null, null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.productosFiltrados);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 14)(2, "span", 15);
    \u0275\u0275text(3, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Buscar producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 23);
    \u0275\u0275element(6, "app-icon", 24);
    \u0275\u0275elementStart(7, "input", 25);
    \u0275\u0275listener("ngModelChange", function RecepcionMercaderia_Conditional_6_Conditional_8_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onBusquedaChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_8_Template, 3, 0, "div", 26)(9, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_9_Template, 3, 1, "div", 17)(10, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_10_Template, 5, 0, "div", 27)(11, RecepcionMercaderia_Conditional_6_Conditional_8_Conditional_11_Template, 3, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r3.busquedaProducto());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.loadingProductos() ? 8 : ctx_r3.errorProductos() ? 9 : ctx_r3.productosFiltrados.length === 0 ? 10 : 11);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function RecepcionMercaderia_Conditional_6_Conditional_9_For_6_Template_button_click_5_listener() {
      const linea_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.quitarLinea(linea_r17.varianteId));
    });
    \u0275\u0275element(6, "app-icon", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const linea_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", linea_r17.productoNombre, " \xB7 ", linea_r17.colorNombre, " / ", linea_r17.tallaNombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(linea_r17.cantidad);
  }
}
function RecepcionMercaderia_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 47)(2, "h2");
    \u0275\u0275text(3, "Resumen de recepci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 48);
    \u0275\u0275repeaterCreate(5, RecepcionMercaderia_Conditional_6_Conditional_9_For_6_Template, 7, 4, "div", 49, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 50)(8, "span");
    \u0275\u0275text(9, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 51)(13, "span", 52);
    \u0275\u0275text(14, "Observaci\xF3n (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 53);
    \u0275\u0275listener("ngModelChange", function RecepcionMercaderia_Conditional_6_Conditional_9_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onObservacionChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 54);
    \u0275\u0275listener("click", function RecepcionMercaderia_Conditional_6_Conditional_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmarRecepcion());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.resumen());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.totalUnidades, " unidades");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.observacion());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.submitting() ? "Confirmando..." : "Confirmar recepci\xF3n", " ");
  }
}
function RecepcionMercaderia_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 14)(2, "span", 15);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RecepcionMercaderia_Conditional_6_Conditional_5_Template, 1, 0, "div", 16)(6, RecepcionMercaderia_Conditional_6_Conditional_6_Template, 5, 1, "div", 17)(7, RecepcionMercaderia_Conditional_6_Conditional_7_Template, 5, 2, "select", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, RecepcionMercaderia_Conditional_6_Conditional_8_Template, 12, 2, "section", 13);
    \u0275\u0275conditionalCreate(9, RecepcionMercaderia_Conditional_6_Conditional_9_Template, 18, 4, "section", 19);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.loadingProveedores() ? 5 : ctx_r3.errorProveedores() ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.proveedorSeleccionadoId() != null ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.resumen().length > 0 ? 9 : -1);
  }
}
var RecepcionMercaderia = class _RecepcionMercaderia {
  panelEncargadoService = inject(PanelEncargadoService);
  recepcionService = inject(RecepcionMercaderiaService);
  toast = inject(ToastService);
  resolveMediaUrl = resolveMediaUrl;
  sucursal = signal(
    null,
    ...ngDevMode ? [{ debugName: "sucursal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  proveedores = signal(
    [],
    ...ngDevMode ? [{ debugName: "proveedores" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingProveedores = signal(
    true,
    ...ngDevMode ? [{ debugName: "loadingProveedores" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorProveedores = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorProveedores" }] : (
      /* istanbul ignore next */
      []
    )
  );
  proveedorSeleccionadoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "proveedorSeleccionadoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingProductos = signal(
    false,
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
  busquedaProducto = signal(
    "",
    ...ngDevMode ? [{ debugName: "busquedaProducto" }] : (
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
  cantidadesEditadas = signal(
    {},
    ...ngDevMode ? [{ debugName: "cantidadesEditadas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumen = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumen" }] : (
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
  constructor() {
    this.panelEncargadoService.miSucursal().subscribe({ next: (s) => this.sucursal.set(s) });
    this.cargarProveedores();
  }
  cargarProveedores() {
    this.loadingProveedores.set(true);
    this.errorProveedores.set(null);
    this.recepcionService.listarProveedores().subscribe({
      next: (proveedores) => {
        this.proveedores.set(proveedores);
        this.loadingProveedores.set(false);
      },
      error: () => {
        this.loadingProveedores.set(false);
        this.errorProveedores.set("No se pudo conectar con el servidor. Int\xE9ntalo nuevamente.");
      }
    });
  }
  get proveedorSeleccionado() {
    const id = this.proveedorSeleccionadoId();
    return this.proveedores().find((p) => p.id === id) ?? null;
  }
  onProveedorChange(value) {
    const id = value ? Number(value) : null;
    this.proveedorSeleccionadoId.set(id);
    this.productos.set([]);
    this.busquedaProducto.set("");
    this.productoSeleccionado.set(null);
    this.cantidadesEditadas.set({});
    this.resumen.set([]);
    if (id == null) {
      return;
    }
    this.loadingProductos.set(true);
    this.errorProductos.set(null);
    this.recepcionService.listarProductosDelProveedor(id).subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.loadingProductos.set(false);
      },
      error: () => {
        this.loadingProductos.set(false);
        this.productos.set([]);
        this.errorProductos.set("No se pudo cargar los productos de este proveedor.");
      }
    });
  }
  onBusquedaChange(value) {
    this.busquedaProducto.set(value);
  }
  get productosFiltrados() {
    const termino = this.busquedaProducto().trim().toLowerCase();
    if (!termino) {
      return this.productos();
    }
    return this.productos().filter((p) => p.nombre.toLowerCase().includes(termino));
  }
  abrirProducto(producto) {
    this.productoSeleccionado.set(producto);
    const previas = {};
    for (const variante of producto.variantes) {
      const linea = this.resumen().find((l) => l.varianteId === variante.id);
      previas[variante.id] = linea?.cantidad ?? 0;
    }
    this.cantidadesEditadas.set(previas);
  }
  cerrarProducto() {
    this.productoSeleccionado.set(null);
    this.cantidadesEditadas.set({});
  }
  cantidadEditada(varianteId) {
    return this.cantidadesEditadas()[varianteId] ?? 0;
  }
  onCantidadChange(varianteId, valor) {
    const numero = Math.trunc(Number(valor));
    const segura = Number.isFinite(numero) && numero >= 0 ? numero : 0;
    this.cantidadesEditadas.update((mapa) => __spreadProps(__spreadValues({}, mapa), { [varianteId]: segura }));
  }
  agregarARecepcion(producto) {
    const cantidades = this.cantidadesEditadas();
    const nuevasLineas = [];
    for (const variante of producto.variantes) {
      const cantidad = cantidades[variante.id] ?? 0;
      if (cantidad > 0) {
        nuevasLineas.push({
          productoId: producto.id,
          productoNombre: producto.nombre,
          varianteId: variante.id,
          tallaNombre: variante.talla.nombre,
          colorNombre: variante.color.nombre,
          cantidad
        });
      }
    }
    if (nuevasLineas.length === 0) {
      this.toast.error("Ingresa al menos una cantidad mayor a 0.");
      return;
    }
    this.resumen.update((actual) => {
      const sinEsteProducto = actual.filter((l) => l.productoId !== producto.id);
      return [...sinEsteProducto, ...nuevasLineas];
    });
    this.toast.success(`${producto.nombre} agregado a la recepci\xF3n.`);
    this.cerrarProducto();
  }
  quitarLinea(varianteId) {
    this.resumen.update((actual) => actual.filter((l) => l.varianteId !== varianteId));
  }
  get totalUnidades() {
    return this.resumen().reduce((acc, l) => acc + l.cantidad, 0);
  }
  onObservacionChange(value) {
    this.observacion.set(value);
  }
  confirmarRecepcion() {
    const proveedorId = this.proveedorSeleccionadoId();
    const lineas = this.resumen();
    if (proveedorId == null || lineas.length === 0) {
      this.toast.error("Agrega al menos una variante antes de confirmar.");
      return;
    }
    this.submitting.set(true);
    this.recepcionService.registrar({
      proveedor_id: proveedorId,
      observacion: this.observacion().trim() || null,
      detalles: lineas.map((l) => ({
        producto_id: l.productoId,
        producto_variante_id: l.varianteId,
        cantidad_recibida: l.cantidad
      }))
    }).subscribe({
      next: (out) => {
        this.submitting.set(false);
        this.resultado.set(out);
        this.resumen.set([]);
        this.observacion.set("");
        this.toast.success("Recepci\xF3n registrada correctamente.");
      },
      error: (err) => {
        this.submitting.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo registrar la recepci\xF3n. Intenta nuevamente.");
      }
    });
  }
  registrarOtra() {
    this.resultado.set(null);
    this.proveedorSeleccionadoId.set(null);
    this.productos.set([]);
    this.busquedaProducto.set("");
    this.productoSeleccionado.set(null);
    this.cantidadesEditadas.set({});
  }
  static \u0275fac = function RecepcionMercaderia_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecepcionMercaderia)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecepcionMercaderia, selectors: [["app-recepcion-mercaderia"]], decls: 7, vars: 2, consts: [[1, "recepcion-page"], [1, "page-header"], [1, "page-header__sucursal"], [1, "admin-card", "confirmacion"], [1, "confirmacion__icono"], ["name", "suppliers", 2, "width", "22px", "height", "22px"], [1, "confirmacion__meta"], [1, "confirmacion__detalles"], [1, "confirmacion__linea"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], [1, "confirmacion__producto"], [1, "confirmacion__cantidad"], [1, "confirmacion__stock"], [1, "admin-card", "paso"], [1, "paso__titulo"], [1, "paso__numero"], [1, "skeleton-row"], [1, "state-block", "state-block--error"], [1, "status-select", "proveedor-select", 3, "ngModel"], [1, "admin-card", "resumen-recepcion"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "status-select", "proveedor-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar producto...", 3, "ngModelChange", "ngModel"], [1, "skeleton-list"], [1, "state-block"], [1, "lista-productos"], [1, "state-block__title"], ["type", "button", 1, "producto-row", 3, "click"], ["alt", "", 1, "producto-row__imagen", 3, "src"], [1, "producto-row__imagen", "producto-row__imagen--placeholder"], [1, "producto-row__info"], [1, "producto-row__nombre"], [1, "producto-row__meta"], [1, "contador"], [1, "variantes-panel"], ["name", "products", 2, "width", "16px", "height", "16px"], [1, "variantes-panel__titulo"], [1, "variante-list"], [1, "variante-row"], [1, "variantes-panel__acciones"], [1, "variante-row__nombre"], [1, "variante-row__cantidad"], [1, "variante-row__cantidad-label"], ["type", "number", "min", "0", 1, "cantidad-input", 3, "ngModelChange", "ngModel"], [1, "resumen-recepcion__header"], [1, "resumen-lista"], [1, "resumen-linea"], [1, "resumen-total"], [1, "field"], [1, "field__label"], ["type", "text", "placeholder", "Ej. Entrega parcial, faltan 2 cajas...", 1, "observacion-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn--primary", "confirmar-btn", 3, "click", "disabled"], [1, "resumen-linea__nombre"], [1, "resumen-linea__cantidad"], ["type", "button", "aria-label", "Quitar", 1, "resumen-linea__quitar", 3, "click"], ["name", "close", 2, "width", "12px", "height", "12px"]], template: function RecepcionMercaderia_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Recepci\xF3n de mercader\xEDa");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, RecepcionMercaderia_Conditional_4_Template, 2, 2, "p", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, RecepcionMercaderia_Conditional_5_Template, 20, 3, "section", 3)(6, RecepcionMercaderia_Conditional_6_Template, 10, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_0_0 = ctx.sucursal()) ? 4 : -1, tmp_0_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.resultado()) ? 5 : 6, tmp_1_0);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.recepcion-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header__sucursal[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.contador[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: var(--%NS%color-card-bg);\n  color: var(--%NS%color-text-secondary);\n  font-size: 11.5px;\n  font-weight: 700;\n}\n.skeleton-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.paso__titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.paso__numero[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n  border-radius: 999px;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  font-size: 12px;\n  font-weight: 700;\n}\n.proveedor-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.lista-productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 420px;\n  overflow-y: auto;\n}\n.producto-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-white);\n  cursor: pointer;\n  text-align: left;\n}\n.producto-row[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.producto-row.is-active[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 6%, var(--%NS%color-white));\n}\n.producto-row__imagen[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--%NS%color-card-bg);\n}\n.producto-row__imagen--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-row__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.producto-row__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.producto-row__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.variantes-panel[_ngcontent-%COMP%] {\n  padding: 14px 14px 16px;\n  margin: -2px 0 4px;\n  border: 1px solid var(--%NS%color-primary);\n  border-top: none;\n  border-radius: 0 0 var(--%NS%radius-sm) var(--%NS%radius-sm);\n  background: color-mix(in srgb, var(--%NS%color-primary) 4%, var(--%NS%color-white));\n}\n.variantes-panel__titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.variante-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.variante-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--%NS%color-border);\n  flex-wrap: wrap;\n}\n.variante-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.variante-row__nombre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.variante-row__cantidad[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.variante-row__cantidad-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.cantidad-input[_ngcontent-%COMP%] {\n  width: 72px;\n  text-align: center;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  padding: 6px 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  background: var(--%NS%color-white);\n  outline: none;\n}\n.cantidad-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%color-primary);\n}\n.cantidad-input[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.cantidad-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.cantidad-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.variantes-panel__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.resumen-recepcion__header[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.resumen-recepcion__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.resumen-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.resumen-linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.resumen-linea[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.resumen-linea__nombre[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.resumen-linea__cantidad[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.resumen-linea__quitar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 999px;\n  background: none;\n  color: var(--%NS%color-text-secondary);\n  cursor: pointer;\n}\n.resumen-linea__quitar[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-danger);\n}\n.resumen-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  margin-bottom: 14px;\n  border-top: 1px dashed var(--%NS%color-border);\n  font-size: 13.5px;\n  color: var(--%NS%color-text);\n}\n.resumen-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.observacion-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  background: var(--%NS%color-white);\n  outline: none;\n}\n.observacion-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%color-primary);\n}\n.confirmar-btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n}\n.confirmacion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 8px;\n  padding: 32px 20px;\n}\n.confirmacion__icono[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--%NS%color-card-bg);\n  color: var(--%NS%color-primary);\n  margin-bottom: 4px;\n}\n.confirmacion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.confirmacion__meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.confirmacion__detalles[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 12px 0 20px;\n}\n.confirmacion__linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 8px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  flex-wrap: wrap;\n  text-align: left;\n}\n.confirmacion__producto[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.confirmacion__cantidad[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.confirmacion__stock[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n@media (max-width: 900px) {\n  .proveedor-select[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media (max-width: 560px) {\n  .search-input[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .producto-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .producto-row__info[_ngcontent-%COMP%] {\n    min-width: 140px;\n  }\n  .variante-row[_ngcontent-%COMP%], \n   .confirmacion__linea[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .variante-row__cantidad[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .cantidad-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .variantes-panel__acciones[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .variantes-panel__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .resumen-linea[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=recepcion-mercaderia-M65A3LEE.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecepcionMercaderia, [{
    type: Component,
    args: [{ selector: "app-recepcion-mercaderia", imports: [FormsModule, Icon], template: `<div class="recepcion-page">\r
  <div class="page-header">\r
    <h1>Recepci\xF3n de mercader\xEDa</h1>\r
    @if (sucursal(); as suc) {\r
      <p class="page-header__sucursal">Sucursal: {{ suc.nombre }} \xB7 {{ suc.ciudad.nombre }}</p>\r
    }\r
  </div>\r
\r
  @if (resultado(); as out) {\r
    <section class="admin-card confirmacion">\r
      <div class="confirmacion__icono">\r
        <app-icon name="suppliers" style="width: 22px; height: 22px" />\r
      </div>\r
      <h2>Recepci\xF3n registrada</h2>\r
      <p class="confirmacion__meta">\r
        Proveedor: <strong>{{ out.proveedor.razon_social }}</strong> \xB7 Sucursal:\r
        <strong>{{ out.sucursal.nombre }}</strong> \xB7 Registrado por\r
        <strong>{{ out.registrado_por.nombre }}</strong>\r
      </p>\r
\r
      <div class="confirmacion__detalles">\r
        @for (detalle of out.detalles; track detalle.variante.id) {\r
          <div class="confirmacion__linea">\r
            <span class="confirmacion__producto">\r
              {{ detalle.producto.nombre }} \xB7 {{ detalle.variante.color.nombre }} /\r
              {{ detalle.variante.talla.nombre }}\r
            </span>\r
            <span class="confirmacion__cantidad">+{{ detalle.cantidad_recibida }}</span>\r
            <span class="confirmacion__stock">Stock actual: {{ detalle.stock_resultante }}</span>\r
          </div>\r
        }\r
      </div>\r
\r
      <button type="button" class="btn btn--primary" (click)="registrarOtra()">\r
        Registrar otra recepci\xF3n\r
      </button>\r
    </section>\r
  } @else {\r
    <section class="admin-card paso">\r
      <h2 class="paso__titulo"><span class="paso__numero">1</span> Proveedor</h2>\r
\r
      @if (loadingProveedores()) {\r
        <div class="skeleton-row"></div>\r
      } @else if (errorProveedores()) {\r
        <div class="state-block state-block--error">\r
          <span>{{ errorProveedores() }}</span>\r
          <button type="button" class="btn btn--ghost btn--sm" (click)="cargarProveedores()">\r
            Reintentar\r
          </button>\r
        </div>\r
      } @else {\r
        <select\r
          class="status-select proveedor-select"\r
          [ngModel]="proveedorSeleccionadoId()"\r
          (ngModelChange)="onProveedorChange($event)"\r
        >\r
          <option [ngValue]="null">Selecciona un proveedor...</option>\r
          @for (proveedor of proveedores(); track proveedor.id) {\r
            <option [ngValue]="proveedor.id">{{ proveedor.razon_social }}</option>\r
          }\r
        </select>\r
      }\r
    </section>\r
\r
    @if (proveedorSeleccionadoId() != null) {\r
      <section class="admin-card paso">\r
        <h2 class="paso__titulo"><span class="paso__numero">2</span> Buscar producto</h2>\r
\r
        <label class="search-input">\r
          <app-icon name="search" />\r
          <input\r
            type="text"\r
            placeholder="Buscar producto..."\r
            [ngModel]="busquedaProducto()"\r
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
          </div>\r
        } @else if (productosFiltrados.length === 0) {\r
          <div class="state-block">\r
            <span class="state-block__title">Sin productos</span>\r
            <span>Este proveedor no tiene productos activos en el cat\xE1logo.</span>\r
          </div>\r
        } @else {\r
          <div class="lista-productos">\r
            @for (producto of productosFiltrados; track producto.id) {\r
              <button\r
                type="button"\r
                class="producto-row"\r
                [class.is-active]="productoSeleccionado()?.id === producto.id"\r
                (click)="abrirProducto(producto)"\r
              >\r
                @if (producto.imagen_principal_url) {\r
                  <img\r
                    [src]="resolveMediaUrl(producto.imagen_principal_url)"\r
                    alt=""\r
                    class="producto-row__imagen"\r
                  />\r
                } @else {\r
                  <div class="producto-row__imagen producto-row__imagen--placeholder">\r
                    <app-icon name="products" style="width: 16px; height: 16px" />\r
                  </div>\r
                }\r
                <span class="producto-row__info">\r
                  <span class="producto-row__nombre">{{ producto.nombre }}</span>\r
                  <span class="producto-row__meta">\r
                    {{ producto.coleccion.nombre }} \xB7 {{ producto.categoria.nombre }}\r
                  </span>\r
                </span>\r
                <span class="contador">{{ producto.variantes.length }} variantes</span>\r
              </button>\r
\r
              @if (productoSeleccionado()?.id === producto.id) {\r
                <div class="variantes-panel">\r
                  <h3 class="variantes-panel__titulo">\r
                    <span class="paso__numero">3</span> Variantes recibidas\r
                  </h3>\r
\r
                  <div class="variante-list">\r
                    @for (variante of producto.variantes; track variante.id) {\r
                      <div class="variante-row">\r
                        <span class="variante-row__nombre">\r
                          {{ variante.color.nombre }} / {{ variante.talla.nombre }}\r
                        </span>\r
                        <label class="variante-row__cantidad">\r
                          <span class="variante-row__cantidad-label">Cantidad</span>\r
                          <input\r
                            type="number"\r
                            class="cantidad-input"\r
                            min="0"\r
                            [ngModel]="cantidadEditada(variante.id)"\r
                            (ngModelChange)="onCantidadChange(variante.id, $event)"\r
                          />\r
                        </label>\r
                      </div>\r
                    }\r
                  </div>\r
\r
                  <div class="variantes-panel__acciones">\r
                    <button type="button" class="btn btn--ghost btn--sm" (click)="cerrarProducto()">\r
                      Cancelar\r
                    </button>\r
                    <button type="button" class="btn btn--primary" (click)="agregarARecepcion(producto)">\r
                      Agregar a recepci\xF3n\r
                    </button>\r
                  </div>\r
                </div>\r
              }\r
            }\r
          </div>\r
        }\r
      </section>\r
    }\r
\r
    @if (resumen().length > 0) {\r
      <section class="admin-card resumen-recepcion">\r
        <div class="resumen-recepcion__header">\r
          <h2>Resumen de recepci\xF3n</h2>\r
        </div>\r
\r
        <div class="resumen-lista">\r
          @for (linea of resumen(); track linea.varianteId) {\r
            <div class="resumen-linea">\r
              <span class="resumen-linea__nombre">\r
                {{ linea.productoNombre }} \xB7 {{ linea.colorNombre }} / {{ linea.tallaNombre }}\r
              </span>\r
              <span class="resumen-linea__cantidad">{{ linea.cantidad }}</span>\r
              <button\r
                type="button"\r
                class="resumen-linea__quitar"\r
                aria-label="Quitar"\r
                (click)="quitarLinea(linea.varianteId)"\r
              >\r
                <app-icon name="close" style="width: 12px; height: 12px" />\r
              </button>\r
            </div>\r
          }\r
        </div>\r
\r
        <div class="resumen-total">\r
          <span>Total</span>\r
          <strong>{{ totalUnidades }} unidades</strong>\r
        </div>\r
\r
        <label class="field">\r
          <span class="field__label">Observaci\xF3n (opcional)</span>\r
          <input\r
            type="text"\r
            class="observacion-input"\r
            placeholder="Ej. Entrega parcial, faltan 2 cajas..."\r
            [ngModel]="observacion()"\r
            (ngModelChange)="onObservacionChange($event)"\r
          />\r
        </label>\r
\r
        <button\r
          type="button"\r
          class="btn btn--primary confirmar-btn"\r
          [disabled]="submitting()"\r
          (click)="confirmarRecepcion()"\r
        >\r
          {{ submitting() ? 'Confirmando...' : 'Confirmar recepci\xF3n' }}\r
        </button>\r
      </section>\r
    }\r
  }\r
</div>\r
`, styles: ["/* src/app/features/encargado/recepcion-mercaderia/recepcion-mercaderia.scss */\n:host {\n  display: block;\n}\n.recepcion-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.page-header {\n  margin-bottom: 4px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header__sucursal {\n  margin-top: 6px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.contador {\n  flex-shrink: 0;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: var(--color-card-bg);\n  color: var(--color-text-secondary);\n  font-size: 11.5px;\n  font-weight: 700;\n}\n.skeleton-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.paso__titulo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.paso__numero {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n  border-radius: 999px;\n  background: var(--color-primary);\n  color: var(--color-white);\n  font-size: 12px;\n  font-weight: 700;\n}\n.proveedor-select {\n  width: 100%;\n  max-width: 420px;\n}\n.search-input {\n  margin-bottom: 14px;\n}\n.lista-productos {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 420px;\n  overflow-y: auto;\n}\n.producto-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-white);\n  cursor: pointer;\n  text-align: left;\n}\n.producto-row:hover {\n  background: var(--color-bg);\n}\n.producto-row.is-active {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 6%, var(--color-white));\n}\n.producto-row__imagen {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--color-card-bg);\n}\n.producto-row__imagen--placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.producto-row__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.producto-row__nombre {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.producto-row__meta {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.variantes-panel {\n  padding: 14px 14px 16px;\n  margin: -2px 0 4px;\n  border: 1px solid var(--color-primary);\n  border-top: none;\n  border-radius: 0 0 var(--radius-sm) var(--radius-sm);\n  background: color-mix(in srgb, var(--color-primary) 4%, var(--color-white));\n}\n.variantes-panel__titulo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.variante-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.variante-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.variante-row:last-child {\n  border-bottom: none;\n}\n.variante-row__nombre {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.variante-row__cantidad {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.variante-row__cantidad-label {\n  font-size: 11.5px;\n  color: var(--color-text-secondary);\n}\n.cantidad-input {\n  width: 72px;\n  text-align: center;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 6px 4px;\n  font-size: 13px;\n  color: var(--color-text);\n  background: var(--color-white);\n  outline: none;\n}\n.cantidad-input:focus {\n  border-color: var(--color-primary);\n}\n.cantidad-input {\n  -moz-appearance: textfield;\n}\n.cantidad-input::-webkit-outer-spin-button,\n.cantidad-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.variantes-panel__acciones {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.resumen-recepcion__header {\n  margin-bottom: 14px;\n}\n.resumen-recepcion__header h2 {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.resumen-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.resumen-linea {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.resumen-linea:last-child {\n  border-bottom: none;\n}\n.resumen-linea__nombre {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.resumen-linea__cantidad {\n  flex-shrink: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.resumen-linea__quitar {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 999px;\n  background: none;\n  color: var(--color-text-secondary);\n  cursor: pointer;\n}\n.resumen-linea__quitar:hover {\n  background: var(--color-bg);\n  color: var(--color-danger);\n}\n.resumen-total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  margin-bottom: 14px;\n  border-top: 1px dashed var(--color-border);\n  font-size: 13.5px;\n  color: var(--color-text);\n}\n.resumen-total strong {\n  font-size: 15px;\n}\n.observacion-input {\n  width: 100%;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--color-text);\n  background: var(--color-white);\n  outline: none;\n}\n.observacion-input:focus {\n  border-color: var(--color-primary);\n}\n.confirmar-btn {\n  margin-top: 16px;\n  width: 100%;\n}\n.confirmacion {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 8px;\n  padding: 32px 20px;\n}\n.confirmacion__icono {\n  width: 44px;\n  height: 44px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-card-bg);\n  color: var(--color-primary);\n  margin-bottom: 4px;\n}\n.confirmacion h2 {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.confirmacion__meta {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.confirmacion__detalles {\n  width: 100%;\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 12px 0 20px;\n}\n.confirmacion__linea {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 8px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  flex-wrap: wrap;\n  text-align: left;\n}\n.confirmacion__producto {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n  color: var(--color-text);\n}\n.confirmacion__cantidad {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.confirmacion__stock {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n@media (max-width: 900px) {\n  .proveedor-select {\n    max-width: 100%;\n  }\n}\n@media (max-width: 560px) {\n  .search-input {\n    max-width: 100%;\n  }\n  .producto-row {\n    flex-wrap: wrap;\n  }\n  .producto-row__info {\n    min-width: 140px;\n  }\n  .variante-row,\n  .confirmacion__linea {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .variante-row__cantidad {\n    justify-content: space-between;\n  }\n  .cantidad-input {\n    width: 100%;\n  }\n  .variantes-panel__acciones {\n    flex-direction: column-reverse;\n  }\n  .variantes-panel__acciones .btn {\n    width: 100%;\n  }\n  .resumen-linea {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=recepcion-mercaderia-M65A3LEE.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecepcionMercaderia, { className: "RecepcionMercaderia", filePath: "src/app/features/encargado/recepcion-mercaderia/recepcion-mercaderia.ts", lineNumber: 36 });
})();
export {
  RecepcionMercaderia
};
//# debugId=a4ca737b-f0e9-5cb0-8d73-81fad639533a
//# sourceMappingURL=chunk-BBHHZE62.js.map
