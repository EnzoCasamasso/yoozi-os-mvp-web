import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = signal(false);

  start(): void {
    this.loading.set(true);
  }

  stop(): void {
    this.loading.set(false);
  }
}
