import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from './data-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  mensaje: string | undefined = ""
  // por convencion las variables/atributos que sean observables terminan en $
  mensaje$!: Observable<string>;

  // para AGREGAR un servicio a mi componente tengo que usar un constructor
  // INYECCION DE DEPENDENCIAS: se usa un CONSTRUCTOR
  constructor(private dataService: DataService) { }

  // aqui debemos usar ngOnInit para TRAERNOS datos asincronos usando un servicio
  ngOnInit() {
    // invoco a mi servicio para traerme los datos
    // this.dataService.getMessage().subscribe((data) => {
    //   console.log(data);
    //   // cuando se resuelva el mensaje voy a guardarlo y mostrarlo
    //   // this.mensaje = data
    // })
    // patron usando pipes asincrono
    // la diferencia es que el retorno (observable) se guarda en el atributo
    this.mensaje$ = this.dataService.getMessage();
  }
}
