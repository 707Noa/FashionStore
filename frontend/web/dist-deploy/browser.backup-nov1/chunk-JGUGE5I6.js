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
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  ActivatedRoute,
  RouterLink
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
  ɵɵattribute,
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

// src/app/usuarios-y-accesos/cu03-recuperar-contrasena/restablecer-contrasena.ts
function RestablecerContrasena_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-icon", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, 'Este enlace no es v\xE1lido. Solicita uno nuevo desde "\xBFOlvidaste tu contrase\xF1a?".');
    \u0275\u0275elementEnd()();
  }
}
function RestablecerContrasena_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "La contrase\xF1a es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function RestablecerContrasena_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "La contrase\xF1a debe tener al menos 8 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function RestablecerContrasena_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Confirma tu contrase\xF1a.");
    \u0275\u0275elementEnd();
  }
}
function RestablecerContrasena_Conditional_9_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Las contrase\xF1as no coinciden.");
    \u0275\u0275elementEnd();
  }
}
function RestablecerContrasena_Conditional_9_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function RestablecerContrasena_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Elige una nueva contrase\xF1a para tu cuenta.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "form", 9);
    \u0275\u0275listener("ngSubmit", function RestablecerContrasena_Conditional_9_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(3, "label", 10)(4, "span", 11);
    \u0275\u0275text(5, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "app-icon", 13)(8, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275listener("click", function RestablecerContrasena_Conditional_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility());
    });
    \u0275\u0275element(10, "app-icon", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, RestablecerContrasena_Conditional_9_Conditional_11_Template, 2, 0, "span", 17)(12, RestablecerContrasena_Conditional_9_Conditional_12_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 10)(14, "span", 11);
    \u0275\u0275text(15, "Confirmar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275element(17, "app-icon", 13)(18, "input", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275listener("click", function RestablecerContrasena_Conditional_9_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleConfirmarPasswordVisibility());
    });
    \u0275\u0275element(20, "app-icon", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, RestablecerContrasena_Conditional_9_Conditional_21_Template, 2, 0, "span", 17)(22, RestablecerContrasena_Conditional_9_Conditional_22_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, RestablecerContrasena_Conditional_9_Conditional_23_Template, 2, 1, "p", 19);
    \u0275\u0275elementStart(24, "button", 20);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.password.invalid && ctx_r1.form.controls.password.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showPassword() ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a")("aria-pressed", ctx_r1.showPassword());
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showPassword() ? "eye-off" : "eye");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.password.hasError("required") && ctx_r1.form.controls.password.touched ? 11 : ctx_r1.form.controls.password.hasError("minlength") && ctx_r1.form.controls.password.touched ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", (ctx_r1.form.controls.confirmarPassword.invalid || ctx_r1.form.hasError("passwordsNoCoinciden")) && ctx_r1.form.controls.confirmarPassword.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r1.showConfirmarPassword() ? "text" : "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showConfirmarPassword() ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a")("aria-pressed", ctx_r1.showConfirmarPassword());
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showConfirmarPassword() ? "eye-off" : "eye");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.confirmarPassword.hasError("required") && ctx_r1.form.controls.confirmarPassword.touched ? 21 : ctx_r1.form.hasError("passwordsNoCoinciden") && ctx_r1.form.controls.confirmarPassword.touched ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Actualizando\u2026" : "Actualizar contrase\xF1a", " ");
  }
}
function RestablecerContrasena_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-icon", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Tu contrase\xF1a se actualiz\xF3 correctamente.");
    \u0275\u0275elementEnd()();
  }
}
function passwordsCoincidenValidator(group) {
  const password = group.get("password")?.value;
  const confirmarPassword = group.get("confirmarPassword")?.value;
  return password === confirmarPassword ? null : { passwordsNoCoinciden: true };
}
var RestablecerContrasena = class _RestablecerContrasena {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);
  token = this.route.snapshot.queryParamMap.get("token") ?? "";
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  exito = signal(
    false,
    ...ngDevMode ? [{ debugName: "exito" }] : (
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
  showPassword = signal(
    false,
    ...ngDevMode ? [{ debugName: "showPassword" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showConfirmarPassword = signal(
    false,
    ...ngDevMode ? [{ debugName: "showConfirmarPassword" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Sin token en la URL, el enlace es inválido de entrada -- no tiene caso
  // mostrar el formulario ni dejar que el usuario lo complete para nada.
  enlaceInvalido = signal(
    this.token.length === 0,
    ...ngDevMode ? [{ debugName: "enlaceInvalido" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = this.fb.nonNullable.group({
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirmarPassword: ["", [Validators.required]]
  }, { validators: [passwordsCoincidenValidator] });
  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }
  toggleConfirmarPasswordVisibility() {
    this.showConfirmarPassword.update((value) => !value);
  }
  submit() {
    if (this.submitting()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { password, confirmarPassword } = this.form.getRawValue();
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.authService.resetPassword({
      token: this.token,
      new_password: password,
      confirmar_password: confirmarPassword
    }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.exito.set(true);
      },
      error: (error) => {
        this.submitting.set(false);
        this.errorMessage.set(this.mensajeDeError(error));
      }
    });
  }
  mensajeDeError(error) {
    if (error.status === 0) {
      return "No se pudo conectar con el servidor. Verifica tu conexi\xF3n e int\xE9ntalo nuevamente.";
    }
    if (error.status === 400) {
      return typeof error.error?.detail === "string" ? error.error.detail : "El enlace no es v\xE1lido o ya expir\xF3. Solicita uno nuevo.";
    }
    if (error.status === 422) {
      const detalle = error.error?.detail;
      if (Array.isArray(detalle) && typeof detalle[0]?.msg === "string") {
        return detalle[0].msg;
      }
      return "Revisa los datos ingresados.";
    }
    return "Ocurri\xF3 un error al actualizar tu contrase\xF1a. Int\xE9ntalo nuevamente.";
  }
  static \u0275fac = function RestablecerContrasena_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestablecerContrasena)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestablecerContrasena, selectors: [["app-restablecer-contrasena"]], decls: 14, vars: 1, consts: [[1, "restablecer-page"], [1, "restablecer-card"], ["routerLink", "/", 1, "restablecer-card__brand"], [1, "restablecer-confirmacion", "restablecer-confirmacion--error"], [1, "restablecer-confirmacion"], [1, "restablecer-card__links"], ["routerLink", "/login", 1, "restablecer-card__link"], ["name", "lock", 1, "restablecer-confirmacion__icon"], [1, "restablecer-card__subtitle"], ["novalidate", "", 1, "restablecer-form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], [1, "field__control"], ["name", "lock", 1, "field__icon"], ["formControlName", "password", "placeholder", "M\xEDnimo 8 caracteres", "autocomplete", "new-password", 3, "type"], ["type", "button", 1, "field__toggle", 3, "click"], [2, "width", "17px", "height", "17px", 3, "name"], [1, "field__error"], ["formControlName", "confirmarPassword", "placeholder", "Repite tu contrase\xF1a", "autocomplete", "new-password", 3, "type"], ["role", "alert", 1, "restablecer-form__error"], ["type", "submit", 1, "btn", "btn--primary", "restablecer-form__submit", 3, "disabled"]], template: function RestablecerContrasena_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "FASHION");
      \u0275\u0275element(4, "br");
      \u0275\u0275text(5, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Restablecer contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, RestablecerContrasena_Conditional_8_Template, 4, 0, "div", 3)(9, RestablecerContrasena_Conditional_9_Template, 26, 18)(10, RestablecerContrasena_Conditional_10_Template, 4, 0, "div", 4);
      \u0275\u0275elementStart(11, "div", 5)(12, "a", 6);
      \u0275\u0275text(13, "Volver a iniciar sesi\xF3n");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.enlaceInvalido() ? 8 : !ctx.exito() ? 9 : 10);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.restablecer-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--%NS%color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--%NS%color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--%NS%color-bg);\n}\n.restablecer-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 40px 36px;\n}\n.restablecer-card__brand[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.04em;\n}\n.restablecer-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.restablecer-card__subtitle[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.restablecer-form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  text-align: left;\n}\n.field__control[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 38px !important;\n  padding-right: 38px !important;\n}\n.field__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--%NS%color-text-secondary);\n  pointer-events: none;\n}\n.field__toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  color: var(--%NS%color-text-secondary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.field__toggle[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text);\n}\n.field__toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.restablecer-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.restablecer-form__error[_ngcontent-%COMP%] {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-danger-bg);\n  font-size: 12.5px;\n  color: var(--%NS%color-danger);\n  text-align: left;\n}\n.restablecer-confirmacion[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.restablecer-confirmacion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  line-height: 1.5;\n}\n.restablecer-confirmacion--error[_ngcontent-%COMP%]   .restablecer-confirmacion__icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-danger);\n}\n.restablecer-confirmacion__icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  color: var(--%NS%color-primary);\n}\n.restablecer-card__links[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--%NS%color-border);\n  display: flex;\n  justify-content: center;\n}\n.restablecer-card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  transition: color var(--%NS%transition-fast);\n}\n.restablecer-card__link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .restablecer-page[_ngcontent-%COMP%] {\n    padding: 28px 16px;\n  }\n  .restablecer-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=restablecer-contrasena-RR242LON.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestablecerContrasena, [{
    type: Component,
    args: [{ selector: "app-restablecer-contrasena", imports: [ReactiveFormsModule, RouterLink, Icon], template: `<div class="restablecer-page">\r
  <div class="restablecer-card">\r
    <a routerLink="/" class="restablecer-card__brand">FASHION<br />STORE</a>\r
    <h1>Restablecer contrase\xF1a</h1>\r
\r
    @if (enlaceInvalido()) {\r
      <div class="restablecer-confirmacion restablecer-confirmacion--error">\r
        <app-icon name="lock" class="restablecer-confirmacion__icon" />\r
        <p>Este enlace no es v\xE1lido. Solicita uno nuevo desde "\xBFOlvidaste tu contrase\xF1a?".</p>\r
      </div>\r
    } @else if (!exito()) {\r
      <p class="restablecer-card__subtitle">Elige una nueva contrase\xF1a para tu cuenta.</p>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="restablecer-form" novalidate>\r
        <label class="field" [class.has-error]="form.controls.password.invalid && form.controls.password.touched">\r
          <span class="field__label">Nueva contrase\xF1a</span>\r
          <div class="field__control">\r
            <app-icon name="lock" class="field__icon" />\r
            <input\r
              [type]="showPassword() ? 'text' : 'password'"\r
              formControlName="password"\r
              placeholder="M\xEDnimo 8 caracteres"\r
              autocomplete="new-password"\r
            />\r
            <button\r
              type="button"\r
              class="field__toggle"\r
              (click)="togglePasswordVisibility()"\r
              [attr.aria-label]="showPassword() ? 'Ocultar contrase\xF1a' : 'Mostrar contrase\xF1a'"\r
              [attr.aria-pressed]="showPassword()"\r
            >\r
              <app-icon [name]="showPassword() ? 'eye-off' : 'eye'" style="width: 17px; height: 17px" />\r
            </button>\r
          </div>\r
          @if (form.controls.password.hasError('required') && form.controls.password.touched) {\r
            <span class="field__error">La contrase\xF1a es obligatoria.</span>\r
          } @else if (form.controls.password.hasError('minlength') && form.controls.password.touched) {\r
            <span class="field__error">La contrase\xF1a debe tener al menos 8 caracteres.</span>\r
          }\r
        </label>\r
\r
        <label\r
          class="field"\r
          [class.has-error]="\r
            (form.controls.confirmarPassword.invalid || form.hasError('passwordsNoCoinciden')) &&\r
            form.controls.confirmarPassword.touched\r
          "\r
        >\r
          <span class="field__label">Confirmar contrase\xF1a</span>\r
          <div class="field__control">\r
            <app-icon name="lock" class="field__icon" />\r
            <input\r
              [type]="showConfirmarPassword() ? 'text' : 'password'"\r
              formControlName="confirmarPassword"\r
              placeholder="Repite tu contrase\xF1a"\r
              autocomplete="new-password"\r
            />\r
            <button\r
              type="button"\r
              class="field__toggle"\r
              (click)="toggleConfirmarPasswordVisibility()"\r
              [attr.aria-label]="showConfirmarPassword() ? 'Ocultar contrase\xF1a' : 'Mostrar contrase\xF1a'"\r
              [attr.aria-pressed]="showConfirmarPassword()"\r
            >\r
              <app-icon [name]="showConfirmarPassword() ? 'eye-off' : 'eye'" style="width: 17px; height: 17px" />\r
            </button>\r
          </div>\r
          @if (form.controls.confirmarPassword.hasError('required') && form.controls.confirmarPassword.touched) {\r
            <span class="field__error">Confirma tu contrase\xF1a.</span>\r
          } @else if (form.hasError('passwordsNoCoinciden') && form.controls.confirmarPassword.touched) {\r
            <span class="field__error">Las contrase\xF1as no coinciden.</span>\r
          }\r
        </label>\r
\r
        @if (errorMessage()) {\r
          <p class="restablecer-form__error" role="alert">{{ errorMessage() }}</p>\r
        }\r
\r
        <button type="submit" class="btn btn--primary restablecer-form__submit" [disabled]="submitting()">\r
          {{ submitting() ? 'Actualizando\u2026' : 'Actualizar contrase\xF1a' }}\r
        </button>\r
      </form>\r
    } @else {\r
      <div class="restablecer-confirmacion">\r
        <app-icon name="lock" class="restablecer-confirmacion__icon" />\r
        <p>Tu contrase\xF1a se actualiz\xF3 correctamente.</p>\r
      </div>\r
    }\r
\r
    <div class="restablecer-card__links">\r
      <a routerLink="/login" class="restablecer-card__link">Volver a iniciar sesi\xF3n</a>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/usuarios-y-accesos/cu03-recuperar-contrasena/restablecer-contrasena.scss */\n:host {\n  display: block;\n}\n.restablecer-page {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--color-bg);\n}\n.restablecer-card {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 40px 36px;\n}\n.restablecer-card__brand {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--color-primary);\n  letter-spacing: 0.04em;\n}\n.restablecer-card h1 {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.restablecer-card__subtitle {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.restablecer-form {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  text-align: left;\n}\n.field__control {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control input {\n  padding-left: 38px !important;\n  padding-right: 38px !important;\n}\n.field__icon {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-secondary);\n  pointer-events: none;\n}\n.field__toggle {\n  position: absolute;\n  right: 6px;\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  color: var(--color-text-secondary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.field__toggle:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.field__toggle:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.restablecer-form__submit {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.restablecer-form__error {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-danger-bg);\n  font-size: 12.5px;\n  color: var(--color-danger);\n  text-align: left;\n}\n.restablecer-confirmacion {\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.restablecer-confirmacion p {\n  font-size: 13px;\n  color: var(--color-text);\n  line-height: 1.5;\n}\n.restablecer-confirmacion--error .restablecer-confirmacion__icon {\n  color: var(--color-danger);\n}\n.restablecer-confirmacion__icon {\n  width: 34px;\n  height: 34px;\n  color: var(--color-primary);\n}\n.restablecer-card__links {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  justify-content: center;\n}\n.restablecer-card__link {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  transition: color var(--transition-fast);\n}\n.restablecer-card__link:hover {\n  color: var(--color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .restablecer-page {\n    padding: 28px 16px;\n  }\n  .restablecer-card {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=restablecer-contrasena-RR242LON.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestablecerContrasena, { className: "RestablecerContrasena", filePath: "src/app/usuarios-y-accesos/cu03-recuperar-contrasena/restablecer-contrasena.ts", lineNumber: 29 });
})();
export {
  RestablecerContrasena
};
//# debugId=9362c950-6915-5623-afc1-fda0b43a9929
//# sourceMappingURL=chunk-JGUGE5I6.js.map
