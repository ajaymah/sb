import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./feature/home/home').then((pages) => pages.Home),
  },
  {
    path: 'form-elements',
    loadComponent: () =>
      import('./feature/form-component/form-component').then(
        (pages) => pages.FormComponent,
      ),
  },
  {
    path: 'tables',
    loadComponent: () =>
      import('./feature/tables/tables').then((pages) => pages.Tables),
  },
  {
    path: 'grid',
    loadComponent: () =>
      import('./feature/grid/grid').then((pages) => pages.Grid),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
