import {
  SuperadminService
} from "./chunk-UN6AH4K6.js";
import {
  Icon
} from "./chunk-KUJLGORD.js";
import {
  Router,
  RouterLink
} from "./chunk-OXXL2I3V.js";
import {
  CommonModule,
  DatePipe
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNHCNXB7.js";

// src/app/features/superadmin/empresas/empresas.ts
var _forTrack0 = ($index, $item) => $item.id;
function SuperadminEmpresas_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Cargando empresas...");
    \u0275\u0275elementEnd();
  }
}
function SuperadminEmpresas_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 8);
    \u0275\u0275listener("click", function SuperadminEmpresas_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reintentar());
    });
    \u0275\u0275text(3, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function SuperadminEmpresas_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-icon", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No hay empresas registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 10);
    \u0275\u0275text(5, "Registrar empresa");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminEmpresas_Conditional_11_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 16)(12, "button", 17);
    \u0275\u0275listener("click", function SuperadminEmpresas_Conditional_11_For_15_Template_button_click_12_listener() {
      const empresa_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verDetalle(empresa_r4));
    });
    \u0275\u0275element(13, "app-icon", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const empresa_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(empresa_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(empresa_r4.slug);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", empresa_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", empresa_r4.is_active ? "Activa" : "Inactiva", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, empresa_r4.fecha_creacion, "dd/MM/yyyy"));
  }
}
function SuperadminEmpresas_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Fecha de registro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SuperadminEmpresas_Conditional_11_For_15_Template, 14, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.empresas());
  }
}
var SuperadminEmpresas = class _SuperadminEmpresas {
  superadminService = inject(SuperadminService);
  router = inject(Router);
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
  ngOnInit() {
    this.cargarEmpresas();
  }
  cargarEmpresas() {
    this.loading.set(true);
    this.error.set(null);
    this.superadminService.getEmpresas().subscribe({
      next: (data) => {
        this.empresas.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("No se pudieron cargar las empresas.");
        this.loading.set(false);
      }
    });
  }
  verDetalle(empresa) {
    this.router.navigate(["/superadmin/empresas", empresa.id, "administrador"]);
  }
  reintentar() {
    this.cargarEmpresas();
  }
  static \u0275fac = function SuperadminEmpresas_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminEmpresas)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminEmpresas, selectors: [["app-superadmin-empresas"]], decls: 12, vars: 1, consts: [[1, "empresas-container"], [1, "empresas-header"], ["href", "/cu01-registrar-empresa", 1, "btn-primary"], ["name", "plus", 2, "width", "16px", "height", "16px"], [1, "loading"], [1, "error"], [1, "empty-state"], [1, "table-wrapper"], [3, "click"], ["name", "branches", 2, "width", "48px", "height", "48px"], ["href", "/cu01-registrar-empresa", 1, "btn-secondary"], [1, "empresas-table"], [1, "empresa-name"], [1, "empresa-slug"], [1, "status-badge"], [1, "date"], [1, "actions"], ["title", "Ver detalle", 1, "action-btn", 3, "click"], ["name", "eye", 2, "width", "16px", "height", "16px"]], template: function SuperadminEmpresas_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Gesti\xF3n de empresas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 2);
      \u0275\u0275element(5, "app-icon", 3);
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Registrar empresa");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, SuperadminEmpresas_Conditional_8_Template, 2, 0, "div", 4)(9, SuperadminEmpresas_Conditional_9_Template, 4, 1, "div", 5)(10, SuperadminEmpresas_Conditional_10_Template, 6, 0, "div", 6)(11, SuperadminEmpresas_Conditional_11_Template, 16, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading() ? 8 : ctx.error() ? 9 : ctx.empresas().length === 0 ? 10 : 11);
    }
  }, dependencies: [CommonModule, Icon, DatePipe], styles: ["\n.empresas-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.empresas-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.empresas-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: var(--%NS%radius-md);\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--%NS%color-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-primary);\n  border: 1px solid var(--%NS%color-border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--%NS%color-primary) 8%, white);\n}\n.loading[_ngcontent-%COMP%], \n.error[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: var(--%NS%radius-md);\n  text-align: center;\n  font-size: 14px;\n}\n.loading[_ngcontent-%COMP%] {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-text-secondary);\n}\n.error[_ngcontent-%COMP%] {\n  background: #fee;\n  color: #c00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #c00;\n  background: transparent;\n  color: #c00;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: background 200ms;\n}\n.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #fdf;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: var(--%NS%color-text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-md);\n  overflow: hidden;\n}\n.empresas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.empresas-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--%NS%color-bg);\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n.empresas-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n.empresas-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--%NS%color-border);\n  color: var(--%NS%color-text);\n}\n.empresas-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n}\n.empresas-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.empresa-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.empresa-slug[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-secondary);\n  font-family: monospace;\n  font-size: 11px;\n}\n.date[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-secondary);\n  font-size: 12px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #eee;\n  color: #666;\n  text-transform: uppercase;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.actions[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 40px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  color: var(--%NS%color-text-secondary);\n  border-radius: var(--%NS%radius-sm);\n  cursor: pointer;\n  transition: all 200ms;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%color-bg);\n  color: var(--%NS%color-primary);\n}\n@media (max-width: 768px) {\n  .empresas-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=empresas-FEOAOUBY.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminEmpresas, [{
    type: Component,
    args: [{ selector: "app-superadmin-empresas", imports: [CommonModule, RouterLink, Icon], standalone: true, template: `<div class="empresas-container">
  <div class="empresas-header">
    <h1>Gesti\xF3n de empresas</h1>
    <a href="/cu01-registrar-empresa" class="btn-primary">
      <app-icon name="plus" style="width: 16px; height: 16px" />
      <span>Registrar empresa</span>
    </a>
  </div>

  @if (loading()) {
    <div class="loading">Cargando empresas...</div>
  } @else if (error()) {
    <div class="error">
      {{ error() }}
      <button (click)="reintentar()">Reintentar</button>
    </div>
  } @else if (empresas().length === 0) {
    <div class="empty-state">
      <app-icon name="branches" style="width: 48px; height: 48px" />
      <p>No hay empresas registradas</p>
      <a href="/cu01-registrar-empresa" class="btn-secondary">Registrar empresa</a>
    </div>
  } @else {
    <div class="table-wrapper">
      <table class="empresas-table">
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Slug</th>
            <th>Estado</th>
            <th>Fecha de registro</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (empresa of empresas(); track empresa.id) {
            <tr>
              <td class="empresa-name">{{ empresa.nombre }}</td>
              <td class="empresa-slug">{{ empresa.slug }}</td>
              <td>
                <span class="status-badge" [class.active]="empresa.is_active">
                  {{ empresa.is_active ? 'Activa' : 'Inactiva' }}
                </span>
              </td>
              <td class="date">{{ empresa.fecha_creacion | date: 'dd/MM/yyyy' }}</td>
              <td class="actions">
                <button class="action-btn" title="Ver detalle" (click)="verDetalle(empresa)">
                  <app-icon name="eye" style="width: 16px; height: 16px" />
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>
`, styles: ["/* src/app/features/superadmin/empresas/empresas.scss */\n.empresas-container {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.empresas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.empresas-header h1 {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: var(--radius-md);\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 200ms;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary {\n  background: var(--color-primary);\n  color: white;\n}\n.btn-primary:hover {\n  opacity: 0.9;\n}\n.btn-secondary {\n  background: var(--color-bg);\n  color: var(--color-primary);\n  border: 1px solid var(--color-border);\n}\n.btn-secondary:hover {\n  background: color-mix(in srgb, var(--color-primary) 8%, white);\n}\n.loading,\n.error {\n  padding: 24px;\n  border-radius: var(--radius-md);\n  text-align: center;\n  font-size: 14px;\n}\n.loading {\n  background: var(--color-bg);\n  color: var(--color-text-secondary);\n}\n.error {\n  background: #fee;\n  color: #c00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.error button {\n  padding: 6px 12px;\n  border: 1px solid #c00;\n  background: transparent;\n  color: #c00;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: background 200ms;\n}\n.error button:hover {\n  background: #fdf;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: var(--color-text-secondary);\n}\n.empty-state app-icon {\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 14px;\n  margin: 0;\n}\n.table-wrapper {\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.empresas-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.empresas-table thead {\n  background: var(--color-bg);\n  border-bottom: 1px solid var(--color-border);\n}\n.empresas-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.empresas-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-text);\n}\n.empresas-table tbody tr:hover {\n  background: var(--color-bg);\n}\n.empresas-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.empresa-name {\n  font-weight: 600;\n}\n.empresa-slug {\n  color: var(--color-text-secondary);\n  font-family: monospace;\n  font-size: 11px;\n}\n.date {\n  color: var(--color-text-secondary);\n  font-size: 12px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #eee;\n  color: #666;\n  text-transform: uppercase;\n}\n.status-badge.active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.actions {\n  text-align: right;\n  width: 40px;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  color: var(--color-text-secondary);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 200ms;\n}\n.action-btn:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n@media (max-width: 768px) {\n  .empresas-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary {\n    justify-content: center;\n  }\n  .table-wrapper {\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=empresas-FEOAOUBY.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminEmpresas, { className: "SuperadminEmpresas", filePath: "src/app/features/superadmin/empresas/empresas.ts", lineNumber: 14 });
})();
export {
  SuperadminEmpresas
};
//# debugId=f94a416b-6097-596e-9980-b85759d1ac31
//# sourceMappingURL=chunk-WGUTRWDC.js.map
