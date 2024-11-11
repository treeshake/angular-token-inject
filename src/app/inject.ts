import { inject, InjectionToken } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { SettingsService } from './settings.service';
import { Settings } from './types';

/**
 * Create an injection token for the app settings.
 * Call the service to load the data and share the result once only on app init.
 */
export const APP_SETTINGS = new InjectionToken<Observable<Settings>>(
  'App settings',
  {
    factory: () => inject(SettingsService).load().pipe(shareReplay(1)),
  }
);

export const WELCOME_TEXT = new InjectionToken('Welcome Text', {
  factory: () => inject(APP_SETTINGS).pipe(map((settings) => settings.welcome)),
});

export const FOOTER_TEXT = new InjectionToken('Footer Text', {
  factory: () => inject(APP_SETTINGS).pipe(map((settings) => settings.footer)),
});
