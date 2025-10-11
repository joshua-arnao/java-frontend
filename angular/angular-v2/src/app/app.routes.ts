import { Routes } from '@angular/router';
import { Banner } from './banner/banner';
import { Card } from './card/card';
import { UserCard } from './user-card/user-card';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  // aqui agrego las rutas y los componentes que se van a cargar
  {
    path: "",
    component: Banner
  },
  {
    path: "card",
    component: Card
  },
  {
    path: "user-card",
    component: UserCard
  },
  {
    path: "contacto",
    component: Contacto
  }
];
