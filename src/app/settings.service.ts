import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Settings } from './types';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private http = inject(HttpClient);

  // Load Async data (e.g. from flat file) using http client, returns an observable.
  load() {
    return this.http.get<Settings>('/assets/settings.json');
  }
}
