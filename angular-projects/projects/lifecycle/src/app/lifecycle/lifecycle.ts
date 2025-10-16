import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  // importo commonsmodule para acceder a los pipes
  // tengo el objeto data, quiero validar que valores tiene
  imports: [CommonModule],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.scss'
})
export class Lifecycle implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  // cuando venga los datos, deberia volver
  // a RENDENRIZARSE
  @Input() data: any;
  @Input() data2: any;
  initializedData = '';
  private intervalId: any;

  // aqui voy a agregar el lifecycle

  // por ejemplo si quisiera agregar una logica al inicio
  // uso ngOnInit
  // solo se ejecuta una vez
  ngOnInit() {
    console.log("::ngOnInit se ha ejecutado")
  }
  ngDoCheck(): void {
    console.log("::ngDoCheck se ha ejecutado")
  }
  // cada vez que haya un cambio
  ngAfterContentInit(): void {
    console.log("::ngAfterContentInit se ha ejecutado")
  }
  ngAfterViewInit(): void {
    console.log("::ngAfterViewInit se ha ejecutado")
  }
  ngAfterViewChecked(): void {
    console.log("::ngAfterViewChecked se ha ejecutado")
  }
  // una vez
  ngOnDestroy(): void {
    console.log("::ngOnDestroy se ha ejecutado")
  }
  // cada vez que un atributo cambie su valor
  // EJEMPLO:
  // cuando cambie la cantidad de elementos de un
  // carrito de compras
  // pueden tambien actualizar la lista del producto
  // CUIDADO!!!
  // Traten de no actualizar atributos, podrian producir BUCLE INFINITO
  ngOnChanges(changes: SimpleChanges): void {
    // aqui voy validando los cambios del componente
    console.log("::ngOnChanges se ha ejecutado")
    // aqui puedo filtrar el atributo que me interese
    this.initializedData = "data"; // NUNCA HACER ESTO
    if (changes['data']) {


      console.log("el valor de data viene actualizado")
      // aqui iria la logica para ese atributo actualizado
    }
    if (changes['data2']) {
      console.log("el valor de data2 viene actualizado, realizando cambios")
    }
    console.log("ngOnChanges veo los cambios", changes);
  }
}
