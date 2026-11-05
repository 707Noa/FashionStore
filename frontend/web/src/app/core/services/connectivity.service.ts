import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectivityService {
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  isOnline$: Observable<boolean> = this.isOnlineSubject.asObservable();

  constructor() {
    this.setupListeners();
  }

  private setupListeners(): void {
    window.addEventListener('online', () => {
      console.log('Conectividad restaurada');
      this.isOnlineSubject.next(true);
    });

    window.addEventListener('offline', () => {
      console.log('Conexión perdida — consultando datos locales');
      this.isOnlineSubject.next(false);
    });
  }

  isOnline(): boolean {
    return this.isOnlineSubject.value;
  }
}
