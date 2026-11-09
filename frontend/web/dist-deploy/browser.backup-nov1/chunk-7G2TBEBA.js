import {
  ProductoService
} from "./chunk-3MLODVFF.js";
import {
  ConfirmDialogService
} from "./chunk-COKUPLXV.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OB3O2VC6.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  DatePipe
} from "./chunk-BQM6CYO4.js";
import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Component,
  HostListener,
  Injectable,
  Input,
  Output,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
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

// src/app/features/admin/promociones/promocion.service.ts
var PromocionService = class _PromocionService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/promociones`;
  list() {
    return this.http.get(this.baseUrl);
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }
  activate(id) {
    return this.http.patch(`${this.baseUrl}/${id}/activar`, {});
  }
  deactivate(id) {
    return this.http.patch(`${this.baseUrl}/${id}/desactivar`, {});
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function PromocionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromocionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PromocionService, factory: _PromocionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromocionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/admin/promociones/promocion-form/promocion-form.ts
var _forTrack0 = ($index, $item) => $item.id;
function PromocionForm_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 8)(2, "div", 8)(3, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Debe ser mayor a 0 y menor a 100.");
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "La fecha fin no puede ser anterior a la fecha inicio.");
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "label", 27)(2, "input", 28);
    \u0275\u0275listener("change", function PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_4_For_2_Template_input_change_2_listener() {
      const producto_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleProducto(producto_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const producto_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.estaSeleccionado(producto_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r6.nombre);
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 25);
    \u0275\u0275repeaterCreate(1, PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_4_For_2_Template, 5, 2, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.resultadosBusqueda());
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Sin resultados para "', ctx_r1.terminoBusqueda(), '".');
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22);
    \u0275\u0275element(1, "app-icon", 23);
    \u0275\u0275elementStart(2, "input", 24);
    \u0275\u0275listener("input", function PromocionForm_Conditional_0_Conditional_8_Conditional_26_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.buscarProductos($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_3_Template, 1, 0, "div", 8)(4, PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_4_Template, 3, 0, "ul", 25)(5, PromocionForm_Conditional_0_Conditional_8_Conditional_26_Conditional_5_Template, 2, 1, "span", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.terminoBusqueda());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.buscando() ? 3 : ctx_r1.resultadosBusqueda().length > 0 ? 4 : ctx_r1.terminoBusqueda() ? 5 : -1);
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.intentoEnviar() && !ctx_r1.readonly() ? "field__error" : "field__hint");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.readonly() ? "Sin productos asociados." : "Selecciona al menos un producto.", " ");
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_28_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function PromocionForm_Conditional_0_Conditional_8_Conditional_28_For_2_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const producto_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.quitarProducto(producto_r8.id));
    });
    \u0275\u0275element(1, "app-icon", 32);
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PromocionForm_Conditional_0_Conditional_8_Conditional_28_For_2_Conditional_3_Template, 2, 0, "button", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r8.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.readonly() ? 3 : -1);
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 19);
    \u0275\u0275repeaterCreate(1, PromocionForm_Conditional_0_Conditional_8_Conditional_28_For_2_Template, 4, 2, "li", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.listaSeleccionados());
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function PromocionForm_Conditional_0_Conditional_8_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function PromocionForm_Conditional_0_Conditional_8_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function PromocionForm_Conditional_0_Conditional_8_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando..." : "Guardar", " ");
  }
}
function PromocionForm_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275listener("ngSubmit", function PromocionForm_Conditional_0_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "label", 10)(2, "span", 11);
    \u0275\u0275text(3, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, PromocionForm_Conditional_0_Conditional_8_Conditional_5_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 10)(7, "span", 11);
    \u0275\u0275text(8, "Porcentaje (%) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, PromocionForm_Conditional_0_Conditional_8_Conditional_10_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "label", 10)(13, "span", 11);
    \u0275\u0275text(14, "Fecha inicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(16, PromocionForm_Conditional_0_Conditional_8_Conditional_16_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 10)(18, "span", 11);
    \u0275\u0275text(19, "Fecha fin *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(21, PromocionForm_Conditional_0_Conditional_8_Conditional_21_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, PromocionForm_Conditional_0_Conditional_8_Conditional_22_Template, 2, 0, "span", 13);
    \u0275\u0275elementStart(23, "div", 10)(24, "span", 11);
    \u0275\u0275text(25, "Productos *");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, PromocionForm_Conditional_0_Conditional_8_Conditional_26_Template, 6, 2);
    \u0275\u0275conditionalCreate(27, PromocionForm_Conditional_0_Conditional_8_Conditional_27_Template, 2, 3, "span", 18)(28, PromocionForm_Conditional_0_Conditional_8_Conditional_28_Template, 3, 0, "ul", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "footer", 20);
    \u0275\u0275conditionalCreate(30, PromocionForm_Conditional_0_Conditional_8_Conditional_30_Template, 2, 0, "button", 21)(31, PromocionForm_Conditional_0_Conditional_8_Conditional_31_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.porcentaje_descuento.invalid && ctx_r1.form.controls.porcentaje_descuento.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.porcentaje_descuento.invalid && ctx_r1.form.controls.porcentaje_descuento.touched ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.fecha_inicio.invalid && ctx_r1.form.controls.fecha_inicio.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.fecha_inicio.invalid && ctx_r1.form.controls.fecha_inicio.touched ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.fecha_fin.invalid && ctx_r1.form.controls.fecha_fin.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.fecha_fin.invalid && ctx_r1.form.controls.fecha_fin.touched ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.hasError("rangoInvalido") && ctx_r1.form.controls.fecha_fin.touched ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r1.readonly() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.listaSeleccionados().length === 0 ? 27 : 28);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.readonly() ? 30 : 31);
  }
}
function PromocionForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PromocionForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function PromocionForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function PromocionForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, PromocionForm_Conditional_0_Conditional_7_Template, 4, 0, "div", 6)(8, PromocionForm_Conditional_0_Conditional_8_Template, 32, 17, "form", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de promoci\xF3n" : ctx_r1.isEditMode ? "Editar promoci\xF3n" : "Nueva promoci\xF3n");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.cargandoDetalle() ? 7 : 8);
  }
}
function rangoFechasValido(control) {
  const inicio = control.get("fecha_inicio")?.value;
  const fin = control.get("fecha_fin")?.value;
  if (!inicio || !fin) {
    return null;
  }
  return new Date(fin) < new Date(inicio) ? { rangoInvalido: true } : null;
}
var PromocionForm = class _PromocionForm {
  fb = inject(FormBuilder);
  promocionService = inject(PromocionService);
  productoService = inject(ProductoService);
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  promocionId = input(
    null,
    ...ngDevMode ? [{ debugName: "promocionId" }] : (
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
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.maxLength(150)]],
    porcentaje_descuento: [10, [Validators.required, Validators.min(1), Validators.max(99)]],
    fecha_inicio: ["", [Validators.required]],
    fecha_fin: ["", [Validators.required]]
  }, { validators: rangoFechasValido });
  cargandoDetalle = signal(
    false,
    ...ngDevMode ? [{ debugName: "cargandoDetalle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productosSeleccionados = signal(
    /* @__PURE__ */ new Map(),
    ...ngDevMode ? [{ debugName: "productosSeleccionados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  listaSeleccionados = computed(
    () => Array.from(this.productosSeleccionados().values()),
    ...ngDevMode ? [{ debugName: "listaSeleccionados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  terminoBusqueda = signal(
    "",
    ...ngDevMode ? [{ debugName: "terminoBusqueda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  buscando = signal(
    false,
    ...ngDevMode ? [{ debugName: "buscando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resultadosBusqueda = signal(
    [],
    ...ngDevMode ? [{ debugName: "resultadosBusqueda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  intentoEnviar = signal(
    false,
    ...ngDevMode ? [{ debugName: "intentoEnviar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchDebounce;
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      this.terminoBusqueda.set("");
      this.resultadosBusqueda.set([]);
      this.intentoEnviar.set(false);
      const id = this.promocionId();
      if (id === null) {
        this.form.reset({ nombre: "", porcentaje_descuento: 10, fecha_inicio: "", fecha_fin: "" });
        this.productosSeleccionados.set(/* @__PURE__ */ new Map());
        this.aplicarModoLectura();
        return;
      }
      this.cargandoDetalle.set(true);
      this.promocionService.get(id).subscribe({
        next: (promocion) => {
          this.form.reset({
            nombre: promocion.nombre,
            porcentaje_descuento: promocion.porcentaje_descuento,
            fecha_inicio: promocion.fecha_inicio,
            fecha_fin: promocion.fecha_fin
          });
          this.productosSeleccionados.set(new Map(promocion.productos.map((p) => [p.id, p])));
          this.cargandoDetalle.set(false);
          this.aplicarModoLectura();
        },
        error: () => {
          this.cargandoDetalle.set(false);
        }
      });
    });
  }
  aplicarModoLectura() {
    if (this.readonly()) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  get isEditMode() {
    return this.promocionId() !== null;
  }
  buscarProductos(valor) {
    this.terminoBusqueda.set(valor);
    clearTimeout(this.searchDebounce);
    const termino = valor.trim();
    if (!termino) {
      this.resultadosBusqueda.set([]);
      return;
    }
    this.searchDebounce = setTimeout(() => {
      this.buscando.set(true);
      this.productoService.list({ search: termino, estado: "active" }).subscribe({
        next: (productos) => {
          this.buscando.set(false);
          this.resultadosBusqueda.set(productos);
        },
        error: () => {
          this.buscando.set(false);
          this.resultadosBusqueda.set([]);
        }
      });
    }, 350);
  }
  estaSeleccionado(productoId) {
    return this.productosSeleccionados().has(productoId);
  }
  toggleProducto(producto) {
    if (this.readonly()) {
      return;
    }
    this.productosSeleccionados.update((actuales) => {
      const nuevo = new Map(actuales);
      if (nuevo.has(producto.id)) {
        nuevo.delete(producto.id);
      } else {
        nuevo.set(producto.id, {
          id: producto.id,
          nombre: producto.nombre,
          imagen_principal_url: producto.imagen_principal_url
        });
      }
      return nuevo;
    });
  }
  quitarProducto(productoId) {
    if (this.readonly()) {
      return;
    }
    this.productosSeleccionados.update((actuales) => {
      const nuevo = new Map(actuales);
      nuevo.delete(productoId);
      return nuevo;
    });
  }
  submit() {
    if (this.readonly()) {
      return;
    }
    this.intentoEnviar.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid || this.productosSeleccionados().size === 0) {
      return;
    }
    const value = this.form.getRawValue();
    this.save.emit({
      nombre: value.nombre.trim(),
      porcentaje_descuento: value.porcentaje_descuento,
      fecha_inicio: value.fecha_inicio,
      fecha_fin: value.fecha_fin,
      producto_ids: Array.from(this.productosSeleccionados().keys())
    });
  }
  static \u0275fac = function PromocionForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromocionForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromocionForm, selectors: [["app-promocion-form"]], inputs: { open: [1, "open"], promocionId: [1, "promocionId"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form"], [1, "drawer__form", 3, "formGroup"], [1, "skeleton-row"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Black Week"], [1, "field__error"], ["type", "number", "formControlName", "porcentaje_descuento", "min", "1", "max", "99", "step", "1"], [1, "field-row"], ["type", "date", "formControlName", "fecha_inicio"], ["type", "date", "formControlName", "fecha_fin"], [3, "class"], [1, "producto-picker__seleccionados"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar producto...", 3, "input", "value"], [1, "producto-picker__resultados"], [1, "field__hint"], [1, "producto-picker__item"], ["type", "checkbox", 3, "change", "checked"], [1, "producto-chip"], ["type", "button", "aria-label", "Quitar producto"], ["type", "button", "aria-label", "Quitar producto", 3, "click"], ["name", "close", 2, "width", "11px", "height", "11px"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function PromocionForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PromocionForm_Conditional_0_Template, 9, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  padding: 9px 11px;\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  outline: none;\n  transition: border-color var(--%NS%transition-fast);\n  width: 100%;\n}\n.field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%color-primary);\n}\n.producto-picker__resultados[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 6px;\n  max-height: 160px;\n  overflow-y: auto;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-white);\n}\n.producto-picker__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 6px;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 13px;\n  color: var(--%NS%color-text);\n}\n.producto-picker__item[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.producto-picker__item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 15px;\n  height: 15px;\n  accent-color: var(--%NS%color-primary);\n}\n.producto-picker__seleccionados[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 0;\n}\n.producto-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 6px 5px 10px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n  color: var(--%NS%color-primary);\n  font-size: 12px;\n  font-weight: 600;\n  max-width: 100%;\n}\n.producto-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.producto-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--%NS%color-primary) 16%, white);\n  color: var(--%NS%color-primary);\n}\n.producto-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n/*# sourceMappingURL=promocion-form-MW2GBO5P.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromocionForm, [{
    type: Component,
    args: [{ selector: "app-promocion-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de promoci\xF3n' : isEditMode ? 'Editar promoci\xF3n' : 'Nueva promoci\xF3n' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      @if (cargandoDetalle()) {\r
        <div class="drawer__form">\r
          <div class="skeleton-row"></div>\r
          <div class="skeleton-row"></div>\r
          <div class="skeleton-row"></div>\r
        </div>\r
      } @else {\r
        <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
          <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
            <span class="field__label">Nombre *</span>\r
            <input type="text" formControlName="nombre" placeholder="Ej. Black Week" />\r
            @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
              <span class="field__error">El nombre es obligatorio.</span>\r
            }\r
          </label>\r
\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.porcentaje_descuento.invalid && form.controls.porcentaje_descuento.touched"\r
          >\r
            <span class="field__label">Porcentaje (%) *</span>\r
            <input type="number" formControlName="porcentaje_descuento" min="1" max="99" step="1" />\r
            @if (form.controls.porcentaje_descuento.invalid && form.controls.porcentaje_descuento.touched) {\r
              <span class="field__error">Debe ser mayor a 0 y menor a 100.</span>\r
            }\r
          </label>\r
\r
          <div class="field-row">\r
            <label\r
              class="field"\r
              [class.has-error]="form.controls.fecha_inicio.invalid && form.controls.fecha_inicio.touched"\r
            >\r
              <span class="field__label">Fecha inicio *</span>\r
              <input type="date" formControlName="fecha_inicio" />\r
              @if (form.controls.fecha_inicio.invalid && form.controls.fecha_inicio.touched) {\r
                <span class="field__error">Obligatoria.</span>\r
              }\r
            </label>\r
\r
            <label\r
              class="field"\r
              [class.has-error]="form.controls.fecha_fin.invalid && form.controls.fecha_fin.touched"\r
            >\r
              <span class="field__label">Fecha fin *</span>\r
              <input type="date" formControlName="fecha_fin" />\r
              @if (form.controls.fecha_fin.invalid && form.controls.fecha_fin.touched) {\r
                <span class="field__error">Obligatoria.</span>\r
              }\r
            </label>\r
          </div>\r
\r
          @if (form.hasError('rangoInvalido') && form.controls.fecha_fin.touched) {\r
            <span class="field__error">La fecha fin no puede ser anterior a la fecha inicio.</span>\r
          }\r
\r
          <div class="field">\r
            <span class="field__label">Productos *</span>\r
\r
            @if (!readonly()) {\r
              <label class="search-input">\r
                <app-icon name="search" />\r
                <input\r
                  type="text"\r
                  placeholder="Buscar producto..."\r
                  [value]="terminoBusqueda()"\r
                  (input)="buscarProductos($any($event.target).value)"\r
                />\r
              </label>\r
\r
              @if (buscando()) {\r
                <div class="skeleton-row"></div>\r
              } @else if (resultadosBusqueda().length > 0) {\r
                <ul class="producto-picker__resultados">\r
                  @for (producto of resultadosBusqueda(); track producto.id) {\r
                    <li>\r
                      <label class="producto-picker__item">\r
                        <input\r
                          type="checkbox"\r
                          [checked]="estaSeleccionado(producto.id)"\r
                          (change)="toggleProducto(producto)"\r
                        />\r
                        <span>{{ producto.nombre }}</span>\r
                      </label>\r
                    </li>\r
                  }\r
                </ul>\r
              } @else if (terminoBusqueda()) {\r
                <span class="field__hint">Sin resultados para "{{ terminoBusqueda() }}".</span>\r
              }\r
            }\r
\r
            @if (listaSeleccionados().length === 0) {\r
              <span [class]="intentoEnviar() && !readonly() ? 'field__error' : 'field__hint'">\r
                {{ readonly() ? 'Sin productos asociados.' : 'Selecciona al menos un producto.' }}\r
              </span>\r
            } @else {\r
              <ul class="producto-picker__seleccionados">\r
                @for (producto of listaSeleccionados(); track producto.id) {\r
                  <li class="producto-chip">\r
                    <span>{{ producto.nombre }}</span>\r
                    @if (!readonly()) {\r
                      <button type="button" (click)="quitarProducto(producto.id)" aria-label="Quitar producto">\r
                        <app-icon name="close" style="width: 11px; height: 11px" />\r
                      </button>\r
                    }\r
                  </li>\r
                }\r
              </ul>\r
            }\r
          </div>\r
\r
          <footer class="drawer__footer">\r
            @if (readonly()) {\r
              <button type="button" class="btn btn--ghost" (click)="close.emit()">Cerrar</button>\r
            } @else {\r
              <button type="button" class="btn btn--ghost" (click)="close.emit()" [disabled]="submitting()">\r
                Cancelar\r
              </button>\r
              <button type="submit" class="btn btn--primary" [disabled]="submitting()">\r
                {{ submitting() ? 'Guardando...' : 'Guardar' }}\r
              </button>\r
            }\r
          </footer>\r
        </form>\r
      }\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/features/admin/promociones/promocion-form/promocion-form.scss */\n:host {\n  display: block;\n}\n.field input[type=date],\n.field input[type=number] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 9px 11px;\n  font-size: 13px;\n  color: var(--color-text);\n  outline: none;\n  transition: border-color var(--transition-fast);\n  width: 100%;\n}\n.field input[type=date]:focus,\n.field input[type=number]:focus {\n  border-color: var(--color-primary);\n}\n.producto-picker__resultados {\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 6px;\n  max-height: 160px;\n  overflow-y: auto;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-white);\n}\n.producto-picker__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 6px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  color: var(--color-text);\n}\n.producto-picker__item:hover {\n  background: var(--color-bg);\n}\n.producto-picker__item input[type=checkbox] {\n  flex-shrink: 0;\n  width: 15px;\n  height: 15px;\n  accent-color: var(--color-primary);\n}\n.producto-picker__seleccionados {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 0;\n}\n.producto-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 6px 5px 10px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n  color: var(--color-primary);\n  font-size: 12px;\n  font-weight: 600;\n  max-width: 100%;\n}\n.producto-chip span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.producto-chip button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--color-primary) 16%, white);\n  color: var(--color-primary);\n}\n.producto-chip button:hover {\n  background: var(--color-primary);\n  color: var(--color-white);\n}\n/*# sourceMappingURL=promocion-form-MW2GBO5P.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], promocionId: [{ type: Input, args: [{ isSignal: true, alias: "promocionId", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromocionForm, { className: "PromocionForm", filePath: "src/app/features/admin/promociones/promocion-form/promocion-form.ts", lineNumber: 40 });
})();

// src/app/features/admin/promociones/promociones.ts
var _forTrack02 = ($index, $item) => $item.id;
function Promociones_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 9)(2, "div", 9)(3, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function Promociones_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 10);
    \u0275\u0275text(2, "No se pudieron cargar las promociones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function Promociones_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function Promociones_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275text(2, "A\xFAn no hay promociones registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea la primera promoci\xF3n para aplicar un descuento a tus productos.");
    \u0275\u0275elementEnd()();
  }
}
function Promociones_Conditional_13_For_17_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function Promociones_Conditional_13_For_17_Conditional_18_Conditional_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const promocion_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activar(promocion_r4, $event));
    });
    \u0275\u0275element(1, "app-icon", 28);
    \u0275\u0275text(2, " Activar ");
    \u0275\u0275elementEnd();
  }
}
function Promociones_Conditional_13_For_17_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function Promociones_Conditional_13_For_17_Conditional_18_Conditional_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const promocion_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.desactivar(promocion_r4, $event));
    });
    \u0275\u0275element(1, "app-icon", 28);
    \u0275\u0275text(2, " Desactivar ");
    \u0275\u0275elementEnd();
  }
}
function Promociones_Conditional_13_For_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function Promociones_Conditional_13_For_17_Conditional_18_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 21);
    \u0275\u0275listener("click", function Promociones_Conditional_13_For_17_Conditional_18_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const promocion_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(promocion_r4, $event));
    });
    \u0275\u0275element(2, "app-icon", 22);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function Promociones_Conditional_13_For_17_Conditional_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const promocion_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(promocion_r4));
    });
    \u0275\u0275element(5, "app-icon", 23);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Promociones_Conditional_13_For_17_Conditional_18_Conditional_7_Template, 3, 0, "button", 24)(8, Promociones_Conditional_13_For_17_Conditional_18_Conditional_8_Template, 3, 0, "button", 25);
    \u0275\u0275elementStart(9, "button", 26);
    \u0275\u0275listener("click", function Promociones_Conditional_13_For_17_Conditional_18_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const promocion_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminar(promocion_r4, $event));
    });
    \u0275\u0275element(10, "app-icon", 27);
    \u0275\u0275text(11, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const promocion_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275conditional(promocion_r4.estado === "DESACTIVADA" ? 7 : 8);
  }
}
function Promociones_Conditional_13_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 16)(16, "button", 17);
    \u0275\u0275listener("click", function Promociones_Conditional_13_For_17_Template_button_click_16_listener($event) {
      const promocion_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(promocion_r4.id, $event));
    });
    \u0275\u0275element(17, "app-icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, Promociones_Conditional_13_For_17_Conditional_18_Template, 12, 1, "div", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const promocion_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promocion_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", promocion_r4.porcentaje_descuento, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 9, promocion_r4.fecha_inicio, "d MMM y"), " - ", \u0275\u0275pipeBind2(8, 12, promocion_r4.fecha_fin, "d MMM y"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.claseEstado(promocion_r4.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.etiquetaEstado(promocion_r4.estado), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promocion_r4.cantidad_productos);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === promocion_r4.id ? 18 : -1);
  }
}
function Promociones_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Descuento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Vigencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, Promociones_Conditional_13_For_17_Template, 19, 15, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.promociones());
  }
}
var ETIQUETAS_ESTADO = {
  PROGRAMADA: "Programada",
  ACTIVA: "Activa",
  FINALIZADA: "Finalizada",
  DESACTIVADA: "Desactivada"
};
var CLASES_ESTADO = {
  PROGRAMADA: "badge--programada",
  ACTIVA: "badge--activa",
  FINALIZADA: "badge--finalizada",
  DESACTIVADA: "badge--inactive"
};
var ESTADOS_GESTIONABLES = ["PROGRAMADA", "ACTIVA"];
var Promociones = class _Promociones {
  service = inject(PromocionService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  promociones = signal(
    [],
    ...ngDevMode ? [{ debugName: "promociones" }] : (
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
  drawerOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "drawerOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingId = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingId" }] : (
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
  constructor() {
    this.load();
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.service.list().subscribe({
      next: (promociones) => {
        this.promociones.set(promociones);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.promociones.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingId.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(promocion) {
    this.openMenuId.set(null);
    this.editingId.set(promocion.id);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(promocion, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingId.set(promocion.id);
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
  esGestionable(promocion) {
    return ESTADOS_GESTIONABLES.includes(promocion.estado);
  }
  save(payload) {
    const id = this.editingId();
    this.submitting.set(true);
    const request$ = id ? this.service.update(id, payload) : this.service.create(payload);
    request$.subscribe({
      next: (promocion) => {
        this.submitting.set(false);
        this.drawerOpen.set(false);
        this.toast.success(id ? "Promoci\xF3n actualizada correctamente." : "Promoci\xF3n creada correctamente.");
        this.load();
        void promocion;
      },
      error: (err) => {
        this.submitting.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo guardar la promoci\xF3n. Int\xE9ntalo nuevamente.");
      }
    });
  }
  async activar(promocion, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFActivar promoci\xF3n?",
      message: `"${promocion.nombre}" volver\xE1 a aplicar el descuento.`,
      confirmText: "Activar",
      danger: false
    });
    if (!confirmed) {
      return;
    }
    this.service.activate(promocion.id).subscribe({
      next: () => {
        this.toast.success("Promoci\xF3n activada.");
        this.load();
      },
      error: () => this.toast.error("No se pudo activar la promoci\xF3n. Int\xE9ntalo nuevamente.")
    });
  }
  async desactivar(promocion, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFDesactivar promoci\xF3n?",
      message: `"${promocion.nombre}" dejar\xE1 de aplicar el descuento de inmediato.`,
      confirmText: "Desactivar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.service.deactivate(promocion.id).subscribe({
      next: () => {
        this.toast.success("Promoci\xF3n desactivada.");
        this.load();
      },
      error: () => this.toast.error("No se pudo desactivar la promoci\xF3n. Int\xE9ntalo nuevamente.")
    });
  }
  async eliminar(promocion, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar promoci\xF3n?",
      message: `Se eliminar\xE1 permanentemente "${promocion.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.service.delete(promocion.id).subscribe({
      next: () => {
        this.toast.success("Promoci\xF3n eliminada.");
        this.load();
      },
      error: () => this.toast.error("No se pudo eliminar la promoci\xF3n. Int\xE9ntalo nuevamente.")
    });
  }
  etiquetaEstado(estado) {
    return ETIQUETAS_ESTADO[estado];
  }
  claseEstado(estado) {
    return CLASES_ESTADO[estado];
  }
  static \u0275fac = function Promociones_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Promociones)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Promociones, selectors: [["app-promociones"]], hostBindings: function Promociones_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function Promociones_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 15, vars: 5, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "promocionId", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "cell-secondary"], [1, "badge"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["type", "button", 1, "row-actions__item"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"], ["name", "power"]], template: function Promociones_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Promociones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Gestiona los descuentos porcentuales sobre productos del cat\xE1logo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function Promociones_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nueva ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, Promociones_Conditional_10_Template, 4, 0, "div", 4)(11, Promociones_Conditional_11_Template, 7, 1, "div", 5)(12, Promociones_Conditional_12_Template, 5, 0, "div", 6)(13, Promociones_Conditional_13_Template, 18, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-promocion-form", 8);
      \u0275\u0275listener("save", function Promociones_Template_app_promocion_form_save_14_listener($event) {
        return ctx.save($event);
      })("close", function Promociones_Template_app_promocion_form_close_14_listener() {
        return ctx.closeDrawer();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.errorMessage() ? 11 : ctx.promociones().length === 0 ? 12 : 13);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("promocionId", ctx.editingId())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [Icon, PromocionForm, DatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.badge--programada[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  color: var(--%NS%color-primary);\n}\n.badge--%NS%programada[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--%NS%color-primary);\n}\n.badge--activa[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.badge--%NS%activa[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--%NS%color-success-text);\n}\n.badge--finalizada[_ngcontent-%COMP%] {\n  background: var(--%NS%color-inactive-bg);\n  color: var(--%NS%color-inactive-text);\n}\n.badge--%NS%finalizada[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--%NS%color-inactive-text);\n}\n/*# sourceMappingURL=promociones-P75YOROJ.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Promociones, [{
    type: Component,
    args: [{ selector: "app-promociones", imports: [DatePipe, Icon, PromocionForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Promociones</h3>\r
      <p>Gestiona los descuentos porcentuales sobre productos del cat\xE1logo.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nueva\r
    </button>\r
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
      <span class="state-block__title">No se pudieron cargar las promociones</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (promociones().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay promociones registradas</span>\r
      <span>Crea la primera promoci\xF3n para aplicar un descuento a tus productos.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Nombre</th>\r
            <th>Descuento</th>\r
            <th>Vigencia</th>\r
            <th>Estado</th>\r
            <th>Productos</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (promocion of promociones(); track promocion.id) {\r
            <tr>\r
              <td class="cell-title">{{ promocion.nombre }}</td>\r
              <td class="cell-secondary">-{{ promocion.porcentaje_descuento }}%</td>\r
              <td class="cell-secondary">\r
                {{ promocion.fecha_inicio | date: 'd MMM y' }} - {{ promocion.fecha_fin | date: 'd MMM y' }}\r
              </td>\r
              <td>\r
                <span class="badge" [class]="claseEstado(promocion.estado)">\r
                  {{ etiquetaEstado(promocion.estado) }}\r
                </span>\r
              </td>\r
              <td class="cell-secondary">{{ promocion.cantidad_productos }}</td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(promocion.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === promocion.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(promocion, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(promocion)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      @if (promocion.estado === 'DESACTIVADA') {\r
                        <button\r
                          type="button"\r
                          class="row-actions__item"\r
                          (click)="activar(promocion, $event)"\r
                        >\r
                          <app-icon name="power" /> Activar\r
                        </button>\r
                      } @else {\r
                        <button\r
                          type="button"\r
                          class="row-actions__item row-actions__item--danger"\r
                          (click)="desactivar(promocion, $event)"\r
                        >\r
                          <app-icon name="power" /> Desactivar\r
                        </button>\r
                      }\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="eliminar(promocion, $event)"\r
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
<app-promocion-form\r
  [open]="drawerOpen()"\r
  [promocionId]="editingId()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ['/* src/app/features/admin/promociones/promociones.scss */\n:host {\n  display: block;\n}\n.badge--programada {\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  color: var(--color-primary);\n}\n.badge--programada::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-primary);\n}\n.badge--activa {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.badge--activa::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-success-text);\n}\n.badge--finalizada {\n  background: var(--color-inactive-bg);\n  color: var(--color-inactive-text);\n}\n.badge--finalizada::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-inactive-text);\n}\n/*# sourceMappingURL=promociones-P75YOROJ.css.map */\n'] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Promociones, { className: "Promociones", filePath: "src/app/features/admin/promociones/promociones.ts", lineNumber: 46 });
})();
export {
  Promociones
};
//# debugId=43530639-b311-5677-a159-325e50fca3db
//# sourceMappingURL=chunk-7G2TBEBA.js.map
