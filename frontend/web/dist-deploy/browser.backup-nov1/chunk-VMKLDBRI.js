import {
  PanelProveedorService
} from "./chunk-WFI6N5TU.js";
import {
  StatusBadge
} from "./chunk-RTXU4SY7.js";
import {
  ConfirmDialogService
} from "./chunk-COKUPLXV.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OB3O2VC6.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  HostListener,
  Input,
  Output,
  effect,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/proveedor/mis-productos/producto-editar-form/producto-editar-form.ts
var _forTrack0 = ($index, $item) => $item.color;
function ProductoEditarForm_Conditional_0_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(p_r3.imagen_url), \u0275\u0275sanitizeUrl);
  }
}
function ProductoEditarForm_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductoEditarForm_Conditional_0_Conditional_8_Conditional_0_Template, 1, 1, "img", 14);
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx;
    \u0275\u0275conditional(p_r3.imagen_url ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge--active", p_r3.estado === "APROBADO")("badge--inactive", p_r3.estado === "PENDIENTE")("badge--rechazado", p_r3.estado === "RECHAZADO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.estado === "APROBADO" ? "Aprobado por FashionStore" : p_r3.estado === "RECHAZADO" ? "Rechazado por FashionStore" : "Pendiente de aprobaci\xF3n", " ");
  }
}
function ProductoEditarForm_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function ProductoEditarForm_Conditional_0_Conditional_18_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grupo_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", grupo_r4.color, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", grupo_r4.tallas.join(", "), " ");
  }
}
function ProductoEditarForm_Conditional_0_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "Variantes aprobadas por FashionStore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, ProductoEditarForm_Conditional_0_Conditional_18_Conditional_0_For_5_Template, 4, 2, "div", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7, "Estas variantes las define FashionStore; no puedes modificarlas.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(p_r5.variantes);
  }
}
function ProductoEditarForm_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductoEditarForm_Conditional_0_Conditional_18_Conditional_0_Template, 8, 0, "div", 7);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.estado === "APROBADO" ? 0 : -1);
  }
}
function ProductoEditarForm_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ProductoEditarForm_Conditional_0_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function ProductoEditarForm_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ProductoEditarForm_Conditional_0_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar cambios", " ");
  }
}
function ProductoEditarForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ProductoEditarForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function ProductoEditarForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ProductoEditarForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function ProductoEditarForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275conditionalCreate(8, ProductoEditarForm_Conditional_0_Conditional_8_Template, 3, 8);
    \u0275\u0275elementStart(9, "label", 7)(10, "span", 8);
    \u0275\u0275text(11, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(13, ProductoEditarForm_Conditional_0_Conditional_13_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 7)(15, "span", 8);
    \u0275\u0275text(16, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "textarea", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProductoEditarForm_Conditional_0_Conditional_18_Template, 1, 1);
    \u0275\u0275elementStart(19, "footer", 12);
    \u0275\u0275conditionalCreate(20, ProductoEditarForm_Conditional_0_Conditional_20_Template, 2, 0, "button", 13)(21, ProductoEditarForm_Conditional_0_Conditional_21_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle del producto" : "Editar producto");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.producto()) ? 8 : -1, tmp_3_0);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.producto()) ? 18 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() || ctx_r1.producto()?.estado === "RECHAZADO" ? 20 : 21);
  }
}
var ProductoEditarForm = class _ProductoEditarForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  producto = input(
    null,
    ...ngDevMode ? [{ debugName: "producto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  readonly = input(
    false,
    ...ngDevMode ? [{ debugName: "readonly" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitting = input(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  save = output();
  close = output();
  resolveMediaUrl = resolveMediaUrl;
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.maxLength(150)]],
    descripcion: [""]
  });
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const producto = this.producto();
      if (producto) {
        this.form.reset({ nombre: producto.nombre, descripcion: producto.descripcion ?? "" }, { emitEvent: false });
      } else {
        this.form.reset({ nombre: "", descripcion: "" }, { emitEvent: false });
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  submit() {
    if (this.readonly()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.save.emit({
      nombre: value.nombre.trim(),
      descripcion: value.descripcion.trim() || null
    });
  }
  static \u0275fac = function ProductoEditarForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductoEditarForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductoEditarForm, selectors: [["app-producto-editar-form"]], inputs: { open: [1, "open"], producto: [1, "producto"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Chaqueta Denim"], [1, "field__error"], ["formControlName", "descripcion", "rows", "3", "placeholder", "Opcional"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["alt", "", 1, "drawer__imagen", 3, "src"], [1, "badge"], [1, "variantes-aprobadas"], [1, "variantes-aprobadas__linea"], [1, "field__hint"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function ProductoEditarForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProductoEditarForm_Conditional_0_Template, 22, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.drawer__imagen[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 160px;\n  height: 160px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--%NS%color-border);\n  align-self: flex-start;\n}\n.variantes-aprobadas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-bg);\n}\n.variantes-aprobadas__linea[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.badge--rechazado[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-danger) 12%, white);\n  color: var(--%NS%color-danger);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n/*# sourceMappingURL=producto-editar-form-R344HF6D.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductoEditarForm, [{
    type: Component,
    args: [{ selector: "app-producto-editar-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle del producto' : 'Editar producto' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        @if (producto(); as p) {\r
          @if (p.imagen_url) {\r
            <img [src]="resolveMediaUrl(p.imagen_url)" alt="" class="drawer__imagen" />\r
          }\r
\r
          <span\r
            class="badge"\r
            [class.badge--active]="p.estado === 'APROBADO'"\r
            [class.badge--inactive]="p.estado === 'PENDIENTE'"\r
            [class.badge--rechazado]="p.estado === 'RECHAZADO'"\r
          >\r
            {{\r
              p.estado === 'APROBADO'\r
                ? 'Aprobado por FashionStore'\r
                : p.estado === 'RECHAZADO'\r
                  ? 'Rechazado por FashionStore'\r
                  : 'Pendiente de aprobaci\xF3n'\r
            }}\r
          </span>\r
        }\r
\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Chaqueta Denim" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
\r
        <label class="field">\r
          <span class="field__label">Descripci\xF3n</span>\r
          <textarea formControlName="descripcion" rows="3" placeholder="Opcional"></textarea>\r
        </label>\r
\r
        @if (producto(); as p) {\r
          @if (p.estado === 'APROBADO') {\r
            <div class="field">\r
              <span class="field__label">Variantes aprobadas por FashionStore</span>\r
              <div class="variantes-aprobadas">\r
                @for (grupo of p.variantes; track grupo.color) {\r
                  <div class="variantes-aprobadas__linea">\r
                    <strong>{{ grupo.color }}:</strong> {{ grupo.tallas.join(', ') }}\r
                  </div>\r
                }\r
              </div>\r
              <span class="field__hint">Estas variantes las define FashionStore; no puedes modificarlas.</span>\r
            </div>\r
          }\r
        }\r
\r
        <footer class="drawer__footer">\r
          @if (readonly() || producto()?.estado === 'RECHAZADO') {\r
            <button type="button" class="btn btn--ghost" (click)="close.emit()">Cerrar</button>\r
          } @else {\r
            <button type="button" class="btn btn--ghost" (click)="close.emit()" [disabled]="submitting()">\r
              Cancelar\r
            </button>\r
            <button type="submit" class="btn btn--primary" [disabled]="submitting()">\r
              {{ submitting() ? 'Guardando\u2026' : 'Guardar cambios' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/features/proveedor/mis-productos/producto-editar-form/producto-editar-form.scss */\n:host {\n  display: contents;\n}\n.drawer__imagen {\n  width: 100%;\n  max-width: 160px;\n  height: 160px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--color-border);\n  align-self: flex-start;\n}\n.variantes-aprobadas {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg);\n}\n.variantes-aprobadas__linea {\n  font-size: 13px;\n  color: var(--color-text);\n}\n.badge--rechazado {\n  background: color-mix(in srgb, var(--color-danger) 12%, white);\n  color: var(--color-danger);\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=producto-editar-form-R344HF6D.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], producto: [{ type: Input, args: [{ isSignal: true, alias: "producto", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductoEditarForm, { className: "ProductoEditarForm", filePath: "src/app/features/proveedor/mis-productos/producto-editar-form/producto-editar-form.ts", lineNumber: 23 });
})();

// src/app/features/proveedor/mis-productos/mis-productos.ts
var _forTrack02 = ($index, $item) => $item.id;
function MisProductos_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 12)(2, "div", 12)(3, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function MisProductos_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 13);
    \u0275\u0275text(2, "No se pudieron cargar tus productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function MisProductos_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
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
function MisProductos_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 13);
    \u0275\u0275text(2, "A\xFAn no enviaste productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, 'Usa "Enviar producto" en el men\xFA para registrar la primera prenda.');
    \u0275\u0275elementEnd()();
  }
}
function MisProductos_Conditional_18_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(producto_r4.imagen_url), \u0275\u0275sanitizeUrl);
  }
}
function MisProductos_Conditional_18_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-icon", 25);
    \u0275\u0275elementEnd();
  }
}
function MisProductos_Conditional_18_For_16_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function MisProductos_Conditional_18_For_16_Conditional_17_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const producto_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(producto_r4));
    });
    \u0275\u0275element(1, "app-icon", 31);
    \u0275\u0275text(2, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function MisProductos_Conditional_18_For_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function MisProductos_Conditional_18_For_16_Conditional_17_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 27);
    \u0275\u0275listener("click", function MisProductos_Conditional_18_For_16_Conditional_17_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const producto_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(producto_r4, $event));
    });
    \u0275\u0275element(2, "app-icon", 28);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MisProductos_Conditional_18_For_16_Conditional_17_Conditional_4_Template, 3, 0, "button", 29);
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function MisProductos_Conditional_18_For_16_Conditional_17_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const producto_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(producto_r4, $event));
    });
    \u0275\u0275element(6, "app-icon", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275conditional(producto_r4.estado !== "RECHAZADO" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("row-actions__item--danger", producto_r4.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", producto_r4.is_active ? "Desactivar" : "Activar", " ");
  }
}
function MisProductos_Conditional_18_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, MisProductos_Conditional_18_For_16_Conditional_2_Template, 1, 1, "img", 16)(3, MisProductos_Conditional_18_For_16_Conditional_3_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "app-status-badge", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "app-status-badge", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 21)(15, "button", 22);
    \u0275\u0275listener("click", function MisProductos_Conditional_18_For_16_Template_button_click_15_listener($event) {
      const producto_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(producto_r4.id, $event));
    });
    \u0275\u0275element(16, "app-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, MisProductos_Conditional_18_For_16_Conditional_17_Template, 8, 4, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const producto_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(producto_r4.imagen_url ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", producto_r4.disponibilidad);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--active", producto_r4.estado === "APROBADO")("badge--inactive", producto_r4.estado === "PENDIENTE")("badge--rechazado", producto_r4.estado === "RECHAZADO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", producto_r4.estado === "APROBADO" ? "Aprobado" : producto_r4.estado === "RECHAZADO" ? "Rechazado" : "Pendiente", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("active", producto_r4.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === producto_r4.id ? 17 : -1);
  }
}
function MisProductos_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 15)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th");
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Disponibilidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Aprobaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, MisProductos_Conditional_18_For_16_Template, 18, 12, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.productosFiltrados);
  }
}
var MisProductos = class _MisProductos {
  panelService = inject(PanelProveedorService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  resolveMediaUrl = resolveMediaUrl;
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
  statusFilter = signal(
    "all",
    ...ngDevMode ? [{ debugName: "statusFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  drawerOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "drawerOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingProducto = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingProducto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  viewMode = signal(
    false,
    ...ngDevMode ? [{ debugName: "viewMode" }] : (
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
  openMenuId = signal(
    null,
    ...ngDevMode ? [{ debugName: "openMenuId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.load();
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  get productosFiltrados() {
    const estado = this.statusFilter();
    if (estado === "all") {
      return this.productos();
    }
    const activo = estado === "active";
    return this.productos().filter((p) => p.is_active === activo);
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.panelService.misProductos().subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.productos.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openEdit(producto) {
    this.openMenuId.set(null);
    this.editingProducto.set(producto);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(producto, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingProducto.set(producto);
    this.viewMode.set(true);
    this.drawerOpen.set(true);
  }
  closeDrawer() {
    this.drawerOpen.set(false);
  }
  toggleMenu(id, event) {
    event.stopPropagation();
    this.openMenuId.set(this.openMenuId() === id ? null : id);
  }
  save(payload) {
    const editing = this.editingProducto();
    if (!editing) {
      return;
    }
    this.submitting.set(true);
    this.panelService.actualizarProducto(editing.id, payload).subscribe({
      next: () => {
        this.submitting.set(false);
        this.drawerOpen.set(false);
        this.toast.success("Producto actualizado correctamente.");
        this.load();
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Esta propuesta fue rechazada y ya no se puede modificar.");
          this.drawerOpen.set(false);
          this.load();
        } else {
          this.toast.error("No se pudo guardar el producto. Intenta nuevamente.");
        }
      }
    });
  }
  async toggleStatus(producto, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (producto.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar producto?",
        message: `${producto.nombre} dejar\xE1 de mostrarse como enviado.`,
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.panelService.cambiarEstado(producto.id, !producto.is_active).subscribe({
      next: () => {
        this.toast.success(producto.is_active ? "Producto desactivado." : "Producto activado correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado del producto.")
    });
  }
  static \u0275fac = function MisProductos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisProductos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisProductos, selectors: [["app-mis-productos"]], hostBindings: function MisProductos_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MisProductos_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 20, vars: 6, consts: [[1, "admin-card", "section"], [1, "section__header"], [1, "table-toolbar", "section__toolbar"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "producto", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], ["alt", "", 1, "producto-thumb", 3, "src"], [1, "producto-thumb", "producto-thumb--placeholder"], [1, "cell-title"], [3, "active"], [1, "badge"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], ["name", "products", 2, "width", "16px", "height", "16px"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["type", "button", 1, "row-actions__item"], ["name", "power"], ["name", "edit"]], template: function MisProductos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Mis productos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Consulta el estado de las prendas que enviaste a FashionStore.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 2)(8, "select", 3);
      \u0275\u0275listener("ngModelChange", function MisProductos_Template_select_ngModelChange_8_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(9, "option", 4);
      \u0275\u0275text(10, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 5);
      \u0275\u0275text(12, "Activos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 6);
      \u0275\u0275text(14, "Inactivos");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, MisProductos_Conditional_15_Template, 4, 0, "div", 7)(16, MisProductos_Conditional_16_Template, 7, 1, "div", 8)(17, MisProductos_Conditional_17_Template, 5, 0, "div", 9)(18, MisProductos_Conditional_18_Template, 17, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-producto-editar-form", 11);
      \u0275\u0275listener("save", function MisProductos_Template_app_producto_editar_form_save_19_listener($event) {
        return ctx.save($event);
      })("close", function MisProductos_Template_app_producto_editar_form_close_19_listener() {
        return ctx.closeDrawer();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.statusFilter());
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 15 : ctx.errorMessage() ? 16 : ctx.productosFiltrados.length === 0 ? 17 : 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("producto", ctx.editingProducto())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, ProductoEditarForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.producto-thumb[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  background: var(--%NS%color-card-bg);\n}\n.producto-thumb--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.badge--rechazado[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-danger) 12%, white);\n  color: var(--%NS%color-danger);\n}\n/*# sourceMappingURL=mis-productos-EWGZHQ3T.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisProductos, [{
    type: Component,
    args: [{ selector: "app-mis-productos", imports: [FormsModule, Icon, StatusBadge, ProductoEditarForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Mis productos</h3>\r
      <p>Consulta el estado de las prendas que enviaste a FashionStore.</p>\r
    </div>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <select\r
      class="status-select"\r
      [ngModel]="statusFilter()"\r
      (ngModelChange)="onStatusFilterChange($event)"\r
    >\r
      <option value="all">Todos los estados</option>\r
      <option value="active">Activos</option>\r
      <option value="inactive">Inactivos</option>\r
    </select>\r
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
      <span class="state-block__title">No se pudieron cargar tus productos</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (productosFiltrados.length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no enviaste productos</span>\r
      <span>Usa "Enviar producto" en el men\xFA para registrar la primera prenda.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th></th>\r
            <th>Nombre</th>\r
            <th>Disponibilidad</th>\r
            <th>Aprobaci\xF3n</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (producto of productosFiltrados; track producto.id) {\r
            <tr>\r
              <td>\r
                @if (producto.imagen_url) {\r
                  <img [src]="resolveMediaUrl(producto.imagen_url)" alt="" class="producto-thumb" />\r
                } @else {\r
                  <div class="producto-thumb producto-thumb--placeholder">\r
                    <app-icon name="products" style="width: 16px; height: 16px" />\r
                  </div>\r
                }\r
              </td>\r
              <td class="cell-title">{{ producto.nombre }}</td>\r
              <td>\r
                <app-status-badge [active]="producto.disponibilidad" />\r
              </td>\r
              <td>\r
                <span\r
                  class="badge"\r
                  [class.badge--active]="producto.estado === 'APROBADO'"\r
                  [class.badge--inactive]="producto.estado === 'PENDIENTE'"\r
                  [class.badge--rechazado]="producto.estado === 'RECHAZADO'"\r
                >\r
                  {{\r
                    producto.estado === 'APROBADO'\r
                      ? 'Aprobado'\r
                      : producto.estado === 'RECHAZADO'\r
                        ? 'Rechazado'\r
                        : 'Pendiente'\r
                  }}\r
                </span>\r
              </td>\r
              <td><app-status-badge [active]="producto.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(producto.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === producto.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(producto, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      @if (producto.estado !== 'RECHAZADO') {\r
                        <button type="button" class="row-actions__item" (click)="openEdit(producto)">\r
                          <app-icon name="edit" /> Editar\r
                        </button>\r
                      }\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="producto.is_active"\r
                        (click)="toggleStatus(producto, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ producto.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                    </div>\r
                  }\r
                </div>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
</section>\r
\r
<app-producto-editar-form\r
  [open]="drawerOpen()"\r
  [producto]="editingProducto()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ["/* src/app/features/proveedor/mis-productos/mis-productos.scss */\n:host {\n  display: block;\n}\n.producto-thumb {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  background: var(--color-card-bg);\n}\n.producto-thumb--placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.badge--rechazado {\n  background: color-mix(in srgb, var(--color-danger) 12%, white);\n  color: var(--color-danger);\n}\n/*# sourceMappingURL=mis-productos-EWGZHQ3T.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisProductos, { className: "MisProductos", filePath: "src/app/features/proveedor/mis-productos/mis-productos.ts", lineNumber: 20 });
})();
export {
  MisProductos
};
//# debugId=a3f4acc7-0ccb-535b-b362-43141b55e274
//# sourceMappingURL=chunk-VMKLDBRI.js.map
