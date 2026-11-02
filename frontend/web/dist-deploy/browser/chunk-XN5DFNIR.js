import {
  ColeccionAdminService,
  TemporadaAdminService
} from "./chunk-GYWJGJBX.js";
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
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  DatePipe
} from "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  HostListener,
  Input,
  Output,
  effect,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/coleccion-management/coleccion-form/coleccion-form.ts
var _forTrack0 = ($index, $item) => $item.id;
function ColeccionForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function ColeccionForm_Conditional_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const temporada_r3 = ctx.$implicit;
    \u0275\u0275property("value", temporada_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(temporada_r3.nombre);
  }
}
function ColeccionForm_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Selecciona una temporada.");
    \u0275\u0275elementEnd();
  }
}
function ColeccionForm_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "Colecci\xF3n destacada del Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4, "Guarda la colecci\xF3n primero; luego podr\xE1s marcarla como destacada aqu\xED mismo.");
    \u0275\u0275elementEnd()();
  }
}
function ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(ctx_r1.imagenDestacadaUrl()), \u0275\u0275sanitizeUrl);
  }
}
function ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "app-icon", 29);
    \u0275\u0275elementEnd();
  }
}
function ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "input", 31);
    \u0275\u0275listener("change", function ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_8_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onImagenSeleccionada($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.subiendoImagen() ? "Cargando\u2026" : ctx_r1.imagenDestacadaUrl() ? "Cambiar imagen" : "Subir imagen", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.subiendoImagen());
  }
}
function ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imagenError());
  }
}
function ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "Imagen destacada del inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4, "Se usa \xFAnicamente en el banner principal del Home. Idealmente PNG o WEBP con fondo transparente.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275conditionalCreate(6, ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_6_Template, 1, 1, "img", 26)(7, ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_7_Template, 2, 0, "div", 27);
    \u0275\u0275conditionalCreate(8, ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_8_Template, 4, 2, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Conditional_9_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.imagenDestacadaUrl() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.readonly() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imagenError() ? 9 : -1);
  }
}
function ColeccionForm_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 15)(1, "span", 8);
    \u0275\u0275text(2, "Mostrar como colecci\xF3n destacada en inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16)(4, "input", 24);
    \u0275\u0275listener("change", function ColeccionForm_Conditional_0_Conditional_36_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDestacadaChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275element(6, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, ColeccionForm_Conditional_0_Conditional_36_Conditional_9_Template, 10, 3, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.esDestacada())("disabled", ctx_r1.readonly() || ctx_r1.actualizandoDestacada());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.esDestacada() ? "S\xED" : "No");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.esDestacada() ? 9 : -1);
  }
}
function ColeccionForm_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ColeccionForm_Conditional_0_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function ColeccionForm_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ColeccionForm_Conditional_0_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar colecci\xF3n", " ");
  }
}
function ColeccionForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ColeccionForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function ColeccionForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ColeccionForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function ColeccionForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, ColeccionForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 7)(14, "span", 8);
    \u0275\u0275text(15, "Temporada *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 11)(17, "option", 12);
    \u0275\u0275text(18, "Selecciona una temporada");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, ColeccionForm_Conditional_0_For_20_Template, 2, 2, "option", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(21, ColeccionForm_Conditional_0_Conditional_21_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 7)(23, "span", 8);
    \u0275\u0275text(24, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 15)(27, "span", 8);
    \u0275\u0275text(28, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 16);
    \u0275\u0275element(30, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(31, "span", 18);
    \u0275\u0275element(32, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 20);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, ColeccionForm_Conditional_0_Conditional_35_Template, 5, 0, "div", 7)(36, ColeccionForm_Conditional_0_Conditional_36_Template, 10, 4);
    \u0275\u0275elementStart(37, "footer", 21);
    \u0275\u0275conditionalCreate(38, ColeccionForm_Conditional_0_Conditional_38_Template, 2, 0, "button", 22)(39, ColeccionForm_Conditional_0_Conditional_39_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de colecci\xF3n" : ctx_r1.isEditMode ? "Editar colecci\xF3n" : "Nueva colecci\xF3n");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.temporada_id.invalid && ctx_r1.form.controls.temporada_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.temporadas());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.temporada_id.invalid && ctx_r1.form.controls.temporada_id.touched ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activa" : "Inactiva");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isEditMode ? 35 : 36);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.readonly() ? 38 : 39);
  }
}
var FORMATOS_IMAGEN_PERMITIDOS = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
var TAMANO_MAXIMO_IMAGEN_BYTES = 5 * 1024 * 1024;
var ColeccionForm = class _ColeccionForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  coleccion = input(
    null,
    ...ngDevMode ? [{ debugName: "coleccion" }] : (
      /* istanbul ignore next */
      []
    )
  );
  temporadas = input(
    [],
    ...ngDevMode ? [{ debugName: "temporadas" }] : (
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
  // Marcar/desmarcar como destacada afecta a OTRA fila de la tabla (deja de
  // estarlo), así que el padre necesita recargar el listado -- este cambio
  // no pasa por el formulario/`save`, se aplica al instante como la imagen.
  refresh = output();
  fb = inject(FormBuilder);
  coleccionService = inject(ColeccionAdminService);
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.maxLength(120)]],
    temporada_id: [null, [Validators.required]],
    descripcion: [""],
    is_active: [true]
  });
  esDestacada = signal(
    false,
    ...ngDevMode ? [{ debugName: "esDestacada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  actualizandoDestacada = signal(
    false,
    ...ngDevMode ? [{ debugName: "actualizandoDestacada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenDestacadaUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenDestacadaUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subiendoImagen = signal(
    false,
    ...ngDevMode ? [{ debugName: "subiendoImagen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenError = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resolveMediaUrl = resolveMediaUrl;
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const coleccion = this.coleccion();
      this.imagenError.set(null);
      if (coleccion) {
        this.form.reset({
          nombre: coleccion.nombre,
          temporada_id: coleccion.temporada.id,
          descripcion: coleccion.descripcion ?? "",
          is_active: coleccion.is_active
        });
        this.esDestacada.set(coleccion.es_destacada_inicio);
        this.imagenDestacadaUrl.set(coleccion.imagen_destacada_url);
      } else {
        this.form.reset({ nombre: "", temporada_id: null, descripcion: "", is_active: true });
        this.esDestacada.set(false);
        this.imagenDestacadaUrl.set(null);
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.coleccion() !== null;
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
      temporada_id: value.temporada_id,
      descripcion: value.descripcion.trim() || null,
      is_active: value.is_active
    });
  }
  onDestacadaChange(event) {
    const checked = event.target.checked;
    const coleccion = this.coleccion();
    if (!coleccion) {
      return;
    }
    this.actualizandoDestacada.set(true);
    this.coleccionService.setDestacadaInicio(coleccion.id, checked).subscribe({
      next: (actualizada) => {
        this.actualizandoDestacada.set(false);
        this.esDestacada.set(actualizada.es_destacada_inicio);
        this.refresh.emit();
      },
      error: () => {
        this.actualizandoDestacada.set(false);
        this.esDestacada.set(!checked);
      }
    });
  }
  onImagenSeleccionada(event) {
    const input2 = event.target;
    const archivo = input2.files?.[0];
    input2.value = "";
    const coleccion = this.coleccion();
    if (!archivo || !coleccion) {
      return;
    }
    if (!FORMATOS_IMAGEN_PERMITIDOS.includes(archivo.type)) {
      this.imagenError.set("La imagen debe ser un archivo JPG, JPEG, PNG o WEBP.");
      return;
    }
    if (archivo.size > TAMANO_MAXIMO_IMAGEN_BYTES) {
      this.imagenError.set("La imagen no puede superar los 5 MB.");
      return;
    }
    this.imagenError.set(null);
    this.subiendoImagen.set(true);
    this.coleccionService.setImagenDestacada(coleccion.id, archivo).subscribe({
      next: (actualizada) => {
        this.subiendoImagen.set(false);
        this.imagenDestacadaUrl.set(actualizada.imagen_destacada_url);
        this.refresh.emit();
      },
      error: () => {
        this.subiendoImagen.set(false);
        this.imagenError.set("No se pudo cargar la imagen. Intenta nuevamente.");
      }
    });
  }
  static \u0275fac = function ColeccionForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColeccionForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColeccionForm, selectors: [["app-coleccion-form"]], inputs: { open: [1, "open"], coleccion: [1, "coleccion"], temporadas: [1, "temporadas"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close", refresh: "refresh" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Urban Summer"], [1, "field__error"], ["formControlName", "temporada_id"], ["disabled", "", 3, "value"], [3, "value"], ["formControlName", "descripcion", "rows", "3", "placeholder", "Opcional"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], [1, "field__hint"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "image-principal"], ["alt", "Imagen destacada del inicio", 1, "image-principal__preview", 3, "src"], [1, "image-principal__placeholder"], [1, "image-principal__actions"], ["name", "catalog", 2, "width", "22px", "height", "22px"], [1, "btn", "btn--ghost", "btn--sm", "image-upload-btn"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function ColeccionForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ColeccionForm_Conditional_0_Template, 40, 12, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.image-upload-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-upload-btn[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.image-principal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.image-principal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.image-principal__preview[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--%NS%color-border);\n  flex-shrink: 0;\n}\n.image-principal__placeholder[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-card-bg);\n  border: 1px dashed var(--%NS%color-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=coleccion-form-UVNQHRD3.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColeccionForm, [{
    type: Component,
    args: [{ selector: "app-coleccion-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de colecci\xF3n' : isEditMode ? 'Editar colecci\xF3n' : 'Nueva colecci\xF3n' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Urban Summer" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
\r
        <label\r
          class="field"\r
          [class.has-error]="form.controls.temporada_id.invalid && form.controls.temporada_id.touched"\r
        >\r
          <span class="field__label">Temporada *</span>\r
          <select formControlName="temporada_id">\r
            <option [value]="null" disabled>Selecciona una temporada</option>\r
            @for (temporada of temporadas(); track temporada.id) {\r
              <option [value]="temporada.id">{{ temporada.nombre }}</option>\r
            }\r
          </select>\r
          @if (form.controls.temporada_id.invalid && form.controls.temporada_id.touched) {\r
            <span class="field__error">Selecciona una temporada.</span>\r
          }\r
        </label>\r
\r
        <label class="field">\r
          <span class="field__label">Descripci\xF3n</span>\r
          <textarea formControlName="descripcion" rows="3" placeholder="Opcional"></textarea>\r
        </label>\r
\r
        <label class="field field--switch">\r
          <span class="field__label">Estado</span>\r
          <span class="switch">\r
            <input type="checkbox" formControlName="is_active" />\r
            <span class="switch__track"><span class="switch__thumb"></span></span>\r
            <span class="switch__text">{{ form.controls.is_active.value ? 'Activa' : 'Inactiva' }}</span>\r
          </span>\r
        </label>\r
\r
        @if (!isEditMode) {\r
          <div class="field">\r
            <span class="field__label">Colecci\xF3n destacada del Home</span>\r
            <span class="field__hint">Guarda la colecci\xF3n primero; luego podr\xE1s marcarla como destacada aqu\xED mismo.</span>\r
          </div>\r
        } @else {\r
          <label class="field field--switch">\r
            <span class="field__label">Mostrar como colecci\xF3n destacada en inicio</span>\r
            <span class="switch">\r
              <input\r
                type="checkbox"\r
                [checked]="esDestacada()"\r
                [disabled]="readonly() || actualizandoDestacada()"\r
                (change)="onDestacadaChange($event)"\r
              />\r
              <span class="switch__track"><span class="switch__thumb"></span></span>\r
              <span class="switch__text">{{ esDestacada() ? 'S\xED' : 'No' }}</span>\r
            </span>\r
          </label>\r
\r
          @if (esDestacada()) {\r
            <div class="field">\r
              <span class="field__label">Imagen destacada del inicio</span>\r
              <span class="field__hint">Se usa \xFAnicamente en el banner principal del Home. Idealmente PNG o WEBP con fondo transparente.</span>\r
              <div class="image-principal">\r
                @if (imagenDestacadaUrl()) {\r
                  <img\r
                    [src]="resolveMediaUrl(imagenDestacadaUrl())"\r
                    alt="Imagen destacada del inicio"\r
                    class="image-principal__preview"\r
                  />\r
                } @else {\r
                  <div class="image-principal__placeholder">\r
                    <app-icon name="catalog" style="width: 22px; height: 22px" />\r
                  </div>\r
                }\r
                @if (!readonly()) {\r
                  <div class="image-principal__actions">\r
                    <label class="btn btn--ghost btn--sm image-upload-btn">\r
                      {{ subiendoImagen() ? 'Cargando\u2026' : imagenDestacadaUrl() ? 'Cambiar imagen' : 'Subir imagen' }}\r
                      <input\r
                        type="file"\r
                        accept="image/jpeg,image/png,image/webp"\r
                        [disabled]="subiendoImagen()"\r
                        (change)="onImagenSeleccionada($event)"\r
                      />\r
                    </label>\r
                  </div>\r
                }\r
              </div>\r
              @if (imagenError()) {\r
                <span class="field__error">{{ imagenError() }}</span>\r
              }\r
            </div>\r
          }\r
        }\r
\r
        <footer class="drawer__footer">\r
          @if (readonly()) {\r
            <button type="button" class="btn btn--ghost" (click)="close.emit()">Cerrar</button>\r
          } @else {\r
            <button type="button" class="btn btn--ghost" (click)="close.emit()" [disabled]="submitting()">\r
              Cancelar\r
            </button>\r
            <button type="submit" class="btn btn--primary" [disabled]="submitting()">\r
              {{ submitting() ? 'Guardando\u2026' : 'Guardar colecci\xF3n' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/coleccion-management/coleccion-form/coleccion-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n.image-upload-btn {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-upload-btn input[type=file] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.image-principal {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.image-principal__actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.image-principal__preview {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--color-border);\n  flex-shrink: 0;\n}\n.image-principal__placeholder {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-sm);\n  background: var(--color-card-bg);\n  border: 1px dashed var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=coleccion-form-UVNQHRD3.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], coleccion: [{ type: Input, args: [{ isSignal: true, alias: "coleccion", required: false }] }], temporadas: [{ type: Input, args: [{ isSignal: true, alias: "temporadas", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }], refresh: [{ type: Output, args: ["refresh"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColeccionForm, { className: "ColeccionForm", filePath: "src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/coleccion-management/coleccion-form/coleccion-form.ts", lineNumber: 17 });
})();

// src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/coleccion-management/coleccion-management.ts
var _forTrack02 = ($index, $item) => $item.id;
function ColeccionManagement_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const temporada_r1 = ctx.$implicit;
    \u0275\u0275property("value", temporada_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(temporada_r1.nombre);
  }
}
function ColeccionManagement_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 19)(2, "div", 19)(3, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function ColeccionManagement_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 20);
    \u0275\u0275text(2, "No se pudieron cargar las colecciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function ColeccionManagement_Conditional_27_Template_button_click_5_listener() {
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
function ColeccionManagement_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 20);
    \u0275\u0275text(2, "A\xFAn no hay colecciones registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea la primera colecci\xF3n para empezar a organizar el cat\xE1logo.");
    \u0275\u0275elementEnd()();
  }
}
function ColeccionManagement_Conditional_29_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Destacada");
    \u0275\u0275elementEnd();
  }
}
function ColeccionManagement_Conditional_29_For_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function ColeccionManagement_Conditional_29_For_15_Conditional_14_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 32);
    \u0275\u0275listener("click", function ColeccionManagement_Conditional_29_For_15_Conditional_14_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const coleccion_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openView(coleccion_r5, $event));
    });
    \u0275\u0275element(2, "app-icon", 33);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 32);
    \u0275\u0275listener("click", function ColeccionManagement_Conditional_29_For_15_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const coleccion_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(coleccion_r5));
    });
    \u0275\u0275element(5, "app-icon", 34);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function ColeccionManagement_Conditional_29_For_15_Conditional_14_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const coleccion_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleStatus(coleccion_r5, $event));
    });
    \u0275\u0275element(8, "app-icon", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 36);
    \u0275\u0275listener("click", function ColeccionManagement_Conditional_29_For_15_Conditional_14_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const coleccion_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteColeccion(coleccion_r5, $event));
    });
    \u0275\u0275element(11, "app-icon", 37);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const coleccion_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", coleccion_r5.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", coleccion_r5.is_active ? "Desactivar" : "Activar", " ");
  }
}
function ColeccionManagement_Conditional_29_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, ColeccionManagement_Conditional_29_For_15_Conditional_3_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "app-status-badge", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 27)(12, "button", 28);
    \u0275\u0275listener("click", function ColeccionManagement_Conditional_29_For_15_Template_button_click_12_listener($event) {
      const coleccion_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu(coleccion_r5.id, $event));
    });
    \u0275\u0275element(13, "app-icon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, ColeccionManagement_Conditional_29_For_15_Conditional_14_Template, 13, 3, "div", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const coleccion_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", coleccion_r5.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(coleccion_r5.es_destacada_inicio ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coleccion_r5.temporada.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coleccion_r5.descripcion || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("active", coleccion_r5.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.openMenuId() === coleccion_r5.id ? 14 : -1);
  }
}
function ColeccionManagement_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Colecci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Temporada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ColeccionManagement_Conditional_29_For_15_Template, 15, 6, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.colecciones());
  }
}
var ColeccionManagement = class _ColeccionManagement {
  coleccionService = inject(ColeccionAdminService);
  temporadaService = inject(TemporadaAdminService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  colecciones = signal(
    [],
    ...ngDevMode ? [{ debugName: "colecciones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  temporadas = signal(
    [],
    ...ngDevMode ? [{ debugName: "temporadas" }] : (
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
  temporadaFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "temporadaFilter" }] : (
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
  editingColeccion = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingColeccion" }] : (
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
    this.temporadaService.list({ estado: "active" }).subscribe({
      next: (temporadas) => this.temporadas.set(temporadas)
    });
    this.load();
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  onTemporadaFilterChange(value) {
    this.temporadaFilter.set(value ? Number(value) : "");
    this.load();
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.coleccionService.list({
      search: this.searchTerm() || void 0,
      temporada_id: this.temporadaFilter() || void 0,
      estado: this.statusFilter()
    }).subscribe({
      next: (colecciones) => {
        this.colecciones.set(colecciones);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.colecciones.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingColeccion.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(coleccion) {
    this.openMenuId.set(null);
    this.editingColeccion.set(coleccion);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(coleccion, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingColeccion.set(coleccion);
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
    const editing = this.editingColeccion();
    this.submitting.set(true);
    const request$ = editing ? this.coleccionService.update(editing.id, payload) : this.coleccionService.create(payload);
    request$.subscribe({
      next: () => {
        this.submitting.set(false);
        this.drawerOpen.set(false);
        this.toast.success(editing ? "Colecci\xF3n actualizada correctamente." : "Colecci\xF3n creada correctamente.");
        this.load();
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe una colecci\xF3n con ese nombre en esa temporada.");
        } else if (err.status === 422) {
          this.toast.error("La temporada seleccionada no es v\xE1lida.");
        } else {
          this.toast.error("No se pudo guardar la colecci\xF3n. Intenta nuevamente.");
        }
      }
    });
  }
  async toggleStatus(coleccion, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (coleccion.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar colecci\xF3n?",
        message: "La colecci\xF3n dejar\xE1 de estar disponible para nuevos productos.",
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.coleccionService.setActive(coleccion.id, !coleccion.is_active).subscribe({
      next: () => {
        this.toast.success(coleccion.is_active ? "Colecci\xF3n desactivada." : "Colecci\xF3n activada correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado de la colecci\xF3n.")
    });
  }
  async deleteColeccion(coleccion, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar colecci\xF3n?",
      message: `Se eliminar\xE1 permanentemente "${coleccion.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.coleccionService.delete(coleccion.id).subscribe({
      next: () => {
        this.toast.success("Colecci\xF3n eliminada correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar esta colecci\xF3n porque tiene productos asociados.");
        } else if (err.status === 404) {
          this.toast.error("La colecci\xF3n no existe o ya fue eliminada.");
        } else {
          this.toast.error("No se pudo eliminar la colecci\xF3n.");
        }
      }
    });
  }
  static \u0275fac = function ColeccionManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColeccionManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColeccionManagement, selectors: [["app-coleccion-management"]], hostBindings: function ColeccionManagement_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ColeccionManagement_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 31, vars: 9, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar colecci\xF3n...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "refresh", "open", "coleccion", "temporadas", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "badge", "badge--featured"], [1, "cell-secondary"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function ColeccionManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Colecciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Administra las colecciones agrupadas por temporada.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function ColeccionManagement_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nueva colecci\xF3n ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("ngModelChange", function ColeccionManagement_Template_input_ngModelChange_13_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function ColeccionManagement_Template_select_ngModelChange_14_listener($event) {
        return ctx.onTemporadaFilterChange($event);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Todas las temporadas");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(17, ColeccionManagement_For_18_Template, 2, 2, "option", 10, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(19, "select", 8);
      \u0275\u0275listener("ngModelChange", function ColeccionManagement_Template_select_ngModelChange_19_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Activas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 13);
      \u0275\u0275text(25, "Inactivas");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, ColeccionManagement_Conditional_26_Template, 4, 0, "div", 14)(27, ColeccionManagement_Conditional_27_Template, 7, 1, "div", 15)(28, ColeccionManagement_Conditional_28_Template, 5, 0, "div", 16)(29, ColeccionManagement_Conditional_29_Template, 16, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "app-coleccion-form", 18);
      \u0275\u0275listener("save", function ColeccionManagement_Template_app_coleccion_form_save_30_listener($event) {
        return ctx.save($event);
      })("close", function ColeccionManagement_Template_app_coleccion_form_close_30_listener() {
        return ctx.closeDrawer();
      })("refresh", function ColeccionManagement_Template_app_coleccion_form_refresh_30_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.temporadaFilter());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.temporadas());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.statusFilter());
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 26 : ctx.errorMessage() ? 27 : ctx.colecciones().length === 0 ? 28 : 29);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("coleccion", ctx.editingColeccion())("temporadas", ctx.temporadas())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, ColeccionForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.badge--featured[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary-dark);\n}\n/*# sourceMappingURL=coleccion-management-OEDAIXEM.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColeccionManagement, [{
    type: Component,
    args: [{ selector: "app-coleccion-management", imports: [FormsModule, Icon, StatusBadge, ColeccionForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Colecciones</h3>\r
      <p>Administra las colecciones agrupadas por temporada.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nueva colecci\xF3n\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar colecci\xF3n..."\r
        [ngModel]="searchTerm()"\r
        (ngModelChange)="onSearchChange($event)"\r
      />\r
    </label>\r
\r
    <select\r
      class="status-select"\r
      [ngModel]="temporadaFilter()"\r
      (ngModelChange)="onTemporadaFilterChange($event)"\r
    >\r
      <option value="">Todas las temporadas</option>\r
      @for (temporada of temporadas(); track temporada.id) {\r
        <option [value]="temporada.id">{{ temporada.nombre }}</option>\r
      }\r
    </select>\r
\r
    <select\r
      class="status-select"\r
      [ngModel]="statusFilter()"\r
      (ngModelChange)="onStatusFilterChange($event)"\r
    >\r
      <option value="all">Todos los estados</option>\r
      <option value="active">Activas</option>\r
      <option value="inactive">Inactivas</option>\r
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
      <span class="state-block__title">No se pudieron cargar las colecciones</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (colecciones().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay colecciones registradas</span>\r
      <span>Crea la primera colecci\xF3n para empezar a organizar el cat\xE1logo.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Colecci\xF3n</th>\r
            <th>Temporada</th>\r
            <th>Descripci\xF3n</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (coleccion of colecciones(); track coleccion.id) {\r
            <tr>\r
              <td class="cell-title">\r
                {{ coleccion.nombre }}\r
                @if (coleccion.es_destacada_inicio) {\r
                  <span class="badge badge--featured">Destacada</span>\r
                }\r
              </td>\r
              <td>{{ coleccion.temporada.nombre }}</td>\r
              <td class="cell-secondary">{{ coleccion.descripcion || '\u2014' }}</td>\r
              <td><app-status-badge [active]="coleccion.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(coleccion.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === coleccion.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(coleccion, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(coleccion)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="coleccion.is_active"\r
                        (click)="toggleStatus(coleccion, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ coleccion.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteColeccion(coleccion, $event)"\r
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
<app-coleccion-form\r
  [open]="drawerOpen()"\r
  [coleccion]="editingColeccion()"\r
  [temporadas]="temporadas()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
  (refresh)="load()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/coleccion-management/coleccion-management.scss */\n:host {\n  display: block;\n}\n.badge--featured {\n  margin-left: 8px;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary-dark);\n}\n/*# sourceMappingURL=coleccion-management-OEDAIXEM.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColeccionManagement, { className: "ColeccionManagement", filePath: "src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/coleccion-management/coleccion-management.ts", lineNumber: 18 });
})();

// src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporada-management/temporada-form/temporada-form.ts
function TemporadaForm_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function TemporadaForm_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function TemporadaForm_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function TemporadaForm_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "La fecha de fin no puede ser anterior a la fecha de inicio.");
    \u0275\u0275elementEnd();
  }
}
function TemporadaForm_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function TemporadaForm_Conditional_0_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function TemporadaForm_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function TemporadaForm_Conditional_0_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : "Guardar temporada", " ");
  }
}
function TemporadaForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function TemporadaForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function TemporadaForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function TemporadaForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function TemporadaForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label", 7)(9, "span", 8);
    \u0275\u0275text(10, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(12, TemporadaForm_Conditional_0_Conditional_12_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "label", 7)(15, "span", 8);
    \u0275\u0275text(16, "Fecha de inicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(18, TemporadaForm_Conditional_0_Conditional_18_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 7)(20, "span", 8);
    \u0275\u0275text(21, "Fecha de fin *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(23, TemporadaForm_Conditional_0_Conditional_23_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, TemporadaForm_Conditional_0_Conditional_24_Template, 2, 0, "span", 10);
    \u0275\u0275elementStart(25, "label", 14)(26, "span", 8);
    \u0275\u0275text(27, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 15);
    \u0275\u0275element(29, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(30, "span", 17);
    \u0275\u0275element(31, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 19);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "footer", 20);
    \u0275\u0275conditionalCreate(35, TemporadaForm_Conditional_0_Conditional_35_Template, 2, 0, "button", 21)(36, TemporadaForm_Conditional_0_Conditional_36_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.readonly() ? "Detalle de temporada" : ctx_r1.isEditMode ? "Editar temporada" : "Nueva temporada");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.fecha_inicio.invalid && ctx_r1.form.controls.fecha_inicio.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.fecha_inicio.invalid && ctx_r1.form.controls.fecha_inicio.touched ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.fecha_fin.invalid && ctx_r1.form.controls.fecha_fin.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.fecha_fin.invalid && ctx_r1.form.controls.fecha_fin.touched ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.hasError("rangoInvalido") && ctx_r1.form.controls.fecha_fin.touched ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activa" : "Inactiva");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 35 : 36);
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
var TemporadaForm = class _TemporadaForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  temporada = input(
    null,
    ...ngDevMode ? [{ debugName: "temporada" }] : (
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
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required, Validators.maxLength(120)]],
    fecha_inicio: ["", [Validators.required]],
    fecha_fin: ["", [Validators.required]],
    is_active: [true]
  }, { validators: rangoFechasValido });
  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      const temporada = this.temporada();
      if (temporada) {
        this.form.reset({
          nombre: temporada.nombre,
          fecha_inicio: temporada.fecha_inicio,
          fecha_fin: temporada.fecha_fin,
          is_active: temporada.is_active
        });
      } else {
        this.form.reset({ nombre: "", fecha_inicio: "", fecha_fin: "", is_active: true });
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.temporada() !== null;
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
      fecha_inicio: value.fecha_inicio,
      fecha_fin: value.fecha_fin,
      is_active: value.is_active
    });
  }
  static \u0275fac = function TemporadaForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemporadaForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemporadaForm, selectors: [["app-temporada-form"]], inputs: { open: [1, "open"], temporada: [1, "temporada"], readonly: [1, "readonly"], submitting: [1, "submitting"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Primavera-Verano 2026"], [1, "field__error"], [1, "field-row"], ["type", "date", "formControlName", "fecha_inicio"], ["type", "date", "formControlName", "fecha_fin"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function TemporadaForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TemporadaForm_Conditional_0_Template, 37, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n@media (max-width: 420px) {\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 18px;\n  }\n}\n/*# sourceMappingURL=temporada-form-KNK2K2F4.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemporadaForm, [{
    type: Component,
    args: [{ selector: "app-temporada-form", imports: [ReactiveFormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>{{ readonly() ? 'Detalle de temporada' : isEditMode ? 'Editar temporada' : 'Nueva temporada' }}</h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Primavera-Verano 2026" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
\r
        <div class="field-row">\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.fecha_inicio.invalid && form.controls.fecha_inicio.touched"\r
          >\r
            <span class="field__label">Fecha de inicio *</span>\r
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
            <span class="field__label">Fecha de fin *</span>\r
            <input type="date" formControlName="fecha_fin" />\r
            @if (form.controls.fecha_fin.invalid && form.controls.fecha_fin.touched) {\r
              <span class="field__error">Obligatoria.</span>\r
            }\r
          </label>\r
        </div>\r
\r
        @if (form.hasError('rangoInvalido') && form.controls.fecha_fin.touched) {\r
          <span class="field__error">La fecha de fin no puede ser anterior a la fecha de inicio.</span>\r
        }\r
\r
        <label class="field field--switch">\r
          <span class="field__label">Estado</span>\r
          <span class="switch">\r
            <input type="checkbox" formControlName="is_active" />\r
            <span class="switch__track"><span class="switch__thumb"></span></span>\r
            <span class="switch__text">{{ form.controls.is_active.value ? 'Activa' : 'Inactiva' }}</span>\r
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
              {{ submitting() ? 'Guardando\u2026' : 'Guardar temporada' }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporada-management/temporada-form/temporada-form.scss */\n:host {\n  display: contents;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n@media (max-width: 420px) {\n  .field-row {\n    flex-direction: column;\n    gap: 18px;\n  }\n}\n/*# sourceMappingURL=temporada-form-KNK2K2F4.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], temporada: [{ type: Input, args: [{ isSignal: true, alias: "temporada", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemporadaForm, { className: "TemporadaForm", filePath: "src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporada-management/temporada-form/temporada-form.ts", lineNumber: 21 });
})();

// src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporada-management/temporada-management.ts
var _forTrack03 = ($index, $item) => $item.id;
function TemporadaManagement_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17)(2, "div", 17)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function TemporadaManagement_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 18);
    \u0275\u0275text(2, "No se pudieron cargar las temporadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function TemporadaManagement_Conditional_22_Template_button_click_5_listener() {
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
function TemporadaManagement_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 18);
    \u0275\u0275text(2, "A\xFAn no hay temporadas registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea la primera temporada para empezar a organizar el cat\xE1logo.");
    \u0275\u0275elementEnd()();
  }
}
function TemporadaManagement_Conditional_24_For_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function TemporadaManagement_Conditional_24_For_15_Conditional_15_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 29);
    \u0275\u0275listener("click", function TemporadaManagement_Conditional_24_For_15_Conditional_15_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const temporada_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(temporada_r4, $event));
    });
    \u0275\u0275element(2, "app-icon", 30);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function TemporadaManagement_Conditional_24_For_15_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const temporada_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(temporada_r4));
    });
    \u0275\u0275element(5, "app-icon", 31);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function TemporadaManagement_Conditional_24_For_15_Conditional_15_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const temporada_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(temporada_r4, $event));
    });
    \u0275\u0275element(8, "app-icon", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275listener("click", function TemporadaManagement_Conditional_24_For_15_Conditional_15_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const temporada_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteTemporada(temporada_r4, $event));
    });
    \u0275\u0275element(11, "app-icon", 34);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const temporada_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", temporada_r4.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", temporada_r4.is_active ? "Desactivar" : "Activar", " ");
  }
}
function TemporadaManagement_Conditional_24_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "app-status-badge", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 24)(13, "button", 25);
    \u0275\u0275listener("click", function TemporadaManagement_Conditional_24_For_15_Template_button_click_13_listener($event) {
      const temporada_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(temporada_r4.id, $event));
    });
    \u0275\u0275element(14, "app-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, TemporadaManagement_Conditional_24_For_15_Conditional_15_Template, 13, 3, "div", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const temporada_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(temporada_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, temporada_r4.fecha_inicio, "d MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, temporada_r4.fecha_fin, "d MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("active", temporada_r4.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === temporada_r4.id ? 15 : -1);
  }
}
function TemporadaManagement_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 20)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, TemporadaManagement_Conditional_24_For_15_Template, 16, 11, "tr", null, _forTrack03);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.temporadas());
  }
}
var TemporadaManagement = class _TemporadaManagement {
  temporadaService = inject(TemporadaAdminService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  temporadas = signal(
    [],
    ...ngDevMode ? [{ debugName: "temporadas" }] : (
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
  editingTemporada = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingTemporada" }] : (
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
    this.load();
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.temporadaService.list({ search: this.searchTerm() || void 0, estado: this.statusFilter() }).subscribe({
      next: (temporadas) => {
        this.temporadas.set(temporadas);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.temporadas.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingTemporada.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(temporada) {
    this.openMenuId.set(null);
    this.editingTemporada.set(temporada);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(temporada, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingTemporada.set(temporada);
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
    const editing = this.editingTemporada();
    this.submitting.set(true);
    const request$ = editing ? this.temporadaService.update(editing.id, payload) : this.temporadaService.create(payload);
    request$.subscribe({
      next: () => {
        this.submitting.set(false);
        this.drawerOpen.set(false);
        this.toast.success(editing ? "Temporada actualizada correctamente." : "Temporada creada correctamente.");
        this.load();
      },
      error: (err) => {
        this.submitting.set(false);
        if (err.status === 409) {
          this.toast.error("Ya existe una temporada con ese nombre.");
        } else {
          this.toast.error("No se pudo guardar la temporada. Intenta nuevamente.");
        }
      }
    });
  }
  async toggleStatus(temporada, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (temporada.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar temporada?",
        message: "La temporada y sus colecciones dejar\xE1n de mostrarse como disponibles.",
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.temporadaService.setActive(temporada.id, !temporada.is_active).subscribe({
      next: () => {
        this.toast.success(temporada.is_active ? "Temporada desactivada." : "Temporada activada correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado de la temporada.")
    });
  }
  async deleteTemporada(temporada, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar temporada?",
      message: `Se eliminar\xE1 permanentemente "${temporada.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.temporadaService.delete(temporada.id).subscribe({
      next: () => {
        this.toast.success("Temporada eliminada correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar esta temporada porque tiene colecciones o productos asociados.");
        } else if (err.status === 404) {
          this.toast.error("La temporada no existe o ya fue eliminada.");
        } else {
          this.toast.error("No se pudo eliminar la temporada.");
        }
      }
    });
  }
  static \u0275fac = function TemporadaManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemporadaManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemporadaManagement, selectors: [["app-temporada-management"]], hostBindings: function TemporadaManagement_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TemporadaManagement_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 26, vars: 7, consts: [[1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar temporada...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "temporada", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "cell-secondary"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function TemporadaManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Temporadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Administra las temporadas de FashionStore.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function TemporadaManagement_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "app-icon", 3);
      \u0275\u0275text(9, " Nueva temporada ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275element(12, "app-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("ngModelChange", function TemporadaManagement_Template_input_ngModelChange_13_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function TemporadaManagement_Template_select_ngModelChange_14_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Activas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Inactivas");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, TemporadaManagement_Conditional_21_Template, 4, 0, "div", 12)(22, TemporadaManagement_Conditional_22_Template, 7, 1, "div", 13)(23, TemporadaManagement_Conditional_23_Template, 5, 0, "div", 14)(24, TemporadaManagement_Conditional_24_Template, 16, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "app-temporada-form", 16);
      \u0275\u0275listener("save", function TemporadaManagement_Template_app_temporada_form_save_25_listener($event) {
        return ctx.save($event);
      })("close", function TemporadaManagement_Template_app_temporada_form_close_25_listener() {
        return ctx.closeDrawer();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.statusFilter());
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 21 : ctx.errorMessage() ? 22 : ctx.temporadas().length === 0 ? 23 : 24);
      \u0275\u0275advance(4);
      \u0275\u0275property("open", ctx.drawerOpen())("temporada", ctx.editingTemporada())("readonly", ctx.viewMode())("submitting", ctx.submitting());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, TemporadaForm, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=temporada-management-3T23JVYM.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemporadaManagement, [{
    type: Component,
    args: [{ selector: "app-temporada-management", imports: [FormsModule, DatePipe, Icon, StatusBadge, TemporadaForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Temporadas</h3>\r
      <p>Administra las temporadas de FashionStore.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nueva temporada\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar temporada..."\r
        [ngModel]="searchTerm()"\r
        (ngModelChange)="onSearchChange($event)"\r
      />\r
    </label>\r
\r
    <select\r
      class="status-select"\r
      [ngModel]="statusFilter()"\r
      (ngModelChange)="onStatusFilterChange($event)"\r
    >\r
      <option value="all">Todos los estados</option>\r
      <option value="active">Activas</option>\r
      <option value="inactive">Inactivas</option>\r
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
      <span class="state-block__title">No se pudieron cargar las temporadas</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (temporadas().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay temporadas registradas</span>\r
      <span>Crea la primera temporada para empezar a organizar el cat\xE1logo.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Nombre</th>\r
            <th>Inicio</th>\r
            <th>Fin</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (temporada of temporadas(); track temporada.id) {\r
            <tr>\r
              <td class="cell-title">{{ temporada.nombre }}</td>\r
              <td class="cell-secondary">{{ temporada.fecha_inicio | date: 'd MMM y' }}</td>\r
              <td class="cell-secondary">{{ temporada.fecha_fin | date: 'd MMM y' }}</td>\r
              <td><app-status-badge [active]="temporada.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(temporada.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === temporada.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(temporada, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(temporada)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="temporada.is_active"\r
                        (click)="toggleStatus(temporada, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ temporada.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteTemporada(temporada, $event)"\r
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
<app-temporada-form\r
  [open]="drawerOpen()"\r
  [temporada]="editingTemporada()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporada-management/temporada-management.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=temporada-management-3T23JVYM.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemporadaManagement, { className: "TemporadaManagement", filePath: "src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporada-management/temporada-management.ts", lineNumber: 18 });
})();

// src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporadas-colecciones.ts
function TemporadasColecciones_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-temporada-management");
  }
}
function TemporadasColecciones_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-coleccion-management");
  }
}
var TemporadasColecciones = class _TemporadasColecciones {
  activeTab = signal(
    "temporadas",
    ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setTab(tab) {
    this.activeTab.set(tab);
  }
  static \u0275fac = function TemporadasColecciones_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemporadasColecciones)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemporadasColecciones, selectors: [["app-temporadas-colecciones"]], decls: 13, vars: 5, consts: [[1, "page-heading"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], [1, "tab-content"]], template: function TemporadasColecciones_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Temporadas y colecciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Configura las temporadas de FashionStore y las colecciones que agrupan.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "button", 2);
      \u0275\u0275listener("click", function TemporadasColecciones_Template_button_click_6_listener() {
        return ctx.setTab("temporadas");
      });
      \u0275\u0275text(7, " Temporadas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function TemporadasColecciones_Template_button_click_8_listener() {
        return ctx.setTab("colecciones");
      });
      \u0275\u0275text(9, " Colecciones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 3);
      \u0275\u0275conditionalCreate(11, TemporadasColecciones_Case_11_Template, 1, 0, "app-temporada-management")(12, TemporadasColecciones_Case_12_Template, 1, 0, "app-coleccion-management");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-active", ctx.activeTab() === "temporadas");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.activeTab() === "colecciones");
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_2_0 = ctx.activeTab()) === "temporadas" ? 11 : tmp_2_0 === "colecciones" ? 12 : -1);
    }
  }, dependencies: [TemporadaManagement, ColeccionManagement], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-heading[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.tab-content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=temporadas-colecciones-7OO6CKJQ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemporadasColecciones, [{
    type: Component,
    args: [{ selector: "app-temporadas-colecciones", imports: [TemporadaManagement, ColeccionManagement], template: `<div class="page-heading">\r
  <h2>Temporadas y colecciones</h2>\r
  <p>Configura las temporadas de FashionStore y las colecciones que agrupan.</p>\r
</div>\r
\r
<div class="tabs">\r
  <button type="button" class="tab" [class.is-active]="activeTab() === 'temporadas'" (click)="setTab('temporadas')">\r
    Temporadas\r
  </button>\r
  <button type="button" class="tab" [class.is-active]="activeTab() === 'colecciones'" (click)="setTab('colecciones')">\r
    Colecciones\r
  </button>\r
</div>\r
\r
<div class="tab-content">\r
  @switch (activeTab()) {\r
    @case ('temporadas') {\r
      <app-temporada-management />\r
    }\r
    @case ('colecciones') {\r
      <app-coleccion-management />\r
    }\r
  }\r
</div>\r
`, styles: ["/* src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporadas-colecciones.scss */\n:host {\n  display: block;\n}\n.page-heading {\n  margin-bottom: 18px;\n}\n.page-heading h2 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.page-heading p {\n  margin-top: 4px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.tab-content {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=temporadas-colecciones-7OO6CKJQ.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemporadasColecciones, { className: "TemporadasColecciones", filePath: "src/app/sucursales-catalogo/cu10-gestionar-temporadas-colecciones/temporadas-colecciones.ts", lineNumber: 13 });
})();
export {
  TemporadasColecciones
};
//# debugId=eb4b5ad2-0d5d-53b8-9a8d-69e2cf9f2c8a
//# sourceMappingURL=chunk-XN5DFNIR.js.map
