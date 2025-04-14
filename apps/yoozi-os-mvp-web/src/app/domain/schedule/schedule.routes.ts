import { Route } from '@angular/router';

export const SCHEDULE_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('@domain/schedule/pages/schedule/schedule.page').then(m => m.SchedulePage),
  },
  {
    path: 'create',
    loadComponent: () => import('@domain/schedule/pages/create-schedule/create-schedule.page').then(m => m.CreateSchedulePage),
  },
];
