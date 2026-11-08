import {
  PanelProveedorService
} from "./chunk-WFI6N5TU.js";
import {
  StatusBadge
} from "./chunk-RTXU4SY7.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/proveedor/mi-perfil/mi-perfil.ts
function MiPerfil_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r0.perfil().is_active);
  }
}
function MiPerfil_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 6)(2, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "No se pudo cargar tu perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function MiPerfil_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function MiPerfil_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "La raz\xF3n social es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "El nombre de contacto es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_10_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ingresa un tel\xE9fono v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275listener("ngSubmit", function MiPerfil_Conditional_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "label", 10)(2, "span", 11);
    \u0275\u0275text(3, "Raz\xF3n social *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, MiPerfil_Conditional_10_Conditional_5_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 10)(7, "span", 11);
    \u0275\u0275text(8, "Nombre de contacto *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, MiPerfil_Conditional_10_Conditional_10_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "label", 10)(13, "span", 11);
    \u0275\u0275text(14, "Correo *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(16, MiPerfil_Conditional_10_Conditional_16_Template, 2, 0, "span", 13)(17, MiPerfil_Conditional_10_Conditional_17_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 10)(19, "span", 11);
    \u0275\u0275text(20, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(22, MiPerfil_Conditional_10_Conditional_22_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "footer", 18)(24, "button", 19);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r0.form.controls.razon_social.invalid && ctx_r0.form.controls.razon_social.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.razon_social.invalid && ctx_r0.form.controls.razon_social.touched ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r0.form.controls.nombre_contacto.invalid && ctx_r0.form.controls.nombre_contacto.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.nombre_contacto.invalid && ctx_r0.form.controls.nombre_contacto.touched ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r0.form.controls.correo.invalid && ctx_r0.form.controls.correo.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.correo.hasError("required") && ctx_r0.form.controls.correo.touched ? 16 : ctx_r0.form.controls.correo.hasError("email") && ctx_r0.form.controls.correo.touched ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r0.form.controls.telefono.invalid && ctx_r0.form.controls.telefono.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.telefono.invalid && ctx_r0.form.controls.telefono.touched ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting() ? "Guardando\u2026" : "Guardar cambios", " ");
  }
}
var TELEFONO_PATTERN = /^[0-9+\-\s()]{6,20}$/;
var MiPerfil = class _MiPerfil {
  fb = inject(FormBuilder);
  panelService = inject(PanelProveedorService);
  toast = inject(ToastService);
  perfil = signal(
    null,
    ...ngDevMode ? [{ debugName: "perfil" }] : (
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
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = this.fb.nonNullable.group({
    razon_social: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    nombre_contacto: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    correo: ["", [Validators.required, Validators.email]],
    telefono: ["", [Validators.required, Validators.pattern(TELEFONO_PATTERN)]]
  });
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.panelService.miPerfil().subscribe({
      next: (perfil) => {
        this.perfil.set(perfil);
        this.form.reset({
          razon_social: perfil.razon_social,
          nombre_contacto: perfil.nombre_contacto,
          correo: perfil.correo,
          telefono: perfil.telefono
        });
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.submitting.set(true);
    this.panelService.actualizarMiPerfil({
      razon_social: value.razon_social.trim(),
      nombre_contacto: value.nombre_contacto.trim(),
      correo: value.correo.trim().toLowerCase(),
      telefono: value.telefono.trim()
    }).subscribe({
      next: (perfil) => {
        this.submitting.set(false);
        this.perfil.set(perfil);
        this.toast.success("Perfil actualizado correctamente.");
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe un proveedor con esa raz\xF3n social.");
        } else {
          this.toast.error("No se pudo guardar tu perfil. Intenta nuevamente.");
        }
      }
    });
  }
  static \u0275fac = function MiPerfil_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MiPerfil)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MiPerfil, selectors: [["app-mi-perfil"]], decls: 11, vars: 2, consts: [[1, "admin-card", "section", "form-page"], [1, "section__header"], [3, "active"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "form-page__body", 3, "formGroup"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "form-page__body", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "razon_social"], [1, "field__error"], ["type", "text", "formControlName", "nombre_contacto"], [1, "field-row"], ["type", "email", "formControlName", "correo"], ["type", "text", "formControlName", "telefono"], [1, "form-page__footer"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function MiPerfil_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Mi perfil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Consulta y edita los datos de contacto de tu empresa.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, MiPerfil_Conditional_7_Template, 1, 1, "app-status-badge", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, MiPerfil_Conditional_8_Template, 3, 0, "div", 3)(9, MiPerfil_Conditional_9_Template, 7, 1, "div", 4)(10, MiPerfil_Conditional_10_Template, 26, 15, "form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.perfil() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 8 : ctx.errorMessage() ? 9 : 10);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, StatusBadge], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.form-page__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 560px;\n  margin-top: 18px;\n}\n.form-page__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n@media (max-width: 480px) {\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 18px;\n  }\n  .form-page__footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=mi-perfil-AMHOQHIH.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiPerfil, [{
    type: Component,
    args: [{ selector: "app-mi-perfil", imports: [ReactiveFormsModule, StatusBadge], template: `<section class="admin-card section form-page">\r
  <div class="section__header">\r
    <div>\r
      <h3>Mi perfil</h3>\r
      <p>Consulta y edita los datos de contacto de tu empresa.</p>\r
    </div>\r
    @if (perfil()) {\r
      <app-status-badge [active]="perfil()!.is_active" />\r
    }\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="section__body">\r
      <div class="skeleton-row"></div>\r
      <div class="skeleton-row"></div>\r
    </div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar tu perfil</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else {\r
    <form [formGroup]="form" (ngSubmit)="submit()" class="form-page__body">\r
      <label\r
        class="field"\r
        [class.has-error]="form.controls.razon_social.invalid && form.controls.razon_social.touched"\r
      >\r
        <span class="field__label">Raz\xF3n social *</span>\r
        <input type="text" formControlName="razon_social" />\r
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
        <input type="text" formControlName="nombre_contacto" />\r
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
          <input type="email" formControlName="correo" />\r
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
          <input type="text" formControlName="telefono" />\r
          @if (form.controls.telefono.invalid && form.controls.telefono.touched) {\r
            <span class="field__error">Ingresa un tel\xE9fono v\xE1lido.</span>\r
          }\r
        </label>\r
      </div>\r
\r
      <footer class="form-page__footer">\r
        <button type="submit" class="btn btn--primary" [disabled]="submitting()">\r
          {{ submitting() ? 'Guardando\u2026' : 'Guardar cambios' }}\r
        </button>\r
      </footer>\r
    </form>\r
  }\r
</section>\r
`, styles: ["/* src/app/features/proveedor/mi-perfil/mi-perfil.scss */\n:host {\n  display: block;\n}\n.form-page__body {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 560px;\n  margin-top: 18px;\n}\n.form-page__footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n@media (max-width: 480px) {\n  .field-row {\n    flex-direction: column;\n    gap: 18px;\n  }\n  .form-page__footer .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=mi-perfil-AMHOQHIH.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MiPerfil, { className: "MiPerfil", filePath: "src/app/features/proveedor/mi-perfil/mi-perfil.ts", lineNumber: 16 });
})();
export {
  MiPerfil
};
//# debugId=cb67ee1c-5d49-5491-b658-e33f4905bf4e
//# sourceMappingURL=chunk-U6ABR6WQ.js.map
