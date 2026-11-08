import {
  PanelProveedorService
} from "./chunk-WFI6N5TU.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/proveedor/disponibilidad/disponibilidad.ts
var _forTrack0 = ($index, $item) => $item.id;
function Disponibilidad_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domElement(1, "div", 6)(2, "div", 6)(3, "div", 6);
    \u0275\u0275domElementEnd();
  }
}
function Disponibilidad_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 3)(1, "span", 7);
    \u0275\u0275text(2, "No se pudo cargar la disponibilidad");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 8);
    \u0275\u0275domListener("click", function Disponibilidad_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function Disponibilidad_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "No tienes productos activos");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Env\xEDa un producto para poder informar su disponibilidad.");
    \u0275\u0275domElementEnd()();
  }
}
function Disponibilidad_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "label", 13)(7, "input", 14);
    \u0275\u0275domListener("change", function Disponibilidad_Conditional_10_For_2_Template_input_change_7_listener() {
      const producto_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle(producto_r4));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 15);
    \u0275\u0275domElement(9, "span", 16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const producto_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", producto_r4.estado === "APROBADO" ? "Aprobado por FashionStore" : "Pendiente de aprobaci\xF3n", " ");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("checked", producto_r4.disponibilidad)("disabled", ctx_r1.savingId() === producto_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(producto_r4.disponibilidad ? "Disponible" : "No disponible");
  }
}
function Disponibilidad_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 5);
    \u0275\u0275repeaterCreate(1, Disponibilidad_Conditional_10_For_2_Template, 12, 5, "li", 9, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.productos());
  }
}
var Disponibilidad = class _Disponibilidad {
  panelService = inject(PanelProveedorService);
  toast = inject(ToastService);
  productos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
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
  savingId = signal(
    null,
    ...ngDevMode ? [{ debugName: "savingId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.panelService.misProductos().subscribe({
      next: (productos) => {
        this.productos.set(productos.filter((p) => p.is_active && p.estado !== "RECHAZADO"));
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  toggle(producto) {
    this.savingId.set(producto.id);
    this.panelService.cambiarDisponibilidad(producto.id, !producto.disponibilidad).subscribe({
      next: (actualizado) => {
        this.savingId.set(null);
        this.productos.update((lista) => lista.map((p) => p.id === actualizado.id ? actualizado : p));
        this.toast.success(actualizado.disponibilidad ? "Marcado como disponible." : "Marcado como no disponible.");
      },
      error: () => {
        this.savingId.set(null);
        this.toast.error("No se pudo actualizar la disponibilidad.");
      }
    });
  }
  static \u0275fac = function Disponibilidad_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Disponibilidad)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Disponibilidad, selectors: [["app-disponibilidad"]], decls: 11, vars: 1, consts: [[1, "admin-card", "section"], [1, "section__header"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "disponibilidad-list"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "disponibilidad-item"], [1, "disponibilidad-item__info"], [1, "disponibilidad-item__nombre"], [1, "disponibilidad-item__meta"], [1, "switch"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"]], template: function Disponibilidad_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Disponibilidad");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p");
      \u0275\u0275text(6, "Informa qu\xE9 prendas tienes disponibles actualmente para FashionStore.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(7, Disponibilidad_Conditional_7_Template, 4, 0, "div", 2)(8, Disponibilidad_Conditional_8_Template, 7, 1, "div", 3)(9, Disponibilidad_Conditional_9_Template, 5, 0, "div", 4)(10, Disponibilidad_Conditional_10_Template, 3, 0, "ul", 5);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 7 : ctx.errorMessage() ? 8 : ctx.productos().length === 0 ? 9 : 10);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.disponibilidad-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 16px;\n  list-style: none;\n  padding: 0;\n}\n.disponibilidad-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 16px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  flex-wrap: wrap;\n}\n.disponibilidad-item__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.disponibilidad-item__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.disponibilidad-item__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n/*# sourceMappingURL=disponibilidad-JN6AJASY.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Disponibilidad, [{
    type: Component,
    args: [{ selector: "app-disponibilidad", imports: [], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Disponibilidad</h3>\r
      <p>Informa qu\xE9 prendas tienes disponibles actualmente para FashionStore.</p>\r
    </div>\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="section__body">\r
      <div class="skeleton-row"></div>\r
      <div class="skeleton-row"></div>\r
      <div class="skeleton-row"></div>\r
    </div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar la disponibilidad</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (productos().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">No tienes productos activos</span>\r
      <span>Env\xEDa un producto para poder informar su disponibilidad.</span>\r
    </div>\r
  } @else {\r
    <ul class="disponibilidad-list">\r
      @for (producto of productos(); track producto.id) {\r
        <li class="disponibilidad-item">\r
          <div class="disponibilidad-item__info">\r
            <span class="disponibilidad-item__nombre">{{ producto.nombre }}</span>\r
            <span class="disponibilidad-item__meta">\r
              {{ producto.estado === 'APROBADO' ? 'Aprobado por FashionStore' : 'Pendiente de aprobaci\xF3n' }}\r
            </span>\r
          </div>\r
          <label class="switch">\r
            <input\r
              type="checkbox"\r
              [checked]="producto.disponibilidad"\r
              [disabled]="savingId() === producto.id"\r
              (change)="toggle(producto)"\r
            />\r
            <span class="switch__track"><span class="switch__thumb"></span></span>\r
            <span class="switch__text">{{ producto.disponibilidad ? 'Disponible' : 'No disponible' }}</span>\r
          </label>\r
        </li>\r
      }\r
    </ul>\r
  }\r
</section>\r
`, styles: ["/* src/app/features/proveedor/disponibilidad/disponibilidad.scss */\n:host {\n  display: block;\n}\n.disponibilidad-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 16px;\n  list-style: none;\n  padding: 0;\n}\n.disponibilidad-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n}\n.disponibilidad-item__info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.disponibilidad-item__nombre {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.disponibilidad-item__meta {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=disponibilidad-JN6AJASY.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Disponibilidad, { className: "Disponibilidad", filePath: "src/app/features/proveedor/disponibilidad/disponibilidad.ts", lineNumber: 12 });
})();
export {
  Disponibilidad
};
//# debugId=89a28073-f22d-5395-aaa7-01c2971d12cb
//# sourceMappingURL=chunk-AAI56I5K.js.map
