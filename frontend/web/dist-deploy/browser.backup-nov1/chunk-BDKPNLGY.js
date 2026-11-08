import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-OB3O2VC6.js";
import {
  SuperadminService
} from "./chunk-UN6AH4K6.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  CommonModule
} from "./chunk-BQM6CYO4.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PNHCNXB7.js";

// src/app/features/superadmin/planes/planes.ts
var _forTrack0 = ($index, $item) => $item.id;
function SuperadminPlanes_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(null));
    });
    \u0275\u0275text(3, "Cerrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function SuperadminPlanes_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Cargando planes...");
    \u0275\u0275elementEnd();
  }
}
function SuperadminPlanes_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-icon", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay planes creados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirModalCrear());
    });
    \u0275\u0275element(5, "app-icon", 4);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Crear primer plan");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminPlanes_Conditional_11_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 15)(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 19)(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 21)(15, "span", 22);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 23)(18, "button", 24);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_11_For_16_Template_button_click_18_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirModalEditar(plan_r5));
    });
    \u0275\u0275element(19, "app-icon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 26);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_11_For_16_Template_button_click_20_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleEstado(plan_r5));
    });
    \u0275\u0275element(21, "app-icon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 28);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_11_For_16_Template_button_click_22_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminarPlan(plan_r5));
    });
    \u0275\u0275element(23, "app-icon", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(plan_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r5.descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", plan_r5.precio.toFixed(2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", plan_r5.limite_sucursales, " sucursal(es)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r5.limite_usuarios, " usuario(s)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isActivo(plan_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isActivo(plan_r5) ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.isActivo(plan_r5) ? "Desactivar" : "Activar");
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.isActivo(plan_r5) ? "power" : "settings");
  }
}
function SuperadminPlanes_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "L\xEDmites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 14);
    \u0275\u0275text(13, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, SuperadminPlanes_Conditional_11_For_16_Template, 24, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.planes());
  }
}
function SuperadminPlanes_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_12_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275element(6, "app-icon", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "form", 36, 0);
    \u0275\u0275listener("ngSubmit", function SuperadminPlanes_Conditional_12_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarPlan());
    });
    \u0275\u0275elementStart(10, "div", 37)(11, "label", 38);
    \u0275\u0275text(12, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().nombre, $event) || (ctx_r1.formData().nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 37)(15, "label", 40);
    \u0275\u0275text(16, "Descripci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().descripcion, $event) || (ctx_r1.formData().descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 42)(19, "div", 37)(20, "label", 43);
    \u0275\u0275text(21, "Precio ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().precio, $event) || (ctx_r1.formData().precio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 42)(24, "div", 37)(25, "label", 45);
    \u0275\u0275text(26, "L\xEDmite de sucursales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().limite_sucursales, $event) || (ctx_r1.formData().limite_sucursales = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 37)(29, "label", 47);
    \u0275\u0275text(30, "L\xEDmite de usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().limite_usuarios, $event) || (ctx_r1.formData().limite_usuarios = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 49)(33, "h3");
    \u0275\u0275text(34, "Funcionalidades");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 50)(36, "div", 51)(37, "label")(38, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().gestion_productos, $event) || (ctx_r1.formData().gestion_productos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Gesti\xF3n de productos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 51)(42, "label")(43, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().gestion_ventas, $event) || (ctx_r1.formData().gestion_ventas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Gesti\xF3n de ventas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 51)(47, "label")(48, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().reservas, $event) || (ctx_r1.formData().reservas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Reservas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 51)(52, "label")(53, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().operacion_offline, $event) || (ctx_r1.formData().operacion_offline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Operaci\xF3n offline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 51)(57, "label")(58, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().reportes_convencionales, $event) || (ctx_r1.formData().reportes_convencionales = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Reportes convencionales");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 51)(62, "label")(63, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminPlanes_Conditional_12_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData().reportes_generativos_ia, $event) || (ctx_r1.formData().reportes_generativos_ia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65, "Reportes generativos IA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 58)(67, "button", 59);
    \u0275\u0275listener("click", function SuperadminPlanes_Conditional_12_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModal());
    });
    \u0275\u0275text(68, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 60);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const form_r7 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingPlan() ? "Editar Plan" : "Crear Plan");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().nombre);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().descripcion);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().precio);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().limite_sucursales);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().limite_usuarios);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().gestion_productos);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().gestion_ventas);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().reservas);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().operacion_offline);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().reportes_convencionales);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData().reportes_generativos_ia);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.submitLoading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitLoading() || !form_r7.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitLoading() ? "Guardando..." : ctx_r1.editingPlan() ? "Actualizar" : "Crear", " ");
  }
}
var SuperadminPlanes = class _SuperadminPlanes {
  superadminService = inject(SuperadminService);
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
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
  planes = signal(
    [],
    ...ngDevMode ? [{ debugName: "planes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showModal = signal(
    false,
    ...ngDevMode ? [{ debugName: "showModal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingPlan = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingPlan" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formData = signal(
    {},
    ...ngDevMode ? [{ debugName: "formData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.cargarPlanes();
  }
  cargarPlanes() {
    this.loading.set(true);
    this.error.set(null);
    this.superadminService.getPlanes().subscribe({
      next: (data) => {
        const planesNormalizados = data.map((p) => __spreadProps(__spreadValues({}, p), {
          is_active: p.es_activo !== void 0 ? p.es_activo : p.is_active,
          precio: typeof p.precio === "string" ? parseFloat(p.precio) : p.precio
        }));
        this.planes.set(planesNormalizados);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("No se pudieron cargar los planes.");
        this.loading.set(false);
      }
    });
  }
  abrirModalCrear() {
    this.editingPlan.set(null);
    this.formData.set({});
    this.showModal.set(true);
  }
  abrirModalEditar(plan) {
    this.editingPlan.set(plan);
    this.formData.set(__spreadValues({}, plan));
    this.showModal.set(true);
  }
  cerrarModal() {
    this.showModal.set(false);
    this.editingPlan.set(null);
    this.formData.set({});
  }
  guardarPlan() {
    const data = this.formData();
    const plan = this.editingPlan();
    if (!data.nombre || !data.descripcion) {
      this.error.set("Los campos nombre y descripci\xF3n son requeridos.");
      return;
    }
    this.submitLoading.set(true);
    if (plan) {
      const actualizar = {
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        limite_sucursales: data.limite_sucursales,
        limite_usuarios: data.limite_usuarios
      };
      this.superadminService.updatePlan(plan.id, actualizar).subscribe({
        next: () => {
          this.cargarPlanes();
          this.cerrarModal();
          this.submitLoading.set(false);
        },
        error: (err) => {
          this.error.set("Error al actualizar el plan.");
          this.submitLoading.set(false);
        }
      });
    } else {
      const nombre = data.nombre;
      const slug = nombre.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      const crear = {
        nombre,
        slug,
        descripcion: data.descripcion,
        precio: data.precio || 0,
        limite_sucursales: data.limite_sucursales || 1,
        limite_usuarios: data.limite_usuarios || 5,
        gestion_productos: data.gestion_productos !== false,
        gestion_ventas: data.gestion_ventas !== false,
        reservas: data.reservas !== false,
        operacion_offline: data.operacion_offline !== false,
        reportes_convencionales: data.reportes_convencionales !== false,
        reportes_generativos_ia: data.reportes_generativos_ia === true
      };
      this.superadminService.createPlan(crear).subscribe({
        next: () => {
          this.cargarPlanes();
          this.cerrarModal();
          this.submitLoading.set(false);
        },
        error: (err) => {
          this.error.set("Error al crear el plan.");
          this.submitLoading.set(false);
        }
      });
    }
  }
  toggleEstado(plan) {
    this.superadminService.cambiarEstadoPlan(plan.id, { is_active: !plan.is_active }).subscribe({
      next: () => {
        this.cargarPlanes();
      },
      error: () => {
        this.error.set("Error al cambiar el estado del plan.");
      }
    });
  }
  eliminarPlan(plan) {
    if (!confirm(`\xBFEst\xE1 seguro de que desea eliminar el plan "${plan.nombre}"?`)) {
      return;
    }
    this.superadminService.deletePlan(plan.id).subscribe({
      next: () => {
        this.cargarPlanes();
      },
      error: () => {
        this.error.set("Error al eliminar el plan.");
      }
    });
  }
  reintentar() {
    this.cargarPlanes();
  }
  isActivo(plan) {
    return plan.is_active === true;
  }
  static \u0275fac = function SuperadminPlanes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminPlanes)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminPlanes, selectors: [["app-superadmin-planes"]], decls: 13, vars: 4, consts: [["form", "ngForm"], [1, "planes-container"], [1, "planes-header"], [1, "btn-primary", 3, "click", "disabled"], ["name", "plus", 2, "width", "16px", "height", "16px"], [1, "error-banner"], [1, "loading"], [1, "empty-state"], [1, "table-wrapper"], [1, "modal-overlay"], [1, "btn-secondary", 3, "click"], ["name", "products", 2, "width", "48px", "height", "48px"], [1, "btn-primary", 3, "click"], [1, "planes-table"], [1, "actions-header"], [1, "plan-cell"], [1, "plan-name"], [1, "plan-description"], [1, "plan-price"], [1, "plan-limits"], [1, "limit-badge"], [1, "plan-status"], [1, "status-badge"], [1, "actions"], ["title", "Editar", 1, "action-btn", 3, "click"], ["name", "edit", 2, "width", "14px", "height", "14px"], [1, "action-btn", 3, "click", "title"], [2, "width", "14px", "height", "14px", 3, "name"], ["title", "Eliminar", 1, "action-btn", "danger", 3, "click"], ["name", "close", 2, "width", "14px", "height", "14px"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["name", "close", 2, "width", "20px", "height", "20px"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-group"], ["for", "nombre"], ["type", "text", "id", "nombre", "name", "nombre", "placeholder", "Ej: Plan Profesional", "required", "", 3, "ngModelChange", "ngModel"], ["for", "descripcion"], ["id", "descripcion", "name", "descripcion", "placeholder", "Descripci\xF3n del plan", "rows", "3", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "precio"], ["type", "number", "id", "precio", "name", "precio", "step", "0.01", "min", "0", 3, "ngModelChange", "ngModel"], ["for", "sucursales"], ["type", "number", "id", "sucursales", "name", "limite_sucursales", "min", "1", 3, "ngModelChange", "ngModel"], ["for", "usuarios"], ["type", "number", "id", "usuarios", "name", "limite_usuarios", "min", "1", 3, "ngModelChange", "ngModel"], [1, "form-divider"], [1, "funcionalidades-grid"], [1, "form-group", "checkbox"], ["type", "checkbox", "name", "gestion_productos", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "gestion_ventas", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "reservas", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "operacion_offline", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "reportes_convencionales", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "reportes_generativos_ia", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn-primary", 3, "disabled"]], template: function SuperadminPlanes_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1");
      \u0275\u0275text(3, "Gesti\xF3n de Planes SaaS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function SuperadminPlanes_Template_button_click_4_listener() {
        return ctx.abrirModalCrear();
      });
      \u0275\u0275element(5, "app-icon", 4);
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Crear Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, SuperadminPlanes_Conditional_8_Template, 4, 1, "div", 5);
      \u0275\u0275conditionalCreate(9, SuperadminPlanes_Conditional_9_Template, 2, 0, "div", 6)(10, SuperadminPlanes_Conditional_10_Template, 8, 0, "div", 7)(11, SuperadminPlanes_Conditional_11_Template, 17, 0, "div", 8);
      \u0275\u0275conditionalCreate(12, SuperadminPlanes_Conditional_12_Template, 71, 15, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.error() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 9 : ctx.planes().length === 0 ? 10 : 11);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 12 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, Icon], styles: ["\n.planes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.planes-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.planes-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: var(--%NS%radius-md);\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-primary);\n  border: 1px solid var(--%NS%color-border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n}\n.error-banner[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: var(--%NS%radius-md);\n  background: #fee;\n  color: #c00;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 13px;\n}\n.error-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #c00;\n  background: transparent;\n  color: #c00;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: background 200ms;\n}\n.error-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #fdf;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n  text-align: center;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: var(--%NS%color-text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n}\n.planes-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.planes-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--%NS%color-bg);\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.planes-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.planes-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--%NS%color-border);\n  color: var(--%NS%color-text);\n}\n.planes-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.planes-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.plan-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.plan-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.plan-description[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-secondary);\n  font-size: 12px;\n  line-height: 1.4;\n}\n.plan-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--%NS%color-primary);\n  font-size: 14px;\n}\n.plan-limits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.plan-status[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.limit-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 3px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  color: var(--%NS%color-primary);\n  width: fit-content;\n  font-size: 10px;\n}\n.plan-trial[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.trial-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.trial-badge.disabled[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #999;\n}\n.plan-suscripciones[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.suscripcion-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.suscripcion-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--%NS%color-primary);\n}\n.btn-info-small[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-primary);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  transition: all 200ms;\n}\n.btn-info-small[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  border-color: var(--%NS%color-primary);\n}\n.empresas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.empresas-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--%NS%color-bg);\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.empresas-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.empresas-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--%NS%color-border);\n  color: var(--%NS%color-text);\n}\n.empresas-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.empresas-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f5f5f5;\n  color: #666;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  border: 1px solid var(--%NS%color-border);\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 200ms;\n}\n.status-toggle.active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border-color: #2e7d32;\n}\n.status-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.actions-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 120px;\n}\n.actions[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 120px;\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  align-items: center;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n  border-radius: var(--%NS%radius-sm);\n  cursor: pointer;\n  transition: all 200ms;\n  padding: 0;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  color: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n}\n.action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: #fee;\n  color: #d32f2f;\n  border-color: #d32f2f;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--%NS%color-white);\n  border-radius: var(--%NS%radius-md);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  width: 90%;\n  max-height: 90vh;\n  overflow: auto;\n}\n.modal.modal-large[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  cursor: pointer;\n  border-radius: var(--%NS%radius-sm);\n  transition: all 200ms;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-divider[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--%NS%color-border);\n}\n.form-divider[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  margin: 0;\n}\n.funcionalidades-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n@media (max-width: 600px) {\n  .funcionalidades-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.funcionalidades-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  font-size: 13px;\n  font-family: inherit;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text);\n  transition: all 200ms;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--%NS%color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group.checkbox[_ngcontent-%COMP%] {\n  flex-direction: row;\n  gap: 0;\n}\n.form-group.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 400;\n  margin: 0;\n  cursor: pointer;\n}\n.form-group.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: auto;\n  cursor: pointer;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--%NS%color-border);\n}\n@media (max-width: 768px) {\n  .planes-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=planes-UVLA5FZN.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminPlanes, [{
    type: Component,
    args: [{ selector: "app-superadmin-planes", imports: [CommonModule, FormsModule, Icon], standalone: true, template: `<div class="planes-container">
  <div class="planes-header">
    <h1>Gesti\xF3n de Planes SaaS</h1>
    <button class="btn-primary" (click)="abrirModalCrear()" [disabled]="loading()">
      <app-icon name="plus" style="width: 16px; height: 16px" />
      <span>Crear Plan</span>
    </button>
  </div>

  @if (error()) {
    <div class="error-banner">
      {{ error() }}
      <button class="btn-secondary" (click)="error.set(null)">Cerrar</button>
    </div>
  }

  @if (loading()) {
    <div class="loading">Cargando planes...</div>
  } @else if (planes().length === 0) {
    <div class="empty-state">
      <app-icon name="products" style="width: 48px; height: 48px" />
      <p>No hay planes creados</p>
      <button class="btn-primary" (click)="abrirModalCrear()">
        <app-icon name="plus" style="width: 16px; height: 16px" />
        <span>Crear primer plan</span>
      </button>
    </div>
  } @else {
    <div class="table-wrapper">
      <table class="planes-table">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Precio</th>
            <th>L\xEDmites</th>
            <th>Estado</th>
            <th class="actions-header">Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (plan of planes(); track plan.id) {
            <tr>
              <td>
                <div class="plan-cell">
                  <div class="plan-name">{{ plan.nombre }}</div>
                  <div class="plan-description">{{ plan.descripcion }}</div>
                </div>
              </td>
              <td class="plan-price">\${{ plan.precio.toFixed(2) }}</td>
              <td class="plan-limits">
                <span class="limit-badge">{{ plan.limite_sucursales }} sucursal(es)</span>
                <span class="limit-badge">{{ plan.limite_usuarios }} usuario(s)</span>
              </td>
              <td class="plan-status">
                <span class="status-badge" [class.active]="isActivo(plan)">
                  {{ isActivo(plan) ? 'Activo' : 'Inactivo' }}
                </span>
              </td>
              <td class="actions">
                <button
                  class="action-btn"
                  title="Editar"
                  (click)="abrirModalEditar(plan)"
                >
                  <app-icon name="edit" style="width: 14px; height: 14px" />
                </button>
                <button
                  class="action-btn"
                  [title]="isActivo(plan) ? 'Desactivar' : 'Activar'"
                  (click)="toggleEstado(plan)"
                >
                  <app-icon [name]="isActivo(plan) ? 'power' : 'settings'" style="width: 14px; height: 14px" />
                </button>
                <button
                  class="action-btn danger"
                  title="Eliminar"
                  (click)="eliminarPlan(plan)"
                >
                  <app-icon name="close" style="width: 14px; height: 14px" />
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- Modal -->
  @if (showModal()) {
    <div class="modal-overlay" (click)="cerrarModal()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>{{ editingPlan() ? 'Editar Plan' : 'Crear Plan' }}</h2>
          <button class="close-btn" (click)="cerrarModal()">
            <app-icon name="close" style="width: 20px; height: 20px" />
          </button>
        </div>

        <div class="modal-body">
          <form (ngSubmit)="guardarPlan()" #form="ngForm">
            <div class="form-group">
              <label for="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                [(ngModel)]="formData().nombre"
                name="nombre"
                placeholder="Ej: Plan Profesional"
                required
              />
            </div>

            <div class="form-group">
              <label for="descripcion">Descripci\xF3n *</label>
              <textarea
                id="descripcion"
                [(ngModel)]="formData().descripcion"
                name="descripcion"
                placeholder="Descripci\xF3n del plan"
                rows="3"
                required
              ></textarea>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="precio">Precio ($)</label>
                <input
                  type="number"
                  id="precio"
                  [(ngModel)]="formData().precio"
                  name="precio"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="sucursales">L\xEDmite de sucursales</label>
                <input
                  type="number"
                  id="sucursales"
                  [(ngModel)]="formData().limite_sucursales"
                  name="limite_sucursales"
                  min="1"
                />
              </div>

              <div class="form-group">
                <label for="usuarios">L\xEDmite de usuarios</label>
                <input
                  type="number"
                  id="usuarios"
                  [(ngModel)]="formData().limite_usuarios"
                  name="limite_usuarios"
                  min="1"
                />
              </div>
            </div>

            <div class="form-divider">
              <h3>Funcionalidades</h3>
            </div>

            <div class="funcionalidades-grid">
              <div class="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    [(ngModel)]="formData().gestion_productos"
                    name="gestion_productos"
                  />
                  <span>Gesti\xF3n de productos</span>
                </label>
              </div>

              <div class="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    [(ngModel)]="formData().gestion_ventas"
                    name="gestion_ventas"
                  />
                  <span>Gesti\xF3n de ventas</span>
                </label>
              </div>

              <div class="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    [(ngModel)]="formData().reservas"
                    name="reservas"
                  />
                  <span>Reservas</span>
                </label>
              </div>

              <div class="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    [(ngModel)]="formData().operacion_offline"
                    name="operacion_offline"
                  />
                  <span>Operaci\xF3n offline</span>
                </label>
              </div>

              <div class="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    [(ngModel)]="formData().reportes_convencionales"
                    name="reportes_convencionales"
                  />
                  <span>Reportes convencionales</span>
                </label>
              </div>

              <div class="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    [(ngModel)]="formData().reportes_generativos_ia"
                    name="reportes_generativos_ia"
                  />
                  <span>Reportes generativos IA</span>
                </label>
              </div>
            </div>

            <div class="modal-actions">
              <button type="button" class="btn-secondary" (click)="cerrarModal()" [disabled]="submitLoading()">
                Cancelar
              </button>
              <button type="submit" class="btn-primary" [disabled]="submitLoading() || !form.valid">
                {{ submitLoading() ? 'Guardando...' : editingPlan() ? 'Actualizar' : 'Crear' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/features/superadmin/planes/planes.scss */\n.planes-container {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.planes-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.planes-header h1 {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: var(--radius-md);\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--color-primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.btn-secondary {\n  background: var(--color-bg);\n  color: var(--color-primary);\n  border: 1px solid var(--color-border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n}\n.error-banner {\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  background: #fee;\n  color: #c00;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 13px;\n}\n.error-banner button {\n  padding: 4px 8px;\n  border: 1px solid #c00;\n  background: transparent;\n  color: #c00;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: background 200ms;\n}\n.error-banner button:hover {\n  background: #fdf;\n}\n.loading {\n  padding: 24px;\n  border-radius: var(--radius-md);\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n  text-align: center;\n  font-size: 14px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: var(--color-text-secondary);\n}\n.empty-state app-icon {\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 14px;\n  margin: 0;\n}\n.table-wrapper {\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.planes-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.planes-table thead {\n  background: var(--color-bg);\n  border-bottom: 1px solid var(--color-border);\n}\n.planes-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.planes-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-text);\n}\n.planes-table tbody tr:hover {\n  background: var(--color-bg);\n}\n.planes-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.plan-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.plan-name {\n  font-weight: 600;\n  font-size: 13px;\n}\n.plan-description {\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  line-height: 1.4;\n}\n.plan-price {\n  font-weight: 600;\n  color: var(--color-primary);\n  font-size: 14px;\n}\n.plan-limits {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.plan-status {\n  text-align: center;\n}\n.limit-badge {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 3px;\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  color: var(--color-primary);\n  width: fit-content;\n  font-size: 10px;\n}\n.plan-trial {\n  text-align: center;\n}\n.trial-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.trial-badge.disabled {\n  background: #f5f5f5;\n  color: #999;\n}\n.plan-suscripciones {\n  text-align: center;\n}\n.suscripcion-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.suscripcion-count {\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--color-primary);\n}\n.btn-info-small {\n  padding: 4px 8px;\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-primary);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  transition: all 200ms;\n}\n.btn-info-small:hover {\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  border-color: var(--color-primary);\n}\n.empresas-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.empresas-table thead {\n  background: var(--color-bg);\n  border-bottom: 1px solid var(--color-border);\n}\n.empresas-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.empresas-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-text);\n}\n.empresas-table tbody tr:hover {\n  background: var(--color-bg);\n}\n.empresas-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f5f5f5;\n  color: #666;\n}\n.status-badge.active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-secondary);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 200ms;\n}\n.status-toggle.active {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border-color: #2e7d32;\n}\n.status-toggle:hover {\n  background: var(--color-bg);\n}\n.actions-header {\n  text-align: center;\n  width: 120px;\n}\n.actions {\n  text-align: center;\n  width: 120px;\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  align-items: center;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 200ms;\n  padding: 0;\n}\n.action-btn:hover {\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.action-btn.danger:hover {\n  background: #fee;\n  color: #d32f2f;\n  border-color: #d32f2f;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--color-white);\n  border-radius: var(--radius-md);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  width: 90%;\n  max-height: 90vh;\n  overflow: auto;\n}\n.modal.modal-large {\n  max-width: 900px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--color-border);\n}\n.modal-header h2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.close-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  border-radius: var(--radius-sm);\n  transition: all 200ms;\n}\n.close-btn:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.modal-body {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-divider {\n  margin-top: 8px;\n  margin-bottom: 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--color-border);\n}\n.form-divider h3 {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n}\n.funcionalidades-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n@media (max-width: 600px) {\n  .funcionalidades-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.funcionalidades-grid .form-group {\n  margin: 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.form-group input,\n.form-group textarea,\n.form-group select {\n  padding: 8px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-family: inherit;\n  background: var(--color-bg);\n  color: var(--color-text);\n  transition: all 200ms;\n}\n.form-group input:focus,\n.form-group textarea:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 10%, white);\n}\n.form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group.checkbox {\n  flex-direction: row;\n  gap: 0;\n}\n.form-group.checkbox label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 400;\n  margin: 0;\n  cursor: pointer;\n}\n.form-group.checkbox label input {\n  margin: 0;\n  width: auto;\n  cursor: pointer;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.modal-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--color-border);\n}\n@media (max-width: 768px) {\n  .planes-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary {\n    justify-content: center;\n  }\n  .table-wrapper {\n    overflow-x: auto;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .modal {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=planes-UVLA5FZN.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminPlanes, { className: "SuperadminPlanes", filePath: "src/app/features/superadmin/planes/planes.ts", lineNumber: 14 });
})();
export {
  SuperadminPlanes
};
//# debugId=818c1b57-cf3b-5b1e-8ccd-dcd0660ba0fe
//# sourceMappingURL=chunk-BDKPNLGY.js.map
