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

// src/app/usuarios-y-accesos/cu04-actualizar-perfil/mi-perfil.ts
function MiPerfil_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Cargando tus datos\u2026");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ingresa tu nombre completo.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_7_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_7_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ingresa un n\xFAmero de tel\xE9fono v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function MiPerfil_Conditional_7_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function MiPerfil_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function MiPerfil_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "label", 8)(2, "span", 9);
    \u0275\u0275text(3, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275element(5, "app-icon", 11)(6, "input", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, MiPerfil_Conditional_7_Conditional_7_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 8)(9, "span", 9);
    \u0275\u0275text(10, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275element(12, "app-icon", 14)(13, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, MiPerfil_Conditional_7_Conditional_14_Template, 2, 0, "span", 13)(15, MiPerfil_Conditional_7_Conditional_15_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 8)(17, "span", 9);
    \u0275\u0275text(18, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275element(20, "app-icon", 11)(21, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, MiPerfil_Conditional_7_Conditional_22_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, MiPerfil_Conditional_7_Conditional_23_Template, 2, 1, "p", 17);
    \u0275\u0275elementStart(24, "button", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.correo.invalid && ctx_r1.form.controls.correo.touched);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.correo.hasError("required") && ctx_r1.form.controls.correo.touched ? 14 : ctx_r1.form.controls.correo.hasError("email") && ctx_r1.form.controls.correo.touched ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.telefono.invalid && ctx_r1.form.controls.telefono.touched);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.telefono.invalid && ctx_r1.form.controls.telefono.touched ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar cambios", " ");
  }
}
var TELEFONO_PATTERN = /^[0-9+\-\s()]{6,20}$/;
var MiPerfil = class _MiPerfil {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  toast = inject(ToastService);
  cargando = signal(
    true,
    ...ngDevMode ? [{ debugName: "cargando" }] : (
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
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    correo: ["", [Validators.required, Validators.email]],
    telefono: ["", [Validators.required, Validators.pattern(TELEFONO_PATTERN)]]
  });
  ngOnInit() {
    this.authService.obtenerMiPerfil().subscribe({
      next: (perfil) => {
        this.form.patchValue({
          nombre: perfil.nombre,
          correo: perfil.correo,
          telefono: perfil.telefono ?? ""
        });
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
        this.errorMessage.set("No se pudo cargar tu perfil. Int\xE9ntalo nuevamente.");
      }
    });
  }
  submit() {
    if (this.submitting()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { nombre, correo, telefono } = this.form.getRawValue();
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.authService.actualizarMiPerfil({ nombre, correo, telefono }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.toast.success("Tus datos se actualizaron correctamente.");
      },
      error: (error) => {
        this.submitting.set(false);
        this.errorMessage.set(this.mensajeDeError(error));
      }
    });
  }
  // Esta misma pantalla la usan '/mi-perfil' (Cliente, layout público),
  // '/encargado/mi-perfil', '/proveedor/mi-perfil' y '/cajero/mi-perfil' --
  // el enlace de salida debe respetar en cuál está, para que ningún rol
  // interno autenticado termine en el layout público desde su propio
  // perfil (mismo problema de arquitectura de roles corregido en
  // login.ts/role.guard.ts: RUTA_POR_ROL cubre los 5 roles).
  get destinoVolver() {
    const rol = this.authService.usuario()?.rol;
    return rol && rol !== "CLIENTE" ? RUTA_POR_ROL[rol] : "/";
  }
  get etiquetaVolver() {
    const rol = this.authService.usuario()?.rol;
    return rol && rol !== "CLIENTE" ? "Volver al panel" : "Volver a la tienda";
  }
  mensajeDeError(error) {
    if (error.status === 0) {
      return "No se pudo conectar con el servidor. Verifica tu conexi\xF3n e int\xE9ntalo nuevamente.";
    }
    if (error.status === 409) {
      return "Ya existe una cuenta registrada con ese correo.";
    }
    if (error.status === 422) {
      const detalle = error.error?.detail;
      if (typeof detalle === "string") {
        return detalle;
      }
      if (Array.isArray(detalle) && typeof detalle[0]?.msg === "string") {
        return detalle[0].msg;
      }
      return "Revisa los datos ingresados.";
    }
    return "Ocurri\xF3 un error al guardar tus cambios. Int\xE9ntalo nuevamente.";
  }
  static \u0275fac = function MiPerfil_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MiPerfil)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MiPerfil, selectors: [["app-mi-perfil"]], decls: 11, vars: 3, consts: [[1, "perfil-page"], [1, "perfil-card"], [1, "perfil-card__subtitle"], [1, "perfil-card__loading"], ["novalidate", "", 1, "perfil-form", 3, "formGroup"], [1, "perfil-card__links"], [1, "perfil-card__link", 3, "routerLink"], ["novalidate", "", 1, "perfil-form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], [1, "field__control"], ["name", "user", 1, "field__icon"], ["type", "text", "formControlName", "nombre", "placeholder", "Tu nombre completo", "autocomplete", "name"], [1, "field__error"], ["name", "mail", 1, "field__icon"], ["type", "email", "formControlName", "correo", "placeholder", "tucorreo@ejemplo.com", "autocomplete", "email"], ["type", "tel", "formControlName", "telefono", "placeholder", "Ej. 70012345", "autocomplete", "tel"], ["role", "alert", 1, "perfil-form__error"], ["type", "submit", 1, "btn", "btn--primary", "perfil-form__submit", 3, "disabled"]], template: function MiPerfil_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Mi perfil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Consulta y actualiza tus datos personales.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, MiPerfil_Conditional_6_Template, 2, 0, "p", 3)(7, MiPerfil_Conditional_7_Template, 26, 13, "form", 4);
      \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.cargando() ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.destinoVolver);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.etiquetaVolver);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.perfil-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--%NS%color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--%NS%color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--%NS%color-bg);\n}\n.perfil-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 40px 36px;\n}\n.perfil-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.perfil-card__subtitle[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.perfil-card__loading[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.perfil-form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  text-align: left;\n}\n.field__control[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 38px !important;\n}\n.field__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--%NS%color-text-secondary);\n  pointer-events: none;\n}\n.perfil-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.perfil-form__error[_ngcontent-%COMP%] {\n  margin: -4px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-danger-bg);\n  font-size: 12.5px;\n  color: var(--%NS%color-danger);\n  text-align: left;\n}\n.perfil-card__links[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--%NS%color-border);\n  display: flex;\n  justify-content: center;\n}\n.perfil-card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  transition: color var(--%NS%transition-fast);\n}\n.perfil-card__link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .perfil-page[_ngcontent-%COMP%] {\n    padding: 28px 16px;\n  }\n  .perfil-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=mi-perfil-4S3WR5VN.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiPerfil, [{
    type: Component,
    args: [{ selector: "app-mi-perfil", imports: [ReactiveFormsModule, RouterLink, Icon], template: `<div class="perfil-page">\r
  <div class="perfil-card">\r
    <h1>Mi perfil</h1>\r
    <p class="perfil-card__subtitle">Consulta y actualiza tus datos personales.</p>\r
\r
    @if (cargando()) {\r
      <p class="perfil-card__loading">Cargando tus datos\u2026</p>\r
    } @else {\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="perfil-form" novalidate>\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre</span>\r
          <div class="field__control">\r
            <app-icon name="user" class="field__icon" />\r
            <input type="text" formControlName="nombre" placeholder="Tu nombre completo" autocomplete="name" />\r
          </div>\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">Ingresa tu nombre completo.</span>\r
          }\r
        </label>\r
\r
        <label class="field" [class.has-error]="form.controls.correo.invalid && form.controls.correo.touched">\r
          <span class="field__label">Correo electr\xF3nico</span>\r
          <div class="field__control">\r
            <app-icon name="mail" class="field__icon" />\r
            <input\r
              type="email"\r
              formControlName="correo"\r
              placeholder="tucorreo@ejemplo.com"\r
              autocomplete="email"\r
            />\r
          </div>\r
          @if (form.controls.correo.hasError('required') && form.controls.correo.touched) {\r
            <span class="field__error">El correo es obligatorio.</span>\r
          } @else if (form.controls.correo.hasError('email') && form.controls.correo.touched) {\r
            <span class="field__error">Ingresa un correo v\xE1lido.</span>\r
          }\r
        </label>\r
\r
        <label class="field" [class.has-error]="form.controls.telefono.invalid && form.controls.telefono.touched">\r
          <span class="field__label">Tel\xE9fono</span>\r
          <div class="field__control">\r
            <app-icon name="user" class="field__icon" />\r
            <input type="tel" formControlName="telefono" placeholder="Ej. 70012345" autocomplete="tel" />\r
          </div>\r
          @if (form.controls.telefono.invalid && form.controls.telefono.touched) {\r
            <span class="field__error">Ingresa un n\xFAmero de tel\xE9fono v\xE1lido.</span>\r
          }\r
        </label>\r
\r
        @if (errorMessage()) {\r
          <p class="perfil-form__error" role="alert">{{ errorMessage() }}</p>\r
        }\r
\r
        <button type="submit" class="btn btn--primary perfil-form__submit" [disabled]="submitting()">\r
          {{ submitting() ? 'Guardando\u2026' : 'Guardar cambios' }}\r
        </button>\r
      </form>\r
    }\r
\r
    <div class="perfil-card__links">\r
      <a [routerLink]="destinoVolver" class="perfil-card__link">{{ etiquetaVolver }}</a>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/usuarios-y-accesos/cu04-actualizar-perfil/mi-perfil.scss */\n:host {\n  display: block;\n}\n.perfil-page {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--color-bg);\n}\n.perfil-card {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 40px 36px;\n}\n.perfil-card h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.perfil-card__subtitle {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.perfil-card__loading {\n  margin-top: 26px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.perfil-form {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  text-align: left;\n}\n.field__control {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control input {\n  padding-left: 38px !important;\n}\n.field__icon {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-secondary);\n  pointer-events: none;\n}\n.perfil-form__submit {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.perfil-form__error {\n  margin: -4px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-danger-bg);\n  font-size: 12.5px;\n  color: var(--color-danger);\n  text-align: left;\n}\n.perfil-card__links {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  justify-content: center;\n}\n.perfil-card__link {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  transition: color var(--transition-fast);\n}\n.perfil-card__link:hover {\n  color: var(--color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .perfil-page {\n    padding: 28px 16px;\n  }\n  .perfil-card {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=mi-perfil-4S3WR5VN.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MiPerfil, { className: "MiPerfil", filePath: "src/app/usuarios-y-accesos/cu04-actualizar-perfil/mi-perfil.ts", lineNumber: 18 });
})();
export {
  MiPerfil
};
//# debugId=31070c59-f09a-5ad1-9d29-55c07bfb68f6
//# sourceMappingURL=chunk-AHEK3MTX.js.map
