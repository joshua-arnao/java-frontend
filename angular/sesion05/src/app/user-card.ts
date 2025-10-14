import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface User {
  // id name, email avatarUrl
  id?: number;
  name: string;
  email: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  // puede contener el contrato/interfaz User o un valor nulo
  @Input() user: User | null = null;

  // flag me ayudara a validar si este card ha sido seleccionado
  @Input() isSelected = false;
  // este atributo va a contener un emisor de eventos
  @Output() deleteRequest = new EventEmitter<any>();

  onDeleteClick() {
    // const isTrue = true;
    // const name = "William Wallace"
    console.log("clickeado en el boton eliminar")
    // aqui tambien puedo emitir valores complejos, como objetos, arreglos
    this.deleteRequest.emit(10);
  }

}
