import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  imports: [CommonModule],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.scss'
})
export class ListaTareas {
  tareas = [
    'Aprender angular',
    "crear un componente",
    'terminar la tarea',
    'descanzar',
    'levantarse',
    'ir a trabajar'
  ]
}
