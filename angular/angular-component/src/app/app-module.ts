import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { appRoutes } from './app.routes';
import { NxWelcome } from './nx-welcome';
import { Card } from './card/card';

// Este modulo se encarga de
// - registrar componentes
// - importar otros modulos
// - agregar servicios
// - configuracion de rutas
//
// tambien tiene configuraciones propias del modulo

@NgModule({
  // aqui agregas componentes
  declarations: [App, NxWelcome, Card],
  // otros modulos, rutas
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  // servicios
  providers: [provideBrowserGlobalErrorListeners()],
  // punto inicial
  bootstrap: [App],
})
export class AppModule { }
