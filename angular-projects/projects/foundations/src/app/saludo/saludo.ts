import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.html',
  styleUrl: './saludo.scss'
})
export class Saludo {
  @Input() nombre = "Invitado"
}
