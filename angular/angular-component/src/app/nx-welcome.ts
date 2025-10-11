import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nx-welcome',
  standalone: false,
  templateUrl: './nx-welcome.component.html',
  styleUrls: ['./nx-welcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {

  // estructura del componente
}

// None no encapsula
// Emulated agrega como un hash a las clases para evitar colisión
// Shadow usa estilos+css directamente en el componente, aislandolo
// pueden haber problemas al testear el componente
