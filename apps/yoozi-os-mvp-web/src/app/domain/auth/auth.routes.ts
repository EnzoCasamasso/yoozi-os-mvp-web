import { Route } from '@angular/router';
import { isLoggedInGuard } from '@core/guards/is-logged-in/is-logged-in.guard';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('@domain/auth/pages/login/login.page'),
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'sing-up',
    loadComponent: () => import('@domain/auth/pages/sing-up/sing-up.page'),
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('@domain/auth/pages/forgot-password/forgot-password.page'),
    canActivate: [isLoggedInGuard],
  },
];
