import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: "", // ruta principal
  loadComponent: () => import('./first-component/first-component').then(c => c.FirstComponent)
}];
