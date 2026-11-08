import {
  environment
} from "./chunk-WLDUVQ6B.js";
import {
  HttpClient
} from "./chunk-ENHVXUH7.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-PNHCNXB7.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "fashionstore_token";
var USER_KEY = "fashionstore_usuario";
var AuthService = class _AuthService {
  http = inject(HttpClient);
  _usuario = signal(
    this.leerUsuarioAlmacenado(),
    ...ngDevMode ? [{ debugName: "_usuario" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _token = signal(
    this.leerTokenAlmacenado(),
    ...ngDevMode ? [{ debugName: "_token" }] : (
      /* istanbul ignore next */
      []
    )
  );
  usuario = this._usuario.asReadonly();
  isAuthenticated = computed(
    () => this._token() !== null,
    ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
      /* istanbul ignore next */
      []
    )
  );
  login(correo, password) {
    return this.http.post(`${environment.apiUrl}/auth/login`, { correo, password }).pipe(tap((response) => this.guardarSesion(response)));
  }
  // CU02 -- Registrar cliente. A diferencia de login(), NO guarda sesión ni
  // token: el backend no emite JWT en este endpoint (ver router.py, CU02 --
  // "no duplica la emisión de tokens"). El Cliente recién registrado inicia
  // sesión llamando a login() por separado, desde la pantalla de Login.
  register(datos) {
    return this.http.post(`${environment.apiUrl}/auth/register`, datos);
  }
  // CU03 -- Recuperar contraseña. A diferencia de login(), no guarda sesión
  // ni token: son pasos previos a poder iniciar sesión por CU01, no un inicio
  // de sesión en sí.
  forgotPassword(correo) {
    const payload = { correo };
    return this.http.post(`${environment.apiUrl}/auth/forgot-password`, payload);
  }
  resetPassword(datos) {
    return this.http.post(`${environment.apiUrl}/auth/reset-password`, datos);
  }
  // CU04 -- Actualizar perfil. GET/PUT "/auth/me": el backend identifica al
  // usuario por el JWT (interceptor ya adjunta el Bearer token, ver
  // core/interceptors/auth.interceptor.ts) -- nunca se envía un id.
  obtenerMiPerfil() {
    return this.http.get(`${environment.apiUrl}/auth/me`);
  }
  actualizarMiPerfil(datos) {
    return this.http.put(`${environment.apiUrl}/auth/me`, datos).pipe(tap((usuario) => this.actualizarUsuarioEnSesion(usuario)));
  }
  obtenerEmpresa(slug) {
    return this.http.get(`${environment.apiUrl}/empresas/${slug}`);
  }
  obtenerEmpresasActivas() {
    return this.http.get(`${environment.apiUrl}/empresas/activas`);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._token.set(null);
    this._usuario.set(null);
  }
  hasRole(...roles) {
    const usuario = this._usuario();
    return usuario !== null && roles.includes(usuario.rol);
  }
  getToken() {
    return this._token();
  }
  guardarSesion(response) {
    localStorage.setItem(TOKEN_KEY, response.access_token);
    localStorage.setItem(USER_KEY, JSON.stringify(response.usuario));
    this._token.set(response.access_token);
    this._usuario.set(response.usuario);
  }
  // CU04 -- Actualiza solo los datos de sesión ya guardados (nombre/correo),
  // sin tocar el token: el JWT sigue siendo válido, la sesión no se reinicia.
  actualizarUsuarioEnSesion(usuario) {
    localStorage.setItem(USER_KEY, JSON.stringify(usuario));
    this._usuario.set(usuario);
  }
  leerTokenAlmacenado() {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  }
  leerUsuarioAlmacenado() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# debugId=f61feee6-4551-5ccc-852d-8358507f2f92
//# sourceMappingURL=chunk-XTPLA2WQ.js.map
