import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-alerta',
  imports: [],
  templateUrl: './boton-alerta.html',
  styleUrl: './boton-alerta.scss'
})
export class BotonAlerta {
  // este evento emite un string (notificacion)
  @Output() notificacion = new EventEmitter<string>();

  // se ejecutara cuando el usuario haga click
  // en el boton notificar
  notificar() {
    // aqui emito el evento de notificacion
    this.notificacion.emit("El boton fue presionado")
  }
}
