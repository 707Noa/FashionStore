import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-OB3O2VC6.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PNHCNXB7.js";

// src/app/core/services/offline-storage.service.ts
var OfflineStorageService = class _OfflineStorageService {
  dbName = "fashionstore_offline";
  db = null;
  constructor() {
    this.initializeDB();
  }
  initializeDB() {
    const request = indexedDB.open(this.dbName, 1);
    request.onerror = () => {
      console.error("Error al abrir IndexedDB");
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("offline_preparacion")) {
        const preparacionStore = db.createObjectStore("offline_preparacion", { keyPath: "id" });
        preparacionStore.createIndex("empresa_sucursal", ["empresa_id", "sucursal_id"], {
          unique: true
        });
      }
    };
    request.onsuccess = () => {
      this.db = request.result;
    };
  }
  async savePreparacion(preparacion, empresaId) {
    const db = await this.getDB();
    const transaction = db.transaction(["offline_preparacion"], "readwrite");
    const store = transaction.objectStore("offline_preparacion");
    const dataToStore = {
      id: `${empresaId}_${preparacion.metadata.sucursal_id}`,
      empresa_id: empresaId,
      sucursal_id: preparacion.metadata.sucursal_id,
      data: preparacion,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    return new Promise((resolve, reject) => {
      const request = store.put(dataToStore);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Error al guardar preparaci\xF3n en IndexedDB"));
      };
    });
  }
  async getPreparacion(empresaId, sucursalId) {
    const db = await this.getDB();
    const transaction = db.transaction(["offline_preparacion"], "readonly");
    const store = transaction.objectStore("offline_preparacion");
    return new Promise((resolve, reject) => {
      const request = store.get(`${empresaId}_${sucursalId}`);
      request.onsuccess = () => {
        const result = request.result;
        resolve(result ? result.data : null);
      };
      request.onerror = () => {
        reject(new Error("Error al obtener preparaci\xF3n de IndexedDB"));
      };
    });
  }
  async getAllPreparaciones(empresaId) {
    const db = await this.getDB();
    const transaction = db.transaction(["offline_preparacion"], "readonly");
    const store = transaction.objectStore("offline_preparacion");
    const index = store.index("empresa_sucursal");
    return new Promise((resolve, reject) => {
      const request = index.getAll(IDBKeyRange.bound([empresaId, 0], [empresaId, Infinity]));
      request.onsuccess = () => {
        const results = request.result || [];
        resolve(results.map((r) => r.data));
      };
      request.onerror = () => {
        reject(new Error("Error al obtener preparaciones de IndexedDB"));
      };
    });
  }
  async deletePreparacion(empresaId, sucursalId) {
    const db = await this.getDB();
    const transaction = db.transaction(["offline_preparacion"], "readwrite");
    const store = transaction.objectStore("offline_preparacion");
    return new Promise((resolve, reject) => {
      const request = store.delete(`${empresaId}_${sucursalId}`);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Error al eliminar preparaci\xF3n de IndexedDB"));
      };
    });
  }
  async clearAllPreparaciones() {
    const db = await this.getDB();
    const transaction = db.transaction(["offline_preparacion"], "readwrite");
    const store = transaction.objectStore("offline_preparacion");
    return new Promise((resolve, reject) => {
      const request = store.clear();
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Error al limpiar IndexedDB"));
      };
    });
  }
  getDB() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db);
        return;
      }
      const request = indexedDB.open(this.dbName);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      request.onerror = () => {
        reject(new Error("No se pudo conectar a IndexedDB"));
      };
    });
  }
  static \u0275fac = function OfflineStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OfflineStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OfflineStorageService, factory: _OfflineStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OfflineStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/operacion-offline/servicios/offline-preparacion.service.ts
var OfflinePreparacionService = class _OfflinePreparacionService {
  constructor(http, offlineStorage) {
    this.http = http;
    this.offlineStorage = offlineStorage;
  }
  http;
  offlineStorage;
  apiUrl = `${environment.apiUrl}/offline`;
  /**
   * Obtiene las sucursales del usuario autenticado.
   * El backend devuelve solo las sucursales de la empresa del usuario.
   */
  obtenerSucursales() {
    return this.http.get(`${this.apiUrl}/sucursales`);
  }
  /**
   * Prepara la información offline para una sucursal.
   * El backend valida que la sucursal pertenece a la empresa del usuario autenticado.
   */
  prepararInformacion(sucursalId) {
    return this.http.post(`${this.apiUrl}/preparar/${sucursalId}`, {});
  }
  /**
   * Guarda la preparación en IndexedDB después de obtenerla del backend.
   * Valida que los datos correspondan a la empresa/sucursal preparada.
   */
  async guardarPreparacion(preparacion, empresaId) {
    try {
      if (preparacion.metadata.empresa_id !== empresaId) {
        console.error("Error: La preparaci\xF3n recibida no corresponde a la empresa del usuario");
        return false;
      }
      await this.offlineStorage.savePreparacion(preparacion, empresaId);
      const verificacion = await this.offlineStorage.getPreparacion(empresaId, preparacion.metadata.sucursal_id);
      if (!verificacion) {
        console.error("Error: No se pudo verificar la escritura en IndexedDB");
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error al guardar preparaci\xF3n:", error);
      return false;
    }
  }
  /**
   * Obtiene una preparación guardada para una empresa y sucursal.
   */
  async obtenerPreparacion(empresaId, sucursalId) {
    try {
      return await this.offlineStorage.getPreparacion(empresaId, sucursalId);
    } catch (error) {
      console.error("Error al obtener preparaci\xF3n:", error);
      return null;
    }
  }
  /**
   * Obtiene todas las preparaciones guardadas de una empresa.
   */
  async obtenerTodasLasPreparaciones(empresaId) {
    try {
      return await this.offlineStorage.getAllPreparaciones(empresaId);
    } catch (error) {
      console.error("Error al obtener preparaciones:", error);
      return [];
    }
  }
  /**
   * Elimina una preparación específica.
   */
  async eliminarPreparacion(empresaId, sucursalId) {
    try {
      await this.offlineStorage.deletePreparacion(empresaId, sucursalId);
    } catch (error) {
      console.error("Error al eliminar preparaci\xF3n:", error);
    }
  }
  static \u0275fac = function OfflinePreparacionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OfflinePreparacionService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OfflineStorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OfflinePreparacionService, factory: _OfflinePreparacionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OfflinePreparacionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: OfflineStorageService }], null);
})();

// src/app/features/operacion-offline/componentes/preparar-offline.component.ts
function PrepararOfflineComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sucursal_r1 = ctx.$implicit;
    \u0275\u0275property("value", sucursal_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sucursal_r1.nombre, " ");
  }
}
function PrepararOfflineComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "\xDAltima actualizaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.estado.fechaUltimaActualizacion, "dd/MM/yyyy HH:mm"));
  }
}
function PrepararOfflineComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Informaci\xF3n disponible localmente ");
    \u0275\u0275elementEnd();
  }
}
function PrepararOfflineComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estado.mensaje, " ");
  }
}
function PrepararOfflineComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Descargando informaci\xF3n...");
    \u0275\u0275elementEnd()();
  }
}
function PrepararOfflineComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function PrepararOfflineComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reintentar());
    });
    \u0275\u0275text(1, " Actualizar ");
    \u0275\u0275elementEnd();
  }
}
var PrepararOfflineComponent = class _PrepararOfflineComponent {
  authService = inject(AuthService);
  offlinePreparacionService = inject(OfflinePreparacionService);
  sucursales = [];
  sucursalSeleccionada = "";
  cargandoSucursales = false;
  estado = {
    estado: "no-preparado",
    mensaje: ""
  };
  ngOnInit() {
    this.cargarSucursales();
    this.verificarPreparacionExistente();
  }
  cargarSucursales() {
    this.cargandoSucursales = true;
    this.offlinePreparacionService.obtenerSucursales().subscribe({
      next: (sucursales) => {
        this.sucursales = sucursales;
        this.cargandoSucursales = false;
      },
      error: (error) => {
        console.error("Error al cargar sucursales:", error);
        this.estado = {
          estado: "error",
          mensaje: "No se pudieron cargar las sucursales"
        };
        this.cargandoSucursales = false;
      }
    });
  }
  async verificarPreparacionExistente() {
    const usuario = this.authService.usuario();
    if (!usuario || !usuario.empresa_id) {
      return;
    }
    const empresaId = usuario.empresa_id;
    if (this.sucursalSeleccionada && typeof this.sucursalSeleccionada === "number") {
      const preparacion = await this.offlinePreparacionService.obtenerPreparacion(empresaId, this.sucursalSeleccionada);
      if (preparacion) {
        this.estado = {
          estado: "preparado",
          mensaje: "",
          fechaUltimaActualizacion: preparacion.metadata.fecha_preparacion
        };
      }
    }
  }
  async prepararInformacion() {
    if (!this.sucursalSeleccionada || typeof this.sucursalSeleccionada !== "number") {
      this.estado = {
        estado: "error",
        mensaje: "Selecciona una sucursal"
      };
      return;
    }
    const usuario = this.authService.usuario();
    if (!usuario || !usuario.empresa_id) {
      this.estado = {
        estado: "error",
        mensaje: "No se pudo obtener la informaci\xF3n del usuario"
      };
      return;
    }
    if (!navigator.onLine) {
      this.estado = {
        estado: "error",
        mensaje: "Se necesita conexi\xF3n a Internet para preparar o actualizar la informaci\xF3n offline."
      };
      return;
    }
    this.estado = {
      estado: "preparando",
      mensaje: "Descargando informaci\xF3n..."
    };
    try {
      const preparacion = await this.offlinePreparacionService.prepararInformacion(this.sucursalSeleccionada).toPromise();
      if (!preparacion) {
        throw new Error("No se recibi\xF3 respuesta del servidor");
      }
      const guardado = await this.offlinePreparacionService.guardarPreparacion(preparacion, usuario.empresa_id);
      if (!guardado) {
        throw new Error("No se pudo guardar la informaci\xF3n en el almacenamiento local");
      }
      this.estado = {
        estado: "preparado",
        mensaje: "",
        fechaUltimaActualizacion: preparacion.metadata.fecha_preparacion
      };
    } catch (error) {
      console.error("Error al preparar informaci\xF3n:", error);
      const preparacionAnterior = await this.offlinePreparacionService.obtenerPreparacion(usuario.empresa_id, this.sucursalSeleccionada);
      if (preparacionAnterior) {
        this.estado = {
          estado: "error",
          mensaje: "Error al actualizar. Se conserva la \xFAltima preparaci\xF3n v\xE1lida.",
          fechaUltimaActualizacion: preparacionAnterior.metadata.fecha_preparacion
        };
      } else {
        this.estado = {
          estado: "error",
          mensaje: (error instanceof Error ? error.message : "Error desconocido") || "Error al preparar la informaci\xF3n. Intenta nuevamente."
        };
      }
    }
  }
  getEstadoTexto() {
    switch (this.estado.estado) {
      case "no-preparado":
        return "No preparado";
      case "preparando":
        return "Preparando...";
      case "preparado":
        return "\u2713 Preparado";
      case "error":
        return "Error";
      default:
        return "";
    }
  }
  reintentar() {
    this.prepararInformacion();
  }
  static \u0275fac = function PrepararOfflineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrepararOfflineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrepararOfflineComponent, selectors: [["app-preparar-offline"]], decls: 24, vars: 12, consts: [[1, "offline-container"], [1, "offline-card"], [1, "form-group"], ["for", "sucursal"], ["id", "sucursal", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "estado-box"], [1, "estado-item"], [1, "label"], [3, "ngClass"], ["class", "estado-item", 4, "ngIf"], ["class", "estado-item success", 4, "ngIf"], ["class", "mensaje-error", 4, "ngIf"], ["class", "progreso", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "estado-item", "success"], [1, "mensaje-error"], [1, "progreso"], [1, "spinner"], [1, "btn", "btn-secondary", 3, "click"]], template: function PrepararOfflineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Preparar informaci\xF3n para operaci\xF3n offline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "label", 3);
      \u0275\u0275text(6, "Sucursal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function PrepararOfflineComponent_Template_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sucursalSeleccionada, $event) || (ctx.sucursalSeleccionada = $event);
        return $event;
      });
      \u0275\u0275elementStart(8, "option", 5);
      \u0275\u0275text(9, "-- Seleccionar sucursal --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, PrepararOfflineComponent_option_10_Template, 2, 2, "option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14, "Estado actual:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, PrepararOfflineComponent_div_17_Template, 6, 4, "div", 11)(18, PrepararOfflineComponent_div_18_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, PrepararOfflineComponent_div_19_Template, 2, 1, "div", 13)(20, PrepararOfflineComponent_div_20_Template, 4, 0, "div", 14);
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function PrepararOfflineComponent_Template_button_click_21_listener() {
        return ctx.prepararInformacion();
      });
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, PrepararOfflineComponent_button_23_Template, 2, 0, "button", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.sucursalSeleccionada);
      \u0275\u0275property("disabled", ctx.cargandoSucursales || ctx.estado.estado === "preparando");
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.sucursales);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", "estado-" + ctx.estado.estado);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getEstadoTexto(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.estado.fechaUltimaActualizacion);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.estado.estado === "preparado");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.estado.estado === "error");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.estado.estado === "preparando");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.sucursalSeleccionada || ctx.estado.estado === "preparando" || ctx.cargandoSucursales);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.estado.estado === "preparando" ? "Preparando..." : "Preparar informaci\xF3n", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.estado.estado === "preparado");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n.offline-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.offline-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n  color: #333;\n  font-size: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #555;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-family: inherit;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1976d2;\n  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);\n}\n.estado-box[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-left: 4px solid #1976d2;\n  padding: 1rem;\n  margin: 1.5rem 0;\n  border-radius: 4px;\n}\n.estado-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n  font-size: 0.95rem;\n}\n.estado-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n}\n.estado-no-preparado[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 600;\n}\n.estado-preparando[_ngcontent-%COMP%] {\n  color: #2196f3;\n  font-weight: 600;\n}\n.estado-preparado[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-weight: 600;\n}\n.estado-error[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-weight: 600;\n}\n.estado-item.success[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-weight: 500;\n  margin-top: 0.75rem;\n}\n.mensaje-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  padding: 1rem;\n  border-radius: 4px;\n  margin: 1rem 0;\n  border-left: 4px solid #c62828;\n}\n.progreso[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 0;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto 1rem;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #1976d2;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  margin-top: 1rem;\n}\n.btn[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #1976d2;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #bdbdbd;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #757575;\n  color: white;\n  margin-top: 0.5rem;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #616161;\n}\n@media (max-width: 768px) {\n  .offline-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .offline-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=preparar-offline.component-BKR64LDY.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrepararOfflineComponent, [{
    type: Component,
    args: [{ selector: "app-preparar-offline", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="offline-container">
      <div class="offline-card">
        <h2>Preparar informaci\xF3n para operaci\xF3n offline</h2>

        <div class="form-group">
          <label for="sucursal">Sucursal</label>
          <select
            id="sucursal"
            [(ngModel)]="sucursalSeleccionada"
            [disabled]="cargandoSucursales || estado.estado === 'preparando'"
            class="form-control"
          >
            <option [value]="">-- Seleccionar sucursal --</option>
            <option *ngFor="let sucursal of sucursales" [value]="sucursal.id">
              {{ sucursal.nombre }}
            </option>
          </select>
        </div>

        <div class="estado-box">
          <div class="estado-item">
            <span class="label">Estado actual:</span>
            <span [ngClass]="'estado-' + estado.estado">
              {{ getEstadoTexto() }}
            </span>
          </div>

          <div *ngIf="estado.fechaUltimaActualizacion" class="estado-item">
            <span class="label">\xDAltima actualizaci\xF3n:</span>
            <span>{{ estado.fechaUltimaActualizacion | date : 'dd/MM/yyyy HH:mm' }}</span>
          </div>

          <div *ngIf="estado.estado === 'preparado'" class="estado-item success">
            Informaci\xF3n disponible localmente
          </div>
        </div>

        <div *ngIf="estado.estado === 'error'" class="mensaje-error">
          {{ estado.mensaje }}
        </div>

        <div *ngIf="estado.estado === 'preparando'" class="progreso">
          <div class="spinner"></div>
          <p>Descargando informaci\xF3n...</p>
        </div>

        <button
          (click)="prepararInformacion()"
          [disabled]="
            !sucursalSeleccionada ||
            estado.estado === 'preparando' ||
            cargandoSucursales
          "
          class="btn btn-primary"
        >
          {{ estado.estado === 'preparando' ? 'Preparando...' : 'Preparar informaci\xF3n' }}
        </button>

        <button
          *ngIf="estado.estado === 'preparado'"
          (click)="reintentar()"
          class="btn btn-secondary"
        >
          Actualizar
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;e3bbd30c22dd2f1a5a49dea55a4013eeed8342c6cb32fa2587f80da38ee0c277;C:/Users/hp/Desktop/P1/FashionStore/frontend/web/src/app/features/operacion-offline/componentes/preparar-offline.component.ts */\n.offline-container {\n  padding: 2rem;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.offline-card {\n  background: white;\n  border-radius: 8px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\nh2 {\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n  color: #333;\n  font-size: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #555;\n}\n.form-control {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-family: inherit;\n}\n.form-control:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #1976d2;\n  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);\n}\n.estado-box {\n  background: #f9f9f9;\n  border-left: 4px solid #1976d2;\n  padding: 1rem;\n  margin: 1.5rem 0;\n  border-radius: 4px;\n}\n.estado-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n  font-size: 0.95rem;\n}\n.estado-item:last-child {\n  margin-bottom: 0;\n}\n.label {\n  font-weight: 500;\n  color: #666;\n}\n.estado-no-preparado {\n  color: #ff9800;\n  font-weight: 600;\n}\n.estado-preparando {\n  color: #2196f3;\n  font-weight: 600;\n}\n.estado-preparado {\n  color: #4caf50;\n  font-weight: 600;\n}\n.estado-error {\n  color: #f44336;\n  font-weight: 600;\n}\n.estado-item.success {\n  color: #4caf50;\n  font-weight: 500;\n  margin-top: 0.75rem;\n}\n.mensaje-error {\n  background: #ffebee;\n  color: #c62828;\n  padding: 1rem;\n  border-radius: 4px;\n  margin: 1rem 0;\n  border-left: 4px solid #c62828;\n}\n.progreso {\n  text-align: center;\n  padding: 2rem 0;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto 1rem;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #1976d2;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.btn {\n  width: 100%;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  margin-top: 1rem;\n}\n.btn:first-of-type {\n  margin-top: 0;\n}\n.btn-primary {\n  background: #1976d2;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1565c0;\n}\n.btn-primary:disabled {\n  background: #bdbdbd;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background: #757575;\n  color: white;\n  margin-top: 0.5rem;\n}\n.btn-secondary:hover {\n  background: #616161;\n}\n@media (max-width: 768px) {\n  .offline-container {\n    padding: 1rem;\n  }\n  .offline-card {\n    padding: 1.5rem;\n  }\n  h2 {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=preparar-offline.component-BKR64LDY.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrepararOfflineComponent, { className: "PrepararOfflineComponent", filePath: "src/app/features/operacion-offline/componentes/preparar-offline.component.ts", lineNumber: 283 });
})();
export {
  PrepararOfflineComponent
};
//# debugId=7dc2c6fb-1534-50f4-87a5-c21666b72e3b
//# sourceMappingURL=chunk-HGQATZSD.js.map
