import { Component, signal } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserProfile } from './user-profile/user-profile';
import { Saludo } from './saludo/saludo';
import { BotonAlerta } from './boton-alerta/boton-alerta';
import { CommonModule } from '@angular/common';
import { ListaTareas } from './lista-tareas/lista-tareas';

@Component({
  selector: 'app-root',
  // aqui puedo agregar componentes
  imports: [HelloWorld, UserProfile, Saludo, BotonAlerta, CommonModule, ListaTareas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-v2');

  // agrego un metodo que se ejecutará al recibir el
  // evento notificacion
  mensajeNotificacion = "esperando evento";
  contador = 0;

  onNotificacion(mensajeRecibido: any) {
    this.contador++;
    this.mensajeNotificacion = mensajeRecibido;
  }
}
