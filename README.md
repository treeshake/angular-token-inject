# Angnular Token Injection Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Description

The goal of this app is to demostrate how data can be loaded once off during initialisation and available globally to any component.

This example app uses Angular's `APP_INITIALIZER` to load in data once externally via a service via a HTTP client. It then uses Angular's `InjectionToken` so they can be made available globally to any component. Finally it uses `async pipe` to let Angular take care of the subscription / cleanup.

## References
https://angular.dev/api/core/APP_INITIALIZER
https://angular.dev/api/core/InjectionToken
https://angular.dev/api/common/AsyncPipe

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## App

<img width="676" alt="image" src="https://github.com/user-attachments/assets/0ddd0e51-6fa9-45f3-8e2d-680a4ec0e003">
