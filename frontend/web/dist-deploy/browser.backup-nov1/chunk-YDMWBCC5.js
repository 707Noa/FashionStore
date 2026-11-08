import {
  ProductoService
} from "./chunk-3MLODVFF.js";
import {
  CategoryService,
  ColorService,
  SizeService
} from "./chunk-3LSTOTMW.js";
import {
  ColeccionAdminService,
  TemporadaAdminService
} from "./chunk-GYWJGJBX.js";
import {
  ProveedorService
} from "./chunk-K5FC2FCH.js";
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
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  HostListener,
  Input,
  Output,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNHCNXB7.js";

// src/app/sucursales-catalogo/cu08-gestionar-productos/producto-form/producto-form.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function ProductoForm_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 9);
    \u0275\u0275text(2, "Propuesta a convertir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const preseleccionada_r3 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", preseleccionada_r3.proveedor.razon_social, " \xB7 ", preseleccionada_r3.nombre, " ");
  }
}
function ProductoForm_Conditional_0_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const propuesta_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", propuesta_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", propuesta_r5.proveedor.razon_social, " \xB7 ", propuesta_r5.nombre, " ");
  }
}
function ProductoForm_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 8)(1, "span", 9);
    \u0275\u0275text(2, "Basado en propuesta de proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 17);
    \u0275\u0275listener("ngModelChange", function ProductoForm_Conditional_0_Conditional_9_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPropuestaChange($event));
    });
    \u0275\u0275elementStart(4, "option", 15);
    \u0275\u0275text(5, "-- Registrar sin propuesta --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ProductoForm_Conditional_0_Conditional_9_For_7_Template, 2, 3, "option", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9, "Selecciona una propuesta para completar el formulario con sus datos.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.controls.producto_proveedor_id.value)("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.propuestas());
  }
}
function ProductoForm_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function ProductoForm_Conditional_0_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const proveedor_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", proveedor_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(proveedor_r6.razon_social);
  }
}
function ProductoForm_Conditional_0_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", categoria_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(categoria_r7.nombre);
  }
}
function ProductoForm_Conditional_0_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const temporada_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", temporada_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(temporada_r8.nombre);
  }
}
function ProductoForm_Conditional_0_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coleccion_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", coleccion_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(coleccion_r9.nombre);
  }
}
function ProductoForm_Conditional_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Ingresa un precio v\xE1lido, mayor a 0.");
    \u0275\u0275elementEnd();
  }
}
function ProductoForm_Conditional_0_For_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 32)(1, "input", 33);
    \u0275\u0275listener("change", function ProductoForm_Conditional_0_For_63_Template_input_change_1_listener() {
      const talla_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTalla(talla_r11.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const talla_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("chip--checked", ctx_r1.form.controls.talla_ids.value.includes(talla_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.form.controls.talla_ids.value.includes(talla_r11.id))("disabled", ctx_r1.readonly());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", talla_r11.nombre, " ");
  }
}
function ProductoForm_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Selecciona al menos una talla.");
    \u0275\u0275elementEnd();
  }
}
function ProductoForm_Conditional_0_For_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 32)(1, "input", 33);
    \u0275\u0275listener("change", function ProductoForm_Conditional_0_For_70_Template_input_change_1_listener() {
      const color_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleColor(color_r13.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("chip--checked", ctx_r1.form.controls.color_ids.value.includes(color_r13.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.form.controls.color_ids.value.includes(color_r13.id))("disabled", ctx_r1.readonly());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", color_r13.nombre, " ");
  }
}
function ProductoForm_Conditional_0_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Selecciona al menos un color.");
    \u0275\u0275elementEnd();
  }
}
function ProductoForm_Conditional_0_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Se generar\xE1n ", ctx_r1.form.controls.talla_ids.value.length * ctx_r1.form.controls.color_ids.value.length, " variantes (talla + color). ");
  }
}
function ProductoForm_Conditional_0_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "Im\xE1genes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4, "Guarda el producto primero; luego podr\xE1s cargar aqu\xED mismo su imagen principal y las adicionales.");
    \u0275\u0275elementEnd()();
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(ctx_r1.imagenPrincipalUrl()), \u0275\u0275sanitizeUrl);
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "app-icon", 39);
    \u0275\u0275elementEnd();
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "input", 40);
    \u0275\u0275listener("change", function ProductoForm_Conditional_0_Conditional_74_Conditional_6_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPrincipalFileSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.subiendoPrincipal() ? "Cargando\u2026" : ctx_r1.imagenPrincipalUrl() ? "Cambiar imagen" : "Seleccionar imagen", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.subiendoPrincipal());
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_10_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ProductoForm_Conditional_0_Conditional_74_Conditional_10_For_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const imagen_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeImagen(imagen_r16.id));
    });
    \u0275\u0275element(1, "app-icon", 45);
    \u0275\u0275elementEnd();
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275conditionalCreate(2, ProductoForm_Conditional_0_Conditional_74_Conditional_10_For_2_Conditional_2_Template, 2, 0, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const imagen_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(imagen_r16.url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.readonly() ? 2 : -1);
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, ProductoForm_Conditional_0_Conditional_74_Conditional_10_For_2_Template, 3, 2, "div", 41, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.imagenesAdicionales());
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "input", 40);
    \u0275\u0275listener("change", function ProductoForm_Conditional_0_Conditional_74_Conditional_11_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImagenAdicionalSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.subiendoAdicional() ? "Cargando\u2026" : "+ Agregar imagen", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.subiendoAdicional());
  }
}
function ProductoForm_Conditional_0_Conditional_74_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imagenError());
  }
}
function ProductoForm_Conditional_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "Imagen principal *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275conditionalCreate(4, ProductoForm_Conditional_0_Conditional_74_Conditional_4_Template, 1, 1, "img", 35)(5, ProductoForm_Conditional_0_Conditional_74_Conditional_5_Template, 2, 0, "div", 36);
    \u0275\u0275conditionalCreate(6, ProductoForm_Conditional_0_Conditional_74_Conditional_6_Template, 3, 2, "label", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "span", 9);
    \u0275\u0275text(9, "Im\xE1genes adicionales");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ProductoForm_Conditional_0_Conditional_74_Conditional_10_Template, 3, 0, "div", 38);
    \u0275\u0275conditionalCreate(11, ProductoForm_Conditional_0_Conditional_74_Conditional_11_Template, 3, 2, "label", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ProductoForm_Conditional_0_Conditional_74_Conditional_12_Template, 2, 1, "span", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.imagenPrincipalUrl() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.readonly() ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.imagenesAdicionales().length > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.readonly() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imagenError() ? 12 : -1);
  }
}
function ProductoForm_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ProductoForm_Conditional_0_Conditional_85_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function ProductoForm_Conditional_0_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ProductoForm_Conditional_0_Conditional_86_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Guardando\u2026" : ctx_r1.propuestaPreseleccionada() ? "Aprobar y crear producto" : "Guardar producto", " ");
  }
}
function ProductoForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ProductoForm_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "aside", 2);
    \u0275\u0275listener("click", function ProductoForm_Conditional_0_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ProductoForm_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function ProductoForm_Conditional_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275conditionalCreate(8, ProductoForm_Conditional_0_Conditional_8_Template, 5, 2, "div", 7)(9, ProductoForm_Conditional_0_Conditional_9_Template, 10, 4, "label", 8);
    \u0275\u0275elementStart(10, "label", 8)(11, "span", 9);
    \u0275\u0275text(12, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 10);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(14, ProductoForm_Conditional_0_Conditional_14_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 8)(16, "span", 9);
    \u0275\u0275text(17, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "textarea", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "label", 8)(21, "span", 9);
    \u0275\u0275text(22, "Proveedor *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 14)(24, "option", 15);
    \u0275\u0275text(25, "Selecciona un proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, ProductoForm_Conditional_0_For_27_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 8)(29, "span", 9);
    \u0275\u0275text(30, "Categor\xEDa *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 16)(32, "option", 15);
    \u0275\u0275text(33, "Selecciona una categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(34, ProductoForm_Conditional_0_For_35_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 13)(37, "label", 8)(38, "span", 9);
    \u0275\u0275text(39, "Temporada *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 17);
    \u0275\u0275listener("ngModelChange", function ProductoForm_Conditional_0_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTemporadaChange($event));
    });
    \u0275\u0275elementStart(41, "option", 15);
    \u0275\u0275text(42, "Selecciona una temporada");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(43, ProductoForm_Conditional_0_For_44_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "label", 8)(46, "span", 9);
    \u0275\u0275text(47, "Colecci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 18)(49, "option", 15);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(51, ProductoForm_Conditional_0_For_52_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "label", 8)(54, "span", 9);
    \u0275\u0275text(55, "Precio de venta (Bs) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(57, ProductoForm_Conditional_0_Conditional_57_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 8)(59, "span", 9);
    \u0275\u0275text(60, "Tallas *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 20);
    \u0275\u0275repeaterCreate(62, ProductoForm_Conditional_0_For_63_Template, 3, 5, "label", 21, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, ProductoForm_Conditional_0_Conditional_64_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 8)(66, "span", 9);
    \u0275\u0275text(67, "Colores *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 20);
    \u0275\u0275repeaterCreate(69, ProductoForm_Conditional_0_For_70_Template, 3, 5, "label", 21, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(71, ProductoForm_Conditional_0_Conditional_71_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(72, ProductoForm_Conditional_0_Conditional_72_Template, 2, 1, "span", 22);
    \u0275\u0275conditionalCreate(73, ProductoForm_Conditional_0_Conditional_73_Template, 5, 0, "div", 8)(74, ProductoForm_Conditional_0_Conditional_74_Template, 13, 5);
    \u0275\u0275elementStart(75, "label", 23)(76, "span", 9);
    \u0275\u0275text(77, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 24);
    \u0275\u0275element(79, "input", 25);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(80, "span", 26);
    \u0275\u0275element(81, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 28);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "footer", 29);
    \u0275\u0275conditionalCreate(85, ProductoForm_Conditional_0_Conditional_85_Template, 2, 0, "button", 30)(86, ProductoForm_Conditional_0_Conditional_86_Template, 4, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.readonly() ? "Detalle de producto" : ctx_r1.isEditMode ? "Editar producto" : ctx_r1.propuestaPreseleccionada() ? "Aprobar propuesta" : "Nuevo producto", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.propuestaPreseleccionada()) ? 8 : !ctx_r1.isEditMode && ctx_r1.propuestas().length > 0 ? 9 : -1, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.nombre.invalid && ctx_r1.form.controls.nombre.touched ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.proveedor_id.invalid && ctx_r1.form.controls.proveedor_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.proveedores());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.categoria_id.invalid && ctx_r1.form.controls.categoria_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categorias());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.temporada_id.invalid && ctx_r1.form.controls.temporada_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.controls.temporada_id.value)("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.temporadas());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.coleccion_id.invalid && ctx_r1.form.controls.coleccion_id.touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.form.controls.temporada_id.value);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.form.controls.temporada_id.value ? "Selecciona una colecci\xF3n" : "Elige primero una temporada", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.colecciones());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.form.controls.precio_venta.invalid && ctx_r1.form.controls.precio_venta.touched);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.precio_venta.invalid && ctx_r1.form.controls.precio_venta.touched ? 57 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.tallas());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.talla_ids.value.length === 0 && ctx_r1.form.touched ? 64 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.colores());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.color_ids.value.length === 0 && ctx_r1.form.touched ? 71 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.talla_ids.value.length > 0 && ctx_r1.form.controls.color_ids.value.length > 0 ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isEditMode ? 73 : 74);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form.controls.is_active.value ? "Activo" : "Inactivo");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readonly() ? 85 : 86);
  }
}
var FORMATOS_IMAGEN_PERMITIDOS = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
var TAMANO_MAXIMO_IMAGEN_BYTES = 5 * 1024 * 1024;
function precioPositivoValidator(control) {
  const valor = parseFloat(control.value);
  return !isNaN(valor) && valor > 0 ? null : { precioInvalido: true };
}
var ProductoForm = class _ProductoForm {
  open = input(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  producto = input(
    null,
    ...ngDevMode ? [{ debugName: "producto" }] : (
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
  // Cuando viene de "Aprobar propuesta" (ver propuestas-proveedor): el
  // Administrador ya eligió cuál propuesta convertir, así que el selector
  // "Basado en propuesta de proveedor" no debe mostrarse -- solo un
  // indicador fijo de cuál se está aprobando.
  propuestaPreseleccionada = input(
    null,
    ...ngDevMode ? [{ debugName: "propuestaPreseleccionada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  save = output();
  close = output();
  fb = inject(FormBuilder);
  categoryService = inject(CategoryService);
  sizeService = inject(SizeService);
  colorService = inject(ColorService);
  temporadaService = inject(TemporadaAdminService);
  coleccionService = inject(ColeccionAdminService);
  proveedorService = inject(ProveedorService);
  productoService = inject(ProductoService);
  categorias = signal(
    [],
    ...ngDevMode ? [{ debugName: "categorias" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tallas = signal(
    [],
    ...ngDevMode ? [{ debugName: "tallas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  colores = signal(
    [],
    ...ngDevMode ? [{ debugName: "colores" }] : (
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
  colecciones = signal(
    [],
    ...ngDevMode ? [{ debugName: "colecciones" }] : (
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
  propuestas = signal(
    [],
    ...ngDevMode ? [{ debugName: "propuestas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenPrincipalUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenPrincipalUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenesAdicionales = signal(
    [],
    ...ngDevMode ? [{ debugName: "imagenesAdicionales" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subiendoPrincipal = signal(
    false,
    ...ngDevMode ? [{ debugName: "subiendoPrincipal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subiendoAdicional = signal(
    false,
    ...ngDevMode ? [{ debugName: "subiendoAdicional" }] : (
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
  form = this.fb.group({
    producto_proveedor_id: this.fb.control(null),
    nombre: this.fb.nonNullable.control("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(150)
    ]),
    descripcion: this.fb.nonNullable.control(""),
    proveedor_id: this.fb.control(null, Validators.required),
    categoria_id: this.fb.control(null, Validators.required),
    temporada_id: this.fb.control(null, Validators.required),
    coleccion_id: this.fb.control(null, Validators.required),
    precio_venta: this.fb.nonNullable.control("", [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{1,2})?$/),
      precioPositivoValidator
    ]),
    talla_ids: this.fb.nonNullable.control([]),
    color_ids: this.fb.nonNullable.control([]),
    is_active: this.fb.nonNullable.control(true)
  });
  constructor() {
    this.categoryService.list({ estado: "active" }).subscribe((valores) => this.categorias.set(valores));
    this.sizeService.list({ estado: "active" }).subscribe((valores) => this.tallas.set(valores));
    this.colorService.list({ estado: "active" }).subscribe((valores) => this.colores.set(valores));
    this.temporadaService.list({ estado: "active" }).subscribe((valores) => this.temporadas.set(valores));
    this.proveedorService.list({ estado: "active" }).subscribe((valores) => this.proveedores.set(valores));
    effect(() => {
      if (!this.open()) {
        return;
      }
      const producto = this.producto();
      this.imagenError.set(null);
      if (producto) {
        this.propuestas.set([]);
        this.colecciones.set([]);
        this.imagenPrincipalUrl.set(producto.imagen_principal_url);
        this.imagenesAdicionales.set(producto.imagenes);
        this.coleccionService.list({ temporada_id: producto.temporada.id }).subscribe((valores) => this.colecciones.set(valores));
        this.form.reset({
          producto_proveedor_id: null,
          nombre: producto.nombre,
          descripcion: producto.descripcion ?? "",
          proveedor_id: producto.proveedor.id,
          categoria_id: producto.categoria.id,
          temporada_id: producto.temporada.id,
          coleccion_id: producto.coleccion.id,
          precio_venta: producto.precio_venta,
          talla_ids: producto.tallas.map((talla) => talla.id),
          color_ids: producto.colores.map((color) => color.id),
          is_active: producto.is_active
        });
      } else {
        this.colecciones.set([]);
        this.imagenPrincipalUrl.set(null);
        this.imagenesAdicionales.set([]);
        const preseleccionada = this.propuestaPreseleccionada();
        this.form.reset({
          producto_proveedor_id: preseleccionada?.id ?? null,
          nombre: preseleccionada?.nombre ?? "",
          descripcion: preseleccionada?.descripcion ?? "",
          proveedor_id: preseleccionada?.proveedor.id ?? null,
          categoria_id: null,
          temporada_id: null,
          coleccion_id: null,
          precio_venta: "",
          talla_ids: [],
          color_ids: [],
          is_active: true
        });
        if (preseleccionada) {
          this.propuestas.set([preseleccionada]);
        } else {
          this.productoService.listPropuestas().subscribe((valores) => this.propuestas.set(valores));
        }
      }
      if (this.readonly()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }
  get isEditMode() {
    return this.producto() !== null;
  }
  onTemporadaChange(value) {
    const temporadaId = value ? Number(value) : null;
    this.form.controls.temporada_id.setValue(temporadaId);
    this.form.controls.coleccion_id.setValue(null);
    this.colecciones.set([]);
    if (temporadaId) {
      this.coleccionService.list({ temporada_id: temporadaId, estado: "active" }).subscribe((valores) => this.colecciones.set(valores));
    }
  }
  onPropuestaChange(value) {
    const propuestaId = value ? Number(value) : null;
    this.form.controls.producto_proveedor_id.setValue(propuestaId);
    if (!propuestaId) {
      return;
    }
    const propuesta = this.propuestas().find((item) => item.id === propuestaId);
    if (!propuesta) {
      return;
    }
    this.form.patchValue({
      nombre: propuesta.nombre,
      descripcion: propuesta.descripcion ?? "",
      proveedor_id: propuesta.proveedor.id
    });
  }
  toggleTalla(id) {
    if (this.readonly()) {
      return;
    }
    const actuales = this.form.controls.talla_ids.value;
    this.form.controls.talla_ids.setValue(actuales.includes(id) ? actuales.filter((valor) => valor !== id) : [...actuales, id]);
  }
  toggleColor(id) {
    if (this.readonly()) {
      return;
    }
    const actuales = this.form.controls.color_ids.value;
    this.form.controls.color_ids.setValue(actuales.includes(id) ? actuales.filter((valor) => valor !== id) : [...actuales, id]);
  }
  validarArchivoImagen(archivo) {
    if (!FORMATOS_IMAGEN_PERMITIDOS.includes(archivo.type)) {
      this.imagenError.set("La imagen debe ser un archivo JPG, JPEG, PNG o WEBP.");
      return false;
    }
    if (archivo.size > TAMANO_MAXIMO_IMAGEN_BYTES) {
      this.imagenError.set("La imagen no puede superar los 5 MB.");
      return false;
    }
    this.imagenError.set(null);
    return true;
  }
  onPrincipalFileSelected(event) {
    const input2 = event.target;
    const archivo = input2.files?.[0];
    input2.value = "";
    const producto = this.producto();
    if (!archivo || !producto || !this.validarArchivoImagen(archivo)) {
      return;
    }
    this.subiendoPrincipal.set(true);
    this.productoService.setImagenPrincipal(producto.id, archivo).subscribe({
      next: (actualizado) => {
        this.subiendoPrincipal.set(false);
        this.imagenPrincipalUrl.set(actualizado.imagen_principal_url);
      },
      error: () => {
        this.subiendoPrincipal.set(false);
        this.imagenError.set("No se pudo cargar la imagen principal. Intenta nuevamente.");
      }
    });
  }
  onImagenAdicionalSelected(event) {
    const input2 = event.target;
    const archivo = input2.files?.[0];
    input2.value = "";
    const producto = this.producto();
    if (!archivo || !producto || !this.validarArchivoImagen(archivo)) {
      return;
    }
    this.subiendoAdicional.set(true);
    this.productoService.addImagen(producto.id, archivo).subscribe({
      next: (actualizado) => {
        this.subiendoAdicional.set(false);
        this.imagenesAdicionales.set(actualizado.imagenes);
      },
      error: () => {
        this.subiendoAdicional.set(false);
        this.imagenError.set("No se pudo cargar la imagen. Intenta nuevamente.");
      }
    });
  }
  removeImagen(imagenId) {
    const producto = this.producto();
    if (!producto) {
      return;
    }
    this.productoService.removeImagen(producto.id, imagenId).subscribe({
      next: (actualizado) => this.imagenesAdicionales.set(actualizado.imagenes),
      error: () => this.imagenError.set("No se pudo eliminar la imagen. Intenta nuevamente.")
    });
  }
  submit() {
    if (this.readonly()) {
      return;
    }
    const sinTallas = this.form.controls.talla_ids.value.length === 0;
    const sinColores = this.form.controls.color_ids.value.length === 0;
    if (this.form.invalid || sinTallas || sinColores) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    const producto = this.producto();
    this.save.emit({
      nombre: value.nombre.trim(),
      descripcion: value.descripcion.trim() || null,
      proveedor_id: value.proveedor_id,
      producto_proveedor_id: producto ? producto.producto_proveedor_id : value.producto_proveedor_id,
      categoria_id: value.categoria_id,
      temporada_id: value.temporada_id,
      coleccion_id: value.coleccion_id,
      precio_venta: value.precio_venta,
      talla_ids: value.talla_ids,
      color_ids: value.color_ids,
      is_active: value.is_active
    });
  }
  static \u0275fac = function ProductoForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductoForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductoForm, selectors: [["app-producto-form"]], inputs: { open: [1, "open"], producto: [1, "producto"], readonly: [1, "readonly"], submitting: [1, "submitting"], propuestaPreseleccionada: [1, "propuestaPreseleccionada"] }, outputs: { save: "save", close: "close" }, decls: 1, vars: 1, consts: [[1, "drawer-overlay"], [1, "drawer-overlay", 3, "click"], [1, "drawer", "producto-drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form", 3, "ngSubmit", "formGroup"], [1, "field", "propuesta-fija"], [1, "field"], [1, "field__label"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Chaqueta Urban"], [1, "field__error"], ["formControlName", "descripcion", "rows", "3", "placeholder", "Detalle de la prenda"], [1, "field-row"], ["formControlName", "proveedor_id"], [3, "ngValue"], ["formControlName", "categoria_id"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "coleccion_id", 3, "disabled"], ["type", "text", "inputmode", "decimal", "formControlName", "precio_venta", "placeholder", "Ej. 399.00"], [1, "chip-list"], [1, "chip", 3, "chip--checked"], [1, "field__hint"], [1, "field", "field--switch"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "switch__track"], [1, "switch__thumb"], [1, "switch__text"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], [1, "propuesta-fija__valor"], [1, "chip"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "image-principal"], ["alt", "Imagen principal", 1, "image-principal__preview", 3, "src"], [1, "image-principal__placeholder"], [1, "btn", "btn--ghost", "btn--sm", "image-upload-btn"], [1, "image-grid"], ["name", "products", 2, "width", "22px", "height", "22px"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 3, "change", "disabled"], [1, "image-grid__item"], ["alt", "Imagen adicional del producto", 3, "src"], ["type", "button", "aria-label", "Quitar imagen", 1, "image-grid__remove"], ["type", "button", "aria-label", "Quitar imagen", 1, "image-grid__remove", 3, "click"], ["name", "close", 2, "width", "12px", "height", "12px"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function ProductoForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProductoForm_Conditional_0_Template, 87, 32, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, Icon], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.producto-drawer[_ngcontent-%COMP%] {\n  width: 560px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n.chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border-radius: 999px;\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-white);\n  font-size: 12.5px;\n  color: var(--%NS%color-text);\n  cursor: pointer;\n  transition:\n    background var(--%NS%transition-fast),\n    border-color var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n}\n.chip--checked[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, white);\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n  font-weight: 600;\n}\n.image-upload-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-upload-btn[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.image-principal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.image-principal__preview[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--%NS%color-border);\n  flex-shrink: 0;\n}\n.image-principal__placeholder[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-card-bg);\n  border: 1px dashed var(--%NS%color-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n  flex-shrink: 0;\n}\n.image-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.image-grid__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  flex-shrink: 0;\n}\n.image-grid__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--%NS%color-border);\n}\n.image-grid__remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-white);\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-grid__remove[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-danger);\n  border-color: var(--%NS%color-danger);\n  color: var(--%NS%color-white);\n}\n.propuesta-fija[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-bg);\n}\n.propuesta-fija__valor[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n@media (max-width: 480px) {\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 18px;\n  }\n  .image-principal[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=producto-form-RIBFNPQ6.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductoForm, [{
    type: Component,
    args: [{ selector: "app-producto-form", imports: [ReactiveFormsModule, FormsModule, Icon], template: `@if (open()) {\r
  <div class="drawer-overlay" (click)="close.emit()">\r
    <aside class="drawer producto-drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>\r
          {{\r
            readonly()\r
              ? 'Detalle de producto'\r
              : isEditMode\r
                ? 'Editar producto'\r
                : propuestaPreseleccionada()\r
                  ? 'Aprobar propuesta'\r
                  : 'Nuevo producto'\r
          }}\r
        </h2>\r
        <button type="button" class="icon-btn" (click)="close.emit()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="drawer__form">\r
        @if (propuestaPreseleccionada(); as preseleccionada) {\r
          <div class="field propuesta-fija">\r
            <span class="field__label">Propuesta a convertir</span>\r
            <span class="propuesta-fija__valor">\r
              {{ preseleccionada.proveedor.razon_social }} \xB7 {{ preseleccionada.nombre }}\r
            </span>\r
          </div>\r
        } @else if (!isEditMode && propuestas().length > 0) {\r
          <label class="field">\r
            <span class="field__label">Basado en propuesta de proveedor</span>\r
            <select\r
              [ngModel]="form.controls.producto_proveedor_id.value"\r
              [ngModelOptions]="{ standalone: true }"\r
              (ngModelChange)="onPropuestaChange($event)"\r
            >\r
              <option [ngValue]="null">-- Registrar sin propuesta --</option>\r
              @for (propuesta of propuestas(); track propuesta.id) {\r
                <option [ngValue]="propuesta.id">\r
                  {{ propuesta.proveedor.razon_social }} \xB7 {{ propuesta.nombre }}\r
                </option>\r
              }\r
            </select>\r
            <span class="field__hint">Selecciona una propuesta para completar el formulario con sus datos.</span>\r
          </label>\r
        }\r
\r
        <label class="field" [class.has-error]="form.controls.nombre.invalid && form.controls.nombre.touched">\r
          <span class="field__label">Nombre *</span>\r
          <input type="text" formControlName="nombre" placeholder="Ej. Chaqueta Urban" />\r
          @if (form.controls.nombre.invalid && form.controls.nombre.touched) {\r
            <span class="field__error">El nombre es obligatorio.</span>\r
          }\r
        </label>\r
\r
        <label class="field">\r
          <span class="field__label">Descripci\xF3n</span>\r
          <textarea formControlName="descripcion" rows="3" placeholder="Detalle de la prenda"></textarea>\r
        </label>\r
\r
        <div class="field-row">\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.proveedor_id.invalid && form.controls.proveedor_id.touched"\r
          >\r
            <span class="field__label">Proveedor *</span>\r
            <select formControlName="proveedor_id">\r
              <option [ngValue]="null">Selecciona un proveedor</option>\r
              @for (proveedor of proveedores(); track proveedor.id) {\r
                <option [ngValue]="proveedor.id">{{ proveedor.razon_social }}</option>\r
              }\r
            </select>\r
          </label>\r
\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.categoria_id.invalid && form.controls.categoria_id.touched"\r
          >\r
            <span class="field__label">Categor\xEDa *</span>\r
            <select formControlName="categoria_id">\r
              <option [ngValue]="null">Selecciona una categor\xEDa</option>\r
              @for (categoria of categorias(); track categoria.id) {\r
                <option [ngValue]="categoria.id">{{ categoria.nombre }}</option>\r
              }\r
            </select>\r
          </label>\r
        </div>\r
\r
        <div class="field-row">\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.temporada_id.invalid && form.controls.temporada_id.touched"\r
          >\r
            <span class="field__label">Temporada *</span>\r
            <select\r
              [ngModel]="form.controls.temporada_id.value"\r
              [ngModelOptions]="{ standalone: true }"\r
              (ngModelChange)="onTemporadaChange($event)"\r
            >\r
              <option [ngValue]="null">Selecciona una temporada</option>\r
              @for (temporada of temporadas(); track temporada.id) {\r
                <option [ngValue]="temporada.id">{{ temporada.nombre }}</option>\r
              }\r
            </select>\r
          </label>\r
\r
          <label\r
            class="field"\r
            [class.has-error]="form.controls.coleccion_id.invalid && form.controls.coleccion_id.touched"\r
          >\r
            <span class="field__label">Colecci\xF3n *</span>\r
            <select formControlName="coleccion_id" [disabled]="!form.controls.temporada_id.value">\r
              <option [ngValue]="null">\r
                {{ form.controls.temporada_id.value ? 'Selecciona una colecci\xF3n' : 'Elige primero una temporada' }}\r
              </option>\r
              @for (coleccion of colecciones(); track coleccion.id) {\r
                <option [ngValue]="coleccion.id">{{ coleccion.nombre }}</option>\r
              }\r
            </select>\r
          </label>\r
        </div>\r
\r
        <label\r
          class="field"\r
          [class.has-error]="form.controls.precio_venta.invalid && form.controls.precio_venta.touched"\r
        >\r
          <span class="field__label">Precio de venta (Bs) *</span>\r
          <input type="text" inputmode="decimal" formControlName="precio_venta" placeholder="Ej. 399.00" />\r
          @if (form.controls.precio_venta.invalid && form.controls.precio_venta.touched) {\r
            <span class="field__error">Ingresa un precio v\xE1lido, mayor a 0.</span>\r
          }\r
        </label>\r
\r
        <div class="field">\r
          <span class="field__label">Tallas *</span>\r
          <div class="chip-list">\r
            @for (talla of tallas(); track talla.id) {\r
              <label class="chip" [class.chip--checked]="form.controls.talla_ids.value.includes(talla.id)">\r
                <input\r
                  type="checkbox"\r
                  [checked]="form.controls.talla_ids.value.includes(talla.id)"\r
                  [disabled]="readonly()"\r
                  (change)="toggleTalla(talla.id)"\r
                />\r
                {{ talla.nombre }}\r
              </label>\r
            }\r
          </div>\r
          @if (form.controls.talla_ids.value.length === 0 && form.touched) {\r
            <span class="field__error">Selecciona al menos una talla.</span>\r
          }\r
        </div>\r
\r
        <div class="field">\r
          <span class="field__label">Colores *</span>\r
          <div class="chip-list">\r
            @for (color of colores(); track color.id) {\r
              <label class="chip" [class.chip--checked]="form.controls.color_ids.value.includes(color.id)">\r
                <input\r
                  type="checkbox"\r
                  [checked]="form.controls.color_ids.value.includes(color.id)"\r
                  [disabled]="readonly()"\r
                  (change)="toggleColor(color.id)"\r
                />\r
                {{ color.nombre }}\r
              </label>\r
            }\r
          </div>\r
          @if (form.controls.color_ids.value.length === 0 && form.touched) {\r
            <span class="field__error">Selecciona al menos un color.</span>\r
          }\r
        </div>\r
\r
        @if (form.controls.talla_ids.value.length > 0 && form.controls.color_ids.value.length > 0) {\r
          <span class="field__hint">\r
            Se generar\xE1n {{ form.controls.talla_ids.value.length * form.controls.color_ids.value.length }}\r
            variantes (talla + color).\r
          </span>\r
        }\r
\r
        @if (!isEditMode) {\r
          <div class="field">\r
            <span class="field__label">Im\xE1genes</span>\r
            <span class="field__hint">Guarda el producto primero; luego podr\xE1s cargar aqu\xED mismo su imagen principal y las adicionales.</span>\r
          </div>\r
        } @else {\r
          <div class="field">\r
            <span class="field__label">Imagen principal *</span>\r
            <div class="image-principal">\r
              @if (imagenPrincipalUrl()) {\r
                <img [src]="resolveMediaUrl(imagenPrincipalUrl())" alt="Imagen principal" class="image-principal__preview" />\r
              } @else {\r
                <div class="image-principal__placeholder">\r
                  <app-icon name="products" style="width: 22px; height: 22px" />\r
                </div>\r
              }\r
              @if (!readonly()) {\r
                <label class="btn btn--ghost btn--sm image-upload-btn">\r
                  {{ subiendoPrincipal() ? 'Cargando\u2026' : imagenPrincipalUrl() ? 'Cambiar imagen' : 'Seleccionar imagen' }}\r
                  <input\r
                    type="file"\r
                    accept="image/jpeg,image/png,image/webp"\r
                    [disabled]="subiendoPrincipal()"\r
                    (change)="onPrincipalFileSelected($event)"\r
                  />\r
                </label>\r
              }\r
            </div>\r
          </div>\r
\r
          <div class="field">\r
            <span class="field__label">Im\xE1genes adicionales</span>\r
            @if (imagenesAdicionales().length > 0) {\r
              <div class="image-grid">\r
                @for (imagen of imagenesAdicionales(); track imagen.id) {\r
                  <div class="image-grid__item">\r
                    <img [src]="resolveMediaUrl(imagen.url)" alt="Imagen adicional del producto" />\r
                    @if (!readonly()) {\r
                      <button\r
                        type="button"\r
                        class="image-grid__remove"\r
                        (click)="removeImagen(imagen.id)"\r
                        aria-label="Quitar imagen"\r
                      >\r
                        <app-icon name="close" style="width: 12px; height: 12px" />\r
                      </button>\r
                    }\r
                  </div>\r
                }\r
              </div>\r
            }\r
            @if (!readonly()) {\r
              <label class="btn btn--ghost btn--sm image-upload-btn">\r
                {{ subiendoAdicional() ? 'Cargando\u2026' : '+ Agregar imagen' }}\r
                <input\r
                  type="file"\r
                  accept="image/jpeg,image/png,image/webp"\r
                  [disabled]="subiendoAdicional()"\r
                  (change)="onImagenAdicionalSelected($event)"\r
                />\r
              </label>\r
            }\r
          </div>\r
\r
          @if (imagenError()) {\r
            <span class="field__error">{{ imagenError() }}</span>\r
          }\r
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
              {{\r
                submitting()\r
                  ? 'Guardando\u2026'\r
                  : propuestaPreseleccionada()\r
                    ? 'Aprobar y crear producto'\r
                    : 'Guardar producto'\r
              }}\r
            </button>\r
          }\r
        </footer>\r
      </form>\r
    </aside>\r
  </div>\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/cu08-gestionar-productos/producto-form/producto-form.scss */\n:host {\n  display: contents;\n}\n.producto-drawer {\n  width: 560px;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n.field textarea {\n  min-height: 72px;\n}\n.chip-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border-radius: 999px;\n  border: 1px solid var(--color-border);\n  background: var(--color-white);\n  font-size: 12.5px;\n  color: var(--color-text);\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    border-color var(--transition-fast),\n    color var(--transition-fast);\n}\n.chip input {\n  position: absolute;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n}\n.chip:hover {\n  border-color: var(--color-primary);\n}\n.chip--checked {\n  background: color-mix(in srgb, var(--color-primary) 10%, white);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.image-upload-btn {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-upload-btn input[type=file] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.image-principal {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.image-principal__preview {\n  width: 84px;\n  height: 84px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--color-border);\n  flex-shrink: 0;\n}\n.image-principal__placeholder {\n  width: 84px;\n  height: 84px;\n  border-radius: var(--radius-sm);\n  background: var(--color-card-bg);\n  border: 1px dashed var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n  flex-shrink: 0;\n}\n.image-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.image-grid__item {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  flex-shrink: 0;\n}\n.image-grid__item img {\n  width: 100%;\n  height: 100%;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--color-border);\n}\n.image-grid__remove {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n  background: var(--color-white);\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-grid__remove:hover {\n  background: var(--color-danger);\n  border-color: var(--color-danger);\n  color: var(--color-white);\n}\n.propuesta-fija {\n  padding: 10px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg);\n}\n.propuesta-fija__valor {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n@media (max-width: 480px) {\n  .field-row {\n    flex-direction: column;\n    gap: 18px;\n  }\n  .image-principal {\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=producto-form-RIBFNPQ6.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], producto: [{ type: Input, args: [{ isSignal: true, alias: "producto", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], submitting: [{ type: Input, args: [{ isSignal: true, alias: "submitting", required: false }] }], propuestaPreseleccionada: [{ type: Input, args: [{ isSignal: true, alias: "propuestaPreseleccionada", required: false }] }], save: [{ type: Output, args: ["save"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductoForm, { className: "ProductoForm", filePath: "src/app/sucursales-catalogo/cu08-gestionar-productos/producto-form/producto-form.ts", lineNumber: 42 });
})();

// src/app/sucursales-catalogo/cu08-gestionar-productos/propuestas-proveedor/propuestas-proveedor.ts
var _forTrack02 = ($index, $item) => $item.id;
function PropuestasProveedor_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 13)(2, "div", 13)(3, "div", 13);
    \u0275\u0275elementEnd();
  }
}
function PropuestasProveedor_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 14);
    \u0275\u0275text(2, "No se pudieron cargar las propuestas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_16_Template_button_click_5_listener() {
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
function PropuestasProveedor_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Las propuestas que env\xEDen los proveedores aparecer\xE1n aqu\xED.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filtroEstado() === "PENDIENTE" ? "Sin propuestas pendientes" : ctx_r1.filtroEstado() === "APROBADO" ? "Sin propuestas aprobadas" : "Sin propuestas rechazadas", " ");
  }
}
function PropuestasProveedor_Conditional_18_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const propuesta_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(propuesta_r4.imagen_url), \u0275\u0275sanitizeUrl);
  }
}
function PropuestasProveedor_Conditional_18_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "app-icon", 26);
    \u0275\u0275elementEnd();
  }
}
function PropuestasProveedor_Conditional_18_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const propuesta_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(propuesta_r4.descripcion);
  }
}
function PropuestasProveedor_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_18_For_2_Template_button_click_0_listener() {
      const propuesta_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirRevision(propuesta_r4));
    });
    \u0275\u0275conditionalCreate(1, PropuestasProveedor_Conditional_18_For_2_Conditional_1_Template, 1, 1, "img", 18)(2, PropuestasProveedor_Conditional_18_For_2_Conditional_2_Template, 2, 0, "div", 19);
    \u0275\u0275elementStart(3, "span", 20)(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PropuestasProveedor_Conditional_18_For_2_Conditional_8_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-status-badge", 24);
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const propuesta_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(propuesta_r4.imagen_url ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(propuesta_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(propuesta_r4.proveedor.razon_social);
    \u0275\u0275advance();
    \u0275\u0275conditional(propuesta_r4.descripcion ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("active", propuesta_r4.disponibilidad);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge--active", propuesta_r4.estado === "APROBADO")("badge--inactive", propuesta_r4.estado !== "APROBADO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", propuesta_r4.estado === "PENDIENTE" ? "Pendiente" : propuesta_r4.estado === "APROBADO" ? "Aprobada" : "Rechazada", " ");
  }
}
function PropuestasProveedor_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, PropuestasProveedor_Conditional_18_For_2_Template, 12, 10, "button", 16, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.propuestas());
  }
}
function PropuestasProveedor_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(p_r6.imagen_url), \u0275\u0275sanitizeUrl);
  }
}
function PropuestasProveedor_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "app-icon", 40);
    \u0275\u0275elementEnd();
  }
}
function PropuestasProveedor_Conditional_19_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_19_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r6 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rechazar(p_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 42);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_19_Conditional_30_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.iniciarAprobacion());
    });
    \u0275\u0275text(3, " Aprobar propuesta ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.rechazandoId() === p_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.rechazandoId() === p_r6.id ? "Rechazando\u2026" : "Rechazar propuesta", " ");
  }
}
function PropuestasProveedor_Conditional_19_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_19_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrarRevision());
    });
    \u0275\u0275text(1, "Cerrar");
    \u0275\u0275elementEnd();
  }
}
function PropuestasProveedor_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarRevision());
    });
    \u0275\u0275elementStart(1, "aside", 28);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_19_Template_aside_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "header", 29)(3, "h2");
    \u0275\u0275text(4, "Revisar propuesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function PropuestasProveedor_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarRevision());
    });
    \u0275\u0275element(6, "app-icon", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275conditionalCreate(8, PropuestasProveedor_Conditional_19_Conditional_8_Template, 1, 1, "img", 33)(9, PropuestasProveedor_Conditional_19_Conditional_9_Template, 2, 0, "div", 34);
    \u0275\u0275elementStart(10, "div", 35)(11, "span", 36);
    \u0275\u0275text(12, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "span", 36);
    \u0275\u0275text(17, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 37);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 35)(21, "span", 36);
    \u0275\u0275text(22, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 37);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 35)(26, "span", 36);
    \u0275\u0275text(27, "Disponibilidad declarada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "app-status-badge", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "footer", 38);
    \u0275\u0275conditionalCreate(30, PropuestasProveedor_Conditional_19_Conditional_30_Template, 4, 2)(31, PropuestasProveedor_Conditional_19_Conditional_31_Template, 2, 0, "button", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r6 = ctx;
    \u0275\u0275advance(8);
    \u0275\u0275conditional(p_r6.imagen_url ? 8 : 9);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r6.proveedor.razon_social);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r6.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r6.descripcion || "Sin descripci\xF3n");
    \u0275\u0275advance(4);
    \u0275\u0275property("active", p_r6.disponibilidad);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r6.estado === "PENDIENTE" ? 30 : 31);
  }
}
var PropuestasProveedor = class _PropuestasProveedor {
  productoService = inject(ProductoService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  resolveMediaUrl = resolveMediaUrl;
  propuestas = signal(
    [],
    ...ngDevMode ? [{ debugName: "propuestas" }] : (
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
  filtroEstado = signal(
    "PENDIENTE",
    ...ngDevMode ? [{ debugName: "filtroEstado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  revisando = signal(
    null,
    ...ngDevMode ? [{ debugName: "revisando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  aprobando = signal(
    null,
    ...ngDevMode ? [{ debugName: "aprobando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rechazandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "rechazandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submittingAprobar = signal(
    false,
    ...ngDevMode ? [{ debugName: "submittingAprobar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.load();
  }
  onFiltroChange(value) {
    this.filtroEstado.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.productoService.listPropuestas(this.filtroEstado()).subscribe({
      next: (propuestas) => {
        this.propuestas.set(propuestas);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.propuestas.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  abrirRevision(propuesta) {
    this.revisando.set(propuesta);
  }
  cerrarRevision() {
    this.revisando.set(null);
  }
  iniciarAprobacion() {
    const propuesta = this.revisando();
    if (!propuesta) {
      return;
    }
    this.aprobando.set(propuesta);
    this.revisando.set(null);
  }
  cerrarAprobacion() {
    this.aprobando.set(null);
  }
  guardarAprobacion(payload) {
    this.submittingAprobar.set(true);
    this.productoService.create(payload).subscribe({
      next: () => {
        this.submittingAprobar.set(false);
        this.aprobando.set(null);
        this.toast.success("Propuesta aprobada: el producto ya est\xE1 creado.");
        this.load();
      },
      error: (err) => {
        this.submittingAprobar.set(false);
        if (err.status === 409) {
          this.toast.error("Esa propuesta ya fue aprobada o rechazada.");
        } else if (err.status === 422) {
          this.toast.error("Revisa los datos ingresados: alguna referencia seleccionada no es v\xE1lida.");
        } else {
          this.toast.error("No se pudo aprobar la propuesta. Intenta nuevamente.");
        }
      }
    });
  }
  async rechazar(propuesta) {
    const confirmado = await this.confirmDialog.confirm({
      title: "\xBFRechazar propuesta?",
      message: `"${propuesta.nombre}" de ${propuesta.proveedor.razon_social} quedar\xE1 marcada como rechazada. El proveedor seguir\xE1 vi\xE9ndola en su historial, pero no se convertir\xE1 en un producto.`,
      confirmText: "Rechazar",
      danger: true
    });
    if (!confirmado) {
      return;
    }
    this.rechazandoId.set(propuesta.id);
    this.productoService.rechazarPropuesta(propuesta.id).subscribe({
      next: () => {
        this.rechazandoId.set(null);
        this.revisando.set(null);
        this.toast.success("Propuesta rechazada.");
        this.load();
      },
      error: () => {
        this.rechazandoId.set(null);
        this.toast.error("No se pudo rechazar la propuesta. Intenta nuevamente.");
      }
    });
  }
  static \u0275fac = function PropuestasProveedor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropuestasProveedor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropuestasProveedor, selectors: [["app-propuestas-proveedor"]], decls: 21, vars: 6, consts: [[1, "admin-card", "section"], [1, "section__header"], [1, "table-toolbar", "section__toolbar"], [1, "status-select", 3, "ngModelChange", "ngModel"], ["value", "PENDIENTE"], ["value", "APROBADO"], ["value", "RECHAZADO"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "lista-propuestas"], [1, "drawer-overlay"], [3, "save", "close", "open", "propuestaPreseleccionada", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", 1, "propuesta-row"], ["type", "button", 1, "propuesta-row", 3, "click"], ["alt", "", 1, "propuesta-row__imagen", 3, "src"], [1, "propuesta-row__imagen", "propuesta-row__imagen--placeholder"], [1, "propuesta-row__info"], [1, "propuesta-row__nombre"], [1, "propuesta-row__meta"], [1, "propuesta-row__descripcion"], [3, "active"], [1, "badge"], ["name", "products", 2, "width", "16px", "height", "16px"], [1, "drawer-overlay", 3, "click"], [1, "drawer", 3, "click"], [1, "drawer__header"], ["type", "button", "aria-label", "Cerrar", 1, "icon-btn", 3, "click"], ["name", "close", 2, "width", "16px", "height", "16px"], [1, "drawer__form"], ["alt", "", 1, "revision__imagen", 3, "src"], [1, "revision__imagen", "revision__imagen--placeholder"], [1, "field"], [1, "field__label"], [1, "revision__valor"], [1, "drawer__footer"], ["type", "button", 1, "btn", "btn--ghost"], ["name", "products", 2, "width", "28px", "height", "28px"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function PropuestasProveedor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Propuestas de proveedores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Revisa, aprueba o rechaza las prendas que los proveedores ofrecen a FashionStore.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 2)(8, "select", 3);
      \u0275\u0275listener("ngModelChange", function PropuestasProveedor_Template_select_ngModelChange_8_listener($event) {
        return ctx.onFiltroChange($event);
      });
      \u0275\u0275elementStart(9, "option", 4);
      \u0275\u0275text(10, "Pendientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 5);
      \u0275\u0275text(12, "Aprobadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 6);
      \u0275\u0275text(14, "Rechazadas");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, PropuestasProveedor_Conditional_15_Template, 4, 0, "div", 7)(16, PropuestasProveedor_Conditional_16_Template, 7, 1, "div", 8)(17, PropuestasProveedor_Conditional_17_Template, 5, 1, "div", 9)(18, PropuestasProveedor_Conditional_18_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, PropuestasProveedor_Conditional_19_Template, 32, 6, "div", 11);
      \u0275\u0275elementStart(20, "app-producto-form", 12);
      \u0275\u0275listener("save", function PropuestasProveedor_Template_app_producto_form_save_20_listener($event) {
        return ctx.guardarAprobacion($event);
      })("close", function PropuestasProveedor_Template_app_producto_form_close_20_listener() {
        return ctx.cerrarAprobacion();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.filtroEstado());
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 15 : ctx.errorMessage() ? 16 : ctx.propuestas().length === 0 ? 17 : 18);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_3_0 = ctx.revisando()) ? 19 : -1, tmp_3_0);
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.aprobando() !== null)("propuestaPreseleccionada", ctx.aprobando())("submitting", ctx.submittingAprobar());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, ProductoForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.lista-propuestas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.propuesta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  background: var(--%NS%color-white);\n  cursor: pointer;\n  text-align: left;\n}\n.propuesta-row[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.propuesta-row__imagen[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--%NS%color-card-bg);\n}\n.propuesta-row__imagen--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n}\n.propuesta-row__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.propuesta-row__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.propuesta-row__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.propuesta-row__descripcion[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 320px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.revision__imagen[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 200px;\n  height: 200px;\n  border-radius: var(--%NS%radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--%NS%color-border);\n  align-self: flex-start;\n}\n.revision__imagen--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n  background: var(--%NS%color-card-bg);\n}\n.revision__valor[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text);\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n}\n@media (max-width: 560px) {\n  .propuesta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .propuesta-row__imagen[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 120px;\n  }\n  .propuesta-row__info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .propuesta-row__descripcion[_ngcontent-%COMP%] {\n    max-width: 100%;\n    white-space: normal;\n  }\n  .revision__imagen[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=propuestas-proveedor-ABP4OXWJ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropuestasProveedor, [{
    type: Component,
    args: [{ selector: "app-propuestas-proveedor", imports: [FormsModule, Icon, StatusBadge, ProductoForm], template: `<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Propuestas de proveedores</h3>\r
      <p>Revisa, aprueba o rechaza las prendas que los proveedores ofrecen a FashionStore.</p>\r
    </div>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <select class="status-select" [ngModel]="filtroEstado()" (ngModelChange)="onFiltroChange($event)">\r
      <option value="PENDIENTE">Pendientes</option>\r
      <option value="APROBADO">Aprobadas</option>\r
      <option value="RECHAZADO">Rechazadas</option>\r
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
      <span class="state-block__title">No se pudieron cargar las propuestas</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (propuestas().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">\r
        {{\r
          filtroEstado() === 'PENDIENTE'\r
            ? 'Sin propuestas pendientes'\r
            : filtroEstado() === 'APROBADO'\r
              ? 'Sin propuestas aprobadas'\r
              : 'Sin propuestas rechazadas'\r
        }}\r
      </span>\r
      <span>Las propuestas que env\xEDen los proveedores aparecer\xE1n aqu\xED.</span>\r
    </div>\r
  } @else {\r
    <div class="lista-propuestas">\r
      @for (propuesta of propuestas(); track propuesta.id) {\r
        <button type="button" class="propuesta-row" (click)="abrirRevision(propuesta)">\r
          @if (propuesta.imagen_url) {\r
            <img [src]="resolveMediaUrl(propuesta.imagen_url)" alt="" class="propuesta-row__imagen" />\r
          } @else {\r
            <div class="propuesta-row__imagen propuesta-row__imagen--placeholder">\r
              <app-icon name="products" style="width: 16px; height: 16px" />\r
            </div>\r
          }\r
          <span class="propuesta-row__info">\r
            <span class="propuesta-row__nombre">{{ propuesta.nombre }}</span>\r
            <span class="propuesta-row__meta">{{ propuesta.proveedor.razon_social }}</span>\r
            @if (propuesta.descripcion) {\r
              <span class="propuesta-row__descripcion">{{ propuesta.descripcion }}</span>\r
            }\r
          </span>\r
          <app-status-badge [active]="propuesta.disponibilidad" />\r
          <span\r
            class="badge"\r
            [class.badge--active]="propuesta.estado === 'APROBADO'"\r
            [class.badge--inactive]="propuesta.estado !== 'APROBADO'"\r
          >\r
            {{\r
              propuesta.estado === 'PENDIENTE'\r
                ? 'Pendiente'\r
                : propuesta.estado === 'APROBADO'\r
                  ? 'Aprobada'\r
                  : 'Rechazada'\r
            }}\r
          </span>\r
        </button>\r
      }\r
    </div>\r
  }\r
</section>\r
\r
@if (revisando(); as p) {\r
  <div class="drawer-overlay" (click)="cerrarRevision()">\r
    <aside class="drawer" (click)="$event.stopPropagation()">\r
      <header class="drawer__header">\r
        <h2>Revisar propuesta</h2>\r
        <button type="button" class="icon-btn" (click)="cerrarRevision()" aria-label="Cerrar">\r
          <app-icon name="close" style="width: 16px; height: 16px" />\r
        </button>\r
      </header>\r
\r
      <div class="drawer__form">\r
        @if (p.imagen_url) {\r
          <img [src]="resolveMediaUrl(p.imagen_url)" alt="" class="revision__imagen" />\r
        } @else {\r
          <div class="revision__imagen revision__imagen--placeholder">\r
            <app-icon name="products" style="width: 28px; height: 28px" />\r
          </div>\r
        }\r
\r
        <div class="field">\r
          <span class="field__label">Proveedor</span>\r
          <span class="revision__valor">{{ p.proveedor.razon_social }}</span>\r
        </div>\r
\r
        <div class="field">\r
          <span class="field__label">Nombre</span>\r
          <span class="revision__valor">{{ p.nombre }}</span>\r
        </div>\r
\r
        <div class="field">\r
          <span class="field__label">Descripci\xF3n</span>\r
          <span class="revision__valor">{{ p.descripcion || 'Sin descripci\xF3n' }}</span>\r
        </div>\r
\r
        <div class="field">\r
          <span class="field__label">Disponibilidad declarada</span>\r
          <app-status-badge [active]="p.disponibilidad" />\r
        </div>\r
\r
        <footer class="drawer__footer">\r
          @if (p.estado === 'PENDIENTE') {\r
            <button\r
              type="button"\r
              class="btn btn--ghost"\r
              [disabled]="rechazandoId() === p.id"\r
              (click)="rechazar(p)"\r
            >\r
              {{ rechazandoId() === p.id ? 'Rechazando\u2026' : 'Rechazar propuesta' }}\r
            </button>\r
            <button type="button" class="btn btn--primary" (click)="iniciarAprobacion()">\r
              Aprobar propuesta\r
            </button>\r
          } @else {\r
            <button type="button" class="btn btn--ghost" (click)="cerrarRevision()">Cerrar</button>\r
          }\r
        </footer>\r
      </div>\r
    </aside>\r
  </div>\r
}\r
\r
<app-producto-form\r
  [open]="aprobando() !== null"\r
  [propuestaPreseleccionada]="aprobando()"\r
  [submitting]="submittingAprobar()"\r
  (save)="guardarAprobacion($event)"\r
  (close)="cerrarAprobacion()"\r
/>\r
`, styles: ["/* src/app/sucursales-catalogo/cu08-gestionar-productos/propuestas-proveedor/propuestas-proveedor.scss */\n:host {\n  display: block;\n}\n.lista-propuestas {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.propuesta-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-white);\n  cursor: pointer;\n  text-align: left;\n}\n.propuesta-row:hover {\n  background: var(--color-bg);\n}\n.propuesta-row__imagen {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--color-card-bg);\n}\n.propuesta-row__imagen--placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n}\n.propuesta-row__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.propuesta-row__nombre {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.propuesta-row__meta {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.propuesta-row__descripcion {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 320px;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-btn:hover {\n  background: var(--color-bg);\n}\n.revision__imagen {\n  width: 100%;\n  max-width: 200px;\n  height: 200px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  border: 1px solid var(--color-border);\n  align-self: flex-start;\n}\n.revision__imagen--placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n  background: var(--color-card-bg);\n}\n.revision__valor {\n  font-size: 13px;\n  color: var(--color-text);\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n}\n@media (max-width: 560px) {\n  .propuesta-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .propuesta-row__imagen {\n    width: 100%;\n    height: 120px;\n  }\n  .propuesta-row__info {\n    width: 100%;\n  }\n  .propuesta-row__descripcion {\n    max-width: 100%;\n    white-space: normal;\n  }\n  .revision__imagen {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=propuestas-proveedor-ABP4OXWJ.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropuestasProveedor, { className: "PropuestasProveedor", filePath: "src/app/sucursales-catalogo/cu08-gestionar-productos/propuestas-proveedor/propuestas-proveedor.ts", lineNumber: 25 });
})();

// src/app/sucursales-catalogo/cu08-gestionar-productos/gestionar-productos.ts
var _forTrack03 = ($index, $item) => $item.id;
function GestionarProductos_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-propuestas-proveedor");
  }
}
function GestionarProductos_Conditional_6_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", categoria_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(categoria_r3.nombre);
  }
}
function GestionarProductos_Conditional_6_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const temporada_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", temporada_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(temporada_r4.nombre);
  }
}
function GestionarProductos_Conditional_6_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 20)(2, "div", 20)(3, "div", 20);
    \u0275\u0275elementEnd();
  }
}
function GestionarProductos_Conditional_6_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 21);
    \u0275\u0275text(2, "No se pudieron cargar los productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Conditional_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function GestionarProductos_Conditional_6_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 21);
    \u0275\u0275text(2, "A\xFAn no hay productos registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Crea el primer producto o convierte una propuesta de un proveedor.");
    \u0275\u0275elementEnd()();
  }
}
function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const producto_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.resolveMediaUrl(producto_r7.imagen_principal_url), \u0275\u0275sanitizeUrl);
  }
}
function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "S/I");
    \u0275\u0275elementEnd();
  }
}
function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_20_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_20_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const producto_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openView(producto_r7, $event));
    });
    \u0275\u0275element(2, "app-icon", 36);
    \u0275\u0275text(3, " Ver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const producto_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(producto_r7));
    });
    \u0275\u0275element(5, "app-icon", 37);
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_20_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const producto_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(producto_r7, $event));
    });
    \u0275\u0275element(8, "app-icon", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 39);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_20_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const producto_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteProducto(producto_r7, $event));
    });
    \u0275\u0275element(11, "app-icon", 40);
    \u0275\u0275text(12, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const producto_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classProp("row-actions__item--danger", producto_r7.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", producto_r7.is_active ? "Desactivar" : "Activar", " ");
  }
}
function GestionarProductos_Conditional_6_Conditional_34_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 24)(2, "div", 25);
    \u0275\u0275conditionalCreate(3, GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_3_Template, 1, 1, "img", 26)(4, GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_4_Template, 2, 0, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 28);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "app-status-badge", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 30)(18, "button", 31);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Conditional_34_For_19_Template_button_click_18_listener($event) {
      const producto_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(producto_r7.id, $event));
    });
    \u0275\u0275element(19, "app-icon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, GestionarProductos_Conditional_6_Conditional_34_For_19_Conditional_20_Template, 13, 3, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const producto_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(producto_r7.imagen_principal_url ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", producto_r7.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r7.proveedor.razon_social);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r7.categoria.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", producto_r7.temporada.nombre, " / ", producto_r7.coleccion.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", producto_r7.precio_venta);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", producto_r7.is_active);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.openMenuId() === producto_r7.id ? 20 : -1);
  }
}
function GestionarProductos_Conditional_6_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 23)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Temporada / Colecci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, GestionarProductos_Conditional_6_Conditional_34_For_19_Template, 21, 9, "tr", null, _forTrack03);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.productos());
  }
}
function GestionarProductos_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 3)(2, "div")(3, "h3");
    \u0275\u0275text(4, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Gestiona el cat\xE1logo de prendas de FashionStore.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function GestionarProductos_Conditional_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275element(8, "app-icon", 5);
    \u0275\u0275text(9, " Nuevo producto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
    \u0275\u0275element(12, "app-icon", 8);
    \u0275\u0275elementStart(13, "input", 9);
    \u0275\u0275listener("ngModelChange", function GestionarProductos_Conditional_6_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 10);
    \u0275\u0275listener("ngModelChange", function GestionarProductos_Conditional_6_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoriaFilterChange($event));
    });
    \u0275\u0275elementStart(15, "option", 11);
    \u0275\u0275text(16, "Todas las categor\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, GestionarProductos_Conditional_6_For_18_Template, 2, 2, "option", 11, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(19, "select", 10);
    \u0275\u0275listener("ngModelChange", function GestionarProductos_Conditional_6_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTemporadaFilterChange($event));
    });
    \u0275\u0275elementStart(20, "option", 11);
    \u0275\u0275text(21, "Todas las temporadas");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, GestionarProductos_Conditional_6_For_23_Template, 2, 2, "option", 11, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "select", 10);
    \u0275\u0275listener("ngModelChange", function GestionarProductos_Conditional_6_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusFilterChange($event));
    });
    \u0275\u0275elementStart(25, "option", 12);
    \u0275\u0275text(26, "Todos los estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 13);
    \u0275\u0275text(28, "Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 14);
    \u0275\u0275text(30, "Inactivos");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, GestionarProductos_Conditional_6_Conditional_31_Template, 4, 0, "div", 15)(32, GestionarProductos_Conditional_6_Conditional_32_Template, 7, 1, "div", 16)(33, GestionarProductos_Conditional_6_Conditional_33_Template, 5, 0, "div", 17)(34, GestionarProductos_Conditional_6_Conditional_34_Template, 20, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "app-producto-form", 19);
    \u0275\u0275listener("save", function GestionarProductos_Conditional_6_Template_app_producto_form_save_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save($event));
    })("close", function GestionarProductos_Conditional_6_Template_app_producto_form_close_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngModel", ctx_r1.searchTerm());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.categoriaFilter());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categorias());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.temporadaFilter());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.temporadas());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.statusFilter());
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.loading() ? 31 : ctx_r1.errorMessage() ? 32 : ctx_r1.productos().length === 0 ? 33 : 34);
    \u0275\u0275advance(4);
    \u0275\u0275property("open", ctx_r1.drawerOpen())("producto", ctx_r1.editingProducto())("readonly", ctx_r1.viewMode())("submitting", ctx_r1.submitting());
  }
}
var GestionarProductos = class _GestionarProductos {
  resolveMediaUrl = resolveMediaUrl;
  productoService = inject(ProductoService);
  categoryService = inject(CategoryService);
  temporadaService = inject(TemporadaAdminService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  activeTab = signal(
    "productos",
    ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  productos = signal(
    [],
    ...ngDevMode ? [{ debugName: "productos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  categorias = signal(
    [],
    ...ngDevMode ? [{ debugName: "categorias" }] : (
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
  categoriaFilter = signal(
    null,
    ...ngDevMode ? [{ debugName: "categoriaFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  temporadaFilter = signal(
    null,
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
  editingProducto = signal(
    null,
    ...ngDevMode ? [{ debugName: "editingProducto" }] : (
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
    this.categoryService.list().subscribe((categorias) => this.categorias.set(categorias));
    this.temporadaService.list().subscribe((temporadas) => this.temporadas.set(temporadas));
    this.load();
  }
  closeMenus() {
    this.openMenuId.set(null);
  }
  setTab(tab) {
    this.activeTab.set(tab);
    if (tab === "productos") {
      this.load();
    }
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.load(), 350);
  }
  onCategoriaFilterChange(value) {
    this.categoriaFilter.set(value ? Number(value) : null);
    this.load();
  }
  onTemporadaFilterChange(value) {
    this.temporadaFilter.set(value ? Number(value) : null);
    this.load();
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.productoService.list({
      search: this.searchTerm() || void 0,
      categoria_id: this.categoriaFilter() ?? void 0,
      temporada_id: this.temporadaFilter() ?? void 0,
      estado: this.statusFilter()
    }).subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.productos.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Verifica que la API est\xE9 disponible e int\xE9ntalo nuevamente.");
      }
    });
  }
  openCreate() {
    this.editingProducto.set(null);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openEdit(producto) {
    this.openMenuId.set(null);
    this.editingProducto.set(producto);
    this.viewMode.set(false);
    this.drawerOpen.set(true);
  }
  openView(producto, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    this.editingProducto.set(producto);
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
    const editing = this.editingProducto();
    this.submitting.set(true);
    if (editing) {
      const requests = [this.productoService.update(editing.id, payload)];
      if (payload.is_active !== editing.is_active) {
        requests.push(this.productoService.setActive(editing.id, payload.is_active ?? true));
      }
      forkJoin(requests).subscribe({
        next: () => this.onSaveSuccess("Producto actualizado correctamente."),
        error: (err) => this.onSaveError(err)
      });
      return;
    }
    this.productoService.create(payload).subscribe({
      next: (creado) => {
        this.submitting.set(false);
        this.editingProducto.set(creado);
        this.toast.success("Producto creado. Ahora puedes cargar su imagen principal.");
        this.load();
      },
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
      this.toast.error("Esa propuesta ya fue convertida en un producto.");
    } else if (err.status === 422) {
      this.toast.error("Revisa los datos ingresados: alguna referencia seleccionada no es v\xE1lida.");
    } else {
      this.toast.error("No se pudo guardar el producto. Intenta nuevamente.");
    }
  }
  async toggleStatus(producto, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    if (producto.is_active) {
      const confirmed = await this.confirmDialog.confirm({
        title: "\xBFDesactivar producto?",
        message: `${producto.nombre} dejar\xE1 de estar disponible en el cat\xE1logo.`,
        confirmText: "Desactivar",
        danger: true
      });
      if (!confirmed) {
        return;
      }
    }
    this.productoService.setActive(producto.id, !producto.is_active).subscribe({
      next: () => {
        this.toast.success(producto.is_active ? "Producto desactivado." : "Producto activado correctamente.");
        this.load();
      },
      error: () => this.toast.error("No se pudo actualizar el estado del producto.")
    });
  }
  async deleteProducto(producto, event) {
    event.stopPropagation();
    this.openMenuId.set(null);
    const confirmed = await this.confirmDialog.confirm({
      title: "\xBFEliminar producto?",
      message: `Se eliminar\xE1 permanentemente "${producto.nombre}". Esta acci\xF3n no se puede deshacer.`,
      confirmText: "Eliminar",
      danger: true
    });
    if (!confirmed) {
      return;
    }
    this.productoService.delete(producto.id).subscribe({
      next: () => {
        this.toast.success("Producto eliminado correctamente.");
        this.load();
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error("No se puede eliminar este producto porque tiene promociones o relaciones asociadas.");
        } else if (err.status === 404) {
          this.toast.error("El producto no existe o ya fue eliminado.");
        } else {
          this.toast.error("No se pudo eliminar el producto.");
        }
      }
    });
  }
  static \u0275fac = function GestionarProductos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GestionarProductos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestionarProductos, selectors: [["app-gestionar-productos"]], hostBindings: function GestionarProductos_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function GestionarProductos_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 7, vars: 5, consts: [[1, "tabs"], ["type", "button", 1, "tabs__item", 3, "click"], [1, "admin-card", "section"], [1, "section__header"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["name", "plus", 2, "width", "14px", "height", "14px"], [1, "table-toolbar", "section__toolbar"], [1, "search-input"], ["name", "search"], ["type", "text", "placeholder", "Buscar producto...", 3, "ngModelChange", "ngModel"], [1, "status-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "section__body"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "table-scroll"], [3, "save", "close", "open", "producto", "readonly", "submitting"], [1, "skeleton-row"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "data-table"], [1, "cell-title"], [1, "product-cell"], ["alt", "", 1, "thumb", 3, "src"], [1, "thumb-placeholder"], [1, "cell-secondary"], [3, "active"], [1, "row-actions"], ["type", "button", "aria-label", "Acciones", 1, "row-actions__trigger", 3, "click"], ["name", "dots"], [1, "row-actions__menu"], [1, "row-actions__menu", 3, "click"], ["type", "button", 1, "row-actions__item", 3, "click"], ["name", "eye"], ["name", "edit"], ["name", "power"], ["type", "button", 1, "row-actions__item", "row-actions__item--danger", 3, "click"], ["name", "close"]], template: function GestionarProductos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function GestionarProductos_Template_button_click_1_listener() {
        return ctx.setTab("productos");
      });
      \u0275\u0275text(2, " Productos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 1);
      \u0275\u0275listener("click", function GestionarProductos_Template_button_click_3_listener() {
        return ctx.setTab("propuestas");
      });
      \u0275\u0275text(4, " Propuestas de proveedores ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, GestionarProductos_Conditional_5_Template, 1, 0, "app-propuestas-proveedor")(6, GestionarProductos_Conditional_6_Template, 36, 11);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("is-active", ctx.activeTab() === "productos");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.activeTab() === "propuestas");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "propuestas" ? 5 : 6);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Icon, StatusBadge, ProductoForm, PropuestasProveedor], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.tabs__item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n}\n.tabs__item[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-text);\n}\n.tabs__item.is-active[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  border-bottom-color: var(--%NS%color-primary);\n}\n@media (max-width: 480px) {\n  .tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .tabs__item[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=gestionar-productos-QOKVMDAY.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestionarProductos, [{
    type: Component,
    args: [{ selector: "app-gestionar-productos", imports: [FormsModule, Icon, StatusBadge, ProductoForm, PropuestasProveedor], template: `<div class="tabs">\r
  <button\r
    type="button"\r
    class="tabs__item"\r
    [class.is-active]="activeTab() === 'productos'"\r
    (click)="setTab('productos')"\r
  >\r
    Productos\r
  </button>\r
  <button\r
    type="button"\r
    class="tabs__item"\r
    [class.is-active]="activeTab() === 'propuestas'"\r
    (click)="setTab('propuestas')"\r
  >\r
    Propuestas de proveedores\r
  </button>\r
</div>\r
\r
@if (activeTab() === 'propuestas') {\r
  <app-propuestas-proveedor />\r
} @else {\r
\r
<section class="admin-card section">\r
  <div class="section__header">\r
    <div>\r
      <h3>Productos</h3>\r
      <p>Gestiona el cat\xE1logo de prendas de FashionStore.</p>\r
    </div>\r
    <button type="button" class="btn btn--primary" (click)="openCreate()">\r
      <app-icon name="plus" style="width: 14px; height: 14px" />\r
      Nuevo producto\r
    </button>\r
  </div>\r
\r
  <div class="table-toolbar section__toolbar">\r
    <label class="search-input">\r
      <app-icon name="search" />\r
      <input\r
        type="text"\r
        placeholder="Buscar producto..."\r
        [ngModel]="searchTerm()"\r
        (ngModelChange)="onSearchChange($event)"\r
      />\r
    </label>\r
\r
    <select\r
      class="status-select"\r
      [ngModel]="categoriaFilter()"\r
      (ngModelChange)="onCategoriaFilterChange($event)"\r
    >\r
      <option [ngValue]="null">Todas las categor\xEDas</option>\r
      @for (categoria of categorias(); track categoria.id) {\r
        <option [ngValue]="categoria.id">{{ categoria.nombre }}</option>\r
      }\r
    </select>\r
\r
    <select\r
      class="status-select"\r
      [ngModel]="temporadaFilter()"\r
      (ngModelChange)="onTemporadaFilterChange($event)"\r
    >\r
      <option [ngValue]="null">Todas las temporadas</option>\r
      @for (temporada of temporadas(); track temporada.id) {\r
        <option [ngValue]="temporada.id">{{ temporada.nombre }}</option>\r
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
      <span class="state-block__title">No se pudieron cargar los productos</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (productos().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">A\xFAn no hay productos registrados</span>\r
      <span>Crea el primer producto o convierte una propuesta de un proveedor.</span>\r
    </div>\r
  } @else {\r
    <div class="table-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Producto</th>\r
            <th>Proveedor</th>\r
            <th>Categor\xEDa</th>\r
            <th>Temporada / Colecci\xF3n</th>\r
            <th>Precio</th>\r
            <th>Estado</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (producto of productos(); track producto.id) {\r
            <tr>\r
              <td class="cell-title">\r
                <div class="product-cell">\r
                  @if (producto.imagen_principal_url) {\r
                    <img class="thumb" [src]="resolveMediaUrl(producto.imagen_principal_url)" alt="" />\r
                  } @else {\r
                    <span class="thumb-placeholder">S/I</span>\r
                  }\r
                  {{ producto.nombre }}\r
                </div>\r
              </td>\r
              <td class="cell-secondary">{{ producto.proveedor.razon_social }}</td>\r
              <td class="cell-secondary">{{ producto.categoria.nombre }}</td>\r
              <td class="cell-secondary">{{ producto.temporada.nombre }} / {{ producto.coleccion.nombre }}</td>\r
              <td class="cell-title">Bs {{ producto.precio_venta }}</td>\r
              <td><app-status-badge [active]="producto.is_active" /></td>\r
              <td>\r
                <div class="row-actions">\r
                  <button\r
                    type="button"\r
                    class="row-actions__trigger"\r
                    (click)="toggleMenu(producto.id, $event)"\r
                    aria-label="Acciones"\r
                  >\r
                    <app-icon name="dots" />\r
                  </button>\r
                  @if (openMenuId() === producto.id) {\r
                    <div class="row-actions__menu" (click)="$event.stopPropagation()">\r
                      <button type="button" class="row-actions__item" (click)="openView(producto, $event)">\r
                        <app-icon name="eye" /> Ver\r
                      </button>\r
                      <button type="button" class="row-actions__item" (click)="openEdit(producto)">\r
                        <app-icon name="edit" /> Editar\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item"\r
                        [class.row-actions__item--danger]="producto.is_active"\r
                        (click)="toggleStatus(producto, $event)"\r
                      >\r
                        <app-icon name="power" /> {{ producto.is_active ? 'Desactivar' : 'Activar' }}\r
                      </button>\r
                      <button\r
                        type="button"\r
                        class="row-actions__item row-actions__item--danger"\r
                        (click)="deleteProducto(producto, $event)"\r
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
<app-producto-form\r
  [open]="drawerOpen()"\r
  [producto]="editingProducto()"\r
  [readonly]="viewMode()"\r
  [submitting]="submitting()"\r
  (save)="save($event)"\r
  (close)="closeDrawer()"\r
/>\r
\r
}\r
`, styles: ["/* src/app/sucursales-catalogo/cu08-gestionar-productos/gestionar-productos.scss */\n:host {\n  display: block;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n.tabs__item {\n  padding: 10px 14px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n}\n.tabs__item:hover {\n  color: var(--color-text);\n}\n.tabs__item.is-active {\n  color: var(--color-primary);\n  border-bottom-color: var(--color-primary);\n}\n@media (max-width: 480px) {\n  .tabs {\n    overflow-x: auto;\n  }\n  .tabs__item {\n    flex-shrink: 0;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=gestionar-productos-QOKVMDAY.css.map */\n"] }]
  }], () => [], { closeMenus: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestionarProductos, { className: "GestionarProductos", filePath: "src/app/sucursales-catalogo/cu08-gestionar-productos/gestionar-productos.ts", lineNumber: 26 });
})();
export {
  GestionarProductos
};
//# debugId=1ea37ba4-b63e-5ae7-a714-d24bda0de65e
//# sourceMappingURL=chunk-YDMWBCC5.js.map
