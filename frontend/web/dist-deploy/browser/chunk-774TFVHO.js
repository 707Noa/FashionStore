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
  Router,
  RouterLink
} from "./chunk-OXXL2I3V.js";
import {
  CommonModule,
  CurrencyPipe
} from "./chunk-BQM6CYO4.js";
import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Component,
  Injectable,
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
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/cu01-registrar-empresa/cu01-registrar-empresa.service.ts
var RegistrarEmpresaService = class _RegistrarEmpresaService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/empresas`;
  planesUrl = `${environment.apiUrl}/planes`;
  registrarEmpresa(datos) {
    return this.http.post(this.apiUrl, datos);
  }
  obtenerPlanesActivos() {
    return this.http.get(`${this.planesUrl}/activos`);
  }
  static \u0275fac = function RegistrarEmpresaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrarEmpresaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegistrarEmpresaService, factory: _RegistrarEmpresaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrarEmpresaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/cu01-registrar-empresa/cu01-registrar-empresa.ts
var _forTrack0 = ($index, $item) => $item.id;
function RegistrarEmpresaComponent_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 44);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("nombre"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("slug"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("razon_social"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("correo"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("telefono"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("nombre_admin"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("correo_admin"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage("password"));
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Debes aceptar los t\xE9rminos.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 44);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function RegistrarEmpresaComponent_Conditional_8_Conditional_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reintentar());
    });
    \u0275\u0275text(6, " Reintentar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorPlanes());
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275text(2, " Cargando planes... ");
    \u0275\u0275elementEnd();
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1, "No hay planes disponibles para el registro.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_81_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function RegistrarEmpresaComponent_Conditional_8_Conditional_81_For_2_Template_div_click_0_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.seleccionarPlan(plan_r5));
    });
    \u0275\u0275elementStart(1, "div", 50)(2, "h3", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 53)(8, "p", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 55)(11, "h4");
    \u0275\u0275text(12, "Funcionalidades:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul")(14, "li");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 56);
    \u0275\u0275listener("click", function RegistrarEmpresaComponent_Conditional_8_Conditional_81_For_2_Template_button_click_26_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.seleccionarPlan(plan_r5));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.planSeleccionado()?.id === plan_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(6, 26, plan_r5.precio, "Bs.", "symbol", "0.0-2"), " / mes");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Hasta ", plan_r5.limite_sucursales, " sucursal(es)");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("disabled", !plan_r5.gestion_productos);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.gestion_productos ? "\u2713" : "\u2715", " Gesti\xF3n de productos ");
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !plan_r5.gestion_ventas);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.gestion_ventas ? "\u2713" : "\u2715", " Gesti\xF3n de ventas ");
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !plan_r5.reservas);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.reservas ? "\u2713" : "\u2715", " Reservas ");
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !plan_r5.operacion_offline);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.operacion_offline ? "\u2713" : "\u2715", " Operaci\xF3n offline ");
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !plan_r5.reportes_convencionales);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.reportes_convencionales ? "\u2713" : "\u2715", " Reportes convencionales ");
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !plan_r5.reportes_generativos_ia);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.reportes_generativos_ia ? "\u2713" : "\u2715", " Reportes generativos con IA ");
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r1.planSeleccionado()?.id === plan_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.planSeleccionado()?.id === plan_r5.id ? "Seleccionado" : "Seleccionar", " ");
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_81_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Debes seleccionar un plan.");
    \u0275\u0275elementEnd();
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275repeaterCreate(1, RegistrarEmpresaComponent_Conditional_8_Conditional_81_For_2_Template, 28, 31, "div", 48, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, RegistrarEmpresaComponent_Conditional_8_Conditional_81_Conditional_3_Template, 2, 0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.planes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("plan_id") ? 3 : -1);
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
    \u0275\u0275text(1, " Registrando... ");
  }
}
function RegistrarEmpresaComponent_Conditional_8_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crear cuenta empresarial ");
  }
}
function RegistrarEmpresaComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8)(2, "h2");
    \u0275\u0275text(3, "Crear una cuenta para tu empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Comienza a administrar tu negocio en FashionStore");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, RegistrarEmpresaComponent_Conditional_8_Conditional_6_Template, 5, 1, "div", 9);
    \u0275\u0275elementStart(7, "form", 10);
    \u0275\u0275listener("ngSubmit", function RegistrarEmpresaComponent_Conditional_8_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(8, "fieldset", 11)(9, "legend");
    \u0275\u0275text(10, "Datos de la empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "label", 13);
    \u0275\u0275text(13, "Nombre de empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 14);
    \u0275\u0275listener("change", function RegistrarEmpresaComponent_Conditional_8_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNombreChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(15, RegistrarEmpresaComponent_Conditional_8_Conditional_15_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "label", 16);
    \u0275\u0275text(18, "Identificador empresarial");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(20, RegistrarEmpresaComponent_Conditional_8_Conditional_20_Template, 2, 1, "span", 15);
    \u0275\u0275elementStart(21, "span", 18);
    \u0275\u0275text(22, "Min\xFAsculas, n\xFAmeros y guiones. \xDAnico en la plataforma.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "label", 19);
    \u0275\u0275text(25, "Raz\xF3n social registrada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(27, RegistrarEmpresaComponent_Conditional_8_Conditional_27_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 21)(29, "div", 12)(30, "label", 22);
    \u0275\u0275text(31, "Correo de contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(33, RegistrarEmpresaComponent_Conditional_8_Conditional_33_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 12)(35, "label", 24);
    \u0275\u0275text(36, "Tel\xE9fono de contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 25);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(38, RegistrarEmpresaComponent_Conditional_8_Conditional_38_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "fieldset", 11)(40, "legend");
    \u0275\u0275text(41, "Cuenta de administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 12)(43, "label", 26);
    \u0275\u0275text(44, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 27);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(46, RegistrarEmpresaComponent_Conditional_8_Conditional_46_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 12)(48, "label", 28);
    \u0275\u0275text(49, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 29);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(51, RegistrarEmpresaComponent_Conditional_8_Conditional_51_Template, 2, 1, "span", 15);
    \u0275\u0275elementStart(52, "span", 18);
    \u0275\u0275text(53, "Con este correo iniciar\xE1s sesi\xF3n en tu cuenta.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 12)(55, "label", 30);
    \u0275\u0275text(56, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 31);
    \u0275\u0275element(58, "input", 32);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(59, "button", 33);
    \u0275\u0275listener("click", function RegistrarEmpresaComponent_Conditional_8_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility());
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(61, RegistrarEmpresaComponent_Conditional_8_Conditional_61_Template, 2, 1, "span", 15);
    \u0275\u0275elementStart(62, "span", 18);
    \u0275\u0275text(63, "Usa una contrase\xF1a segura con n\xFAmeros y caracteres especiales.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 34);
    \u0275\u0275element(65, "input", 35);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(66, "label", 36);
    \u0275\u0275text(67, " Acepto las ");
    \u0275\u0275elementStart(68, "a", 37);
    \u0275\u0275text(69, "condiciones de uso");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, " y la ");
    \u0275\u0275elementStart(71, "a", 37);
    \u0275\u0275text(72, "pol\xEDtica de privacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " de FashionStore. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(74, RegistrarEmpresaComponent_Conditional_8_Conditional_74_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "fieldset", 38)(76, "legend");
    \u0275\u0275text(77, "Selecciona tu plan");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(78, RegistrarEmpresaComponent_Conditional_8_Conditional_78_Template, 7, 1, "div", 9)(79, RegistrarEmpresaComponent_Conditional_8_Conditional_79_Template, 3, 0, "div", 39)(80, RegistrarEmpresaComponent_Conditional_8_Conditional_80_Template, 2, 0, "p", 40)(81, RegistrarEmpresaComponent_Conditional_8_Conditional_81_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 41);
    \u0275\u0275conditionalCreate(83, RegistrarEmpresaComponent_Conditional_8_Conditional_83_Template, 2, 0)(84, RegistrarEmpresaComponent_Conditional_8_Conditional_84_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 42);
    \u0275\u0275text(86, " \xBFYa tienes una cuenta? ");
    \u0275\u0275elementStart(87, "a", 43);
    \u0275\u0275text(88, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.error() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.registroForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("nombre"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("nombre") ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("slug"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("slug") ? 20 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("razon_social"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("razon_social") ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("correo"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("correo") ? 33 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("telefono"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("telefono") ? 38 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("nombre_admin"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("nombre_admin") ? 46 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("correo_admin"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("correo_admin") ? 51 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("password"));
    \u0275\u0275property("type", ctx_r1.mostrarPassword() ? "text" : "password");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.mostrarPassword() ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a")("aria-pressed", ctx_r1.mostrarPassword());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.mostrarPassword() ? "\u{1F441}\uFE0F" : "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("password") ? 61 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("terminos"));
    \u0275\u0275control();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("terminos") ? 74 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.errorPlanes() ? 78 : ctx_r1.cargandoPlanes() ? 79 : ctx_r1.planes().length === 0 ? 80 : 81);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.registroForm.valid || ctx_r1.enviando());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.enviando() ? 83 : 84);
  }
}
function RegistrarEmpresaComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 57);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Registro completado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 58);
    \u0275\u0275text(6, "Tu empresa fue registrada correctamente en FashionStore.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 59)(8, "div", 60)(9, "span", 61);
    \u0275\u0275text(10, "Empresa registrada:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 60)(14, "span", 61);
    \u0275\u0275text(15, "Identificador:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 60)(19, "span", 61);
    \u0275\u0275text(20, "Administrador:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 60)(24, "span", 61);
    \u0275\u0275text(25, "Email del administrador:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 62);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 63)(29, "h3");
    \u0275\u0275text(30, "Pr\xF3ximo paso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Inicia sesi\xF3n con tu cuenta de administrador para comenzar a usar FashionStore.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 64);
    \u0275\u0275listener("click", function RegistrarEmpresaComponent_Conditional_9_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContinuar());
    });
    \u0275\u0275text(34, " Iniciar sesi\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.empresaCreada()?.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.empresaCreada()?.slug);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.administradorCreado()?.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.administradorCreado()?.correo);
  }
}
var RegistrarEmpresaComponent = class _RegistrarEmpresaComponent {
  fb = inject(FormBuilder);
  service = inject(RegistrarEmpresaService);
  router = inject(Router);
  registroForm = this.fb.group({
    // Datos de empresa
    nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    slug: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    razon_social: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
    correo: ["", [Validators.required, Validators.email]],
    telefono: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    // Datos del administrador
    nombre_admin: ["", [Validators.required, Validators.minLength(2)]],
    correo_admin: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    terminos: [false, Validators.requiredTrue],
    // Plan SaaS inicial
    plan_id: [null, Validators.required]
  });
  enviando = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
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
  empresaCreada = signal(
    null,
    ...ngDevMode ? [{ debugName: "empresaCreada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  administradorCreado = signal(
    null,
    ...ngDevMode ? [{ debugName: "administradorCreado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mostrarPassword = signal(
    false,
    ...ngDevMode ? [{ debugName: "mostrarPassword" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Planes
  planes = signal(
    [],
    ...ngDevMode ? [{ debugName: "planes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cargandoPlanes = signal(
    false,
    ...ngDevMode ? [{ debugName: "cargandoPlanes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorPlanes = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorPlanes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  planSeleccionado = signal(
    null,
    ...ngDevMode ? [{ debugName: "planSeleccionado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.cargarPlanes();
  }
  cargarPlanes() {
    this.cargandoPlanes.set(true);
    this.errorPlanes.set(null);
    this.service.obtenerPlanesActivos().subscribe({
      next: (planes) => {
        this.planes.set(planes);
        this.cargandoPlanes.set(false);
      },
      error: () => {
        this.errorPlanes.set("No se pudieron cargar los planes disponibles. Int\xE9ntalo nuevamente.");
        this.cargandoPlanes.set(false);
      }
    });
  }
  seleccionarPlan(plan) {
    this.planSeleccionado.set(plan);
    this.registroForm.get("plan_id")?.setValue(plan.id);
  }
  reintentar() {
    this.cargarPlanes();
  }
  get slugSugerido() {
    const nombre = this.registroForm.get("nombre")?.value || "";
    return nombre.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
  }
  onNombreChange() {
    const slug = this.registroForm.get("slug");
    if (!slug?.touched) {
      slug?.setValue(this.slugSugerido, { emitEvent: false });
    }
  }
  togglePasswordVisibility() {
    this.mostrarPassword.update((value) => !value);
  }
  onSubmit() {
    if (!this.registroForm.valid || this.enviando())
      return;
    this.enviando.set(true);
    this.error.set(null);
    const planIdValue = this.registroForm.get("plan_id")?.value;
    const datos = {
      nombre: this.registroForm.get("nombre")?.value || "",
      slug: this.registroForm.get("slug")?.value || "",
      razon_social: this.registroForm.get("razon_social")?.value || "",
      correo: this.registroForm.get("correo")?.value || "",
      telefono: this.registroForm.get("telefono")?.value || "",
      nombre_admin: this.registroForm.get("nombre_admin")?.value || "",
      correo_admin: this.registroForm.get("correo_admin")?.value || "",
      password: this.registroForm.get("password")?.value || "",
      plan_id: planIdValue ? planIdValue : void 0
    };
    this.service.registrarEmpresa(datos).subscribe({
      next: (response) => {
        this.enviando.set(false);
        this.exito.set(true);
        this.empresaCreada.set(response.empresa);
        this.administradorCreado.set(response.administrador);
      },
      error: (err) => {
        this.enviando.set(false);
        if (err.status === 409) {
          this.error.set("El nombre, identificador empresarial o correo de administrador ya existe. Verifica e intenta nuevamente.");
        } else if (err.status === 400) {
          this.error.set("Hay errores en los datos ingresados. Verifica e intenta nuevamente.");
        } else {
          this.error.set("No pudimos completar el registro. Intenta nuevamente m\xE1s tarde.");
        }
      }
    });
  }
  onContinuar() {
    this.router.navigateByUrl("/login");
  }
  getErrorMessage(fieldName) {
    const control = this.registroForm.get(fieldName);
    if (!control || !control.errors)
      return "";
    if (control.errors["required"])
      return "Este campo es requerido.";
    if (control.errors["minlength"])
      return `M\xEDnimo ${control.errors["minlength"].requiredLength} caracteres.`;
    if (control.errors["maxlength"])
      return `M\xE1ximo ${control.errors["maxlength"].requiredLength} caracteres.`;
    if (control.errors["email"])
      return "Correo electr\xF3nico no v\xE1lido.";
    if (control.errors["pattern"])
      return "Formato inv\xE1lido.";
    return "Datos inv\xE1lidos.";
  }
  isFieldInvalid(fieldName) {
    const field = this.registroForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  static \u0275fac = function RegistrarEmpresaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrarEmpresaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrarEmpresaComponent, selectors: [["app-cu01-registrar-empresa"]], decls: 13, vars: 1, consts: [[1, "register-container"], [1, "register-header"], [1, "header-content"], [1, "tagline"], [1, "register-main"], [1, "form-wrapper"], [1, "success-wrapper"], [1, "register-footer"], [1, "form-header"], [1, "error-banner"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-group"], ["for", "nombre", 1, "required"], ["type", "text", "id", "nombre", "formControlName", "nombre", "placeholder", "Ej: Fashion Boutique SA", 1, "form-control", 3, "change"], [1, "error-message"], ["for", "slug", 1, "required"], ["type", "text", "id", "slug", "formControlName", "slug", "placeholder", "ej-fashion-boutique", 1, "form-control"], [1, "hint"], ["for", "razon_social", 1, "required"], ["type", "text", "id", "razon_social", "formControlName", "razon_social", "placeholder", "Ej: Fashion Boutique Sociedad An\xF3nima", 1, "form-control"], [1, "form-row"], ["for", "correo", 1, "required"], ["type", "email", "id", "correo", "formControlName", "correo", "placeholder", "contacto@empresa.com", 1, "form-control"], ["for", "telefono", 1, "required"], ["type", "tel", "id", "telefono", "formControlName", "telefono", "placeholder", "+591 2 1234567", 1, "form-control"], ["for", "nombre_admin", 1, "required"], ["type", "text", "id", "nombre_admin", "formControlName", "nombre_admin", "placeholder", "Tu nombre completo", 1, "form-control"], ["for", "correo_admin", 1, "required"], ["type", "email", "id", "correo_admin", "formControlName", "correo_admin", "placeholder", "tu.correo@empresa.com", 1, "form-control"], ["for", "password", 1, "required"], [1, "password-input-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", 1, "form-control", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "form-group", "checkbox"], ["type", "checkbox", "id", "terminos", "formControlName", "terminos", 1, "checkbox-input"], ["for", "terminos", 1, "checkbox-label"], ["href", "#", "target", "_blank", 1, "link"], [1, "form-section", "planes-section"], [1, "loading-planes"], [1, "no-planes"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "login-link"], ["routerLink", "/login", 1, "link"], [1, "error-icon"], ["type", "button", 1, "btn", "btn-secondary", "btn-small", 3, "click"], [1, "loading-spinner"], [1, "planes-grid"], [1, "plan-card", 3, "selected"], [1, "plan-card", 3, "click"], [1, "plan-header"], [1, "plan-nombre"], [1, "plan-precio"], [1, "plan-details"], [1, "plan-limite"], [1, "plan-funcionalidades"], ["type", "button", 1, "btn-select", 3, "click"], [1, "success-icon"], [1, "success-message"], [1, "success-details"], [1, "detail-item"], [1, "label"], [1, "value"], [1, "next-steps"], [1, "btn", "btn-primary", "btn-large", 3, "click"]], template: function RegistrarEmpresaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "FashionStore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Plataforma SaaS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275conditionalCreate(8, RegistrarEmpresaComponent_Conditional_8_Template, 89, 36, "div", 5)(9, RegistrarEmpresaComponent_Conditional_9_Template, 35, 4, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "p");
      \u0275\u0275text(12, "\xA9 2026 FashionStore. Todos los derechos reservados.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.exito() ? 8 : 9);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, CurrencyPipe], styles: ['\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f5f5 0%,\n      #ffffff 100%);\n}\n.register-header[_ngcontent-%COMP%] {\n  background: var(--%NS%color-white);\n  border-bottom: 1px solid var(--%NS%color-border);\n  padding: 24px;\n  text-align: center;\n}\n.register-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n  letter-spacing: -0.5px;\n}\n.register-header[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.register-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n}\n@media (max-width: 768px) {\n  .register-main[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  background: var(--%NS%color-white);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 40px 36px;\n}\n@media (max-width: 480px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n    border-radius: 0;\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  font-size: 14px;\n  color: var(--%NS%color-text-secondary);\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 14px 16px;\n  margin-bottom: 24px;\n  background: #fff5f5;\n  border: 1px solid #ffb3b3;\n  border-radius: 6px;\n}\n.error-banner[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.error-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #c00;\n  line-height: 1.4;\n}\n.register-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.form-section[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-section[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n  border: none;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.form-group[_ngcontent-%COMP%]   label.required[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: var(--%NS%color-danger);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 6px;\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-text);\n  transition: all var(--%NS%transition-fast);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--%NS%color-primary);\n  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ff6b6b;\n  background: #fff9f9;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--%NS%color-text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-group[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n.form-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity var(--%NS%transition-fast);\n}\n.form-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.form-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--%NS%color-primary);\n  outline-offset: 2px;\n  border-radius: 4px;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #c00;\n  line-height: 1.3;\n}\n.form-group[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n  line-height: 1.3;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.checkbox[_ngcontent-%COMP%] {\n  flex-direction: row;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.checkbox[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 3px;\n  cursor: pointer;\n  accent-color: var(--%NS%color-primary);\n  flex-shrink: 0;\n}\n.checkbox[_ngcontent-%COMP%]   .checkbox-input.is-invalid[_ngcontent-%COMP%] {\n  outline: 2px solid #ff6b6b;\n  outline-offset: 2px;\n}\n.checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  cursor: pointer;\n  line-height: 1.5;\n}\n.checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  text-decoration: underline;\n}\n.checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #b71c1c;\n}\n.checkbox[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all var(--%NS%transition-fast);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #b71c1c;\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.2);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:not(:disabled):active {\n  transform: translateY(1px);\n}\n.btn.btn-large[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  font-size: 15px;\n  width: 100%;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.login-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.success-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  text-align: center;\n  background: var(--%NS%color-white);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 40px 36px;\n}\n@media (max-width: 480px) {\n  .success-wrapper[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n    border-radius: 0;\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 24px;\n  background: #e8f5e9;\n  border-radius: 50%;\n  font-size: 36px;\n  color: #2e7d32;\n}\n.success-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.success-message[_ngcontent-%COMP%] {\n  margin: 0 0 28px 0;\n  font-size: 14px;\n  color: var(--%NS%color-text-secondary);\n  line-height: 1.5;\n}\n.success-details[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-radius: 6px;\n  padding: 16px;\n  margin-bottom: 28px;\n  text-align: left;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  font-size: 13px;\n}\n.detail-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-secondary);\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text);\n  font-weight: 700;\n}\n.next-steps[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 24px;\n}\n.next-steps[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.next-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n  line-height: 1.5;\n}\n.register-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.register-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.link[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  text-decoration: none;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.planes-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--%NS%color-border);\n  padding-top: 24px;\n}\n.planes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin: 20px 0;\n}\n@media (max-width: 768px) {\n  .planes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.plan-card[_ngcontent-%COMP%] {\n  border: 2px solid var(--%NS%color-border);\n  border-radius: 6px;\n  padding: 20px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.1);\n}\n.plan-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: rgba(211, 47, 47, 0.02);\n}\n.plan-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.plan-nombre[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.plan-precio[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n}\n.plan-details[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #fafafa;\n  border-radius: 4px;\n}\n.plan-limite[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.plan-funcionalidades[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.plan-funcionalidades[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.plan-funcionalidades[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: flex;\n  gap: 8px;\n}\n.plan-funcionalidades[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.btn-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  border: 2px solid var(--%NS%color-border);\n  cursor: pointer;\n  margin-top: 8px;\n  border-radius: 6px;\n}\n.btn-select[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n}\n.btn-select.selected[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: white;\n}\n.btn-select.selected[_ngcontent-%COMP%]:hover {\n  background: #b71c1c;\n}\n.loading-planes[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-secondary);\n  padding: 20px;\n}\n.no-planes[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: var(--%NS%color-text-secondary);\n  margin: 0;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%color-border);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #fafafa;\n  border-color: var(--%NS%color-primary);\n}\n.btn.btn-small[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=cu01-registrar-empresa-ACAPGJS4.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrarEmpresaComponent, [{
    type: Component,
    args: [{ selector: "app-cu01-registrar-empresa", imports: [CommonModule, ReactiveFormsModule, RouterLink], standalone: true, template: `<div class="register-container">
  <!-- Header -->
  <div class="register-header">
    <div class="header-content">
      <h1>FashionStore</h1>
      <p class="tagline">Plataforma SaaS</p>
    </div>
  </div>

  <!-- Main Content -->
  <div class="register-main">
    @if (!exito()) {
      <!-- Formulario -->
      <div class="form-wrapper">
        <div class="form-header">
          <h2>Crear una cuenta para tu empresa</h2>
          <p>Comienza a administrar tu negocio en FashionStore</p>
        </div>

        @if (error()) {
          <div class="error-banner">
            <span class="error-icon">\u26A0</span>
            <p>{{ error() }}</p>
          </div>
        }

        <form [formGroup]="registroForm" (ngSubmit)="onSubmit()" class="register-form">
          <!-- Secci\xF3n: Datos de la Empresa -->
          <fieldset class="form-section">
            <legend>Datos de la empresa</legend>

            <div class="form-group">
              <label for="nombre" class="required">Nombre de empresa</label>
              <input
                type="text"
                id="nombre"
                formControlName="nombre"
                class="form-control"
                [class.is-invalid]="isFieldInvalid('nombre')"
                (change)="onNombreChange()"
                placeholder="Ej: Fashion Boutique SA"
              />
              @if (isFieldInvalid('nombre')) {
                <span class="error-message">{{ getErrorMessage('nombre') }}</span>
              }
            </div>

            <div class="form-group">
              <label for="slug" class="required">Identificador empresarial</label>
              <input
                type="text"
                id="slug"
                formControlName="slug"
                class="form-control"
                [class.is-invalid]="isFieldInvalid('slug')"
                placeholder="ej-fashion-boutique"
              />
              @if (isFieldInvalid('slug')) {
                <span class="error-message">{{ getErrorMessage('slug') }}</span>
              }
              <span class="hint">Min\xFAsculas, n\xFAmeros y guiones. \xDAnico en la plataforma.</span>
            </div>

            <div class="form-group">
              <label for="razon_social" class="required">Raz\xF3n social registrada</label>
              <input
                type="text"
                id="razon_social"
                formControlName="razon_social"
                class="form-control"
                [class.is-invalid]="isFieldInvalid('razon_social')"
                placeholder="Ej: Fashion Boutique Sociedad An\xF3nima"
              />
              @if (isFieldInvalid('razon_social')) {
                <span class="error-message">{{ getErrorMessage('razon_social') }}</span>
              }
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="correo" class="required">Correo de contacto</label>
                <input
                  type="email"
                  id="correo"
                  formControlName="correo"
                  class="form-control"
                  [class.is-invalid]="isFieldInvalid('correo')"
                  placeholder="contacto@empresa.com"
                />
                @if (isFieldInvalid('correo')) {
                  <span class="error-message">{{ getErrorMessage('correo') }}</span>
                }
              </div>

              <div class="form-group">
                <label for="telefono" class="required">Tel\xE9fono de contacto</label>
                <input
                  type="tel"
                  id="telefono"
                  formControlName="telefono"
                  class="form-control"
                  [class.is-invalid]="isFieldInvalid('telefono')"
                  placeholder="+591 2 1234567"
                />
                @if (isFieldInvalid('telefono')) {
                  <span class="error-message">{{ getErrorMessage('telefono') }}</span>
                }
              </div>
            </div>
          </fieldset>

          <!-- Secci\xF3n: Cuenta Administrador -->
          <fieldset class="form-section">
            <legend>Cuenta de administrador</legend>

            <div class="form-group">
              <label for="nombre_admin" class="required">Nombre completo</label>
              <input
                type="text"
                id="nombre_admin"
                formControlName="nombre_admin"
                class="form-control"
                [class.is-invalid]="isFieldInvalid('nombre_admin')"
                placeholder="Tu nombre completo"
              />
              @if (isFieldInvalid('nombre_admin')) {
                <span class="error-message">{{ getErrorMessage('nombre_admin') }}</span>
              }
            </div>

            <div class="form-group">
              <label for="correo_admin" class="required">Correo electr\xF3nico</label>
              <input
                type="email"
                id="correo_admin"
                formControlName="correo_admin"
                class="form-control"
                [class.is-invalid]="isFieldInvalid('correo_admin')"
                placeholder="tu.correo@empresa.com"
              />
              @if (isFieldInvalid('correo_admin')) {
                <span class="error-message">{{ getErrorMessage('correo_admin') }}</span>
              }
              <span class="hint">Con este correo iniciar\xE1s sesi\xF3n en tu cuenta.</span>
            </div>

            <div class="form-group">
              <label for="password" class="required">Contrase\xF1a</label>
              <div class="password-input-wrapper">
                <input
                  [type]="mostrarPassword() ? 'text' : 'password'"
                  id="password"
                  formControlName="password"
                  class="form-control"
                  [class.is-invalid]="isFieldInvalid('password')"
                  placeholder="M\xEDnimo 6 caracteres"
                />
                <button
                  type="button"
                  class="password-toggle"
                  (click)="togglePasswordVisibility()"
                  [attr.aria-label]="mostrarPassword() ? 'Ocultar contrase\xF1a' : 'Mostrar contrase\xF1a'"
                  [attr.aria-pressed]="mostrarPassword()"
                >
                  {{ mostrarPassword() ? '\u{1F441}\uFE0F' : '\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F' }}
                </button>
              </div>
              @if (isFieldInvalid('password')) {
                <span class="error-message">{{ getErrorMessage('password') }}</span>
              }
              <span class="hint">Usa una contrase\xF1a segura con n\xFAmeros y caracteres especiales.</span>
            </div>
          </fieldset>

          <!-- T\xE9rminos -->
          <div class="form-group checkbox">
            <input
              type="checkbox"
              id="terminos"
              formControlName="terminos"
              class="checkbox-input"
              [class.is-invalid]="isFieldInvalid('terminos')"
            />
            <label for="terminos" class="checkbox-label">
              Acepto las
              <a href="#" target="_blank" class="link">condiciones de uso</a>
              y la
              <a href="#" target="_blank" class="link">pol\xEDtica de privacidad</a>
              de FashionStore.
            </label>
            @if (isFieldInvalid('terminos')) {
              <span class="error-message">Debes aceptar los t\xE9rminos.</span>
            }
          </div>

          <!-- Secci\xF3n: Selecciona tu plan -->
          <fieldset class="form-section planes-section">
            <legend>Selecciona tu plan</legend>

            @if (errorPlanes()) {
              <div class="error-banner">
                <span class="error-icon">\u26A0</span>
                <p>{{ errorPlanes() }}</p>
                <button type="button" class="btn btn-secondary btn-small" (click)="reintentar()">
                  Reintentar
                </button>
              </div>
            } @else if (cargandoPlanes()) {
              <div class="loading-planes">
                <span class="loading-spinner"></span>
                Cargando planes...
              </div>
            } @else if (planes().length === 0) {
              <p class="no-planes">No hay planes disponibles para el registro.</p>
            } @else {
              <div class="planes-grid">
                @for (plan of planes(); track plan.id) {
                  <div
                    class="plan-card"
                    [class.selected]="planSeleccionado()?.id === plan.id"
                    (click)="seleccionarPlan(plan)"
                  >
                    <div class="plan-header">
                      <h3 class="plan-nombre">{{ plan.nombre }}</h3>
                      <p class="plan-precio">{{ plan.precio | currency: 'Bs.': 'symbol': '0.0-2' }} / mes</p>
                    </div>

                    <div class="plan-details">
                      <p class="plan-limite">Hasta {{ plan.limite_sucursales }} sucursal(es)</p>
                    </div>

                    <div class="plan-funcionalidades">
                      <h4>Funcionalidades:</h4>
                      <ul>
                        <li [class.disabled]="!plan.gestion_productos">
                          {{ plan.gestion_productos ? '\u2713' : '\u2715' }} Gesti\xF3n de productos
                        </li>
                        <li [class.disabled]="!plan.gestion_ventas">
                          {{ plan.gestion_ventas ? '\u2713' : '\u2715' }} Gesti\xF3n de ventas
                        </li>
                        <li [class.disabled]="!plan.reservas">
                          {{ plan.reservas ? '\u2713' : '\u2715' }} Reservas
                        </li>
                        <li [class.disabled]="!plan.operacion_offline">
                          {{ plan.operacion_offline ? '\u2713' : '\u2715' }} Operaci\xF3n offline
                        </li>
                        <li [class.disabled]="!plan.reportes_convencionales">
                          {{ plan.reportes_convencionales ? '\u2713' : '\u2715' }} Reportes convencionales
                        </li>
                        <li [class.disabled]="!plan.reportes_generativos_ia">
                          {{ plan.reportes_generativos_ia ? '\u2713' : '\u2715' }} Reportes generativos con IA
                        </li>
                      </ul>
                    </div>

                    <button
                      type="button"
                      class="btn-select"
                      [class.selected]="planSeleccionado()?.id === plan.id"
                      (click)="seleccionarPlan(plan)"
                    >
                      {{ planSeleccionado()?.id === plan.id ? 'Seleccionado' : 'Seleccionar' }}
                    </button>
                  </div>
                }
              </div>

              @if (isFieldInvalid('plan_id')) {
                <span class="error-message">Debes seleccionar un plan.</span>
              }
            }
          </fieldset>

          <!-- Submit -->
          <button
            type="submit"
            class="btn btn-primary"
            [disabled]="!registroForm.valid || enviando()"
          >
            @if (enviando()) {
              <span class="loading-spinner"></span>
              Registrando...
            } @else {
              Crear cuenta empresarial
            }
          </button>
        </form>

        <!-- Login Link -->
        <div class="login-link">
          \xBFYa tienes una cuenta?
          <a routerLink="/login" class="link">Iniciar sesi\xF3n</a>
        </div>
      </div>
    } @else {
      <!-- Pantalla de \xC9xito -->
      <div class="success-wrapper">
        <div class="success-icon">\u2713</div>
        <h2>Registro completado</h2>
        <p class="success-message">Tu empresa fue registrada correctamente en FashionStore.</p>

        <div class="success-details">
          <div class="detail-item">
            <span class="label">Empresa registrada:</span>
            <span class="value">{{ empresaCreada()?.nombre }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Identificador:</span>
            <span class="value">{{ empresaCreada()?.slug }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Administrador:</span>
            <span class="value">{{ administradorCreado()?.nombre }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Email del administrador:</span>
            <span class="value">{{ administradorCreado()?.correo }}</span>
          </div>
        </div>

        <div class="next-steps">
          <h3>Pr\xF3ximo paso</h3>
          <p>Inicia sesi\xF3n con tu cuenta de administrador para comenzar a usar FashionStore.</p>
        </div>

        <button (click)="onContinuar()" class="btn btn-primary btn-large">
          Iniciar sesi\xF3n
        </button>
      </div>
    }
  </div>

  <!-- Footer -->
  <div class="register-footer">
    <p>&copy; 2026 FashionStore. Todos los derechos reservados.</p>
  </div>
</div>
`, styles: ['/* src/app/features/cu01-registrar-empresa/cu01-registrar-empresa.scss */\n.register-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f5f5 0%,\n      #ffffff 100%);\n}\n.register-header {\n  background: var(--color-white);\n  border-bottom: 1px solid var(--color-border);\n  padding: 24px;\n  text-align: center;\n}\n.register-header .header-content h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-primary);\n  letter-spacing: -0.5px;\n}\n.register-header .tagline {\n  margin: 6px 0 0 0;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.register-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n}\n@media (max-width: 768px) {\n  .register-main {\n    padding: 24px 16px;\n  }\n}\n.form-wrapper {\n  width: 100%;\n  max-width: 500px;\n  background: var(--color-white);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 40px 36px;\n}\n@media (max-width: 480px) {\n  .form-wrapper {\n    padding: 28px 20px;\n    border-radius: 0;\n  }\n}\n.form-header {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.form-header h2 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.form-header p {\n  margin: 8px 0 0 0;\n  font-size: 14px;\n  color: var(--color-text-secondary);\n}\n.error-banner {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 14px 16px;\n  margin-bottom: 24px;\n  background: #fff5f5;\n  border: 1px solid #ffb3b3;\n  border-radius: 6px;\n}\n.error-banner .error-icon {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.error-banner p {\n  margin: 0;\n  font-size: 13px;\n  color: #c00;\n  line-height: 1.4;\n}\n.register-form {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.form-section {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-section legend {\n  padding: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n  border: none;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.form-group label.required::after {\n  content: " *";\n  color: var(--color-danger);\n}\n.form-group .form-control {\n  padding: 12px 14px;\n  font-size: 14px;\n  border: 1px solid var(--color-border);\n  border-radius: 6px;\n  background: var(--color-white);\n  color: var(--color-text);\n  transition: all var(--transition-fast);\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);\n}\n.form-group .form-control.is-invalid {\n  border-color: #ff6b6b;\n  background: #fff9f9;\n}\n.form-group .form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);\n}\n.form-group .form-control::placeholder {\n  color: var(--color-text-secondary);\n}\n.form-group .password-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-group .password-input-wrapper .form-control {\n  padding-right: 40px;\n}\n.form-group .password-toggle {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity var(--transition-fast);\n}\n.form-group .password-toggle:hover {\n  opacity: 0.7;\n}\n.form-group .password-toggle:focus {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n  border-radius: 4px;\n}\n.form-group .error-message {\n  font-size: 12px;\n  color: #c00;\n  line-height: 1.3;\n}\n.form-group .hint {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  line-height: 1.3;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 480px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.checkbox {\n  flex-direction: row;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.checkbox .checkbox-input {\n  width: 18px;\n  height: 18px;\n  margin-top: 3px;\n  cursor: pointer;\n  accent-color: var(--color-primary);\n  flex-shrink: 0;\n}\n.checkbox .checkbox-input.is-invalid {\n  outline: 2px solid #ff6b6b;\n  outline-offset: 2px;\n}\n.checkbox .checkbox-label {\n  font-size: 13px;\n  color: var(--color-text);\n  cursor: pointer;\n  line-height: 1.5;\n}\n.checkbox .checkbox-label .link {\n  color: var(--color-primary);\n  text-decoration: underline;\n}\n.checkbox .checkbox-label .link:hover {\n  color: #b71c1c;\n}\n.checkbox .error-message {\n  grid-column: 1/-1;\n}\n.btn {\n  padding: 12px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background: var(--color-primary);\n  color: white;\n}\n.btn.btn-primary:not(:disabled):hover {\n  background: #b71c1c;\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.2);\n}\n.btn.btn-primary:not(:disabled):active {\n  transform: translateY(1px);\n}\n.btn.btn-large {\n  padding: 14px 32px;\n  font-size: 15px;\n  width: 100%;\n}\n.loading-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-link {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.login-link .link {\n  color: var(--color-primary);\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-link .link:hover {\n  text-decoration: underline;\n}\n.success-wrapper {\n  width: 100%;\n  max-width: 500px;\n  text-align: center;\n  background: var(--color-white);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 40px 36px;\n}\n@media (max-width: 480px) {\n  .success-wrapper {\n    padding: 28px 20px;\n    border-radius: 0;\n  }\n}\n.success-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 24px;\n  background: #e8f5e9;\n  border-radius: 50%;\n  font-size: 36px;\n  color: #2e7d32;\n}\n.success-wrapper h2 {\n  margin: 0 0 12px 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.success-message {\n  margin: 0 0 28px 0;\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  line-height: 1.5;\n}\n.success-details {\n  background: #fafafa;\n  border-radius: 6px;\n  padding: 16px;\n  margin-bottom: 28px;\n  text-align: left;\n}\n.detail-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  font-size: 13px;\n}\n.detail-item:not(:last-child) {\n  border-bottom: 1px solid var(--color-border);\n}\n.detail-item .label {\n  color: var(--color-text-secondary);\n  font-weight: 600;\n}\n.detail-item .value {\n  color: var(--color-text);\n  font-weight: 700;\n}\n.next-steps {\n  text-align: left;\n  margin-bottom: 24px;\n}\n.next-steps h3 {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.next-steps p {\n  margin: 0;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  line-height: 1.5;\n}\n.register-footer {\n  padding: 20px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.register-footer p {\n  margin: 0;\n}\n.link {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.link:hover {\n  text-decoration: underline;\n}\n.planes-section {\n  border-top: 1px solid var(--color-border);\n  padding-top: 24px;\n}\n.planes-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin: 20px 0;\n}\n@media (max-width: 768px) {\n  .planes-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.plan-card {\n  border: 2px solid var(--color-border);\n  border-radius: 6px;\n  padding: 20px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.plan-card:hover {\n  border-color: var(--color-primary);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.1);\n}\n.plan-card.selected {\n  border-color: var(--color-primary);\n  background: rgba(211, 47, 47, 0.02);\n}\n.plan-header {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.plan-nombre {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.plan-precio {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-primary);\n}\n.plan-details {\n  padding: 12px;\n  background: #fafafa;\n  border-radius: 4px;\n}\n.plan-limite {\n  margin: 0;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.plan-funcionalidades h4 {\n  margin: 0 0 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.plan-funcionalidades ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.plan-funcionalidades li {\n  font-size: 13px;\n  display: flex;\n  gap: 8px;\n}\n.plan-funcionalidades li.disabled {\n  opacity: 0.6;\n}\n.btn-select {\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  border: 2px solid var(--color-border);\n  cursor: pointer;\n  margin-top: 8px;\n  border-radius: 6px;\n}\n.btn-select:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.btn-select.selected {\n  background: var(--color-primary);\n  color: white;\n}\n.btn-select.selected:hover {\n  background: #b71c1c;\n}\n.loading-planes {\n  color: var(--color-text-secondary);\n  padding: 20px;\n}\n.no-planes {\n  padding: 20px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n.btn.btn-secondary {\n  border: 1px solid var(--color-border);\n}\n.btn.btn-secondary:not(:disabled):hover {\n  background: #fafafa;\n  border-color: var(--color-primary);\n}\n.btn.btn-small {\n  padding: 8px 16px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=cu01-registrar-empresa-ACAPGJS4.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrarEmpresaComponent, { className: "RegistrarEmpresaComponent", filePath: "src/app/features/cu01-registrar-empresa/cu01-registrar-empresa.ts", lineNumber: 14 });
})();
export {
  RegistrarEmpresaComponent
};
//# debugId=7559ae77-52ed-5d02-ac59-3070a99c99bc
//# sourceMappingURL=chunk-774TFVHO.js.map
