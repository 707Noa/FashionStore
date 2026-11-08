import {
  FiltroHistorial,
  HistorialComprasService
} from "./chunk-5TYRBE3O.js";
import {
  RouterLink
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/cajero/historial/historial.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/cajero/comprobante", a0];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.venta_id;
function Historial_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function Historial_For_9_Template_button_click_0_listener() {
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
function Historial_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function Historial_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, Historial_Conditional_10_For_2_Template, 1, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function Historial_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275text(2, "No se pudo cargar el historial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function Historial_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.mensajeVacio);
  }
}
function Historial_Conditional_13_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r4.leyenda_postventa);
  }
}
function Historial_Conditional_13_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const venta_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(venta_r4.cliente_nombre);
  }
}
function Historial_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Historial_Conditional_13_For_2_Conditional_4_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Historial_Conditional_13_For_2_Conditional_10_Template, 2, 1, "span");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17)(16, "a", 18);
    \u0275\u0275text(17, "Ver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const venta_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(venta_r4.codigo_venta);
    \u0275\u0275advance();
    \u0275\u0275conditional(venta_r4.leyenda_postventa ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fecha(venta_r4.fecha));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.etiquetaTipo(venta_r4.tipo));
    \u0275\u0275advance();
    \u0275\u0275conditional(venta_r4.cliente_nombre ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.etiquetaMetodo(venta_r4.metodo_pago));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", venta_r4.total.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, venta_r4.venta_id));
  }
}
function Historial_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5);
    \u0275\u0275repeaterCreate(1, Historial_Conditional_13_For_2_Template, 18, 10, "li", 11, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.ventasFiltradas());
  }
}
var TABS = [
  { key: "pagadas", etiqueta: "Pagadas", vacio: "No hay ventas pagadas sin devoluciones o cambios." },
  { key: "postventa", etiqueta: "Postventa", vacio: "No hay ventas con devoluciones o cambios registrados." },
  { key: "todas", etiqueta: "Todas", vacio: "No se encontraron ventas." }
];
var Historial = class _Historial {
  service = inject(HistorialComprasService);
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
  ventas = signal(
    [],
    ...ngDevMode ? [{ debugName: "ventas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tabs = TABS;
  tabActiva = signal(
    "pagadas",
    ...ngDevMode ? [{ debugName: "tabActiva" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ventasFiltradas = computed(
    () => {
      const tab = this.tabActiva();
      const ventas = this.ventas();
      if (tab === "pagadas") {
        return ventas.filter((venta) => !venta.tiene_postventa);
      }
      if (tab === "postventa") {
        return ventas.filter((venta) => venta.tiene_postventa);
      }
      return ventas;
    },
    ...ngDevMode ? [{ debugName: "ventasFiltradas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get mensajeVacio() {
    return this.tabs.find((tab) => tab.key === this.tabActiva())?.vacio ?? "";
  }
  ngOnInit() {
    this.cargar({});
  }
  seleccionarTab(key) {
    this.tabActiva.set(key);
  }
  cargar(filtro) {
    this.cargando.set(true);
    this.errorMessage.set(null);
    this.service.listarSucursal(filtro).subscribe({
      next: (ventas) => {
        this.cargando.set(false);
        this.ventas.set(ventas);
      },
      error: (err) => {
        this.cargando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.errorMessage.set(detalle ?? "No se pudo cargar el historial. Int\xE9ntalo nuevamente.");
      }
    });
  }
  fecha(iso) {
    const fecha = new Date(iso);
    const dd = String(fecha.getDate()).padStart(2, "0");
    const mm = String(fecha.getMonth() + 1).padStart(2, "0");
    const hh = String(fecha.getHours()).padStart(2, "0");
    const min = String(fecha.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${fecha.getFullYear()} ${hh}:${min}`;
  }
  etiquetaTipo(tipo) {
    return tipo === "DIGITAL" ? "Digital" : "Presencial";
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
  static \u0275fac = function Historial_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Historial)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Historial, selectors: [["app-historial-cajero"]], decls: 14, vars: 1, consts: [[1, "cajero-content"], [1, "page-header"], [3, "filtrar"], ["role", "tablist", 1, "tabs-historial"], ["type", "button", "role", "tab", 1, "tab-historial", 3, "is-active"], [1, "ventas-lista"], [1, "state-block", "state-block--error"], [1, "state-block"], ["type", "button", "role", "tab", 1, "tab-historial", 3, "click"], [1, "skeleton-row"], [1, "state-block__title"], [1, "venta-row"], [1, "venta-row__encabezado"], [1, "venta-row__codigo"], [1, "venta-row__leyenda"], [1, "venta-row__datos"], [1, "venta-row__total"], [1, "venta-row__acciones"], [1, "btn", "btn--primary", "btn--sm", 3, "routerLink"]], template: function Historial_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Historial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Ventas realizadas en tu sucursal.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-filtro-historial", 2);
      \u0275\u0275listener("filtrar", function Historial_Template_app_filtro_historial_filtrar_6_listener($event) {
        return ctx.cargar($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275repeaterCreate(8, Historial_For_9_Template, 2, 4, "button", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, Historial_Conditional_10_Template, 3, 1, "div", 5)(11, Historial_Conditional_11_Template, 5, 1, "div", 6)(12, Historial_Conditional_12_Template, 3, 1, "div", 7)(13, Historial_Conditional_13_Template, 3, 0, "ul", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cargando() ? 10 : ctx.errorMessage() ? 11 : ctx.ventasFiltradas().length === 0 ? 12 : 13);
    }
  }, dependencies: [RouterLink, FiltroHistorial], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cajero-content[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.tabs-historial[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  width: fit-content;\n  max-width: 100%;\n  padding: 4px;\n  margin-bottom: 20px;\n  background: var(--%NS%color-bg);\n  border-radius: 999px;\n}\n.tab-historial[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 18px;\n  border-radius: 999px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  white-space: nowrap;\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.tab-historial[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-text);\n}\n.tab-historial.is-active[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n  box-shadow: var(--%NS%shadow-soft);\n}\n.ventas-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.venta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  padding: 15px 18px;\n  transition: box-shadow var(--%NS%transition-fast);\n}\n.venta-row[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--%NS%shadow-medium);\n}\n.venta-row__encabezado[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 150px;\n}\n.venta-row__codigo[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.01em;\n}\n.venta-row__leyenda[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n}\n.venta-row__datos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n  min-width: 200px;\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.venta-row__datos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "\\b7";\n  margin-left: 4px;\n  color: var(--%NS%color-border);\n}\n.venta-row__total[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  min-width: 90px;\n  text-align: right;\n}\n.venta-row__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.venta-row__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 84px;\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  height: 64px;\n  border-radius: var(--%NS%radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_historial-cajero-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_historial-cajero-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 720px) {\n  .tabs-historial[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tab-historial[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .venta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .venta-row__total[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .venta-row__acciones[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .venta-row__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=historial-6BBKWE6O.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Historial, [{
    type: Component,
    args: [{ selector: "app-historial-cajero", imports: [RouterLink, FiltroHistorial], template: `<div class="cajero-content">\r
  <div class="page-header">\r
    <h1>Historial</h1>\r
    <p>Ventas realizadas en tu sucursal.</p>\r
  </div>\r
\r
  <app-filtro-historial (filtrar)="cargar($event)" />\r
\r
  <div class="tabs-historial" role="tablist">\r
    @for (tab of tabs; track tab.key) {\r
      <button\r
        type="button"\r
        class="tab-historial"\r
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
    <div class="ventas-lista">\r
      @for (i of [1, 2, 3]; track i) {\r
        <div class="skeleton-row"></div>\r
      }\r
    </div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar el historial</span>\r
      <span>{{ errorMessage() }}</span>\r
    </div>\r
  } @else if (ventasFiltradas().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">{{ mensajeVacio }}</span>\r
    </div>\r
  } @else {\r
    <ul class="ventas-lista">\r
      @for (venta of ventasFiltradas(); track venta.venta_id) {\r
        <li class="venta-row">\r
          <div class="venta-row__encabezado">\r
            <span class="venta-row__codigo">{{ venta.codigo_venta }}</span>\r
            @if (venta.leyenda_postventa) {\r
              <span class="venta-row__leyenda">{{ venta.leyenda_postventa }}</span>\r
            }\r
          </div>\r
\r
          <div class="venta-row__datos">\r
            <span>{{ fecha(venta.fecha) }}</span>\r
            <span>{{ etiquetaTipo(venta.tipo) }}</span>\r
            @if (venta.cliente_nombre) {\r
              <span>{{ venta.cliente_nombre }}</span>\r
            }\r
            <span>{{ etiquetaMetodo(venta.metodo_pago) }}</span>\r
          </div>\r
\r
          <span class="venta-row__total">Bs {{ venta.total.toFixed(2) }}</span>\r
\r
          <div class="venta-row__acciones">\r
            <a [routerLink]="['/cajero/comprobante', venta.venta_id]" class="btn btn--primary btn--sm">Ver</a>\r
          </div>\r
        </li>\r
      }\r
    </ul>\r
  }\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/cajero/historial/historial.scss */\n:host {\n  display: block;\n}\n.cajero-content {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.tabs-historial {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  width: fit-content;\n  max-width: 100%;\n  padding: 4px;\n  margin-bottom: 20px;\n  background: var(--color-bg);\n  border-radius: 999px;\n}\n.tab-historial {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 18px;\n  border-radius: 999px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  white-space: nowrap;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.tab-historial:hover {\n  color: var(--color-text);\n}\n.tab-historial.is-active {\n  background: var(--color-primary);\n  color: var(--color-white);\n  box-shadow: var(--shadow-soft);\n}\n.ventas-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.venta-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  padding: 15px 18px;\n  transition: box-shadow var(--transition-fast);\n}\n.venta-row:hover {\n  box-shadow: var(--shadow-medium);\n}\n.venta-row__encabezado {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 150px;\n}\n.venta-row__codigo {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-primary);\n  letter-spacing: 0.01em;\n}\n.venta-row__leyenda {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n}\n.venta-row__datos {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n  min-width: 200px;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.venta-row__datos span:not(:last-child)::after {\n  content: "\\b7";\n  margin-left: 4px;\n  color: var(--color-border);\n}\n.venta-row__total {\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-text);\n  min-width: 90px;\n  text-align: right;\n}\n.venta-row__acciones {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.venta-row__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 84px;\n}\n.skeleton-row {\n  height: 64px;\n  border-radius: var(--radius-lg);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: historial-cajero-shimmer 1.4s ease infinite;\n}\n@keyframes historial-cajero-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 720px) {\n  .tabs-historial {\n    width: 100%;\n  }\n  .tab-historial {\n    flex: 1;\n  }\n  .venta-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .venta-row__total {\n    text-align: left;\n  }\n  .venta-row__acciones {\n    width: 100%;\n  }\n  .venta-row__acciones .btn {\n    width: 100%;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=historial-6BBKWE6O.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Historial, { className: "Historial", filePath: "src/app/features/cajero/historial/historial.ts", lineNumber: 54 });
})();
export {
  Historial
};
//# debugId=603bbbdd-6dab-54c9-8120-7b01f98257fc
//# sourceMappingURL=chunk-IP4MK5F7.js.map
