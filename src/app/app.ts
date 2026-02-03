import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portal-integracion');
  isSettingsOpen = signal(false);
  isDarkMode = signal(localStorage.getItem('theme') === 'dark');

  constructor() {
    // Este efecto se ejecuta cada vez que isDarkMode cambia
effect(() => {
    const isDark = this.isDarkMode();
    console.log('Cambiando modo oscuro a:', isDark); // Revisa esto en tu consola (F12)
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  }

  toggleDarkMode() {
    this.isDarkMode.update(v => !v);
  }
  
}
