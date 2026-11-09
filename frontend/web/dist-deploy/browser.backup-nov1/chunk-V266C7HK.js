import {
  CatalogoService
} from "./chunk-PBZJP2BS.js";
import {
  RouterLink
} from "./chunk-OXXL2I3V.js";
import "./chunk-BQM6CYO4.js";
import "./chunk-WLDUVQ6B.js";
import "./chunk-ENHVXUH7.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PNHCNXB7.js";

// src/app/features/public/colecciones/colecciones-page/colecciones-page.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ["/home/catalogo"];
var _c2 = (a0) => ({ coleccion_id: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function ColeccionesPage_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function ColeccionesPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, ColeccionesPage_Conditional_6_For_2_Template, 1, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ColeccionesPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 6);
    \u0275\u0275text(2, "No se pudo cargar las colecciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function ColeccionesPage_Conditional_7_Template_button_click_5_listener() {
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
function ColeccionesPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "Todav\xEDa no hay colecciones disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Vuelve a revisar m\xE1s adelante.");
    \u0275\u0275elementEnd()();
  }
}
function ColeccionesPage_Conditional_9_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coleccion_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(coleccion_r3.descripcion);
  }
}
function ColeccionesPage_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ColeccionesPage_Conditional_9_For_2_Conditional_4_Template, 2, 1, "p", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 12);
    \u0275\u0275text(6, "Ver colecci\xF3n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const coleccion_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coleccion_r3.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(coleccion_r3.descripcion ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c1))("queryParams", \u0275\u0275pureFunction1(5, _c2, coleccion_r3.id));
  }
}
function ColeccionesPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, ColeccionesPage_Conditional_9_For_2_Template, 7, 7, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.colecciones());
  }
}
var ColeccionesPage = class _ColeccionesPage {
  catalogoService = inject(CatalogoService);
  colecciones = signal(
    [],
    ...ngDevMode ? [{ debugName: "colecciones" }] : (
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
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.catalogoService.listColecciones().subscribe({
      next: (valores) => {
        this.colecciones.set(valores);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.colecciones.set([]);
        this.errorMessage.set("No se pudo conectar con el servidor. Int\xE9ntalo nuevamente.");
      }
    });
  }
  static \u0275fac = function ColeccionesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColeccionesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColeccionesPage, selectors: [["app-colecciones-page"]], decls: 10, vars: 1, consts: [[1, "container", "colecciones-page"], [1, "page-header"], [1, "coleccion-grid"], [1, "state-block", "state-block--error"], [1, "state-block"], [1, "skeleton-card"], [1, "state-block__title"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "coleccion-card"], [1, "coleccion-card__body"], [1, "coleccion-card__name"], [1, "coleccion-card__desc"], [1, "btn", "btn--primary", "btn--sm", 3, "routerLink", "queryParams"]], template: function ColeccionesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Colecciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Explora las colecciones activas de FashionStore.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ColeccionesPage_Conditional_6_Template, 3, 1, "div", 2)(7, ColeccionesPage_Conditional_7_Template, 7, 1, "div", 3)(8, ColeccionesPage_Conditional_8_Template, 5, 0, "div", 4)(9, ColeccionesPage_Conditional_9_Template, 3, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : ctx.errorMessage() ? 7 : ctx.colecciones().length === 0 ? 8 : 9);
    }
  }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.colecciones-page[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 48px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--%NS%color-text);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.coleccion-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n.coleccion-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border-radius: var(--%NS%radius-md);\n  background: var(--%NS%color-white);\n  border: 1px solid var(--%NS%color-border);\n  transition: transform var(--%NS%transition-fast), box-shadow var(--%NS%transition-fast);\n}\n.coleccion-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--%NS%shadow-medium);\n}\n.coleccion-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.coleccion-card__name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text);\n}\n.coleccion-card__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--%NS%color-text-secondary);\n}\n.coleccion-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  aspect-ratio: 3/1.6;\n  border-radius: var(--%NS%radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--%NS%color-card-bg) 25%,\n      color-mix(in srgb, var(--%NS%color-card-bg) 50%, white) 37%,\n      var(--%NS%color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 900px) {\n  .coleccion-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .coleccion-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=colecciones-page-6QMLXOOK.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColeccionesPage, [{
    type: Component,
    args: [{ selector: "app-colecciones-page", imports: [RouterLink], template: `<div class="container colecciones-page">\r
  <div class="page-header">\r
    <h1>Colecciones</h1>\r
    <p>Explora las colecciones activas de FashionStore.</p>\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="coleccion-grid">\r
      @for (i of [1, 2, 3, 4]; track i) {\r
        <div class="skeleton-card"></div>\r
      }\r
    </div>\r
  } @else if (errorMessage()) {\r
    <div class="state-block state-block--error">\r
      <span class="state-block__title">No se pudo cargar las colecciones</span>\r
      <span>{{ errorMessage() }}</span>\r
      <button type="button" class="btn btn--ghost btn--sm" (click)="load()">Reintentar</button>\r
    </div>\r
  } @else if (colecciones().length === 0) {\r
    <div class="state-block">\r
      <span class="state-block__title">Todav\xEDa no hay colecciones disponibles</span>\r
      <span>Vuelve a revisar m\xE1s adelante.</span>\r
    </div>\r
  } @else {\r
    <div class="coleccion-grid">\r
      @for (coleccion of colecciones(); track coleccion.id) {\r
        <div class="coleccion-card">\r
          <div class="coleccion-card__body">\r
            <span class="coleccion-card__name">{{ coleccion.nombre }}</span>\r
            @if (coleccion.descripcion) {\r
              <p class="coleccion-card__desc">{{ coleccion.descripcion }}</p>\r
            }\r
          </div>\r
          <a\r
            [routerLink]="['/home/catalogo']"\r
            [queryParams]="{ coleccion_id: coleccion.id }"\r
            class="btn btn--primary btn--sm"\r
          >Ver colecci\xF3n</a>\r
        </div>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/public/colecciones/colecciones-page/colecciones-page.scss */\n:host {\n  display: block;\n}\n.colecciones-page {\n  padding-top: 24px;\n  padding-bottom: 48px;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.page-header p {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.coleccion-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n.coleccion-card {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border-radius: var(--radius-md);\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  transition: transform var(--transition-fast), box-shadow var(--transition-fast);\n}\n.coleccion-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-medium);\n}\n.coleccion-card__body {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.coleccion-card__name {\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: var(--color-text);\n}\n.coleccion-card__desc {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.coleccion-card .btn {\n  align-self: flex-start;\n}\n.skeleton-card {\n  aspect-ratio: 3/1.6;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-card-bg) 25%,\n      color-mix(in srgb, var(--color-card-bg) 50%, white) 37%,\n      var(--color-card-bg) 63%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n@media (max-width: 900px) {\n  .coleccion-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .coleccion-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=colecciones-page-6QMLXOOK.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColeccionesPage, { className: "ColeccionesPage", filePath: "src/app/features/public/colecciones/colecciones-page/colecciones-page.ts", lineNumber: 17 });
})();
export {
  ColeccionesPage
};
//# debugId=075caf1c-46f8-5e93-9f1a-9ed7396886b2
//# sourceMappingURL=chunk-V266C7HK.js.map
