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
  Icon
} from "./chunk-KUJLGORD.js";
import "./chunk-BQM6CYO4.js";
import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-ENHVXUH7.js";
import {
  Component,
  HostListener,
  Injectable,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
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
  ɵɵdefineInjectable,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNHCNXB7.js";

// src/app/usuarios-y-accesos/cu05-gestionar-usuarios-roles/usuario-admin.service.ts
var UsuarioAdminService = class _UsuarioAdminService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/usuarios`;
  // Ciudad → Sucursal provienen de CU06 (P1_SucursalesYCatalogos): CU05 solo
  // las consulta para el selector de "Nuevo/Editar usuario", no las administra.
  ciudades() {
    const params = new HttpParams().set("estado", "active");
    return this.http.get(`${environment.apiUrl}/ciudades`, { params });
  }
  sucursalesPorCiudad(ciudadId) {
    const params = new HttpParams().set("ciudad_id", ciudadId).set("estado", "active");
    return this.http.get(`${environment.apiUrl}/sucursales`, { params });
  }
  // Proveedor viene de Gestión de Proveedores (P1_SucursalesYCatalogos): CU05
  // solo lo consulta para vincular una cuenta PROVEEDOR, no lo administra.
  proveedores() {
    const params = new HttpParams().set("estado", "active");
    return this.http.get(`${environment.apiUrl}/proveedores`, { params });
  }
  list(query) {
    let params = new HttpParams();
    if (query?.search) {
      params = params.set("search", query.search);
    }
    if (query?.rol) {
      params = params.set("rol", query.rol);
    }
    if (query?.estado && query.estado !== "all") {
      params = params.set("estado", query.estado);
    }
    return this.http.get(this.baseUrl, { params });
  }
  roles() {
    return this.http.get(`${this.baseUrl}/roles`);
  }
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }
  changeRole(id, rol) {
    return this.http.patch(`${this.baseUrl}/${id}/rol`, { rol });
  }
  setActive(id, isActive) {
    return this.http.patch(`${this.baseUrl}/${id}/estado`, {
      is_active: isActive
    });
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function UsuarioAdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuarioAdminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuarioAdminService, factory: _UsuarioAdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuarioAdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/usuarios-y-accesos/cu05-gestionar-usuarios-roles/usuario-form/usuario-form.ts
var _forTrack0 = ($index, $item) => $item.valor;
var _forTrack1 = ($index, $item) => $item.id;
function UsuarioForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Ingresa un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "La contrase\xF1a debe tener al menos 8 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7)(1, "span", 8);
    \u0275\u0275text(2, "Contrase\xF1a inicial *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 25);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(4, UsuarioForm_Conditional_0_Conditional_19_Conditional_4_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.password.invalid && ctx_r1.form.controls.password.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.password.invalid && ctx_r1.form.controls.password.touched ? 4 : -1);
  }
}
function UsuarioForm_Conditional_0_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rol_r3 = ctx.$implicit;
    \u0275\u0275property("value", rol_r3.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rol_r3.etiqueta);
  }
}
function UsuarioForm_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Selecciona un rol.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_29_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ciudad_r4 = ctx.$implicit;
    \u0275\u0275property("value", ciudad_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ciudad_r4.nombre);
  }
}
function UsuarioForm_Conditional_0_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Selecciona una ciudad.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_29_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sucursal_r5 = ctx.$implicit;
    \u0275\u0275property("value", sucursal_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sucursal_r5.nombre);
  }
}
function UsuarioForm_Conditional_0_Conditional_29_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Selecciona una sucursal.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 7)(2, "span", 8);
    \u0275\u0275text(3, "Ciudad *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 26)(5, "option", 27);
    \u0275\u0275text(6, "Selecciona una ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, UsuarioForm_Conditional_0_Conditional_29_For_8_Template, 2, 2, "option", 15, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, UsuarioForm_Conditional_0_Conditional_29_Conditional_9_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 7)(11, "span", 8);
    \u0275\u0275text(12, "Sucursal *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 28)(14, "option", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, UsuarioForm_Conditional_0_Conditional_29_For_17_Template, 2, 2, "option", 15, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(18, UsuarioForm_Conditional_0_Conditional_29_Conditional_18_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.ciudad_id.invalid && ctx_r1.form.controls.ciudad_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ciudades());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.ciudad_id.invalid && ctx_r1.form.controls.ciudad_id.touched ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.sucursal_id.invalid && ctx_r1.form.controls.sucursal_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.form.controls.ciudad_id.value ? "Selecciona una sucursal" : "Elige una ciudad primero", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sucursales());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.sucursal_id.invalid && ctx_r1.form.controls.sucursal_id.touched ? 18 : -1);
  }
}
function UsuarioForm_Conditional_0_Conditional_30_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const proveedor_r6 = ctx.$implicit;
    \u0275\u0275property("value", proveedor_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(proveedor_r6.razon_social);
  }
}
function UsuarioForm_Conditional_0_Conditional_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Selecciona el proveedor al que pertenece esta cuenta.");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7)(1, "span", 8);
    \u0275\u0275text(2, "Proveedor *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 29)(4, "option", 27);
    \u0275\u0275text(5, "Selecciona un proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, UsuarioForm_Conditional_0_Conditional_30_For_7_Template, 2, 2, "option", 15, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(8, UsuarioForm_Conditional_0_Conditional_30_Conditional_8_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.proveedor_id.invalid && ctx_r1.form.controls.proveedor_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.proveedores());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.proveedor_id.invalid && ctx_r1.form.controls.proveedor_id.touched ? 8 : -1);
  }
}
function UsuarioForm_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function UsuarioForm_Conditional_0_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function UsuarioForm_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function UsuarioForm_Conditional_0_Conditional_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar usuario", " ");
  }
}
function UsuarioForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function UsuarioForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function UsuarioForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function UsuarioForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function UsuarioForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, UsuarioForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 7)(14, "span", 8);
    \u0275\u0275text(15, "Correo electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(17, UsuarioForm_Conditional_0_Conditional_17_Template, 2, 0, "span", 10)(18, UsuarioForm_Conditional_0_Conditional_18_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, UsuarioForm_Conditional_0_Conditional_19_Template, 5, 3, "label", 12);
    \u0275\u0275elementStart(20, "label", 7)(21, "span", 8);
    \u0275\u0275text(22, "Rol *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 13)(24, "option", 14);
    \u0275\u0275text(25, "Selecciona un rol");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, UsuarioForm_Conditional_0_For_27_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(28, UsuarioForm_Conditional_0_Conditional_28_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, UsuarioForm_Conditional_0_Conditional_29_Template, 19, 9, "div", 16);
    \u0275\u0275conditionalCreate(30, UsuarioForm_Conditional_0_Conditional_30_Template, 9, 4, "label", 12);
    \u0275\u0275elementStart(31, "label", 17)(32, "span", 8);
    \u0275\u0275text(33, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 18);
    \u0275\u0275element(35, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(36, "span", 20);
    \u0275\u0275element(37, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 22);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "footer", 23);
    \u0275\u0275conditionalCreate(41, UsuarioForm_Conditional_0_Conditional_41_Template, 2, 0, "button", 24)(42, UsuarioForm_Conditional_0_Conditional_42_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de usuario" : ctx_r1.isEditMode ? "Editar usuario" : "Nuevo usuario");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.correo.invalid && ctx_r1.form.controls.correo.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.correo.hasError("required") && ctx_r1.form.controls.correo.touched ? 17 : ctx_r1.form.controls.correo.hasError("email") && ctx_r1.form.controls.correo.touched ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isEditMode ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.rol.invalid && ctx_r1.form.controls.rol.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.roles());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.rol.invalid && ctx_r1.form.controls.rol.touched ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mostrarSucursal ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mostrarProveedor ? 30 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activo" : "Inactivo");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 41 : 42);
  }
}
var ROLES_CON_SUCURSAL = /* @__PURE__ */ new Set(["ENCARGADO_SUCURSAL", "CAJERO"]);
var ROLES_CON_PROVEEDOR = /* @__PURE__ */ new Set(["PROVEEDOR"]);
var UsuarioForm = class _UsuarioForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  usuario = input(
    null,
    ...ngDevMode ? [{ debugName: "usuario" }] : (
      /* istanbul ignore next */
      []
    )
  );
  roles = input(
    [],
    ...ngDevMode ? [{ debugName: "roles" }] : (
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
  usuarioService = inject(UsuarioAdminService);
  ciudades = signal(
    [],
    ...ngDevMode ? [{ debugName: "ciudades" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sucursales = signal(
    [],
    ...ngDevMode ? [{ debugName: "sucursales" }] : (
      /* istanbul ignore next */
      []
    )
  );
  proveedores = signal(
    [],
    ...ngDevMode ? [{ debugName: "proveedores" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.maxLength(120)]],
    correo: ["", [Validators.required, Validators.email]],
    password: [""],
    rol: ["", [Validators.required]],
    ciudad_id: [null],
    sucursal_id: [null],
    proveedor_id: [null],
    is_active: [true]
  });
  constructor() {
    this.usuarioService.ciudades().subscribe({ next: (ciudades) => this.ciudades.set(ciudades) });
    this.usuarioService.proveedores().subscribe({ next: (p) => this.proveedores.set(p) });
    this.form.controls.ciudad_id.valueChanges.subscribe((ciudadId) => {
      this.form.controls.sucursal_id.setValue(null);
      this.cargarSucursales(ciudadId);
    });
    this.form.controls.rol.valueChanges.subscribe((rol) => this.aplicarReglasPorRol(rol));
    effect(() => {
      if (!this.open()) {
        return;
      }
      const usuario = this.usuario();
      if (usuario) {
        const ciudadId = usuario.sucursal?.ciudad.id ?? null;
        this.form.reset({
          nombre: usuario.nombre,
          correo: usuario.correo,
          password: "",
          rol: usuario.rol,
          ciudad_id: ciudadId,
          sucursal_id: usuario.sucursal?.id ?? null,
          proveedor_id: usuario.proveedor?.id ?? null,
          is_active: usuario.is_active
        }, { emitEvent: false });
        this.form.controls.password.clearValidators();
        this.cargarSucursales(ciudadId);
      } else {
        this.form.reset({
          nombre: "",
          correo: "",
          password: "",
          rol: "",
          ciudad_id: null,
          sucursal_id: null,
          proveedor_id: null,
          is_active: true
        }, { emitEvent: false });
        this.form.controls.password.setValidators([Validators.required, Validators.minLength(8)]);
        this.sucursales.set([]);
      }
      this.form.controls.password.updateValueAndValidity();
      this.aplicarReglasPorRol(this.form.controls.rol.value);
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  aplicarReglasPorRol(rol) {
    const { ciudad_id, sucursal_id, proveedor_id } = this.form.controls;
    if (ROLES_CON_SUCURSAL.has(rol)) {
      ciudad_id.setValidators([Validators.required]);
      sucursal_id.setValidators([Validators.required]);
      proveedor_id.clearValidators();
      proveedor_id.setValue(null);
    } else if (ROLES_CON_PROVEEDOR.has(rol)) {
      proveedor_id.setValidators([Validators.required]);
      ciudad_id.clearValidators();
      sucursal_id.clearValidators();
      ciudad_id.setValue(null);
      sucursal_id.setValue(null);
    } else {
      ciudad_id.clearValidators();
      sucursal_id.clearValidators();
      proveedor_id.clearValidators();
    }
    ciudad_id.updateValueAndValidity({ emitEvent: false });
    sucursal_id.updateValueAndValidity({ emitEvent: false });
    proveedor_id.updateValueAndValidity({ emitEvent: false });
  }
  get mostrarSucursal() {
    return ROLES_CON_SUCURSAL.has(this.form.controls.rol.value);
  }
  get mostrarProveedor() {
    return ROLES_CON_PROVEEDOR.has(this.form.controls.rol.value);
  }
  cargarSucursales(ciudadId) {
    if (ciudadId == null) {
      this.sucursales.set([]);
      return;
    }
    this.usuarioService.sucursalesPorCiudad(ciudadId).subscribe({ next: (sucursales) => this.sucursales.set(sucursales) });
  }
  get isEditMode() {
    return this.usuario() !== null;
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
      correo: value.correo.trim().toLowerCase(),
      password: value.password ? value.password : void 0,
      rol: value.rol,
      sucursal_id: value.sucursal_id,
      proveedor_id: value.proveedor_id,
      is_active: value.is_active
    });
  }
  static \u0275fac = function UsuarioForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuarioForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuarioForm, selectors: [["app-usuario-form"]], inputs: { open: [1, "open"], usuario: [1, "usuario"], roles: [1, "roles"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Juan P\xE9rez"], [1, "field__error"], ["type", "email", "formControlName", "correo", "placeholder", "juan@fashionstore.com"], [1, "field", 3, "has-error"], ["formControlName", "rol"], ["value", "", "disabled", ""], [3, "value"], [1, "field-row"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["type", "password", "formControlName", "password", "placeholder", "M\xEDnimo 8 caracteres"], ["formControlName", "ciudad_id"], ["disabled", "", 3, "value"], ["formControlName", "sucursal_id"], ["formControlName", "proveedor_id"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function UsuarioForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UsuarioForm_Conditional_0_Template, 43, 16, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n/*# sourceMappingURL=usuario-form-UTWFYIEY.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuarioForm, [{
    type: Component,
    args: [{ selector: "app-usuario-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de usuario' : isEditMode ? 'Editar usuario' : 'Nuevo usuario' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Juan P\xE9rez" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
\r
        <label class="field" [class.has-error]="form.controls.correo.invalid && form.controls.correo.touched">\r
          <span class="field__label">Correo electr\xF3nico *</span>\r
          <input type="email" formControlName="correo" placeholder="juan@fashionstore.com" />\r
          @if (form.controls.correo.hasError('required') && form.controls.correo.touched) {\r
            <span class="field__error">El correo es obligatorio.</span>\r
          } @else if (form.controls.correo.hasError('email') && form.controls.correo.touched) {\r
            <span class="field__error">Ingresa un correo v\xE1lido.</span>\r
          }\r
        </label>\r
\r
        @if (!isEditMode) {\r
          <label class="field" [class.has-error]="form.controls.password.invalid && form.controls.password.touched">\r
            <span class="field__label">Contrase\xF1a inicial *</span>\r
            <input type="password" formControlName="password" placeholder="M\xEDnimo 8 caracteres" />\r
            @if (form.controls.password.invalid && form.controls.password.touched) {\r
              <span class="field__error">La contrase\xF1a debe tener al menos 8 caracteres.</span>\r
            }\r
          </label>\r
        }\r
\r
        <label class="field" [class.has-error]="form.controls.rol.invalid && form.controls.rol.touched">\r
          <span class="field__label">Rol *</span>\r
          <select formControlName="rol">\r
            <option value="" disabled>Selecciona un rol</option>\r
            @for (rol of roles(); track rol.valor) {\r
              <option [value]="rol.valor">{{ rol.etiqueta }}</option>\r
            }\r
          </select>\r
          @if (form.controls.rol.invalid && form.controls.rol.touched) {\r
            <span class="field__error">Selecciona un rol.</span>\r
          }\r
        </label>\r
\r
        @if (mostrarSucursal) {\r
          <div class="field-row">\r
            <label\r
              class="field"\r
              [class.has-error]="form.controls.ciudad_id.invalid && form.controls.ciudad_id.touched"\r
            >\r
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
            <label\r
              class="field"\r
              [class.has-error]="form.controls.sucursal_id.invalid && form.controls.sucursal_id.touched"\r
            >\r
              <span class="field__label">Sucursal *</span>\r
              <select formControlName="sucursal_id">\r
                <option [value]="null" disabled>\r
                  {{ form.controls.ciudad_id.value ? 'Selecciona una sucursal' : 'Elige una ciudad primero' }}\r
                </option>\r
                @for (sucursal of sucursales(); track sucursal.id) {\r
                  <option [value]="sucursal.id">{{ sucursal.nombre }}</option>\r
                }\r
              </select>\r
              @if (form.controls.sucursal_id.invalid && form.controls.sucursal_id.touched) {\r
                <span class="field__error">Selecciona una sucursal.</span>\r
              }\r
            </label>\r
          </div>\r
        }\r
\r
        @if (mostrarProveedor) {\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.proveedor_id.invalid && form.controls.proveedor_id.touched"\r
          >\r
            <span class="field__label">Proveedor *</span>\r
            <select formControlName="proveedor_id">\r
              <option [value]="null" disabled>Selecciona un proveedor</option>\r
              @for (proveedor of proveedores(); track proveedor.id) {\r
                <option [value]="proveedor.id">{{ proveedor.razon_social }}</option>\r
              }\r
            </select>\r
            @if (form.controls.proveedor_id.invalid && form.controls.proveedor_id.touched) {\r
              <span class="field__error">Selecciona el proveedor al que pertenece esta cuenta.</span>\r
            }\r
          </label>\r
        }\r
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
              {{ submitting() ? 'Guardando\u2026' : 'Guardar usuario' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/usuarios-y-accesos/cu05-gestionar-usuarios-roles/usuario-form/usuario-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=usuario-form-UTWFYIEY.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], usuario: [{ type: Input, args: [{ isSignal: true, alias: "usuario", required: false }] }], roles: [{ type: Input, args: [{ isSignal: true, alias: "roles", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuarioForm, { className: "UsuarioForm", filePath: "src/app/usuarios-y-accesos/cu05-gestionar-usuarios-roles/usuario-form/usuario-form.ts", lineNumber: 33 });
})();

// src/app/usuarios-y-accesos/cu05-gestionar-usuarios-roles/usuarios-roles.ts
var _forTrack02 = ($index, $item) => $item.valor;
var _forTrack12 = ($index, $item) => $item.id;
function UsuariosRoles_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rol_r1 = ctx.$implicit;
    \u0275\u0275property("value", rol_r1.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rol_r1.etiqueta);
  }
}
function UsuariosRoles_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 19)(2, "div", 19)(3, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function UsuariosRoles_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 20);
    \u0275\u0275text(2, "No se pudieron cargar los usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function UsuariosRoles_Conditional_27_Template_button_click_5_listener() {
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
function UsuariosRoles_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 20);
    \u0275\u0275text(2, "No se encontraron usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea el primer usuario interno para empezar a asignar roles.");
    \u0275\u0275elementEnd()();
  }
}
function UsuariosRoles_Conditional_29_For_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const usuario_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", usuario_r5.sucursal.nombre, " \xB7 ", usuario_r5.sucursal.ciudad.nombre, " ");
  }
}
function UsuariosRoles_Conditional_29_For_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const usuario_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", usuario_r5.proveedor.razon_social, " ");
  }
}
function UsuariosRoles_Conditional_29_For_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function UsuariosRoles_Conditional_29_For_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function UsuariosRoles_Conditional_29_For_17_Conditional_17_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 31);
    \u0275\u0275listener("click", function UsuariosRoles_Conditional_29_For_17_Conditional_17_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const usuario_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openView(usuario_r5, $event));
    });
    \u0275\u0275element(2, "app-icon", 32);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function UsuariosRoles_Conditional_29_For_17_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const usuario_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(usuario_r5));
    });
    \u0275\u0275element(5, "app-icon", 33);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function UsuariosRoles_Conditional_29_For_17_Conditional_17_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const usuario_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleStatus(usuario_r5, $event));
    });
    \u0275\u0275element(8, "app-icon", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 35);
    \u0275\u0275listener("click", function UsuariosRoles_Conditional_29_For_17_Conditional_17_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const usuario_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteUser(usuario_r5, $event));
    });
    \u0275\u0275element(11, "app-icon", 36);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const usuario_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", usuario_r5.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", usuario_r5.is_active ? "Desactivar" : "Activar", " ");
  }
}
function UsuariosRoles_Conditional_29_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 24);
    \u0275\u0275conditionalCreate(8, UsuariosRoles_Conditional_29_For_17_Conditional_8_Template, 1, 2)(9, UsuariosRoles_Conditional_29_For_17_Conditional_9_Template, 1, 1)(10, UsuariosRoles_Conditional_29_For_17_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "app-status-badge", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 26)(15, "button", 27);
    \u0275\u0275listener("click", function UsuariosRoles_Conditional_29_For_17_Template_button_click_15_listener($event) {
      const usuario_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu(usuario_r5.id, $event));
    });
    \u0275\u0275element(16, "app-icon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, UsuariosRoles_Conditional_29_For_17_Conditional_17_Template, 13, 3, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const usuario_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(usuario_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(usuario_r5.correo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.etiquetaRol(usuario_r5.rol));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(usuario_r5.sucursal ? 8 : usuario_r5.proveedor ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275property("active", usuario_r5.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.openMenuId() === usuario_r5.id ? 17 : -1);
  }
}
function UsuariosRoles_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Sucursal / Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, UsuariosRoles_Conditional_29_For_17_Template, 18, 6, "tr", null, _forTrack12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.usuarios());
  }
}
var ETIQUETA_CLIENTE = "Cliente";
var UsuariosRoles = class _UsuariosRoles {
  usuarioService = inject(UsuarioAdminService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  usuarios = signal(
    [],
    ...ngDevMode ? [{ debugName: "usuarios" }] : (
      /* istanbul ignore next */
      []
    )
  );
  roles = signal(
    [],
    ...ngDevMode ? [{ debugName: "roles" }] : (
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
  rolFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "rolFilter" }] : (
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
  editingUsuario = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingUsuario" }] : (
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
    this.usuarioService.roles().subscribe({ next: (roles) => this.roles.set(roles) });
    this.load();
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  etiquetaRol(rol) {
    if (rol === "CLIENTE") {
      return ETIQUETA_CLIENTE;
    }
    return this.roles().find((r) => r.valor === rol)?.etiqueta ?? rol;
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  onRolFilterChange(value) {
    this.rolFilter.set(value);
    this.load();
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.usuarioService.list({
      search: this.searchTerm() || void 0,
      rol: this.rolFilter() || void 0,
      estado: this.statusFilter()
    }).subscribe({
      next: (usuarios) => {
        this.usuarios.set(usuarios);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.usuarios.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingUsuario.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(usuario) {
    this.openMenuId.set(null);
    this.editingUsuario.set(usuario);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(usuario, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingUsuario.set(usuario);
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
    const editing = this.editingUsuario();
    this.submitting.set(true);
    if (editing) {
      const requests = [
        this.usuarioService.update(editing.id, {
          nombre: payload.nombre,
          correo: payload.correo,
          sucursal_id: payload.sucursal_id,
          proveedor_id: payload.proveedor_id
        })
      ];
      if (payload.rol !== editing.rol) {
        requests.push(this.usuarioService.changeRole(editing.id, payload.rol));
      }
      if (payload.is_active !== editing.is_active) {
        requests.push(this.usuarioService.setActive(editing.id, payload.is_active));
      }
      forkJoin(requests).subscribe({
        next: () => this.onSaveSuccess("Usuario actualizado correctamente."),
        error: (err) => this.onSaveError(err)
      });
      return;
    }
    this.usuarioService.create(__spreadProps(__spreadValues({}, payload), { password: payload.password ?? "" })).subscribe({
      next: () => this.onSaveSuccess("Usuario creado correctamente."),
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
      this.toast.error("Ya existe un usuario con ese correo.");
    } else if (err.status === 422) {
      this.toast.error("Revisa la sucursal o el proveedor seleccionado para este rol.");
    } else {
      this.toast.error("No se pudo guardar el usuario. Intenta nuevamente.");
    }
  }
  async toggleStatus(usuario, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (usuario.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar usuario?",
        message: `${usuario.nombre} dejar\xE1 de poder iniciar sesi\xF3n en FashionStore.`,
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.usuarioService.setActive(usuario.id, !usuario.is_active).subscribe({
      next: () => {
        this.toast.success(usuario.is_active ? "Usuario desactivado." : "Usuario activado correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 400) {
          this.toast.error("No puedes desactivar tu propia cuenta.");
        } else {
          this.toast.error("No se pudo actualizar el estado del usuario.");
        }
      }
    });
  }
  async deleteUser(usuario, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar usuario?",
      message: `Se eliminar\xE1 permanentemente a ${usuario.nombre} del sistema. Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.usuarioService.delete(usuario.id).subscribe({
      next: () => {
        this.toast.success("Usuario eliminado correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 400) {
          this.toast.error("No puedes eliminar tu propia cuenta.");
        } else if (err.status === 404) {
          this.toast.error("El usuario no existe o ya fue eliminado.");
        } else {
          this.toast.error("No se pudo eliminar el usuario.");
        }
      }
    });
  }
  static \u0275fac = function UsuariosRoles_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuariosRoles)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosRoles, selectors: [["app-usuarios-roles"]], hostBindings: function UsuariosRoles_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function UsuariosRoles_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 31, vars: 9, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar por nombre o correo...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "usuario", "roles", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "cell-secondary"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function UsuariosRoles_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Usuarios y roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Administra las cuentas internas de FashionStore y sus roles de acceso.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function UsuariosRoles_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nuevo usuario ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("ngModelChange", function UsuariosRoles_Template_input_ngModelChange_13_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function UsuariosRoles_Template_select_ngModelChange_14_listener($event) {
        return ctx.onRolFilterChange($event);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Todos los roles");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(17, UsuariosRoles_For_18_Template, 2, 2, "option", 10, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(19, "select", 8);
      \u0275\u0275listener("ngModelChange", function UsuariosRoles_Template_select_ngModelChange_19_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Activos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 13);
      \u0275\u0275text(25, "Inactivos");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, UsuariosRoles_Conditional_26_Template, 4, 0, "div", 14)(27, UsuariosRoles_Conditional_27_Template, 7, 1, "div", 15)(28, UsuariosRoles_Conditional_28_Template, 5, 0, "div", 16)(29, UsuariosRoles_Conditional_29_Template, 18, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "app-usuario-form", 18);
      \u0275\u0275listener("save", function UsuariosRoles_Template_app_usuario_form_save_30_listener($event) {
        return ctx.save($event);
      })("close", function UsuariosRoles_Template_app_usuario_form_close_30_listener() {
        return ctx.closeDrawer();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.rolFilter());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.roles());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.statusFilter());
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 26 : ctx.errorMessage() ? 27 : ctx.usuarios().length === 0 ? 28 : 29);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("usuario", ctx.editingUsuario())("roles", ctx.roles())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, UsuarioForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=usuarios-roles-NWNDUYYX.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosRoles, [{
    type: Component,
    args: [{ selector: "app-usuarios-roles", imports: [FormsModule, Icon, StatusBadge, UsuarioForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Usuarios y roles</h3>\r
      <p>Administra las cuentas internas de FashionStore y sus roles de acceso.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nuevo usuario\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar por nombre o correo..."\r
        [ngModel]="searchTerm()"\r
        (ngModelChange)="onSearchChange($event)"\r
      />\r
    </label>\r
\r
    <select class="status-select" [ngModel]="rolFilter()" (ngModelChange)="onRolFilterChange($event)">\r
      <option value="">Todos los roles</option>\r
      @for (rol of roles(); track rol.valor) {\r
        <option [value]="rol.valor">{{ rol.etiqueta }}</option>\r
      }\r
    </select>\r
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
      <span class="state-block__title">No se pudieron cargar los usuarios</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (usuarios().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">No se encontraron usuarios</span>\r
      <span>Crea el primer usuario interno para empezar a asignar roles.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Usuario</th>\r
            <th>Correo</th>\r
            <th>Rol</th>\r
            <th>Sucursal / Proveedor</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (usuario of usuarios(); track usuario.id) {\r
            <tr>\r
              <td class="cell-title">{{ usuario.nombre }}</td>\r
              <td class="cell-secondary">{{ usuario.correo }}</td>\r
              <td>{{ etiquetaRol(usuario.rol) }}</td>\r
              <td class="cell-secondary">\r
                @if (usuario.sucursal) {\r
                  {{ usuario.sucursal.nombre }} \xB7 {{ usuario.sucursal.ciudad.nombre }}\r
                } @else if (usuario.proveedor) {\r
                  {{ usuario.proveedor.razon_social }}\r
                } @else {\r
                  \u2014\r
                }\r
              </td>\r
              <td><app-status-badge [active]="usuario.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(usuario.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === usuario.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(usuario, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(usuario)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="usuario.is_active"\r
                        (click)="toggleStatus(usuario, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ usuario.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteUser(usuario, $event)"\r
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
<app-usuario-form\r
  [open]="drawerOpen()"\r
  [usuario]="editingUsuario()"\r
  [roles]="roles()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ["/* src/app/usuarios-y-accesos/cu05-gestionar-usuarios-roles/usuarios-roles.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=usuarios-roles-NWNDUYYX.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosRoles, { className: "UsuariosRoles", filePath: "src/app/usuarios-y-accesos/cu05-gestionar-usuarios-roles/usuarios-roles.ts", lineNumber: 25 });
})();
export {
  UsuariosRoles
};
//# debugId=1dc2b1b3-d94f-58ec-9764-770dcd3ffc58
//# sourceMappingURL=chunk-5GHLXBKF.js.map
