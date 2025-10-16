import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Lifecycle } from './lifecycle/lifecycle';

@Component({
  selector: 'app-root',
  // aqui agrego el componente
  imports: [Lifecycle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lifecycle');
}
