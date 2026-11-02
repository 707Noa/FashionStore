import {
  ConfirmDialogService
} from "./chunk-COKUPLXV.js";
import {
  ToastService
} from "./chunk-TQ6XHBF5.js";
import {
  AuthService
} from "./chunk-XTPLA2WQ.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-ENHVXUH7.js";
import {
  ApplicationRef,
  Component,
  Injectable,
  InjectionToken,
  Injector,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  RuntimeError,
  Subject,
  __spreadValues,
  filter,
  formatRuntimeError,
  inject,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  switchMap,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
 * @license Angular v22.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  messages;
  notificationClicks;
  notificationCloses;
  pushSubscriptionChanges;
  subscription;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  versionUpdates;
  unrecoverable;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
  const opts = inject(SwRegistrationOptions);
  const injector = inject(Injector);
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  enabled;
  updateViaCache;
  type;
  scope;
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = inject(AuthService).getToken();
  if (!token) {
    return next(req);
  }
  return next(
    req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    })
  );
};

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
function roleGuard(...roles) {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (!auth.isAuthenticated()) {
      return router.createUrlTree(["/login"]);
    }
    if (!auth.hasRole(...roles)) {
      return router.createUrlTree(["/no-autorizado"]);
    }
    return true;
  };
}

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-AISZ4XYY.js").then((m) => m.Login),
    title: "Iniciar sesi\xF3n \xB7 Fashion Store"
  },
  {
    path: "registro",
    loadComponent: () => import("./chunk-3AROTYB5.js").then(
      (m) => m.RegistrarCliente
    ),
    title: "Crear cuenta \xB7 Fashion Store"
  },
  {
    path: "empresa/:slug/registro",
    loadComponent: () => import("./chunk-3AROTYB5.js").then(
      (m) => m.RegistrarCliente
    ),
    title: "Crear cuenta \xB7 Fashion Store"
  },
  {
    path: "registrar-empresa",
    loadComponent: () => import("./chunk-774TFVHO.js").then(
      (m) => m.RegistrarEmpresaComponent
    ),
    title: "Registrar empresa \xB7 FashionStore SaaS"
  },
  {
    path: "recuperar-contrasena",
    loadComponent: () => import("./chunk-AYXTEKHJ.js").then(
      (m) => m.SolicitarRecuperacion
    ),
    title: "Recuperar contrase\xF1a \xB7 Fashion Store"
  },
  {
    path: "restablecer-contrasena",
    loadComponent: () => import("./chunk-JGUGE5I6.js").then(
      (m) => m.RestablecerContrasena
    ),
    title: "Restablecer contrase\xF1a \xB7 Fashion Store"
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-D565KZKO.js").then((m) => m.PublicLayout),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-KS4DHKCR.js").then((m) => m.Home),
        title: "Fashion Store"
      },
      {
        path: "mi-perfil",
        loadComponent: () => import("./chunk-AHEK3MTX.js").then((m) => m.MiPerfil),
        canActivate: [authGuard],
        title: "Mi perfil \xB7 Fashion Store"
      },
      {
        // CU18 -- Consultar reserva (Cliente). Sigue dentro del layout
        // público (mismo navbar), igual que 'mi-perfil' -- no es un
        // dashboard nuevo. roleGuard('CLIENTE') además de authGuard porque,
        // a diferencia de 'mi-perfil' (compartido con Encargado/Proveedor),
        // esta pantalla es exclusiva del Cliente.
        path: "mis-reservas",
        loadComponent: () => import("./chunk-HBAZNXVA.js").then((m) => m.MisReservas),
        canActivate: [authGuard, roleGuard("CLIENTE")],
        title: "Mis reservas \xB7 Fashion Store"
      },
      {
        // CU21 -- Usar carrito de compras (Cliente). Sigue dentro del
        // layout público (mismo navbar), igual que 'mis-reservas' -- no es
        // un dashboard nuevo.
        path: "carrito",
        loadComponent: () => import("./chunk-4DYJYFND.js").then((m) => m.MiCarrito),
        canActivate: [authGuard, roleGuard("CLIENTE")],
        title: "Mi carrito \xB7 Fashion Store"
      },
      {
        // CU22 -- Realizar compra digital (Cliente). A la que lleva
        // "CONTINUAR COMPRA" desde /carrito -- mismo layout público, sigue
        // sin ser un dashboard nuevo.
        path: "finalizar-compra",
        loadComponent: () => import("./chunk-2L56EDMD.js").then(
          (m) => m.FinalizarCompra
        ),
        canActivate: [authGuard, roleGuard("CLIENTE")],
        title: "Finalizar compra \xB7 Fashion Store"
      },
      {
        // CU23 -- Procesar pago electrónico (Cliente). Punto de entrada
        // hacia Stripe Checkout Hosted, al que navega CU22 apenas confirma
        // la Venta -- mismo layout público.
        path: "pago/iniciar",
        loadComponent: () => import("./chunk-74Z5H64E.js").then((m) => m.IniciarPago),
        canActivate: [authGuard, roleGuard("CLIENTE")],
        title: "Pago \xB7 Fashion Store"
      },
      {
        // CU23 -- adonde Stripe redirige de vuelta (success_url/cancel_url,
        // ver CU23_ProcesarPagoElectronico/router.py) tanto si el pago se
        // completó como si el Cliente lo canceló.
        path: "pago/resultado",
        loadComponent: () => import("./chunk-GROP4X3O.js").then((m) => m.ResultadoPago),
        canActivate: [authGuard, roleGuard("CLIENTE")],
        title: "Pago \xB7 Fashion Store"
      },
      {
        // CU27 -- Consultar historial de compras (Cliente, "Mis compras").
        // Independiente de '/mis-reservas' (CU18, Reserva/RS-XXXXX) -- CU27
        // es Venta/VT-XXXXX, ver features/cliente/historial-compras. Mismo
        // layout público, sigue sin ser un dashboard nuevo.
        path: "mis-compras",
        loadComponent: () => import("./chunk-RF5MOFAM.js").then(
          (m) => m.HistorialComprasCliente
        ),
        canActivate: [authGuard, roleGuard("CLIENTE")],
        title: "Mis compras \xB7 Fashion Store"
      },
      {
        // CU31 -- Emitir comprobante de venta (Cliente). A la que navega
        // "Ver comprobante" desde resultado-pago.ts (CU23) apenas se
        // confirma el pago -- mismo layout público, sigue sin ser un
        // dashboard nuevo.
        path: "comprobante/:ventaId",
        loadComponent: () => import("./chunk-BFGOZWZ6.js").then(
          (m) => m.ComprobanteCliente
        ),
        canActivate: [authGuard, roleGuard("CLIENTE")],
        title: "Comprobante de compra \xB7 Fashion Store"
      },
      {
        path: "catalogo",
        loadComponent: () => import("./chunk-JTUJK5CP.js").then(
          (m) => m.CatalogoPage
        ),
        title: "Cat\xE1logo \xB7 Fashion Store"
      },
      {
        // El navbar (public-header.ts) ya enlazaba a '/colecciones' -- esta
        // ruta simplemente no existía. Reutiliza CatalogoService.listColecciones()
        // (mismo endpoint público de CU11 que ya usa catalogo-page) y enlaza
        // cada colección a '/catalogo?coleccion_id=X', el mismo filtro que ya
        // usa el hero de colección destacada del Home -- sin IDs ni nombres
        // fijos en el código.
        path: "colecciones",
        loadComponent: () => import("./chunk-V266C7HK.js").then(
          (m) => m.ColeccionesPage
        ),
        title: "Colecciones \xB7 Fashion Store"
      },
      {
        path: "producto/:id",
        loadComponent: () => import("./chunk-D4RRZE42.js").then(
          (m) => m.ProductoDetalle
        ),
        title: "Detalle de producto \xB7 Fashion Store"
      },
      {
        // CU6 -- Preparar información para operación offline. Disponible
        // para usuarios autenticados (clientes y administradores).
        path: "operacion-offline",
        loadComponent: () => import("./chunk-HGQATZSD.js").then(
          (m) => m.PrepararOfflineComponent
        ),
        canActivate: [authGuard],
        title: "Operaci\xF3n Offline \xB7 Fashion Store"
      }
    ]
  },
  {
    path: "superadmin",
    loadComponent: () => import("./chunk-6QXHECK4.js").then((m) => m.SuperadminLayout),
    canActivate: [authGuard, roleGuard("SUPERADMIN")],
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-AMDWSGS7.js").then((m) => m.SuperadminDashboard),
        title: "Panel de administraci\xF3n \xB7 Fashion Store Superadmin"
      },
      {
        path: "empresas",
        loadComponent: () => import("./chunk-WGUTRWDC.js").then((m) => m.SuperadminEmpresas),
        title: "Gesti\xF3n de empresas \xB7 Fashion Store Superadmin"
      },
      {
        path: "empresas/:id/administrador",
        loadComponent: () => import("./chunk-BEYWMEMF.js").then(
          (m) => m.AdministradorDetalleComponent
        ),
        title: "Gestionar administrador \xB7 Fashion Store Superadmin"
      },
      {
        path: "planes",
        loadComponent: () => import("./chunk-BDKPNLGY.js").then((m) => m.SuperadminPlanes),
        title: "Gesti\xF3n de Planes SaaS \xB7 Fashion Store Superadmin"
      },
      {
        path: "suscripciones",
        loadComponent: () => import("./chunk-ZX3D4V4B.js").then((m) => m.SuperadminSuscripciones),
        title: "Gesti\xF3n de Suscripciones \xB7 Fashion Store Superadmin"
      }
    ]
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-WINUFSWF.js").then((m) => m.AdminLayout),
    canActivate: [authGuard, roleGuard("ADMINISTRADOR")],
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-SNFXYEIM.js").then((m) => m.Dashboard),
        title: "Panel de administraci\xF3n \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Panel de administraci\xF3n",
          headerSubtitle: "Resumen general de FashionStore."
        }
      },
      {
        path: "catalogo/atributos",
        loadComponent: () => import("./chunk-2IRSWIGU.js").then(
          (m) => m.CatalogAttributes
        ),
        title: "Categor\xEDas, tallas y colores \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Gesti\xF3n del cat\xE1logo",
          headerSubtitle: "Administra los datos base utilizados para registrar las prendas."
        }
      },
      {
        path: "catalogo/temporadas",
        loadComponent: () => import("./chunk-XN5DFNIR.js").then(
          (m) => m.TemporadasColecciones
        ),
        title: "Temporadas y colecciones \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Temporadas y colecciones",
          headerSubtitle: "Configura las temporadas de FashionStore y las colecciones que agrupan."
        }
      },
      {
        path: "proveedores",
        loadComponent: () => import("./chunk-24BXKKUT.js").then(
          (m) => m.GestionProveedores
        ),
        title: "Proveedores \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Proveedores",
          headerSubtitle: "Administra los proveedores externos de FashionStore."
        }
      },
      {
        path: "catalogo/productos",
        loadComponent: () => import("./chunk-YDMWBCC5.js").then(
          (m) => m.GestionarProductos
        ),
        title: "Productos \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Productos",
          headerSubtitle: "Gestiona el cat\xE1logo de prendas de FashionStore."
        }
      },
      {
        // CU32 -- Gestionar promociones.
        path: "promociones",
        loadComponent: () => import("./chunk-7G2TBEBA.js").then((m) => m.Promociones),
        title: "Promociones \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Promociones",
          headerSubtitle: "Gestiona los descuentos porcentuales sobre productos del cat\xE1logo."
        }
      },
      {
        // CU30 -- Consultar reportes e indicadores (primera parte: dashboard
        // analítico, sin voz/IA todavía).
        path: "reportes",
        loadComponent: () => import("./chunk-7NK2X4ME.js").then((m) => m.Reportes),
        title: "Reportes e indicadores \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Reportes e indicadores",
          headerSubtitle: "Visi\xF3n global de FashionStore para la toma de decisiones."
        }
      },
      {
        path: "sucursales",
        loadComponent: () => import("./chunk-OR2RAD3F.js").then(
          (m) => m.Sucursales
        ),
        title: "Gestionar sucursales \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Gestionar sucursales",
          headerSubtitle: "Administra las sucursales f\xEDsicas de FashionStore."
        }
      },
      {
        path: "usuarios-roles",
        loadComponent: () => import("./chunk-5GHLXBKF.js").then(
          (m) => m.UsuariosRoles
        ),
        title: "Usuarios y roles \xB7 Fashion Store Admin",
        data: {
          headerTitle: "Usuarios y roles",
          headerSubtitle: "Administra los usuarios internos de tu empresa."
        }
      }
    ]
  },
  {
    path: "proveedor",
    loadComponent: () => import("./chunk-C5SNEGXI.js").then((m) => m.ProveedorLayout),
    canActivate: [authGuard, roleGuard("PROVEEDOR")],
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-RL56PH4Y.js").then((m) => m.Inicio),
        title: "Panel de Proveedor \xB7 Fashion Store",
        data: {
          headerTitle: "Panel de Proveedor",
          headerSubtitle: "Resumen de tu actividad en FashionStore."
        }
      },
      {
        path: "mis-productos",
        loadComponent: () => import("./chunk-VMKLDBRI.js").then((m) => m.MisProductos),
        title: "Mis productos \xB7 Fashion Store Proveedor",
        data: {
          headerTitle: "Mis productos",
          headerSubtitle: "Consulta y edita la informaci\xF3n de tus prendas enviadas."
        }
      },
      {
        path: "enviar-producto",
        loadComponent: () => import("./chunk-YSCVGALX.js").then(
          (m) => m.EnviarProducto
        ),
        title: "Enviar producto \xB7 Fashion Store Proveedor",
        data: {
          headerTitle: "Enviar producto",
          headerSubtitle: "Comparte una nueva prenda que ofreces a FashionStore."
        }
      },
      {
        path: "disponibilidad",
        loadComponent: () => import("./chunk-AAI56I5K.js").then(
          (m) => m.Disponibilidad
        ),
        title: "Disponibilidad \xB7 Fashion Store Proveedor",
        data: {
          headerTitle: "Disponibilidad",
          headerSubtitle: "Informa qu\xE9 prendas tienes disponibles actualmente."
        }
      },
      {
        path: "mi-perfil",
        loadComponent: () => import("./chunk-U6ABR6WQ.js").then((m) => m.MiPerfil),
        title: "Mi perfil \xB7 Fashion Store Proveedor",
        data: {
          headerTitle: "Mi perfil",
          headerSubtitle: "Datos de contacto de tu empresa."
        }
      }
    ]
  },
  {
    path: "encargado",
    loadComponent: () => import("./chunk-JXUUOUC2.js").then((m) => m.EncargadoLayout),
    canActivate: [authGuard, roleGuard("ENCARGADO_SUCURSAL")],
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-QDZMTLEG.js").then((m) => m.Inicio),
        title: "Panel de Encargado \xB7 Fashion Store",
        data: {
          headerTitle: "Panel de Encargado de Sucursal",
          headerSubtitle: ""
        }
      },
      {
        // CU14 -- Consultar inventario. Hereda el guard del padre
        // (authGuard + roleGuard('ENCARGADO_SUCURSAL')); el backend además
        // resuelve la sucursal siempre desde el usuario autenticado (ver
        // CU14_ConsultarInventario/router.py), nunca desde esta ruta.
        path: "inventario",
        loadComponent: () => import("./chunk-6MMF7D7X.js").then((m) => m.Inventario),
        title: "Inventario \xB7 Fashion Store Encargado",
        data: {
          headerTitle: "Inventario",
          headerSubtitle: "Consulta y ajusta el stock de tu sucursal."
        }
      },
      {
        // CU15 -- Registrar recepción de mercadería. Hereda el guard del
        // padre (authGuard + roleGuard('ENCARGADO_SUCURSAL')); el backend
        // además resuelve la sucursal siempre desde el usuario autenticado
        // (ver CU15_RegistrarRecepcionMercaderia/router.py), nunca desde
        // esta ruta.
        path: "recepcion-mercaderia",
        loadComponent: () => import("./chunk-BBHHZE62.js").then(
          (m) => m.RecepcionMercaderia
        ),
        title: "Recepci\xF3n de mercader\xEDa \xB7 Fashion Store Encargado",
        data: {
          headerTitle: "Recepci\xF3n de mercader\xEDa",
          headerSubtitle: "Registra la mercader\xEDa recibida de un proveedor en tu sucursal."
        }
      },
      {
        // CU16 -- Registrar movimientos de inventario. Hereda el guard del
        // padre (authGuard + roleGuard('ENCARGADO_SUCURSAL')); el backend
        // además resuelve la sucursal siempre desde el usuario autenticado
        // (ver CU16_RegistrarMovimientosInventario/router.py), nunca desde
        // esta ruta. Distinto de CU15 (recepción de proveedor): aquí son
        // ajustes manuales justificados, positivos o negativos.
        path: "movimientos-inventario",
        loadComponent: () => import("./chunk-V26SKZQN.js").then(
          (m) => m.MovimientosInventario
        ),
        title: "Movimientos de inventario \xB7 Fashion Store Encargado",
        data: {
          headerTitle: "Movimientos de inventario",
          headerSubtitle: "Registra ajustes manuales y justificados de stock en tu sucursal."
        }
      },
      {
        // CU20 -- Atender reserva de prendas. Hereda el guard del padre
        // (authGuard + roleGuard('ENCARGADO_SUCURSAL')); el backend además
        // resuelve la sucursal siempre desde el usuario autenticado (ver
        // CU20_AtenderReservaPrendas/router.py), nunca desde esta ruta.
        path: "reservas",
        loadComponent: () => import("./chunk-ET243JEY.js").then((m) => m.Reservas),
        title: "Reservas \xB7 Fashion Store Encargado",
        data: {
          headerTitle: "Reservas",
          headerSubtitle: "Gestiona las reservas de prendas de tu sucursal."
        }
      },
      {
        // Mismo componente MiPerfil de CU04 que ya usan '/mi-perfil' (Cliente)
        // y '/proveedor/mi-perfil' (Proveedor) -- sin duplicar el formulario,
        // solo registrado bajo el layout de Encargado para que nunca lo saque
        // de este árbol de rutas hacia el layout público.
        path: "mi-perfil",
        loadComponent: () => import("./chunk-AHEK3MTX.js").then((m) => m.MiPerfil),
        title: "Mi perfil \xB7 Fashion Store Encargado",
        data: {
          headerTitle: "Mi perfil",
          headerSubtitle: "Datos de tu cuenta de Encargado de Sucursal."
        }
      }
    ]
  },
  {
    // CAJERO -- panel completo con sidebar (mismo criterio visual que
    // EncargadoLayout, ver layouts/cajero-layout). Agrupa Inicio, CU24
    // (Ventas), CU20 (Reservas para caja -- antes en 'cajero' directo,
    // ahora 'cajero/reservas-pendientes'), CU26 (Devoluciones y cambios) y
    // Mi perfil bajo una sola navegación persistente.
    path: "cajero",
    loadComponent: () => import("./chunk-HILCXL5U.js").then((m) => m.CajeroLayout),
    canActivate: [authGuard, roleGuard("CAJERO")],
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-AKSOQGSL.js").then((m) => m.Inicio),
        title: "Panel de Cajero \xB7 Fashion Store",
        data: {
          headerTitle: "Panel de Cajero",
          headerSubtitle: ""
        }
      },
      {
        // CU24 -- Registrar venta presencial (Cajero), flujo A: venta
        // directa. A la que lleva "Ventas" del sidebar.
        path: "ventas/nueva",
        loadComponent: () => import("./chunk-YBVVGSEY.js").then(
          (m) => m.VentaDirecta
        ),
        title: "Nueva venta \xB7 Fashion Store Cajero",
        data: {
          headerTitle: "Nueva venta",
          headerSubtitle: "Busca las prendas y arma la venta directa."
        }
      },
      {
        // CU20 -- integración mínima con el rol Cajero: consulta de solo
        // lectura de las reservas que el Encargado ya dejó LISTA_PARA_CAJA
        // en SU sucursal (resuelta siempre del token en el backend).
        // "Cargar venta" (CU25) abre un modal sobre esta misma pantalla --
        // no navega, no tiene ruta propia.
        path: "reservas-pendientes",
        loadComponent: () => import("./chunk-SB3PN5Z5.js").then(
          (m) => m.ReservasPendientes
        ),
        title: "Reservas para caja \xB7 Fashion Store Cajero",
        data: {
          headerTitle: "Reservas para caja",
          headerSubtitle: "Reservas que tu sucursal ya dej\xF3 listas para continuar el proceso."
        }
      },
      {
        // CU27 -- Consultar historial de compras (Cajero). Ítem propio
        // "Historial" del sidebar, separado de "Ventas" y "Devoluciones y
        // cambios" a propósito (requerimiento explícito: no mezclarlo con
        // Ventas).
        path: "historial",
        loadComponent: () => import("./chunk-IP4MK5F7.js").then((m) => m.Historial),
        title: "Historial \xB7 Fashion Store Cajero",
        data: {
          headerTitle: "Historial",
          headerSubtitle: "Ventas realizadas en tu sucursal."
        }
      },
      {
        // CU26 -- Registrar devolución o cambio.
        path: "devoluciones",
        loadComponent: () => import("./chunk-VRXT2IRB.js").then(
          (m) => m.DevolucionesCambios
        ),
        title: "Devoluciones y cambios \xB7 Fashion Store Cajero",
        data: {
          headerTitle: "Devoluciones y cambios",
          headerSubtitle: "Gestiona prendas de ventas realizadas."
        }
      },
      {
        // CU31 -- Emitir comprobante de venta (Cajero). A la que navega
        // "Ver" del paso "PAGO REGISTRADO" de procesar-pago.ts (CU25) --
        // sin ítem propio en el sidebar (se llega desde el flujo de pago,
        // no es una sección de navegación aparte).
        path: "comprobante/:ventaId",
        loadComponent: () => import("./chunk-EIFP77UK.js").then(
          (m) => m.ComprobanteCajero
        ),
        title: "Comprobante \xB7 Fashion Store Cajero",
        data: {
          headerTitle: "Comprobante",
          headerSubtitle: "Detalle de la venta ya pagada."
        }
      },
      {
        // Mismo componente MiPerfil de CU04 que ya usan '/mi-perfil'
        // (Cliente), '/encargado/mi-perfil' y '/proveedor/mi-perfil' -- sin
        // duplicar el formulario.
        path: "mi-perfil",
        loadComponent: () => import("./chunk-AHEK3MTX.js").then((m) => m.MiPerfil),
        title: "Mi perfil \xB7 Fashion Store Cajero",
        data: {
          headerTitle: "Mi perfil",
          headerSubtitle: "Datos de tu cuenta de Cajero."
        }
      }
    ]
  },
  {
    // Ruta de nivel superior, sin ningún layout (admin/encargado/proveedor/
    // cajero/público): roleGuard() la usa para cualquier rol autenticado que
    // no coincide con la ruta pedida, y login.ts para un rol que no esté en
    // RUTA_POR_ROL (no debería ocurrir, pero nunca cae a un panel por
    // defecto) -- ver core/pages/no-autorizado/no-autorizado.ts.
    path: "no-autorizado",
    loadComponent: () => import("./chunk-4B4LDUTR.js").then((m) => m.NoAutorizado),
    title: "Acceso no autorizado \xB7 Fashion Store"
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // anchorScrolling: necesario para que el enlace "Categorías" del navbar
    // salte a la sección "Compra por categorías" del Home (id="categorias").
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: "enabled" })),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideServiceWorker("ngsw-worker.js", {
      enabled: environment.production,
      registrationStrategy: "registerWhenStable:30000"
    })
  ]
};

// src/app/core/ui/toast/toast-container.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastContainer_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function ToastContainer_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function ToastContainer_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2715 ");
  }
}
function ToastContainer_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " i ");
  }
}
function ToastContainer_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275conditionalCreate(2, ToastContainer_For_2_Case_2_Template, 1, 0)(3, ToastContainer_For_2_Case_3_Template, 1, 0)(4, ToastContainer_For_2_Case_4_Template, 1, 0)(5, ToastContainer_For_2_Case_5_Template, 1, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 4);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "button", 5);
    \u0275\u0275domListener("click", function ToastContainer_For_2_Template_button_click_8_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.dismiss(toast_r2.id));
    });
    \u0275\u0275text(9, " \u2715 ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const toast_r2 = ctx.$implicit;
    \u0275\u0275classMap(toast_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = toast_r2.type) === "success" ? 2 : tmp_11_0 === "brand" ? 3 : tmp_11_0 === "error" ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(toast_r2.text);
  }
}
var ToastContainer = class _ToastContainer {
  toastService = inject(ToastService);
  static \u0275fac = function ToastContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainer, selectors: [["app-toast-container"]], decls: 3, vars: 0, consts: [[1, "toast-stack"], ["role", "status", 1, "toast", 3, "class"], ["role", "status", 1, "toast"], [1, "toast__icon"], [1, "toast__text"], ["type", "button", "aria-label", "Cerrar", 1, "toast__close", 3, "click"]], template: function ToastContainer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastContainer_For_2_Template, 10, 4, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1000;\n  display: block;\n}\n.toast-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-end;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 260px;\n  max-width: 360px;\n  padding: 12px 14px;\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  box-shadow: var(--%NS%shadow-medium);\n  border-left: 4px solid var(--%NS%color-text-secondary);\n  font-size: 13.5px;\n  color: var(--%NS%color-text);\n  animation: _ngcontent-%COMP%_toast-in 200ms ease;\n}\n.toast.success[_ngcontent-%COMP%] {\n  border-left-color: var(--%NS%color-success-text);\n}\n.toast.error[_ngcontent-%COMP%] {\n  border-left-color: var(--%NS%color-danger);\n}\n.toast.info[_ngcontent-%COMP%] {\n  border-left-color: var(--%NS%color-primary);\n}\n.toast.brand[_ngcontent-%COMP%] {\n  border-left-color: var(--%NS%color-primary);\n}\n.toast__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: var(--%NS%color-inactive-bg);\n  color: var(--%NS%color-text-secondary);\n}\n.success[_ngcontent-%COMP%]   .toast__icon[_ngcontent-%COMP%] {\n  background: var(--%NS%color-success-bg);\n  color: var(--%NS%color-success-text);\n}\n.error[_ngcontent-%COMP%]   .toast__icon[_ngcontent-%COMP%] {\n  background: var(--%NS%color-danger-bg);\n  color: var(--%NS%color-danger);\n}\n.info[_ngcontent-%COMP%]   .toast__icon[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.brand[_ngcontent-%COMP%]   .toast__icon[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--%NS%color-primary) 12%, white);\n  color: var(--%NS%color-primary);\n}\n.toast__text[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.toast__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--%NS%color-text-secondary);\n  font-size: 11px;\n  padding: 2px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.toast__close[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-text);\n}\n@keyframes _ngcontent-%COMP%_toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=toast-container-OY3IJBVM.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainer, [{
    type: Component,
    args: [{ selector: "app-toast-container", template: `<div class="toast-stack">\r
  @for (toast of toastService.toasts(); track toast.id) {\r
    <div class="toast" [class]="toast.type" role="status">\r
      <span class="toast__icon">\r
        @switch (toast.type) {\r
          @case ('success') { \u2713 }\r
          @case ('brand') { \u2713 }\r
          @case ('error') { \u2715 }\r
          @default { i }\r
        }\r
      </span>\r
      <span class="toast__text">{{ toast.text }}</span>\r
      <button type="button" class="toast__close" (click)="toastService.dismiss(toast.id)" aria-label="Cerrar">\r
        \u2715\r
      </button>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/core/ui/toast/toast-container.scss */\n:host {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1000;\n  display: block;\n}\n.toast-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-end;\n}\n.toast {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 260px;\n  max-width: 360px;\n  padding: 12px 14px;\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  box-shadow: var(--shadow-medium);\n  border-left: 4px solid var(--color-text-secondary);\n  font-size: 13.5px;\n  color: var(--color-text);\n  animation: toast-in 200ms ease;\n}\n.toast.success {\n  border-left-color: var(--color-success-text);\n}\n.toast.error {\n  border-left-color: var(--color-danger);\n}\n.toast.info {\n  border-left-color: var(--color-primary);\n}\n.toast.brand {\n  border-left-color: var(--color-primary);\n}\n.toast__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  background: var(--color-inactive-bg);\n  color: var(--color-text-secondary);\n}\n.success .toast__icon {\n  background: var(--color-success-bg);\n  color: var(--color-success-text);\n}\n.error .toast__icon {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.info .toast__icon {\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.brand .toast__icon {\n  background: color-mix(in srgb, var(--color-primary) 12%, white);\n  color: var(--color-primary);\n}\n.toast__text {\n  flex: 1;\n  line-height: 1.4;\n}\n.toast__close {\n  background: none;\n  border: none;\n  color: var(--color-text-secondary);\n  font-size: 11px;\n  padding: 2px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.toast__close:hover {\n  color: var(--color-text);\n}\n@keyframes toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=toast-container-OY3IJBVM.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainer, { className: "ToastContainer", filePath: "src/app/core/ui/toast/toast-container.ts", lineNumber: 9 });
})();

// src/app/core/ui/confirm-dialog/confirm-dialog.ts
function ConfirmDialog_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function ConfirmDialog_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogService.resolve(false));
    });
    \u0275\u0275domElementStart(1, "div", 2);
    \u0275\u0275domListener("click", function ConfirmDialog_Conditional_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 5)(7, "button", 6);
    \u0275\u0275domListener("click", function ConfirmDialog_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogService.resolve(false));
    });
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 7);
    \u0275\u0275domListener("click", function ConfirmDialog_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogService.resolve(true));
    });
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const config_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(config_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r3.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", config_r3.cancelText ?? "Cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("btn--danger", config_r3.danger)("btn--primary", !config_r3.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", config_r3.confirmText ?? "Confirmar", " ");
  }
}
var ConfirmDialog = class _ConfirmDialog {
  dialogService = inject(ConfirmDialogService);
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialog, selectors: [["app-confirm-dialog"]], decls: 1, vars: 1, consts: [[1, "overlay"], [1, "overlay", 3, "click"], ["role", "alertdialog", "aria-modal", "true", 1, "panel", 3, "click"], [1, "panel__title"], [1, "panel__message"], [1, "panel__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", 3, "click"]], template: function ConfirmDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_0_Template, 11, 8, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.dialogService.config()) ? 0 : -1, tmp_0_0);
    }
  }, styles: ["\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(20, 20, 20, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  animation: _ngcontent-%COMP%_fade-in 150ms ease;\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--%NS%color-white);\n  border-radius: var(--%NS%radius-lg);\n  padding: 24px;\n  width: 360px;\n  max-width: 90vw;\n  box-shadow: var(--%NS%shadow-medium);\n  animation: _ngcontent-%COMP%_pop-in 180ms ease;\n}\n.panel__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.panel__message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 13.5px;\n  line-height: 1.5;\n  color: var(--%NS%color-text-secondary);\n}\n.panel__actions[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: var(--%NS%radius-sm);\n  padding: 9px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  transition: background var(--%NS%transition-fast);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n}\n.btn--%NS%ghost[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: var(--%NS%color-white);\n}\n.btn--%NS%primary[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-primary-hover);\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: var(--%NS%color-danger);\n  color: var(--%NS%color-white);\n}\n.btn--%NS%danger[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-primary-dark);\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pop-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=confirm-dialog-6ZTZHP6U.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", template: `@if (dialogService.config(); as config) {\r
  <div class="overlay" (click)="dialogService.resolve(false)">\r
    <div class="panel" role="alertdialog" aria-modal="true" (click)="$event.stopPropagation()">\r
      <h3 class="panel__title">{{ config.title }}</h3>\r
      <p class="panel__message">{{ config.message }}</p>\r
      <div class="panel__actions">\r
        <button type="button" class="btn btn--ghost" (click)="dialogService.resolve(false)">\r
          {{ config.cancelText ?? 'Cancelar' }}\r
        </button>\r
        <button\r
          type="button"\r
          class="btn"\r
          [class.btn--danger]="config.danger"\r
          [class.btn--primary]="!config.danger"\r
          (click)="dialogService.resolve(true)"\r
        >\r
          {{ config.confirmText ?? 'Confirmar' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ["/* src/app/core/ui/confirm-dialog/confirm-dialog.scss */\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(20, 20, 20, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  animation: fade-in 150ms ease;\n}\n.panel {\n  background: var(--color-white);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  width: 360px;\n  max-width: 90vw;\n  box-shadow: var(--shadow-medium);\n  animation: pop-in 180ms ease;\n}\n.panel__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.panel__message {\n  margin-top: 10px;\n  font-size: 13.5px;\n  line-height: 1.5;\n  color: var(--color-text-secondary);\n}\n.panel__actions {\n  margin-top: 22px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn {\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  transition: background var(--transition-fast);\n}\n.btn--ghost {\n  background: transparent;\n  color: var(--color-text-secondary);\n}\n.btn--ghost:hover {\n  background: var(--color-bg);\n}\n.btn--primary {\n  background: var(--color-primary);\n  color: var(--color-white);\n}\n.btn--primary:hover {\n  background: var(--color-primary-hover);\n}\n.btn--danger {\n  background: var(--color-danger);\n  color: var(--color-white);\n}\n.btn--danger:hover {\n  background: var(--color-primary-dark);\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes pop-in {\n  from {\n    opacity: 0;\n    transform: scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=confirm-dialog-6ZTZHP6U.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialog, { className: "ConfirmDialog", filePath: "src/app/core/ui/confirm-dialog/confirm-dialog.ts", lineNumber: 9 });
})();

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toast-container")(2, "app-confirm-dialog");
    }
  }, dependencies: [RouterOutlet, ToastContainer, ConfirmDialog], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=app-N2OKQD6J.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, ToastContainer, ConfirmDialog], template: "<router-outlet />\r\n<app-toast-container />\r\n<app-confirm-dialog />\r\n", styles: ["/* src/app/app.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=app-N2OKQD6J.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# debugId=27fb87c3-47d2-5ea0-a840-1fd244e2de11
//# sourceMappingURL=main-TRQINU67.js.map
