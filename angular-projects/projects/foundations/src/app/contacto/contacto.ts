import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {
  // archivo typescript
  // escribo el código del componente

  // atributo, solo vive en la logica del componente
  title = "Bienvenido a mi página de contacto 2025";

  usuario = "Miguel Rosales"

  // que variable puedo usar para almacenar valores positivos y negativos??
  // por defecto no esta ocultado
  ocultar = false;
}
