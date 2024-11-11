import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { combineLatest, map, take } from 'rxjs';
import { FOOTER_TEXT, WELCOME_TEXT } from './inject';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  settings$ = combineLatest([inject(WELCOME_TEXT), inject(FOOTER_TEXT)]).pipe(
    take(1),
    map(([welcome, footer]) => ({
      welcomeTitle: welcome.title,
      welcomeText: welcome.text,
      createdBy: footer.createdBy,
      email: footer.email,
    }))
  );
}
