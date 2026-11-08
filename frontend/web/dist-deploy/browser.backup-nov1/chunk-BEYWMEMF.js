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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OB3O2VC6.js";
import {
  SuperadminService
} from "./chunk-UN6AH4K6.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-OXXL2I3V.js";
import {
  CommonModule
} from "./chunk-BQM6CYO4.js";
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

// src/app/features/superadmin/administrador-detalle/administrador-detalle.ts
function AdministradorDetalleComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "Cargando informaci\xF3n...");
    \u0275\u0275elementEnd()();
  }
}
function AdministradorDetalleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-icon", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function AdministradorDetalleComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.volver());
    });
    \u0275\u0275text(5, "Volver a empresas");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AdministradorDetalleComponent_Conditional_7_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AdministradorDetalleComponent_Conditional_7_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirEdicion());
    });
    \u0275\u0275element(1, "app-icon", 18);
    \u0275\u0275text(2, " Editar datos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function AdministradorDetalleComponent_Conditional_7_Conditional_25_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleEstado());
    });
    \u0275\u0275element(4, "app-icon", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.data().administrador.is_active ? "lock" : "eye");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data().administrador.is_active ? "Desactivar" : "Activar", " ");
  }
}
function AdministradorDetalleComponent_Conditional_7_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "label");
    \u0275\u0275text(3, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "label");
    \u0275\u0275text(8, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "label");
    \u0275\u0275text(13, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "label");
    \u0275\u0275text(18, "Empresa asociada (ID)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11)(22, "label");
    \u0275\u0275text(23, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 13);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data().administrador.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data().administrador.correo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data().administrador.rol);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data().administrador.empresa_id);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.data().administrador.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data().administrador.is_active ? "Activo" : "Inactivo", " ");
  }
}
function AdministradorDetalleComponent_Conditional_7_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("nombre"));
  }
}
function AdministradorDetalleComponent_Conditional_7_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("correo"));
  }
}
function AdministradorDetalleComponent_Conditional_7_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 23);
    \u0275\u0275listener("ngSubmit", function AdministradorDetalleComponent_Conditional_7_Conditional_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.guardarCambios());
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "label", 25);
    \u0275\u0275text(3, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 26);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, AdministradorDetalleComponent_Conditional_7_Conditional_27_Conditional_5_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "label", 28);
    \u0275\u0275text(8, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 29);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, AdministradorDetalleComponent_Conditional_7_Conditional_27_Conditional_10_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30)(12, "label");
    \u0275\u0275element(13, "input", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Administrador activo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 32);
    \u0275\u0275text(17, "Si est\xE1 desactivado, no podr\xE1 iniciar sesi\xF3n.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 33)(19, "p")(20, "strong");
    \u0275\u0275text(21, "No se puede cambiar:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ul")(23, "li");
    \u0275\u0275text(24, "Rol: ADMINISTRADOR (fijo)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 34)(28, "button", 35);
    \u0275\u0275listener("click", function AdministradorDetalleComponent_Conditional_7_Conditional_27_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelarEdicion());
    });
    \u0275\u0275text(29, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 36);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("nombre"));
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("nombre") ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("correo"));
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("correo") ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275control();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("Empresa asociada: ", ctx_r1.data().administrador.empresa_id, " (fijo)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting() || ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando..." : "Guardar cambios", " ");
  }
}
function AdministradorDetalleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "label");
    \u0275\u0275text(7, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "label");
    \u0275\u0275text(12, "Identificador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "label");
    \u0275\u0275text(17, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 9)(21, "div", 14)(22, "h2");
    \u0275\u0275text(23, "Administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 15);
    \u0275\u0275conditionalCreate(25, AdministradorDetalleComponent_Conditional_7_Conditional_25_Template, 6, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, AdministradorDetalleComponent_Conditional_7_Conditional_26_Template, 26, 7, "div", 10);
    \u0275\u0275conditionalCreate(27, AdministradorDetalleComponent_Conditional_7_Conditional_27_Template, 32, 14, "form", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.data().empresa.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data().empresa.slug);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.data().empresa.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data().empresa.is_active ? "Activa" : "Inactiva", " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r1.editing() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.editing() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editing() ? 27 : -1);
  }
}
var AdministradorDetalleComponent = class _AdministradorDetalleComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  service = inject(SuperadminService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  fb = inject(FormBuilder);
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
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
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  data = signal(
    null,
    ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editing = signal(
    false,
    ...ngDevMode ? [{ debugName: "editing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form;
  constructor() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", [Validators.required, Validators.email]],
      is_active: [true]
    });
  }
  ngOnInit() {
    const empresaId = this.route.snapshot.paramMap.get("id");
    if (!empresaId) {
      this.error.set("ID de empresa no v\xE1lido.");
      return;
    }
    this.cargarAdministrador(parseInt(empresaId, 10));
  }
  cargarAdministrador(empresaId) {
    this.loading.set(true);
    this.error.set(null);
    this.service.getAdministrador(empresaId).subscribe({
      next: (response) => {
        this.data.set(response);
        this.form.patchValue({
          nombre: response.administrador.nombre,
          correo: response.administrador.correo,
          is_active: response.administrador.is_active
        });
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        if (err.status === 404) {
          this.error.set("Empresa o administrador no encontrado.");
        } else {
          this.error.set("Error al cargar los datos. Intenta nuevamente.");
        }
      }
    });
  }
  abrirEdicion() {
    this.editing.set(true);
  }
  cancelarEdicion() {
    this.editing.set(false);
    const admin = this.data()?.administrador;
    if (admin) {
      this.form.patchValue({
        nombre: admin.nombre,
        correo: admin.correo,
        is_active: admin.is_active
      });
    }
  }
  guardarCambios() {
    if (this.form.invalid) {
      this.marcarTodosTocados();
      return;
    }
    const datosActuales = this.data();
    if (!datosActuales)
      return;
    this.submitting.set(true);
    const payload = this.form.getRawValue();
    this.service.updateAdministrador(datosActuales.empresa.id, payload).subscribe({
      next: (response) => {
        this.data.set(response);
        this.editing.set(false);
        this.submitting.set(false);
        this.toast.success("Administrador actualizado correctamente.");
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe otro usuario con ese correo.");
        } else if (err.status === 404) {
          this.toast.error("Empresa o administrador no encontrado.");
        } else if (err.status === 400) {
          this.toast.error("Error en los datos. Intenta nuevamente.");
        } else {
          this.toast.error("No se pudo actualizar el administrador.");
        }
      }
    });
  }
  async toggleEstado() {
    const admin = this.data()?.administrador;
    if (!admin)
      return;
    const accion = admin.is_active ? "Desactivar" : "Activar";
    const confirmed = await this.confirmDialog.confirm({
      title: `\xBF${accion} administrador?`,
      message: admin.is_active ? `${admin.nombre} dejar\xE1 de poder iniciar sesi\xF3n.` : `${admin.nombre} podr\xE1 volver a iniciar sesi\xF3n.`,
      confirmText: accion,
      danger: admin.is_active
    });
    if (!confirmed)
      return;
    const payload = {
      nombre: admin.nombre,
      correo: admin.correo,
      is_active: !admin.is_active
    };
    this.service.updateAdministrador(this.data().empresa.id, payload).subscribe({
      next: (response) => {
        this.data.set(response);
        this.toast.success(!admin.is_active ? "Administrador activado." : "Administrador desactivado.");
      },
      error: () => {
        this.toast.error("No se pudo cambiar el estado del administrador.");
      }
    });
  }
  volver() {
    this.router.navigate(["/superadmin/empresas"]);
  }
  marcarTodosTocados() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key)?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const control = this.form.get(fieldName);
    if (!control || !control.errors || !control.touched) {
      return null;
    }
    if (control.errors["required"]) {
      return "Este campo es obligatorio.";
    }
    if (control.errors["minlength"]) {
      return `M\xEDnimo ${control.errors["minlength"].requiredLength} caracteres.`;
    }
    if (control.errors["email"]) {
      return "Email no v\xE1lido.";
    }
    return "Campo inv\xE1lido.";
  }
  isFieldInvalid(fieldName) {
    const control = this.form.get(fieldName);
    return !!(control && control.invalid && control.touched);
  }
  static \u0275fac = function AdministradorDetalleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdministradorDetalleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdministradorDetalleComponent, selectors: [["app-administrador-detalle"]], decls: 8, vars: 1, consts: [[1, "administrador-container"], [1, "page-header"], [1, "btn-back", 3, "click"], ["name", "arrow-right", 2, "width", "20px", "height", "20px", "transform", "scaleX(-1)"], [1, "loading-state"], [1, "error-state"], [1, "content"], ["name", "bell", 2, "width", "24px", "height", "24px"], [1, "btn-secondary", 3, "click"], [1, "section"], [1, "info-card"], [1, "info-row"], [1, "slug"], [1, "status-badge"], [1, "section-header"], [1, "section-actions"], [1, "form-edit", 3, "formGroup"], [1, "btn-primary", 3, "click"], ["name", "edit", 2, "width", "16px", "height", "16px"], [1, "btn-danger", 3, "click", "disabled"], [2, "width", "16px", "height", "16px", 3, "name"], [1, "email"], [1, "role-badge"], [1, "form-edit", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "nombre"], ["id", "nombre", "type", "text", "formControlName", "nombre", 1, "form-input", 3, "disabled"], [1, "form-error"], ["for", "correo"], ["id", "correo", "type", "email", "formControlName", "correo", 1, "form-input", 3, "disabled"], [1, "form-group", "checkbox"], ["type", "checkbox", "formControlName", "is_active", 3, "disabled"], [1, "form-hint"], [1, "form-restrictions"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn-primary", 3, "disabled"]], template: function AdministradorDetalleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function AdministradorDetalleComponent_Template_button_click_2_listener() {
        return ctx.volver();
      });
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Volver ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, AdministradorDetalleComponent_Conditional_5_Template, 3, 0, "div", 4)(6, AdministradorDetalleComponent_Conditional_6_Template, 6, 1, "div", 5)(7, AdministradorDetalleComponent_Conditional_7_Template, 28, 8, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 5 : ctx.error() ? 6 : ctx.data() ? 7 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, Icon], styles: ['@charset "UTF-8";\n\n\n.administrador-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: none;\n  border: none;\n  color: #c41e3a;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.page-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  color: #a01830;\n  text-decoration: underline;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #666;\n  font-size: 1rem;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  background-color: #fff5f5;\n  border: 2px solid #c41e3a;\n  border-radius: 8px;\n  color: #c41e3a;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.section[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  border-bottom: 2px solid #c41e3a;\n  padding-bottom: 0.75rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n.section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  background-color: #fafafa;\n  border-radius: 6px;\n  border: 1px solid #f0f0f0;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.info-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n  font-size: 0.95rem;\n  flex: 0 0 200px;\n}\n.info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  font-size: 0.95rem;\n  word-break: break-word;\n}\n.info-row[_ngcontent-%COMP%]   span.slug[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.85rem;\n  color: #888;\n}\n.info-row[_ngcontent-%COMP%]   span.email[_ngcontent-%COMP%] {\n  color: #c41e3a;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  background-color: #ffe0e0;\n  color: #c41e3a;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #4caf50;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.form-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  background-color: #fafafa;\n  border-radius: 6px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group.checkbox[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: flex-start;\n}\n.form-group.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 0.95rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  font-family: inherit;\n  transition: all 0.3s ease;\n  background-color: white;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #c41e3a;\n  box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.1);\n}\n.form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n  cursor: not-allowed;\n}\n.form-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  background-color: #fff5f5;\n}\n.form-error[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #e74c3c;\n  display: block;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n  display: block;\n}\n.form-restrictions[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f0f0f0;\n  border-left: 4px solid #c41e3a;\n  border-radius: 4px;\n}\n.form-restrictions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.9rem;\n  color: #333;\n  font-weight: 500;\n}\n.form-restrictions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.form-restrictions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  padding-left: 1.5rem;\n  position: relative;\n}\n.form-restrictions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: #c41e3a;\n  font-weight: bold;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #c41e3a;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #a01830;\n  box-shadow: 0 4px 12px rgba(196, 30, 58, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  color: #333;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #e0e0e0;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #fff5f5;\n  color: #c41e3a;\n  border: 1px solid #c41e3a;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #ffe0e0;\n}\napp-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  display: inline-block;\n}\n@media (max-width: 768px) {\n  .administrador-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .section-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .section-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=administrador-detalle-JMJQRAHU.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministradorDetalleComponent, [{
    type: Component,
    args: [{ selector: "app-administrador-detalle", imports: [CommonModule, FormsModule, ReactiveFormsModule, Icon], standalone: true, template: `<div class="administrador-container">
  <div class="page-header">
    <button class="btn-back" (click)="volver()">
      <app-icon name="arrow-right" style="width: 20px; height: 20px; transform: scaleX(-1)" />
      Volver
    </button>
  </div>

  @if (loading()) {
    <div class="loading-state">
      <p>Cargando informaci\xF3n...</p>
    </div>
  } @else if (error()) {
    <div class="error-state">
      <app-icon name="bell" style="width: 24px; height: 24px" />
      <p>{{ error() }}</p>
      <button class="btn-secondary" (click)="volver()">Volver a empresas</button>
    </div>
  } @else if (data()) {
    <div class="content">
      <!-- Empresa -->
      <div class="section">
        <h2>Empresa</h2>
        <div class="info-card">
          <div class="info-row">
            <label>Nombre</label>
            <span>{{ data()!.empresa.nombre }}</span>
          </div>
          <div class="info-row">
            <label>Identificador</label>
            <span class="slug">{{ data()!.empresa.slug }}</span>
          </div>
          <div class="info-row">
            <label>Estado</label>
            <span class="status-badge" [class.active]="data()!.empresa.is_active">
              {{ data()!.empresa.is_active ? 'Activa' : 'Inactiva' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Administrador -->
      <div class="section">
        <div class="section-header">
          <h2>Administrador</h2>
          <div class="section-actions">
            @if (!editing()) {
              <button class="btn-primary" (click)="abrirEdicion()">
                <app-icon name="edit" style="width: 16px; height: 16px" />
                Editar datos
              </button>
              <button
                class="btn-danger"
                (click)="toggleEstado()"
                [disabled]="submitting()"
              >
                <app-icon
                  [name]="data()!.administrador.is_active ? 'lock' : 'eye'"
                  style="width: 16px; height: 16px"
                />
                {{ data()!.administrador.is_active ? 'Desactivar' : 'Activar' }}
              </button>
            }
          </div>
        </div>

        @if (!editing()) {
          <div class="info-card">
            <div class="info-row">
              <label>Nombre</label>
              <span>{{ data()!.administrador.nombre }}</span>
            </div>
            <div class="info-row">
              <label>Correo</label>
              <span class="email">{{ data()!.administrador.correo }}</span>
            </div>
            <div class="info-row">
              <label>Rol</label>
              <span class="role-badge">{{ data()!.administrador.rol }}</span>
            </div>
            <div class="info-row">
              <label>Empresa asociada (ID)</label>
              <span>{{ data()!.administrador.empresa_id }}</span>
            </div>
            <div class="info-row">
              <label>Estado</label>
              <span class="status-badge" [class.active]="data()!.administrador.is_active">
                {{ data()!.administrador.is_active ? 'Activo' : 'Inactivo' }}
              </span>
            </div>
          </div>
        }

        @if (editing()) {
          <form [formGroup]="form" (ngSubmit)="guardarCambios()" class="form-edit">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                formControlName="nombre"
                class="form-input"
                [class.error]="isFieldInvalid('nombre')"
                [disabled]="submitting()"
              />
              @if (isFieldInvalid('nombre')) {
                <span class="form-error">{{ getFieldError('nombre') }}</span>
              }
            </div>

            <div class="form-group">
              <label for="correo">Correo Electr\xF3nico</label>
              <input
                id="correo"
                type="email"
                formControlName="correo"
                class="form-input"
                [class.error]="isFieldInvalid('correo')"
                [disabled]="submitting()"
              />
              @if (isFieldInvalid('correo')) {
                <span class="form-error">{{ getFieldError('correo') }}</span>
              }
            </div>

            <div class="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  formControlName="is_active"
                  [disabled]="submitting()"
                />
                <span>Administrador activo</span>
              </label>
              <span class="form-hint">Si est\xE1 desactivado, no podr\xE1 iniciar sesi\xF3n.</span>
            </div>

            <div class="form-restrictions">
              <p><strong>No se puede cambiar:</strong></p>
              <ul>
                <li>Rol: ADMINISTRADOR (fijo)</li>
                <li>Empresa asociada: {{ data()!.administrador.empresa_id }} (fijo)</li>
              </ul>
            </div>

            <div class="form-actions">
              <button
                type="button"
                class="btn-secondary"
                (click)="cancelarEdicion()"
                [disabled]="submitting()"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="btn-primary"
                [disabled]="submitting() || form.invalid"
              >
                {{ submitting() ? 'Guardando...' : 'Guardar cambios' }}
              </button>
            </div>
          </form>
        }
      </div>
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/superadmin/administrador-detalle/administrador-detalle.scss */\n.administrador-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.page-header {\n  margin-bottom: 2rem;\n}\n.page-header .btn-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: none;\n  border: none;\n  color: #c41e3a;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.page-header .btn-back:hover {\n  color: #a01830;\n  text-decoration: underline;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #666;\n  font-size: 1rem;\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  background-color: #fff5f5;\n  border: 2px solid #c41e3a;\n  border-radius: 8px;\n  color: #c41e3a;\n  text-align: center;\n}\n.error-state app-icon {\n  width: 24px;\n  height: 24px;\n}\n.error-state p {\n  margin: 0;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.section {\n  background-color: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.section h2 {\n  margin: 0 0 1.5rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  border-bottom: 2px solid #c41e3a;\n  padding-bottom: 0.75rem;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.section-header h2 {\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n.section-actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.info-card {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  background-color: #fafafa;\n  border-radius: 6px;\n  border: 1px solid #f0f0f0;\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.info-row label {\n  font-weight: 500;\n  color: #666;\n  font-size: 0.95rem;\n  flex: 0 0 200px;\n}\n.info-row span {\n  color: #1a1a1a;\n  font-size: 0.95rem;\n  word-break: break-word;\n}\n.info-row span.slug {\n  font-family: monospace;\n  font-size: 0.85rem;\n  color: #888;\n}\n.info-row span.email {\n  color: #c41e3a;\n  font-weight: 500;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  background-color: #ffe0e0;\n  color: #c41e3a;\n}\n.status-badge.active {\n  background-color: #e8f5e9;\n  color: #4caf50;\n}\n.role-badge {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.form-edit {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  background-color: #fafafa;\n  border-radius: 6px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group.checkbox {\n  flex-direction: row;\n  align-items: flex-start;\n}\n.form-group.checkbox label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n}\n.form-group label {\n  font-weight: 500;\n  color: #333;\n  font-size: 0.95rem;\n}\n.form-input {\n  padding: 0.75rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  font-family: inherit;\n  transition: all 0.3s ease;\n  background-color: white;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #c41e3a;\n  box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.1);\n}\n.form-input:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n  cursor: not-allowed;\n}\n.form-input.error {\n  border-color: #e74c3c;\n  background-color: #fff5f5;\n}\n.form-error {\n  font-size: 0.8rem;\n  color: #e74c3c;\n  display: block;\n}\n.form-hint {\n  font-size: 0.8rem;\n  color: #888;\n  display: block;\n}\n.form-restrictions {\n  padding: 1rem;\n  background-color: #f0f0f0;\n  border-left: 4px solid #c41e3a;\n  border-radius: 4px;\n}\n.form-restrictions p {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.9rem;\n  color: #333;\n  font-weight: 500;\n}\n.form-restrictions ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.form-restrictions ul li {\n  font-size: 0.85rem;\n  color: #666;\n  padding-left: 1.5rem;\n  position: relative;\n}\n.form-restrictions ul li:before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: #c41e3a;\n  font-weight: bold;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n}\n.btn-primary,\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-danger:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background-color: #c41e3a;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #a01830;\n  box-shadow: 0 4px 12px rgba(196, 30, 58, 0.3);\n}\n.btn-secondary {\n  background-color: #f0f0f0;\n  color: #333;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #e0e0e0;\n}\n.btn-danger {\n  background-color: #fff5f5;\n  color: #c41e3a;\n  border: 1px solid #c41e3a;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #ffe0e0;\n}\napp-icon {\n  width: 1rem;\n  height: 1rem;\n  display: inline-block;\n}\n@media (max-width: 768px) {\n  .administrador-container {\n    padding: 1rem;\n  }\n  .section-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .section-actions {\n    width: 100%;\n  }\n  .section-actions button {\n    flex: 1;\n    justify-content: center;\n  }\n  .info-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-row label {\n    flex: 1 1 auto;\n  }\n  .form-actions {\n    flex-direction: column-reverse;\n  }\n  .form-actions button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=administrador-detalle-JMJQRAHU.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdministradorDetalleComponent, { className: "AdministradorDetalleComponent", filePath: "src/app/features/superadmin/administrador-detalle/administrador-detalle.ts", lineNumber: 21 });
})();
export {
  AdministradorDetalleComponent
};
//# debugId=b7253c1f-9d66-5f3a-9398-86512bf2bb30
//# sourceMappingURL=chunk-BEYWMEMF.js.map
