import {
  PanelProveedorService
} from "./chunk-WFI6N5TU.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OB3O2VC6.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  Router
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/proveedor/enviar-producto/enviar-producto.ts
function EnviarProducto_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function EnviarProducto_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "button", 21);
    \u0275\u0275listener("click", function EnviarProducto_Conditional_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.quitarImagen());
    });
    \u0275\u0275element(3, "app-icon", 22);
    \u0275\u0275text(4, " Quitar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function EnviarProducto_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 9);
    \u0275\u0275element(1, "app-icon", 23);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Subir imagen (JPG, PNG o WEBP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 24);
    \u0275\u0275listener("change", function EnviarProducto_Conditional_21_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImagenSeleccionada($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var EnviarProducto = class _EnviarProducto {
  fb = inject(FormBuilder);
  panelService = inject(PanelProveedorService);
  toast = inject(ToastService);
  router = inject(Router);
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenSeleccionada = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenSeleccionada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenPreviewUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenPreviewUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.maxLength(150)]],
    descripcion: [""],
    disponibilidad: [true]
  });
  onImagenSeleccionada(event) {
    const input = event.target;
    const archivo = input.files?.[0] ?? null;
    if (!archivo) {
      return;
    }
    if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(archivo.type)) {
      this.toast.error("La imagen debe ser JPG, PNG o WEBP.");
      input.value = "";
      return;
    }
    this.imagenSeleccionada.set(archivo);
    const lector = new FileReader();
    lector.onload = () => this.imagenPreviewUrl.set(lector.result);
    lector.readAsDataURL(archivo);
  }
  quitarImagen() {
    this.imagenSeleccionada.set(null);
    this.imagenPreviewUrl.set(null);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.submitting.set(true);
    this.panelService.enviarProducto({
      nombre: value.nombre.trim(),
      descripcion: value.descripcion.trim() || null,
      disponibilidad: value.disponibilidad
    }).subscribe({
      next: (producto) => {
        const archivo = this.imagenSeleccionada();
        if (!archivo) {
          this.submitting.set(false);
          this.toast.success("Producto enviado correctamente.");
          this.router.navigateByUrl("/proveedor/mis-productos");
          return;
        }
        this.panelService.establecerImagen(producto.id, archivo).subscribe({
          next: () => {
            this.submitting.set(false);
            this.toast.success("Producto enviado correctamente.");
            this.router.navigateByUrl("/proveedor/mis-productos");
          },
          error: () => {
            this.submitting.set(false);
            this.toast.error("El producto se envi\xF3, pero la imagen no se pudo guardar.");
            this.router.navigateByUrl("/proveedor/mis-productos");
          }
        });
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error("No se pudo enviar el producto. Intenta nuevamente.");
      }
    });
  }
  static \u0275fac = function EnviarProducto_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnviarProducto)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnviarProducto, selectors: [["app-enviar-producto"]], decls: 37, vars: 8, consts: [[1, "admin-card", "section", "form-page"], [1, "section__header"], [1, "form-page__body", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Chaqueta Denim Cl\xE1sica"], [1, "field__error"], ["formControlName", "descripcion", "rows", "4", "placeholder", "Detalles de la prenda (opcional)"], [1, "imagen-preview"], [1, "imagen-picker"], [1, "field__hint"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "disponibilidad"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "form-page__footer"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], ["name", "plus", 2, "width", "14px", "height", "14px"], ["alt", "Vista previa", 3, "src"], ["type", "button", 1, "imagen-preview__quitar", 3, "click"], ["name", "close", 2, "width", "13px", "height", "13px"], ["name", "products", 2, "width", "22px", "height", "22px"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", "hidden", "", 3, "change"]], template: function EnviarProducto_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Enviar producto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Comparte la informaci\xF3n de una prenda que ofreces a FashionStore.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "form", 2);
      \u0275\u0275listener("ngSubmit", function EnviarProducto_Template_form_ngSubmit_7_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(8, "label", 3)(9, "span", 4);
      \u0275\u0275text(10, "Nombre *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 5);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(12, EnviarProducto_Conditional_12_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 3)(14, "span", 4);
      \u0275\u0275text(15, "Descripci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "textarea", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 3)(18, "span", 4);
      \u0275\u0275text(19, "Imagen de referencia");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, EnviarProducto_Conditional_20_Template, 5, 1, "div", 8)(21, EnviarProducto_Conditional_21_Template, 5, 0, "label", 9);
      \u0275\u0275elementStart(22, "span", 10);
      \u0275\u0275text(23, "Es solo una referencia para el Administrador; no es la imagen final del cat\xE1logo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "label", 11)(25, "span", 4);
      \u0275\u0275text(26, "Disponibilidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 12);
      \u0275\u0275element(28, "input", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(29, "span", 14);
      \u0275\u0275element(30, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 16);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "footer", 17)(34, "button", 18);
      \u0275\u0275element(35, "app-icon", 19);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275classProp("has-error", ctx.form.controls.nombre.invalid && ctx.form.controls.nombre.touched);
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.nombre.invalid && ctx.form.controls.nombre.touched ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_5_0 = ctx.imagenPreviewUrl()) ? 20 : 21, tmp_5_0);
      \u0275\u0275advance(8);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.form.controls.disponibilidad.value ? "Disponible" : "No disponible");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.submitting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Enviando\u2026" : "Enviar producto", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.form-page__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 560px;\n  margin-top: 18px;\n}\n.form-page__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n.imagen-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px 16px;\n  border: 1px dashed var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  color: var(--%NS%color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n  text-align: center;\n}\n.imagen-picker[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n}\n.imagen-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n}\n.imagen-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--%NS%color-border);\n}\n.imagen-preview__quitar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n  border: none;\n  background: none;\n  color: var(--%NS%color-text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 0;\n}\n.imagen-preview__quitar[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-danger);\n}\n@media (max-width: 480px) {\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 18px;\n  }\n  .form-page__footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=enviar-producto-L3T72UZ4.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnviarProducto, [{
    type: Component,
    args: [{ selector: "app-enviar-producto", imports: [ReactiveFormsModule, Icon], template: `<section class="admin-card section form-page">\r
  <div class="section__header">\r
    <div>\r
      <h3>Enviar producto</h3>\r
      <p>Comparte la informaci\xF3n de una prenda que ofreces a FashionStore.</p>\r
    </div>\r
  </div>\r
\r
  <form [formGroup]="form" (ngSubmit)="submit()" class="form-page__body">\r
    <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
      <span class="field__label">Nombre *</span>\r
      <input type="text" formControlName="nombre" placeholder="Ej. Chaqueta Denim Cl\xE1sica" />\r
      @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
        <span class="field__error">El nombre es obligatorio.</span>\r
      }\r
    </label>\r
\r
    <label class="field">\r
      <span class="field__label">Descripci\xF3n</span>\r
      <textarea formControlName="descripcion" rows="4" placeholder="Detalles de la prenda (opcional)"></textarea>\r
    </label>\r
\r
    <div class="field">\r
      <span class="field__label">Imagen de referencia</span>\r
      @if (imagenPreviewUrl(); as preview) {\r
        <div class="imagen-preview">\r
          <img [src]="preview" alt="Vista previa" />\r
          <button type="button" class="imagen-preview__quitar" (click)="quitarImagen()">\r
            <app-icon name="close" style="width: 13px; height: 13px" />\r
            Quitar\r
          </button>\r
        </div>\r
      } @else {\r
        <label class="imagen-picker">\r
          <app-icon name="products" style="width: 22px; height: 22px" />\r
          <span>Subir imagen (JPG, PNG o WEBP)</span>\r
          <input type="file" accept="image/jpeg,image/png,image/webp" (change)="onImagenSeleccionada($event)" hidden />\r
        </label>\r
      }\r
      <span class="field__hint">Es solo una referencia para el Administrador; no es la imagen final del cat\xE1logo.</span>\r
    </div>\r
\r
    <label class="field field--switch">\r
      <span class="field__label">Disponibilidad</span>\r
      <span class="switch">\r
        <input type="checkbox" formControlName="disponibilidad" />\r
        <span class="switch__track"><span class="switch__thumb"></span></span>\r
        <span class="switch__text">{{ form.controls.disponibilidad.value ? 'Disponible' : 'No disponible' }}</span>\r
      </span>\r
    </label>\r
\r
    <footer class="form-page__footer">\r
      <button type="submit" class="btn btn--primary" [disabled]="submitting()">\r
        <app-icon name="plus" style="width: 14px; height: 14px" />\r
        {{ submitting() ? 'Enviando\u2026' : 'Enviar producto' }}\r
      </button>\r
    </footer>\r
  </form>\r
</section>\r
`, styles: ["/* src/app/features/proveedor/enviar-producto/enviar-producto.scss */\n:host {\n  display: block;\n}\n.form-page__body {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 560px;\n  margin-top: 18px;\n}\n.form-page__footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n.imagen-picker {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px 16px;\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n  text-align: center;\n}\n.imagen-picker:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.imagen-preview {\n  position: relative;\n  width: 140px;\n}\n.imagen-preview img {\n  width: 140px;\n  height: 140px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--color-border);\n}\n.imagen-preview__quitar {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n  border: none;\n  background: none;\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 0;\n}\n.imagen-preview__quitar:hover {\n  color: var(--color-danger);\n}\n@media (max-width: 480px) {\n  .field-row {\n    flex-direction: column;\n    gap: 18px;\n  }\n  .form-page__footer .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=enviar-producto-L3T72UZ4.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnviarProducto, { className: "EnviarProducto", filePath: "src/app/features/proveedor/enviar-producto/enviar-producto.ts", lineNumber: 22 });
})();
export {
  EnviarProducto
};
//# debugId=da555dd3-9fd0-5231-9d4e-088d43947278
//# sourceMappingURL=chunk-YSCVGALX.js.map
