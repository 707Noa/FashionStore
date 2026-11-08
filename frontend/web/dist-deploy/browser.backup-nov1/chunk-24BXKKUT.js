import {
  ProveedorService
} from "./chunk-K5FC2FCH.js";
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
  CheckboxControlValueAccessor,
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
  forkJoin,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/sucursales-catalogo/gestion-proveedores/proveedor-form/proveedor-form.ts
function ProveedorForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "La raz\xF3n social es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function ProveedorForm_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre de contacto es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function ProveedorForm_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function ProveedorForm_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function ProveedorForm_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Ingresa un tel\xE9fono v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function ProveedorForm_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ProveedorForm_Conditional_0_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function ProveedorForm_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ProveedorForm_Conditional_0_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar proveedor", " ");
  }
}
function ProveedorForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ProveedorForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function ProveedorForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ProveedorForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function ProveedorForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Raz\xF3n social *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, ProveedorForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 7)(14, "span", 8);
    \u0275\u0275text(15, "Nombre de contacto *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(17, ProveedorForm_Conditional_0_Conditional_17_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12)(19, "label", 7)(20, "span", 8);
    \u0275\u0275text(21, "Correo *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(23, ProveedorForm_Conditional_0_Conditional_23_Template, 2, 0, "span", 10)(24, ProveedorForm_Conditional_0_Conditional_24_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 7)(26, "span", 8);
    \u0275\u0275text(27, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(29, ProveedorForm_Conditional_0_Conditional_29_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 15)(31, "span", 8);
    \u0275\u0275text(32, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 16);
    \u0275\u0275element(34, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(35, "span", 18);
    \u0275\u0275element(36, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 20);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "footer", 21);
    \u0275\u0275conditionalCreate(40, ProveedorForm_Conditional_0_Conditional_40_Template, 2, 0, "button", 22)(41, ProveedorForm_Conditional_0_Conditional_41_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de proveedor" : ctx_r1.isEditMode ? "Editar proveedor" : "Nuevo proveedor");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.razon_social.invalid && ctx_r1.form.controls.razon_social.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.razon_social.invalid && ctx_r1.form.controls.razon_social.touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre_contacto.invalid && ctx_r1.form.controls.nombre_contacto.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre_contacto.invalid && ctx_r1.form.controls.nombre_contacto.touched ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.correo.invalid && ctx_r1.form.controls.correo.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.correo.hasError("required") && ctx_r1.form.controls.correo.touched ? 23 : ctx_r1.form.controls.correo.hasError("email") && ctx_r1.form.controls.correo.touched ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.telefono.invalid && ctx_r1.form.controls.telefono.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.telefono.invalid && ctx_r1.form.controls.telefono.touched ? 29 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activo" : "Inactivo");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 40 : 41);
  }
}
var TELEFONO_PATTERN = /^[0-9+\-\s()]{6,20}$/;
var ProveedorForm = class _ProveedorForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  proveedor = input(
    null,
    ...ngDevMode ? [{ debugName: "proveedor" }] : (
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
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    razon_social: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    nombre_contacto: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    correo: ["", [Validators.required, Validators.email]],
    telefono: ["", [Validators.required, Validators.pattern(TELEFONO_PATTERN)]],
    is_active: [true]
  });
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const proveedor = this.proveedor();
      if (proveedor) {
        this.form.reset({
          razon_social: proveedor.razon_social,
          nombre_contacto: proveedor.nombre_contacto,
          correo: proveedor.correo,
          telefono: proveedor.telefono,
          is_active: proveedor.is_active
        });
      } else {
        this.form.reset({
          razon_social: "",
          nombre_contacto: "",
          correo: "",
          telefono: "",
          is_active: true
        });
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.proveedor() !== null;
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
      razon_social: value.razon_social.trim(),
      nombre_contacto: value.nombre_contacto.trim(),
      correo: value.correo.trim().toLowerCase(),
      telefono: value.telefono.trim(),
      is_active: value.is_active
    });
  }
  static \u0275fac = function ProveedorForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProveedorForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProveedorForm, selectors: [["app-proveedor-form"]], inputs: { open: [1, "open"], proveedor: [1, "proveedor"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "razon_social", "placeholder", "Ej. Textiles Andinos S.R.L."], [1, "field__error"], ["type", "text", "formControlName", "nombre_contacto", "placeholder", "Ej. Juan P\xE9rez"], [1, "field-row"], ["type", "email", "formControlName", "correo", "placeholder", "contacto@proveedor.com"], ["type", "text", "formControlName", "telefono", "placeholder", "Ej. 70012345"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function ProveedorForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProveedorForm_Conditional_0_Template, 42, 16, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n@media (max-width: 420px) {\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 18px;\n  }\n}\n/*# sourceMappingURL=proveedor-form-FRWCSYNH.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProveedorForm, [{
    type: Component,
    args: [{ selector: "app-proveedor-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de proveedor' : isEditMode ? 'Editar proveedor' : 'Nuevo proveedor' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label\r
          class="field"\r
          [class.has-error]="form.controls.razon_social.invalid && form.controls.razon_social.touched"\r
        >\r
          <span class="field__label">Raz\xF3n social *</span>\r
          <input type="text" formControlName="razon_social" placeholder="Ej. Textiles Andinos S.R.L." />\r
          @if (form.controls.razon_social.invalid && form.controls.razon_social.touched) {\r
            <span class="field__error">La raz\xF3n social es obligatoria.</span>\r
          }\r
        </label>\r
\r
        <label\r
          class="field"\r
          [class.has-error]="form.controls.nombre_contacto.invalid && form.controls.nombre_contacto.touched"\r
        >\r
          <span class="field__label">Nombre de contacto *</span>\r
          <input type="text" formControlName="nombre_contacto" placeholder="Ej. Juan P\xE9rez" />\r
          @if (form.controls.nombre_contacto.invalid && form.controls.nombre_contacto.touched) {\r
            <span class="field__error">El nombre de contacto es obligatorio.</span>\r
          }\r
        </label>\r
\r
        <div class="field-row">\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.correo.invalid && form.controls.correo.touched"\r
          >\r
            <span class="field__label">Correo *</span>\r
            <input type="email" formControlName="correo" placeholder="contacto@proveedor.com" />\r
            @if (form.controls.correo.hasError('required') && form.controls.correo.touched) {\r
              <span class="field__error">El correo es obligatorio.</span>\r
            } @else if (form.controls.correo.hasError('email') && form.controls.correo.touched) {\r
              <span class="field__error">Ingresa un correo v\xE1lido.</span>\r
            }\r
          </label>\r
\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.telefono.invalid && form.controls.telefono.touched"\r
          >\r
            <span class="field__label">Tel\xE9fono *</span>\r
            <input type="text" formControlName="telefono" placeholder="Ej. 70012345" />\r
            @if (form.controls.telefono.invalid && form.controls.telefono.touched) {\r
              <span class="field__error">Ingresa un tel\xE9fono v\xE1lido.</span>\r
            }\r
          </label>\r
        </div>\r
\r
        <label class="field field--switch">\r
          <span class="field__label">Estado</span>\r
          <span class="switch">\r
            <input type="checkbox" formControlName="is_active" />\r
            <span class="switch__track"><span class="switch__thumb"></span></span>\r
            <span class="switch__text">{{ form.controls.is_active.value ? 'Activo' : 'Inactivo' }}</span>\r
          </span>\r
        </label>\r
\r
        <footer class="drawer__footer">\r
          @if (readonly()) {\r
            <button type="button" class="btn btn--ghost" (click)="close.emit()">Cerrar</button>\r
          } @else {\r
            <button type="button" class="btn btn--ghost" (click)="close.emit()" [disabled]="submitting()">\r
              Cancelar\r
            </button>\r
            <button type="submit" class="btn btn--primary" [disabled]="submitting()">\r
              {{ submitting() ? 'Guardando\u2026' : 'Guardar proveedor' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/gestion-proveedores/proveedor-form/proveedor-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n@media (max-width: 420px) {\n  .field-row {\n    flex-direction: column;\n    gap: 18px;\n  }\n}\n/*# sourceMappingURL=proveedor-form-FRWCSYNH.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], proveedor: [{ type: Input, args: [{ isSignal: true, alias: "proveedor", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProveedorForm, { className: "ProveedorForm", filePath: "src/app/sucursales-catalogo/gestion-proveedores/proveedor-form/proveedor-form.ts", lineNumber: 22 });
})();

// src/app/sucursales-catalogo/gestion-proveedores/gestion-proveedores.ts
var _forTrack0 = ($index, $item) => $item.id;
function GestionProveedores_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17)(2, "div", 17)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function GestionProveedores_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 18);
    \u0275\u0275text(2, "No se pudieron cargar los proveedores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function GestionProveedores_Conditional_22_Template_button_click_5_listener() {
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
function GestionProveedores_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 18);
    \u0275\u0275text(2, "A\xFAn no hay proveedores registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea el primer proveedor para empezar a operar.");
    \u0275\u0275elementEnd()();
  }
}
function GestionProveedores_Conditional_24_For_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function GestionProveedores_Conditional_24_For_17_Conditional_15_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 29);
    \u0275\u0275listener("click", function GestionProveedores_Conditional_24_For_17_Conditional_15_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const proveedor_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(proveedor_r4, $event));
    });
    \u0275\u0275element(2, "app-icon", 30);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function GestionProveedores_Conditional_24_For_17_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const proveedor_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(proveedor_r4));
    });
    \u0275\u0275element(5, "app-icon", 31);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function GestionProveedores_Conditional_24_For_17_Conditional_15_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const proveedor_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(proveedor_r4, $event));
    });
    \u0275\u0275element(8, "app-icon", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275listener("click", function GestionProveedores_Conditional_24_For_17_Conditional_15_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const proveedor_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProveedor(proveedor_r4, $event));
    });
    \u0275\u0275element(11, "app-icon", 34);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proveedor_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", proveedor_r4.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", proveedor_r4.is_active ? "Desactivar" : "Activar", " ");
  }
}
function GestionProveedores_Conditional_24_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "app-status-badge", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 24)(13, "button", 25);
    \u0275\u0275listener("click", function GestionProveedores_Conditional_24_For_17_Template_button_click_13_listener($event) {
      const proveedor_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(proveedor_r4.id, $event));
    });
    \u0275\u0275element(14, "app-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, GestionProveedores_Conditional_24_For_17_Conditional_15_Template, 13, 3, "div", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const proveedor_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proveedor_r4.razon_social);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proveedor_r4.nombre_contacto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proveedor_r4.correo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proveedor_r4.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", proveedor_r4.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === proveedor_r4.id ? 15 : -1);
  }
}
function GestionProveedores_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 20)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Raz\xF3n social");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, GestionProveedores_Conditional_24_For_17_Template, 16, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.proveedores());
  }
}
var GestionProveedores = class _GestionProveedores {
  proveedorService = inject(ProveedorService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  proveedores = signal(
    [],
    ...ngDevMode ? [{ debugName: "proveedores" }] : (
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
  searchTerm = signal(
    "",
    ...ngDevMode ? [{ debugName: "searchTerm" }] : (
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
  editingProveedor = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingProveedor" }] : (
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
  searchDebounce;
  constructor() {
    this.load();
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.proveedorService.list({ search: this.searchTerm() || void 0, estado: this.statusFilter() }).subscribe({
      next: (proveedores) => {
        this.proveedores.set(proveedores);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.proveedores.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingProveedor.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(proveedor) {
    this.openMenuId.set(null);
    this.editingProveedor.set(proveedor);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(proveedor, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingProveedor.set(proveedor);
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
    const editing = this.editingProveedor();
    this.submitting.set(true);
    if (editing) {
      const requests = [
        this.proveedorService.update(editing.id, {
          razon_social: payload.razon_social,
          nombre_contacto: payload.nombre_contacto,
          correo: payload.correo,
          telefono: payload.telefono
        })
      ];
      if (payload.is_active !== editing.is_active) {
        requests.push(this.proveedorService.setActive(editing.id, payload.is_active));
      }
      forkJoin(requests).subscribe({
        next: () => this.onSaveSuccess("Proveedor actualizado correctamente."),
        error: (err) => this.onSaveError(err)
      });
      return;
    }
    this.proveedorService.create(payload).subscribe({
      next: () => this.onSaveSuccess("Proveedor creado correctamente."),
      error: (err) => this.onSaveError(err)
    });
  }
  onSaveSuccess(message) {
    this.submitting.set(false);
    this.drawerOpen.set(false);
    this.toast.success(message);
    this.load();
  }
  onSaveError(err) {
    this.submitting.set(false);
    if (err.status === 409) {
      this.toast.error("Ya existe un proveedor con esa raz\xF3n social.");
    } else if (err.status === 422) {
      this.toast.error("Revisa los datos ingresados: correo o tel\xE9fono no v\xE1lidos.");
    } else {
      this.toast.error("No se pudo guardar el proveedor. Intenta nuevamente.");
    }
  }
  async toggleStatus(proveedor, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (proveedor.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar proveedor?",
        message: `${proveedor.razon_social} dejar\xE1 de estar disponible para nuevas operaciones.`,
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.proveedorService.setActive(proveedor.id, !proveedor.is_active).subscribe({
      next: () => {
        this.toast.success(proveedor.is_active ? "Proveedor desactivado." : "Proveedor activado correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado del proveedor.")
    });
  }
  async deleteProveedor(proveedor, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar proveedor?",
      message: `Se eliminar\xE1 permanentemente "${proveedor.razon_social}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.proveedorService.delete(proveedor.id).subscribe({
      next: () => {
        this.toast.success("Proveedor eliminado correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar este proveedor porque tiene productos, usuarios o recepci\xF3n de mercader\xEDa asociados.");
        } else if (err.status === 404) {
          this.toast.error("El proveedor no existe o ya fue eliminado.");
        } else {
          this.toast.error("No se pudo eliminar el proveedor.");
        }
      }
    });
  }
  static \u0275fac = function GestionProveedores_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GestionProveedores)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestionProveedores, selectors: [["app-gestion-proveedores"]], hostBindings: function GestionProveedores_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function GestionProveedores_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 26, vars: 7, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar por raz\xF3n social, contacto o correo...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "proveedor", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "cell-secondary"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function GestionProveedores_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Proveedores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Administra los proveedores externos de FashionStore.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function GestionProveedores_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nuevo proveedor ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("ngModelChange", function GestionProveedores_Template_input_ngModelChange_13_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function GestionProveedores_Template_select_ngModelChange_14_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Activos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Inactivos");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, GestionProveedores_Conditional_21_Template, 4, 0, "div", 12)(22, GestionProveedores_Conditional_22_Template, 7, 1, "div", 13)(23, GestionProveedores_Conditional_23_Template, 5, 0, "div", 14)(24, GestionProveedores_Conditional_24_Template, 18, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "app-proveedor-form", 16);
      \u0275\u0275listener("save", function GestionProveedores_Template_app_proveedor_form_save_25_listener($event) {
        return ctx.save($event);
      })("close", function GestionProveedores_Template_app_proveedor_form_close_25_listener() {
        return ctx.closeDrawer();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.statusFilter());
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 21 : ctx.errorMessage() ? 22 : ctx.proveedores().length === 0 ? 23 : 24);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("proveedor", ctx.editingProveedor())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, ProveedorForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=gestion-proveedores-XYWZ4OIB.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestionProveedores, [{
    type: Component,
    args: [{ selector: "app-gestion-proveedores", imports: [FormsModule, Icon, StatusBadge, ProveedorForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Proveedores</h3>\r
      <p>Administra los proveedores externos de FashionStore.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nuevo proveedor\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar por raz\xF3n social, contacto o correo..."\r
        [ngModel]="searchTerm()"\r
        (ngModelChange)="onSearchChange($event)"\r
      />\r
    </label>\r
\r
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
      <span class="state-block__title">No se pudieron cargar los proveedores</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (proveedores().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay proveedores registrados</span>\r
      <span>Crea el primer proveedor para empezar a operar.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Raz\xF3n social</th>\r
            <th>Contacto</th>\r
            <th>Correo</th>\r
            <th>Tel\xE9fono</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (proveedor of proveedores(); track proveedor.id) {\r
            <tr>\r
              <td class="cell-title">{{ proveedor.razon_social }}</td>\r
              <td class="cell-secondary">{{ proveedor.nombre_contacto }}</td>\r
              <td class="cell-secondary">{{ proveedor.correo }}</td>\r
              <td class="cell-secondary">{{ proveedor.telefono }}</td>\r
              <td><app-status-badge [active]="proveedor.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(proveedor.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === proveedor.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(proveedor, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(proveedor)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="proveedor.is_active"\r
                        (click)="toggleStatus(proveedor, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ proveedor.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteProveedor(proveedor, $event)"\r
                      >\r
                        <app-icon name="close" /> Eliminar\r
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
<app-proveedor-form\r
  [open]="drawerOpen()"\r
  [proveedor]="editingProveedor()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/gestion-proveedores/gestion-proveedores.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=gestion-proveedores-XYWZ4OIB.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestionProveedores, { className: "GestionProveedores", filePath: "src/app/sucursales-catalogo/gestion-proveedores/gestion-proveedores.ts", lineNumber: 18 });
})();
export {
  GestionProveedores
};
//# debugId=a659d75b-bde2-5965-aa99-811ef6ae2d00
//# sourceMappingURL=chunk-24BXKKUT.js.map
