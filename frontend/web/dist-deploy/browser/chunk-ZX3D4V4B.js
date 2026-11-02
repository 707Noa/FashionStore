import {
  FormsModule
} from "./chunk-OB3O2VC6.js";
import {
  SuperadminService
} from "./chunk-UN6AH4K6.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  KeyValuePipe
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNHCNXB7.js";

// src/app/features/superadmin/suscripciones/suscripciones.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function SuperadminSuscripciones_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 9);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(null));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function SuperadminSuscripciones_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275domElement(1, "div", 10);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Cargando empresas...");
    \u0275\u0275domElementEnd()();
  }
}
function SuperadminSuscripciones_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2, "No hay empresas registradas.");
    \u0275\u0275domElementEnd()();
  }
}
function SuperadminSuscripciones_Conditional_10_For_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const detalle_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap("badge-" + (detalle_r4.suscripcion.activa ? "active" : "inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", detalle_r4.suscripcion.activa ? "Activa" : "Inactiva", " ");
  }
}
function SuperadminSuscripciones_Conditional_10_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 14);
    \u0275\u0275text(1, "SIN SUSCRIPCI\xD3N");
    \u0275\u0275domElementEnd();
  }
}
function SuperadminSuscripciones_Conditional_10_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "tr")(2, "td", 12)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275conditionalCreate(8, SuperadminSuscripciones_Conditional_10_For_18_Conditional_8_Template, 2, 3, "span", 13)(9, SuperadminSuscripciones_Conditional_10_For_18_Conditional_9_Template, 2, 0, "span", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "td", 15)(17, "button", 16);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_10_For_18_Template_button_click_17_listener() {
      const empresa_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarEmpresa(empresa_r5));
    });
    \u0275\u0275text(18, " Gestionar ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const empresa_r5 = ctx.$implicit;
    const detalle_r6 = \u0275\u0275storeLet(\u0275\u0275nextContext(2).obtenerDetalles(empresa_r5.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(empresa_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", detalle_r6?.plan?.nombre || "Sin plan", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(detalle_r6?.suscripcion ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", detalle_r6?.suscripcion?.fecha_inicio ? \u0275\u0275pipeBind2(12, 6, detalle_r6.suscripcion.fecha_inicio, "short") : "--", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", detalle_r6?.suscripcion?.fecha_vencimiento ? \u0275\u0275pipeBind2(15, 9, detalle_r6.suscripcion.fecha_vencimiento, "short") : "--", " ");
  }
}
function SuperadminSuscripciones_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Empresa");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Plan Actual");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Estado Suscripci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Inicio");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th");
    \u0275\u0275text(13, "Vencimiento");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th");
    \u0275\u0275text(15, "Acci\xF3n");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SuperadminSuscripciones_Conditional_10_For_18_Template, 19, 12, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.empresas());
  }
}
function SuperadminSuscripciones_Conditional_11_Conditional_11_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("disabled", !item_r9.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.value ? "\u2713" : "\u2715");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatLabel(item_r9.key));
  }
}
function SuperadminSuscripciones_Conditional_11_Conditional_11_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "h3");
    \u0275\u0275text(2, "L\xEDmites del Plan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 37)(4, "div", 38)(5, "label");
    \u0275\u0275text(6, "Sucursales");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 39);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 38)(10, "label");
    \u0275\u0275text(11, "Usuarios");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 39);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.detalleEmpresa().plan.limite_sucursales);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detalleEmpresa().plan.limite_usuarios);
  }
}
function SuperadminSuscripciones_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 25)(1, "h3");
    \u0275\u0275text(2, "Informaci\xF3n de Suscripci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 26)(4, "div", 27)(5, "label");
    \u0275\u0275text(6, "Plan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 27)(10, "label");
    \u0275\u0275text(11, "Estado");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div", 27)(15, "label");
    \u0275\u0275text(16, "Fecha de Inicio");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 27)(21, "label");
    \u0275\u0275text(22, "Fecha de Vencimiento");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(26, "div", 25)(27, "h3");
    \u0275\u0275text(28, "Funcionalidades Habilitadas");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "div", 28);
    \u0275\u0275repeaterCreate(30, SuperadminSuscripciones_Conditional_11_Conditional_11_For_31_Template, 5, 4, "div", 29, _forTrack1);
    \u0275\u0275pipe(32, "keyvalue");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(33, SuperadminSuscripciones_Conditional_11_Conditional_11_Conditional_33_Template, 14, 2, "div", 25);
    \u0275\u0275domElementStart(34, "div", 30)(35, "button", 31);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_11_Conditional_11_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirModalCambiar());
    });
    \u0275\u0275text(36, " Cambiar Plan ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "button", 32);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_11_Conditional_11_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.renovarSuscripcion());
    });
    \u0275\u0275text(38, " Renovar Suscripci\xF3n ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "button", 33);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_11_Conditional_11_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarEstado(!ctx_r1.estaActiva()));
    });
    \u0275\u0275text(40);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.detalleEmpresa().plan?.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275classMap("badge-" + (ctx_r1.estaActiva() ? "active" : "inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estaActiva() ? "Activa" : "Inactiva", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 13, ctx_r1.detalleEmpresa().suscripcion.fecha_inicio, "short"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 16, ctx_r1.detalleEmpresa().suscripcion.fecha_vencimiento, "short"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(32, 19, ctx_r1.detalleEmpresa().funcionalidades_habilitadas));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.detalleEmpresa().plan ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.submitLoading());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.submitLoading());
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn-" + (ctx_r1.estaActiva() ? "danger" : "success"));
    \u0275\u0275domProperty("disabled", ctx_r1.submitLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estaActiva() ? "Desactivar Suscripci\xF3n" : "Activar Suscripci\xF3n", " ");
  }
}
function SuperadminSuscripciones_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 24)(1, "div", 40);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3");
    \u0275\u0275text(4, "Sin plan asignado");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6, "Esta empresa no tiene un plan de suscripci\xF3n asignado.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 41);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_11_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirModalAsignar());
    });
    \u0275\u0275text(8, " Asignar Plan ");
    \u0275\u0275domElementEnd()();
  }
}
function SuperadminSuscripciones_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedEmpresa.set(null));
    });
    \u0275\u0275domElementStart(1, "div", 19);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_11_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 20)(3, "div")(4, "h2");
    \u0275\u0275text(5, "Gestionar Suscripci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 21);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "button", 22);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedEmpresa.set(null));
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 23);
    \u0275\u0275conditionalCreate(11, SuperadminSuscripciones_Conditional_11_Conditional_11_Template, 41, 21)(12, SuperadminSuscripciones_Conditional_11_Conditional_12_Template, 9, 0, "div", 24);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedEmpresa().nombre, " \u2022 ", ctx_r1.selectedEmpresa().razon_social);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.detalleEmpresa().suscripcion ? 11 : 12);
  }
}
function SuperadminSuscripciones_Conditional_12_For_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 47);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_12_For_12_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const plan_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedPlanId.set(plan_r13.id));
    });
    \u0275\u0275domElementStart(1, "div", 48)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 50)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const plan_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedPlanId() === plan_r13.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r13.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 6, plan_r13.precio, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", plan_r13.limite_sucursales, " sucursal(es)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r13.limite_usuarios, " usuario(s)");
  }
}
function SuperadminSuscripciones_Conditional_12_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SuperadminSuscripciones_Conditional_12_For_12_Conditional_0_Template, 12, 9, "div", 46);
  }
  if (rf & 2) {
    const plan_r13 = ctx.$implicit;
    \u0275\u0275conditional(plan_r13.is_active ? 0 : -1);
  }
}
function SuperadminSuscripciones_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalAsignar());
    });
    \u0275\u0275domElementStart(1, "div", 42);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_12_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 20)(3, "h2");
    \u0275\u0275text(4, "Asignar Plan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 22);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalAsignar());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 23)(8, "p", 43);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 44);
    \u0275\u0275repeaterCreate(11, SuperadminSuscripciones_Conditional_12_For_12_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 45)(14, "button", 32);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalAsignar());
    });
    \u0275\u0275text(15, " Cancelar ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "button", 31);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_12_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.asignarPlan());
    });
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Selecciona el plan para ", ctx_r1.selectedEmpresa()?.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.planes());
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r1.submitLoading());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.submitLoading() || !ctx_r1.selectedPlanId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitLoading() ? "Asignando..." : "Asignar Plan", " ");
  }
}
function SuperadminSuscripciones_Conditional_13_For_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 47);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_13_For_17_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const plan_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedPlanId.set(plan_r16.id));
    });
    \u0275\u0275domElementStart(1, "div", 48)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 50)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const plan_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedPlanId() === plan_r16.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r16.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 6, plan_r16.precio, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", plan_r16.limite_sucursales, " sucursal(es)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r16.limite_usuarios, " usuario(s)");
  }
}
function SuperadminSuscripciones_Conditional_13_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SuperadminSuscripciones_Conditional_13_For_17_Conditional_0_Template, 12, 9, "div", 46);
  }
  if (rf & 2) {
    const plan_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(plan_r16.is_active && plan_r16.id !== ctx_r1.detalleEmpresa().plan?.id ? 0 : -1);
  }
}
function SuperadminSuscripciones_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalCambiar());
    });
    \u0275\u0275domElementStart(1, "div", 42);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_13_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 20)(3, "div")(4, "h2");
    \u0275\u0275text(5, "Cambiar Plan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 43);
    \u0275\u0275text(7, "Plan actual: ");
    \u0275\u0275domElementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "button", 22);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalCambiar());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 23)(13, "p", 43);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "div", 44);
    \u0275\u0275repeaterCreate(16, SuperadminSuscripciones_Conditional_13_For_17_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 45)(19, "button", 32);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_13_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalCambiar());
    });
    \u0275\u0275text(20, " Cancelar ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "button", 31);
    \u0275\u0275domListener("click", function SuperadminSuscripciones_Conditional_13_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarPlan());
    });
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.detalleEmpresa().plan?.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Selecciona el nuevo plan para ", ctx_r1.selectedEmpresa()?.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.planes());
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r1.submitLoading());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.submitLoading() || !ctx_r1.selectedPlanId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitLoading() ? "Cambiando..." : "Cambiar Plan", " ");
  }
}
var SuperadminSuscripciones = class _SuperadminSuscripciones {
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
  empresas = signal(
    [],
    ...ngDevMode ? [{ debugName: "empresas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedEmpresa = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedEmpresa" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detalleEmpresa = signal(
    null,
    ...ngDevMode ? [{ debugName: "detalleEmpresa" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detallesMap = signal(
    /* @__PURE__ */ new Map(),
    ...ngDevMode ? [{ debugName: "detallesMap" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showModalAsignar = signal(
    false,
    ...ngDevMode ? [{ debugName: "showModalAsignar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showModalCambiar = signal(
    false,
    ...ngDevMode ? [{ debugName: "showModalCambiar" }] : (
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
  submitLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedPlanId = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedPlanId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.cargarEmpresas();
    this.cargarPlanes();
  }
  cargarEmpresas() {
    this.loading.set(true);
    this.error.set(null);
    this.superadminService.getEmpresas().subscribe({
      next: (data) => {
        this.empresas.set(data);
        this.cargarDetallesMultiples(data);
      },
      error: () => {
        this.error.set("No se pudieron cargar las empresas.");
        this.loading.set(false);
      }
    });
  }
  cargarDetallesMultiples(empresas) {
    const detalles = /* @__PURE__ */ new Map();
    let cargadas = 0;
    const total = empresas.length;
    empresas.forEach((empresa) => {
      this.superadminService.getSuscripcionEmpresa(empresa.id).subscribe({
        next: (data) => {
          detalles.set(empresa.id, data);
          cargadas++;
          if (cargadas === total) {
            this.detallesMap.set(detalles);
            this.loading.set(false);
          }
        },
        error: () => {
          cargadas++;
          if (cargadas === total) {
            this.detallesMap.set(detalles);
            this.loading.set(false);
          }
        }
      });
    });
  }
  cargarPlanes() {
    this.superadminService.getPlanes().subscribe({
      next: (data) => {
        const planesNormalizados = data.map((p) => __spreadProps(__spreadValues({}, p), {
          is_active: p.es_activo !== void 0 ? p.es_activo : p.is_active,
          precio: typeof p.precio === "string" ? parseFloat(p.precio) : p.precio
        }));
        this.planes.set(planesNormalizados);
      },
      error: () => {
        this.error.set("No se pudieron cargar los planes.");
      }
    });
  }
  seleccionarEmpresa(empresa) {
    this.selectedEmpresa.set(empresa);
    const detalle = this.detallesMap().get(empresa.id);
    if (detalle) {
      this.detalleEmpresa.set(detalle);
    } else {
      this.cargarDetalleEmpresa(empresa.id);
    }
  }
  cargarDetalleEmpresa(empresaId) {
    this.loading.set(true);
    this.superadminService.getSuscripcionEmpresa(empresaId).subscribe({
      next: (data) => {
        this.detalleEmpresa.set(data);
        const mapa = new Map(this.detallesMap());
        mapa.set(empresaId, data);
        this.detallesMap.set(mapa);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("No se pudieron cargar los detalles de suscripci\xF3n.");
        this.loading.set(false);
      }
    });
  }
  obtenerDetalles(empresaId) {
    return this.detallesMap().get(empresaId);
  }
  abrirModalAsignar() {
    this.selectedPlanId.set(null);
    this.showModalAsignar.set(true);
  }
  cerrarModalAsignar() {
    this.showModalAsignar.set(false);
    this.selectedPlanId.set(null);
  }
  asignarPlan() {
    const empresa = this.selectedEmpresa();
    if (!empresa || !this.selectedPlanId()) {
      this.error.set("Seleccione un plan.");
      return;
    }
    this.submitLoading.set(true);
    const ahora = /* @__PURE__ */ new Date();
    const vencimiento = new Date(ahora.getTime() + 365 * 24 * 60 * 60 * 1e3);
    const payload = {
      empresa_id: empresa.id,
      plan_id: this.selectedPlanId(),
      fecha_inicio: ahora.toISOString(),
      fecha_vencimiento: vencimiento.toISOString()
    };
    this.superadminService.asignarSuscripcion(payload).subscribe({
      next: () => {
        this.cargarDetalleEmpresa(empresa.id);
        this.cerrarModalAsignar();
        this.submitLoading.set(false);
      },
      error: () => {
        this.error.set("Error al asignar plan.");
        this.submitLoading.set(false);
      }
    });
  }
  abrirModalCambiar() {
    this.selectedPlanId.set(null);
    this.showModalCambiar.set(true);
  }
  cerrarModalCambiar() {
    this.showModalCambiar.set(false);
    this.selectedPlanId.set(null);
  }
  cambiarPlan() {
    const empresa = this.selectedEmpresa();
    if (!empresa || !this.selectedPlanId()) {
      this.error.set("Seleccione un plan.");
      return;
    }
    this.submitLoading.set(true);
    this.superadminService.cambiarSuscripcion(empresa.id, { plan_id: this.selectedPlanId() }).subscribe({
      next: () => {
        this.cargarDetalleEmpresa(empresa.id);
        this.cerrarModalCambiar();
        this.submitLoading.set(false);
      },
      error: () => {
        this.error.set("Error al cambiar plan.");
        this.submitLoading.set(false);
      }
    });
  }
  renovarSuscripcion() {
    const empresa = this.selectedEmpresa();
    if (!empresa)
      return;
    this.submitLoading.set(true);
    const vencimiento = new Date((/* @__PURE__ */ new Date()).getTime() + 365 * 24 * 60 * 60 * 1e3);
    this.superadminService.renovarSuscripcion(empresa.id, { fecha_vencimiento: vencimiento.toISOString() }).subscribe({
      next: () => {
        this.cargarDetalleEmpresa(empresa.id);
        this.submitLoading.set(false);
      },
      error: () => {
        this.error.set("Error al renovar suscripci\xF3n.");
        this.submitLoading.set(false);
      }
    });
  }
  cambiarEstado(activo) {
    const empresa = this.selectedEmpresa();
    if (!empresa)
      return;
    this.submitLoading.set(true);
    this.superadminService.cambiarEstadoSuscripcion(empresa.id, { activa: activo }).subscribe({
      next: () => {
        this.cargarDetalleEmpresa(empresa.id);
        this.submitLoading.set(false);
      },
      error: () => {
        this.error.set("Error al cambiar estado.");
        this.submitLoading.set(false);
      }
    });
  }
  estaActiva() {
    return this.detalleEmpresa()?.suscripcion?.activa ?? false;
  }
  getNombreEstado() {
    return this.estaActiva() ? "Activa" : "Inactiva";
  }
  formatLabel(key) {
    const labels = {
      gestion_productos: "Gesti\xF3n de productos",
      gestion_ventas: "Gesti\xF3n de ventas",
      reservas: "Reservas",
      operacion_offline: "Operaci\xF3n offline",
      reportes_convencionales: "Reportes convencionales",
      reportes_generativos_ia: "Reportes generativos IA"
    };
    return labels[key] || key;
  }
  static \u0275fac = function SuperadminSuscripciones_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminSuscripciones)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminSuscripciones, selectors: [["app-superadmin-suscripciones"]], decls: 14, vars: 5, consts: [[1, "suscripciones-container"], [1, "header"], [1, "subtitle"], [1, "error-banner"], [1, "empresas-section"], [1, "loading"], [1, "empty-state"], [1, "table-responsive"], [1, "modal-overlay"], [1, "btn-close", 3, "click"], [1, "spinner"], [1, "empresas-table"], [1, "empresa-name"], [1, "badge", 3, "class"], [1, "badge", "badge-empty"], [1, "action-cell"], [1, "btn-gestionar", 3, "click"], [1, "badge"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal-large", 3, "click"], [1, "modal-header"], [1, "empresa-info"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "empty-suscripcion"], [1, "section"], [1, "info-grid"], [1, "info-item"], [1, "funcionalidades-grid"], [1, "funcionalidad-item", 3, "disabled"], [1, "section", "actions-section"], [1, "btn-primary", 3, "click", "disabled"], [1, "btn-secondary", 3, "click", "disabled"], [3, "click", "disabled"], [1, "funcionalidad-item"], [1, "icon"], [1, "label"], [1, "limits-grid"], [1, "limit-item"], [1, "limit-value"], [1, "empty-icon"], [1, "btn-primary", "btn-large", 3, "click"], [1, "modal", 3, "click"], [1, "modal-subtitle"], [1, "planes-grid"], [1, "modal-actions"], [1, "plan-card", 3, "selected"], [1, "plan-card", 3, "click"], [1, "plan-header"], [1, "plan-price"], [1, "plan-limits"]], template: function SuperadminSuscripciones_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Gesti\xF3n de Suscripciones");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 2);
      \u0275\u0275text(5, "Administra los planes y suscripciones de tus empresas");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(6, SuperadminSuscripciones_Conditional_6_Template, 5, 1, "div", 3);
      \u0275\u0275domElementStart(7, "div", 4);
      \u0275\u0275conditionalCreate(8, SuperadminSuscripciones_Conditional_8_Template, 4, 0, "div", 5)(9, SuperadminSuscripciones_Conditional_9_Template, 3, 0, "div", 6)(10, SuperadminSuscripciones_Conditional_10_Template, 19, 0, "div", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(11, SuperadminSuscripciones_Conditional_11_Template, 13, 3, "div", 8);
      \u0275\u0275conditionalCreate(12, SuperadminSuscripciones_Conditional_12_Template, 18, 4, "div", 8);
      \u0275\u0275conditionalCreate(13, SuperadminSuscripciones_Conditional_13_Template, 23, 5, "div", 8);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.error() ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 8 : ctx.empresas().length === 0 ? 9 : 10);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.selectedEmpresa() && ctx.detalleEmpresa() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showModalAsignar() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showModalCambiar() ? 13 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DecimalPipe, DatePipe, KeyValuePipe], styles: ["\n.suscripciones-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 24px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--%NS%ns-color-text-secondary);\n  margin: 0;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-radius: 8px;\n  background: #fee;\n  color: #c00;\n  border: 1px solid #ffb3b3;\n  font-size: 13px;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: 0;\n  border: none;\n  color: #c00;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0;\n  opacity: 0.6;\n  transition: opacity 200ms;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 40px;\n  border-radius: 8px;\n  background: var(--%NS%ns-color-bg);\n  color: var(--%NS%ns-color-text-secondary);\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--%NS%ns-color-border);\n  border-top-color: var(--%NS%ns-color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empresas-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  background: var(--%NS%ns-color-white);\n  border: 1px solid var(--%NS%ns-color-border);\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.empresas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.empresas-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--%NS%ns-color-bg);\n  border-bottom: 2px solid var(--%NS%ns-color-border);\n}\n.empresas-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: left;\n  font-weight: 600;\n}\n.empresas-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--%NS%ns-color-border);\n}\n.empresas-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%ns-color-bg);\n}\n.empresas-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #666;\n}\n.badge-empty[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.btn-gestionar[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid var(--%NS%ns-color-primary);\n  background: 0;\n  color: var(--%NS%ns-color-primary);\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.btn-gestionar[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%ns-color-primary) 10%, white);\n}\n.btn-gestionar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n  color: var(--%NS%ns-color-text-secondary);\n  font-size: 14px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 20px;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 200ms ease-out;\n  z-index: 10000;\n  position: relative;\n}\n.modal.modal-large[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px;\n  border-bottom: 1px solid var(--%NS%ns-color-border);\n  gap: 16px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.empresa-info[_ngcontent-%COMP%], \n.modal-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%ns-color-text-secondary);\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  border: none;\n  background: 0;\n  color: var(--%NS%ns-color-text-secondary);\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 18px;\n  transition: all 200ms;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%ns-color-bg);\n  color: var(--%NS%ns-color-text);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 14px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%ns-color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.funcionalidades-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.funcionalidad-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border-radius: 6px;\n  border: 1px solid var(--%NS%ns-color-border);\n  background: var(--%NS%ns-color-bg);\n  font-size: 13px;\n  transition: all 200ms;\n}\n.funcionalidad-item.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.funcionalidad-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  min-width: 18px;\n  font-size: 14px;\n  color: var(--%NS%ns-color-primary);\n}\n.limits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.limit-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  border-radius: 6px;\n  background: var(--%NS%ns-color-bg);\n  border: 1px solid var(--%NS%ns-color-border);\n}\n.limit-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--%NS%ns-color-text-secondary);\n}\n.limit-item[_ngcontent-%COMP%]   .limit-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--%NS%ns-color-primary);\n}\n.actions-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--%NS%ns-color-border);\n}\n.actions-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.empty-suscripcion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 40px 24px;\n  text-align: center;\n}\n.empty-suscripcion[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.empty-suscripcion[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.empty-suscripcion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%ns-color-text-secondary);\n  margin: 0;\n  max-width: 300px;\n}\n.planes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 2px solid var(--%NS%ns-color-border);\n  border-radius: 8px;\n  background: var(--%NS%ns-color-white);\n  cursor: pointer;\n  transition: all 200ms;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%ns-color-primary);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.1);\n}\n.plan-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--%NS%ns-color-primary);\n  background: color-mix(in srgb, var(--%NS%ns-color-primary) 5%, white);\n}\n.plan-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.plan-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.plan-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--%NS%ns-color-primary);\n}\n.plan-limits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--%NS%ns-color-text-secondary);\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%], \n.btn-success[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 6px;\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-danger[_ngcontent-%COMP%]:disabled, \n.btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--%NS%ns-color-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--%NS%ns-color-primary) 110%, black);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.2);\n}\n.btn-primary.btn-large[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  font-size: 14px;\n  width: 100%;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--%NS%ns-color-bg);\n  color: var(--%NS%ns-color-text);\n  border: 1px solid var(--%NS%ns-color-border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--%NS%ns-color-primary) 8%, white);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #fee;\n  color: #d32f2f;\n  border: 1px solid #d32f2f;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f5cccc;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #2e7d32;\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c8e6c9;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--%NS%ns-color-border);\n}\n.modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media (max-width: 900px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .limits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .planes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal.modal-large[_ngcontent-%COMP%] {\n    max-width: 90vw;\n  }\n}\n@media (max-width: 600px) {\n  .suscripciones-container[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 16px;\n  }\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .empresas-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .empresas-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .empresas-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 8px;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .actions-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 10px 12px;\n  }\n  .funcionalidades-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=suscripciones-KQFRBNH4.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminSuscripciones, [{
    type: Component,
    args: [{ selector: "app-superadmin-suscripciones", imports: [CommonModule, FormsModule, Icon], standalone: true, template: `<div class="suscripciones-container">
  <div class="header">
    <h1>Gesti\xF3n de Suscripciones</h1>
    <p class="subtitle">Administra los planes y suscripciones de tus empresas</p>
  </div>

  @if (error()) {
    <div class="error-banner">
      <span>{{ error() }}</span>
      <button class="btn-close" (click)="error.set(null)">\u2715</button>
    </div>
  }

  <!-- Tabla de Empresas -->
  <div class="empresas-section">
    @if (loading()) {
      <div class="loading">
        <div class="spinner"></div>
        <span>Cargando empresas...</span>
      </div>
    } @else if (empresas().length === 0) {
      <div class="empty-state">
        <p>No hay empresas registradas.</p>
      </div>
    } @else {
      <div class="table-responsive">
        <table class="empresas-table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Plan Actual</th>
              <th>Estado Suscripci\xF3n</th>
              <th>Inicio</th>
              <th>Vencimiento</th>
              <th>Acci\xF3n</th>
            </tr>
          </thead>
          <tbody>
            @for (empresa of empresas(); track empresa.id) {
              @let detalle = obtenerDetalles(empresa.id);
              <tr>
                <td class="empresa-name"><strong>{{ empresa.nombre }}</strong></td>
                <td>
                  {{ detalle?.plan?.nombre || 'Sin plan' }}
                </td>
                <td>
                  @if (detalle?.suscripcion) {
                    <span class="badge" [class]="'badge-' + (detalle.suscripcion.activa ? 'active' : 'inactive')">
                      {{ detalle.suscripcion.activa ? 'Activa' : 'Inactiva' }}
                    </span>
                  } @else {
                    <span class="badge badge-empty">SIN SUSCRIPCI\xD3N</span>
                  }
                </td>
                <td>
                  {{ detalle?.suscripcion?.fecha_inicio ? (detalle.suscripcion.fecha_inicio | date: 'short') : '--' }}
                </td>
                <td>
                  {{ detalle?.suscripcion?.fecha_vencimiento ? (detalle.suscripcion.fecha_vencimiento | date: 'short') : '--' }}
                </td>
                <td class="action-cell">
                  <button class="btn-gestionar" (click)="seleccionarEmpresa(empresa)">
                    Gestionar
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

  <!-- Modal/Panel de Gesti\xF3n -->
  @if (selectedEmpresa() && detalleEmpresa()) {
    <div class="modal-overlay" (click)="selectedEmpresa.set(null)">
      <div class="modal modal-large" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div>
            <h2>Gestionar Suscripci\xF3n</h2>
            <p class="empresa-info">{{ selectedEmpresa()!.nombre }} \u2022 {{ selectedEmpresa()!.razon_social }}</p>
          </div>
          <button class="close-btn" (click)="selectedEmpresa.set(null)">\u2715</button>
        </div>
        <div class="modal-body">
          <!-- Si tiene suscripci\xF3n -->
          @if (detalleEmpresa()!.suscripcion) {
            <div class="section">
              <h3>Informaci\xF3n de Suscripci\xF3n</h3>
              <div class="info-grid">
                <div class="info-item">
                  <label>Plan</label>
                  <strong>{{ detalleEmpresa()!.plan?.nombre }}</strong>
                </div>
                <div class="info-item">
                  <label>Estado</label>
                  <span class="badge" [class]="'badge-' + (estaActiva() ? 'active' : 'inactive')">
                    {{ estaActiva() ? 'Activa' : 'Inactiva' }}
                  </span>
                </div>
                <div class="info-item">
                  <label>Fecha de Inicio</label>
                  <strong>{{ detalleEmpresa()!.suscripcion!.fecha_inicio | date: 'short' }}</strong>
                </div>
                <div class="info-item">
                  <label>Fecha de Vencimiento</label>
                  <strong>{{ detalleEmpresa()!.suscripcion!.fecha_vencimiento | date: 'short' }}</strong>
                </div>
              </div>
            </div>

            <!-- Funcionalidades -->
            <div class="section">
              <h3>Funcionalidades Habilitadas</h3>
              <div class="funcionalidades-grid">
                @for (
                  item of (detalleEmpresa()!.funcionalidades_habilitadas | keyvalue);
                  track item.key
                ) {
                  <div class="funcionalidad-item" [class.disabled]="!item.value">
                    <span class="icon">{{ item.value ? '\u2713' : '\u2715' }}</span>
                    <span class="label">{{ formatLabel(item.key) }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- L\xEDmites -->
            @if (detalleEmpresa()!.plan) {
              <div class="section">
                <h3>L\xEDmites del Plan</h3>
                <div class="limits-grid">
                  <div class="limit-item">
                    <label>Sucursales</label>
                    <div class="limit-value">{{ detalleEmpresa()!.plan!.limite_sucursales }}</div>
                  </div>
                  <div class="limit-item">
                    <label>Usuarios</label>
                    <div class="limit-value">{{ detalleEmpresa()!.plan!.limite_usuarios }}</div>
                  </div>
                </div>
              </div>
            }

            <!-- Acciones -->
            <div class="section actions-section">
              <button class="btn-primary" (click)="abrirModalCambiar()" [disabled]="submitLoading()">
                Cambiar Plan
              </button>
              <button class="btn-secondary" (click)="renovarSuscripcion()" [disabled]="submitLoading()">
                Renovar Suscripci\xF3n
              </button>
              <button
                [class]="'btn-' + (estaActiva() ? 'danger' : 'success')"
                (click)="cambiarEstado(!estaActiva())"
                [disabled]="submitLoading()"
              >
                {{ estaActiva() ? 'Desactivar Suscripci\xF3n' : 'Activar Suscripci\xF3n' }}
              </button>
            </div>
          } @else {
            <!-- Si NO tiene suscripci\xF3n -->
            <div class="empty-suscripcion">
              <div class="empty-icon">\u{1F4CB}</div>
              <h3>Sin plan asignado</h3>
              <p>Esta empresa no tiene un plan de suscripci\xF3n asignado.</p>
              <button class="btn-primary btn-large" (click)="abrirModalAsignar()">
                Asignar Plan
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  }

  <!-- Modal Asignar Plan -->
  @if (showModalAsignar()) {
    <div class="modal-overlay" (click)="cerrarModalAsignar()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Asignar Plan</h2>
          <button class="close-btn" (click)="cerrarModalAsignar()">\u2715</button>
        </div>
        <div class="modal-body">
          <p class="modal-subtitle">Selecciona el plan para {{ selectedEmpresa()?.nombre }}</p>
          <div class="planes-grid">
            @for (plan of planes(); track plan.id) {
              @if (plan.is_active) {
                <div class="plan-card" (click)="selectedPlanId.set(plan.id)" [class.selected]="selectedPlanId() === plan.id">
                  <div class="plan-header">
                    <h4>{{ plan.nombre }}</h4>
                    <span class="plan-price">\${{ plan.precio | number: '1.2-2' }}</span>
                  </div>
                  <div class="plan-limits">
                    <span>{{ plan.limite_sucursales }} sucursal(es)</span>
                    <span>{{ plan.limite_usuarios }} usuario(s)</span>
                  </div>
                </div>
              }
            }
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn-secondary" (click)="cerrarModalAsignar()" [disabled]="submitLoading()">
            Cancelar
          </button>
          <button class="btn-primary" (click)="asignarPlan()" [disabled]="submitLoading() || !selectedPlanId()">
            {{ submitLoading() ? 'Asignando...' : 'Asignar Plan' }}
          </button>
        </div>
      </div>
    </div>
  }

  <!-- Modal Cambiar Plan -->
  @if (showModalCambiar()) {
    <div class="modal-overlay" (click)="cerrarModalCambiar()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div>
            <h2>Cambiar Plan</h2>
            <p class="modal-subtitle">Plan actual: <strong>{{ detalleEmpresa()!.plan?.nombre }}</strong></p>
          </div>
          <button class="close-btn" (click)="cerrarModalCambiar()">\u2715</button>
        </div>
        <div class="modal-body">
          <p class="modal-subtitle">Selecciona el nuevo plan para {{ selectedEmpresa()?.nombre }}</p>
          <div class="planes-grid">
            @for (plan of planes(); track plan.id) {
              @if (plan.is_active && plan.id !== detalleEmpresa()!.plan?.id) {
                <div class="plan-card" (click)="selectedPlanId.set(plan.id)" [class.selected]="selectedPlanId() === plan.id">
                  <div class="plan-header">
                    <h4>{{ plan.nombre }}</h4>
                    <span class="plan-price">\${{ plan.precio | number: '1.2-2' }}</span>
                  </div>
                  <div class="plan-limits">
                    <span>{{ plan.limite_sucursales }} sucursal(es)</span>
                    <span>{{ plan.limite_usuarios }} usuario(s)</span>
                  </div>
                </div>
              }
            }
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn-secondary" (click)="cerrarModalCambiar()" [disabled]="submitLoading()">
            Cancelar
          </button>
          <button class="btn-primary" (click)="cambiarPlan()" [disabled]="submitLoading() || !selectedPlanId()">
            {{ submitLoading() ? 'Cambiando...' : 'Cambiar Plan' }}
          </button>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/features/superadmin/suscripciones/suscripciones.scss */\n.suscripciones-container {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 24px;\n}\n.header {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\nh1 {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.subtitle {\n  font-size: 14px;\n  color: var(--ns-color-text-secondary);\n  margin: 0;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-radius: 8px;\n  background: #fee;\n  color: #c00;\n  border: 1px solid #ffb3b3;\n  font-size: 13px;\n}\n.btn-close {\n  background: 0;\n  border: none;\n  color: #c00;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0;\n  opacity: 0.6;\n  transition: opacity 200ms;\n}\n.btn-close:hover {\n  opacity: 1;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 40px;\n  border-radius: 8px;\n  background: var(--ns-color-bg);\n  color: var(--ns-color-text-secondary);\n  font-size: 14px;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--ns-color-border);\n  border-top-color: var(--ns-color-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empresas-section h2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.table-responsive {\n  background: var(--ns-color-white);\n  border: 1px solid var(--ns-color-border);\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.empresas-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.empresas-table thead {\n  background: var(--ns-color-bg);\n  border-bottom: 2px solid var(--ns-color-border);\n}\n.empresas-table th {\n  padding: 14px 16px;\n  text-align: left;\n  font-weight: 600;\n}\n.empresas-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--ns-color-border);\n}\n.empresas-table tbody tr:hover {\n  background: var(--ns-color-bg);\n}\n.empresas-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge-active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-inactive {\n  background: #f5f5f5;\n  color: #666;\n}\n.badge-empty {\n  background: #fff3cd;\n  color: #856404;\n}\n.btn-gestionar {\n  padding: 6px 16px;\n  border: 1px solid var(--ns-color-primary);\n  background: 0;\n  color: var(--ns-color-primary);\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.btn-gestionar:hover {\n  background: color-mix(in srgb, var(--ns-color-primary) 10%, white);\n}\n.btn-gestionar:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 24px;\n  color: var(--ns-color-text-secondary);\n  font-size: 14px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 20px;\n  opacity: 1;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 200ms ease-out;\n  z-index: 10000;\n  position: relative;\n}\n.modal.modal-large {\n  max-width: 700px;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px;\n  border-bottom: 1px solid var(--ns-color-border);\n  gap: 16px;\n}\n.modal-header h2 {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.empresa-info,\n.modal-subtitle {\n  font-size: 13px;\n  color: var(--ns-color-text-secondary);\n  margin: 0;\n}\n.close-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  border: none;\n  background: 0;\n  color: var(--ns-color-text-secondary);\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 18px;\n  transition: all 200ms;\n}\n.close-btn:hover {\n  background: var(--ns-color-bg);\n  color: var(--ns-color-text);\n}\n.modal-body {\n  padding: 24px;\n}\n.section {\n  margin-bottom: 24px;\n}\n.section:last-child {\n  margin-bottom: 0;\n}\n.section h3 {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 14px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.info-item label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--ns-color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-item strong {\n  font-size: 14px;\n}\n.funcionalidades-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.funcionalidad-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border-radius: 6px;\n  border: 1px solid var(--ns-color-border);\n  background: var(--ns-color-bg);\n  font-size: 13px;\n  transition: all 200ms;\n}\n.funcionalidad-item.disabled {\n  opacity: 0.5;\n}\n.funcionalidad-item .icon {\n  font-weight: 700;\n  min-width: 18px;\n  font-size: 14px;\n  color: var(--ns-color-primary);\n}\n.limits-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.limit-item {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  border-radius: 6px;\n  background: var(--ns-color-bg);\n  border: 1px solid var(--ns-color-border);\n}\n.limit-item label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--ns-color-text-secondary);\n}\n.limit-item .limit-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ns-color-primary);\n}\n.actions-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--ns-color-border);\n}\n.actions-section button {\n  width: 100%;\n  text-align: center;\n}\n.empty-suscripcion {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 40px 24px;\n  text-align: center;\n}\n.empty-suscripcion .empty-icon {\n  font-size: 48px;\n}\n.empty-suscripcion h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.empty-suscripcion p {\n  font-size: 13px;\n  color: var(--ns-color-text-secondary);\n  margin: 0;\n  max-width: 300px;\n}\n.planes-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.plan-card {\n  padding: 14px;\n  border: 2px solid var(--ns-color-border);\n  border-radius: 8px;\n  background: var(--ns-color-white);\n  cursor: pointer;\n  transition: all 200ms;\n}\n.plan-card:hover {\n  border-color: var(--ns-color-primary);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.1);\n}\n.plan-card.selected {\n  border-color: var(--ns-color-primary);\n  background: color-mix(in srgb, var(--ns-color-primary) 5%, white);\n}\n.plan-header {\n  margin-bottom: 12px;\n}\n.plan-header h4 {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.plan-price {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ns-color-primary);\n}\n.plan-limits {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--ns-color-text-secondary);\n}\n.btn-primary,\n.btn-secondary,\n.btn-danger,\n.btn-success {\n  padding: 10px 16px;\n  border-radius: 6px;\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n  white-space: nowrap;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-danger:disabled,\n.btn-success:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--ns-color-primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--ns-color-primary) 110%, black);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.2);\n}\n.btn-primary.btn-large {\n  padding: 14px 32px;\n  font-size: 14px;\n  width: 100%;\n}\n.btn-secondary {\n  background: var(--ns-color-bg);\n  color: var(--ns-color-text);\n  border: 1px solid var(--ns-color-border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--ns-color-primary) 8%, white);\n}\n.btn-danger {\n  background: #fee;\n  color: #d32f2f;\n  border: 1px solid #d32f2f;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #f5cccc;\n}\n.btn-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #2e7d32;\n}\n.btn-success:hover:not(:disabled) {\n  background: #c8e6c9;\n}\n.modal-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--ns-color-border);\n}\n.modal-actions button {\n  padding: 10px 20px;\n}\n@media (max-width: 900px) {\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .limits-grid {\n    grid-template-columns: 1fr;\n  }\n  .planes-grid {\n    grid-template-columns: 1fr;\n  }\n  .modal.modal-large {\n    max-width: 90vw;\n  }\n}\n@media (max-width: 600px) {\n  .suscripciones-container {\n    padding: 16px;\n    gap: 16px;\n  }\n  .header h1 {\n    font-size: 22px;\n  }\n  .empresas-table {\n    font-size: 12px;\n  }\n  .empresas-table th,\n  .empresas-table td {\n    padding: 10px 8px;\n  }\n  .modal {\n    max-width: 100%;\n    border-radius: 8px;\n  }\n  .modal-header {\n    padding: 16px;\n  }\n  .modal-body {\n    padding: 16px;\n  }\n  .actions-section button {\n    font-size: 12px;\n    padding: 10px 12px;\n  }\n  .funcionalidades-grid {\n    grid-template-columns: 1fr;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=suscripciones-KQFRBNH4.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminSuscripciones, { className: "SuperadminSuscripciones", filePath: "src/app/features/superadmin/suscripciones/suscripciones.ts", lineNumber: 33 });
})();
export {
  SuperadminSuscripciones
};
//# debugId=e36a447a-4b6a-59ba-bb52-d2f1905ee878
//# sourceMappingURL=chunk-ZX3D4V4B.js.map
