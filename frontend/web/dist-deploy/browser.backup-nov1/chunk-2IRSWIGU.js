import {
  CategoryService,
  ColorService,
  SizeService
} from "./chunk-3LSTOTMW.js";
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

// src/app/sucursales-catalogo/atributos/category-management/category-form/category-form.ts
function CategoryForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function CategoryForm_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "Imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, "Guarda la categor\xEDa primero; luego podr\xE1s cargar aqu\xED mismo su imagen.");
    \u0275\u0275elementEnd()();
  }
}
function CategoryForm_Conditional_0_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(ctx_r1.imagenUrl()), \u0275\u0275sanitizeUrl);
  }
}
function CategoryForm_Conditional_0_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "app-icon", 24);
    \u0275\u0275elementEnd();
  }
}
function CategoryForm_Conditional_0_Conditional_14_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CategoryForm_Conditional_0_Conditional_14_Conditional_6_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.quitarImagen());
    });
    \u0275\u0275text(1, "Quitar");
    \u0275\u0275elementEnd();
  }
}
function CategoryForm_Conditional_0_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "input", 26);
    \u0275\u0275listener("change", function CategoryForm_Conditional_0_Conditional_14_Conditional_6_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImagenSeleccionada($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, CategoryForm_Conditional_0_Conditional_14_Conditional_6_Conditional_4_Template, 2, 0, "button", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.subiendoImagen() ? "Cargando\u2026" : ctx_r1.imagenUrl() ? "Cambiar imagen" : "Seleccionar imagen", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.subiendoImagen());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imagenUrl() ? 4 : -1);
  }
}
function CategoryForm_Conditional_0_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imagenError());
  }
}
function CategoryForm_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "Imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275conditionalCreate(4, CategoryForm_Conditional_0_Conditional_14_Conditional_4_Template, 1, 1, "img", 21)(5, CategoryForm_Conditional_0_Conditional_14_Conditional_5_Template, 2, 0, "div", 22);
    \u0275\u0275conditionalCreate(6, CategoryForm_Conditional_0_Conditional_14_Conditional_6_Template, 5, 3, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CategoryForm_Conditional_0_Conditional_14_Conditional_7_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.imagenUrl() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.readonly() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imagenError() ? 7 : -1);
  }
}
function CategoryForm_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function CategoryForm_Conditional_0_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function CategoryForm_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function CategoryForm_Conditional_0_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar categor\xEDa", " ");
  }
}
function CategoryForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function CategoryForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function CategoryForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function CategoryForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function CategoryForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, CategoryForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, CategoryForm_Conditional_0_Conditional_13_Template, 5, 0, "div", 7)(14, CategoryForm_Conditional_0_Conditional_14_Template, 8, 3, "div", 7);
    \u0275\u0275elementStart(15, "label", 11)(16, "span", 8);
    \u0275\u0275text(17, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 12);
    \u0275\u0275element(19, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275element(21, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "footer", 17);
    \u0275\u0275conditionalCreate(25, CategoryForm_Conditional_0_Conditional_25_Template, 2, 0, "button", 18)(26, CategoryForm_Conditional_0_Conditional_26_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de categor\xEDa" : ctx_r1.isEditMode ? "Editar categor\xEDa" : "Nueva categor\xEDa");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isEditMode ? 13 : 14);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activa" : "Inactiva");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 25 : 26);
  }
}
var FORMATOS_IMAGEN_PERMITIDOS = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
var TAMANO_MAXIMO_IMAGEN_BYTES = 5 * 1024 * 1024;
var CategoryForm = class _CategoryForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  category = input(
    null,
    ...ngDevMode ? [{ debugName: "category" }] : (
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
  categoryService = inject(CategoryService);
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(80)]],
    is_active: [true]
  });
  imagenUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subiendoImagen = signal(
    false,
    ...ngDevMode ? [{ debugName: "subiendoImagen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenError = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resolveMediaUrl = resolveMediaUrl;
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const category = this.category();
      this.imagenError.set(null);
      if (category) {
        this.form.reset({ nombre: category.nombre, is_active: category.is_active });
        this.imagenUrl.set(category.imagen_url);
      } else {
        this.form.reset({ nombre: "", is_active: true });
        this.imagenUrl.set(null);
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.category() !== null;
  }
  onImagenSeleccionada(event) {
    const input2 = event.target;
    const archivo = input2.files?.[0];
    input2.value = "";
    const category = this.category();
    if (!archivo || !category) {
      return;
    }
    if (!FORMATOS_IMAGEN_PERMITIDOS.includes(archivo.type)) {
      this.imagenError.set("La imagen debe ser un archivo JPG, JPEG, PNG o WEBP.");
      return;
    }
    if (archivo.size > TAMANO_MAXIMO_IMAGEN_BYTES) {
      this.imagenError.set("La imagen no puede superar los 5 MB.");
      return;
    }
    this.imagenError.set(null);
    this.subiendoImagen.set(true);
    this.categoryService.setImagen(category.id, archivo).subscribe({
      next: (actualizada) => {
        this.subiendoImagen.set(false);
        this.imagenUrl.set(actualizada.imagen_url);
      },
      error: () => {
        this.subiendoImagen.set(false);
        this.imagenError.set("No se pudo cargar la imagen. Intenta nuevamente.");
      }
    });
  }
  quitarImagen() {
    const category = this.category();
    if (!category) {
      return;
    }
    this.categoryService.removeImagen(category.id).subscribe({
      next: () => this.imagenUrl.set(null),
      error: () => this.imagenError.set("No se pudo quitar la imagen. Intenta nuevamente.")
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
    this.save.emit({ nombre: value.nombre.trim(), is_active: value.is_active });
  }
  static \u0275fac = function CategoryForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryForm, selectors: [["app-category-form"]], inputs: { open: [1, "open"], category: [1, "category"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Poleras"], [1, "field__error"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], [1, "field__hint"], [1, "image-principal"], ["alt", "Imagen de la categor\xEDa", 1, "image-principal__preview", 3, "src"], [1, "image-principal__placeholder"], [1, "image-principal__actions"], ["name", "catalog", 2, "width", "22px", "height", "22px"], [1, "btn", "btn--ghost", "btn--sm", "image-upload-btn"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function CategoryForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CategoryForm_Conditional_0_Template, 27, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.image-upload-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-upload-btn[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.image-principal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.image-principal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.image-principal__preview[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--%NS%color-border);\n  flex-shrink: 0;\n}\n.image-principal__placeholder[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-card-bg);\n  border: 1px dashed var(--%NS%color-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=category-form-UJFZ6YR5.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryForm, [{
    type: Component,
    args: [{ selector: "app-category-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de categor\xEDa' : isEditMode ? 'Editar categor\xEDa' : 'Nueva categor\xEDa' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Poleras" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
\r
        @if (!isEditMode) {\r
          <div class="field">\r
            <span class="field__label">Imagen</span>\r
            <span class="field__hint">Guarda la categor\xEDa primero; luego podr\xE1s cargar aqu\xED mismo su imagen.</span>\r
          </div>\r
        } @else {\r
          <div class="field">\r
            <span class="field__label">Imagen</span>\r
            <div class="image-principal">\r
              @if (imagenUrl()) {\r
                <img [src]="resolveMediaUrl(imagenUrl())" alt="Imagen de la categor\xEDa" class="image-principal__preview" />\r
              } @else {\r
                <div class="image-principal__placeholder">\r
                  <app-icon name="catalog" style="width: 22px; height: 22px" />\r
                </div>\r
              }\r
              @if (!readonly()) {\r
                <div class="image-principal__actions">\r
                  <label class="btn btn--ghost btn--sm image-upload-btn">\r
                    {{ subiendoImagen() ? 'Cargando\u2026' : imagenUrl() ? 'Cambiar imagen' : 'Seleccionar imagen' }}\r
                    <input\r
                      type="file"\r
                      accept="image/jpeg,image/png,image/webp"\r
                      [disabled]="subiendoImagen()"\r
                      (change)="onImagenSeleccionada($event)"\r
                    />\r
                  </label>\r
                  @if (imagenUrl()) {\r
                    <button type="button" class="btn btn--ghost btn--sm" (click)="quitarImagen()">Quitar</button>\r
                  }\r
                </div>\r
              }\r
            </div>\r
            @if (imagenError()) {\r
              <span class="field__error">{{ imagenError() }}</span>\r
            }\r
          </div>\r
        }\r
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
              {{ submitting() ? 'Guardando\u2026' : 'Guardar categor\xEDa' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/atributos/category-management/category-form/category-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n.image-upload-btn {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-upload-btn input[type=file] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.image-principal {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.image-principal__actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.image-principal__preview {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--color-border);\n  flex-shrink: 0;\n}\n.image-principal__placeholder {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-sm);\n  background: var(--color-card-bg);\n  border: 1px dashed var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=category-form-UJFZ6YR5.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], category: [{ type: Input, args: [{ isSignal: true, alias: "category", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryForm, { className: "CategoryForm", filePath: "src/app/sucursales-catalogo/atributos/category-management/category-form/category-form.ts", lineNumber: 17 });
})();

// src/app/sucursales-catalogo/atributos/category-management/category-management.ts
var _forTrack0 = ($index, $item) => $item.id;
function CategoryManagement_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17)(2, "div", 17)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function CategoryManagement_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 18);
    \u0275\u0275text(2, "No se pudieron cargar las categor\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_22_Template_button_click_5_listener() {
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
function CategoryManagement_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 18);
    \u0275\u0275text(2, "A\xFAn no hay categor\xEDas registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea la primera categor\xEDa para empezar a organizar el cat\xE1logo.");
    \u0275\u0275elementEnd()();
  }
}
function CategoryManagement_Conditional_24_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(category_r4.imagen_url), \u0275\u0275sanitizeUrl);
  }
}
function CategoryManagement_Conditional_24_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "S/I");
    \u0275\u0275elementEnd();
  }
}
function CategoryManagement_Conditional_24_For_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_24_For_11_Conditional_12_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 31);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_24_For_11_Conditional_12_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const category_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(category_r4, $event));
    });
    \u0275\u0275element(2, "app-icon", 32);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_24_For_11_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const category_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(category_r4));
    });
    \u0275\u0275element(5, "app-icon", 33);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_24_For_11_Conditional_12_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const category_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(category_r4, $event));
    });
    \u0275\u0275element(8, "app-icon", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 35);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_24_For_11_Conditional_12_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const category_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCategory(category_r4, $event));
    });
    \u0275\u0275element(11, "app-icon", 36);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", category_r4.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r4.is_active ? "Desactivar" : "Activar", " ");
  }
}
function CategoryManagement_Conditional_24_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21)(2, "div", 22);
    \u0275\u0275conditionalCreate(3, CategoryManagement_Conditional_24_For_11_Conditional_3_Template, 1, 1, "img", 23)(4, CategoryManagement_Conditional_24_For_11_Conditional_4_Template, 2, 0, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "app-status-badge", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 26)(10, "button", 27);
    \u0275\u0275listener("click", function CategoryManagement_Conditional_24_For_11_Template_button_click_10_listener($event) {
      const category_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(category_r4.id, $event));
    });
    \u0275\u0275element(11, "app-icon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, CategoryManagement_Conditional_24_For_11_Conditional_12_Template, 13, 3, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(category_r4.imagen_url ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r4.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("active", category_r4.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === category_r4.id ? 12 : -1);
  }
}
function CategoryManagement_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 20)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, CategoryManagement_Conditional_24_For_11_Template, 13, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
var CategoryManagement = class _CategoryManagement {
  resolveMediaUrl = resolveMediaUrl;
  categoryService = inject(CategoryService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  categories = signal(
    [],
    ...ngDevMode ? [{ debugName: "categories" }] : (
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
  editingCategory = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingCategory" }] : (
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
    this.categoryService.list({ search: this.searchTerm() || void 0, estado: this.statusFilter() }).subscribe({
      next: (categories) => {
        this.categories.set(categories);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.categories.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingCategory.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(category) {
    this.openMenuId.set(null);
    this.editingCategory.set(category);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(category, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingCategory.set(category);
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
    const editing = this.editingCategory();
    this.submitting.set(true);
    const request$ = editing ? this.categoryService.update(editing.id, payload) : this.categoryService.create(payload);
    request$.subscribe({
      next: () => {
        this.submitting.set(false);
        this.drawerOpen.set(false);
        this.toast.success(editing ? "Categor\xEDa actualizada correctamente." : "Categor\xEDa creada correctamente.");
        this.load();
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe una categor\xEDa con ese nombre.");
        } else {
          this.toast.error("No se pudo guardar la categor\xEDa. Intenta nuevamente.");
        }
      }
    });
  }
  async toggleStatus(category, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (category.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar categor\xEDa?",
        message: "La categor\xEDa dejar\xE1 de estar disponible para nuevas prendas.",
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.categoryService.setActive(category.id, !category.is_active).subscribe({
      next: () => {
        this.toast.success(category.is_active ? "Categor\xEDa desactivada." : "Categor\xEDa activada correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado de la categor\xEDa.")
    });
  }
  async deleteCategory(category, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar categor\xEDa?",
      message: `Se eliminar\xE1 permanentemente "${category.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.categoryService.delete(category.id).subscribe({
      next: () => {
        this.toast.success("Categor\xEDa eliminada correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar esta categor\xEDa porque existen productos asociados. Primero debe eliminar o desasociar los productos.");
        } else if (err.status === 404) {
          this.toast.error("La categor\xEDa no existe o ya fue eliminada.");
        } else {
          this.toast.error("No se pudo eliminar la categor\xEDa.");
        }
      }
    });
  }
  static \u0275fac = function CategoryManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryManagement, selectors: [["app-category-management"]], hostBindings: function CategoryManagement_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CategoryManagement_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 26, vars: 7, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar categor\xEDa...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "category", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "category-cell"], ["alt", "", 1, "thumb", 3, "src"], [1, "thumb-placeholder"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function CategoryManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Organiza las prendas que ser\xE1n mostradas en el cat\xE1logo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function CategoryManagement_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nueva categor\xEDa ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("ngModelChange", function CategoryManagement_Template_input_ngModelChange_13_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function CategoryManagement_Template_select_ngModelChange_14_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Activas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Inactivas");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, CategoryManagement_Conditional_21_Template, 4, 0, "div", 12)(22, CategoryManagement_Conditional_22_Template, 7, 1, "div", 13)(23, CategoryManagement_Conditional_23_Template, 5, 0, "div", 14)(24, CategoryManagement_Conditional_24_Template, 12, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "app-category-form", 16);
      \u0275\u0275listener("save", function CategoryManagement_Template_app_category_form_save_25_listener($event) {
        return ctx.save($event);
      })("close", function CategoryManagement_Template_app_category_form_close_25_listener() {
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
      \u0275\u0275conditional(ctx.loading() ? 21 : ctx.errorMessage() ? 22 : ctx.categories().length === 0 ? 23 : 24);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("category", ctx.editingCategory())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, CategoryForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=category-management-YZNJ2QDM.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryManagement, [{
    type: Component,
    args: [{ selector: "app-category-management", imports: [FormsModule, Icon, StatusBadge, CategoryForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Categor\xEDas</h3>\r
      <p>Organiza las prendas que ser\xE1n mostradas en el cat\xE1logo.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nueva categor\xEDa\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar categor\xEDa..."\r
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
      <span class="state-block__title">No se pudieron cargar las categor\xEDas</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (categories().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay categor\xEDas registradas</span>\r
      <span>Crea la primera categor\xEDa para empezar a organizar el cat\xE1logo.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Nombre</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (category of categories(); track category.id) {\r
            <tr>\r
              <td class="cell-title">\r
                <div class="category-cell">\r
                  @if (category.imagen_url) {\r
                    <img class="thumb" [src]="resolveMediaUrl(category.imagen_url)" alt="" />\r
                  } @else {\r
                    <span class="thumb-placeholder">S/I</span>\r
                  }\r
                  {{ category.nombre }}\r
                </div>\r
              </td>\r
              <td><app-status-badge [active]="category.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(category.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === category.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(category, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(category)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="category.is_active"\r
                        (click)="toggleStatus(category, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ category.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteCategory(category, $event)"\r
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
<app-category-form\r
  [open]="drawerOpen()"\r
  [category]="editingCategory()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/atributos/category-management/category-management.scss */\n:host {\n  display: block;\n}\n.category-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=category-management-YZNJ2QDM.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryManagement, { className: "CategoryManagement", filePath: "src/app/sucursales-catalogo/atributos/category-management/category-management.ts", lineNumber: 19 });
})();

// src/app/sucursales-catalogo/atributos/color-management/color-form/color-form.ts
function ColorForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function ColorForm_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ColorForm_Conditional_0_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function ColorForm_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ColorForm_Conditional_0_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar color", " ");
  }
}
function ColorForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ColorForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function ColorForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ColorForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function ColorForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, ColorForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 11)(14, "span", 8);
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275element(17, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275element(19, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "footer", 17);
    \u0275\u0275conditionalCreate(23, ColorForm_Conditional_0_Conditional_23_Template, 2, 0, "button", 18)(24, ColorForm_Conditional_0_Conditional_24_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de color" : ctx_r1.isEditMode ? "Editar color" : "Nuevo color");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activo" : "Inactivo");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 23 : 24);
  }
}
var ColorForm = class _ColorForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  color = input(
    null,
    ...ngDevMode ? [{ debugName: "color" }] : (
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
    nombre: ["", [Validators.required, Validators.maxLength(80)]],
    is_active: [true]
  });
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const color = this.color();
      if (color) {
        this.form.reset({ nombre: color.nombre, is_active: color.is_active });
      } else {
        this.form.reset({ nombre: "", is_active: true });
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.color() !== null;
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
    this.save.emit({ nombre: value.nombre.trim(), is_active: value.is_active });
  }
  static \u0275fac = function ColorForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorForm, selectors: [["app-color-form"]], inputs: { open: [1, "open"], color: [1, "color"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Negro"], [1, "field__error"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function ColorForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ColorForm_Conditional_0_Template, 25, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n/*# sourceMappingURL=color-form-FZI573UR.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorForm, [{
    type: Component,
    args: [{ selector: "app-color-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de color' : isEditMode ? 'Editar color' : 'Nuevo color' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Negro" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
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
              {{ submitting() ? 'Guardando\u2026' : 'Guardar color' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/atributos/color-management/color-form/color-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=color-form-FZI573UR.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorForm, { className: "ColorForm", filePath: "src/app/sucursales-catalogo/atributos/color-management/color-form/color-form.ts", lineNumber: 12 });
})();

// src/app/sucursales-catalogo/atributos/color-management/color-management.ts
var _forTrack02 = ($index, $item) => $item.id;
function ColorManagement_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17)(2, "div", 17)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function ColorManagement_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 18);
    \u0275\u0275text(2, "No se pudieron cargar los colores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function ColorManagement_Conditional_22_Template_button_click_5_listener() {
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
function ColorManagement_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 18);
    \u0275\u0275text(2, "A\xFAn no hay colores registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea el primer color para empezar a organizar el cat\xE1logo.");
    \u0275\u0275elementEnd()();
  }
}
function ColorManagement_Conditional_24_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function ColorManagement_Conditional_24_For_11_Conditional_9_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function ColorManagement_Conditional_24_For_11_Conditional_9_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const color_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(color_r4, $event));
    });
    \u0275\u0275element(2, "app-icon", 29);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function ColorManagement_Conditional_24_For_11_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const color_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(color_r4));
    });
    \u0275\u0275element(5, "app-icon", 30);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function ColorManagement_Conditional_24_For_11_Conditional_9_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const color_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(color_r4, $event));
    });
    \u0275\u0275element(8, "app-icon", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function ColorManagement_Conditional_24_For_11_Conditional_9_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const color_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteColor(color_r4, $event));
    });
    \u0275\u0275element(11, "app-icon", 33);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const color_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", color_r4.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", color_r4.is_active ? "Desactivar" : "Activar", " ");
  }
}
function ColorManagement_Conditional_24_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "app-status-badge", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 23)(7, "button", 24);
    \u0275\u0275listener("click", function ColorManagement_Conditional_24_For_11_Template_button_click_7_listener($event) {
      const color_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(color_r4.id, $event));
    });
    \u0275\u0275element(8, "app-icon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ColorManagement_Conditional_24_For_11_Conditional_9_Template, 13, 3, "div", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(color_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", color_r4.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === color_r4.id ? 9 : -1);
  }
}
function ColorManagement_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 20)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, ColorManagement_Conditional_24_For_11_Template, 10, 3, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.colors());
  }
}
var ColorManagement = class _ColorManagement {
  colorService = inject(ColorService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  colors = signal(
    [],
    ...ngDevMode ? [{ debugName: "colors" }] : (
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
  editingColor = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingColor" }] : (
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
    this.colorService.list({ search: this.searchTerm() || void 0, estado: this.statusFilter() }).subscribe({
      next: (colors) => {
        this.colors.set(colors);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.colors.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingColor.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(color) {
    this.openMenuId.set(null);
    this.editingColor.set(color);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(color, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingColor.set(color);
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
    const editing = this.editingColor();
    this.submitting.set(true);
    const request$ = editing ? this.colorService.update(editing.id, payload) : this.colorService.create(payload);
    request$.subscribe({
      next: () => {
        this.submitting.set(false);
        this.drawerOpen.set(false);
        this.toast.success(editing ? "Color actualizado correctamente." : "Color creado correctamente.");
        this.load();
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe un color con ese nombre.");
        } else {
          this.toast.error("No se pudo guardar el color. Intenta nuevamente.");
        }
      }
    });
  }
  async toggleStatus(color, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (color.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar color?",
        message: "El color dejar\xE1 de estar disponible para nuevas prendas.",
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.colorService.setActive(color.id, !color.is_active).subscribe({
      next: () => {
        this.toast.success(color.is_active ? "Color desactivado." : "Color activado correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado del color.")
    });
  }
  async deleteColor(color, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar color?",
      message: `Se eliminar\xE1 permanentemente "${color.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.colorService.delete(color.id).subscribe({
      next: () => {
        this.toast.success("Color eliminado correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar este color porque existen productos asociados.");
        } else if (err.status === 404) {
          this.toast.error("El color no existe o ya fue eliminado.");
        } else {
          this.toast.error("No se pudo eliminar el color.");
        }
      }
    });
  }
  static \u0275fac = function ColorManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorManagement, selectors: [["app-color-management"]], hostBindings: function ColorManagement_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ColorManagement_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 26, vars: 7, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar color...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "color", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function ColorManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Colores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Administra los colores disponibles para las prendas del cat\xE1logo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function ColorManagement_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nuevo color ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("ngModelChange", function ColorManagement_Template_input_ngModelChange_13_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function ColorManagement_Template_select_ngModelChange_14_listener($event) {
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
      \u0275\u0275conditionalCreate(21, ColorManagement_Conditional_21_Template, 4, 0, "div", 12)(22, ColorManagement_Conditional_22_Template, 7, 1, "div", 13)(23, ColorManagement_Conditional_23_Template, 5, 0, "div", 14)(24, ColorManagement_Conditional_24_Template, 12, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "app-color-form", 16);
      \u0275\u0275listener("save", function ColorManagement_Template_app_color_form_save_25_listener($event) {
        return ctx.save($event);
      })("close", function ColorManagement_Template_app_color_form_close_25_listener() {
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
      \u0275\u0275conditional(ctx.loading() ? 21 : ctx.errorMessage() ? 22 : ctx.colors().length === 0 ? 23 : 24);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("color", ctx.editingColor())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, ColorForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=color-management-WTJOHZVW.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorManagement, [{
    type: Component,
    args: [{ selector: "app-color-management", imports: [FormsModule, Icon, StatusBadge, ColorForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Colores</h3>\r
      <p>Administra los colores disponibles para las prendas del cat\xE1logo.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nuevo color\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar color..."\r
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
      <span class="state-block__title">No se pudieron cargar los colores</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (colors().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay colores registrados</span>\r
      <span>Crea el primer color para empezar a organizar el cat\xE1logo.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Nombre</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (color of colors(); track color.id) {\r
            <tr>\r
              <td class="cell-title">{{ color.nombre }}</td>\r
              <td><app-status-badge [active]="color.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(color.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === color.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(color, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(color)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="color.is_active"\r
                        (click)="toggleStatus(color, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ color.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteColor(color, $event)"\r
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
<app-color-form\r
  [open]="drawerOpen()"\r
  [color]="editingColor()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/atributos/color-management/color-management.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=color-management-WTJOHZVW.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorManagement, { className: "ColorManagement", filePath: "src/app/sucursales-catalogo/atributos/color-management/color-management.ts", lineNumber: 18 });
})();

// src/app/sucursales-catalogo/atributos/size-management/size-form/size-form.ts
function SizeForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function SizeForm_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SizeForm_Conditional_0_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function SizeForm_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function SizeForm_Conditional_0_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar talla", " ");
  }
}
function SizeForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function SizeForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function SizeForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function SizeForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function SizeForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, SizeForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 11)(14, "span", 8);
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275element(17, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275element(19, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "footer", 17);
    \u0275\u0275conditionalCreate(23, SizeForm_Conditional_0_Conditional_23_Template, 2, 0, "button", 18)(24, SizeForm_Conditional_0_Conditional_24_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de talla" : ctx_r1.isEditMode ? "Editar talla" : "Nueva talla");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activa" : "Inactiva");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 23 : 24);
  }
}
var SizeForm = class _SizeForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  size = input(
    null,
    ...ngDevMode ? [{ debugName: "size" }] : (
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
    nombre: ["", [Validators.required, Validators.maxLength(80)]],
    is_active: [true]
  });
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const size = this.size();
      if (size) {
        this.form.reset({ nombre: size.nombre, is_active: size.is_active });
      } else {
        this.form.reset({ nombre: "", is_active: true });
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.size() !== null;
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
    this.save.emit({ nombre: value.nombre.trim(), is_active: value.is_active });
  }
  static \u0275fac = function SizeForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SizeForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizeForm, selectors: [["app-size-form"]], inputs: { open: [1, "open"], size: [1, "size"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. M, XL, 38..."], [1, "field__error"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function SizeForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SizeForm_Conditional_0_Template, 25, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n/*# sourceMappingURL=size-form-VJP52EZL.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SizeForm, [{
    type: Component,
    args: [{ selector: "app-size-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de talla' : isEditMode ? 'Editar talla' : 'Nueva talla' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. M, XL, 38..." />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
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
              {{ submitting() ? 'Guardando\u2026' : 'Guardar talla' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/atributos/size-management/size-form/size-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=size-form-VJP52EZL.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizeForm, { className: "SizeForm", filePath: "src/app/sucursales-catalogo/atributos/size-management/size-form/size-form.ts", lineNumber: 12 });
})();

// src/app/sucursales-catalogo/atributos/size-management/size-management.ts
var _forTrack03 = ($index, $item) => $item.id;
function SizeManagement_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17)(2, "div", 17)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function SizeManagement_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 18);
    \u0275\u0275text(2, "No se pudieron cargar las tallas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function SizeManagement_Conditional_22_Template_button_click_5_listener() {
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
function SizeManagement_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 18);
    \u0275\u0275text(2, "A\xFAn no hay tallas registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea la primera talla para empezar a organizar el cat\xE1logo.");
    \u0275\u0275elementEnd()();
  }
}
function SizeManagement_Conditional_24_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function SizeManagement_Conditional_24_For_11_Conditional_9_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function SizeManagement_Conditional_24_For_11_Conditional_9_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const size_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(size_r4, $event));
    });
    \u0275\u0275element(2, "app-icon", 29);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function SizeManagement_Conditional_24_For_11_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const size_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(size_r4));
    });
    \u0275\u0275element(5, "app-icon", 30);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function SizeManagement_Conditional_24_For_11_Conditional_9_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const size_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(size_r4, $event));
    });
    \u0275\u0275element(8, "app-icon", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function SizeManagement_Conditional_24_For_11_Conditional_9_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const size_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSize(size_r4, $event));
    });
    \u0275\u0275element(11, "app-icon", 33);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const size_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", size_r4.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", size_r4.is_active ? "Desactivar" : "Activar", " ");
  }
}
function SizeManagement_Conditional_24_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "app-status-badge", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 23)(7, "button", 24);
    \u0275\u0275listener("click", function SizeManagement_Conditional_24_For_11_Template_button_click_7_listener($event) {
      const size_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(size_r4.id, $event));
    });
    \u0275\u0275element(8, "app-icon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SizeManagement_Conditional_24_For_11_Conditional_9_Template, 13, 3, "div", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const size_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(size_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", size_r4.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === size_r4.id ? 9 : -1);
  }
}
function SizeManagement_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 20)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, SizeManagement_Conditional_24_For_11_Template, 10, 3, "tr", null, _forTrack03);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.sizes());
  }
}
var SizeManagement = class _SizeManagement {
  sizeService = inject(SizeService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  sizes = signal(
    [],
    ...ngDevMode ? [{ debugName: "sizes" }] : (
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
  editingSize = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingSize" }] : (
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
    this.sizeService.list({ search: this.searchTerm() || void 0, estado: this.statusFilter() }).subscribe({
      next: (sizes) => {
        this.sizes.set(sizes);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.sizes.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingSize.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(size) {
    this.openMenuId.set(null);
    this.editingSize.set(size);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(size, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingSize.set(size);
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
    const editing = this.editingSize();
    this.submitting.set(true);
    const request$ = editing ? this.sizeService.update(editing.id, payload) : this.sizeService.create(payload);
    request$.subscribe({
      next: () => {
        this.submitting.set(false);
        this.drawerOpen.set(false);
        this.toast.success(editing ? "Talla actualizada correctamente." : "Talla creada correctamente.");
        this.load();
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe una talla con ese nombre.");
        } else {
          this.toast.error("No se pudo guardar la talla. Intenta nuevamente.");
        }
      }
    });
  }
  async toggleStatus(size, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (size.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar talla?",
        message: "La talla dejar\xE1 de estar disponible para nuevas prendas.",
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.sizeService.setActive(size.id, !size.is_active).subscribe({
      next: () => {
        this.toast.success(size.is_active ? "Talla desactivada." : "Talla activada correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado de la talla.")
    });
  }
  async deleteSize(size, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar talla?",
      message: `Se eliminar\xE1 permanentemente "${size.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.sizeService.delete(size.id).subscribe({
      next: () => {
        this.toast.success("Talla eliminada correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar esta talla porque existen productos asociados.");
        } else if (err.status === 404) {
          this.toast.error("La talla no existe o ya fue eliminada.");
        } else {
          this.toast.error("No se pudo eliminar la talla.");
        }
      }
    });
  }
  static \u0275fac = function SizeManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SizeManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizeManagement, selectors: [["app-size-management"]], hostBindings: function SizeManagement_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SizeManagement_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 26, vars: 7, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar talla...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "size", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function SizeManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Tallas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Administra las tallas disponibles para las prendas del cat\xE1logo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function SizeManagement_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nueva talla ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("ngModelChange", function SizeManagement_Template_input_ngModelChange_13_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function SizeManagement_Template_select_ngModelChange_14_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Activas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Inactivas");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, SizeManagement_Conditional_21_Template, 4, 0, "div", 12)(22, SizeManagement_Conditional_22_Template, 7, 1, "div", 13)(23, SizeManagement_Conditional_23_Template, 5, 0, "div", 14)(24, SizeManagement_Conditional_24_Template, 12, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "app-size-form", 16);
      \u0275\u0275listener("save", function SizeManagement_Template_app_size_form_save_25_listener($event) {
        return ctx.save($event);
      })("close", function SizeManagement_Template_app_size_form_close_25_listener() {
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
      \u0275\u0275conditional(ctx.loading() ? 21 : ctx.errorMessage() ? 22 : ctx.sizes().length === 0 ? 23 : 24);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("size", ctx.editingSize())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, SizeForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=size-management-J6FUI57R.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SizeManagement, [{
    type: Component,
    args: [{ selector: "app-size-management", imports: [FormsModule, Icon, StatusBadge, SizeForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Tallas</h3>\r
      <p>Administra las tallas disponibles para las prendas del cat\xE1logo.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nueva talla\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar talla..."\r
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
      <span class="state-block__title">No se pudieron cargar las tallas</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (sizes().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay tallas registradas</span>\r
      <span>Crea la primera talla para empezar a organizar el cat\xE1logo.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Nombre</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (size of sizes(); track size.id) {\r
            <tr>\r
              <td class="cell-title">{{ size.nombre }}</td>\r
              <td><app-status-badge [active]="size.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(size.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === size.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(size, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(size)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="size.is_active"\r
                        (click)="toggleStatus(size, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ size.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteSize(size, $event)"\r
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
<app-size-form\r
  [open]="drawerOpen()"\r
  [size]="editingSize()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/atributos/size-management/size-management.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=size-management-J6FUI57R.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizeManagement, { className: "SizeManagement", filePath: "src/app/sucursales-catalogo/atributos/size-management/size-management.ts", lineNumber: 18 });
})();

// src/app/sucursales-catalogo/atributos/catalog-attributes.ts
function CatalogAttributes_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-category-management");
  }
}
function CatalogAttributes_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-size-management");
  }
}
function CatalogAttributes_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-color-management");
  }
}
var CatalogAttributes = class _CatalogAttributes {
  activeTab = signal(
    "categories",
    ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setTab(tab) {
    this.activeTab.set(tab);
  }
  static \u0275fac = function CatalogAttributes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogAttributes)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogAttributes, selectors: [["app-catalog-attributes"]], decls: 16, vars: 7, consts: [[1, "page-heading"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], [1, "tab-content"]], template: function CatalogAttributes_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Categor\xEDas, tallas y colores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Configura los datos base utilizados por las prendas del cat\xE1logo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "button", 2);
      \u0275\u0275listener("click", function CatalogAttributes_Template_button_click_6_listener() {
        return ctx.setTab("categories");
      });
      \u0275\u0275text(7, " Categor\xEDas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function CatalogAttributes_Template_button_click_8_listener() {
        return ctx.setTab("sizes");
      });
      \u0275\u0275text(9, " Tallas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 2);
      \u0275\u0275listener("click", function CatalogAttributes_Template_button_click_10_listener() {
        return ctx.setTab("colors");
      });
      \u0275\u0275text(11, " Colores ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 3);
      \u0275\u0275conditionalCreate(13, CatalogAttributes_Case_13_Template, 1, 0, "app-category-management")(14, CatalogAttributes_Case_14_Template, 1, 0, "app-size-management")(15, CatalogAttributes_Case_15_Template, 1, 0, "app-color-management");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-active", ctx.activeTab() === "categories");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.activeTab() === "sizes");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.activeTab() === "colors");
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_3_0 = ctx.activeTab()) === "categories" ? 13 : tmp_3_0 === "sizes" ? 14 : tmp_3_0 === "colors" ? 15 : -1);
    }
  }, dependencies: [CategoryManagement, SizeManagement, ColorManagement], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-heading[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.tab-content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=catalog-attributes-TKUCDERE.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogAttributes, [{
    type: Component,
    args: [{ selector: "app-catalog-attributes", imports: [CategoryManagement, SizeManagement, ColorManagement], template: `<div class="page-heading">\r
  <h2>Categor\xEDas, tallas y colores</h2>\r
  <p>Configura los datos base utilizados por las prendas del cat\xE1logo.</p>\r
</div>\r
\r
<div class="tabs">\r
  <button type="button" class="tab" [class.is-active]="activeTab() === 'categories'" (click)="setTab('categories')">\r
    Categor\xEDas\r
  </button>\r
  <button type="button" class="tab" [class.is-active]="activeTab() === 'sizes'" (click)="setTab('sizes')">\r
    Tallas\r
  </button>\r
  <button type="button" class="tab" [class.is-active]="activeTab() === 'colors'" (click)="setTab('colors')">\r
    Colores\r
  </button>\r
</div>\r
\r
<div class="tab-content">\r
  @switch (activeTab()) {\r
    @case ('categories') {\r
      <app-category-management />\r
    }\r
    @case ('sizes') {\r
      <app-size-management />\r
    }\r
    @case ('colors') {\r
      <app-color-management />\r
    }\r
  }\r
</div>\r
`, styles: ["/* src/app/sucursales-catalogo/atributos/catalog-attributes.scss */\n:host {\n  display: block;\n}\n.page-heading {\n  margin-bottom: 18px;\n}\n.page-heading h2 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.page-heading p {\n  margin-top: 4px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.tab-content {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=catalog-attributes-TKUCDERE.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogAttributes, { className: "CatalogAttributes", filePath: "src/app/sucursales-catalogo/atributos/catalog-attributes.ts", lineNumber: 14 });
})();
export {
  CatalogAttributes
};
//# debugId=94de7d7c-9037-59ce-bc2a-0221a8234dbd
//# sourceMappingURL=chunk-2IRSWIGU.js.map
