import { Route } from '@angular/router';

export const HOME_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('@domain/home/pages/home/home.page').then(p => p.HomePage),
  },
];
