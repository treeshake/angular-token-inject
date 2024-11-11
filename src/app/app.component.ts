import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { FOOTER_TEXT, WELCOME_TEXT } from './inject';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private welcome$ = inject(WELCOME_TEXT);
  private footer$ = inject(FOOTER_TEXT);

  welcomeTitle$ = this.welcome$.pipe(map((data) => data.title));
  welcomeText$ = this.welcome$.pipe(map((data) => data.text));
  createdBy$ = this.footer$.pipe(map((data) => data.createdBy));
  email$ = this.footer$.pipe(map((data) => data.email));
}
