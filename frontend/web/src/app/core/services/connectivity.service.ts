import { Injectable, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, timeout } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectivityService implements OnDestroy {
  private http = inject(HttpClient);
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  isOnline$: Observable<boolean> = this.isOnlineSubject.asObservable();

  private destroy$ = new Subject<void>();
  private lastCheckTime = 0;
  private checkDebounceMs = 2000; // 2 segundos entre comprobaciones
  private healthCheckTimeoutMs = 3000; // 3 segundos timeout para health check
  private isCheckingHealth = false;
  private healthCheckUrl = `${environment.apiUrl}/health`;

  constructor() {
    console.log(`%c[CONNECTIVITY] VERSIÓN CORREGIDA 2026-11-08 — Usando health check real + navigator.onLine`, 'background:green;color:white;font-weight:bold');
    console.log(`%c[CONNECTIVITY] Health check endpoint: ${this.healthCheckUrl}`, 'background:blue;color:white');

    this.setupListeners();
    this.checkConnectivityOnInit();
    this.setupVisibilityListener();
  }

  private setupListeners(): void {
    window.addEventListener('online', () => {
      console.log('✓ Evento online detectado — verificando backend...');
      this.verifyBackendAvailability();
    });

    window.addEventListener('offline', () => {
      console.log('✗ Evento offline detectado — cambiar a modo offline');
      this.isOnlineSubject.next(false);
    });
  }

  private checkConnectivityOnInit(): void {
    setTimeout(() => {
      console.log('[CONNECTIVITY] Verificación inicial al iniciar la aplicación');
      this.verifyBackendAvailability();
    }, 500);
  }

  private setupVisibilityListener(): void {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        console.log('[CONNECTIVITY] Aplicación recuperada — revalidar conectividad');
        this.verifyBackendAvailability();
      }
    });
  }

  private verifyBackendAvailability(): void {
    // Evitar verificaciones simultáneas
    if (this.isCheckingHealth) {
      console.log('[CONNECTIVITY] Ya hay una verificación en curso — ignorar');
      return;
    }

    // Evitar comprobaciones muy frecuentes
    const now = Date.now();
    if (now - this.lastCheckTime < this.checkDebounceMs) {
      console.log('[CONNECTIVITY] Última comprobación muy reciente — ignorar');
      return;
    }

    this.lastCheckTime = now;
    this.isCheckingHealth = true;

    // Health check con timeout y evitar caché
    this.http
      .get<{ status: string }>(this.healthCheckUrl, {
        headers: { 'Cache-Control': 'no-cache, no-store' }
      })
      .pipe(
        timeout(this.healthCheckTimeoutMs),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          if (response.status === 'ok') {
            console.log('✓ Backend disponible (health check OK)');
            this.isOnlineSubject.next(true);
          } else {
            console.log('✗ Backend respondió pero estado no es OK');
            this.isOnlineSubject.next(false);
          }
          this.isCheckingHealth = false;
        },
        error: (err) => {
          console.log('✗ Backend no disponible (error en health check)', err.status);
          this.isOnlineSubject.next(false);
          this.isCheckingHealth = false;
        },
      });
  }

  isOnline(): boolean {
    // Retornar el estado actual del BehaviorSubject que se actualiza con health checks
    const online = this.isOnlineSubject.value;
    const navigatorOnline = navigator.onLine;

    console.log(`[CONNECTIVITY] navigator.onLine=${navigatorOnline} | health_check=${online} | returning=${online}`);

    // Si navigator dice offline, respetar eso
    if (!navigatorOnline) {
      console.log('[CONNECTIVITY] navigator.onLine=false — forzar offline');
      if (online !== false) {
        this.isOnlineSubject.next(false);
      }
      return false;
    }

    // Confiar en el health check (mas confiable que navigator.onLine para Wi-Fi apagado)
    return online;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
