import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectivityService {
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  isOnline$: Observable<boolean> = this.isOnlineSubject.asObservable();
  private lastCheckTime = 0;
  private checkDebounceMs = 1000;

  constructor() {
    this.setupListeners();
  }

  private setupListeners(): void {
    window.addEventListener('online', () => {
      console.log('✓ Conectividad restaurada (evento)');
      this.isOnlineSubject.next(true);
    });

    window.addEventListener('offline', () => {
      console.log('✗ Conexión perdida (evento)');
      this.isOnlineSubject.next(false);
    });
  }

  isOnline(): boolean {
    this.checkConnectivity();
    return this.isOnlineSubject.value;
  }

  private checkConnectivity(): void {
    const now = Date.now();
    if (now - this.lastCheckTime < this.checkDebounceMs) {
      return;
    }
    this.lastCheckTime = now;

    const healthUrl = `${environment.apiUrl}/health`;
    console.log(`🔍 Verificando: ${healthUrl}`);

    fetch(healthUrl, { method: 'GET', cache: 'no-cache' })
      .then((response) => {
        console.log(`📊 Respuesta: ${response.status}`);
        if (response.ok) {
          if (!this.isOnlineSubject.value) {
            console.log('✓ Backend accesible — ONLINE');
            this.isOnlineSubject.next(true);
          }
        } else {
          throw new Error(`HTTP ${response.status}`);
        }
      })
      .catch((error) => {
        console.log(`❌ Error: ${error.message}`);
        if (this.isOnlineSubject.value) {
          console.log('✗ Backend no accesible — OFFLINE');
          this.isOnlineSubject.next(false);
        }
      });
  }
}
