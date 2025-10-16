import { Routes } from '@angular/router';
import { Contacto } from './contacto/contacto';
import { BotonAlerta } from './boton-alerta/boton-alerta';
import { ListaTareas } from './lista-tareas/lista-tareas';
import { Saludo } from './saludo/saludo';
import { UserProfile } from './user-profile/user-profile';

export const routes: Routes = [
  // aqui agrego las rutas y los componentes que se van a cargar
  {
    path: "alerta",
    component: BotonAlerta
  },
  {
    path: "contacto",
    component: Contacto
  },
  {
    path: "lista-tareas",
    component: ListaTareas
  },
  {
    path: "saludo",
    component: Saludo
  },
  {
    path: "profile",
    component: UserProfile
  },
];
