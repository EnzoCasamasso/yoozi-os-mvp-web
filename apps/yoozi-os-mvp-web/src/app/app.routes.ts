import { Route } from '@angular/router';
import { AuthLayout } from '@core/layout/auth/auth.layout';
import LoginPage from '@domain/auth/pages/login/login.page';
import { SingUpPage } from '@domain/auth/pages/sing-up/sing-up.page';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: LoginPage,
      },
      {
        path: 'sing-up',
        component: SingUpPage,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
