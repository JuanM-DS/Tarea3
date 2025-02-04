import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'Sumadora',
    loadComponent: () => import('./sumadora/sumadora.page').then((m) => m.SumadoraPage),
  },
  {
    path: 'Traductor',
    loadComponent: () => import('./traductor/traductor.page').then((m) => m.TraductorPage),
  },
  {
    path: 'Tabla',
    loadComponent: () => import('./tabla/tabla.page').then((m) => m.TablaPage),
  },
  {
    path: 'About',
    loadComponent: () => import('./aboute/aboute.page').then((m) => m.AboutePage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
];
