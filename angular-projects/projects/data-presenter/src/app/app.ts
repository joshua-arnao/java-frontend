import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataPresenter } from './data-presenter';

@Component({
  // aqui importo los componentes
  imports: [RouterModule, CommonModule, DataPresenter],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  loading = true;
  userData: { name: string; email: string } | null = null;

  // el ciclo de vida mas usado es el ngOnInit
  // se ejecuta al INICIO = INIT
  ngOnInit(): void {
    // simular una carga de 4 segundos al inicio de la aplicacion
    setTimeout(() => {
      this.userData = { name: "Miguel", email: "miguel@gmail.com" }
      this.loading = false;
    }, 4000)
  }
}
