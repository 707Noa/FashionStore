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
  RUTA_POR_ROL
} from "./chunk-IK7D7AHK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/usuarios-y-accesos/cu01-iniciar-sesion/login.ts
function Login_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "La contrase\xF1a es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var Login = class _Login {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
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
  // CU17 (crear reserva): si el Cliente llegó aquí porque intentó reservar
  // sin sesión, producto-detalle arma este link con ?returnUrl=/producto/id
  // (ver crear-reserva.ts) para volver exactamente a esa ficha en vez de
  // perder la intención. Se valida que sea una ruta interna (empieza con
  // "/") para no habilitar un open-redirect a un dominio externo -- no toca
  // AuthService, el interceptor ni los guards, solo decide a dónde navegar
  // después de un login exitoso.
  returnUrl = this.leerReturnUrlSeguro();
  mensajeReserva = this.returnUrl?.includes("/producto/") ? "Inicia sesi\xF3n para continuar con tu reserva." : null;
  leerReturnUrlSeguro() {
    const valor = this.route.snapshot.queryParamMap.get("returnUrl");
    return valor && valor.startsWith("/") && !valor.startsWith("//") ? valor : null;
  }
  form = this.fb.nonNullable.group({
    correo: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }
  submit() {
    if (this.submitting()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { correo, password } = this.form.getRawValue();
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.authService.login(correo, password).subscribe({
      next: (response) => {
        this.submitting.set(false);
        const destino = RUTA_POR_ROL[response.usuario.rol];
        if (!destino) {
          this.router.navigateByUrl("/no-autorizado");
          return;
        }
        this.router.navigateByUrl(this.returnUrl ?? destino);
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
    if (error.status === 401) {
      return "Correo o contrase\xF1a incorrectos.";
    }
    if (error.status === 403) {
      return typeof error.error?.detail === "string" ? error.error.detail : "Tu cuenta est\xE1 inhabilitada. Contacta al administrador.";
    }
    return "Ocurri\xF3 un error al iniciar sesi\xF3n. Int\xE9ntalo nuevamente.";
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 44, vars: 15, consts: [[1, "login-page"], [1, "login-card"], ["routerLink", "/", 1, "login-card__brand"], [1, "login-card__subtitle"], ["novalidate", "", 1, "login-form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], [1, "field__control"], ["name", "mail", 1, "field__icon"], ["type", "email", "formControlName", "correo", "placeholder", "tucorreo@ejemplo.com", "autocomplete", "username"], [1, "field__error"], ["name", "lock", 1, "field__icon"], ["formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 3, "type"], ["type", "button", 1, "field__toggle", 3, "click"], [2, "width", "17px", "height", "17px", 3, "name"], ["role", "alert", 1, "login-form__error"], ["type", "submit", 1, "btn", "btn--primary", "login-form__submit", 3, "disabled"], [1, "login-card__links"], ["routerLink", "/recuperar-contrasena", 1, "login-card__link-inert"], [1, "login-card__link-row"], [1, "login-card__link-text"], ["routerLink", "/registro", 1, "login-card__link"], ["routerLink", "/registrar-empresa", 1, "login-card__link"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "FASHION");
      \u0275\u0275element(4, "br");
      \u0275\u0275text(5, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Iniciar sesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 3);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 4);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_10_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(11, "label", 5)(12, "span", 6);
      \u0275\u0275text(13, "Correo electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275element(15, "app-icon", 8)(16, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, Login_Conditional_17_Template, 2, 0, "span", 10)(18, Login_Conditional_18_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "label", 5)(20, "span", 6);
      \u0275\u0275text(21, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7);
      \u0275\u0275element(23, "app-icon", 11)(24, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(25, "button", 13);
      \u0275\u0275listener("click", function Login_Template_button_click_25_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(26, "app-icon", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(27, Login_Conditional_27_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(28, Login_Conditional_28_Template, 2, 1, "p", 15);
      \u0275\u0275elementStart(29, "button", 16);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "a", 18);
      \u0275\u0275text(33, "\xBFOlvidaste tu contrase\xF1a?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 19)(35, "span", 20);
      \u0275\u0275text(36, "\xBFNo tienes cuenta?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 21);
      \u0275\u0275text(38, "Reg\xEDstrate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "span", 19)(40, "span", 20);
      \u0275\u0275text(41, "\xBFRepresentas una empresa?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 22);
      \u0275\u0275text(43, "Registra tu empresa");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.mensajeReserva ?? "Ingresa tus datos para continuar.");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275classProp("has-error", ctx.form.controls.correo.invalid && ctx.form.controls.correo.touched);
      \u0275\u0275advance(5);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.correo.hasError("required") && ctx.form.controls.correo.touched ? 17 : ctx.form.controls.correo.hasError("email") && ctx.form.controls.correo.touched ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("has-error", ctx.form.controls.password.invalid && ctx.form.controls.password.touched);
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a")("aria-pressed", ctx.showPassword());
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.showPassword() ? "eye-off" : "eye");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.hasError("required") && ctx.form.controls.password.touched ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Ingresando\u2026" : "Iniciar sesi\xF3n", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.login-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--%NS%color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--%NS%color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--%NS%color-bg);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 40px 36px;\n}\n.login-card__brand[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.04em;\n}\n.login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.login-card__subtitle[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.login-form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  text-align: left;\n}\n.field__control[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 38px !important;\n  padding-right: 38px !important;\n}\n.field__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--%NS%color-text-secondary);\n  pointer-events: none;\n}\n.field__toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  color: var(--%NS%color-text-secondary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.field__toggle[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text);\n}\n.field__toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.login-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.login-form__error[_ngcontent-%COMP%] {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-danger-bg);\n  font-size: 12.5px;\n  color: var(--%NS%color-danger);\n  text-align: left;\n}\n.login-card__links[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--%NS%color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.login-card__link-inert[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  transition: color var(--%NS%transition-fast);\n}\n.login-card__link-inert[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary-hover);\n  text-decoration: underline;\n}\n.login-card__link-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.login-card__link-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.login-card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  transition: color var(--%NS%transition-fast);\n}\n.login-card__link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .login-page[_ngcontent-%COMP%] {\n    padding: 28px 16px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=login-DN6NIAKE.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [ReactiveFormsModule, RouterLink, Icon], template: `<div class="login-page">\r
  <div class="login-card">\r
    <a routerLink="/" class="login-card__brand">FASHION<br />STORE</a>\r
    <h1>Iniciar sesi\xF3n</h1>\r
    <p class="login-card__subtitle">{{ mensajeReserva ?? 'Ingresa tus datos para continuar.' }}</p>\r
\r
    <form [formGroup]="form" (ngSubmit)="submit()" class="login-form" novalidate>\r
      <label class="field" [class.has-error]="form.controls.correo.invalid && form.controls.correo.touched">\r
        <span class="field__label">Correo electr\xF3nico</span>\r
        <div class="field__control">\r
          <app-icon name="mail" class="field__icon" />\r
          <input\r
            type="email"\r
            formControlName="correo"\r
            placeholder="tucorreo@ejemplo.com"\r
            autocomplete="username"\r
          />\r
        </div>\r
        @if (form.controls.correo.hasError('required') && form.controls.correo.touched) {\r
          <span class="field__error">El correo es obligatorio.</span>\r
        } @else if (form.controls.correo.hasError('email') && form.controls.correo.touched) {\r
          <span class="field__error">Ingresa un correo v\xE1lido.</span>\r
        }\r
      </label>\r
\r
      <label class="field" [class.has-error]="form.controls.password.invalid && form.controls.password.touched">\r
        <span class="field__label">Contrase\xF1a</span>\r
        <div class="field__control">\r
          <app-icon name="lock" class="field__icon" />\r
          <input\r
            [type]="showPassword() ? 'text' : 'password'"\r
            formControlName="password"\r
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
            autocomplete="current-password"\r
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
        }\r
      </label>\r
\r
      @if (errorMessage()) {\r
        <p class="login-form__error" role="alert">{{ errorMessage() }}</p>\r
      }\r
\r
      <button type="submit" class="btn btn--primary login-form__submit" [disabled]="submitting()">\r
        {{ submitting() ? 'Ingresando\u2026' : 'Iniciar sesi\xF3n' }}\r
      </button>\r
    </form>\r
\r
    <div class="login-card__links">\r
      <a routerLink="/recuperar-contrasena" class="login-card__link-inert">\xBFOlvidaste tu contrase\xF1a?</a>\r
      <span class="login-card__link-row">\r
        <span class="login-card__link-text">\xBFNo tienes cuenta?</span>\r
        <a routerLink="/registro" class="login-card__link">Reg\xEDstrate</a>\r
      </span>\r
      <span class="login-card__link-row">\r
        <span class="login-card__link-text">\xBFRepresentas una empresa?</span>\r
        <a routerLink="/registrar-empresa" class="login-card__link">Registra tu empresa</a>\r
      </span>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/usuarios-y-accesos/cu01-iniciar-sesion/login.scss */\n:host {\n  display: block;\n}\n.login-page {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--color-bg);\n}\n.login-card {\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 40px 36px;\n}\n.login-card__brand {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--color-primary);\n  letter-spacing: 0.04em;\n}\n.login-card h1 {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.login-card__subtitle {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.login-form {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  text-align: left;\n}\n.field__control {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control input {\n  padding-left: 38px !important;\n  padding-right: 38px !important;\n}\n.field__icon {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-secondary);\n  pointer-events: none;\n}\n.field__toggle {\n  position: absolute;\n  right: 6px;\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  color: var(--color-text-secondary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.field__toggle:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.field__toggle:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.login-form__submit {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.login-form__error {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-danger-bg);\n  font-size: 12.5px;\n  color: var(--color-danger);\n  text-align: left;\n}\n.login-card__links {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.login-card__link-inert {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  transition: color var(--transition-fast);\n}\n.login-card__link-inert:hover {\n  color: var(--color-primary-hover);\n  text-decoration: underline;\n}\n.login-card__link-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.login-card__link-text {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.login-card__link {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  transition: color var(--transition-fast);\n}\n.login-card__link:hover {\n  color: var(--color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .login-page {\n    padding: 28px 16px;\n  }\n  .login-card {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=login-DN6NIAKE.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/usuarios-y-accesos/cu01-iniciar-sesion/login.ts", lineNumber: 15 });
})();
export {
  Login
};
//# debugId=3ae60430-e24e-500b-80e6-08dbe40e8e6e
//# sourceMappingURL=chunk-AISZ4XYY.js.map
