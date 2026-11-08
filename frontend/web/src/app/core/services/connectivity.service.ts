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
    // VERSIÓN AUDITADA 2026-11-08 — Si ves este log, el código nuevo está siendo servido
    console.log(`%c[CONNECTIVITY] VERSIÓN AUDITADA 2026-11-08 — navigator.onLine=${navigator.onLine}`, 'background:red;color:white;font-weight:bold');
    console.log(`%c[CONNECTIVITY] Usando SOLO navigator.onLine (SIN health check a /health)`, 'background:blue;color:white');
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
    const online = navigator.onLine;
    const subjectValue = this.isOnlineSubject.value;
    console.log(`[CONNECTIVITY AUDIT] navigator.onLine=${online} | subject=${subjectValue} | returning=${online}`);
    if (online !== subjectValue) {
      console.log(`[CONNECTIVITY WARNING] Desincronización: navigator.onLine !== BehaviorSubject`);
    }
    return online;
  }
}
