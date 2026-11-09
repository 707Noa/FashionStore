import {
  SucursalAdminService
} from "./chunk-AL7EOW4V.js";
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
  FormControlDirective,
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

// src/app/sucursales-catalogo/cu06-gestionar-sucursales/ciudad-management/ciudad-management.ts
var _forTrack0 = ($index, $item) => $item.id;
function CiudadManagement_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22)(1, "div", 22);
  }
}
function CiudadManagement_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 23);
    \u0275\u0275text(2, "A\xFAn no hay ciudades registradas");
    \u0275\u0275elementEnd()();
  }
}
function CiudadManagement_Conditional_0_Conditional_31_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "app-status-badge", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 28)(9, "button", 29);
    \u0275\u0275listener("click", function CiudadManagement_Conditional_0_Conditional_31_For_13_Template_button_click_9_listener() {
      const ciudad_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(ciudad_r4));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 30);
    \u0275\u0275listener("click", function CiudadManagement_Conditional_0_Conditional_31_For_13_Template_button_click_11_listener() {
      const ciudad_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteCiudad(ciudad_r4));
    });
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ciudad_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ciudad_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ciudad_r4.departamento);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", ciudad_r4.is_active);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ciudad_r4.is_active ? "Desactivar" : "Activar", " ");
  }
}
function CiudadManagement_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 24)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, CiudadManagement_Conditional_0_Conditional_31_For_13_Template, 13, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.ciudades());
  }
}
function CiudadManagement_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function CiudadManagement_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function CiudadManagement_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4, "Gestionar ciudades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function CiudadManagement_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "form", 7);
    \u0275\u0275listener("ngSubmit", function CiudadManagement_Conditional_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCrear());
    });
    \u0275\u0275elementStart(9, "label", 8)(10, "span", 9);
    \u0275\u0275text(11, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 10);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 8)(14, "span", 9);
    \u0275\u0275text(15, "Departamento *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 12)(18, "span", 9);
    \u0275\u0275text(19, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 13);
    \u0275\u0275element(21, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "span", 15);
    \u0275\u0275element(23, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function CiudadManagement_Conditional_0_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCrear());
    });
    \u0275\u0275element(27, "app-icon", 19);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, CiudadManagement_Conditional_0_Conditional_29_Template, 2, 0)(30, CiudadManagement_Conditional_0_Conditional_30_Template, 3, 0, "div", 20)(31, CiudadManagement_Conditional_0_Conditional_31_Template, 14, 0, "div", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.departamento.invalid && ctx_r1.form.controls.departamento.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx_r1.form.controls.is_active);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activa" : "Inactiva");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Agregar ciudad", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 29 : ctx_r1.ciudades().length === 0 ? 30 : 31);
  }
}
var CiudadManagement = class _CiudadManagement {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  close = output();
  changed = output();
  fb = inject(FormBuilder);
  ciudadService = inject(SucursalAdminService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  ciudades = signal(
    [],
    ...ngDevMode ? [{ debugName: "ciudades" }] : (
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
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    departamento: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    is_active: [true]
  });
  constructor() {
    effect(() => {
      if (this.open()) {
        this.load();
      }
    });
  }
  load() {
    this.loading.set(true);
    this.ciudadService.ciudades().subscribe({
      next: (ciudades) => {
        this.ciudades.set(ciudades);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  submitCrear() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.submitting.set(true);
    this.ciudadService.createCiudad({
      nombre: value.nombre.trim(),
      departamento: value.departamento.trim(),
      is_active: value.is_active
    }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.form.reset({ nombre: "", departamento: "", is_active: true });
        this.toast.success("Ciudad creada correctamente.");
        this.load();
        this.changed.emit();
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe una ciudad con ese nombre.");
        } else {
          this.toast.error("No se pudo crear la ciudad. Intenta nuevamente.");
        }
      }
    });
  }
  toggleStatus(ciudad) {
    this.ciudadService.setCiudadActive(ciudad.id, !ciudad.is_active).subscribe({
      next: () => {
        this.toast.success(ciudad.is_active ? "Ciudad desactivada." : "Ciudad activada correctamente.");
        this.load();
        this.changed.emit();
      },
      error: () => this.toast.error("No se pudo actualizar el estado de la ciudad.")
    });
  }
  async deleteCiudad(ciudad) {
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar ciudad?",
      message: `Se eliminar\xE1 permanentemente "${ciudad.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.ciudadService.deleteCiudad(ciudad.id).subscribe({
      next: () => {
        this.toast.success("Ciudad eliminada correctamente.");
        this.load();
        this.changed.emit();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar esta ciudad porque tiene sucursales asociadas. Primero debe eliminar o reubicar las sucursales.");
        } else if (err.status === 404) {
          this.toast.error("La ciudad no existe o ya fue eliminada.");
        } else {
          this.toast.error("No se pudo eliminar la ciudad.");
        }
      }
    });
  }
  static \u0275fac = function CiudadManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CiudadManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CiudadManagement, selectors: [["app-ciudad-management"]], inputs: { open: [1, "open"] }, outputs: { close: "close", changed: "changed" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form"], [1, "field-row", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Sucre"], ["type", "text", "formControlName", "departamento", "placeholder", "Ej. Chuquisaca"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", 3, "formControl"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "state-block"], [1, "table-scroll"], [1, "skeleton-row"], [1, "state-block__title"], [1, "data-table"], [1, "cell-title"], [1, "cell-secondary"], [3, "active"], [2, "display", "flex", "gap", "0.5rem"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 2, "color", "var(--color-danger)", 3, "click"]], template: function CiudadManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CiudadManagement_Conditional_0_Template, 32, 10, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, Icon, StatusBadge], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n/*# sourceMappingURL=ciudad-management-NWBVT2AJ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CiudadManagement, [{
    type: Component,
    args: [{ selector: "app-ciudad-management", imports: [ReactiveFormsModule, Icon, StatusBadge], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>Gestionar ciudades</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <div class="drawer__form">\r
        <form [formGroup]="form" (ngSubmit)="submitCrear()" class="field-row">\r
          <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
            <span class="field__label">Nombre *</span>\r
            <input type="text" formControlName="nombre" placeholder="Ej. Sucre" />\r
          </label>\r
\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.departamento.invalid && form.controls.departamento.touched"\r
          >\r
            <span class="field__label">Departamento *</span>\r
            <input type="text" formControlName="departamento" placeholder="Ej. Chuquisaca" />\r
          </label>\r
        </form>\r
\r
        <label class="field field--switch">\r
          <span class="field__label">Estado</span>\r
          <span class="switch">\r
            <input type="checkbox" [formControl]="form.controls.is_active" />\r
            <span class="switch__track"><span class="switch__thumb"></span></span>\r
            <span class="switch__text">{{ form.controls.is_active.value ? 'Activa' : 'Inactiva' }}</span>\r
          </span>\r
        </label>\r
\r
        <button\r
          type="button"\r
          class="btn btn--primary btn--sm"\r
          [disabled]="submitting()"\r
          (click)="submitCrear()"\r
        >\r
          <app-icon name="plus" style="width: 14px; height: 14px" />\r
          {{ submitting() ? 'Guardando\u2026' : 'Agregar ciudad' }}\r
        </button>\r
\r
        @if (loading()) {\r
          <div class="skeleton-row"></div>\r
          <div class="skeleton-row"></div>\r
        } @else if (ciudades().length === 0) {\r
          <div class="state-block">\r
            <span class="state-block__title">A\xFAn no hay ciudades registradas</span>\r
          </div>\r
        } @else {\r
          <div class="table-scroll">\r
            <table class="data-table">\r
              <thead>\r
                <tr>\r
                  <th>Nombre</th>\r
                  <th>Departamento</th>\r
                  <th>Estado</th>\r
                  <th></th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (ciudad of ciudades(); track ciudad.id) {\r
                  <tr>\r
                    <td class="cell-title">{{ ciudad.nombre }}</td>\r
                    <td class="cell-secondary">{{ ciudad.departamento }}</td>\r
                    <td><app-status-badge [active]="ciudad.is_active" /></td>\r
                    <td>\r
                      <div style="display: flex; gap: 0.5rem;">\r
                        <button type="button" class="btn btn--ghost btn--sm" (click)="toggleStatus(ciudad)">\r
                          {{ ciudad.is_active ? 'Desactivar' : 'Activar' }}\r
                        </button>\r
                        <button type="button" class="btn btn--ghost btn--sm" style="color: var(--color-danger)" (click)="deleteCiudad(ciudad)">\r
                          Eliminar\r
                        </button>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        }\r
      </div>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/cu06-gestionar-sucursales/ciudad-management/ciudad-management.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=ciudad-management-NWBVT2AJ.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], close: [{ type: Output, args: ["close"] }], changed: [{ type: Output, args: ["changed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CiudadManagement, { className: "CiudadManagement", filePath: "src/app/sucursales-catalogo/cu06-gestionar-sucursales/ciudad-management/ciudad-management.ts", lineNumber: 16 });
})();

// src/app/sucursales-catalogo/cu06-gestionar-sucursales/sucursal-form/sucursal-form.ts
var _forTrack02 = ($index, $item) => $item.id;
function SucursalForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function SucursalForm_Conditional_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ciudad_r3 = ctx.$implicit;
    \u0275\u0275property("value", ciudad_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ciudad_r3.nombre);
  }
}
function SucursalForm_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Selecciona una ciudad.");
    \u0275\u0275elementEnd();
  }
}
function SucursalForm_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "La direcci\xF3n debe tener al menos 5 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function SucursalForm_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Ingresa un tel\xE9fono v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function SucursalForm_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function SucursalForm_Conditional_0_Conditional_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function SucursalForm_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function SucursalForm_Conditional_0_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar sucursal", " ");
  }
}
function SucursalForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function SucursalForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function SucursalForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function SucursalForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function SucursalForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, SucursalForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 7)(14, "span", 8);
    \u0275\u0275text(15, "Ciudad *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 11)(17, "option", 12);
    \u0275\u0275text(18, "Selecciona una ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, SucursalForm_Conditional_0_For_20_Template, 2, 2, "option", 13, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(21, SucursalForm_Conditional_0_Conditional_21_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 7)(23, "span", 8);
    \u0275\u0275text(24, "Direcci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(26, SucursalForm_Conditional_0_Conditional_26_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 7)(28, "span", 8);
    \u0275\u0275text(29, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(31, SucursalForm_Conditional_0_Conditional_31_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 16)(33, "span", 8);
    \u0275\u0275text(34, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 17);
    \u0275\u0275element(36, "input", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(37, "span", 19);
    \u0275\u0275element(38, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 21);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "footer", 22);
    \u0275\u0275conditionalCreate(42, SucursalForm_Conditional_0_Conditional_42_Template, 2, 0, "button", 23)(43, SucursalForm_Conditional_0_Conditional_43_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de sucursal" : ctx_r1.isEditMode ? "Editar sucursal" : "Nueva sucursal");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.ciudad_id.invalid && ctx_r1.form.controls.ciudad_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ciudades());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.ciudad_id.invalid && ctx_r1.form.controls.ciudad_id.touched ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.direccion.invalid && ctx_r1.form.controls.direccion.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.direccion.invalid && ctx_r1.form.controls.direccion.touched ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.telefono.invalid && ctx_r1.form.controls.telefono.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.telefono.invalid && ctx_r1.form.controls.telefono.touched ? 31 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activa" : "Inactiva");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 42 : 43);
  }
}
var TELEFONO_PATTERN = /^[0-9+\-\s()]{6,20}$/;
var SucursalForm = class _SucursalForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sucursal = input(
    null,
    ...ngDevMode ? [{ debugName: "sucursal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ciudades = input(
    [],
    ...ngDevMode ? [{ debugName: "ciudades" }] : (
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
    nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    ciudad_id: [null, [Validators.required]],
    direccion: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    telefono: ["", [Validators.required, Validators.pattern(TELEFONO_PATTERN)]],
    is_active: [true]
  });
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const sucursal = this.sucursal();
      if (sucursal) {
        this.form.reset({
          nombre: sucursal.nombre,
          ciudad_id: sucursal.ciudad.id,
          direccion: sucursal.direccion,
          telefono: sucursal.telefono,
          is_active: sucursal.is_active
        });
      } else {
        this.form.reset({ nombre: "", ciudad_id: null, direccion: "", telefono: "", is_active: true });
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.sucursal() !== null;
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
      ciudad_id: value.ciudad_id,
      direccion: value.direccion.trim(),
      telefono: value.telefono.trim(),
      is_active: value.is_active
    });
  }
  static \u0275fac = function SucursalForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SucursalForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SucursalForm, selectors: [["app-sucursal-form"]], inputs: { open: [1, "open"], sucursal: [1, "sucursal"], ciudades: [1, "ciudades"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Sucursal Centro"], [1, "field__error"], ["formControlName", "ciudad_id"], ["disabled", "", 3, "value"], [3, "value"], ["type", "text", "formControlName", "direccion", "placeholder", "Ej. Av. San Mart\xEDn #123"], ["type", "text", "formControlName", "telefono", "placeholder", "Ej. 70012345"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function SucursalForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SucursalForm_Conditional_0_Template, 44, 17, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n/*# sourceMappingURL=sucursal-form-DH5755WR.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SucursalForm, [{
    type: Component,
    args: [{ selector: "app-sucursal-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de sucursal' : isEditMode ? 'Editar sucursal' : 'Nueva sucursal' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Sucursal Centro" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
\r
        <label class="field" [class.has-error]="form.controls.ciudad_id.invalid && form.controls.ciudad_id.touched">\r
          <span class="field__label">Ciudad *</span>\r
          <select formControlName="ciudad_id">\r
            <option [value]="null" disabled>Selecciona una ciudad</option>\r
            @for (ciudad of ciudades(); track ciudad.id) {\r
              <option [value]="ciudad.id">{{ ciudad.nombre }}</option>\r
            }\r
          </select>\r
          @if (form.controls.ciudad_id.invalid && form.controls.ciudad_id.touched) {\r
            <span class="field__error">Selecciona una ciudad.</span>\r
          }\r
        </label>\r
\r
        <label class="field" [class.has-error]="form.controls.direccion.invalid && form.controls.direccion.touched">\r
          <span class="field__label">Direcci\xF3n *</span>\r
          <input type="text" formControlName="direccion" placeholder="Ej. Av. San Mart\xEDn #123" />\r
          @if (form.controls.direccion.invalid && form.controls.direccion.touched) {\r
            <span class="field__error">La direcci\xF3n debe tener al menos 5 caracteres.</span>\r
          }\r
        </label>\r
\r
        <label class="field" [class.has-error]="form.controls.telefono.invalid && form.controls.telefono.touched">\r
          <span class="field__label">Tel\xE9fono *</span>\r
          <input type="text" formControlName="telefono" placeholder="Ej. 70012345" />\r
          @if (form.controls.telefono.invalid && form.controls.telefono.touched) {\r
            <span class="field__error">Ingresa un tel\xE9fono v\xE1lido.</span>\r
          }\r
        </label>\r
\r
        <label class="field field--switch">\r
          <span class="field__label">Estado</span>\r
          <span class="switch">\r
            <input type="checkbox" formControlName="is_active" />\r
            <span class="switch__track"><span class="switch__thumb"></span></span>\r
            <span class="switch__text">{{ form.controls.is_active.value ? 'Activa' : 'Inactiva' }}</span>\r
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
              {{ submitting() ? 'Guardando\u2026' : 'Guardar sucursal' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/cu06-gestionar-sucursales/sucursal-form/sucursal-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=sucursal-form-DH5755WR.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], sucursal: [{ type: Input, args: [{ isSignal: true, alias: "sucursal", required: false }] }], ciudades: [{ type: Input, args: [{ isSignal: true, alias: "ciudades", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SucursalForm, { className: "SucursalForm", filePath: "src/app/sucursales-catalogo/cu06-gestionar-sucursales/sucursal-form/sucursal-form.ts", lineNumber: 22 });
})();

// src/app/sucursales-catalogo/cu06-gestionar-sucursales/sucursales.ts
var _forTrack03 = ($index, $item) => $item.id;
function Sucursales_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ciudad_r1 = ctx.$implicit;
    \u0275\u0275property("value", ciudad_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ciudad_r1.nombre);
  }
}
function Sucursales_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 23)(2, "div", 23)(3, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function Sucursales_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 24);
    \u0275\u0275text(2, "No se pudieron cargar las sucursales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function Sucursales_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function Sucursales_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 24);
    \u0275\u0275text(2, "No se encontraron sucursales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea la primera sucursal para empezar a operar.");
    \u0275\u0275elementEnd()();
  }
}
function Sucursales_Conditional_33_For_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function Sucursales_Conditional_33_For_17_Conditional_15_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function Sucursales_Conditional_33_For_17_Conditional_15_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const sucursal_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openView(sucursal_r5, $event));
    });
    \u0275\u0275element(2, "app-icon", 36);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function Sucursales_Conditional_33_For_17_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const sucursal_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(sucursal_r5));
    });
    \u0275\u0275element(5, "app-icon", 37);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function Sucursales_Conditional_33_For_17_Conditional_15_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const sucursal_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleStatus(sucursal_r5, $event));
    });
    \u0275\u0275element(8, "app-icon", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 39);
    \u0275\u0275listener("click", function Sucursales_Conditional_33_For_17_Conditional_15_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const sucursal_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSucursal(sucursal_r5, $event));
    });
    \u0275\u0275element(11, "app-icon", 40);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sucursal_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", sucursal_r5.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", sucursal_r5.is_active ? "Desactivar" : "Activar", " ");
  }
}
function Sucursales_Conditional_33_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "app-status-badge", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 30)(13, "button", 31);
    \u0275\u0275listener("click", function Sucursales_Conditional_33_For_17_Template_button_click_13_listener($event) {
      const sucursal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu(sucursal_r5.id, $event));
    });
    \u0275\u0275element(14, "app-icon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Sucursales_Conditional_33_For_17_Conditional_15_Template, 13, 3, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sucursal_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sucursal_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sucursal_r5.ciudad.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sucursal_r5.direccion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sucursal_r5.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", sucursal_r5.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.openMenuId() === sucursal_r5.id ? 15 : -1);
  }
}
function Sucursales_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 26)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Sucursal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Direcci\xF3n");
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
    \u0275\u0275repeaterCreate(16, Sucursales_Conditional_33_For_17_Template, 16, 6, "tr", null, _forTrack03);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.sucursales());
  }
}
var Sucursales = class _Sucursales {
  sucursalService = inject(SucursalAdminService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  sucursales = signal(
    [],
    ...ngDevMode ? [{ debugName: "sucursales" }] : (
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
  ciudadFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "ciudadFilter" }] : (
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
  editingSucursal = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingSucursal" }] : (
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
  cityManagementOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "cityManagementOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchDebounce;
  constructor() {
    this.loadCiudades();
    this.load();
  }
  loadCiudades() {
    this.sucursalService.ciudades("active").subscribe({ next: (ciudades) => this.ciudades.set(ciudades) });
  }
  openCityManagement() {
    this.cityManagementOpen.set(true);
  }
  closeCityManagement() {
    this.cityManagementOpen.set(false);
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  onCiudadFilterChange(value) {
    this.ciudadFilter.set(value ? Number(value) : "");
    this.load();
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.sucursalService.list({
      search: this.searchTerm() || void 0,
      ciudad_id: this.ciudadFilter() || void 0,
      estado: this.statusFilter()
    }).subscribe({
      next: (sucursales) => {
        this.sucursales.set(sucursales);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.sucursales.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingSucursal.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(sucursal) {
    this.openMenuId.set(null);
    this.editingSucursal.set(sucursal);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(sucursal, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingSucursal.set(sucursal);
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
    const editing = this.editingSucursal();
    this.submitting.set(true);
    if (editing) {
      const requests = [
        this.sucursalService.update(editing.id, {
          nombre: payload.nombre,
          ciudad_id: payload.ciudad_id,
          direccion: payload.direccion,
          telefono: payload.telefono
        })
      ];
      if (payload.is_active !== editing.is_active) {
        requests.push(this.sucursalService.setActive(editing.id, payload.is_active));
      }
      forkJoin(requests).subscribe({
        next: () => this.onSaveSuccess("Sucursal actualizada correctamente."),
        error: (err) => this.onSaveError(err)
      });
      return;
    }
    this.sucursalService.create(payload).subscribe({
      next: () => this.onSaveSuccess("Sucursal creada correctamente."),
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
      this.toast.error("Ya existe una sucursal con ese nombre en esa ciudad.");
    } else if (err.status === 422) {
      this.toast.error("La ciudad seleccionada no es v\xE1lida.");
    } else {
      this.toast.error("No se pudo guardar la sucursal. Intenta nuevamente.");
    }
  }
  async toggleStatus(sucursal, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (sucursal.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar sucursal?",
        message: `${sucursal.nombre} dejar\xE1 de estar disponible para operar.`,
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.sucursalService.setActive(sucursal.id, !sucursal.is_active).subscribe({
      next: () => {
        this.toast.success(sucursal.is_active ? "Sucursal desactivada." : "Sucursal activada correctamente.");
        this.load();
      },
      error: () => {
        this.toast.error("No se pudo actualizar el estado de la sucursal.");
      }
    });
  }
  async deleteSucursal(sucursal, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar sucursal?",
      message: `Se eliminar\xE1 permanentemente "${sucursal.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.sucursalService.delete(sucursal.id).subscribe({
      next: () => {
        this.toast.success("Sucursal eliminada correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar esta sucursal porque tiene usuarios, inventario o movimientos asociados.");
        } else if (err.status === 404) {
          this.toast.error("La sucursal no existe o ya fue eliminada.");
        } else {
          this.toast.error("No se pudo eliminar la sucursal.");
        }
      }
    });
  }
  static \u0275fac = function Sucursales_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sucursales)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sucursales, selectors: [["app-sucursales"]], hostBindings: function Sucursales_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function Sucursales_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 36, vars: 10, consts: [[1, "admin-card", "section"], [1, "section__header"], [1, "section__header-actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["name", "settings", 2, "width", "14px", "height", "14px"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar por nombre...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "sucursal", "ciudades", "readonly", "submitting"], [3, "close", "changed", "open"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "cell-secondary"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function Sucursales_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Gestionar sucursales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Administra las sucursales f\xEDsicas de FashionStore.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 2)(8, "button", 3);
      \u0275\u0275listener("click", function Sucursales_Template_button_click_8_listener() {
        return ctx.openCityManagement();
      });
      \u0275\u0275element(9, "app-icon", 4);
      \u0275\u0275text(10, " Gestionar ciudades ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function Sucursales_Template_button_click_11_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275text(13, " Nueva sucursal ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 7)(15, "label", 8);
      \u0275\u0275element(16, "app-icon", 9);
      \u0275\u0275elementStart(17, "input", 10);
      \u0275\u0275listener("ngModelChange", function Sucursales_Template_input_ngModelChange_17_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 11);
      \u0275\u0275listener("ngModelChange", function Sucursales_Template_select_ngModelChange_18_listener($event) {
        return ctx.onCiudadFilterChange($event);
      });
      \u0275\u0275elementStart(19, "option", 12);
      \u0275\u0275text(20, "Todas las ciudades");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(21, Sucursales_For_22_Template, 2, 2, "option", 13, _forTrack03);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(23, "select", 11);
      \u0275\u0275listener("ngModelChange", function Sucursales_Template_select_ngModelChange_23_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(24, "option", 14);
      \u0275\u0275text(25, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 15);
      \u0275\u0275text(27, "Activas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 16);
      \u0275\u0275text(29, "Inactivas");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, Sucursales_Conditional_30_Template, 4, 0, "div", 17)(31, Sucursales_Conditional_31_Template, 7, 1, "div", 18)(32, Sucursales_Conditional_32_Template, 5, 0, "div", 19)(33, Sucursales_Conditional_33_Template, 18, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "app-sucursal-form", 21);
      \u0275\u0275listener("save", function Sucursales_Template_app_sucursal_form_save_34_listener($event) {
        return ctx.save($event);
      })("close", function Sucursales_Template_app_sucursal_form_close_34_listener() {
        return ctx.closeDrawer();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "app-ciudad-management", 22);
      \u0275\u0275listener("close", function Sucursales_Template_app_ciudad_management_close_35_listener() {
        return ctx.closeCityManagement();
      })("changed", function Sucursales_Template_app_ciudad_management_changed_35_listener() {
        return ctx.loadCiudades();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.ciudadFilter());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.ciudades());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.statusFilter());
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 30 : ctx.errorMessage() ? 31 : ctx.sucursales().length === 0 ? 32 : 33);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("sucursal", ctx.editingSucursal())("ciudades", ctx.ciudades())("readonly", ctx.viewMode())("submitting", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.cityManagementOpen());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, SucursalForm, CiudadManagement], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.section__header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n@media (max-width: 640px) {\n  .section__header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n  }\n  .section__header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=sucursales-7FDAFHAS.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sucursales, [{
    type: Component,
    args: [{ selector: "app-sucursales", imports: [FormsModule, Icon, StatusBadge, SucursalForm, CiudadManagement], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Gestionar sucursales</h3>\r
      <p>Administra las sucursales f\xEDsicas de FashionStore.</p>\r
    </div>\r
    <div class="section__header-actions">\r
      <button type="button" class="btn btn--ghost" (click)="openCityManagement()">\r
        <app-icon name="settings" style="width: 14px; height: 14px" />\r
        Gestionar ciudades\r
      </button>\r
      <button type="button" class="btn btn--primary" (click)="openCreate()">\r
        <app-icon name="plus" style="width: 14px; height: 14px" />\r
        Nueva sucursal\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar por nombre..."\r
        [ngModel]="searchTerm()"\r
        (ngModelChange)="onSearchChange($event)"\r
      />\r
    </label>\r
\r
    <select\r
      class="status-select"\r
      [ngModel]="ciudadFilter()"\r
      (ngModelChange)="onCiudadFilterChange($event)"\r
    >\r
      <option value="">Todas las ciudades</option>\r
      @for (ciudad of ciudades(); track ciudad.id) {\r
        <option [value]="ciudad.id">{{ ciudad.nombre }}</option>\r
      }\r
    </select>\r
\r
    <select\r
      class="status-select"\r
      [ngModel]="statusFilter()"\r
      (ngModelChange)="onStatusFilterChange($event)"\r
    >\r
      <option value="all">Todos los estados</option>\r
      <option value="active">Activas</option>\r
      <option value="inactive">Inactivas</option>\r
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
      <span class="state-block__title">No se pudieron cargar las sucursales</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (sucursales().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">No se encontraron sucursales</span>\r
      <span>Crea la primera sucursal para empezar a operar.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Sucursal</th>\r
            <th>Ciudad</th>\r
            <th>Direcci\xF3n</th>\r
            <th>Tel\xE9fono</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (sucursal of sucursales(); track sucursal.id) {\r
            <tr>\r
              <td class="cell-title">{{ sucursal.nombre }}</td>\r
              <td>{{ sucursal.ciudad.nombre }}</td>\r
              <td class="cell-secondary">{{ sucursal.direccion }}</td>\r
              <td class="cell-secondary">{{ sucursal.telefono }}</td>\r
              <td><app-status-badge [active]="sucursal.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(sucursal.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === sucursal.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(sucursal, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(sucursal)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="sucursal.is_active"\r
                        (click)="toggleStatus(sucursal, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ sucursal.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteSucursal(sucursal, $event)"\r
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
<app-sucursal-form\r
  [open]="drawerOpen()"\r
  [sucursal]="editingSucursal()"\r
  [ciudades]="ciudades()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
\r
<app-ciudad-management\r
  [open]="cityManagementOpen()"\r
  (close)="closeCityManagement()"\r
  (changed)="loadCiudades()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/cu06-gestionar-sucursales/sucursales.scss */\n:host {\n  display: block;\n}\n.section__header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n@media (max-width: 640px) {\n  .section__header-actions {\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n  }\n  .section__header-actions .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=sucursales-7FDAFHAS.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sucursales, { className: "Sucursales", filePath: "src/app/sucursales-catalogo/cu06-gestionar-sucursales/sucursales.ts", lineNumber: 19 });
})();
export {
  Sucursales
};
//# debugId=0ba48ed4-d446-55ce-a533-822606fe9d15
//# sourceMappingURL=chunk-OR2RAD3F.js.map
