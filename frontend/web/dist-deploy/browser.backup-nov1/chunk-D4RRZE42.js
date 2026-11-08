import {
  formatearFechaReserva,
  formatearHorarioReserva
} from "./chunk-KHVJ4PNO.js";
import {
  CarritoService
} from "./chunk-XEZGY4VJ.js";
import {
  SucursalPublicaService
} from "./chunk-CYFUGY7Z.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-OB3O2VC6.js";
import {
  CatalogoService
} from "./chunk-PBZJP2BS.js";
import {
  resolveMediaUrl
} from "./chunk-VOZDT4OK.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-OXXL2I3V.js";
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
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNHCNXB7.js";

// src/app/features/reservas/crear-reserva/crear-reserva.service.ts
var CrearReservaService = class _CrearReservaService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/reservas`;
  crear(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  /** Reservas PROPIAS en `sucursalId` a las que hoy se les podría agregar
   * una prenda más (estado_general PENDIENTE, ver GET /reservas/compatibles
   * en el backend) -- lista vacía si no hay ninguna. */
  listarCompatibles(sucursalId) {
    return this.http.get(`${this.baseUrl}/compatibles`, {
      params: { sucursal_id: sucursalId }
    });
  }
  /** "Agregar a esta reserva": crea SOLO un ReservaDetalle sobre una
   * cabecera ya existente, nunca una reserva nueva (ver POST
   * /reservas/{id}/detalles en el backend). */
  agregarDetalle(reservaId, payload) {
    return this.http.post(`${this.baseUrl}/${reservaId}/detalles`, payload);
  }
  static \u0275fac = function CrearReservaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrearReservaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CrearReservaService, factory: _CrearReservaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearReservaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/reservas/crear-reserva/horario-reserva.ts
var DIAS_MAXIMO_ANTICIPACION = 7;
var HORA_APERTURA = "10:00";
var HORA_CIERRE_LUN_A_SAB = "20:00";
var DOMINGO_WEEKDAY = 0;
var MINUTOS_ANTICIPACION_MINIMA = 60;
function aMinutos(horaHHmm) {
  const [h, m] = horaHHmm.split(":").map(Number);
  return h * 60 + m;
}
function aHoraHHmm(minutosDesdeMedianoche) {
  const h = Math.floor(minutosDesdeMedianoche / 60);
  return `${String(h).padStart(2, "0")}:00`;
}
function fechaAIsoUtc(fecha) {
  const y = fecha.getUTCFullYear();
  const m = String(fecha.getUTCMonth() + 1).padStart(2, "0");
  const d = String(fecha.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function hoyIso() {
  return fechaAIsoUtc(/* @__PURE__ */ new Date());
}
function fechaMaximaIso() {
  const limite = /* @__PURE__ */ new Date();
  limite.setUTCDate(limite.getUTCDate() + DIAS_MAXIMO_ANTICIPACION);
  return fechaAIsoUtc(limite);
}
function esDomingo(fechaIso) {
  return (/* @__PURE__ */ new Date(`${fechaIso}T00:00:00Z`)).getUTCDay() === DOMINGO_WEEKDAY;
}
function bloquesHorarioDisponibles(fechaIso) {
  if (esDomingo(fechaIso)) {
    return [];
  }
  const apertura = aMinutos(HORA_APERTURA);
  const cierre = aMinutos(HORA_CIERRE_LUN_A_SAB);
  const ultimoBloque = cierre - 60;
  const bloques = [];
  for (let minutos = apertura; minutos <= ultimoBloque; minutos += 60) {
    bloques.push(minutos);
  }
  if (fechaIso === hoyIso()) {
    const ahora = /* @__PURE__ */ new Date();
    const minutoActualUtc = ahora.getUTCHours() * 60 + ahora.getUTCMinutes();
    const minimoValido = minutoActualUtc + MINUTOS_ANTICIPACION_MINIMA;
    return bloques.filter((m) => m >= minimoValido).map(aHoraHHmm);
  }
  return bloques.map(aHoraHHmm);
}
var ABREVIATURAS_DIA = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
function proximosDias() {
  const dias = [];
  const base = /* @__PURE__ */ new Date();
  for (let i = 0; i <= DIAS_MAXIMO_ANTICIPACION; i++) {
    const fecha = new Date(base);
    fecha.setUTCDate(fecha.getUTCDate() + i);
    const iso = fechaAIsoUtc(fecha);
    const diaSemana = fecha.getUTCDay();
    dias.push({
      iso,
      etiqueta: `${ABREVIATURAS_DIA[diaSemana]} ${fecha.getUTCDate()}`,
      esDomingo: diaSemana === DOMINGO_WEEKDAY
    });
  }
  return dias;
}

// src/app/features/reservas/crear-reserva/crear-reserva.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.iso;
function CrearReserva_Conditional_0_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 9)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275element(5, "app-icon", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_3_For_9_Template_button_click_11_listener() {
      const reserva_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.elegirAgregarAReserva(reserva_r5));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reserva_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Reserva ", reserva_r5.codigo_reserva);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", reserva_r5.sucursal.nombre, " \xB7 ", reserva_r5.sucursal.ciudad.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatearFecha(reserva_r5.fecha_reserva), " \xB7 ", ctx_r1.formatearHorario(reserva_r5.hora_inicio, reserva_r5.hora_fin), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", reserva_r5.detalles.length, " ", reserva_r5.detalles.length === 1 ? "prenda" : "prendas", " en esta reserva ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.agregando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.agregando() ? "Agregando..." : "Agregar a esta reserva", " ");
  }
}
function CrearReserva_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrarModalCompatibles());
    })("keydown.escape", function CrearReserva_Conditional_0_Conditional_3_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrarModalCompatibles());
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_3_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 5)(3, "h2", 6);
    \u0275\u0275text(4, "Tienes una reserva pendiente en esta sucursal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrarModalCompatibles());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275repeaterCreate(8, CrearReserva_Conditional_0_Conditional_3_For_9_Template, 13, 9, "article", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 10);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.elegirProgramarOtraVisita());
    });
    \u0275\u0275text(11, " Programar otra visita ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.agregando());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.reservasCompatibles());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.agregando());
  }
}
function CrearReserva_Conditional_0_Conditional_4_For_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "No disponible");
    \u0275\u0275elementEnd();
  }
}
function CrearReserva_Conditional_0_Conditional_4_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_4_For_17_Template_button_click_0_listener() {
      const dia_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.seleccionarFecha(dia_r8.iso, dia_r8.esDomingo));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CrearReserva_Conditional_0_Conditional_4_For_17_Conditional_3_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dia_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-selected", dia_r8.iso === ctx_r1.fechaSeleccionada());
    \u0275\u0275property("disabled", dia_r8.esDomingo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dia_r8.etiqueta);
    \u0275\u0275advance();
    \u0275\u0275conditional(dia_r8.esDomingo ? 3 : -1);
  }
}
function CrearReserva_Conditional_0_Conditional_4_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Sin horarios disponibles ese d\xEDa.");
    \u0275\u0275elementEnd();
  }
}
function CrearReserva_Conditional_0_Conditional_4_Conditional_18_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_4_Conditional_18_Conditional_4_For_2_Template_button_click_0_listener() {
      const bloque_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.seleccionarHora(bloque_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloque_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-selected", bloque_r10 === ctx_r1.horaSeleccionada());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bloque_r10, " ");
  }
}
function CrearReserva_Conditional_0_Conditional_4_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, CrearReserva_Conditional_0_Conditional_4_Conditional_18_Conditional_4_For_2_Template, 2, 3, "button", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.bloquesDisponibles());
  }
}
function CrearReserva_Conditional_0_Conditional_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2, "Horario");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CrearReserva_Conditional_0_Conditional_4_Conditional_18_Conditional_3_Template, 2, 0, "span", 29)(4, CrearReserva_Conditional_0_Conditional_4_Conditional_18_Conditional_4_Template, 3, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.bloquesDisponibles().length === 0 ? 3 : 4);
  }
}
function CrearReserva_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    })("keydown.escape", function CrearReserva_Conditional_0_Conditional_4_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_4_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 5)(3, "h2", 17);
    \u0275\u0275text(4, "Programar reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275element(8, "app-icon", 20);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "div", 22)(13, "span", 23);
    \u0275\u0275text(14, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275repeaterCreate(16, CrearReserva_Conditional_0_Conditional_4_For_17_Template, 4, 5, "button", 25, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, CrearReserva_Conditional_0_Conditional_4_Conditional_18_Template, 5, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Conditional_4_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmar());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.sucursalNombre());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.dias);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.fechaSeleccionada() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.puedeConfirmar);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Reservando..." : "Confirmar reserva", " ");
  }
}
function CrearReserva_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function CrearReserva_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrir());
    });
    \u0275\u0275element(1, "app-icon", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CrearReserva_Conditional_0_Conditional_3_Template, 12, 2, "div", 2);
    \u0275\u0275conditionalCreate(4, CrearReserva_Conditional_0_Conditional_4_Template, 21, 4, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.haySeleccionBase || ctx_r1.verificandoCompatibles())("title", ctx_r1.haySeleccionBase ? "" : "Selecciona una sucursal disponible");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.verificandoCompatibles() ? "Un momento..." : "Reservar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modalCompatiblesAbierto() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modalAbierto() ? 4 : -1);
  }
}
var CrearReserva = class _CrearReserva {
  auth = inject(AuthService);
  service = inject(CrearReservaService);
  toast = inject(ToastService);
  router = inject(Router);
  productoVarianteId = input(
    null,
    ...ngDevMode ? [{ debugName: "productoVarianteId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sucursalId = input(
    null,
    ...ngDevMode ? [{ debugName: "sucursalId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sucursalNombre = input(
    null,
    ...ngDevMode ? [{ debugName: "sucursalNombre" }] : (
      /* istanbul ignore next */
      []
    )
  );
  returnUrl = input(
    "/",
    ...ngDevMode ? [{ debugName: "returnUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Vienen del returnUrl al volver del login (ver producto-detalle.ts) --
  // strings crudos sin validar todavía; este componente decide si siguen
  // siendo válidos antes de confiar en ellos (ver efecto en el constructor).
  fechaRestaurada = input(
    null,
    ...ngDevMode ? [{ debugName: "fechaRestaurada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  horaRestaurada = input(
    null,
    ...ngDevMode ? [{ debugName: "horaRestaurada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reservado = output();
  isAuthenticated = this.auth.isAuthenticated;
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalAbierto = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalAbierto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fechaSeleccionada = signal(
    null,
    ...ngDevMode ? [{ debugName: "fechaSeleccionada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  horaSeleccionada = signal(
    null,
    ...ngDevMode ? [{ debugName: "horaSeleccionada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dias = proximosDias();
  bloquesDisponibles = computed(
    () => {
      const fecha = this.fechaSeleccionada();
      return fecha ? bloquesHorarioDisponibles(fecha) : [];
    },
    ...ngDevMode ? [{ debugName: "bloquesDisponibles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Modal "Tienes una reserva pendiente en esta sucursal" -- se abre EN VEZ
  // del modal de fecha/hora cuando existen reservas compatibles.
  modalCompatiblesAbierto = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalCompatiblesAbierto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  verificandoCompatibles = signal(
    false,
    ...ngDevMode ? [{ debugName: "verificandoCompatibles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reservasCompatibles = signal(
    [],
    ...ngDevMode ? [{ debugName: "reservasCompatibles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  agregando = signal(
    false,
    ...ngDevMode ? [{ debugName: "agregando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formatearFecha = formatearFechaReserva;
  formatearHorario = formatearHorarioReserva;
  restauracionAplicada = false;
  constructor() {
    effect(() => {
      const sucursalId = this.sucursalId();
      const fecha = this.fechaRestaurada();
      const hora = this.horaRestaurada();
      if (this.restauracionAplicada || sucursalId === null || !fecha || !hora) {
        return;
      }
      const fechaValida = fecha >= hoyIso() && fecha <= fechaMaximaIso();
      const horaValida = fechaValida && bloquesHorarioDisponibles(fecha).includes(hora);
      if (!(fechaValida && horaValida)) {
        return;
      }
      this.restauracionAplicada = true;
      this.fechaSeleccionada.set(fecha);
      this.horaSeleccionada.set(hora);
      this._verificarCompatiblesOAbrirModalFecha(sucursalId);
    });
  }
  get esCliente() {
    return this.auth.hasRole("CLIENTE");
  }
  get haySeleccionBase() {
    return this.productoVarianteId() !== null && this.sucursalId() !== null;
  }
  get puedeConfirmar() {
    return this.haySeleccionBase && this.fechaSeleccionada() !== null && this.horaSeleccionada() !== null && !this.submitting();
  }
  abrir() {
    if (!this.haySeleccionBase) {
      return;
    }
    if (!this.isAuthenticated()) {
      this.modalAbierto.set(true);
      return;
    }
    this._verificarCompatiblesOAbrirModalFecha(this.sucursalId());
  }
  _verificarCompatiblesOAbrirModalFecha(sucursalId) {
    this.verificandoCompatibles.set(true);
    this.service.listarCompatibles(sucursalId).subscribe({
      next: (reservas) => {
        this.verificandoCompatibles.set(false);
        if (reservas.length > 0) {
          this.reservasCompatibles.set(reservas);
          this.modalCompatiblesAbierto.set(true);
        } else {
          this.modalAbierto.set(true);
        }
      },
      error: () => {
        this.verificandoCompatibles.set(false);
        this.modalAbierto.set(true);
      }
    });
  }
  cerrar() {
    this.modalAbierto.set(false);
  }
  cerrarModalCompatibles() {
    if (this.agregando()) {
      return;
    }
    this.modalCompatiblesAbierto.set(false);
  }
  elegirAgregarAReserva(reserva) {
    if (this.agregando() || !this.haySeleccionBase) {
      return;
    }
    this.agregando.set(true);
    this.service.agregarDetalle(reserva.id, { producto_variante_id: this.productoVarianteId(), cantidad: 1 }).subscribe({
      next: (actualizada) => {
        this.agregando.set(false);
        this.modalCompatiblesAbierto.set(false);
        this.toast.brand(`Prenda agregada a la reserva ${actualizada.codigo_reserva}.`);
        this.reservado.emit();
      },
      error: (err) => {
        this.agregando.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo agregar la prenda a la reserva. Int\xE9ntalo nuevamente.");
      }
    });
  }
  elegirProgramarOtraVisita() {
    if (this.agregando()) {
      return;
    }
    this.modalCompatiblesAbierto.set(false);
    this.modalAbierto.set(true);
  }
  seleccionarFecha(iso, esDomingo2) {
    if (esDomingo2) {
      return;
    }
    this.fechaSeleccionada.set(iso);
    this.horaSeleccionada.set(null);
  }
  seleccionarHora(hora) {
    this.horaSeleccionada.set(hora);
  }
  confirmar() {
    if (!this.puedeConfirmar) {
      return;
    }
    if (!this.isAuthenticated()) {
      const url = `${this.returnUrl()}&fecha=${this.fechaSeleccionada()}&hora=${this.horaSeleccionada()}`;
      this.router.navigate(["/login"], { queryParams: { returnUrl: url } });
      return;
    }
    this.submitting.set(true);
    this.service.crear({
      producto_variante_id: this.productoVarianteId(),
      sucursal_id: this.sucursalId(),
      cantidad: 1,
      fecha_reserva: this.fechaSeleccionada(),
      hora_inicio: this.horaSeleccionada()
    }).subscribe({
      next: (reserva) => {
        this.submitting.set(false);
        this.modalAbierto.set(false);
        this.fechaSeleccionada.set(null);
        this.horaSeleccionada.set(null);
        this.toast.brand(`Reserva creada correctamente. C\xF3digo: ${reserva.codigo_reserva}`);
        this.reservado.emit();
      },
      error: (err) => {
        this.submitting.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo crear la reserva. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function CrearReserva_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrearReserva)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrearReserva, selectors: [["app-crear-reserva"]], inputs: { productoVarianteId: [1, "productoVarianteId"], sucursalId: [1, "sucursalId"], sucursalNombre: [1, "sucursalNombre"], returnUrl: [1, "returnUrl"], fechaRestaurada: [1, "fechaRestaurada"], horaRestaurada: [1, "horaRestaurada"] }, outputs: { reservado: "reservado" }, decls: 1, vars: 1, consts: [["type", "button", 1, "btn", "btn--primary", "reserva-btn", 3, "click", "disabled", "title"], ["name", "reservations", 2, "width", "14px", "height", "14px"], [1, "reserva-modal-overlay"], [1, "reserva-modal-overlay", 3, "click", "keydown.escape"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "compatibles-modal-titulo", 1, "reserva-modal", 3, "click"], [1, "reserva-modal__header"], ["id", "compatibles-modal-titulo"], ["type", "button", "aria-label", "Cerrar", 1, "reserva-modal__cerrar", 3, "click", "disabled"], [1, "compatibles-lista"], [1, "compatible-card"], ["type", "button", 1, "btn", "btn--ghost", "compatibles-modal__otra", 3, "click", "disabled"], [1, "compatible-card__info"], [1, "compatible-card__codigo"], [1, "compatible-card__linea"], ["name", "branches", 2, "width", "12px", "height", "12px"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", "compatible-card__agregar", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "reserva-modal-titulo", 1, "reserva-modal", 3, "click"], ["id", "reserva-modal-titulo"], ["type", "button", "aria-label", "Cerrar", 1, "reserva-modal__cerrar", 3, "click"], [1, "reserva-modal__sucursal"], ["name", "branches", 2, "width", "14px", "height", "14px"], [1, "reserva-modal__body"], [1, "reserva-modal__seccion"], [1, "reserva-modal__label"], [1, "reserva-dias-grid"], ["type", "button", 1, "reserva-dia-btn", 3, "is-selected", "disabled"], ["type", "button", 1, "btn", "btn--primary", "reserva-modal__confirmar", 3, "click", "disabled"], ["type", "button", 1, "reserva-dia-btn", 3, "click", "disabled"], [1, "reserva-dia-btn__nota"], [1, "reserva-modal__vacio"], [1, "horario-list"], ["type", "button", 1, "horario-btn", 3, "is-selected"], ["type", "button", 1, "horario-btn", 3, "click"]], template: function CrearReserva_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CrearReserva_Conditional_0_Template, 5, 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isAuthenticated() || ctx.esCliente ? 0 : -1);
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 14px;\n}\n.reserva-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n}\n.reserva-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.45);\n  animation: _ngcontent-%COMP%_reserva-overlay-in 150ms ease;\n}\n.reserva-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 420px;\n  max-height: min(640px, 90vh);\n  overflow-y: auto;\n  padding: 20px;\n  border-radius: var(--%NS%radius-lg);\n  background: var(--%NS%color-white);\n  box-shadow: var(--%NS%shadow-medium);\n  animation: _ngcontent-%COMP%_reserva-modal-in 180ms ease;\n}\n.reserva-modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.reserva-modal__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.reserva-modal__cerrar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: none;\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n}\n.reserva-modal__cerrar[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 10%, var(--%NS%color-bg));\n  color: var(--%NS%color-primary);\n}\n.reserva-modal__sucursal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-radius: var(--%NS%radius-sm);\n  background: color-mix(in srgb, var(--%NS%color-primary) 6%, white);\n  border: 1px solid color-mix(in srgb, var(--%NS%color-primary) 25%, white);\n  color: var(--%NS%color-primary-dark);\n  font-size: 13.5px;\n  font-weight: 600;\n}\n.reserva-modal__sucursal[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  flex-shrink: 0;\n}\n.reserva-modal__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.reserva-modal__seccion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.reserva-modal__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--%NS%color-text-secondary);\n}\n.reserva-modal__vacio[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.reserva-dias-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.reserva-dia-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: 52px;\n  padding: 8px 6px;\n  border-radius: var(--%NS%radius-sm);\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-white);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  cursor: pointer;\n  transition:\n    background var(--%NS%transition-fast),\n    border-color var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.reserva-dia-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--%NS%color-primary);\n}\n.reserva-dia-btn.is-selected[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.reserva-dia-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  background: var(--%NS%color-bg);\n}\n.reserva-dia-btn__nota[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 500;\n  text-transform: none;\n  color: var(--%NS%color-text-secondary);\n}\n.horario-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.horario-btn[_ngcontent-%COMP%] {\n  min-width: 64px;\n  padding: 8px 10px;\n  border-radius: var(--%NS%radius-sm);\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-white);\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  cursor: pointer;\n  transition:\n    background var(--%NS%transition-fast),\n    border-color var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.horario-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n}\n.horario-btn.is-selected[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.reserva-modal__confirmar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.compatibles-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.compatible-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px;\n  border-radius: var(--%NS%radius-md);\n  border: 1px solid var(--%NS%color-border);\n  background: color-mix(in srgb, var(--%NS%color-primary) 4%, white);\n}\n.compatible-card__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.compatible-card__codigo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--%NS%color-primary);\n}\n.compatible-card__linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.compatible-card__linea[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  flex-shrink: 0;\n}\n.compatible-card__agregar[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.compatibles-modal__otra[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n@keyframes _ngcontent-%COMP%_reserva-overlay-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_reserva-modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .reserva-modal-overlay[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .reserva-modal[_ngcontent-%COMP%] {\n    max-width: none;\n    max-height: 85vh;\n    border-radius: var(--%NS%radius-lg) var(--%NS%radius-lg) 0 0;\n    animation: _ngcontent-%COMP%_reserva-modal-in-mobile 200ms ease;\n  }\n}\n@keyframes _ngcontent-%COMP%_reserva-modal-in-mobile {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=crear-reserva-3HKKGQG4.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearReserva, [{
    type: Component,
    args: [{ selector: "app-crear-reserva", imports: [Icon], template: `@if (!isAuthenticated() || esCliente) {\r
  <button\r
    type="button"\r
    class="btn btn--primary reserva-btn"\r
    [disabled]="!haySeleccionBase || verificandoCompatibles()"\r
    [title]="haySeleccionBase ? '' : 'Selecciona una sucursal disponible'"\r
    (click)="abrir()"\r
  >\r
    <app-icon name="reservations" style="width: 14px; height: 14px" />\r
    {{ verificandoCompatibles() ? 'Un momento...' : 'Reservar' }}\r
  </button>\r
\r
  @if (modalCompatiblesAbierto()) {\r
    <div\r
      class="reserva-modal-overlay"\r
      (click)="cerrarModalCompatibles()"\r
      (keydown.escape)="cerrarModalCompatibles()"\r
    >\r
      <div\r
        class="reserva-modal"\r
        role="dialog"\r
        aria-modal="true"\r
        aria-labelledby="compatibles-modal-titulo"\r
        (click)="$event.stopPropagation()"\r
      >\r
        <div class="reserva-modal__header">\r
          <h2 id="compatibles-modal-titulo">Tienes una reserva pendiente en esta sucursal</h2>\r
          <button\r
            type="button"\r
            class="reserva-modal__cerrar"\r
            [disabled]="agregando()"\r
            (click)="cerrarModalCompatibles()"\r
            aria-label="Cerrar"\r
          >\r
            \u2715\r
          </button>\r
        </div>\r
\r
        <div class="compatibles-lista">\r
          @for (reserva of reservasCompatibles(); track reserva.id) {\r
            <article class="compatible-card">\r
              <div class="compatible-card__info">\r
                <span class="compatible-card__codigo">Reserva {{ reserva.codigo_reserva }}</span>\r
                <span class="compatible-card__linea">\r
                  <app-icon name="branches" style="width: 12px; height: 12px" />\r
                  {{ reserva.sucursal.nombre }} \xB7 {{ reserva.sucursal.ciudad.nombre }}\r
                </span>\r
                <span class="compatible-card__linea">\r
                  {{ formatearFecha(reserva.fecha_reserva) }} \xB7\r
                  {{ formatearHorario(reserva.hora_inicio, reserva.hora_fin) }}\r
                </span>\r
                <span class="compatible-card__linea">\r
                  {{ reserva.detalles.length }} {{ reserva.detalles.length === 1 ? 'prenda' : 'prendas' }} en esta\r
                  reserva\r
                </span>\r
              </div>\r
              <button\r
                type="button"\r
                class="btn btn--primary btn--sm compatible-card__agregar"\r
                [disabled]="agregando()"\r
                (click)="elegirAgregarAReserva(reserva)"\r
              >\r
                {{ agregando() ? 'Agregando...' : 'Agregar a esta reserva' }}\r
              </button>\r
            </article>\r
          }\r
        </div>\r
\r
        <button\r
          type="button"\r
          class="btn btn--ghost compatibles-modal__otra"\r
          [disabled]="agregando()"\r
          (click)="elegirProgramarOtraVisita()"\r
        >\r
          Programar otra visita\r
        </button>\r
      </div>\r
    </div>\r
  }\r
\r
  @if (modalAbierto()) {\r
    <div class="reserva-modal-overlay" (click)="cerrar()" (keydown.escape)="cerrar()">\r
      <div\r
        class="reserva-modal"\r
        role="dialog"\r
        aria-modal="true"\r
        aria-labelledby="reserva-modal-titulo"\r
        (click)="$event.stopPropagation()"\r
      >\r
        <div class="reserva-modal__header">\r
          <h2 id="reserva-modal-titulo">Programar reserva</h2>\r
          <button type="button" class="reserva-modal__cerrar" (click)="cerrar()" aria-label="Cerrar">\u2715</button>\r
        </div>\r
\r
        <div class="reserva-modal__sucursal">\r
          <app-icon name="branches" style="width: 14px; height: 14px" />\r
          <span>{{ sucursalNombre() }}</span>\r
        </div>\r
\r
        <div class="reserva-modal__body">\r
          <div class="reserva-modal__seccion">\r
            <span class="reserva-modal__label">Fecha</span>\r
            <div class="reserva-dias-grid">\r
              @for (dia of dias; track dia.iso) {\r
                <button\r
                  type="button"\r
                  class="reserva-dia-btn"\r
                  [class.is-selected]="dia.iso === fechaSeleccionada()"\r
                  [disabled]="dia.esDomingo"\r
                  (click)="seleccionarFecha(dia.iso, dia.esDomingo)"\r
                >\r
                  <span>{{ dia.etiqueta }}</span>\r
                  @if (dia.esDomingo) {\r
                    <span class="reserva-dia-btn__nota">No disponible</span>\r
                  }\r
                </button>\r
              }\r
            </div>\r
          </div>\r
\r
          @if (fechaSeleccionada()) {\r
            <div class="reserva-modal__seccion">\r
              <span class="reserva-modal__label">Horario</span>\r
              @if (bloquesDisponibles().length === 0) {\r
                <span class="reserva-modal__vacio">Sin horarios disponibles ese d\xEDa.</span>\r
              } @else {\r
                <div class="horario-list">\r
                  @for (bloque of bloquesDisponibles(); track bloque) {\r
                    <button\r
                      type="button"\r
                      class="horario-btn"\r
                      [class.is-selected]="bloque === horaSeleccionada()"\r
                      (click)="seleccionarHora(bloque)"\r
                    >\r
                      {{ bloque }}\r
                    </button>\r
                  }\r
                </div>\r
              }\r
            </div>\r
          }\r
        </div>\r
\r
        <button\r
          type="button"\r
          class="btn btn--primary reserva-modal__confirmar"\r
          [disabled]="!puedeConfirmar"\r
          (click)="confirmar()"\r
        >\r
          {{ submitting() ? 'Reservando...' : 'Confirmar reserva' }}\r
        </button>\r
      </div>\r
    </div>\r
  }\r
}\r
`, styles: ["/* src/app/features/reservas/crear-reserva/crear-reserva.scss */\n:host {\n  display: block;\n  margin-top: 14px;\n}\n.reserva-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n}\n.reserva-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.45);\n  animation: reserva-overlay-in 150ms ease;\n}\n.reserva-modal {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 420px;\n  max-height: min(640px, 90vh);\n  overflow-y: auto;\n  padding: 20px;\n  border-radius: var(--radius-lg);\n  background: var(--color-white);\n  box-shadow: var(--shadow-medium);\n  animation: reserva-modal-in 180ms ease;\n}\n.reserva-modal__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.reserva-modal__header h2 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.reserva-modal__cerrar {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: none;\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n}\n.reserva-modal__cerrar:hover {\n  background: color-mix(in srgb, var(--color-primary) 10%, var(--color-bg));\n  color: var(--color-primary);\n}\n.reserva-modal__sucursal {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: color-mix(in srgb, var(--color-primary) 6%, white);\n  border: 1px solid color-mix(in srgb, var(--color-primary) 25%, white);\n  color: var(--color-primary-dark);\n  font-size: 13.5px;\n  font-weight: 600;\n}\n.reserva-modal__sucursal app-icon {\n  color: var(--color-primary);\n  flex-shrink: 0;\n}\n.reserva-modal__body {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.reserva-modal__seccion {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.reserva-modal__label {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-secondary);\n}\n.reserva-modal__vacio {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.reserva-dias-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.reserva-dia-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: 52px;\n  padding: 8px 6px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--color-white);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text);\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    border-color var(--transition-fast),\n    color var(--transition-fast);\n}\n.reserva-dia-btn:hover:not(:disabled) {\n  border-color: var(--color-primary);\n}\n.reserva-dia-btn.is-selected {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-white);\n}\n.reserva-dia-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  background: var(--color-bg);\n}\n.reserva-dia-btn__nota {\n  font-size: 9.5px;\n  font-weight: 500;\n  text-transform: none;\n  color: var(--color-text-secondary);\n}\n.horario-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.horario-btn {\n  min-width: 64px;\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--color-white);\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    border-color var(--transition-fast),\n    color var(--transition-fast);\n}\n.horario-btn:hover {\n  border-color: var(--color-primary);\n}\n.horario-btn.is-selected {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-white);\n}\n.reserva-modal__confirmar {\n  width: 100%;\n}\n.compatibles-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.compatible-card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  background: color-mix(in srgb, var(--color-primary) 4%, white);\n}\n.compatible-card__info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.compatible-card__codigo {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.compatible-card__linea {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.compatible-card__linea app-icon {\n  color: var(--color-primary);\n  flex-shrink: 0;\n}\n.compatible-card__agregar {\n  width: 100%;\n  justify-content: center;\n}\n.compatibles-modal__otra {\n  width: 100%;\n  justify-content: center;\n}\n@keyframes reserva-overlay-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes reserva-modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .reserva-modal-overlay {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .reserva-modal {\n    max-width: none;\n    max-height: 85vh;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n    animation: reserva-modal-in-mobile 200ms ease;\n  }\n}\n@keyframes reserva-modal-in-mobile {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=crear-reserva-3HKKGQG4.css.map */\n"] }]
  }], () => [], { productoVarianteId: [{ type: Input, args: [{ isSignal: true, alias: "productoVarianteId", required: false }] }], sucursalId: [{ type: Input, args: [{ isSignal: true, alias: "sucursalId", required: false }] }], sucursalNombre: [{ type: Input, args: [{ isSignal: true, alias: "sucursalNombre", required: false }] }], returnUrl: [{ type: Input, args: [{ isSignal: true, alias: "returnUrl", required: false }] }], fechaRestaurada: [{ type: Input, args: [{ isSignal: true, alias: "fechaRestaurada", required: false }] }], horaRestaurada: [{ type: Input, args: [{ isSignal: true, alias: "horaRestaurada", required: false }] }], reservado: [{ type: Output, args: ["reservado"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrearReserva, { className: "CrearReserva", filePath: "src/app/features/reservas/crear-reserva/crear-reserva.ts", lineNumber: 67 });
})();

// src/app/features/carrito/agregar-carrito/agregar-carrito.ts
function AgregarCarrito_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function AgregarCarrito_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agregar());
    });
    \u0275\u0275element(1, "app-icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.puedeAgregar)("title", ctx_r1.productoVarianteId() !== null ? "" : "Selecciona color y talla");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Agregando..." : "Agregar al carrito", " ");
  }
}
var AgregarCarrito = class _AgregarCarrito {
  auth = inject(AuthService);
  service = inject(CarritoService);
  toast = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  productoVarianteId = input(
    null,
    ...ngDevMode ? [{ debugName: "productoVarianteId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  returnUrl = input(
    "/",
    ...ngDevMode ? [{ debugName: "returnUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Viene del returnUrl al volver del login (ver producto-detalle.ts) --
  // "1" crudo sin validar todavía, mismo criterio que fechaRestaurada/
  // horaRestaurada en crear-reserva.ts.
  autoAgregarParam = input(
    false,
    ...ngDevMode ? [{ debugName: "autoAgregarParam" }] : (
      /* istanbul ignore next */
      []
    )
  );
  agregado = output();
  isAuthenticated = this.auth.isAuthenticated;
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  intentoAplicado = false;
  constructor() {
    effect(() => {
      const variante = this.productoVarianteId();
      if (this.intentoAplicado || !this.autoAgregarParam() || variante === null || !this.isAuthenticated() || this.submitting()) {
        return;
      }
      this.intentoAplicado = true;
      this._agregar(variante, true);
    });
  }
  get esCliente() {
    return this.auth.hasRole("CLIENTE");
  }
  get puedeAgregar() {
    return this.productoVarianteId() !== null && !this.submitting();
  }
  agregar() {
    if (!this.puedeAgregar) {
      return;
    }
    if (!this.isAuthenticated()) {
      const url = `${this.returnUrl()}&agregarCarrito=1`;
      this.router.navigate(["/login"], { queryParams: { returnUrl: url } });
      return;
    }
    this._agregar(this.productoVarianteId(), false);
  }
  _agregar(varianteId, esAutomatico) {
    this.submitting.set(true);
    this.service.agregarItem({ producto_variante_id: varianteId }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.toast.brand("Producto agregado al carrito.");
        if (esAutomatico) {
          this._limpiarFlagUrl();
        }
        this.agregado.emit();
      },
      error: (err) => {
        this.submitting.set(false);
        const detalle = typeof err?.error?.detail === "string" ? err.error.detail : null;
        this.toast.error(detalle ?? "No se pudo agregar el producto al carrito. Int\xE9ntalo nuevamente.");
        if (esAutomatico) {
          this._limpiarFlagUrl();
        }
      }
    });
  }
  // Quita "agregarCarrito" de la URL sin recargar ni perder el resto de los
  // query params (tallaId/colorId) -- evita que F5 dispare el efecto de
  // nuevo y agregue el producto otra vez.
  _limpiarFlagUrl() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { agregarCarrito: null },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  static \u0275fac = function AgregarCarrito_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AgregarCarrito)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgregarCarrito, selectors: [["app-agregar-carrito"]], inputs: { productoVarianteId: [1, "productoVarianteId"], returnUrl: [1, "returnUrl"], autoAgregarParam: [1, "autoAgregarParam"] }, outputs: { agregado: "agregado" }, decls: 1, vars: 1, consts: [["type", "button", 1, "btn", "btn--ghost", "agregar-carrito-btn", 3, "disabled", "title"], ["type", "button", 1, "btn", "btn--ghost", "agregar-carrito-btn", 3, "click", "disabled", "title"], ["name", "bag", 2, "width", "14px", "height", "14px"]], template: function AgregarCarrito_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AgregarCarrito_Conditional_0_Template, 3, 3, "button", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isAuthenticated() || ctx.esCliente ? 0 : -1);
    }
  }, dependencies: [Icon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n.agregar-carrito-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n}\n/*# sourceMappingURL=agregar-carrito-UT5TAUEF.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgregarCarrito, [{
    type: Component,
    args: [{ selector: "app-agregar-carrito", imports: [Icon], template: `@if (!isAuthenticated() || esCliente) {\r
  <button\r
    type="button"\r
    class="btn btn--ghost agregar-carrito-btn"\r
    [disabled]="!puedeAgregar"\r
    [title]="productoVarianteId() !== null ? '' : 'Selecciona color y talla'"\r
    (click)="agregar()"\r
  >\r
    <app-icon name="bag" style="width: 14px; height: 14px" />\r
    {{ submitting() ? 'Agregando...' : 'Agregar al carrito' }}\r
  </button>\r
}\r
`, styles: ["/* src/app/features/carrito/agregar-carrito/agregar-carrito.scss */\n:host {\n  display: block;\n  margin-top: 10px;\n}\n.agregar-carrito-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n}\n/*# sourceMappingURL=agregar-carrito-UT5TAUEF.css.map */\n"] }]
  }], () => [], { productoVarianteId: [{ type: Input, args: [{ isSignal: true, alias: "productoVarianteId", required: false }] }], returnUrl: [{ type: Input, args: [{ isSignal: true, alias: "returnUrl", required: false }] }], autoAgregarParam: [{ type: Input, args: [{ isSignal: true, alias: "autoAgregarParam", required: false }] }], agregado: [{ type: Output, args: ["agregado"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgregarCarrito, { className: "AgregarCarrito", filePath: "src/app/features/carrito/agregar-carrito/agregar-carrito.ts", lineNumber: 37 });
})();

// src/app/features/public/catalogo/producto-detalle/disponibilidad.service.ts
var DisponibilidadService = class _DisponibilidadService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/disponibilidad`;
  /**
   * El backend de CU12 siempre responde con todas las variantes activas del
   * producto por sucursal (ver ProductoDisponibilidad); no filtra por talla
   * ni color. tallaId/colorId se aceptan y se envían igual -- por si un
   * futuro ajuste del backend los usa para acotar la respuesta -- pero hoy
   * el filtrado real por variante ocurre en el componente sobre `variantes`.
   */
  consultar(productoId, tallaId, colorId, ciudadId) {
    let params = new HttpParams().set("producto_id", productoId);
    if (tallaId) {
      params = params.set("talla_id", tallaId);
    }
    if (colorId) {
      params = params.set("color_id", colorId);
    }
    if (ciudadId) {
      params = params.set("ciudad_id", ciudadId);
    }
    return this.http.get(this.baseUrl, { params });
  }
  static \u0275fac = function DisponibilidadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DisponibilidadService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DisponibilidadService, factory: _DisponibilidadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisponibilidadService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/public/catalogo/producto-detalle/producto-detalle.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.sucursal_id;
function ProductoDetalle_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3)(2, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function ProductoDetalle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "Prenda no encontrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Puede que ya no est\xE9 disponible.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6, "Volver al cat\xE1logo");
    \u0275\u0275elementEnd()();
  }
}
function ProductoDetalle_Conditional_3_Conditional_5_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 40);
    \u0275\u0275listener("error", function ProductoDetalle_Conditional_3_Conditional_5_For_2_Conditional_1_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r5);
      const url_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.marcarImagenRota(url_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r3.resolveMediaUrl(url_r3), \u0275\u0275sanitizeUrl);
  }
}
function ProductoDetalle_Conditional_3_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "app-icon", 41);
    \u0275\u0275elementEnd();
  }
}
function ProductoDetalle_Conditional_3_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ProductoDetalle_Conditional_3_Conditional_5_For_2_Template_button_click_0_listener() {
      const url_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.seleccionarImagen(url_r3));
    });
    \u0275\u0275conditionalCreate(1, ProductoDetalle_Conditional_3_Conditional_5_For_2_Conditional_1_Template, 1, 1, "img", 38)(2, ProductoDetalle_Conditional_3_Conditional_5_For_2_Conditional_2_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-active", url_r3 === ctx_r3.imagenActivaUrl());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.erroredUrls().has(url_r3) ? 1 : 2);
  }
}
function ProductoDetalle_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ProductoDetalle_Conditional_3_Conditional_5_For_2_Template, 3, 3, "button", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.galeria);
  }
}
function ProductoDetalle_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 42);
    \u0275\u0275listener("error", function ProductoDetalle_Conditional_3_Conditional_7_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.marcarImagenRota(ctx_r3.imagenActivaUrl()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.resolveMediaUrl(ctx_r3.imagenActivaUrl()), \u0275\u0275sanitizeUrl)("alt", ctx_r3.producto().nombre);
  }
}
function ProductoDetalle_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-icon", 43);
    \u0275\u0275elementEnd();
  }
}
function ProductoDetalle_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bs ", ctx_r3.producto().precio_base.toFixed(2));
  }
}
function ProductoDetalle_Conditional_3_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r3.producto().porcentaje_descuento, "%");
  }
}
function ProductoDetalle_Conditional_3_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.producto().descripcion);
  }
}
function ProductoDetalle_Conditional_3_Conditional_22_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(color_r7.nombre);
  }
}
function ProductoDetalle_Conditional_3_Conditional_22_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProductoDetalle_Conditional_3_Conditional_22_For_4_Conditional_0_Template, 2, 1, "span", 46);
  }
  if (rf & 2) {
    const color_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(color_r7.id === ctx_r3.colorSeleccionadoId() ? 0 : -1);
  }
}
function ProductoDetalle_Conditional_3_Conditional_22_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ProductoDetalle_Conditional_3_Conditional_22_For_7_Template_button_click_0_listener() {
      const color_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.seleccionarColor(color_r9.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-selected", color_r9.id === ctx_r3.colorSeleccionadoId());
    \u0275\u0275property("title", color_r9.nombre);
    \u0275\u0275attribute("data-color", color_r9.nombre.toLowerCase())("aria-label", color_r9.nombre);
  }
}
function ProductoDetalle_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 29);
    \u0275\u0275text(2, " Color ");
    \u0275\u0275repeaterCreate(3, ProductoDetalle_Conditional_3_Conditional_22_For_4_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44);
    \u0275\u0275repeaterCreate(6, ProductoDetalle_Conditional_3_Conditional_22_For_7_Template, 1, 5, "button", 45, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.producto().colores);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.producto().colores);
  }
}
function ProductoDetalle_Conditional_3_Conditional_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ProductoDetalle_Conditional_3_Conditional_23_For_5_Template_button_click_0_listener() {
      const talla_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.seleccionarTalla(talla_r11.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const talla_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-selected", talla_r11.id === ctx_r3.tallaSeleccionadaId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", talla_r11.nombre, " ");
  }
}
function ProductoDetalle_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 29);
    \u0275\u0275text(2, "Talla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275repeaterCreate(4, ProductoDetalle_Conditional_3_Conditional_23_For_5_Template, 2, 3, "button", 49, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.producto().tallas);
  }
}
function ProductoDetalle_Conditional_3_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1, "Sin ciudades disponibles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngValue", null);
  }
}
function ProductoDetalle_Conditional_3_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1, "Selecciona una ciudad");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngValue", null);
  }
}
function ProductoDetalle_Conditional_3_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ciudad_r12 = ctx.$implicit;
    \u0275\u0275property("ngValue", ciudad_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ciudad_r12.nombre);
  }
}
function ProductoDetalle_Conditional_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 51)(2, "div", 51);
    \u0275\u0275elementEnd();
  }
}
function ProductoDetalle_Conditional_3_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function ProductoDetalle_Conditional_3_Conditional_37_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.loadDisponibilidad());
    });
    \u0275\u0275text(4, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.errorDisponibilidad());
  }
}
function ProductoDetalle_Conditional_3_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Selecciona una ciudad para ver sucursales disponibles.");
    \u0275\u0275elementEnd();
  }
}
function ProductoDetalle_Conditional_3_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Sin sucursales en esta ciudad.");
    \u0275\u0275elementEnd();
  }
}
function ProductoDetalle_Conditional_3_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 54);
    \u0275\u0275listener("click", function ProductoDetalle_Conditional_3_Conditional_40_For_2_Template_button_click_1_listener() {
      const item_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const disponible_r16 = \u0275\u0275readContextLet(0);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.seleccionarSucursal(item_r15.sucursal_id, disponible_r16));
    });
    \u0275\u0275elementStart(2, "div", 55);
    \u0275\u0275element(3, "app-icon", 56);
    \u0275\u0275elementStart(4, "div", 57)(5, "span", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    const variante_r17 = ctx_r3.varianteDe(item_r15);
    const disponible_r18 = \u0275\u0275storeLet((variante_r17?.cantidad ?? 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-seleccionada", disponible_r18 && ctx_r3.sucursalSeleccionadaId() === item_r15.sucursal_id);
    \u0275\u0275property("disabled", !disponible_r18);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r15.sucursal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.ciudad);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-disponible", disponible_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", disponible_r18 ? "Disponible" : "Agotado", " ");
  }
}
function ProductoDetalle_Conditional_3_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, ProductoDetalle_Conditional_3_Conditional_40_For_2_Template, 11, 9, "button", 53, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.disponibilidad());
  }
}
function ProductoDetalle_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "app-icon", 8);
    \u0275\u0275text(2, " Volver al cat\xE1logo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275conditionalCreate(5, ProductoDetalle_Conditional_3_Conditional_5_Template, 3, 0, "div", 11);
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275conditionalCreate(7, ProductoDetalle_Conditional_3_Conditional_7_Template, 1, 2, "img", 13)(8, ProductoDetalle_Conditional_3_Conditional_8_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h1", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 18);
    \u0275\u0275conditionalCreate(15, ProductoDetalle_Conditional_3_Conditional_15_Template, 2, 1, "span", 19);
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProductoDetalle_Conditional_3_Conditional_18_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ProductoDetalle_Conditional_3_Conditional_19_Template, 2, 1, "p", 22);
    \u0275\u0275elementStart(20, "span", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, ProductoDetalle_Conditional_3_Conditional_22_Template, 8, 0, "div", 24);
    \u0275\u0275conditionalCreate(23, ProductoDetalle_Conditional_3_Conditional_23_Template, 6, 0, "div", 24);
    \u0275\u0275element(24, "app-agregar-carrito", 25);
    \u0275\u0275elementStart(25, "app-crear-reserva", 26);
    \u0275\u0275listener("reservado", function ProductoDetalle_Conditional_3_Template_app_crear_reserva_reservado_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onReservaCreada());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 27)(27, "div", 28)(28, "span", 29);
    \u0275\u0275text(29, "Stock por sucursal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 30)(31, "select", 31);
    \u0275\u0275listener("ngModelChange", function ProductoDetalle_Conditional_3_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCiudadChange($event));
    });
    \u0275\u0275conditionalCreate(32, ProductoDetalle_Conditional_3_Conditional_32_Template, 2, 1, "option", 32)(33, ProductoDetalle_Conditional_3_Conditional_33_Template, 2, 1, "option", 33);
    \u0275\u0275repeaterCreate(34, ProductoDetalle_Conditional_3_For_35_Template, 2, 2, "option", 32, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(36, ProductoDetalle_Conditional_3_Conditional_36_Template, 3, 0, "div", 34)(37, ProductoDetalle_Conditional_3_Conditional_37_Template, 5, 1, "div", 2)(38, ProductoDetalle_Conditional_3_Conditional_38_Template, 2, 0, "span", 35)(39, ProductoDetalle_Conditional_3_Conditional_39_Template, 2, 0, "span", 35)(40, ProductoDetalle_Conditional_3_Conditional_40_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.galeria.length > 1 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.imagenActivaUrl() && !ctx_r3.erroredUrls().has(ctx_r3.imagenActivaUrl()) ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.producto().categoria.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.producto().nombre);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.producto().en_promocion ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Bs ", ctx_r3.producto().precio_final.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.producto().en_promocion ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.producto().descripcion ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.producto().temporada.nombre, " \xB7 ", ctx_r3.producto().coleccion.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.producto().colores.length > 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.producto().tallas.length > 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("productoVarianteId", ctx_r3.varianteSeleccionadaId())("returnUrl", ctx_r3.returnUrlCarrito())("autoAgregarParam", ctx_r3.agregarCarritoParam);
    \u0275\u0275advance();
    \u0275\u0275property("productoVarianteId", ctx_r3.varianteSeleccionadaId())("sucursalId", ctx_r3.sucursalSeleccionadaId())("sucursalNombre", ctx_r3.sucursalSeleccionadaNombre())("returnUrl", ctx_r3.returnUrlReserva())("fechaRestaurada", ctx_r3.fechaParam)("horaRestaurada", ctx_r3.horaParam);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r3.ciudadId())("disabled", ctx_r3.loadingCiudades() || ctx_r3.ciudades().length === 0);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.ciudades().length === 0 ? 32 : ctx_r3.ciudadId() === null ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.ciudades());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.loadingCiudades() || ctx_r3.loadingDisponibilidad() ? 36 : ctx_r3.errorDisponibilidad() ? 37 : ctx_r3.ciudadId() === null ? 38 : ctx_r3.disponibilidad().length === 0 ? 39 : 40);
  }
}
var CIUDAD_STORAGE_KEY = "fashionstore_ciudad_id";
var ProductoDetalle = class _ProductoDetalle {
  route = inject(ActivatedRoute);
  catalogoService = inject(CatalogoService);
  sucursalService = inject(SucursalPublicaService);
  disponibilidadService = inject(DisponibilidadService);
  resolveMediaUrl = resolveMediaUrl;
  producto = signal(
    null,
    ...ngDevMode ? [{ debugName: "producto" }] : (
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
  notFound = signal(
    false,
    ...ngDevMode ? [{ debugName: "notFound" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagenActivaUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "imagenActivaUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tallaSeleccionadaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "tallaSeleccionadaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  colorSeleccionadoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "colorSeleccionadoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Si una imagen referenciada ya no existe físicamente (ej. archivo perdido),
  // se marca aquí para caer al ícono de reserva en vez del roto nativo del navegador.
  erroredUrls = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "erroredUrls" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Disponibilidad en tiendas -- CU12: por cada sucursal, trae todas las
  // variantes (talla+color) activas del producto con su stock real (ver
  // ProductoDisponibilidad). Aquí se guarda solo el array de sucursales
  // (`.disponibilidad`), que es lo que consume la plantilla. La lista de
  // ciudades sigue viniendo de CU07 (reutilizada, no duplicada).
  //
  // ciudadId NACE EN null: a diferencia de talla/color (que sí tienen un
  // valor por defecto razonable, la primera opción del producto), la ciudad
  // no se autoselecciona -- mostrar "la primera ciudad de la base de datos"
  // sin que el Cliente la haya elegido es justo lo que no queremos. Se
  // recuerda en localStorage (ver CIUDAD_STORAGE_KEY) para que persista al
  // navegar a otro producto o volver del login, sin crear nada en el
  // backend (no hay "sucursal favorita" todavía, ver ticket de CU17).
  ciudades = signal(
    [],
    ...ngDevMode ? [{ debugName: "ciudades" }] : (
      /* istanbul ignore next */
      []
    )
  );
  disponibilidad = signal(
    [],
    ...ngDevMode ? [{ debugName: "disponibilidad" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ciudadId = signal(
    null,
    ...ngDevMode ? [{ debugName: "ciudadId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingCiudades = signal(
    true,
    ...ngDevMode ? [{ debugName: "loadingCiudades" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingDisponibilidad = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingDisponibilidad" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorDisponibilidad = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorDisponibilidad" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // CU17 (crear reserva): sucursal que el propio Cliente eligió haciendo
  // clic en una tarjeta de "Stock por sucursal" -- a diferencia de
  // talla/color (atributos del producto), la sucursal no tiene un valor por
  // defecto: nace en null y solo el Cliente la fija. Se reinicia cuando
  // cambia talla, color o ciudad porque la disponibilidad ya no es la misma.
  // Fecha y horario ya NO se eligen aquí: viven dentro del modal de
  // CrearReserva (ver crear-reserva.ts), que se abre al presionar
  // "Reservar" una vez hay sucursal elegida.
  sucursalSeleccionadaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "sucursalSeleccionadaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Variante real (id) que corresponde a la talla+color elegidos arriba. Es
  // la misma en todas las tarjetas de sucursal (ProductoVariante es global,
  // solo el stock cambia por sucursal) -- se toma de la primera coincidencia.
  // null si CU12 todavía no respondió o si esa combinación no existe.
  varianteSeleccionadaId = computed(
    () => {
      const tallaId = this.tallaSeleccionadaId();
      const colorId = this.colorSeleccionadoId();
      for (const item of this.disponibilidad()) {
        const match = item.variantes.find((v) => v.talla_id === tallaId && v.color_id === colorId);
        if (match) {
          return match.producto_variante_id;
        }
      }
      return null;
    },
    ...ngDevMode ? [{ debugName: "varianteSeleccionadaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Nombre a mostrar dentro del modal ("Programar reserva") -- se busca por
  // id en la misma respuesta de CU12 que ya trae la lista de sucursales.
  sucursalSeleccionadaNombre = computed(
    () => {
      const id = this.sucursalSeleccionadaId();
      return this.disponibilidad().find((s) => s.sucursal_id === id)?.sucursal ?? null;
    },
    ...ngDevMode ? [{ debugName: "sucursalSeleccionadaNombre" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Ruta a la que CrearReserva debe volver tras el login si el visitante no
  // tenía sesión (ver login.ts, que lee "returnUrl"). Conserva ciudad,
  // talla, color y sucursal -- fecha/hora NO se agregan aquí: viven dentro
  // de CrearReserva (el modal), que las agrega a esta misma URL base
  // recién al presionar "Confirmar reserva" (ver confirmar() en
  // crear-reserva.ts), porque es quien las conoce.
  returnUrlReserva = computed(
    () => {
      const producto = this.producto();
      const tallaId = this.tallaSeleccionadaId();
      const colorId = this.colorSeleccionadoId();
      const ciudadId = this.ciudadId();
      const sucursalId = this.sucursalSeleccionadaId();
      if (!producto) {
        return "/home";
      }
      let url = `/home/producto/${producto.id}?tallaId=${tallaId}&colorId=${colorId}`;
      if (ciudadId !== null) {
        url += `&ciudadId=${ciudadId}`;
      }
      if (sucursalId !== null) {
        url += `&sucursalId=${sucursalId}`;
      }
      return url;
    },
    ...ngDevMode ? [{ debugName: "returnUrlReserva" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // CU21 (agregar al carrito): a diferencia de returnUrlReserva, NUNCA
  // incluye ciudad ni sucursal -- el carrito no los necesita (ver
  // agregar-carrito.ts). AgregarCarrito le agrega "&agregarCarrito=1" recién
  // al navegar a /login, porque es quien decide disparar esa intención.
  returnUrlCarrito = computed(
    () => {
      const producto = this.producto();
      const tallaId = this.tallaSeleccionadaId();
      const colorId = this.colorSeleccionadoId();
      if (!producto) {
        return "/home";
      }
      return `/home/producto/${producto.id}?tallaId=${tallaId}&colorId=${colorId}`;
    },
    ...ngDevMode ? [{ debugName: "returnUrlCarrito" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Se restaura como máximo una vez al volver del login -- si el Cliente
  // cambia de ciudad, talla o color después, la sucursal se reinicia
  // normalmente y no se vuelve a forzar este valor. fecha/hora crudas (sin
  // validar) se pasan tal cual a CrearReserva -- es quien decide si siguen
  // siendo válidas (ver efecto en crear-reserva.ts).
  sucursalRestaurada = false;
  ciudadIdParam;
  sucursalIdParam;
  fechaParam;
  horaParam;
  // CU21 (agregar al carrito): "1" crudo si volvemos del login con la
  // intención de agregar al carrito pendiente -- ver returnUrlCarrito() y
  // AgregarCarrito (agregar-carrito.ts), que dispara el agregado automático
  // una sola vez y limpia este mismo query param al terminar.
  agregarCarritoParam;
  constructor() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const tallaIdParam = Number(this.route.snapshot.queryParamMap.get("tallaId")) || null;
    const colorIdParam = Number(this.route.snapshot.queryParamMap.get("colorId")) || null;
    this.ciudadIdParam = Number(this.route.snapshot.queryParamMap.get("ciudadId")) || null;
    this.sucursalIdParam = Number(this.route.snapshot.queryParamMap.get("sucursalId")) || null;
    this.fechaParam = this.route.snapshot.queryParamMap.get("fecha");
    this.horaParam = this.route.snapshot.queryParamMap.get("hora");
    this.agregarCarritoParam = this.route.snapshot.queryParamMap.get("agregarCarrito") === "1";
    this.catalogoService.getProducto(id).subscribe({
      next: (producto) => {
        this.producto.set(producto);
        this.imagenActivaUrl.set(producto.imagen_principal_url);
        const tallaValida = producto.tallas.find((t) => t.id === tallaIdParam);
        const colorValido = producto.colores.find((c) => c.id === colorIdParam);
        this.tallaSeleccionadaId.set(tallaValida?.id ?? producto.tallas[0]?.id ?? null);
        this.colorSeleccionadoId.set(colorValido?.id ?? producto.colores[0]?.id ?? null);
        this.loading.set(false);
        this.loadDisponibilidad();
      },
      error: () => {
        this.loading.set(false);
        this.notFound.set(true);
      }
    });
    this.sucursalService.listCiudades().subscribe({
      next: (ciudades) => {
        this.ciudades.set(ciudades);
        this.loadingCiudades.set(false);
        const ciudadDeVuelta = ciudades.find((c) => c.id === this.ciudadIdParam);
        const ciudadGuardada = ciudades.find((c) => c.id === this.leerCiudadGuardada());
        const ciudadInicial = ciudadDeVuelta ?? ciudadGuardada ?? null;
        if (ciudadInicial) {
          this.ciudadId.set(ciudadInicial.id);
          this.guardarCiudad(ciudadInicial.id);
          this.loadDisponibilidad();
        }
      },
      error: () => {
        this.loadingCiudades.set(false);
        this.errorDisponibilidad.set("No se pudieron cargar las ciudades. Int\xE9ntalo nuevamente.");
      }
    });
  }
  leerCiudadGuardada() {
    try {
      const valor = localStorage.getItem(CIUDAD_STORAGE_KEY);
      return valor ? Number(valor) : null;
    } catch {
      return null;
    }
  }
  guardarCiudad(ciudadId) {
    try {
      localStorage.setItem(CIUDAD_STORAGE_KEY, String(ciudadId));
    } catch {
    }
  }
  onCiudadChange(value) {
    const ciudadId = value ? Number(value) : null;
    this.ciudadId.set(ciudadId);
    this.sucursalSeleccionadaId.set(null);
    if (ciudadId !== null) {
      this.guardarCiudad(ciudadId);
      this.loadDisponibilidad();
    } else {
      this.disponibilidad.set([]);
    }
  }
  loadDisponibilidad() {
    const producto = this.producto();
    const tallaId = this.tallaSeleccionadaId();
    const colorId = this.colorSeleccionadoId();
    const ciudadId = this.ciudadId();
    if (!producto || !tallaId || !colorId || !ciudadId) {
      return;
    }
    this.loadingDisponibilidad.set(true);
    this.errorDisponibilidad.set(null);
    this.disponibilidadService.consultar(producto.id, tallaId, colorId, ciudadId).subscribe({
      next: (respuesta) => {
        this.disponibilidad.set(respuesta.disponibilidad);
        this.loadingDisponibilidad.set(false);
        this.restaurarSucursalSiCorresponde();
      },
      error: () => {
        this.loadingDisponibilidad.set(false);
        this.disponibilidad.set([]);
        this.errorDisponibilidad.set("No se pudo consultar la disponibilidad. Int\xE9ntalo nuevamente.");
      }
    });
  }
  // Vuelta del login (ver returnUrlReserva/sucursalIdParam): si esa
  // sucursal sigue apareciendo con stock real en esta misma consulta, se
  // reselecciona sola para no obligar al Cliente a elegirla de nuevo. Si no
  // aparece (ej. cambió de ciudad sin querer, o se agotó), simplemente no
  // se restaura -- no es peor que el comportamiento de antes de este ajuste.
  restaurarSucursalSiCorresponde() {
    if (this.sucursalRestaurada || this.sucursalIdParam === null) {
      return;
    }
    this.sucursalRestaurada = true;
    const tallaId = this.tallaSeleccionadaId();
    const colorId = this.colorSeleccionadoId();
    const item = this.disponibilidad().find((s) => s.sucursal_id === this.sucursalIdParam);
    const variante = item?.variantes.find((v) => v.talla_id === tallaId && v.color_id === colorId);
    if (item && variante && variante.cantidad > 0) {
      this.sucursalSeleccionadaId.set(item.sucursal_id);
    }
  }
  get galeria() {
    const producto = this.producto();
    if (!producto) {
      return [];
    }
    const adicionales = producto.imagenes.map((imagen) => imagen.url);
    return producto.imagen_principal_url ? [producto.imagen_principal_url, ...adicionales] : adicionales;
  }
  seleccionarImagen(url) {
    this.imagenActivaUrl.set(url);
  }
  marcarImagenRota(url) {
    this.erroredUrls.update((actuales) => new Set(actuales).add(url));
  }
  seleccionarTalla(id) {
    this.tallaSeleccionadaId.set(id);
    this.sucursalSeleccionadaId.set(null);
    this.loadDisponibilidad();
  }
  seleccionarColor(id) {
    this.colorSeleccionadoId.set(id);
    this.sucursalSeleccionadaId.set(null);
    this.loadDisponibilidad();
  }
  // Variante (talla+color ya elegidos arriba) tal como la ve esta sucursal
  // puntual -- solo para leer su `cantidad` y saber si esta tarjeta es
  // seleccionable. No repite color/talla en la tarjeta: eso ya se muestra
  // una sola vez arriba, en la selección del producto.
  varianteDe(item) {
    const tallaId = this.tallaSeleccionadaId();
    const colorId = this.colorSeleccionadoId();
    return item.variantes.find((v) => v.talla_id === tallaId && v.color_id === colorId);
  }
  seleccionarSucursal(sucursalId, disponible) {
    if (!disponible) {
      return;
    }
    this.sucursalSeleccionadaId.set(sucursalId);
  }
  // Tras una reserva exitosa (ver (reservado) en producto-detalle.html): la
  // confirmación temporal la muestra el ToastService global (ver
  // crear-reserva.ts), no esta vista, y el modal ya se cierra solo dentro
  // de CrearReserva. Se limpia la sucursal elegida -- la tarjeta se
  // deselecciona visualmente y el botón "Reservar" vuelve a su estado
  // inicial (deshabilitado hasta elegir sucursal de nuevo), sin ocultarse
  // nunca. Talla, color y ciudad quedan igual: son atributos del
  // producto/preferencia de navegación, no de una reserva puntual.
  //
  // loadDisponibilidad() se vuelve a llamar a propósito: CU17 acaba de
  // comprometer stock (stock_reservado, ver backend), así que la cantidad
  // "disponible" que ya mostraban las tarjetas de sucursal quedó desactualizada
  // -- sin este refresco, esta misma pantalla seguiría marcando como
  // "Disponible" una unidad que este mismo Cliente ya reservó, dejando
  // reservar de nuevo la misma última unidad sin recargar la página.
  onReservaCreada() {
    this.sucursalSeleccionadaId.set(null);
    this.loadDisponibilidad();
  }
  static \u0275fac = function ProductoDetalle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductoDetalle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductoDetalle, selectors: [["app-producto-detalle"]], decls: 4, vars: 1, consts: [[1, "container", "detalle-page"], [1, "detalle-skeleton"], [1, "state-block", "state-block--error"], [1, "skeleton-block", "skeleton-block--gallery"], [1, "skeleton-block", "skeleton-block--info"], [1, "state-block__title"], ["routerLink", "/home/catalogo", 1, "btn", "btn--ghost", "btn--sm"], ["routerLink", "/home/catalogo", 1, "back-link"], ["name", "arrow-right", 2, "width", "13px", "height", "13px", "transform", "rotate(180deg)"], [1, "detalle"], [1, "gallery"], [1, "gallery__thumbs"], [1, "gallery__main"], [3, "src", "alt"], [1, "gallery__placeholder"], [1, "info"], [1, "info__categoria"], [1, "info__nombre"], [1, "info__precios"], [1, "precio-anterior"], [1, "info__precio"], [1, "precio-descuento"], [1, "info__descripcion"], [1, "info__coleccion"], [1, "info__group"], [3, "productoVarianteId", "returnUrl", "autoAgregarParam"], [3, "reservado", "productoVarianteId", "sucursalId", "sucursalNombre", "returnUrl", "fechaRestaurada", "horaRestaurada"], [1, "disponibilidad"], [1, "disponibilidad__header"], [1, "info__label"], [1, "disponibilidad__ciudad"], [3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], ["disabled", "", 3, "ngValue"], [1, "disponibilidad__sucursales"], [1, "disponibilidad__vacio"], ["type", "button", 1, "gallery__thumb", 3, "is-active"], ["type", "button", 1, "gallery__thumb", 3, "click"], ["alt", "", 3, "src"], [1, "gallery__thumb-placeholder"], ["alt", "", 3, "error", "src"], ["name", "products", 2, "width", "16px", "height", "16px"], [3, "error", "src", "alt"], ["name", "products", 2, "width", "40px", "height", "40px"], [1, "color-list"], ["type", "button", 1, "color-swatch", 3, "is-selected", "title"], [1, "info__label-value"], ["type", "button", 1, "color-swatch", 3, "click", "title"], [1, "talla-list"], ["type", "button", 1, "talla-btn", 3, "is-selected"], ["type", "button", 1, "talla-btn", 3, "click"], [1, "skeleton-sucursal"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", 1, "sucursal-card", 3, "is-seleccionada", "disabled"], ["type", "button", 1, "sucursal-card", 3, "click", "disabled"], [1, "sucursal-card__head"], ["name", "branches", 2, "width", "14px", "height", "14px"], [1, "sucursal-card__head-texto"], [1, "sucursal-card__nombre"], [1, "sucursal-card__direccion"], [1, "talla-estado"]], template: function ProductoDetalle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ProductoDetalle_Conditional_1_Template, 3, 0, "div", 1)(2, ProductoDetalle_Conditional_2_Template, 7, 0, "div", 2)(3, ProductoDetalle_Conditional_3_Template, 41, 25);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.notFound() || !ctx.producto() ? 2 : 3);
    }
  }, dependencies: [RouterLink, Icon, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, CrearReserva, AgregarCarrito], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.detalle-page[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 48px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text-secondary);\n  margin-bottom: 16px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary);\n}\n.detalle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(320px, 460px) 1fr;\n  gap: 40px;\n  align-items: start;\n}\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.gallery__thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex-shrink: 0;\n  width: 64px;\n  max-height: 480px;\n  overflow-y: auto;\n}\n.gallery__thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: var(--%NS%radius-sm);\n  overflow: hidden;\n  border: 1px solid var(--%NS%color-border);\n  padding: 0;\n  background: none;\n  cursor: pointer;\n}\n.gallery__thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery__thumb.is-active[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  border-width: 2px;\n}\n.gallery__thumb-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text-secondary);\n  background:\n    linear-gradient(\n      160deg,\n      #f0eeea,\n      #ddd6cb);\n}\n.gallery__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  aspect-ratio: 3/4;\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n  background:\n    linear-gradient(\n      160deg,\n      #f0eeea,\n      #ddd6cb);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gallery__main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery__placeholder[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-secondary);\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 0;\n}\n.info__categoria[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--%NS%color-text-secondary);\n}\n.info__nombre[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.info__precio[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-primary-dark);\n}\n.info__precios[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.precio-anterior[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--%NS%color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.info__descripcion[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  line-height: 1.6;\n  color: var(--%NS%color-text-secondary);\n}\n.info__coleccion[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n}\n.info__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 6px;\n}\n.info__label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.info__label-value[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-weight: 400;\n  color: var(--%NS%color-text-secondary);\n}\n.color-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.color-swatch[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid var(--%NS%color-border);\n  padding: 0;\n  background: var(--%NS%color-card-bg);\n  cursor: pointer;\n  transition: border-color var(--%NS%transition-fast), box-shadow var(--%NS%transition-fast);\n}\n.color-swatch[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n}\n.color-swatch.is-selected[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--%NS%color-primary) 20%, white);\n}\n.color-swatch[data-color=blanco][_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.color-swatch[data-color=negro][_ngcontent-%COMP%] {\n  background: #1a1a1a;\n}\n.color-swatch[data-color=rojo][_ngcontent-%COMP%] {\n  background: #a90012;\n}\n.color-swatch[data-color=azul][_ngcontent-%COMP%] {\n  background: #2a4d8f;\n}\n.color-swatch[data-color=celeste][_ngcontent-%COMP%] {\n  background: #7fb3e0;\n}\n.color-swatch[data-color=verde][_ngcontent-%COMP%] {\n  background: #2e7d4f;\n}\n.color-swatch[data-color=amarillo][_ngcontent-%COMP%] {\n  background: #e8c547;\n}\n.color-swatch[data-color=naranja][_ngcontent-%COMP%] {\n  background: #d9782d;\n}\n.color-swatch[data-color=gris][_ngcontent-%COMP%], \n.color-swatch[data-color=plomo][_ngcontent-%COMP%] {\n  background: #9a9a9a;\n}\n.color-swatch[data-color=beige][_ngcontent-%COMP%] {\n  background: #e3d5c0;\n}\n.color-swatch[data-color=rosado][_ngcontent-%COMP%], \n.color-swatch[data-color=rosa][_ngcontent-%COMP%] {\n  background: #e0a0b0;\n}\n.color-swatch[data-color=morado][_ngcontent-%COMP%], \n.color-swatch[data-color=violeta][_ngcontent-%COMP%] {\n  background: #6b4e8e;\n}\n.color-swatch[data-color=caf\\e9][_ngcontent-%COMP%], \n.color-swatch[data-color=cafe][_ngcontent-%COMP%], \n.color-swatch[data-color=marr\\f3n][_ngcontent-%COMP%], \n.color-swatch[data-color=marron][_ngcontent-%COMP%] {\n  background: #6b4423;\n}\n.color-swatch[data-color=dorado][_ngcontent-%COMP%] {\n  background: #c9a24b;\n}\n.color-swatch[data-color=plateado][_ngcontent-%COMP%] {\n  background: #c0c0c0;\n}\n.color-swatch[data-color=vino][_ngcontent-%COMP%] {\n  background: #5e0f18;\n}\n.color-swatch[data-color=crema][_ngcontent-%COMP%] {\n  background: #f0e6d2;\n}\n.talla-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.talla-btn[_ngcontent-%COMP%] {\n  min-width: 42px;\n  padding: 8px 10px;\n  border-radius: var(--%NS%radius-sm);\n  border: 1px solid var(--%NS%color-border);\n  background: var(--%NS%color-white);\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n  cursor: pointer;\n  transition:\n    background var(--%NS%transition-fast),\n    border-color var(--%NS%transition-fast),\n    color var(--%NS%transition-fast);\n}\n.talla-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n}\n.talla-btn.is-selected[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.disponibilidad[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 14px;\n  padding-top: 16px;\n  border-top: 1px solid var(--%NS%color-border);\n}\n.disponibilidad__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.disponibilidad__ciudad[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-sm);\n  padding: 8px 10px;\n  font-size: 12.5px;\n  color: var(--%NS%color-text);\n  background: var(--%NS%color-white);\n  outline: none;\n  max-width: 220px;\n}\n.disponibilidad__ciudad[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--%NS%color-primary);\n}\n.disponibilidad__ciudad[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.disponibilidad__sucursales[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 12px;\n}\n.disponibilidad__vacio[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--%NS%color-text-secondary);\n}\n.sucursal-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  padding: 14px 16px;\n  border: 1.5px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  min-width: 0;\n  font: inherit;\n  color: inherit;\n  text-align: left;\n  transition: border-color var(--%NS%transition-fast), background var(--%NS%transition-fast);\n}\n.sucursal-card[_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n}\n.sucursal-card[_ngcontent-%COMP%]:not(:disabled):hover {\n  border-color: var(--%NS%color-primary-hover);\n}\n.sucursal-card[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sucursal-card.is-seleccionada[_ngcontent-%COMP%] {\n  border-color: var(--%NS%color-primary);\n  background: color-mix(in srgb, var(--%NS%color-primary) 6%, white);\n}\n.sucursal-card.is-seleccionada[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n}\n.sucursal-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.sucursal-card__head[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: var(--%NS%color-text-secondary);\n}\n.sucursal-card__head-texto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.sucursal-card__nombre[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n  overflow-wrap: break-word;\n}\n.sucursal-card__direccion[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--%NS%color-text-secondary);\n  overflow-wrap: break-word;\n}\n.talla-estado[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 3px 9px;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 11.5px;\n  font-weight: 600;\n  background: var(--%NS%color-inactive-bg);\n  color: var(--%NS%color-inactive-text);\n}\n.talla-estado.is-disponible[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.skeleton-sucursal[_ngcontent-%COMP%] {\n  height: 90px;\n  border-radius: var(--%NS%radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n.detalle-skeleton[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(320px, 460px) 1fr;\n  gap: 40px;\n}\n.skeleton-block[_ngcontent-%COMP%] {\n  border-radius: var(--%NS%radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n.skeleton-block--gallery[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n}\n.skeleton-block--info[_ngcontent-%COMP%] {\n  height: 320px;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 1024px) and (min-width: 781px) {\n  .detalle[_ngcontent-%COMP%], \n   .detalle-skeleton[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .gallery__main[_ngcontent-%COMP%] {\n    max-width: 420px;\n  }\n}\n@media (max-width: 780px) {\n  .detalle[_ngcontent-%COMP%], \n   .detalle-skeleton[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .gallery[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .gallery__main[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .gallery__thumbs[_ngcontent-%COMP%] {\n    order: 2;\n    flex-direction: row;\n    width: 100%;\n    max-height: none;\n    overflow-x: auto;\n    overflow-y: visible;\n  }\n  .disponibilidad__sucursales[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=producto-detalle-DL3HL4P6.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductoDetalle, [{
    type: Component,
    args: [{ selector: "app-producto-detalle", imports: [RouterLink, Icon, FormsModule, CrearReserva, AgregarCarrito], template: `<div class="container detalle-page">\r
  @if (loading()) {\r
    <div class="detalle-skeleton">\r
      <div class="skeleton-block skeleton-block--gallery"></div>\r
      <div class="skeleton-block skeleton-block--info"></div>\r
    </div>\r
  } @else if (notFound() || !producto()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">Prenda no encontrada</span>\r
      <span>Puede que ya no est\xE9 disponible.</span>\r
      <a routerLink="/home/catalogo" class="btn btn--ghost btn--sm">Volver al cat\xE1logo</a>\r
    </div>\r
  } @else {\r
    <a routerLink="/home/catalogo" class="back-link">\r
      <app-icon name="arrow-right" style="width: 13px; height: 13px; transform: rotate(180deg)" />\r
      Volver al cat\xE1logo\r
    </a>\r
\r
    <div class="detalle">\r
      <!-- Galer\xEDa: miniaturas verticales a la izquierda + imagen principal\r
           grande a la derecha. Misma carga din\xE1mica de siempre (imagenActivaUrl /\r
           seleccionarImagen / marcarImagenRota) -- solo cambia el orden visual. -->\r
      <div class="gallery">\r
        @if (galeria.length > 1) {\r
          <div class="gallery__thumbs">\r
            @for (url of galeria; track url) {\r
              <button\r
                type="button"\r
                class="gallery__thumb"\r
                [class.is-active]="url === imagenActivaUrl()"\r
                (click)="seleccionarImagen(url)"\r
              >\r
                @if (!erroredUrls().has(url)) {\r
                  <img [src]="resolveMediaUrl(url)" alt="" (error)="marcarImagenRota(url)" />\r
                } @else {\r
                  <div class="gallery__thumb-placeholder">\r
                    <app-icon name="products" style="width: 16px; height: 16px" />\r
                  </div>\r
                }\r
              </button>\r
            }\r
          </div>\r
        }\r
        <div class="gallery__main">\r
          @if (imagenActivaUrl() && !erroredUrls().has(imagenActivaUrl()!)) {\r
            <img\r
              [src]="resolveMediaUrl(imagenActivaUrl())"\r
              [alt]="producto()!.nombre"\r
              (error)="marcarImagenRota(imagenActivaUrl()!)"\r
            />\r
          } @else {\r
            <div class="gallery__placeholder">\r
              <app-icon name="products" style="width: 40px; height: 40px" />\r
            </div>\r
          }\r
        </div>\r
      </div>\r
\r
      <div class="info">\r
        <span class="info__categoria">{{ producto()!.categoria.nombre }}</span>\r
        <h1 class="info__nombre">{{ producto()!.nombre }}</h1>\r
\r
        <!-- C\xF3digo de producto: ProductoPublico no expone ese campo (ver\r
             catalogo.model.ts) -- se omite en vez de inventarlo. -->\r
\r
        <div class="info__precios">\r
          @if (producto()!.en_promocion) {\r
            <span class="precio-anterior">Bs {{ producto()!.precio_base.toFixed(2) }}</span>\r
          }\r
          <span class="info__precio">Bs {{ producto()!.precio_final.toFixed(2) }}</span>\r
          @if (producto()!.en_promocion) {\r
            <span class="precio-descuento">-{{ producto()!.porcentaje_descuento }}%</span>\r
          }\r
        </div>\r
\r
        <!-- Valoraci\xF3n: el modelo actual no expone rating ni rese\xF1as. Se deja\r
             el espacio listo (sin estrellas ni n\xFAmeros inventados) para\r
             cuando ese dato exista. -->\r
\r
        @if (producto()!.descripcion) {\r
          <p class="info__descripcion">{{ producto()!.descripcion }}</p>\r
        }\r
\r
        <span class="info__coleccion">{{ producto()!.temporada.nombre }} \xB7 {{ producto()!.coleccion.nombre }}</span>\r
\r
        @if (producto()!.colores.length > 0) {\r
          <div class="info__group">\r
            <span class="info__label">\r
              Color\r
              @for (color of producto()!.colores; track color.id) {\r
                @if (color.id === colorSeleccionadoId()) {\r
                  <span class="info__label-value">{{ color.nombre }}</span>\r
                }\r
              }\r
            </span>\r
            <div class="color-list">\r
              @for (color of producto()!.colores; track color.id) {\r
                <button\r
                  type="button"\r
                  class="color-swatch"\r
                  [class.is-selected]="color.id === colorSeleccionadoId()"\r
                  [attr.data-color]="color.nombre.toLowerCase()"\r
                  [title]="color.nombre"\r
                  [attr.aria-label]="color.nombre"\r
                  (click)="seleccionarColor(color.id)"\r
                ></button>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        @if (producto()!.tallas.length > 0) {\r
          <div class="info__group">\r
            <span class="info__label">Talla</span>\r
            <div class="talla-list">\r
              @for (talla of producto()!.tallas; track talla.id) {\r
                <button\r
                  type="button"\r
                  class="talla-btn"\r
                  [class.is-selected]="talla.id === tallaSeleccionadaId()"\r
                  (click)="seleccionarTalla(talla.id)"\r
                >\r
                  {{ talla.nombre }}\r
                </button>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        <!-- CU21: "Agregar al carrito" convive con "Reservar" (CU17), sin\r
             tocar su l\xF3gica -- solo necesita la variante (color+talla) ya\r
             elegida arriba, nunca ciudad/sucursal/fecha/hora. -->\r
        <app-agregar-carrito\r
          [productoVarianteId]="varianteSeleccionadaId()"\r
          [returnUrl]="returnUrlCarrito()"\r
          [autoAgregarParam]="agregarCarritoParam"\r
        />\r
\r
        <!-- Bot\xF3n \xFAnico de CU17: arriba de "Stock por sucursal", despu\xE9s de\r
             color y talla. Reacciona a la sucursal que el Cliente elija m\xE1s\r
             abajo (sucursalSeleccionadaId) -- no se mueve ni se repite ah\xED.\r
             Al presionarlo abre el modal "Programar reserva" (fecha +\r
             horario), sin navegar a otra pantalla. -->\r
        <app-crear-reserva\r
          [productoVarianteId]="varianteSeleccionadaId()"\r
          [sucursalId]="sucursalSeleccionadaId()"\r
          [sucursalNombre]="sucursalSeleccionadaNombre()"\r
          [returnUrl]="returnUrlReserva()"\r
          [fechaRestaurada]="fechaParam"\r
          [horaRestaurada]="horaParam"\r
          (reservado)="onReservaCreada()"\r
        />\r
\r
        <div class="disponibilidad">\r
          <div class="disponibilidad__header">\r
            <span class="info__label">Stock por sucursal</span>\r
            <label class="disponibilidad__ciudad">\r
              <select\r
                [ngModel]="ciudadId()"\r
                (ngModelChange)="onCiudadChange($event)"\r
                [disabled]="loadingCiudades() || ciudades().length === 0"\r
              >\r
                @if (ciudades().length === 0) {\r
                  <option [ngValue]="null">Sin ciudades disponibles</option>\r
                } @else if (ciudadId() === null) {\r
                  <option [ngValue]="null" disabled>Selecciona una ciudad</option>\r
                }\r
                @for (ciudad of ciudades(); track ciudad.id) {\r
                  <option [ngValue]="ciudad.id">{{ ciudad.nombre }}</option>\r
                }\r
              </select>\r
            </label>\r
          </div>\r
\r
          @if (loadingCiudades() || loadingDisponibilidad()) {\r
            <div class="disponibilidad__sucursales">\r
              <div class="skeleton-sucursal"></div>\r
              <div class="skeleton-sucursal"></div>\r
            </div>\r
          } @else if (errorDisponibilidad()) {\r
            <div class="state-block state-block--error">\r
              <span>{{ errorDisponibilidad() }}</span>\r
              <button type="button" class="btn btn--ghost btn--sm" (click)="loadDisponibilidad()">Reintentar</button>\r
            </div>\r
          } @else if (ciudadId() === null) {\r
            <span class="disponibilidad__vacio">Selecciona una ciudad para ver sucursales disponibles.</span>\r
          } @else if (disponibilidad().length === 0) {\r
            <span class="disponibilidad__vacio">Sin sucursales en esta ciudad.</span>\r
          } @else {\r
            <div class="disponibilidad__sucursales">\r
              @for (item of disponibilidad(); track item.sucursal_id) {\r
                @let variante = varianteDe(item);\r
                @let disponible = (variante?.cantidad ?? 0) > 0;\r
                <!-- Tarjeta seleccionable (un <button>, igual que\r
                     .talla-btn/.color-swatch arriba) -- no un radio, un punto\r
                     ni un \xEDcono de check: la selecci\xF3n se distingue SOLO por\r
                     borde y fondo (.is-seleccionada). No repite color/talla:\r
                     ya se eligieron una sola vez arriba. El bot\xF3n "Reservar"\r
                     (CU17) vive una sola vez, arriba de esta lista. -->\r
                <button\r
                  type="button"\r
                  class="sucursal-card"\r
                  [class.is-seleccionada]="disponible && sucursalSeleccionadaId() === item.sucursal_id"\r
                  [disabled]="!disponible"\r
                  (click)="seleccionarSucursal(item.sucursal_id, disponible)"\r
                >\r
                  <div class="sucursal-card__head">\r
                    <app-icon name="branches" style="width: 14px; height: 14px" />\r
                    <div class="sucursal-card__head-texto">\r
                      <span class="sucursal-card__nombre">{{ item.sucursal }}</span>\r
                      <span class="sucursal-card__direccion">{{ item.ciudad }}</span>\r
                    </div>\r
                  </div>\r
                  <span class="talla-estado" [class.is-disponible]="disponible">\r
                    {{ disponible ? 'Disponible' : 'Agotado' }}\r
                  </span>\r
                </button>\r
              }\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/public/catalogo/producto-detalle/producto-detalle.scss */\n:host {\n  display: block;\n}\n.detalle-page {\n  padding-top: 20px;\n  padding-bottom: 48px;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  margin-bottom: 16px;\n}\n.back-link:hover {\n  color: var(--color-primary);\n}\n.detalle {\n  display: grid;\n  grid-template-columns: minmax(320px, 460px) 1fr;\n  gap: 40px;\n  align-items: start;\n}\n.gallery {\n  display: flex;\n  gap: 12px;\n}\n.gallery__thumbs {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex-shrink: 0;\n  width: 64px;\n  max-height: 480px;\n  overflow-y: auto;\n}\n.gallery__thumb {\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n  padding: 0;\n  background: none;\n  cursor: pointer;\n}\n.gallery__thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery__thumb.is-active {\n  border-color: var(--color-primary);\n  border-width: 2px;\n}\n.gallery__thumb-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary);\n  background:\n    linear-gradient(\n      160deg,\n      #f0eeea,\n      #ddd6cb);\n}\n.gallery__main {\n  flex: 1;\n  min-width: 0;\n  aspect-ratio: 3/4;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background:\n    linear-gradient(\n      160deg,\n      #f0eeea,\n      #ddd6cb);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gallery__main img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery__placeholder {\n  color: var(--color-text-secondary);\n}\n.info {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 0;\n}\n.info__categoria {\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n}\n.info__nombre {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.info__precio {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-primary-dark);\n}\n.info__precios {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.precio-anterior {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  text-decoration: line-through;\n}\n.precio-descuento {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.info__descripcion {\n  font-size: 13.5px;\n  line-height: 1.6;\n  color: var(--color-text-secondary);\n}\n.info__coleccion {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.info__group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 6px;\n}\n.info__label {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.info__label-value {\n  margin-left: 6px;\n  font-weight: 400;\n  color: var(--color-text-secondary);\n}\n.color-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.color-swatch {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid var(--color-border);\n  padding: 0;\n  background: var(--color-card-bg);\n  cursor: pointer;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.color-swatch:hover {\n  border-color: var(--color-primary);\n}\n.color-swatch.is-selected {\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 20%, white);\n}\n.color-swatch[data-color=blanco] {\n  background: #ffffff;\n}\n.color-swatch[data-color=negro] {\n  background: #1a1a1a;\n}\n.color-swatch[data-color=rojo] {\n  background: #a90012;\n}\n.color-swatch[data-color=azul] {\n  background: #2a4d8f;\n}\n.color-swatch[data-color=celeste] {\n  background: #7fb3e0;\n}\n.color-swatch[data-color=verde] {\n  background: #2e7d4f;\n}\n.color-swatch[data-color=amarillo] {\n  background: #e8c547;\n}\n.color-swatch[data-color=naranja] {\n  background: #d9782d;\n}\n.color-swatch[data-color=gris],\n.color-swatch[data-color=plomo] {\n  background: #9a9a9a;\n}\n.color-swatch[data-color=beige] {\n  background: #e3d5c0;\n}\n.color-swatch[data-color=rosado],\n.color-swatch[data-color=rosa] {\n  background: #e0a0b0;\n}\n.color-swatch[data-color=morado],\n.color-swatch[data-color=violeta] {\n  background: #6b4e8e;\n}\n.color-swatch[data-color=caf\\e9],\n.color-swatch[data-color=cafe],\n.color-swatch[data-color=marr\\f3n],\n.color-swatch[data-color=marron] {\n  background: #6b4423;\n}\n.color-swatch[data-color=dorado] {\n  background: #c9a24b;\n}\n.color-swatch[data-color=plateado] {\n  background: #c0c0c0;\n}\n.color-swatch[data-color=vino] {\n  background: #5e0f18;\n}\n.color-swatch[data-color=crema] {\n  background: #f0e6d2;\n}\n.talla-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.talla-btn {\n  min-width: 42px;\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--color-white);\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-text);\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    border-color var(--transition-fast),\n    color var(--transition-fast);\n}\n.talla-btn:hover {\n  border-color: var(--color-primary);\n}\n.talla-btn.is-selected {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: var(--color-white);\n}\n.disponibilidad {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 14px;\n  padding-top: 16px;\n  border-top: 1px solid var(--color-border);\n}\n.disponibilidad__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.disponibilidad__ciudad select {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 8px 10px;\n  font-size: 12.5px;\n  color: var(--color-text);\n  background: var(--color-white);\n  outline: none;\n  max-width: 220px;\n}\n.disponibilidad__ciudad select:focus {\n  border-color: var(--color-primary);\n}\n.disponibilidad__ciudad select:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.disponibilidad__sucursales {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 12px;\n}\n.disponibilidad__vacio {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n.sucursal-card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  padding: 14px 16px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  min-width: 0;\n  font: inherit;\n  color: inherit;\n  text-align: left;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.sucursal-card:not(:disabled) {\n  cursor: pointer;\n}\n.sucursal-card:not(:disabled):hover {\n  border-color: var(--color-primary-hover);\n}\n.sucursal-card:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sucursal-card.is-seleccionada {\n  border-color: var(--color-primary);\n  background: color-mix(in srgb, var(--color-primary) 6%, white);\n}\n.sucursal-card.is-seleccionada:hover {\n  border-color: var(--color-primary);\n}\n.sucursal-card__head {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.sucursal-card__head app-icon {\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: var(--color-text-secondary);\n}\n.sucursal-card__head-texto {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.sucursal-card__nombre {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--color-text);\n  overflow-wrap: break-word;\n}\n.sucursal-card__direccion {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  overflow-wrap: break-word;\n}\n.talla-estado {\n  align-self: flex-start;\n  padding: 3px 9px;\n  border-radius: var(--radius-sm);\n  font-size: 11.5px;\n  font-weight: 600;\n  background: var(--color-inactive-bg);\n  color: var(--color-inactive-text);\n}\n.talla-estado.is-disponible {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.skeleton-sucursal {\n  height: 90px;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n.detalle-skeleton {\n  display: grid;\n  grid-template-columns: minmax(320px, 460px) 1fr;\n  gap: 40px;\n}\n.skeleton-block {\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n.skeleton-block--gallery {\n  aspect-ratio: 3/4;\n}\n.skeleton-block--info {\n  height: 320px;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 1024px) and (min-width: 781px) {\n  .detalle,\n  .detalle-skeleton {\n    grid-template-columns: 1fr;\n  }\n  .gallery__main {\n    max-width: 420px;\n  }\n}\n@media (max-width: 780px) {\n  .detalle,\n  .detalle-skeleton {\n    grid-template-columns: 1fr;\n  }\n  .gallery {\n    flex-direction: column;\n  }\n  .gallery__main {\n    order: 1;\n  }\n  .gallery__thumbs {\n    order: 2;\n    flex-direction: row;\n    width: 100%;\n    max-height: none;\n    overflow-x: auto;\n    overflow-y: visible;\n  }\n  .disponibilidad__sucursales {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=producto-detalle-DL3HL4P6.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductoDetalle, { className: "ProductoDetalle", filePath: "src/app/features/public/catalogo/producto-detalle/producto-detalle.ts", lineNumber: 23 });
})();
export {
  ProductoDetalle
};
//# debugId=659d439a-ef91-5f7b-9590-abfd6ecb676b
//# sourceMappingURL=chunk-D4RRZE42.js.map
