import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from '../../../../core/ui/icon/icon';
import { ConnectivityService } from '../../../../core/services/connectivity.service';
import { OfflineStorageService } from '../../../../core/services/offline-storage.service';
import { ToastService } from '../../../../core/ui/toast/toast.service';
import { resolveMediaUrl } from '../../../../core/utils/resolve-media-url';
import { AuthService } from '../../../../core/services/auth.service';
import { ComprobanteService, descargarBlob } from '../../../comprobantes/comprobante.service';
import {
  ConfirmarPagoPayload,
  ConfirmarPagoEfectivoPayload,
  MetodoPago,
  PagoConfirmadoOut,
  TipoTarjeta,
  VentaPresencialOut,
} from '../venta-presencial.model';
import { VentaPresencialService } from '../venta-presencial.service';

type Paso = 'formulario' | 'confirmado';

/**
 * CU25 -- Procesar pago presencial (Cajero). Ficha flotante/modal (NUNCA
 * navega a otra página) centrada sobre la pantalla actual, con el fondo
 * oscurecido -- ver procesar-pago.html/.scss.
 *
 * Componente ÚNICO, reutilizado por los dos puntos de entrada (nunca
 * duplicado):
 *  - "Cargar venta" en una tarjeta RS-XXXXX de reservas-pendientes.html
 *    (venta ORIGEN=RESERVA, ya creada/reutilizada por CU24 antes de abrir
 *    este modal).
 *  - "Continuar al pago" del resumen de venta directa
 *    (venta-resumen.html, ORIGEN=DIRECTA).
 *
 * Recibe la Venta YA armada por CU24 (`venta`, con sus detalles/total) como
 * input -- este modal nunca la crea ni la recalcula, solo la muestra y
 * cobra sobre ella. Tres métodos (EFECTIVO/TARJETA/QR) como tarjetas
 * grandes seleccionables; al elegir una, se revelan SUS campos propios
 * dentro del mismo modal (nunca un paso/pantalla aparte). "Confirmar pago"
 * llama a CU25; FastAPI vuelve a validar todo (monto, disponibilidad,
 * estado) -- este componente nunca decide que el pago es válido, solo
 * arma la solicitud y muestra el resultado.
 *
 * Cerrar el modal SIN confirmar (`cerrar`) no cambia nada: la Venta sigue
 * PENDIENTE_PAGO, lista para reabrirse sin duplicar nada (el padre decide
 * qué hacer con `cerrar`/`pagoRegistrado`, este componente no navega por
 * sí mismo).
 */
@Component({
  selector: 'app-procesar-pago',
  imports: [Icon],
  templateUrl: './procesar-pago.html',
  styleUrl: './procesar-pago.scss',
})
export class ProcesarPago {
  private readonly service = inject(VentaPresencialService);
  private readonly toast = inject(ToastService);
  private readonly comprobanteService = inject(ComprobanteService);
  private readonly router = inject(Router);
  private readonly connectivity = inject(ConnectivityService);
  private readonly offlineStorage = inject(OfflineStorageService);
  private readonly auth = inject(AuthService);

  readonly venta = input.required<VentaPresencialOut>();
  readonly cerrar = output<void>();
  readonly pagoRegistrado = output<void>();
  readonly nuevaVenta = output<void>();

  protected readonly resolveMediaUrl = resolveMediaUrl;

  protected readonly paso = signal<Paso>('formulario');
  protected readonly metodoSeleccionado = signal<MetodoPago | null>(null);

  protected readonly montoRecibidoTexto = signal('');
  protected readonly tipoTarjeta = signal<TipoTarjeta | null>(null);
  protected readonly referencia = signal('');

  protected readonly confirmando = signal(false);
  protected readonly pagoConfirmado = signal<PagoConfirmadoOut | null>(null);

  // CU31 -- Emitir comprobante de venta. "Enviar" solo tiene sentido si la
  // venta tiene un Cliente registrado -- eso SOLO ocurre cuando viene de una
  // Reserva (CU24 nunca guarda cliente_id en una venta directa de
  // mostrador, ver CU24_RegistrarVentaPresencial/service.py), mismo dato ya
  // disponible en `venta().reserva`, sin pedir nada nuevo al backend.
  protected readonly tieneClienteRegistrado = computed(() => this.venta().reserva !== null);
  protected readonly descargandoComprobante = signal(false);
  protected readonly enviandoComprobante = signal(false);

  protected readonly montoRecibidoNumero = computed(() => {
    const valor = Number(this.montoRecibidoTexto().replace(',', '.'));
    return Number.isFinite(valor) ? valor : 0;
  });

  protected readonly cambio = computed(() => {
    const recibido = this.montoRecibidoNumero();
    const total = this.venta().total;
    return recibido >= total ? recibido - total : 0;
  });

  protected readonly estaOffline = computed(() => !this.connectivity.isOnline());

  protected readonly puedeConfirmar = computed(() => {
    if (this.confirmando()) {
      return false;
    }
    const metodo = this.metodoSeleccionado();

    // CU9 — Offline: solo EFECTIVO
    if (this.estaOffline() && metodo !== 'EFECTIVO') {
      return false;
    }

    if (metodo === 'EFECTIVO') {
      return this.montoRecibidoNumero() >= this.venta().total;
    }
    if (metodo === 'TARJETA') {
      return this.tipoTarjeta() !== null;
    }
    return metodo === 'QR';
  });

  seleccionarMetodo(metodo: MetodoPago): void {
    this.metodoSeleccionado.set(metodo);
  }

  actualizarMontoRecibido(valor: string): void {
    this.montoRecibidoTexto.set(valor);
  }

  seleccionarTipoTarjeta(tipo: TipoTarjeta): void {
    this.tipoTarjeta.set(tipo);
  }

  actualizarReferencia(valor: string): void {
    this.referencia.set(valor);
  }

  confirmarPago(): void {
    const metodo = this.metodoSeleccionado();
    if (!metodo || !this.puedeConfirmar()) {
      return;
    }

    // CU9 — Offline: rechazar QR/TARJETA
    if (this.estaOffline() && metodo !== 'EFECTIVO') {
      this.toast.error('Sin conexión a Internet, solo se permiten pagos en efectivo.');
      return;
    }

    let payload: ConfirmarPagoPayload;
    if (metodo === 'EFECTIVO') {
      payload = { metodo_pago: 'EFECTIVO', monto_recibido: this.montoRecibidoNumero() };
    } else if (metodo === 'TARJETA') {
      const referencia = this.referencia().trim();
      payload = {
        metodo_pago: 'TARJETA',
        tipo_tarjeta: this.tipoTarjeta()!,
        ...(referencia ? { referencia } : {}),
      };
    } else {
      const referencia = this.referencia().trim();
      payload = { metodo_pago: 'QR', ...(referencia ? { referencia } : {}) };
    }

    this.confirmando.set(true);

    // CU9 — Bifurcación: offline con EFECTIVO → guardar localmente
    if (this.estaOffline() && metodo === 'EFECTIVO') {
      this.confirmarPagoOffline(payload as any).catch((err) => {
        this.confirmando.set(false);
        this.toast.error('No se pudo guardar la venta offline: ' + (err?.message || 'error desconocido'));
      });
      return;
    }

    // Online o métodos online: proceder con HTTP
    this.service.confirmarPago(this.venta().id, payload).subscribe({
      next: (pago) => {
        this.confirmando.set(false);
        this.pagoConfirmado.set(pago);
        this.paso.set('confirmado');
        this.pagoRegistrado.emit();
      },
      error: (err) => {
        this.confirmando.set(false);
        const detalle = typeof err?.error?.detail === 'string' ? err.error.detail : null;
        this.toast.error(detalle ?? 'No se pudo registrar el pago. Inténtalo nuevamente.');
      },
    });
  }

  // CU9 — Guardar venta offline en transacción atómica
  private async confirmarPagoOffline(payload: ConfirmarPagoEfectivoPayload): Promise<void> {
    const venta = this.venta();
    const usuario = this.auth.usuario();

    if (!usuario) {
      throw new Error('No hay sesión activa');
    }

    const empresaId = usuario.empresa_id || 1;
    const preparaciones = await this.offlineStorage.getAllPreparaciones(empresaId);
    const sucursalId = preparaciones?.[0]?.metadata?.sucursal_id || 1;

    const ventaUuid = crypto.randomUUID();
    const detalles = venta.detalles.map((d: any) => ({
      uuid: crypto.randomUUID(),
      producto_variante_id: d.variante?.id || 0,
      cantidad: d.cantidad,
      precio_unitario: d.precio_unitario,
      subtotal: d.subtotal,
    }));

    // CU9 STOCK CONTROL — Revalidación final antes de guardar
    for (const detalle of venta.detalles) {
      const varianteId = detalle.variante?.id || 0;
      const disponibleLocal = await this.offlineStorage.obtenerStockDisponibleLocal(
        empresaId,
        sucursalId,
        varianteId,
      );

      if (detalle.cantidad > disponibleLocal) {
        this.confirmando.set(false);
        this.toast.error(
          `Stock insuficiente para ${detalle.producto.nombre}. ` +
          `Disponible: ${disponibleLocal}, Solicitado: ${detalle.cantidad}`
        );
        return;
      }
    }

    await this.offlineStorage.guardarVentaOffline({
      uuid: ventaUuid,
      empresa_id: empresaId,
      cajero_id: usuario.id || 0,
      sucursal_id: sucursalId,
      fecha_creacion: new Date().toISOString(),
      total: venta.total,
      estado: 'PENDIENTE_PAGO',
      estado_sync: 'PENDIENTE_SYNC',
      tipo: 'PRESENCIAL',
      origen: 'DIRECTA',
      detalles,
      pago: {
        monto_total: venta.total,
        monto_recibido: payload.monto_recibido,
        cambio: payload.monto_recibido - venta.total,
        fecha_cobro: new Date().toISOString(),
      },
    });

    this.confirmando.set(false);
    this.pagoConfirmado.set({
      codigo_venta: `LOC-${ventaUuid.slice(0, 8).toUpperCase()}`,
      total: venta.total,
      metodo_pago: 'EFECTIVO',
      monto_recibido: payload.monto_recibido,
      cambio: payload.monto_recibido - venta.total,
    });
    this.paso.set('confirmado');
    this.pagoRegistrado.emit();
    this.toast.success('Venta guardada en offline. Pendiente de sincronización.');
  }

  onCerrar(): void {
    if (this.confirmando()) {
      return;
    }
    this.cerrar.emit();
  }

  onNuevaVenta(): void {
    this.nuevaVenta.emit();
  }

  protected etiquetaMetodo(metodo: string): string {
    const etiquetas: Record<string, string> = { EFECTIVO: 'Efectivo', TARJETA: 'Tarjeta', QR: 'QR' };
    return etiquetas[metodo] ?? metodo;
  }

  verComprobante(): void {
    this.router.navigateByUrl(`/cajero/comprobante/${this.venta().id}`);
  }

  descargarComprobante(): void {
    if (this.descargandoComprobante()) {
      return;
    }
    const ventaId = this.venta().id;
    const codigoVenta = this.pagoConfirmado()?.codigo_venta ?? this.venta().codigo_venta;
    this.descargandoComprobante.set(true);
    this.comprobanteService.descargarPdf(ventaId).subscribe({
      next: (blob) => {
        this.descargandoComprobante.set(false);
        descargarBlob(blob, `${codigoVenta}.pdf`);
      },
      error: () => {
        this.descargandoComprobante.set(false);
        this.toast.error('No se pudo descargar el comprobante. Inténtalo nuevamente.');
      },
    });
  }

  enviarComprobante(): void {
    if (this.enviandoComprobante()) {
      return;
    }
    this.enviandoComprobante.set(true);
    this.comprobanteService.enviar(this.venta().id).subscribe({
      next: (respuesta) => {
        this.enviandoComprobante.set(false);
        if (respuesta.enviado) {
          this.toast.brand(respuesta.mensaje);
        } else {
          this.toast.error(respuesta.mensaje);
        }
      },
      error: (err) => {
        this.enviandoComprobante.set(false);
        const detalle = typeof err?.error?.detail === 'string' ? err.error.detail : null;
        this.toast.error(detalle ?? 'No se pudo enviar el comprobante. Inténtalo nuevamente.');
      },
    });
  }
}
