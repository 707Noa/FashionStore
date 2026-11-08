import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
import {
  CommonModule
} from "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  effect,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/usuarios-y-accesos/cu02-registrar-cliente/registrar-cliente.ts
var _forTrack0 = ($index, $item) => $item.slug;
function RegistrarCliente_Conditional_8_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2, "Cargando empresas disponibles\u2026");
    \u0275\u0275elementEnd()();
  }
}
function RegistrarCliente_Conditional_8_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 28);
    \u0275\u0275listener("click", function RegistrarCliente_Conditional_8_Conditional_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cargarEmpresas());
    });
    \u0275\u0275text(4, " Reintentar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.empresasListaError());
  }
}
function RegistrarCliente_Conditional_8_Conditional_2_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const empresa_r6 = ctx.$implicit;
    \u0275\u0275property("value", empresa_r6.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(empresa_r6.nombre);
  }
}
function RegistrarCliente_Conditional_8_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "span", 29);
    \u0275\u0275text(2, "Selecciona una empresa *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 30, 0);
    \u0275\u0275listener("change", function RegistrarCliente_Conditional_8_Conditional_2_Conditional_2_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const empresaSelect_r5 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.seleccionarEmpresa(empresaSelect_r5.value));
    });
    \u0275\u0275elementStart(5, "option", 31);
    \u0275\u0275text(6, "-- Selecciona una empresa --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, RegistrarCliente_Conditional_8_Conditional_2_Conditional_2_For_8_Template, 2, 2, "option", 32, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.empresas());
  }
}
function RegistrarCliente_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RegistrarCliente_Conditional_8_Conditional_2_Conditional_0_Template, 3, 0, "div", 7)(1, RegistrarCliente_Conditional_8_Conditional_2_Conditional_1_Template, 5, 1, "div", 8)(2, RegistrarCliente_Conditional_8_Conditional_2_Conditional_2_Template, 9, 0, "label", 27);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.empresasListaCargando() ? 0 : ctx_r2.empresasListaError() ? 1 : 2);
  }
}
function RegistrarCliente_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2, "Cargando informaci\xF3n de la empresa\u2026");
    \u0275\u0275elementEnd()();
  }
}
function RegistrarCliente_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.empresaError());
  }
}
function RegistrarCliente_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 33);
    \u0275\u0275text(2, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.empresaNombre());
  }
}
function RegistrarCliente_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "El nombre debe tener entre 2 y 120 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Ingresa un n\xFAmero de tel\xE9fono v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "La contrase\xF1a es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "La contrase\xF1a debe tener al menos 8 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Confirma tu contrase\xF1a.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Las contrase\xF1as no coinciden.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarCliente_Conditional_8_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function RegistrarCliente_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Reg\xEDstrate para reservar y comprar en FashionStore.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, RegistrarCliente_Conditional_8_Conditional_2_Template, 3, 1)(3, RegistrarCliente_Conditional_8_Conditional_3_Template, 3, 0, "div", 7)(4, RegistrarCliente_Conditional_8_Conditional_4_Template, 3, 1, "div", 8)(5, RegistrarCliente_Conditional_8_Conditional_5_Template, 5, 1, "div", 9);
    \u0275\u0275elementStart(6, "form", 10);
    \u0275\u0275listener("ngSubmit", function RegistrarCliente_Conditional_8_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(7, "label", 11)(8, "span", 12);
    \u0275\u0275text(9, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275element(11, "app-icon", 14)(12, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, RegistrarCliente_Conditional_8_Conditional_13_Template, 2, 0, "span", 16)(14, RegistrarCliente_Conditional_8_Conditional_14_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 11)(16, "span", 12);
    \u0275\u0275text(17, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275element(19, "app-icon", 17)(20, "input", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, RegistrarCliente_Conditional_8_Conditional_21_Template, 2, 0, "span", 16)(22, RegistrarCliente_Conditional_8_Conditional_22_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label", 11)(24, "span", 12);
    \u0275\u0275text(25, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13);
    \u0275\u0275element(27, "app-icon", 14)(28, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, RegistrarCliente_Conditional_8_Conditional_29_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 11)(31, "span", 12);
    \u0275\u0275text(32, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 13);
    \u0275\u0275element(34, "app-icon", 20)(35, "input", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(36, "button", 22);
    \u0275\u0275listener("click", function RegistrarCliente_Conditional_8_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePasswordVisibility());
    });
    \u0275\u0275element(37, "app-icon", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, RegistrarCliente_Conditional_8_Conditional_38_Template, 2, 0, "span", 16)(39, RegistrarCliente_Conditional_8_Conditional_39_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 11)(41, "span", 12);
    \u0275\u0275text(42, "Confirmar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 13);
    \u0275\u0275element(44, "app-icon", 20)(45, "input", 24);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(46, "button", 22);
    \u0275\u0275listener("click", function RegistrarCliente_Conditional_8_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleConfirmarPasswordVisibility());
    });
    \u0275\u0275element(47, "app-icon", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(48, RegistrarCliente_Conditional_8_Conditional_48_Template, 2, 0, "span", 16)(49, RegistrarCliente_Conditional_8_Conditional_49_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(50, RegistrarCliente_Conditional_8_Conditional_50_Template, 2, 1, "p", 25);
    \u0275\u0275elementStart(51, "button", 26);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.empresaSlug() ? 2 : ctx_r2.empresaCargando() ? 3 : ctx_r2.empresaError() ? 4 : ctx_r2.empresaNombre() ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r2.form.controls.nombre.invalid && ctx_r2.form.controls.nombre.touched);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.nombre.hasError("required") && ctx_r2.form.controls.nombre.touched ? 13 : ctx_r2.form.controls.nombre.invalid && ctx_r2.form.controls.nombre.touched ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r2.form.controls.correo.invalid && ctx_r2.form.controls.correo.touched);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.correo.hasError("required") && ctx_r2.form.controls.correo.touched ? 21 : ctx_r2.form.controls.correo.hasError("email") && ctx_r2.form.controls.correo.touched ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r2.form.controls.telefono.invalid && ctx_r2.form.controls.telefono.touched);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.telefono.invalid && ctx_r2.form.controls.telefono.touched ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r2.form.controls.password.invalid && ctx_r2.form.controls.password.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r2.showPassword() ? "text" : "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r2.showPassword() ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a")("aria-pressed", ctx_r2.showPassword());
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.showPassword() ? "eye-off" : "eye");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.password.hasError("required") && ctx_r2.form.controls.password.touched ? 38 : ctx_r2.form.controls.password.hasError("minlength") && ctx_r2.form.controls.password.touched ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", (ctx_r2.form.controls.confirmarPassword.invalid || ctx_r2.form.hasError("passwordsNoCoinciden")) && ctx_r2.form.controls.confirmarPassword.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r2.showConfirmarPassword() ? "text" : "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r2.showConfirmarPassword() ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a")("aria-pressed", ctx_r2.showConfirmarPassword());
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.showConfirmarPassword() ? "eye-off" : "eye");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.confirmarPassword.hasError("required") && ctx_r2.form.controls.confirmarPassword.touched ? 48 : ctx_r2.form.hasError("passwordsNoCoinciden") && ctx_r2.form.controls.confirmarPassword.touched ? 49 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.errorMessage() ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.submitting() || !ctx_r2.empresaSlug());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.submitting() ? "Creando cuenta\u2026" : "Crear cuenta", " ");
  }
}
function RegistrarCliente_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-icon", 35);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Tu cuenta se cre\xF3 correctamente. Ya puedes iniciar sesi\xF3n.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 36);
    \u0275\u0275text(5, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function RegistrarCliente_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 37)(2, "span", 38);
    \u0275\u0275text(3, "\xBFYa tienes cuenta?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 39);
    \u0275\u0275text(5, "Inicia sesi\xF3n");
    \u0275\u0275elementEnd()()();
  }
}
var TELEFONO_PATTERN = /^[0-9+\-\s()]{6,20}$/;
function passwordsCoincidenValidator(group) {
  const password = group.get("password")?.value;
  const confirmarPassword = group.get("confirmarPassword")?.value;
  return password === confirmarPassword ? null : { passwordsNoCoinciden: true };
}
var RegistrarCliente = class _RegistrarCliente {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);
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
  empresaSlug = signal(
    null,
    ...ngDevMode ? [{ debugName: "empresaSlug" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empresaNombre = signal(
    null,
    ...ngDevMode ? [{ debugName: "empresaNombre" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empresaCargando = signal(
    false,
    ...ngDevMode ? [{ debugName: "empresaCargando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empresaError = signal(
    null,
    ...ngDevMode ? [{ debugName: "empresaError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empresas = signal(
    [],
    ...ngDevMode ? [{ debugName: "empresas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empresasListaCargando = signal(
    false,
    ...ngDevMode ? [{ debugName: "empresasListaCargando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empresasListaError = signal(
    null,
    ...ngDevMode ? [{ debugName: "empresasListaError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empresaSeleccionadaSlug = signal(
    null,
    ...ngDevMode ? [{ debugName: "empresaSeleccionadaSlug" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    correo: ["", [Validators.required, Validators.email]],
    telefono: ["", [Validators.required, Validators.pattern(TELEFONO_PATTERN)]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirmarPassword: ["", [Validators.required]]
  }, { validators: [passwordsCoincidenValidator] });
  constructor() {
    effect(() => {
      const slug = this.route.snapshot.paramMap.get("slug");
      if (slug) {
        this.empresaSlug.set(slug);
        this.cargarEmpresa(slug);
      } else {
        this.cargarEmpresas();
      }
    });
  }
  cargarEmpresas() {
    this.empresasListaCargando.set(true);
    this.empresasListaError.set(null);
    this.authService.obtenerEmpresasActivas().subscribe({
      next: (empresas) => {
        this.empresas.set(empresas);
        this.empresasListaCargando.set(false);
      },
      error: () => {
        this.empresasListaCargando.set(false);
        this.empresasListaError.set("No se pudieron cargar las empresas. Intenta nuevamente.");
      }
    });
  }
  seleccionarEmpresa(slug) {
    this.empresaSeleccionadaSlug.set(slug);
    this.empresaSlug.set(slug);
    this.cargarEmpresa(slug);
  }
  cargarEmpresa(slug) {
    this.empresaCargando.set(true);
    this.empresaError.set(null);
    this.authService.obtenerEmpresa(slug).subscribe({
      next: (empresa) => {
        this.empresaCargando.set(false);
        this.empresaNombre.set(empresa.nombre);
      },
      error: () => {
        this.empresaCargando.set(false);
        this.empresaError.set("No se encontr\xF3 la empresa solicitada.");
      }
    });
  }
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
    const { nombre, correo, telefono, password, confirmarPassword } = this.form.getRawValue();
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.authService.register({
      nombre,
      correo,
      telefono,
      password,
      confirmar_password: confirmarPassword,
      empresa_slug: this.empresaSlug() || ""
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
    if (error.status === 409) {
      return typeof error.error?.detail === "string" ? error.error.detail : "Ya existe una cuenta registrada con ese correo.";
    }
    if (error.status === 422) {
      const detalle = error.error?.detail;
      if (Array.isArray(detalle) && typeof detalle[0]?.msg === "string") {
        return detalle[0].msg;
      }
      return "Revisa los datos ingresados.";
    }
    return "Ocurri\xF3 un error al crear tu cuenta. Int\xE9ntalo nuevamente.";
  }
  static \u0275fac = function RegistrarCliente_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrarCliente)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrarCliente, selectors: [["app-registrar-cliente"]], decls: 11, vars: 2, consts: [["empresaSelect", ""], [1, "registro-page"], [1, "registro-card"], ["routerLink", "/", 1, "registro-card__brand"], [1, "registro-confirmacion"], [1, "registro-card__links"], [1, "registro-card__subtitle"], [1, "empresa-info", "empresa-info--loading"], [1, "empresa-info", "empresa-info--error"], [1, "empresa-info"], ["novalidate", "", 1, "registro-form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], [1, "field__control"], ["name", "user", 1, "field__icon"], ["type", "text", "formControlName", "nombre", "placeholder", "Tu nombre", "autocomplete", "name"], [1, "field__error"], ["name", "mail", 1, "field__icon"], ["type", "email", "formControlName", "correo", "placeholder", "tucorreo@ejemplo.com", "autocomplete", "email"], ["type", "tel", "formControlName", "telefono", "placeholder", "Ej. 70012345", "autocomplete", "tel"], ["name", "lock", 1, "field__icon"], ["formControlName", "password", "placeholder", "M\xEDnimo 8 caracteres", "autocomplete", "new-password", 3, "type"], ["type", "button", 1, "field__toggle", 3, "click"], [2, "width", "17px", "height", "17px", 3, "name"], ["formControlName", "confirmarPassword", "placeholder", "Repite tu contrase\xF1a", "autocomplete", "new-password", 3, "type"], ["role", "alert", 1, "registro-form__error"], ["type", "submit", 1, "btn", "btn--primary", "registro-form__submit", 3, "disabled"], [1, "empresa-selector"], ["type", "button", 1, "btn", "btn--sm", "btn--ghost", 3, "click"], [1, "empresa-selector__label"], [1, "empresa-selector__select", 3, "change"], ["value", ""], [3, "value"], [1, "empresa-info__label"], [1, "empresa-info__nombre"], ["name", "user", 1, "registro-confirmacion__icon"], ["routerLink", "/login", 1, "btn", "btn--primary", "registro-confirmacion__boton"], [1, "registro-card__link-row"], [1, "registro-card__link-text"], ["routerLink", "/login", 1, "registro-card__link"]], template: function RegistrarCliente_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
      \u0275\u0275text(3, "FASHION");
      \u0275\u0275element(4, "br");
      \u0275\u0275text(5, "STORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Crear cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, RegistrarCliente_Conditional_8_Template, 53, 28)(9, RegistrarCliente_Conditional_9_Template, 6, 0, "div", 4);
      \u0275\u0275conditionalCreate(10, RegistrarCliente_Conditional_10_Template, 6, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.exito() ? 8 : 9);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.exito() ? 10 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, Icon, CommonModule], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.registro-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--%NS%color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--%NS%color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--%NS%color-bg);\n}\n.registro-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  box-shadow: var(--%NS%shadow-medium);\n  padding: 40px 36px;\n}\n.registro-card__brand[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--%NS%color-primary);\n  letter-spacing: 0.04em;\n}\n.registro-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.registro-card__subtitle[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.empresa-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 12px 14px;\n  border-radius: var(--%NS%radius-md);\n  background: color-mix(in srgb, var(--%NS%color-primary) 4%, transparent);\n  border: 1px solid color-mix(in srgb, var(--%NS%color-primary) 12%, transparent);\n  text-align: left;\n}\n.empresa-info--loading[_ngcontent-%COMP%], \n.empresa-info--error[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-text-secondary) 4%, transparent);\n  border-color: color-mix(in srgb, var(--%NS%color-text-secondary) 12%, transparent);\n}\n.empresa-info--loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empresa-info--error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n  margin: 0;\n}\n.empresa-info--error[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-danger) 4%, transparent);\n  border-color: color-mix(in srgb, var(--%NS%color-danger) 12%, transparent);\n}\n.empresa-info--error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--%NS%color-danger);\n}\n.empresa-info__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.empresa-info__nombre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.empresa-selector[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 20px;\n  text-align: left;\n}\n.empresa-selector__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.empresa-selector__select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  font-size: 13px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-text);\n  cursor: pointer;\n}\n.empresa-selector__select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--%NS%color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--%NS%color-primary) 10%, transparent);\n}\n.registro-form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  text-align: left;\n}\n.field__control[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 38px !important;\n  padding-right: 38px !important;\n}\n.field__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--%NS%color-text-secondary);\n  pointer-events: none;\n}\n.field__toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  color: var(--%NS%color-text-secondary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--%NS%transition-fast), color var(--%NS%transition-fast);\n}\n.field__toggle[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text);\n}\n.field__toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 1px;\n}\n.registro-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.registro-form__error[_ngcontent-%COMP%] {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-danger-bg);\n  font-size: 12.5px;\n  color: var(--%NS%color-danger);\n  text-align: left;\n}\n.registro-confirmacion[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.registro-confirmacion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  line-height: 1.5;\n}\n.registro-confirmacion__icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  color: var(--%NS%color-primary);\n}\n.registro-confirmacion__boton[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 6px;\n}\n.registro-card__links[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--%NS%color-border);\n  display: flex;\n  justify-content: center;\n}\n.registro-card__link-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.registro-card__link-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.registro-card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  transition: color var(--%NS%transition-fast);\n}\n.registro-card__link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .registro-page[_ngcontent-%COMP%] {\n    padding: 28px 16px;\n  }\n  .registro-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=registrar-cliente-ABFJPOCE.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrarCliente, [{
    type: Component,
    args: [{ selector: "app-registrar-cliente", imports: [ReactiveFormsModule, RouterLink, Icon, CommonModule], template: `<div class="registro-page">\r
  <div class="registro-card">\r
    <a routerLink="/" class="registro-card__brand">FASHION<br />STORE</a>\r
    <h1>Crear cuenta</h1>\r
\r
    @if (!exito()) {\r
      <p class="registro-card__subtitle">Reg\xEDstrate para reservar y comprar en FashionStore.</p>\r
\r
      @if (!empresaSlug()) {\r
        <!-- Selector de empresa -->\r
        @if (empresasListaCargando()) {\r
          <div class="empresa-info empresa-info--loading">\r
            <p>Cargando empresas disponibles\u2026</p>\r
          </div>\r
        } @else if (empresasListaError()) {\r
          <div class="empresa-info empresa-info--error">\r
            <p>{{ empresasListaError() }}</p>\r
            <button type="button" class="btn btn--sm btn--ghost" (click)="cargarEmpresas()">\r
              Reintentar\r
            </button>\r
          </div>\r
        } @else {\r
          <label class="empresa-selector">\r
            <span class="empresa-selector__label">Selecciona una empresa *</span>\r
            <select class="empresa-selector__select" #empresaSelect (change)="seleccionarEmpresa(empresaSelect.value)">\r
              <option value="">-- Selecciona una empresa --</option>\r
              @for (empresa of empresas(); track empresa.slug) {\r
                <option [value]="empresa.slug">{{ empresa.nombre }}</option>\r
              }\r
            </select>\r
          </label>\r
        }\r
      } @else if (empresaCargando()) {\r
        <div class="empresa-info empresa-info--loading">\r
          <p>Cargando informaci\xF3n de la empresa\u2026</p>\r
        </div>\r
      } @else if (empresaError()) {\r
        <div class="empresa-info empresa-info--error">\r
          <p>{{ empresaError() }}</p>\r
        </div>\r
      } @else if (empresaNombre()) {\r
        <div class="empresa-info">\r
          <label class="empresa-info__label">Empresa</label>\r
          <div class="empresa-info__nombre">{{ empresaNombre() }}</div>\r
        </div>\r
      }\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="registro-form" novalidate>\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre completo</span>\r
          <div class="field__control">\r
            <app-icon name="user" class="field__icon" />\r
            <input type="text" formControlName="nombre" placeholder="Tu nombre" autocomplete="name" />\r
          </div>\r
          @if (form.controls.nombre.hasError('required') && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          } @else if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre debe tener entre 2 y 120 caracteres.</span>\r
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
        <label class="field" [class.has-error]="form.controls.password.invalid && form.controls.password.touched">\r
          <span class="field__label">Contrase\xF1a</span>\r
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
          <p class="registro-form__error" role="alert">{{ errorMessage() }}</p>\r
        }\r
\r
        <button type="submit" class="btn btn--primary registro-form__submit" [disabled]="submitting() || !empresaSlug()">\r
          {{ submitting() ? 'Creando cuenta\u2026' : 'Crear cuenta' }}\r
        </button>\r
      </form>\r
    } @else {\r
      <div class="registro-confirmacion">\r
        <app-icon name="user" class="registro-confirmacion__icon" />\r
        <p>Tu cuenta se cre\xF3 correctamente. Ya puedes iniciar sesi\xF3n.</p>\r
        <a routerLink="/login" class="btn btn--primary registro-confirmacion__boton">Iniciar sesi\xF3n</a>\r
      </div>\r
    }\r
\r
    @if (!exito()) {\r
      <div class="registro-card__links">\r
        <span class="registro-card__link-row">\r
          <span class="registro-card__link-text">\xBFYa tienes cuenta?</span>\r
          <a routerLink="/login" class="registro-card__link">Inicia sesi\xF3n</a>\r
        </span>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/usuarios-y-accesos/cu02-registrar-cliente/registrar-cliente.scss */\n:host {\n  display: block;\n}\n.registro-page {\n  min-height: calc(100vh - 58px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      color-mix(in srgb, var(--color-primary) 7%, transparent) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 88% 92%,\n      color-mix(in srgb, var(--color-primary) 6%, transparent) 0%,\n      transparent 50%),\n    var(--color-bg);\n}\n.registro-card {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-medium);\n  padding: 40px 36px;\n}\n.registro-card__brand {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--color-primary);\n  letter-spacing: 0.04em;\n}\n.registro-card h1 {\n  margin-top: 22px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.registro-card__subtitle {\n  margin-top: 6px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.empresa-info {\n  margin-top: 20px;\n  padding: 12px 14px;\n  border-radius: var(--radius-md);\n  background: color-mix(in srgb, var(--color-primary) 4%, transparent);\n  border: 1px solid color-mix(in srgb, var(--color-primary) 12%, transparent);\n  text-align: left;\n}\n.empresa-info--loading,\n.empresa-info--error {\n  background: color-mix(in srgb, var(--color-text-secondary) 4%, transparent);\n  border-color: color-mix(in srgb, var(--color-text-secondary) 12%, transparent);\n}\n.empresa-info--loading p,\n.empresa-info--error p {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n.empresa-info--error {\n  background: color-mix(in srgb, var(--color-danger) 4%, transparent);\n  border-color: color-mix(in srgb, var(--color-danger) 12%, transparent);\n}\n.empresa-info--error p {\n  color: var(--color-danger);\n}\n.empresa-info__label {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.empresa-info__nombre {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.empresa-selector {\n  display: block;\n  margin-top: 20px;\n  text-align: left;\n}\n.empresa-selector__label {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.empresa-selector__select {\n  width: 100%;\n  padding: 10px 12px;\n  font-size: 13px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  color: var(--color-text);\n  cursor: pointer;\n}\n.empresa-selector__select:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 10%, transparent);\n}\n.registro-form {\n  width: 100%;\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  text-align: left;\n}\n.field__control {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field__control input {\n  padding-left: 38px !important;\n  padding-right: 38px !important;\n}\n.field__icon {\n  position: absolute;\n  left: 12px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-secondary);\n  pointer-events: none;\n}\n.field__toggle {\n  position: absolute;\n  right: 6px;\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  color: var(--color-text-secondary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.field__toggle:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.field__toggle:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n.registro-form__submit {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 4px;\n}\n.registro-form__error {\n  margin: -6px 0 0;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-danger-bg);\n  font-size: 12.5px;\n  color: var(--color-danger);\n  text-align: left;\n}\n.registro-confirmacion {\n  margin-top: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.registro-confirmacion p {\n  font-size: 13px;\n  color: var(--color-text);\n  line-height: 1.5;\n}\n.registro-confirmacion__icon {\n  width: 34px;\n  height: 34px;\n  color: var(--color-primary);\n}\n.registro-confirmacion__boton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  margin-top: 6px;\n}\n.registro-card__links {\n  margin-top: 24px;\n  padding-top: 20px;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  justify-content: center;\n}\n.registro-card__link-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.registro-card__link-text {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.registro-card__link {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  transition: color var(--transition-fast);\n}\n.registro-card__link:hover {\n  color: var(--color-primary-hover);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .registro-page {\n    padding: 28px 16px;\n  }\n  .registro-card {\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=registrar-cliente-ABFJPOCE.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrarCliente, { className: "RegistrarCliente", filePath: "src/app/usuarios-y-accesos/cu02-registrar-cliente/registrar-cliente.ts", lineNumber: 45 });
})();
export {
  RegistrarCliente
};
//# debugId=feae324c-fe0f-520d-9c7a-94f63c50d521
//# sourceMappingURL=chunk-3AROTYB5.js.map
