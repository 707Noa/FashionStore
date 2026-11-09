import {
  SucursalAdminService
} from "./chunk-AL7EOW4V.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OB3O2VC6.js";
import {
  SuperadminService
} from "./chunk-UN6AH4K6.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
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
  computed,
  forkJoin,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/admin/reportes-indicadores/grafico-barras/grafico-barras.ts
var _forTrack0 = ($index, $item) => $item.etiqueta;
function GraficoBarras_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 3);
    \u0275\u0275domElement(4, "div", 4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.etiqueta);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.porcentaje(item_r1.valor), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.valorTexto ?? item_r1.valor);
  }
}
var GraficoBarras = class _GraficoBarras {
  items = input.required(
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  maximo = computed(
    () => Math.max(1, ...this.items().map((item) => item.valor)),
    ...ngDevMode ? [{ debugName: "maximo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  porcentaje(valor) {
    return Math.max(2, Math.round(valor / this.maximo() * 100));
  }
  static \u0275fac = function GraficoBarras_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GraficoBarras)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GraficoBarras, selectors: [["app-grafico-barras"]], inputs: { items: [1, "items"] }, decls: 3, vars: 0, consts: [[1, "barras"], [1, "barra-fila"], [1, "barra-fila__etiqueta"], [1, "barra-fila__pista"], [1, "barra-fila__relleno"], [1, "barra-fila__valor"]], template: function GraficoBarras_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, GraficoBarras_For_2_Template, 7, 4, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.items());
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.barras[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.barra-fila[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110px 1fr auto;\n  align-items: center;\n  gap: 10px;\n}\n.barra-fila__etiqueta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.barra-fila__pista[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 999px;\n  background: var(--%NS%color-bg);\n  overflow: hidden;\n}\n.barra-fila__relleno[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--%NS%color-primary);\n  transition: width 240ms ease;\n}\n.barra-fila__valor[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  min-width: 64px;\n  text-align: right;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .barra-fila[_ngcontent-%COMP%] {\n    grid-template-columns: 84px 1fr auto;\n  }\n  .barra-fila__valor[_ngcontent-%COMP%] {\n    min-width: 52px;\n  }\n}\n/*# sourceMappingURL=grafico-barras-OV67CZWW.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GraficoBarras, [{
    type: Component,
    args: [{ selector: "app-grafico-barras", template: '<div class="barras">\r\n  @for (item of items(); track item.etiqueta) {\r\n    <div class="barra-fila">\r\n      <span class="barra-fila__etiqueta">{{ item.etiqueta }}</span>\r\n      <div class="barra-fila__pista">\r\n        <div class="barra-fila__relleno" [style.width.%]="porcentaje(item.valor)"></div>\r\n      </div>\r\n      <span class="barra-fila__valor">{{ item.valorTexto ?? item.valor }}</span>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/features/admin/reportes-indicadores/grafico-barras/grafico-barras.scss */\n:host {\n  display: block;\n}\n.barras {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.barra-fila {\n  display: grid;\n  grid-template-columns: 110px 1fr auto;\n  align-items: center;\n  gap: 10px;\n}\n.barra-fila__etiqueta {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.barra-fila__pista {\n  height: 10px;\n  border-radius: 999px;\n  background: var(--color-bg);\n  overflow: hidden;\n}\n.barra-fila__relleno {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--color-primary);\n  transition: width 240ms ease;\n}\n.barra-fila__valor {\n  flex-shrink: 0;\n  min-width: 64px;\n  text-align: right;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .barra-fila {\n    grid-template-columns: 84px 1fr auto;\n  }\n  .barra-fila__valor {\n    min-width: 52px;\n  }\n}\n/*# sourceMappingURL=grafico-barras-OV67CZWW.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GraficoBarras, { className: "GraficoBarras", filePath: "src/app/features/admin/reportes-indicadores/grafico-barras/grafico-barras.ts", lineNumber: 24 });
})();

// src/app/features/admin/reportes-indicadores/grafico-lineas/grafico-lineas.ts
var ANCHO = 600;
var ALTO = 160;
var PADDING = 8;
var GraficoLineas = class _GraficoLineas {
  puntos = input.required(
    ...ngDevMode ? [{ debugName: "puntos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  viewBox = `0 0 ${ANCHO} ${ALTO}`;
  maximo = computed(
    () => Math.max(1, ...this.puntos().map((p) => p.valor)),
    ...ngDevMode ? [{ debugName: "maximo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  minimo = computed(
    () => Math.min(0, ...this.puntos().map((p) => p.valor)),
    ...ngDevMode ? [{ debugName: "minimo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  coordenadas = computed(
    () => {
      const datos = this.puntos();
      if (datos.length === 0) {
        return [];
      }
      const max = this.maximo();
      const min = this.minimo();
      const rango = max - min || 1;
      const pasoX = datos.length > 1 ? (ANCHO - PADDING * 2) / (datos.length - 1) : 0;
      return datos.map((punto, indice) => ({
        x: PADDING + indice * pasoX,
        y: ALTO - PADDING - (punto.valor - min) / rango * (ALTO - PADDING * 2)
      }));
    },
    ...ngDevMode ? [{ debugName: "coordenadas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  puntosSvg = computed(
    () => this.coordenadas().map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" "),
    ...ngDevMode ? [{ debugName: "puntosSvg" }] : (
      /* istanbul ignore next */
      []
    )
  );
  areaSvg = computed(
    () => {
      const coords = this.coordenadas();
      if (coords.length === 0) {
        return "";
      }
      const base = ALTO - PADDING;
      const primero = coords[0];
      const ultimo = coords[coords.length - 1];
      return `${primero.x.toFixed(1)},${base} ${this.puntosSvg()} ${ultimo.x.toFixed(1)},${base}`;
    },
    ...ngDevMode ? [{ debugName: "areaSvg" }] : (
      /* istanbul ignore next */
      []
    )
  );
  primerEtiqueta = computed(
    () => this.puntos()[0]?.etiqueta ?? "",
    ...ngDevMode ? [{ debugName: "primerEtiqueta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ultimaEtiqueta = computed(
    () => this.puntos().at(-1)?.etiqueta ?? "",
    ...ngDevMode ? [{ debugName: "ultimaEtiqueta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function GraficoLineas_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GraficoLineas)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GraficoLineas, selectors: [["app-grafico-lineas"]], inputs: { puntos: [1, "puntos"] }, decls: 9, vars: 5, consts: [[1, "linea-chart"], ["preserveAspectRatio", "none", 1, "linea-chart__svg"], [1, "linea-chart__area"], [1, "linea-chart__linea"], [1, "linea-chart__ejes"]], template: function GraficoLineas_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1);
      \u0275\u0275domElement(2, "polygon", 2)(3, "polyline", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(4, "div", 4)(5, "span");
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("viewBox", ctx.viewBox);
      \u0275\u0275advance();
      \u0275\u0275attribute("points", ctx.areaSvg());
      \u0275\u0275advance();
      \u0275\u0275attribute("points", ctx.puntosSvg());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.primerEtiqueta());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.ultimaEtiqueta());
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.linea-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.linea-chart__svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  display: block;\n}\n.linea-chart__area[_ngcontent-%COMP%] {\n  fill: color-mix(in srgb, var(--%NS%color-primary) 12%, transparent);\n  stroke: none;\n}\n.linea-chart__linea[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--%NS%color-primary);\n  stroke-width: 2.5;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  vector-effect: non-scaling-stroke;\n}\n.linea-chart__ejes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--%NS%color-text-secondary);\n}\n/*# sourceMappingURL=grafico-lineas-YH4ZL3IR.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GraficoLineas, [{
    type: Component,
    args: [{ selector: "app-grafico-lineas", template: '<div class="linea-chart">\r\n  <svg [attr.viewBox]="viewBox" preserveAspectRatio="none" class="linea-chart__svg">\r\n    <polygon [attr.points]="areaSvg()" class="linea-chart__area" />\r\n    <polyline [attr.points]="puntosSvg()" class="linea-chart__linea" />\r\n  </svg>\r\n  <div class="linea-chart__ejes">\r\n    <span>{{ primerEtiqueta() }}</span>\r\n    <span>{{ ultimaEtiqueta() }}</span>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/admin/reportes-indicadores/grafico-lineas/grafico-lineas.scss */\n:host {\n  display: block;\n}\n.linea-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.linea-chart__svg {\n  width: 100%;\n  height: 160px;\n  display: block;\n}\n.linea-chart__area {\n  fill: color-mix(in srgb, var(--color-primary) 12%, transparent);\n  stroke: none;\n}\n.linea-chart__linea {\n  fill: none;\n  stroke: var(--color-primary);\n  stroke-width: 2.5;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  vector-effect: non-scaling-stroke;\n}\n.linea-chart__ejes {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=grafico-lineas-YH4ZL3IR.css.map */\n"] }]
  }], null, { puntos: [{ type: Input, args: [{ isSignal: true, alias: "puntos", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GraficoLineas, { className: "GraficoLineas", filePath: "src/app/features/admin/reportes-indicadores/grafico-lineas/grafico-lineas.ts", lineNumber: 23 });
})();

// src/app/features/admin/reportes-indicadores/reconocimiento-voz.service.ts
var ReconocimientoVozService = class _ReconocimientoVozService {
  disponible;
  reconocimiento;
  constructor() {
    const ventana = window;
    const Constructor = ventana.SpeechRecognition ?? ventana.webkitSpeechRecognition;
    this.disponible = !!Constructor;
    this.reconocimiento = Constructor ? new Constructor() : null;
    if (this.reconocimiento) {
      this.reconocimiento.lang = "es-ES";
      this.reconocimiento.interimResults = false;
      this.reconocimiento.maxAlternatives = 1;
    }
  }
  /** Escucha un único enunciado y resuelve con el texto reconocido.
   * Rechaza si el navegador no lo soporta, si el Administrador no dio
   * permiso de micrófono, o si terminó sin detectar nada. */
  escuchar() {
    return new Promise((resolve, reject) => {
      const reconocimiento = this.reconocimiento;
      if (!reconocimiento) {
        reject(new Error("no-disponible"));
        return;
      }
      let resuelto = false;
      reconocimiento.onresult = (evento) => {
        resuelto = true;
        const texto = evento.results?.[0]?.[0]?.transcript ?? "";
        resolve(texto.trim());
      };
      reconocimiento.onerror = (evento) => {
        resuelto = true;
        reject(new Error(evento.error || "error-reconocimiento"));
      };
      reconocimiento.onend = () => {
        if (!resuelto) {
          reject(new Error("sin-resultado"));
        }
      };
      try {
        reconocimiento.start();
      } catch {
        reject(new Error("no-se-pudo-iniciar"));
      }
    });
  }
  detener() {
    this.reconocimiento?.stop();
  }
  static \u0275fac = function ReconocimientoVozService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReconocimientoVozService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReconocimientoVozService, factory: _ReconocimientoVozService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReconocimientoVozService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/features/admin/reportes-indicadores/reportes.service.ts
var ReportesService = class _ReportesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/reportes`;
  params(filtro, incluirFechas) {
    let params = new HttpParams();
    if (incluirFechas && filtro.fecha_desde) {
      params = params.set("fecha_desde", filtro.fecha_desde);
    }
    if (incluirFechas && filtro.fecha_hasta) {
      params = params.set("fecha_hasta", filtro.fecha_hasta);
    }
    if (filtro.sucursal_id) {
      params = params.set("sucursal_id", filtro.sucursal_id);
    }
    return params;
  }
  resumen(filtro) {
    return this.http.get(`${this.baseUrl}/resumen`, { params: this.params(filtro, true) });
  }
  ventas(filtro) {
    return this.http.get(`${this.baseUrl}/ventas`, { params: this.params(filtro, true) });
  }
  // /inventario ignora fecha_desde/fecha_hasta por diseño -- es una foto del
  // stock ACTUAL, sin dimensión temporal en el modelo (ver backend/service.py).
  inventario(filtro) {
    return this.http.get(`${this.baseUrl}/inventario`, { params: this.params(filtro, false) });
  }
  reservas(filtro) {
    return this.http.get(`${this.baseUrl}/reservas`, { params: this.params(filtro, true) });
  }
  productosMasVendidos(filtro) {
    return this.http.get(`${this.baseUrl}/productos-mas-vendidos`, {
      params: this.params(filtro, true)
    });
  }
  // CU30 -- segunda parte: consulta inteligente (texto/voz + Gemini). Único
  // punto por el que Angular pide la interpretación -- nunca llama a
  // Gemini directamente (ver backend/gemini_client.py).
  consultaInteligente(payload) {
    return this.http.post(`${this.baseUrl}/consulta-inteligente`, payload);
  }
  static \u0275fac = function ReportesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportesService, factory: _ReportesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/admin/reportes-indicadores/reportes.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.producto_variante_id;
function Reportes_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Escuchando...");
    \u0275\u0275elementEnd();
  }
}
function Reportes_Conditional_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.avisoVoz());
  }
}
function Reportes_Conditional_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function Reportes_Conditional_6_For_15_Template_button_click_0_listener() {
      const ejemplo_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.usarEjemplo(ejemplo_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejemplo_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', ejemplo_r4, '" ');
  }
}
function Reportes_Conditional_6_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 28);
    \u0275\u0275text(2, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "span", 30);
    \u0275\u0275text(5, "Resumen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.resumenIA());
  }
}
function Reportes_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "span", 16);
    \u0275\u0275text(2, "Consulta inteligente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 17);
    \u0275\u0275listener("submit", function Reportes_Conditional_6_Template_form_submit_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmitConsultaIA($event));
    });
    \u0275\u0275elementStart(4, "input", 18);
    \u0275\u0275listener("ngModelChange", function Reportes_Conditional_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizarConsultaTexto($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function Reportes_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.alternarMicrofono());
    });
    \u0275\u0275text(6, " \u{1F3A4} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function Reportes_Conditional_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiarConsultaInteligente());
    });
    \u0275\u0275text(8, " LIMPIAR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, Reportes_Conditional_6_Conditional_11_Template, 2, 0, "span", 22)(12, Reportes_Conditional_6_Conditional_12_Template, 2, 1, "span", 23);
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275repeaterCreate(14, Reportes_Conditional_6_For_15_Template, 2, 1, "button", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, Reportes_Conditional_6_Conditional_16_Template, 8, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.consultaTexto())("disabled", ctx_r1.generandoConsulta());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275classProp("consulta-ia-form__mic--activo", ctx_r1.escuchando());
    \u0275\u0275property("disabled", ctx_r1.generandoConsulta());
    \u0275\u0275attribute("aria-label", ctx_r1.escuchando() ? "Detener escucha" : "Consultar por voz");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.generandoConsulta());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.consultaTexto().trim() || ctx_r1.generandoConsulta());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.generandoConsulta() ? "GENERANDO..." : "GENERAR", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.escuchando() ? 11 : ctx_r1.avisoVoz() ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.ejemplosConsulta);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.resumenIA() ? 16 : -1);
  }
}
function Reportes_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sucursal_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", sucursal_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sucursal_r5.nombre);
  }
}
function Reportes_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorFiltro());
  }
}
function Reportes_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
}
function Reportes_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, Reportes_Conditional_31_For_2_Template, 1, 0, "div", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function Reportes_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 33);
    \u0275\u0275text(2, "No se pudieron cargar los reportes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function Reportes_Conditional_33_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 33);
    \u0275\u0275text(2, "No hay ventas para el periodo seleccionado.");
    \u0275\u0275elementEnd()();
  }
}
function Reportes_Conditional_33_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grafico-lineas", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("puntos", ctx_r1.puntosVentasPorPeriodo());
  }
}
function Reportes_Conditional_33_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 33);
    \u0275\u0275text(2, "No hay ventas para el periodo seleccionado.");
    \u0275\u0275elementEnd()();
  }
}
function Reportes_Conditional_33_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grafico-barras", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", ctx_r1.barrasPorTipo());
  }
}
function Reportes_Conditional_33_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 33);
    \u0275\u0275text(2, "No hay ventas para el periodo seleccionado.");
    \u0275\u0275elementEnd()();
  }
}
function Reportes_Conditional_33_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grafico-barras", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", ctx_r1.barrasPorMetodoPago());
  }
}
function Reportes_Conditional_33_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 38)(2, "div")(3, "h3");
    \u0275\u0275text(4, "Ventas por sucursal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Comparaci\xF3n entre sucursales activas.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275element(8, "app-grafico-barras", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("items", ctx_r1.barrasPorSucursal());
  }
}
function Reportes_Conditional_33_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 33);
    \u0275\u0275text(2, "No hay ventas para el periodo seleccionado.");
    \u0275\u0275elementEnd()();
  }
}
function Reportes_Conditional_33_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grafico-barras", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", ctx_r1.barrasProductosMasVendidos());
  }
}
function Reportes_Conditional_33_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 33);
    \u0275\u0275text(2, "No hay variantes con stock bajo.");
    \u0275\u0275elementEnd()();
  }
}
function Reportes_Conditional_33_Conditional_134_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.producto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.talla);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.sucursal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.disponible);
  }
}
function Reportes_Conditional_33_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Talla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Sucursal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Disponible");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, Reportes_Conditional_33_Conditional_134_For_16_Template, 11, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.inventario().stock_bajo);
  }
}
function Reportes_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "Ingresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275text(8, "Ventas realizadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 34)(12, "span", 35);
    \u0275\u0275text(13, "Productos vendidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 34)(17, "span", 35);
    \u0275\u0275text(18, "Reservas atendidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 34)(22, "span", 35);
    \u0275\u0275text(23, "Devoluciones/cambios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 36);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "span", 35);
    \u0275\u0275text(28, "Stock bajo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 36);
    \u0275\u0275text(30);
    \u0275\u0275elementStart(31, "small");
    \u0275\u0275text(32, "variantes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "section", 37)(34, "div", 38)(35, "div")(36, "h3");
    \u0275\u0275text(37, "Ventas por periodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "Tendencia de ingresos en el rango seleccionado.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 39);
    \u0275\u0275conditionalCreate(41, Reportes_Conditional_33_Conditional_41_Template, 3, 0, "div", 40)(42, Reportes_Conditional_33_Conditional_42_Template, 1, 1, "app-grafico-lineas", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 42)(44, "section", 37)(45, "div", 38)(46, "div")(47, "h3");
    \u0275\u0275text(48, "Ventas por tipo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 39);
    \u0275\u0275conditionalCreate(50, Reportes_Conditional_33_Conditional_50_Template, 3, 0, "div", 40)(51, Reportes_Conditional_33_Conditional_51_Template, 1, 1, "app-grafico-barras", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "section", 37)(53, "div", 38)(54, "div")(55, "h3");
    \u0275\u0275text(56, "Ventas por m\xE9todo de pago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 39);
    \u0275\u0275conditionalCreate(58, Reportes_Conditional_33_Conditional_58_Template, 3, 0, "div", 40)(59, Reportes_Conditional_33_Conditional_59_Template, 1, 1, "app-grafico-barras", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(60, Reportes_Conditional_33_Conditional_60_Template, 9, 1, "section", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "section", 37)(62, "div", 38)(63, "div")(64, "h3");
    \u0275\u0275text(65, "Productos m\xE1s vendidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p");
    \u0275\u0275text(67, "Top 5 por unidades vendidas en el periodo.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 39);
    \u0275\u0275conditionalCreate(69, Reportes_Conditional_33_Conditional_69_Template, 3, 0, "div", 40)(70, Reportes_Conditional_33_Conditional_70_Template, 1, 1, "app-grafico-barras", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 42)(72, "section", 37)(73, "div", 38)(74, "div")(75, "h3");
    \u0275\u0275text(76, "Estado del inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p");
    \u0275\u0275text(78, "Estado actual, no depende del rango de fechas.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 39)(80, "div", 44)(81, "div", 45)(82, "span", 46);
    \u0275\u0275text(83, "Stock f\xEDsico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 47);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 45)(87, "span", 46);
    \u0275\u0275text(88, "Reservado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 47);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 45)(92, "span", 46);
    \u0275\u0275text(93, "Disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 47);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(96, "section", 37)(97, "div", 38)(98, "div")(99, "h3");
    \u0275\u0275text(100, "Reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p");
    \u0275\u0275text(102, "Seg\xFAn la fecha de la visita agendada.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "div", 39)(104, "div", 44)(105, "div", 45)(106, "span", 46);
    \u0275\u0275text(107, "Creadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 47);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 45)(111, "span", 46);
    \u0275\u0275text(112, "Atendidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span", 47);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 45)(116, "span", 46);
    \u0275\u0275text(117, "Canceladas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 47);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 45)(121, "span", 46);
    \u0275\u0275text(122, "Vencidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "span", 47);
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(125, "section", 37)(126, "div", 38)(127, "div")(128, "h3");
    \u0275\u0275text(129, "Stock bajo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "p");
    \u0275\u0275text(131);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(132, "div", 39);
    \u0275\u0275conditionalCreate(133, Reportes_Conditional_33_Conditional_133_Template, 3, 0, "div", 40)(134, Reportes_Conditional_33_Conditional_134_Template, 17, 0, "div", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "section", 37)(136, "div", 38)(137, "div")(138, "h3");
    \u0275\u0275text(139, "Devoluciones y cambios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(140, "div", 39)(141, "div", 44)(142, "div", 45)(143, "span", 46);
    \u0275\u0275text(144, "Devoluciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "span", 47);
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 45)(148, "span", 46);
    \u0275\u0275text(149, "Cambios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "span", 47);
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Bs ", ctx_r1.resumen().ingresos.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resumen().ventas_realizadas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resumen().productos_vendidos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resumen().reservas_atendidas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resumen().devoluciones_cambios);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.resumen().stock_bajo, " ");
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.ventas().por_periodo.length === 0 ? 41 : 42);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.ventas().por_tipo.length === 0 ? 50 : 51);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.ventas().por_metodo_pago.length === 0 ? 58 : 59);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.ventas().por_sucursal.length > 0 ? 60 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.productosMasVendidos().length === 0 ? 69 : 70);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.inventario().stock_fisico_total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.inventario().stock_reservado_total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.inventario().stock_disponible_total);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.reservas().creadas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reservas().atendidas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reservas().canceladas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reservas().vencidas);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Variantes con disponibilidad menor o igual a ", ctx_r1.inventario().umbral_stock_bajo, " unidades.");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.inventario().stock_bajo.length === 0 ? 133 : 134);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.resumen().devoluciones);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resumen().cambios);
  }
}
var EJEMPLOS_CONSULTA = [
  "Ventas de este mes",
  "Stock bajo en Mall Ventura",
  "Productos m\xE1s vendidos esta semana"
];
var MSG_IA_NO_DISPONIBLE = "La consulta inteligente no est\xE1 disponible en este momento. Puedes utilizar los filtros manuales.";
var MSG_VOZ_NO_DISPONIBLE = "El reconocimiento de voz no est\xE1 disponible en este navegador. Puedes escribir tu consulta.";
var ETIQUETAS_TIPO_VENTA = {
  DIGITAL: "Digital",
  PRESENCIAL: "Presencial"
};
var ETIQUETAS_METODO_PAGO = {
  STRIPE: "Stripe",
  EFECTIVO: "Efectivo",
  TARJETA: "Tarjeta",
  QR: "QR"
};
function formatearFecha(fecha) {
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return `${anio}-${mes}-${dia}`;
}
function primerDiaDelMes() {
  const hoy = /* @__PURE__ */ new Date();
  return formatearFecha(new Date(hoy.getFullYear(), hoy.getMonth(), 1));
}
function hoyComoTexto() {
  return formatearFecha(/* @__PURE__ */ new Date());
}
var Reportes = class _Reportes {
  service = inject(ReportesService);
  sucursalService = inject(SucursalAdminService);
  voz = inject(ReconocimientoVozService);
  authService = inject(AuthService);
  superadminService = inject(SuperadminService);
  ejemplosConsulta = EJEMPLOS_CONSULTA;
  vozDisponible = this.voz.disponible;
  tieneFuncionialidadIA = signal(
    false,
    ...ngDevMode ? [{ debugName: "tieneFuncionialidadIA" }] : (
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
  sucursalIdDraft = signal(
    null,
    ...ngDevMode ? [{ debugName: "sucursalIdDraft" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fechaDesdeDraft = signal(
    primerDiaDelMes(),
    ...ngDevMode ? [{ debugName: "fechaDesdeDraft" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fechaHastaDraft = signal(
    hoyComoTexto(),
    ...ngDevMode ? [{ debugName: "fechaHastaDraft" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorFiltro = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorFiltro" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtroAplicado = {
    fecha_desde: this.fechaDesdeDraft(),
    fecha_hasta: this.fechaHastaDraft(),
    sucursal_id: null
  };
  // -- CU30, segunda parte: consulta inteligente ------------------------
  consultaTexto = signal(
    "",
    ...ngDevMode ? [{ debugName: "consultaTexto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  escuchando = signal(
    false,
    ...ngDevMode ? [{ debugName: "escuchando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  generandoConsulta = signal(
    false,
    ...ngDevMode ? [{ debugName: "generandoConsulta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumenIA = signal(
    null,
    ...ngDevMode ? [{ debugName: "resumenIA" }] : (
      /* istanbul ignore next */
      []
    )
  );
  avisoVoz = signal(
    null,
    ...ngDevMode ? [{ debugName: "avisoVoz" }] : (
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
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
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
  ventas = signal(
    null,
    ...ngDevMode ? [{ debugName: "ventas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inventario = signal(
    null,
    ...ngDevMode ? [{ debugName: "inventario" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reservas = signal(
    null,
    ...ngDevMode ? [{ debugName: "reservas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productosMasVendidos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productosMasVendidos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.sucursalService.list({ estado: "active" }).subscribe({
      next: (sucursales) => this.sucursales.set(sucursales),
      error: () => this.sucursales.set([])
    });
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
    this.cargarDatos();
  }
  etiquetaTipo(tipo) {
    return ETIQUETAS_TIPO_VENTA[tipo] ?? tipo;
  }
  etiquetaMetodo(metodo) {
    return ETIQUETAS_METODO_PAGO[metodo] ?? metodo;
  }
  barrasPorTipo() {
    return (this.ventas()?.por_tipo ?? []).map((item) => ({
      etiqueta: this.etiquetaTipo(item.tipo),
      valor: item.ventas,
      valorTexto: `${item.ventas} \xB7 Bs ${item.ingresos.toFixed(2)}`
    }));
  }
  barrasPorMetodoPago() {
    return (this.ventas()?.por_metodo_pago ?? []).map((item) => ({
      etiqueta: this.etiquetaMetodo(item.metodo),
      valor: item.ventas,
      valorTexto: `${item.ventas} \xB7 Bs ${item.ingresos.toFixed(2)}`
    }));
  }
  barrasPorSucursal() {
    return (this.ventas()?.por_sucursal ?? []).map((item) => ({
      etiqueta: item.sucursal,
      valor: item.ingresos,
      valorTexto: `Bs ${item.ingresos.toFixed(2)}`
    }));
  }
  barrasProductosMasVendidos() {
    return this.productosMasVendidos().map((item) => ({
      etiqueta: item.nombre,
      valor: item.unidades,
      valorTexto: `${item.unidades} uds \xB7 Bs ${item.ingresos.toFixed(2)}`
    }));
  }
  puntosVentasPorPeriodo() {
    return (this.ventas()?.por_periodo ?? []).map((item) => ({ etiqueta: item.periodo, valor: item.ingresos }));
  }
  aplicarFiltros() {
    const desde = this.fechaDesdeDraft() || null;
    const hasta = this.fechaHastaDraft() || null;
    if (desde && hasta && desde > hasta) {
      this.errorFiltro.set('La fecha "Desde" no puede ser posterior a "Hasta".');
      return;
    }
    this.errorFiltro.set(null);
    this.filtroAplicado = { fecha_desde: desde, fecha_hasta: hasta, sucursal_id: this.sucursalIdDraft() };
    this.cargarDatos();
  }
  limpiarFiltros() {
    this.sucursalIdDraft.set(null);
    this.fechaDesdeDraft.set(primerDiaDelMes());
    this.fechaHastaDraft.set(hoyComoTexto());
    this.errorFiltro.set(null);
    this.filtroAplicado = { fecha_desde: primerDiaDelMes(), fecha_hasta: hoyComoTexto(), sucursal_id: null };
    this.cargarDatos();
  }
  // -----------------------------------------------------------------
  // CU30, segunda parte -- consulta inteligente (texto/voz + Gemini)
  // -----------------------------------------------------------------
  actualizarConsultaTexto(valor) {
    this.consultaTexto.set(valor);
  }
  usarEjemplo(ejemplo) {
    this.consultaTexto.set(ejemplo);
  }
  limpiarConsultaInteligente() {
    this.consultaTexto.set("");
    this.resumenIA.set(null);
    this.avisoVoz.set(null);
  }
  alternarMicrofono() {
    if (this.escuchando()) {
      this.voz.detener();
      return;
    }
    if (!this.vozDisponible) {
      this.avisoVoz.set(MSG_VOZ_NO_DISPONIBLE);
      return;
    }
    this.avisoVoz.set(null);
    this.escuchando.set(true);
    this.voz.escuchar().then((texto) => {
      this.escuchando.set(false);
      if (texto) {
        this.consultaTexto.set(texto);
      }
    }).catch(() => {
      this.escuchando.set(false);
    });
  }
  onSubmitConsultaIA(evento) {
    evento.preventDefault();
    this.generarConsultaInteligente();
  }
  generarConsultaInteligente() {
    const consulta = this.consultaTexto().trim();
    if (!consulta || this.generandoConsulta()) {
      return;
    }
    this.generandoConsulta.set(true);
    this.resumenIA.set(null);
    this.service.consultaInteligente({
      consulta,
      sucursal_id_actual: this.filtroAplicado.sucursal_id,
      fecha_desde_actual: this.filtroAplicado.fecha_desde,
      fecha_hasta_actual: this.filtroAplicado.fecha_hasta
    }).subscribe({
      next: (respuesta) => {
        this.generandoConsulta.set(false);
        this.resumenIA.set(respuesta.resumen);
        if (!respuesta.exito || !respuesta.filtros) {
          return;
        }
        const { sucursal_id, fecha_desde, fecha_hasta } = respuesta.filtros;
        this.sucursalIdDraft.set(sucursal_id);
        this.fechaDesdeDraft.set(fecha_desde ?? "");
        this.fechaHastaDraft.set(fecha_hasta ?? "");
        this.errorFiltro.set(null);
        this.filtroAplicado = { sucursal_id, fecha_desde, fecha_hasta };
        this.cargarDatos();
      },
      error: () => {
        this.generandoConsulta.set(false);
        this.resumenIA.set(MSG_IA_NO_DISPONIBLE);
      }
    });
  }
  cargarDatos() {
    this.cargando.set(true);
    this.error.set(null);
    forkJoin({
      resumen: this.service.resumen(this.filtroAplicado),
      ventas: this.service.ventas(this.filtroAplicado),
      inventario: this.service.inventario(this.filtroAplicado),
      reservas: this.service.reservas(this.filtroAplicado),
      productosMasVendidos: this.service.productosMasVendidos(this.filtroAplicado)
    }).subscribe({
      next: ({ resumen, ventas, inventario, reservas, productosMasVendidos }) => {
        this.resumen.set(resumen);
        this.ventas.set(ventas);
        this.inventario.set(inventario);
        this.reservas.set(reservas);
        this.productosMasVendidos.set(productosMasVendidos.productos);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set("No se pudieron cargar los reportes. Int\xE9ntalo nuevamente.");
        this.cargando.set(false);
      }
    });
  }
  static \u0275fac = function Reportes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Reportes)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Reportes, selectors: [["app-reportes"]], decls: 34, vars: 7, consts: [[1, "reportes-page"], [1, "page-header"], [1, "admin-card", "consulta-ia-card"], [1, "admin-card", "filtros-card"], [1, "filtros-grid"], [1, "field"], [1, "field__label"], [1, "status-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "filtros-acciones"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], [1, "field__error"], [1, "kpi-grid"], [1, "state-block", "state-block--error"], [1, "consulta-ia-card__titulo"], [1, "consulta-ia-form", 3, "submit"], ["type", "text", "placeholder", "Escribe una consulta...", "name", "consultaInteligente", "maxlength", "300", 1, "consulta-ia-form__input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", 1, "consulta-ia-form__mic", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "consulta-ia-aviso", "consulta-ia-aviso--escuchando"], [1, "consulta-ia-aviso"], [1, "consulta-ia-ejemplos"], ["type", "button", 1, "consulta-ia-ejemplo"], [1, "resumen-ia"], ["type", "button", 1, "consulta-ia-ejemplo", 3, "click"], ["aria-hidden", "true", 1, "resumen-ia__icono"], [1, "resumen-ia__cuerpo"], [1, "resumen-ia__titulo"], [1, "resumen-ia__texto"], [1, "skeleton-row", "skeleton-row--kpi"], [1, "state-block__title"], [1, "kpi-card"], [1, "kpi-card__titulo"], [1, "kpi-card__valor"], [1, "admin-card", "section"], [1, "section__header"], [1, "section__body"], [1, "state-block"], [3, "puntos"], [1, "graficos-grid"], [3, "items"], [1, "mini-stats"], [1, "mini-stat"], [1, "mini-stat__titulo"], [1, "mini-stat__valor"], [1, "table-scroll"], [1, "data-table"], [1, "cell-title"]], template: function Reportes_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Reportes e indicadores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Visi\xF3n global de FashionStore para la toma de decisiones.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, Reportes_Conditional_6_Template, 17, 11, "section", 2);
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "label", 5)(10, "span", 6);
      \u0275\u0275text(11, "Sucursal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 7);
      \u0275\u0275listener("ngModelChange", function Reportes_Template_select_ngModelChange_12_listener($event) {
        return ctx.sucursalIdDraft.set($event);
      });
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Todas las sucursales");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(15, Reportes_For_16_Template, 2, 2, "option", 8, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "label", 5)(18, "span", 6);
      \u0275\u0275text(19, "Desde");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 9);
      \u0275\u0275listener("ngModelChange", function Reportes_Template_input_ngModelChange_20_listener($event) {
        return ctx.fechaDesdeDraft.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "label", 5)(22, "span", 6);
      \u0275\u0275text(23, "Hasta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 9);
      \u0275\u0275listener("ngModelChange", function Reportes_Template_input_ngModelChange_24_listener($event) {
        return ctx.fechaHastaDraft.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 10)(26, "button", 11);
      \u0275\u0275listener("click", function Reportes_Template_button_click_26_listener() {
        return ctx.limpiarFiltros();
      });
      \u0275\u0275text(27, "LIMPIAR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 12);
      \u0275\u0275listener("click", function Reportes_Template_button_click_28_listener() {
        return ctx.aplicarFiltros();
      });
      \u0275\u0275text(29, "APLICAR");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(30, Reportes_Conditional_30_Template, 2, 1, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, Reportes_Conditional_31_Template, 3, 1, "div", 14)(32, Reportes_Conditional_32_Template, 5, 1, "div", 15)(33, Reportes_Conditional_33_Template, 152, 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.tieneFuncionialidadIA() ? 6 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.sucursalIdDraft());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sucursales());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.fechaDesdeDraft());
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.fechaHastaDraft());
      \u0275\u0275control();
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.errorFiltro() ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cargando() ? 31 : ctx.error() ? 32 : ctx.resumen() && ctx.ventas() && ctx.inventario() && ctx.reservas() ? 33 : -1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, GraficoBarras, GraficoLineas], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.reportes-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 1240px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.consulta-ia-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 16px 18px;\n}\n.consulta-ia-card__titulo[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text-secondary);\n}\n.consulta-ia-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.consulta-ia-form__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 40px;\n  padding: 0 14px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 13.5px;\n  color: var(--%NS%color-text);\n}\n.consulta-ia-form__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.consulta-ia-form__input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.consulta-ia-form__mic[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 50%;\n  background: var(--%NS%color-white);\n  font-size: 16px;\n  line-height: 1;\n  cursor: pointer;\n  transition: background var(--%NS%transition-fast), border-color var(--%NS%transition-fast);\n}\n.consulta-ia-form__mic[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--%NS%color-primary);\n}\n.consulta-ia-form__mic[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.consulta-ia-form__mic--activo[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  animation: _ngcontent-%COMP%_mic-pulso 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_mic-pulso {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--%NS%color-primary) 30%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 6px color-mix(in srgb, var(--%NS%color-primary) 0%, transparent);\n  }\n}\n.consulta-ia-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  height: 40px;\n  min-width: 92px;\n  white-space: nowrap;\n}\n.consulta-ia-aviso[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.consulta-ia-aviso--escuchando[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  font-weight: 600;\n}\n.consulta-ia-ejemplos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.consulta-ia-ejemplo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 11px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 999px;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n  font-size: 11.5px;\n  cursor: pointer;\n  transition: border-color var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.consulta-ia-ejemplo[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary-dark);\n}\n.resumen-ia[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border: 1px solid var(--%NS%color-border);\n  border-left: 3px solid var(--%NS%color-primary);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-bg);\n}\n.resumen-ia__icono[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 15px;\n  color: var(--%NS%color-primary);\n  line-height: 1.4;\n}\n.resumen-ia__cuerpo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.resumen-ia__titulo[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text-secondary);\n}\n.resumen-ia__texto[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.5;\n  color: var(--%NS%color-text);\n}\n.filtros-card[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.filtros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 160px 160px auto;\n  align-items: end;\n  gap: 12px;\n}\n.field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 13.5px;\n  color: var(--%NS%color-text);\n}\n.field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.filtros-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  min-width: 92px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 16px 18px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.kpi-card__titulo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.kpi-card__valor[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-primary-dark);\n}\n.kpi-card__valor[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.skeleton-row--kpi[_ngcontent-%COMP%] {\n  height: 78px;\n  border-radius: var(--%NS%radius-lg);\n}\n.graficos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 16px;\n}\n.mini-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 14px;\n}\n.mini-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 10px 12px;\n  background: var(--%NS%color-bg);\n  border-radius: var(--%NS%radius-md);\n}\n.mini-stat__titulo[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.mini-stat__valor[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n@media (max-width: 1080px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 860px) {\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .filtros-acciones[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-content: flex-end;\n  }\n  .consulta-ia-form[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .consulta-ia-form__input[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n@media (max-width: 560px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .kpi-card[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .kpi-card__valor[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filtros-acciones[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .filtros-acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .graficos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .consulta-ia-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=reportes-JU7T334L.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Reportes, [{
    type: Component,
    args: [{ selector: "app-reportes", imports: [FormsModule, GraficoBarras, GraficoLineas], template: `<div class="reportes-page">\r
  <div class="page-header">\r
    <h1>Reportes e indicadores</h1>\r
    <p>Visi\xF3n global de FashionStore para la toma de decisiones.</p>\r
  </div>\r
\r
  <!-- CU30, segunda parte -- consulta inteligente (texto/voz + Gemini).\r
       Sigue siendo el mismo dashboard: al generarse, aplica los filtros ya\r
       existentes y refresca KPIs/gr\xE1ficos/listas (ver reportes.ts,\r
       generarConsultaInteligente()) -- nunca abre una vista aparte.\r
       Solo visible si la empresa tiene habilitada la funcionalidad de IA. -->\r
  @if (tieneFuncionialidadIA()) {\r
    <section class="admin-card consulta-ia-card">\r
    <span class="consulta-ia-card__titulo">Consulta inteligente</span>\r
\r
    <form class="consulta-ia-form" (submit)="onSubmitConsultaIA($event)">\r
      <input\r
        type="text"\r
        class="consulta-ia-form__input"\r
        placeholder="Escribe una consulta..."\r
        [ngModel]="consultaTexto()"\r
        (ngModelChange)="actualizarConsultaTexto($event)"\r
        name="consultaInteligente"\r
        maxlength="300"\r
        [disabled]="generandoConsulta()"\r
      />\r
\r
      <button\r
        type="button"\r
        class="consulta-ia-form__mic"\r
        [class.consulta-ia-form__mic--activo]="escuchando()"\r
        (click)="alternarMicrofono()"\r
        [attr.aria-label]="escuchando() ? 'Detener escucha' : 'Consultar por voz'"\r
        [disabled]="generandoConsulta()"\r
      >\r
        \u{1F3A4}\r
      </button>\r
\r
      <button\r
        type="button"\r
        class="btn btn--ghost"\r
        (click)="limpiarConsultaInteligente()"\r
        [disabled]="generandoConsulta()"\r
      >\r
        LIMPIAR\r
      </button>\r
\r
      <button\r
        type="submit"\r
        class="btn btn--primary"\r
        [disabled]="!consultaTexto().trim() || generandoConsulta()"\r
      >\r
        {{ generandoConsulta() ? 'GENERANDO...' : 'GENERAR' }}\r
      </button>\r
    </form>\r
\r
    @if (escuchando()) {\r
      <span class="consulta-ia-aviso consulta-ia-aviso--escuchando">Escuchando...</span>\r
    } @else if (avisoVoz()) {\r
      <span class="consulta-ia-aviso">{{ avisoVoz() }}</span>\r
    }\r
\r
    <div class="consulta-ia-ejemplos">\r
      @for (ejemplo of ejemplosConsulta; track ejemplo) {\r
        <button type="button" class="consulta-ia-ejemplo" (click)="usarEjemplo(ejemplo)">\r
          "{{ ejemplo }}"\r
        </button>\r
      }\r
    </div>\r
\r
    @if (resumenIA()) {\r
      <div class="resumen-ia">\r
        <span class="resumen-ia__icono" aria-hidden="true">\u2726</span>\r
        <div class="resumen-ia__cuerpo">\r
          <span class="resumen-ia__titulo">Resumen</span>\r
          <p class="resumen-ia__texto">{{ resumenIA() }}</p>\r
        </div>\r
      </div>\r
    }\r
    </section>\r
  }\r
\r
  <section class="admin-card filtros-card">\r
    <div class="filtros-grid">\r
      <label class="field">\r
        <span class="field__label">Sucursal</span>\r
        <select\r
          class="status-select"\r
          [ngModel]="sucursalIdDraft()"\r
          (ngModelChange)="sucursalIdDraft.set($event)"\r
        >\r
          <option [ngValue]="null">Todas las sucursales</option>\r
          @for (sucursal of sucursales(); track sucursal.id) {\r
            <option [ngValue]="sucursal.id">{{ sucursal.nombre }}</option>\r
          }\r
        </select>\r
      </label>\r
\r
      <label class="field">\r
        <span class="field__label">Desde</span>\r
        <input type="date" [ngModel]="fechaDesdeDraft()" (ngModelChange)="fechaDesdeDraft.set($event)" />\r
      </label>\r
\r
      <label class="field">\r
        <span class="field__label">Hasta</span>\r
        <input type="date" [ngModel]="fechaHastaDraft()" (ngModelChange)="fechaHastaDraft.set($event)" />\r
      </label>\r
\r
      <div class="filtros-acciones">\r
        <button type="button" class="btn btn--ghost" (click)="limpiarFiltros()">LIMPIAR</button>\r
        <button type="button" class="btn btn--primary" (click)="aplicarFiltros()">APLICAR</button>\r
      </div>\r
    </div>\r
\r
    @if (errorFiltro()) {\r
      <span class="field__error">{{ errorFiltro() }}</span>\r
    }\r
  </section>\r
\r
  @if (cargando()) {\r
    <div class="kpi-grid">\r
      @for (i of [1, 2, 3, 4, 5, 6]; track i) {\r
        <div class="skeleton-row skeleton-row--kpi"></div>\r
      }\r
    </div>\r
  } @else if (error()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudieron cargar los reportes</span>\r
      <span>{{ error() }}</span>\r
    </div>\r
  } @else if (resumen() && ventas() && inventario() && reservas()) {\r
    <!-- KPIs -->\r
    <div class="kpi-grid">\r
      <div class="kpi-card">\r
        <span class="kpi-card__titulo">Ingresos</span>\r
        <span class="kpi-card__valor">Bs {{ resumen()!.ingresos.toFixed(2) }}</span>\r
      </div>\r
      <div class="kpi-card">\r
        <span class="kpi-card__titulo">Ventas realizadas</span>\r
        <span class="kpi-card__valor">{{ resumen()!.ventas_realizadas }}</span>\r
      </div>\r
      <div class="kpi-card">\r
        <span class="kpi-card__titulo">Productos vendidos</span>\r
        <span class="kpi-card__valor">{{ resumen()!.productos_vendidos }}</span>\r
      </div>\r
      <div class="kpi-card">\r
        <span class="kpi-card__titulo">Reservas atendidas</span>\r
        <span class="kpi-card__valor">{{ resumen()!.reservas_atendidas }}</span>\r
      </div>\r
      <div class="kpi-card">\r
        <span class="kpi-card__titulo">Devoluciones/cambios</span>\r
        <span class="kpi-card__valor">{{ resumen()!.devoluciones_cambios }}</span>\r
      </div>\r
      <div class="kpi-card">\r
        <span class="kpi-card__titulo">Stock bajo</span>\r
        <span class="kpi-card__valor">{{ resumen()!.stock_bajo }} <small>variantes</small></span>\r
      </div>\r
    </div>\r
\r
    <!-- Ventas por periodo -->\r
    <section class="admin-card section">\r
      <div class="section__header">\r
        <div>\r
          <h3>Ventas por periodo</h3>\r
          <p>Tendencia de ingresos en el rango seleccionado.</p>\r
        </div>\r
      </div>\r
      <div class="section__body">\r
        @if (ventas()!.por_periodo.length === 0) {\r
          <div class="state-block">\r
            <span class="state-block__title">No hay ventas para el periodo seleccionado.</span>\r
          </div>\r
        } @else {\r
          <app-grafico-lineas [puntos]="puntosVentasPorPeriodo()" />\r
        }\r
      </div>\r
    </section>\r
\r
    <!-- Ventas: tipo / m\xE9todo de pago / sucursal -->\r
    <div class="graficos-grid">\r
      <section class="admin-card section">\r
        <div class="section__header">\r
          <div>\r
            <h3>Ventas por tipo</h3>\r
          </div>\r
        </div>\r
        <div class="section__body">\r
          @if (ventas()!.por_tipo.length === 0) {\r
            <div class="state-block">\r
              <span class="state-block__title">No hay ventas para el periodo seleccionado.</span>\r
            </div>\r
          } @else {\r
            <app-grafico-barras [items]="barrasPorTipo()" />\r
          }\r
        </div>\r
      </section>\r
\r
      <section class="admin-card section">\r
        <div class="section__header">\r
          <div>\r
            <h3>Ventas por m\xE9todo de pago</h3>\r
          </div>\r
        </div>\r
        <div class="section__body">\r
          @if (ventas()!.por_metodo_pago.length === 0) {\r
            <div class="state-block">\r
              <span class="state-block__title">No hay ventas para el periodo seleccionado.</span>\r
            </div>\r
          } @else {\r
            <app-grafico-barras [items]="barrasPorMetodoPago()" />\r
          }\r
        </div>\r
      </section>\r
\r
      @if (ventas()!.por_sucursal.length > 0) {\r
        <section class="admin-card section">\r
          <div class="section__header">\r
            <div>\r
              <h3>Ventas por sucursal</h3>\r
              <p>Comparaci\xF3n entre sucursales activas.</p>\r
            </div>\r
          </div>\r
          <div class="section__body">\r
            <app-grafico-barras [items]="barrasPorSucursal()" />\r
          </div>\r
        </section>\r
      }\r
    </div>\r
\r
    <!-- Productos m\xE1s vendidos -->\r
    <section class="admin-card section">\r
      <div class="section__header">\r
        <div>\r
          <h3>Productos m\xE1s vendidos</h3>\r
          <p>Top 5 por unidades vendidas en el periodo.</p>\r
        </div>\r
      </div>\r
      <div class="section__body">\r
        @if (productosMasVendidos().length === 0) {\r
          <div class="state-block">\r
            <span class="state-block__title">No hay ventas para el periodo seleccionado.</span>\r
          </div>\r
        } @else {\r
          <app-grafico-barras [items]="barrasProductosMasVendidos()" />\r
        }\r
      </div>\r
    </section>\r
\r
    <!-- Inventario / Stock bajo -->\r
    <div class="graficos-grid">\r
      <section class="admin-card section">\r
        <div class="section__header">\r
          <div>\r
            <h3>Estado del inventario</h3>\r
            <p>Estado actual, no depende del rango de fechas.</p>\r
          </div>\r
        </div>\r
        <div class="section__body">\r
          <div class="mini-stats">\r
            <div class="mini-stat">\r
              <span class="mini-stat__titulo">Stock f\xEDsico</span>\r
              <span class="mini-stat__valor">{{ inventario()!.stock_fisico_total }}</span>\r
            </div>\r
            <div class="mini-stat">\r
              <span class="mini-stat__titulo">Reservado</span>\r
              <span class="mini-stat__valor">{{ inventario()!.stock_reservado_total }}</span>\r
            </div>\r
            <div class="mini-stat">\r
              <span class="mini-stat__titulo">Disponible</span>\r
              <span class="mini-stat__valor">{{ inventario()!.stock_disponible_total }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section class="admin-card section">\r
        <div class="section__header">\r
          <div>\r
            <h3>Reservas</h3>\r
            <p>Seg\xFAn la fecha de la visita agendada.</p>\r
          </div>\r
        </div>\r
        <div class="section__body">\r
          <div class="mini-stats">\r
            <div class="mini-stat">\r
              <span class="mini-stat__titulo">Creadas</span>\r
              <span class="mini-stat__valor">{{ reservas()!.creadas }}</span>\r
            </div>\r
            <div class="mini-stat">\r
              <span class="mini-stat__titulo">Atendidas</span>\r
              <span class="mini-stat__valor">{{ reservas()!.atendidas }}</span>\r
            </div>\r
            <div class="mini-stat">\r
              <span class="mini-stat__titulo">Canceladas</span>\r
              <span class="mini-stat__valor">{{ reservas()!.canceladas }}</span>\r
            </div>\r
            <div class="mini-stat">\r
              <span class="mini-stat__titulo">Vencidas</span>\r
              <span class="mini-stat__valor">{{ reservas()!.vencidas }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
    </div>\r
\r
    <!-- Stock bajo -->\r
    <section class="admin-card section">\r
      <div class="section__header">\r
        <div>\r
          <h3>Stock bajo</h3>\r
          <p>Variantes con disponibilidad menor o igual a {{ inventario()!.umbral_stock_bajo }} unidades.</p>\r
        </div>\r
      </div>\r
      <div class="section__body">\r
        @if (inventario()!.stock_bajo.length === 0) {\r
          <div class="state-block">\r
            <span class="state-block__title">No hay variantes con stock bajo.</span>\r
          </div>\r
        } @else {\r
          <div class="table-scroll">\r
            <table class="data-table">\r
              <thead>\r
                <tr>\r
                  <th>Producto</th>\r
                  <th>Color</th>\r
                  <th>Talla</th>\r
                  <th>Sucursal</th>\r
                  <th>Disponible</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (item of inventario()!.stock_bajo; track item.producto_variante_id) {\r
                  <tr>\r
                    <td class="cell-title">{{ item.producto }}</td>\r
                    <td>{{ item.color }}</td>\r
                    <td>{{ item.talla }}</td>\r
                    <td>{{ item.sucursal }}</td>\r
                    <td>{{ item.disponible }}</td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        }\r
      </div>\r
    </section>\r
\r
    <!-- Devoluciones y cambios -->\r
    <section class="admin-card section">\r
      <div class="section__header">\r
        <div>\r
          <h3>Devoluciones y cambios</h3>\r
        </div>\r
      </div>\r
      <div class="section__body">\r
        <div class="mini-stats">\r
          <div class="mini-stat">\r
            <span class="mini-stat__titulo">Devoluciones</span>\r
            <span class="mini-stat__valor">{{ resumen()!.devoluciones }}</span>\r
          </div>\r
          <div class="mini-stat">\r
            <span class="mini-stat__titulo">Cambios</span>\r
            <span class="mini-stat__valor">{{ resumen()!.cambios }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/admin/reportes-indicadores/reportes.scss */\n:host {\n  display: block;\n}\n.reportes-page {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 1240px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.consulta-ia-card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 16px 18px;\n}\n.consulta-ia-card__titulo {\n  font-size: 12.5px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n}\n.consulta-ia-form {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.consulta-ia-form__input {\n  flex: 1;\n  min-width: 0;\n  height: 40px;\n  padding: 0 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 13.5px;\n  color: var(--color-text);\n}\n.consulta-ia-form__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.consulta-ia-form__input:disabled {\n  opacity: 0.6;\n}\n.consulta-ia-form__mic {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  background: var(--color-white);\n  font-size: 16px;\n  line-height: 1;\n  cursor: pointer;\n  transition: background var(--transition-fast), border-color var(--transition-fast);\n}\n.consulta-ia-form__mic:hover:not(:disabled) {\n  border-color: var(--color-primary);\n}\n.consulta-ia-form__mic:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.consulta-ia-form__mic--activo {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  animation: mic-pulso 1.4s ease-in-out infinite;\n}\n@keyframes mic-pulso {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-primary) 30%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 6px color-mix(in srgb, var(--color-primary) 0%, transparent);\n  }\n}\n.consulta-ia-form .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  height: 40px;\n  min-width: 92px;\n  white-space: nowrap;\n}\n.consulta-ia-aviso {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.consulta-ia-aviso--escuchando {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.consulta-ia-ejemplos {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.consulta-ia-ejemplo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 11px;\n  border: 1px solid var(--color-border);\n  border-radius: 999px;\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n  font-size: 11.5px;\n  cursor: pointer;\n  transition: border-color var(--transition-fast), color var(--transition-fast);\n}\n.consulta-ia-ejemplo:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary-dark);\n}\n.resumen-ia {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border: 1px solid var(--color-border);\n  border-left: 3px solid var(--color-primary);\n  border-radius: var(--radius-md);\n  background: var(--color-bg);\n}\n.resumen-ia__icono {\n  flex-shrink: 0;\n  font-size: 15px;\n  color: var(--color-primary);\n  line-height: 1.4;\n}\n.resumen-ia__cuerpo {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.resumen-ia__titulo {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n}\n.resumen-ia__texto {\n  font-size: 13px;\n  line-height: 1.5;\n  color: var(--color-text);\n}\n.filtros-card {\n  padding: 16px 18px;\n}\n.filtros-grid {\n  display: grid;\n  grid-template-columns: 1fr 160px 160px auto;\n  align-items: end;\n  gap: 12px;\n}\n.field input[type=date] {\n  padding: 9px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 13.5px;\n  color: var(--color-text);\n}\n.field input[type=date]:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.filtros-acciones {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  min-width: 92px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n.kpi-card {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 16px 18px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n}\n.kpi-card__titulo {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.kpi-card__valor {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-primary-dark);\n}\n.kpi-card__valor small {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.skeleton-row--kpi {\n  height: 78px;\n  border-radius: var(--radius-lg);\n}\n.graficos-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 16px;\n}\n.mini-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 14px;\n}\n.mini-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 10px 12px;\n  background: var(--color-bg);\n  border-radius: var(--radius-md);\n}\n.mini-stat__titulo {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.mini-stat__valor {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n@media (max-width: 1080px) {\n  .kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 860px) {\n  .filtros-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .filtros-acciones {\n    grid-column: 1/-1;\n    justify-content: flex-end;\n  }\n  .consulta-ia-form {\n    flex-wrap: wrap;\n  }\n  .consulta-ia-form__input {\n    flex-basis: 100%;\n  }\n}\n@media (max-width: 560px) {\n  .kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .kpi-card {\n    padding: 12px 14px;\n  }\n  .kpi-card__valor {\n    font-size: 18px;\n  }\n  .filtros-grid {\n    grid-template-columns: 1fr;\n  }\n  .filtros-acciones {\n    justify-content: stretch;\n  }\n  .filtros-acciones .btn {\n    flex: 1;\n  }\n  .graficos-grid {\n    grid-template-columns: 1fr;\n  }\n  .consulta-ia-form .btn {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=reportes-JU7T334L.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Reportes, { className: "Reportes", filePath: "src/app/features/admin/reportes-indicadores/reportes.ts", lineNumber: 92 });
})();
export {
  Reportes
};
//# debugId=59fdeb37-56d0-5448-aaf5-05720aa5da3f
//# sourceMappingURL=chunk-7NK2X4ME.js.map
