import { Component, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastContainer } from './core/ui/toast/toast-container';
import { ConfirmDialog } from './core/ui/confirm-dialog/confirm-dialog';
import { AuthService } from './core/services/auth.service';
import { OfflineAutoSyncService } from './core/services/offline-auto-sync.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastContainer, ConfirmDialog],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly authService = inject(AuthService);
  private readonly offlineAutoSync = inject(OfflineAutoSyncService);

  constructor() {
    effect(() => {
      const usuario = this.authService.usuario();
      if (usuario?.empresa_id) {
        console.log('CU06: Iniciando preparación automática...');
        this.offlineAutoSync.prepararAutomaticamente().catch((error) => {
          console.warn('CU06: Error en preparación automática:', error);
        });
      }
    });
  }
}
