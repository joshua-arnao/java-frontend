import { Component } from '@angular/core';

// Decorador Component
@Component({
  // selector de la aplicacion
  selector: 'app-root',
  standalone: false,
  // el archivo de la plantilla
  templateUrl: './app.html',
  // el archivo de los estilos
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-component';
}
