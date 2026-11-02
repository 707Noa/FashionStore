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
  Output,
  computed,
  inject,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵtext
} from "./chunk-PNHCNXB7.js";

// src/app/features/historial-compras/filtro-historial/filtro-historial.ts
function FiltroHistorial_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1, '"Desde" no puede ser posterior a "Hasta".');
    \u0275\u0275domElementEnd();
  }
}
var FiltroHistorial = class _FiltroHistorial {
  filtrar = output();
  desde = signal(
    "",
    ...ngDevMode ? [{ debugName: "desde" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasta = signal(
    "",
    ...ngDevMode ? [{ debugName: "hasta" }] : (
      /* istanbul ignore next */
      []
    )
  );
  codigo = signal(
    "",
    ...ngDevMode ? [{ debugName: "codigo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rangoInvalido = computed(
    () => {
      const desde = this.desde();
      const hasta = this.hasta();
      return !!desde && !!hasta && desde > hasta;
    },
    ...ngDevMode ? [{ debugName: "rangoInvalido" }] : (
      /* istanbul ignore next */
      []
    )
  );
  actualizarDesde(valor) {
    this.desde.set(valor);
  }
  actualizarHasta(valor) {
    this.hasta.set(valor);
  }
  actualizarCodigo(valor) {
    this.codigo.set(valor.toUpperCase());
  }
  aplicar() {
    if (this.rangoInvalido()) {
      return;
    }
    this.filtrar.emit({
      desde: this.desde() || void 0,
      hasta: this.hasta() || void 0,
      codigo_venta: this.codigo().trim() || void 0
    });
  }
  limpiar() {
    this.desde.set("");
    this.hasta.set("");
    this.codigo.set("");
    this.filtrar.emit({});
  }
  static \u0275fac = function FiltroHistorial_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FiltroHistorial)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FiltroHistorial, selectors: [["app-filtro-historial"]], outputs: { filtrar: "filtrar" }, decls: 19, vars: 5, consts: [[1, "filtro-historial"], [1, "campo"], [1, "campo__label"], ["type", "date", 1, "campo__input", 3, "input", "value"], [1, "campo", "campo--codigo"], ["type", "text", "placeholder", "VT-00000", 1, "campo__input", 3, "input", "keyup.enter", "value"], [1, "filtro-historial__acciones"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "filtro-historial__error"]], template: function FiltroHistorial_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "label", 1)(2, "span", 2);
      \u0275\u0275text(3, "Desde");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "input", 3);
      \u0275\u0275domListener("input", function FiltroHistorial_Template_input_input_4_listener($event) {
        return ctx.actualizarDesde($event.target.value);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "label", 1)(6, "span", 2);
      \u0275\u0275text(7, "Hasta");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "input", 3);
      \u0275\u0275domListener("input", function FiltroHistorial_Template_input_input_8_listener($event) {
        return ctx.actualizarHasta($event.target.value);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "label", 4)(10, "span", 2);
      \u0275\u0275text(11, "C\xF3digo");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "input", 5);
      \u0275\u0275domListener("input", function FiltroHistorial_Template_input_input_12_listener($event) {
        return ctx.actualizarCodigo($event.target.value);
      })("keyup.enter", function FiltroHistorial_Template_input_keyup_enter_12_listener() {
        return ctx.aplicar();
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 6)(14, "button", 7);
      \u0275\u0275domListener("click", function FiltroHistorial_Template_button_click_14_listener() {
        return ctx.aplicar();
      });
      \u0275\u0275text(15, " Filtrar ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "button", 8);
      \u0275\u0275domListener("click", function FiltroHistorial_Template_button_click_16_listener() {
        return ctx.limpiar();
      });
      \u0275\u0275text(17, "Limpiar");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(18, FiltroHistorial_Conditional_18_Template, 2, 0, "span", 9);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.desde());
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.hasta());
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.codigo());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", ctx.rangoInvalido());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.rangoInvalido() ? 18 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.filtro-historial[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  gap: 14px;\n  padding: 16px;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-soft);\n  margin-bottom: 20px;\n}\n.campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 140px;\n}\n.campo--codigo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.campo__label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-text-secondary);\n}\n.campo__input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  font-size: 13.5px;\n  color: var(--%NS%color-text);\n}\n.campo__input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.filtro-historial__acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.filtro-historial__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n}\n.filtro-historial__error[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-danger);\n}\n@media (max-width: 720px) {\n  .filtro-historial[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .campo[_ngcontent-%COMP%], \n   .campo--codigo[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n  .filtro-historial__acciones[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filtro-historial__acciones[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=filtro-historial-47KIDIUN.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltroHistorial, [{
    type: Component,
    args: [{ selector: "app-filtro-historial", imports: [], template: '<div class="filtro-historial">\r\n  <label class="campo">\r\n    <span class="campo__label">Desde</span>\r\n    <input\r\n      type="date"\r\n      class="campo__input"\r\n      [value]="desde()"\r\n      (input)="actualizarDesde($any($event.target).value)"\r\n    />\r\n  </label>\r\n\r\n  <label class="campo">\r\n    <span class="campo__label">Hasta</span>\r\n    <input\r\n      type="date"\r\n      class="campo__input"\r\n      [value]="hasta()"\r\n      (input)="actualizarHasta($any($event.target).value)"\r\n    />\r\n  </label>\r\n\r\n  <label class="campo campo--codigo">\r\n    <span class="campo__label">C\xF3digo</span>\r\n    <input\r\n      type="text"\r\n      class="campo__input"\r\n      placeholder="VT-00000"\r\n      [value]="codigo()"\r\n      (input)="actualizarCodigo($any($event.target).value)"\r\n      (keyup.enter)="aplicar()"\r\n    />\r\n  </label>\r\n\r\n  <div class="filtro-historial__acciones">\r\n    <button type="button" class="btn btn--primary btn--sm" [disabled]="rangoInvalido()" (click)="aplicar()">\r\n      Filtrar\r\n    </button>\r\n    <button type="button" class="btn btn--ghost btn--sm" (click)="limpiar()">Limpiar</button>\r\n  </div>\r\n\r\n  @if (rangoInvalido()) {\r\n    <span class="filtro-historial__error">"Desde" no puede ser posterior a "Hasta".</span>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/features/historial-compras/filtro-historial/filtro-historial.scss */\n:host {\n  display: block;\n}\n.filtro-historial {\n  display: flex;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  gap: 14px;\n  padding: 16px;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-soft);\n  margin-bottom: 20px;\n}\n.campo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 140px;\n}\n.campo--codigo {\n  flex: 1;\n  min-width: 160px;\n}\n.campo__label {\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-secondary);\n}\n.campo__input {\n  padding: 9px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  font-size: 13.5px;\n  color: var(--color-text);\n}\n.campo__input:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.filtro-historial__acciones {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.filtro-historial__acciones .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n}\n.filtro-historial__error {\n  flex-basis: 100%;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-danger);\n}\n@media (max-width: 720px) {\n  .filtro-historial {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .campo,\n  .campo--codigo {\n    min-width: 0;\n    width: 100%;\n  }\n  .filtro-historial__acciones {\n    width: 100%;\n  }\n  .filtro-historial__acciones .btn {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=filtro-historial-47KIDIUN.css.map */\n"] }]
  }], null, { filtrar: [{ type: Output, args: ["filtrar"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FiltroHistorial, { className: "FiltroHistorial", filePath: "src/app/features/historial-compras/filtro-historial/filtro-historial.ts", lineNumber: 18 });
})();

// src/app/features/historial-compras/historial-compras.service.ts
var HistorialComprasService = class _HistorialComprasService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/historial-compras`;
  construirParams(filtro) {
    let params = new HttpParams();
    if (filtro.desde) {
      params = params.set("desde", filtro.desde);
    }
    if (filtro.hasta) {
      params = params.set("hasta", filtro.hasta);
    }
    if (filtro.codigo_venta) {
      params = params.set("codigo_venta", filtro.codigo_venta);
    }
    return params;
  }
  listarMias(filtro) {
    return this.http.get(`${this.baseUrl}/mias`, { params: this.construirParams(filtro) });
  }
  listarSucursal(filtro) {
    return this.http.get(`${this.baseUrl}/sucursal`, {
      params: this.construirParams(filtro)
    });
  }
  static \u0275fac = function HistorialComprasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistorialComprasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistorialComprasService, factory: _HistorialComprasService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistorialComprasService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FiltroHistorial,
  HistorialComprasService
};
//# debugId=11e1cfa6-2c48-5af2-aac3-bad2fe2094a5
//# sourceMappingURL=chunk-5TYRBE3O.js.map
