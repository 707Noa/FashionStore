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

// src/app/usuarios-y-accesos/cu03-recuperar-contrasena/solicitar-recuperacion.ts
function SolicitarRecuperacion_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function SolicitarRecuperacion_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function SolicitarRecuperacion_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function SolicitarRecuperacion_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, " Ingresa tu correo electr\xF3nico y te enviaremos un enlace para restablecer tu contrase\xF1a. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "form", 7);
    \u0275\u0275listener("ngSubmit", function SolicitarRecuperacion_Conditional_8_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(3, "label", 8)(4, "span", 9);
    \u0275\u0275text(5, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275element(7, "app-icon", 11)(8, "input", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SolicitarRecuperacion_Conditional_8_Conditional_9_Template, 2, 0, "span", 13)(10, SolicitarRecuperacion_Conditional_8_Conditional_10_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, SolicitarRecuperacion_Conditional_8_Conditional_11_Template, 2, 1, "p", 14);
    \u0275\u0275elementStart(12, "button", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.correo.invalid && ctx_r1.form.controls.correo.touched);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.correo.hasError("required") && ctx_r1.form.controls.correo.touched ? 9 : ctx_r1.form.controls.correo.hasError("email") && ctx_r1.form.controls.correo.touched ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Enviando\u2026" : "Enviar enlace", " ");
  }
}
function SolicitarRecuperacion_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-icon", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.mensajeGenerico);
  }
}
var MENSAJE_GENERICO = "Si existe una cuenta asociada a ese correo, recibir\xE1s un enlace para restablecer tu contrase\xF1a.";
var SolicitarRecuperacion = class _SolicitarRecuperacion {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviado = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviado" }] : (
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
  form = this.fb.nonNullable.group({
    correo: ["", [Validators.required, Validators.email]]
  });
  submit() {
    if (this.submitting()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { correo } = this.form.getRawValue();
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.authService.forgotPassword(correo).subscribe({
      // El backend responde el mismo mensaje genérico exista o no la cuenta
      // (ver CU03/router.py) -- este formulario nunca distingue el caso.
      next: () => {
        this.submitting.set(false);
        this.enviado.set(true);
      },
      error: (error) => {
        this.submitting.set(false);
        this.errorMessage.set(error.status === 0 ? "No se pudo conectar con el servidor. Verifica tu conexi\xF3n e int\xE9ntalo nuevamente." : "Ocurri\xF3 un error al procesar tu solicitud. Int\xE9ntalo nuevamente.");
      }
    });
  }
  mensajeGenerico = MENSAJE_GENERICO;
  static \u0275fac = function SolicitarRecuperacion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SolicitarRecuperacion)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SolicitarRecuperacion, selectors: [["app-solicitar-recuperacion"]], decls: 13, vars: 1, consts: [[1, "recuperar-page"], [1, "recuperar-card"], ["routerLink", "/", 1, "recuperar-card__brand"], [1, "recuperar-confirmacion"], [1, "recuperar-card__links"], ["routerLink", "/login", 1, "recuperar-card__link"], [1, "recuperar-card__subtitle"], ["novalidate", "", 1, "recuperar-form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], [1, "field__control"], ["name", "mail", 1, "field__icon"], ["type", "email", "formControlName", "correo", "placeholder", "tucorreo@ejemplo.com", "autocomplete", "username"], [1, "field__error"], ["role", "alert", 1, "recuperar-form__error"], ["type", "submit", 1, "btn", "btn--primary", "recuperar-form__submit", 3, "disabled"], ["name", "mail", 1, "recuperar-confirmacion__icon"]], template: function SolicitarRecuperacion_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "FASHION");
      \u0275\u0275element(4, "br");
      \u0275\u0275text(5, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Recuperar contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, SolicitarRecuperacion_Conditional_8_Template, 14, 7)(9, SolicitarRecuperacion_Conditional_9_Template, 4, 1, "div", 3);
      \u0275\u0275elementStart(10, "div", 4)(11, "a", 5);
      \u0275\u0275text(12, "Volver a iniciar sesi\xF3n");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.enviado() ? 8 : 9);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.recuperar-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--%NS%color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--%NS%color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--%NS%color-bg);\n}\n.recuperar-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 40px 36px;\n}\n.recuperar-card__brand[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.04em;\n}\n.recuperar-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.recuperar-card__subtitle[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.recuperar-form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  text-align: left;\n}\n.field__control[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 38px !important;\n}\n.field__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--%NS%color-text-secondary);\n  pointer-events: none;\n}\n.recuperar-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.recuperar-form__error[_ngcontent-%COMP%] {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-danger-bg);\n  font-size: 12.5px;\n  color: var(--%NS%color-danger);\n  text-align: left;\n}\n.recuperar-confirmacion[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.recuperar-confirmacion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  line-height: 1.5;\n}\n.recuperar-confirmacion__icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  color: var(--%NS%color-primary);\n}\n.recuperar-card__links[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--%NS%color-border);\n  display: flex;\n  justify-content: center;\n}\n.recuperar-card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  transition: color var(--%NS%transition-fast);\n}\n.recuperar-card__link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .recuperar-page[_ngcontent-%COMP%] {\n    padding: 28px 16px;\n  }\n  .recuperar-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=solicitar-recuperacion-DZYA2DHQ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolicitarRecuperacion, [{
    type: Component,
    args: [{ selector: "app-solicitar-recuperacion", imports: [ReactiveFormsModule, RouterLink, Icon], template: `<div class="recuperar-page">\r
  <div class="recuperar-card">\r
    <a routerLink="/" class="recuperar-card__brand">FASHION<br />STORE</a>\r
    <h1>Recuperar contrase\xF1a</h1>\r
\r
    @if (!enviado()) {\r
      <p class="recuperar-card__subtitle">\r
        Ingresa tu correo electr\xF3nico y te enviaremos un enlace para restablecer tu contrase\xF1a.\r
      </p>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="recuperar-form" novalidate>\r
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
        @if (errorMessage()) {\r
          <p class="recuperar-form__error" role="alert">{{ errorMessage() }}</p>\r
        }\r
\r
        <button type="submit" class="btn btn--primary recuperar-form__submit" [disabled]="submitting()">\r
          {{ submitting() ? 'Enviando\u2026' : 'Enviar enlace' }}\r
        </button>\r
      </form>\r
    } @else {\r
      <div class="recuperar-confirmacion">\r
        <app-icon name="mail" class="recuperar-confirmacion__icon" />\r
        <p>{{ mensajeGenerico }}</p>\r
      </div>\r
    }\r
\r
    <div class="recuperar-card__links">\r
      <a routerLink="/login" class="recuperar-card__link">Volver a iniciar sesi\xF3n</a>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/usuarios-y-accesos/cu03-recuperar-contrasena/solicitar-recuperacion.scss */\n:host {\n  display: block;\n}\n.recuperar-page {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--color-bg);\n}\n.recuperar-card {\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 40px 36px;\n}\n.recuperar-card__brand {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--color-primary);\n  letter-spacing: 0.04em;\n}\n.recuperar-card h1 {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.recuperar-card__subtitle {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.recuperar-form {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  text-align: left;\n}\n.field__control {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control input {\n  padding-left: 38px !important;\n}\n.field__icon {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-secondary);\n  pointer-events: none;\n}\n.recuperar-form__submit {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.recuperar-form__error {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-danger-bg);\n  font-size: 12.5px;\n  color: var(--color-danger);\n  text-align: left;\n}\n.recuperar-confirmacion {\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.recuperar-confirmacion p {\n  font-size: 13px;\n  color: var(--color-text);\n  line-height: 1.5;\n}\n.recuperar-confirmacion__icon {\n  width: 34px;\n  height: 34px;\n  color: var(--color-primary);\n}\n.recuperar-card__links {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  justify-content: center;\n}\n.recuperar-card__link {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  transition: color var(--transition-fast);\n}\n.recuperar-card__link:hover {\n  color: var(--color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .recuperar-page {\n    padding: 28px 16px;\n  }\n  .recuperar-card {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=solicitar-recuperacion-DZYA2DHQ.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SolicitarRecuperacion, { className: "SolicitarRecuperacion", filePath: "src/app/usuarios-y-accesos/cu03-recuperar-contrasena/solicitar-recuperacion.ts", lineNumber: 17 });
})();
export {
  SolicitarRecuperacion
};
//# debugId=3294b16b-8fc1-58a5-92bf-922859f2bc62
//# sourceMappingURL=chunk-AYXTEKHJ.js.map
