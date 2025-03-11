import { Route } from '@angular/router';

export const CONFIGURATIONS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('@domain/configurations/pages/configurations/configurations.page').then(m => m.ConfigurationsPage),
  },
];
