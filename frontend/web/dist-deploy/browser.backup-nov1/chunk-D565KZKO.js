import {
  SuperadminService
} from "./chunk-UN6AH4K6.js";
import {
  RUTA_POR_ROL
} from "./chunk-IK7D7AHK.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
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
  HostListener,
  Injectable,
  ViewChild,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-PNHCNXB7.js";

// src/app/features/cliente/asistente-ia/asistente-ia.service.ts
var AsistenteIaService = class _AsistenteIaService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/asistente-ia`;
  enviarMensaje(payload) {
    return this.http.post(`${this.baseUrl}/mensaje`, payload);
  }
  static \u0275fac = function AsistenteIaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AsistenteIaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsistenteIaService, factory: _AsistenteIaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsistenteIaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/cliente/asistente-ia/asistente-ia.ts
var _c0 = ["scrollContainer"];
var _c1 = (a0) => ["/producto", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AsistenteIa_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 2);
  }
}
function AsistenteIa_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "\u2726");
    \u0275\u0275elementEnd();
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(producto_r4.imagen_principal_url), \u0275\u0275sanitizeUrl)("alt", producto_r4.nombre);
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-icon", 30);
    \u0275\u0275elementEnd();
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", producto_r4.color, " ");
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" Talla ", producto_r4.talla, " ");
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275conditionalCreate(1, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Conditional_1_Template, 1, 1);
    \u0275\u0275conditionalCreate(2, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Conditional_2_Template, 1, 0);
    \u0275\u0275conditionalCreate(3, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r4.color ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r4.color && producto_r4.talla ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r4.talla ? 3 : -1);
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bs ", producto_r4.precio_base.toFixed(2));
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", producto_r4.porcentaje_descuento, "%");
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r4.disponibilidad_resumen);
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 17)(1, "div", 18);
    \u0275\u0275conditionalCreate(2, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_2_Template, 1, 2, "img", 19)(3, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_3_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_7_Template, 4, 3, "span", 23);
    \u0275\u0275elementStart(8, "div", 24);
    \u0275\u0275conditionalCreate(9, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_9_Template, 2, 1, "span", 25);
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_12_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Conditional_13_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 29);
    \u0275\u0275listener("click", function AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275text(15, " VER ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(producto_r4.imagen_principal_url ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(producto_r4.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r4.color || producto_r4.talla ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(producto_r4.en_promocion ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", producto_r4.precio_final.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r4.en_promocion ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(producto_r4.disponibilidad_resumen ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, producto_r4.id));
  }
}
function AsistenteIa_Conditional_3_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, AsistenteIa_Conditional_3_For_9_Conditional_3_For_2_Template, 16, 10, "article", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mensaje_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(mensaje_r5.productos);
  }
}
function AsistenteIa_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AsistenteIa_Conditional_3_For_9_Conditional_3_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mensaje_r5 = ctx.$implicit;
    \u0275\u0275classProp("mensaje--usuario", mensaje_r5.rol === "usuario");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mensaje_r5.texto);
    \u0275\u0275advance();
    \u0275\u0275conditional(mensaje_r5.productos && mensaje_r5.productos.length > 0 ? 3 : -1);
  }
}
function AsistenteIa_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 31);
    \u0275\u0275element(2, "span", 32)(3, "span", 32)(4, "span", 32);
    \u0275\u0275elementEnd()();
  }
}
function AsistenteIa_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "header", 5)(2, "span", 6);
    \u0275\u0275text(3, "Asistente FashionStore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function AsistenteIa_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275element(5, "app-icon", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8, 0);
    \u0275\u0275repeaterCreate(8, AsistenteIa_Conditional_3_For_9_Template, 4, 4, "div", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(10, AsistenteIa_Conditional_3_Conditional_10_Template, 5, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 11);
    \u0275\u0275listener("submit", function AsistenteIa_Conditional_3_Template_form_submit_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementStart(12, "input", 12);
    \u0275\u0275listener("input", function AsistenteIa_Conditional_3_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizarTexto($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275element(14, "app-icon", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.mensajes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.enviando() ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.textoInput())("disabled", ctx_r1.enviando());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.textoInput().trim() || ctx_r1.enviando());
  }
}
var _SALUDO_INICIAL = "\xA1Hola! Soy el asistente de FashionStore. \xBFQu\xE9 est\xE1s buscando?";
var _MENSAJE_ERROR_RED = "El asistente no est\xE1 disponible en este momento. Puedes seguir explorando nuestro cat\xE1logo.";
var _MAX_TURNOS_HISTORIAL = 6;
var AsistenteIa = class _AsistenteIa {
  service = inject(AsistenteIaService);
  resolveMediaUrl = resolveMediaUrl;
  abierto = signal(
    false,
    ...ngDevMode ? [{ debugName: "abierto" }] : (
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
  textoInput = signal(
    "",
    ...ngDevMode ? [{ debugName: "textoInput" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mensajes = signal(
    [{ rol: "asistente", texto: _SALUDO_INICIAL }],
    ...ngDevMode ? [{ debugName: "mensajes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scrollContainer = viewChild(
    "scrollContainer",
    ...ngDevMode ? [{ debugName: "scrollContainer" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      this.mensajes();
      this.enviando();
      queueMicrotask(() => {
        const el = this.scrollContainer()?.nativeElement;
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      });
    });
  }
  alternar() {
    this.abierto.update((valor) => !valor);
  }
  cerrar() {
    this.abierto.set(false);
  }
  actualizarTexto(valor) {
    this.textoInput.set(valor);
  }
  enviar() {
    const texto = this.textoInput().trim();
    if (!texto || this.enviando()) {
      return;
    }
    const historial = this.mensajes().slice(-_MAX_TURNOS_HISTORIAL).map((m) => ({ rol: m.rol, texto: m.texto }));
    this.mensajes.update((actuales) => [...actuales, { rol: "usuario", texto }]);
    this.textoInput.set("");
    this.enviando.set(true);
    this.service.enviarMensaje({ mensaje: texto, historial }).subscribe({
      next: (respuesta) => {
        this.mensajes.update((actuales) => [
          ...actuales,
          { rol: "asistente", texto: respuesta.respuesta, productos: respuesta.productos }
        ]);
        this.enviando.set(false);
      },
      error: () => {
        this.mensajes.update((actuales) => [...actuales, { rol: "asistente", texto: _MENSAJE_ERROR_RED }]);
        this.enviando.set(false);
      }
    });
  }
  onSubmit(evento) {
    evento.preventDefault();
    this.enviar();
  }
  static \u0275fac = function AsistenteIa_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AsistenteIa)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AsistenteIa, selectors: [["app-asistente-ia"]], viewQuery: function AsistenteIa_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.scrollContainer, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 4, vars: 6, consts: [["scrollContainer", ""], ["type", "button", 1, "asistente-boton", 3, "click"], ["name", "close"], ["aria-hidden", "true", 1, "asistente-boton__icono"], ["role", "dialog", "aria-label", "Asistente de FashionStore", 1, "asistente-panel"], [1, "asistente-panel__header"], [1, "asistente-panel__titulo"], ["type", "button", "aria-label", "Cerrar asistente", 1, "asistente-panel__cerrar", 3, "click"], [1, "asistente-panel__mensajes"], [1, "mensaje", 3, "mensaje--usuario"], [1, "mensaje"], [1, "asistente-panel__input", 3, "submit"], ["type", "text", "placeholder", "Escribe tu mensaje...", "maxlength", "500", "autocomplete", "off", 1, "asistente-panel__campo", 3, "input", "value", "disabled"], ["type", "submit", "aria-label", "Enviar mensaje", 1, "asistente-panel__enviar", 3, "disabled"], ["name", "arrow-right"], [1, "mensaje__texto"], [1, "mensaje__productos"], [1, "producto-chat"], [1, "producto-chat__imagen"], ["loading", "lazy", 3, "src", "alt"], [1, "producto-chat__placeholder"], [1, "producto-chat__info"], [1, "producto-chat__nombre"], [1, "producto-chat__variante"], [1, "producto-chat__precios"], [1, "precio-anterior"], [1, "producto-chat__precio"], [1, "precio-descuento"], [1, "producto-chat__disponibilidad"], [1, "producto-chat__ver", 3, "click", "routerLink"], ["name", "products", 2, "width", "18px", "height", "18px"], [1, "mensaje__texto", "mensaje__texto--escribiendo"], [1, "typing-dot"]], template: function AsistenteIa_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 1);
      \u0275\u0275listener("click", function AsistenteIa_Template_button_click_0_listener() {
        return ctx.alternar();
      });
      \u0275\u0275conditionalCreate(1, AsistenteIa_Conditional_1_Template, 1, 0, "app-icon", 2)(2, AsistenteIa_Conditional_2_Template, 2, 0, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, AsistenteIa_Conditional_3_Template, 15, 4, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275classProp("asistente-boton--activo", ctx.abierto());
      \u0275\u0275attribute("aria-label", ctx.abierto() ? "Cerrar asistente de FashionStore" : "Abrir asistente de FashionStore")("aria-expanded", ctx.abierto());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.abierto() ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.abierto() ? 3 : -1);
    }
  }, dependencies: [Icon, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.asistente-boton[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 900;\n  width: 56px;\n  height: 56px;\n  border: none;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  box-shadow: var(--%NS%shadow-medium);\n  cursor: pointer;\n  transition: background var(--%NS%transition-fast), transform var(--%NS%transition-fast);\n}\n.asistente-boton[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-primary-hover);\n  transform: translateY(-1px);\n}\n.asistente-boton--activo[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary-dark);\n}\n.asistente-boton__icono[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n}\n.asistente-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 88px;\n  z-index: 900;\n  width: 380px;\n  max-width: calc(100vw - 40px);\n  height: 560px;\n  max-height: calc(100vh - 120px);\n  display: flex;\n  flex-direction: column;\n  background: var(--%NS%color-white);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  overflow: hidden;\n}\n.asistente-panel__header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 14px 16px;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.asistente-panel__titulo[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n}\n.asistente-panel__cerrar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.16);\n  color: var(--%NS%color-white);\n  cursor: pointer;\n  transition: background var(--%NS%transition-fast);\n}\n.asistente-panel__cerrar[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.asistente-panel__mensajes[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px;\n  background: var(--%NS%color-bg);\n}\n.mensaje[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 88%;\n  align-self: flex-start;\n}\n.mensaje--usuario[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  align-items: flex-end;\n}\n.mensaje__texto[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  color: var(--%NS%color-text);\n  font-size: 13px;\n  line-height: 1.45;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.mensaje--usuario[_ngcontent-%COMP%]   .mensaje__texto[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  border-color: color-mix(in srgb, var(--%NS%color-primary) 22%, white);\n  color: var(--%NS%color-text);\n}\n.mensaje__texto--escribiendo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 11px 14px;\n}\n.typing-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--%NS%color-text-secondary);\n  opacity: 0.5;\n  animation: _ngcontent-%COMP%_typing-bounce 1.1s ease-in-out infinite;\n}\n.typing-dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.typing-dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n@keyframes _ngcontent-%COMP%_typing-bounce {\n  0%, 60%, 100% {\n    opacity: 0.35;\n    transform: translateY(0);\n  }\n  30% {\n    opacity: 0.9;\n    transform: translateY(-2px);\n  }\n}\n.mensaje__productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  width: 100%;\n}\n.producto-chat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.producto-chat__imagen[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--%NS%radius-sm);\n  overflow: hidden;\n  background: var(--%NS%color-card-bg);\n}\n.producto-chat__imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.producto-chat__placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-chat__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.producto-chat__nombre[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.producto-chat__variante[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.producto-chat__precios[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 1px;\n}\n.producto-chat__precio[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-primary-dark);\n}\n.precio-anterior[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n  font-size: 9.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.producto-chat__disponibilidad[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  font-size: 10px;\n  color: var(--%NS%color-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.producto-chat__ver[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 12px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background var(--%NS%transition-fast);\n}\n.producto-chat__ver[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-primary-hover);\n}\n.asistente-panel__input[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--%NS%color-white);\n  border-top: 1px solid var(--%NS%color-border);\n}\n.asistente-panel__campo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 10px 13px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 999px;\n  background: var(--%NS%color-bg);\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.asistente-panel__campo[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.asistente-panel__campo[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.asistente-panel__enviar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border: none;\n  border-radius: 50%;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  cursor: pointer;\n  transition: background var(--%NS%transition-fast), opacity var(--%NS%transition-fast);\n}\n.asistente-panel__enviar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--%NS%color-primary-hover);\n}\n.asistente-panel__enviar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n@media (max-width: 900px) {\n  .asistente-panel[_ngcontent-%COMP%] {\n    width: 340px;\n  }\n}\n@media (max-width: 560px) {\n  .asistente-boton[_ngcontent-%COMP%] {\n    right: 16px;\n    bottom: 16px;\n  }\n  .asistente-panel[_ngcontent-%COMP%] {\n    right: 8px;\n    left: 8px;\n    bottom: 8px;\n    width: auto;\n    max-width: none;\n    height: min(640px, 100dvh - 16px);\n    max-height: none;\n  }\n}\n/*# sourceMappingURL=asistente-ia-7B6V4EQM.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsistenteIa, [{
    type: Component,
    args: [{ selector: "app-asistente-ia", imports: [Icon, RouterLink], template: `<button\r
  type="button"\r
  class="asistente-boton"\r
  [class.asistente-boton--activo]="abierto()"\r
  (click)="alternar()"\r
  [attr.aria-label]="abierto() ? 'Cerrar asistente de FashionStore' : 'Abrir asistente de FashionStore'"\r
  [attr.aria-expanded]="abierto()"\r
>\r
  @if (abierto()) {\r
    <app-icon name="close" />\r
  } @else {\r
    <span class="asistente-boton__icono" aria-hidden="true">\u2726</span>\r
  }\r
</button>\r
\r
@if (abierto()) {\r
  <div class="asistente-panel" role="dialog" aria-label="Asistente de FashionStore">\r
    <header class="asistente-panel__header">\r
      <span class="asistente-panel__titulo">Asistente FashionStore</span>\r
      <button\r
        type="button"\r
        class="asistente-panel__cerrar"\r
        (click)="cerrar()"\r
        aria-label="Cerrar asistente"\r
      >\r
        <app-icon name="close" />\r
      </button>\r
    </header>\r
\r
    <div class="asistente-panel__mensajes" #scrollContainer>\r
      @for (mensaje of mensajes(); track $index) {\r
        <div class="mensaje" [class.mensaje--usuario]="mensaje.rol === 'usuario'">\r
          <p class="mensaje__texto">{{ mensaje.texto }}</p>\r
\r
          @if (mensaje.productos && mensaje.productos.length > 0) {\r
            <div class="mensaje__productos">\r
              @for (producto of mensaje.productos; track producto.id) {\r
                <article class="producto-chat">\r
                  <div class="producto-chat__imagen">\r
                    @if (producto.imagen_principal_url) {\r
                      <img\r
                        [src]="resolveMediaUrl(producto.imagen_principal_url)"\r
                        [alt]="producto.nombre"\r
                        loading="lazy"\r
                      />\r
                    } @else {\r
                      <div class="producto-chat__placeholder">\r
                        <app-icon name="products" style="width: 18px; height: 18px" />\r
                      </div>\r
                    }\r
                  </div>\r
\r
                  <div class="producto-chat__info">\r
                    <span class="producto-chat__nombre">{{ producto.nombre }}</span>\r
\r
                    @if (producto.color || producto.talla) {\r
                      <span class="producto-chat__variante">\r
                        @if (producto.color) {\r
                          {{ producto.color }}\r
                        }\r
                        @if (producto.color && producto.talla) {\r
                          \xB7\r
                        }\r
                        @if (producto.talla) {\r
                          Talla {{ producto.talla }}\r
                        }\r
                      </span>\r
                    }\r
\r
                    <div class="producto-chat__precios">\r
                      @if (producto.en_promocion) {\r
                        <span class="precio-anterior">Bs {{ producto.precio_base.toFixed(2) }}</span>\r
                      }\r
                      <span class="producto-chat__precio">Bs {{ producto.precio_final.toFixed(2) }}</span>\r
                      @if (producto.en_promocion) {\r
                        <span class="precio-descuento">-{{ producto.porcentaje_descuento }}%</span>\r
                      }\r
                    </div>\r
\r
                    @if (producto.disponibilidad_resumen) {\r
                      <span class="producto-chat__disponibilidad">{{ producto.disponibilidad_resumen }}</span>\r
                    }\r
                  </div>\r
\r
                  <a\r
                    class="producto-chat__ver"\r
                    [routerLink]="['/producto', producto.id]"\r
                    (click)="cerrar()"\r
                  >\r
                    VER\r
                  </a>\r
                </article>\r
              }\r
            </div>\r
          }\r
        </div>\r
      }\r
\r
      @if (enviando()) {\r
        <div class="mensaje">\r
          <p class="mensaje__texto mensaje__texto--escribiendo">\r
            <span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>\r
          </p>\r
        </div>\r
      }\r
    </div>\r
\r
    <form class="asistente-panel__input" (submit)="onSubmit($event)">\r
      <input\r
        type="text"\r
        class="asistente-panel__campo"\r
        placeholder="Escribe tu mensaje..."\r
        [value]="textoInput()"\r
        (input)="actualizarTexto($any($event.target).value)"\r
        [disabled]="enviando()"\r
        maxlength="500"\r
        autocomplete="off"\r
      />\r
      <button\r
        type="submit"\r
        class="asistente-panel__enviar"\r
        [disabled]="!textoInput().trim() || enviando()"\r
        aria-label="Enviar mensaje"\r
      >\r
        <app-icon name="arrow-right" />\r
      </button>\r
    </form>\r
  </div>\r
}\r
`, styles: ["/* src/app/features/cliente/asistente-ia/asistente-ia.scss */\n:host {\n  display: contents;\n}\n.asistente-boton {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 900;\n  width: 56px;\n  height: 56px;\n  border: none;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-primary);\n  color: var(--color-white);\n  box-shadow: var(--shadow-medium);\n  cursor: pointer;\n  transition: background var(--transition-fast), transform var(--transition-fast);\n}\n.asistente-boton:hover {\n  background: var(--color-primary-hover);\n  transform: translateY(-1px);\n}\n.asistente-boton--activo {\n  background: var(--color-primary-dark);\n}\n.asistente-boton__icono {\n  font-size: 24px;\n  line-height: 1;\n}\n.asistente-panel {\n  position: fixed;\n  right: 20px;\n  bottom: 88px;\n  z-index: 900;\n  width: 380px;\n  max-width: calc(100vw - 40px);\n  height: 560px;\n  max-height: calc(100vh - 120px);\n  display: flex;\n  flex-direction: column;\n  background: var(--color-white);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  overflow: hidden;\n}\n.asistente-panel__header {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 14px 16px;\n  background: var(--color-primary);\n  color: var(--color-white);\n}\n.asistente-panel__titulo {\n  font-size: 14.5px;\n  font-weight: 700;\n}\n.asistente-panel__cerrar {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.16);\n  color: var(--color-white);\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.asistente-panel__cerrar:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.asistente-panel__mensajes {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px;\n  background: var(--color-bg);\n}\n.mensaje {\n  display: flex;\n  flex-direction: column;\n  max-width: 88%;\n  align-self: flex-start;\n}\n.mensaje--usuario {\n  align-self: flex-end;\n  align-items: flex-end;\n}\n.mensaje__texto {\n  padding: 9px 13px;\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  color: var(--color-text);\n  font-size: 13px;\n  line-height: 1.45;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n.mensaje--usuario .mensaje__texto {\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  border-color: color-mix(in srgb, var(--color-primary) 22%, white);\n  color: var(--color-text);\n}\n.mensaje__texto--escribiendo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 11px 14px;\n}\n.typing-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-text-secondary);\n  opacity: 0.5;\n  animation: typing-bounce 1.1s ease-in-out infinite;\n}\n.typing-dot:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.typing-dot:nth-child(3) {\n  animation-delay: 0.3s;\n}\n@keyframes typing-bounce {\n  0%, 60%, 100% {\n    opacity: 0.35;\n    transform: translateY(0);\n  }\n  30% {\n    opacity: 0.9;\n    transform: translateY(-2px);\n  }\n}\n.mensaje__productos {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  width: 100%;\n}\n.producto-chat {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-soft);\n}\n.producto-chat__imagen {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--color-card-bg);\n}\n.producto-chat__imagen img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.producto-chat__placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.producto-chat__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.producto-chat__nombre {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.producto-chat__variante {\n  font-size: 10.5px;\n  color: var(--color-text-secondary);\n}\n.producto-chat__precios {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 1px;\n}\n.producto-chat__precio {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-primary-dark);\n}\n.precio-anterior {\n  font-size: 10.5px;\n  color: var(--color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n  font-size: 9.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.producto-chat__disponibilidad {\n  margin-top: 1px;\n  font-size: 10px;\n  color: var(--color-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.producto-chat__ver {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-primary);\n  color: var(--color-white);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background var(--transition-fast);\n}\n.producto-chat__ver:hover {\n  background: var(--color-primary-hover);\n}\n.asistente-panel__input {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--color-white);\n  border-top: 1px solid var(--color-border);\n}\n.asistente-panel__campo {\n  flex: 1;\n  min-width: 0;\n  padding: 10px 13px;\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  background: var(--color-bg);\n  font-size: 13px;\n  color: var(--color-text);\n}\n.asistente-panel__campo:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.asistente-panel__campo:disabled {\n  opacity: 0.6;\n}\n.asistente-panel__enviar {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border: none;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: var(--color-white);\n  cursor: pointer;\n  transition: background var(--transition-fast), opacity var(--transition-fast);\n}\n.asistente-panel__enviar:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n.asistente-panel__enviar:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n@media (max-width: 900px) {\n  .asistente-panel {\n    width: 340px;\n  }\n}\n@media (max-width: 560px) {\n  .asistente-boton {\n    right: 16px;\n    bottom: 16px;\n  }\n  .asistente-panel {\n    right: 8px;\n    left: 8px;\n    bottom: 8px;\n    width: auto;\n    max-width: none;\n    height: min(640px, 100dvh - 16px);\n    max-height: none;\n  }\n}\n/*# sourceMappingURL=asistente-ia-7B6V4EQM.css.map */\n"] }]
  }], () => [], { scrollContainer: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AsistenteIa, { className: "AsistenteIa", filePath: "src/app/features/cliente/asistente-ia/asistente-ia.ts", lineNumber: 40 });
})();

// src/app/layouts/public-layout/public-header/public-header.ts
var _c02 = () => ({ exact: true });
var _forTrack02 = ($index, $item) => $item.label;
function PublicHeader_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275listener("click", function PublicHeader_For_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r3.path)("fragment", link_r3.fragment)("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c02));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r3.label);
  }
}
function PublicHeader_Conditional_15_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275listener("click", function PublicHeader_Conditional_15_Conditional_6_Conditional_8_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.accountMenuOpen.set(false));
    });
    \u0275\u0275text(1, " Mis reservas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 29);
    \u0275\u0275listener("click", function PublicHeader_Conditional_15_Conditional_6_Conditional_8_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.accountMenuOpen.set(false));
    });
    \u0275\u0275text(3, " Mis compras ");
    \u0275\u0275elementEnd();
  }
}
function PublicHeader_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function PublicHeader_Conditional_15_Conditional_6_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 26);
    \u0275\u0275listener("click", function PublicHeader_Conditional_15_Conditional_6_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.accountMenuOpen.set(false));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PublicHeader_Conditional_15_Conditional_6_Conditional_8_Template, 4, 0);
    \u0275\u0275elementStart(9, "button", 27);
    \u0275\u0275listener("click", function PublicHeader_Conditional_15_Conditional_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(10, " Cerrar sesi\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.authService.usuario()?.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.etiquetaRol);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.destinoCuenta);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.etiquetaCuenta, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.authService.hasRole("CLIENTE") ? 8 : -1);
  }
}
function PublicHeader_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 17);
    \u0275\u0275listener("click", function PublicHeader_Conditional_15_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAccountMenu($event));
    });
    \u0275\u0275element(2, "app-icon", 18);
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PublicHeader_Conditional_15_Conditional_6_Template, 11, 5, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.accountMenuOpen());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.authService.usuario()?.nombre?.split(" ")?.[0]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.accountMenuOpen() ? 6 : -1);
  }
}
function PublicHeader_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "app-icon", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function PublicHeader_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartCount());
  }
}
var ETIQUETAS_ROL = {
  ADMINISTRADOR: "Administrador",
  ENCARGADO_SUCURSAL: "Encargado de sucursal",
  CAJERO: "Cajero",
  PROVEEDOR: "Proveedor",
  CLIENTE: "Cliente"
};
var PublicHeader = class _PublicHeader {
  authService = inject(AuthService);
  router = inject(Router);
  // Cada entrada apunta a una vista/sección real: "Categorías" lleva a la
  // sección "Compra por categorías" del Home (id="categorias") y
  // "Colecciones" lleva a la vitrina pública de colecciones (CU10), desde
  // donde el cliente entra al catálogo (CU11) ya filtrado por la colección.
  navLinks = [
    { label: "Inicio", path: "/home" },
    { label: "Cat\xE1logo", path: "/home/catalogo" },
    { label: "Categor\xEDas", path: "/home", fragment: "categorias" },
    { label: "Colecciones", path: "/home/colecciones" }
  ];
  mobileMenuOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "mobileMenuOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  accountMenuOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "accountMenuOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // CU21 (carrito): sigue en 0 -- este header, a propósito, NO agrega un
  // contador/badge real (ver requerimiento de CU21); el ícono ya existía
  // aquí y solo se le agregó el click hacia /carrito (irAlCarrito()).
  cartCount = signal(
    0,
    ...ngDevMode ? [{ debugName: "cartCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggleMobileMenu() {
    this.mobileMenuOpen.update((open) => !open);
  }
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
  toggleAccountMenu(event) {
    event.stopPropagation();
    this.accountMenuOpen.update((open) => !open);
  }
  // Cierra el menú de cuenta al hacer clic en cualquier otro lugar de la
  // página (el botón que lo abre detiene la propagación, ver arriba).
  closeAccountMenu() {
    this.accountMenuOpen.set(false);
  }
  logout() {
    this.authService.logout();
    this.accountMenuOpen.set(false);
    this.router.navigateByUrl("/login");
  }
  // CU21 -- ícono de carrito ya existente en el header: con sesión va
  // directo a '/carrito' (el propio guard de esa ruta resuelve el resto);
  // sin sesión, a login con returnUrl hacia '/carrito' -- mismo patrón que
  // ya usa "Iniciar sesión" en este mismo header.
  irAlCarrito() {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/home/carrito");
      return;
    }
    this.router.navigate(["/login"], { queryParams: { returnUrl: "/home/carrito" } });
  }
  get destinoCuenta() {
    const rol = this.authService.usuario()?.rol;
    if (rol === "CLIENTE") {
      return "/home/mi-perfil";
    }
    return rol ? RUTA_POR_ROL[rol] : "/";
  }
  get etiquetaCuenta() {
    return this.authService.hasRole("CLIENTE") ? "Mi perfil" : "Mi cuenta";
  }
  get etiquetaRol() {
    const rol = this.authService.usuario()?.rol;
    return rol ? ETIQUETAS_ROL[rol] ?? rol : "";
  }
  static \u0275fac = function PublicHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicHeader, selectors: [["app-public-header"]], hostBindings: function PublicHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function PublicHeader_click_HostBindingHandler() {
        return ctx.closeAccountMenu();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 20, vars: 4, consts: [[1, "header"], ["href", "/", 1, "brand"], [1, "brand__mark"], [1, "header__content", "container"], ["type", "button", "aria-label", "Abrir men\xFA", 1, "menu-toggle", 3, "click"], ["name", "menu", 2, "width", "20px", "height", "20px"], [1, "nav"], ["routerLinkActive", "nav__link--active", 1, "nav__link", 3, "routerLink", "fragment", "routerLinkActiveOptions"], [1, "actions"], ["type", "button", "aria-label", "Buscar", 1, "icon-btn"], ["name", "search", 2, "width", "18px", "height", "18px"], [1, "account-menu"], ["routerLink", "/login", "aria-label", "Iniciar sesi\xF3n", 1, "account-link", "account-link--cta"], ["type", "button", "aria-label", "Carrito", 1, "icon-btn", 3, "click"], ["name", "bag", 2, "width", "18px", "height", "18px"], [1, "icon-btn__badge"], ["routerLinkActive", "nav__link--active", 1, "nav__link", 3, "click", "routerLink", "fragment", "routerLinkActiveOptions"], ["type", "button", "aria-label", "Mi cuenta", 1, "account-link", 3, "click"], ["name", "user", 2, "width", "18px", "height", "18px"], [1, "account-link__label"], ["name", "chevron-down", 2, "width", "12px", "height", "12px"], [1, "account-menu__panel"], [1, "account-menu__panel", 3, "click"], [1, "account-menu__info"], [1, "account-menu__name"], [1, "account-menu__role"], [1, "account-menu__item", 3, "click", "routerLink"], ["type", "button", 1, "account-menu__item", "account-menu__item--danger", 3, "click"], ["routerLink", "/home/mis-reservas", 1, "account-menu__item", 3, "click"], ["routerLink", "/home/mis-compras", 1, "account-menu__item", 3, "click"]], template: function PublicHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "span", 2);
      \u0275\u0275text(3, "FASHION");
      \u0275\u0275element(4, "br");
      \u0275\u0275text(5, "STORE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
      \u0275\u0275listener("click", function PublicHeader_Template_button_click_7_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275element(8, "app-icon", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "nav", 6);
      \u0275\u0275repeaterCreate(10, PublicHeader_For_11_Template, 2, 5, "a", 7, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275element(14, "app-icon", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, PublicHeader_Conditional_15_Template, 7, 3, "div", 11)(16, PublicHeader_Conditional_16_Template, 4, 0, "a", 12);
      \u0275\u0275elementStart(17, "button", 13);
      \u0275\u0275listener("click", function PublicHeader_Template_button_click_17_listener() {
        return ctx.irAlCarrito();
      });
      \u0275\u0275element(18, "app-icon", 14);
      \u0275\u0275conditionalCreate(19, PublicHeader_Conditional_19_Template, 2, 1, "span", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-open", ctx.mobileMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.navLinks);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.authService.isAuthenticated() ? 15 : 16);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.cartCount() > 0 ? 19 : -1);
    }
  }, dependencies: [Icon, RouterLink, RouterLinkActive], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--%NS%color-white);\n  border-bottom: 1px solid var(--%NS%color-border);\n  position: sticky;\n  top: 0;\n  z-index: 200;\n}\n.header[_ngcontent-%COMP%] {\n  height: 58px;\n  display: flex;\n  align-items: stretch;\n}\n.brand[_ngcontent-%COMP%] {\n  width: 90px;\n  flex-shrink: 0;\n  background: var(--%NS%color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  color: var(--%NS%color-white);\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1.25;\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n.header__content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  padding: 0 24px;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  border: none;\n  background: none;\n  color: var(--%NS%color-text);\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 26px;\n}\n.nav__link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 58px;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--%NS%color-text);\n  letter-spacing: 0.01em;\n  transition: color var(--%NS%transition-fast);\n}\n.nav__link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  border-radius: 2px 2px 0 0;\n  background: var(--%NS%color-primary);\n  opacity: 0;\n  transform: scaleX(0.6);\n  transition: opacity var(--%NS%transition-fast), transform var(--%NS%transition-fast);\n}\n.nav__link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary);\n}\n.nav__link--active[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  font-weight: 600;\n}\n.nav__link--%NS%active[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  background: none;\n  color: var(--%NS%color-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--%NS%transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.account-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 10px;\n  border: none;\n  background: none;\n  border-radius: 999px;\n  color: var(--%NS%color-text);\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background var(--%NS%transition-fast);\n}\n.account-link[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.account-link--cta[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n}\n.account-link--%NS%cta[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n}\n.account-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.account-menu__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  min-width: 200px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  z-index: 210;\n}\n.account-menu__info[_ngcontent-%COMP%] {\n  padding: 6px 10px 10px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid var(--%NS%color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.account-menu__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.account-menu__role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--%NS%color-text-secondary);\n}\n.account-menu__item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 9px 10px;\n  border: none;\n  background: none;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 12.5px;\n  font-family: inherit;\n  color: var(--%NS%color-text);\n  cursor: pointer;\n  transition: background var(--%NS%transition-fast);\n}\n.account-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.account-menu__item--danger[_ngcontent-%COMP%] {\n  color: var(--%NS%color-danger);\n}\n.icon-btn__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  min-width: 15px;\n  height: 15px;\n  padding: 0 3px;\n  border-radius: 999px;\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  font-size: 9.5px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 860px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .nav[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    top: 58px;\n    left: 0;\n    right: 0;\n    background: var(--%NS%color-white);\n    border-bottom: 1px solid var(--%NS%color-border);\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0;\n    padding: 6px 4%;\n  }\n  .nav.is-open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .nav__link[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    padding: 12px 0;\n    border-bottom: 1px solid var(--%NS%color-border);\n  }\n  .nav__link[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .account-link[_ngcontent-%COMP%] {\n    width: 34px;\n    padding: 0;\n    justify-content: center;\n  }\n  .account-link__label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=public-header-4XXBTZ2Y.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicHeader, [{
    type: Component,
    args: [{ selector: "app-public-header", imports: [Icon, RouterLink, RouterLinkActive], template: `<div class="header">\r
  <a href="/" class="brand">\r
    <span class="brand__mark">FASHION<br />STORE</span>\r
  </a>\r
\r
  <div class="header__content container">\r
    <button type="button" class="menu-toggle" (click)="toggleMobileMenu()" aria-label="Abrir men\xFA">\r
      <app-icon name="menu" style="width: 20px; height: 20px" />\r
    </button>\r
\r
    <nav class="nav" [class.is-open]="mobileMenuOpen()">\r
      @for (link of navLinks; track link.label) {\r
        <a\r
          [routerLink]="link.path"\r
          [fragment]="link.fragment"\r
          routerLinkActive="nav__link--active"\r
          [routerLinkActiveOptions]="{ exact: true }"\r
          class="nav__link"\r
          (click)="closeMobileMenu()"\r
        >{{ link.label }}</a>\r
      }\r
    </nav>\r
\r
    <div class="actions">\r
      <button type="button" class="icon-btn" aria-label="Buscar">\r
        <app-icon name="search" style="width: 18px; height: 18px" />\r
      </button>\r
      @if (authService.isAuthenticated()) {\r
        <div class="account-menu">\r
          <button\r
            type="button"\r
            class="account-link"\r
            (click)="toggleAccountMenu($event)"\r
            [attr.aria-expanded]="accountMenuOpen()"\r
            aria-label="Mi cuenta"\r
          >\r
            <app-icon name="user" style="width: 18px; height: 18px" />\r
            <span class="account-link__label">{{ authService.usuario()?.nombre?.split(' ')?.[0] }}</span>\r
            <app-icon name="chevron-down" style="width: 12px; height: 12px" />\r
          </button>\r
\r
          @if (accountMenuOpen()) {\r
            <div class="account-menu__panel" (click)="$event.stopPropagation()">\r
              <div class="account-menu__info">\r
                <span class="account-menu__name">{{ authService.usuario()?.nombre }}</span>\r
                <span class="account-menu__role">{{ etiquetaRol }}</span>\r
              </div>\r
              <a [routerLink]="destinoCuenta" class="account-menu__item" (click)="accountMenuOpen.set(false)">\r
                {{ etiquetaCuenta }}\r
              </a>\r
              @if (authService.hasRole('CLIENTE')) {\r
                <a routerLink="/home/mis-reservas" class="account-menu__item" (click)="accountMenuOpen.set(false)">\r
                  Mis reservas\r
                </a>\r
                <a routerLink="/home/mis-compras" class="account-menu__item" (click)="accountMenuOpen.set(false)">\r
                  Mis compras\r
                </a>\r
              }\r
              <button type="button" class="account-menu__item account-menu__item--danger" (click)="logout()">\r
                Cerrar sesi\xF3n\r
              </button>\r
            </div>\r
          }\r
        </div>\r
      } @else {\r
        <a routerLink="/login" class="account-link account-link--cta" aria-label="Iniciar sesi\xF3n">\r
          <app-icon name="user" style="width: 18px; height: 18px" />\r
          <span class="account-link__label">Iniciar sesi\xF3n</span>\r
        </a>\r
      }\r
      <button type="button" class="icon-btn" aria-label="Carrito" (click)="irAlCarrito()">\r
        <app-icon name="bag" style="width: 18px; height: 18px" />\r
        @if (cartCount() > 0) {\r
          <span class="icon-btn__badge">{{ cartCount() }}</span>\r
        }\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/layouts/public-layout/public-header/public-header.scss */\n:host {\n  display: block;\n  background: var(--color-white);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 200;\n}\n.header {\n  height: 58px;\n  display: flex;\n  align-items: stretch;\n}\n.brand {\n  width: 90px;\n  flex-shrink: 0;\n  background: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand__mark {\n  color: var(--color-white);\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1.25;\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n.header__content {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  padding: 0 24px;\n}\n.menu-toggle {\n  display: none;\n  align-items: center;\n  border: none;\n  background: none;\n  color: var(--color-text);\n}\n.nav {\n  display: flex;\n  align-items: center;\n  gap: 26px;\n}\n.nav__link {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 58px;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--color-text);\n  letter-spacing: 0.01em;\n  transition: color var(--transition-fast);\n}\n.nav__link::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  border-radius: 2px 2px 0 0;\n  background: var(--color-primary);\n  opacity: 0;\n  transform: scaleX(0.6);\n  transition: opacity var(--transition-fast), transform var(--transition-fast);\n}\n.nav__link:hover {\n  color: var(--color-primary);\n}\n.nav__link--active {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.nav__link--active::after {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n}\n.icon-btn {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  background: none;\n  color: var(--color-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--transition-fast);\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n.account-link {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 10px;\n  border: none;\n  background: none;\n  border-radius: 999px;\n  color: var(--color-text);\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background var(--transition-fast);\n}\n.account-link:hover {\n  background: var(--color-bg);\n}\n.account-link--cta {\n  color: var(--color-primary);\n}\n.account-link--cta:hover {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n}\n.account-menu {\n  position: relative;\n}\n.account-menu__panel {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  min-width: 200px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-medium);\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  z-index: 210;\n}\n.account-menu__info {\n  padding: 6px 10px 10px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.account-menu__name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.account-menu__role {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n.account-menu__item {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 9px 10px;\n  border: none;\n  background: none;\n  border-radius: var(--radius-sm);\n  font-size: 12.5px;\n  font-family: inherit;\n  color: var(--color-text);\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.account-menu__item:hover {\n  background: var(--color-bg);\n}\n.account-menu__item--danger {\n  color: var(--color-danger);\n}\n.icon-btn__badge {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  min-width: 15px;\n  height: 15px;\n  padding: 0 3px;\n  border-radius: 999px;\n  background: var(--color-primary);\n  color: var(--color-white);\n  font-size: 9.5px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 860px) {\n  .menu-toggle {\n    display: flex;\n  }\n  .nav {\n    display: none;\n    position: absolute;\n    top: 58px;\n    left: 0;\n    right: 0;\n    background: var(--color-white);\n    border-bottom: 1px solid var(--color-border);\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0;\n    padding: 6px 4%;\n  }\n  .nav.is-open {\n    display: flex;\n  }\n  .nav__link {\n    width: 100%;\n    height: auto;\n    padding: 12px 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .nav__link::after {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .account-link {\n    width: 34px;\n    padding: 0;\n    justify-content: center;\n  }\n  .account-link__label {\n    display: none;\n  }\n}\n/*# sourceMappingURL=public-header-4XXBTZ2Y.css.map */\n'] }]
  }], null, { closeAccountMenu: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicHeader, { className: "PublicHeader", filePath: "src/app/layouts/public-layout/public-header/public-header.ts", lineNumber: 27 });
})();

// src/app/layouts/public-layout/public-layout.ts
function PublicLayout_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-asistente-ia");
  }
}
var PublicLayout = class _PublicLayout {
  authService = inject(AuthService);
  superadminService = inject(SuperadminService);
  tieneFuncionialidadIA = signal(
    false,
    ...ngDevMode ? [{ debugName: "tieneFuncionialidadIA" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const usuario = this.authService.usuario();
    if (usuario?.empresa_id) {
      this.superadminService.getSuscripcionEmpresa(usuario.empresa_id).subscribe({
        next: (data) => {
          const tieneFuncionialidad = data.plan?.reportes_generativos_ia ?? false;
          this.tieneFuncionialidadIA.set(tieneFuncionialidad);
        },
        error: () => this.tieneFuncionialidadIA.set(false)
      });
    }
  }
  static \u0275fac = function PublicLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayout, selectors: [["app-public-layout"]], decls: 4, vars: 1, template: function PublicLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-public-header");
      \u0275\u0275elementStart(1, "main");
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, PublicLayout_Conditional_3_Template, 1, 0, "app-asistente-ia");
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.tieneFuncionialidadIA() ? 3 : -1);
    }
  }, dependencies: [RouterOutlet, PublicHeader, AsistenteIa], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--%NS%color-bg);\n  min-height: 100vh;\n}\n/*# sourceMappingURL=public-layout-S3NN4EP2.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicLayout, [{
    type: Component,
    args: [{ selector: "app-public-layout", imports: [RouterOutlet, PublicHeader, AsistenteIa], template: "<app-public-header />\r\n<main>\r\n  <router-outlet />\r\n</main>\r\n\r\n<!-- CU29 -- Obtener recomendaciones mediante IA (asistente flotante). Vive\r\n     fuera del router-outlet para que la conversaci\xF3n sobreviva mientras el\r\n     Cliente navega entre cat\xE1logo/producto/carrito -- ver asistente-ia.ts.\r\n     Solo visible si la empresa tiene habilitada la funcionalidad de IA. -->\r\n@if (tieneFuncionialidadIA()) {\r\n  <app-asistente-ia />\r\n}\r\n", styles: ["/* src/app/layouts/public-layout/public-layout.scss */\n:host {\n  display: block;\n  background: var(--color-bg);\n  min-height: 100vh;\n}\n/*# sourceMappingURL=public-layout-S3NN4EP2.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayout, { className: "PublicLayout", filePath: "src/app/layouts/public-layout/public-layout.ts", lineNumber: 14 });
})();
export {
  PublicLayout
};
//# debugId=63a74d42-7ee0-5005-9f06-dc00c99c65c1
//# sourceMappingURL=chunk-D565KZKO.js.map
