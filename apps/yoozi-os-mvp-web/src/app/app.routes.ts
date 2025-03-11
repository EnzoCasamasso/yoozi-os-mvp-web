import { Route } from '@angular/router';
import { authGuard } from '@core/guards/auth/auth.guard';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () => import('@core/layout/auth/auth.layout').then(m => m.AuthLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('@domain/auth/auth.routes').then(m => m.AUTH_ROUTES),
      },
      {
        path: 'reset-password',
        loadComponent: () => import('@core/pages/reset-password/reset-password.page').then(m => m.ResetPasswordPage),
      },
    ],
  },
  {
    path: 'subscription',
    loadChildren: () => import('@domain/subscription/subscription.routes').then(m => m.SUBSCRIPTION_ROUTES),
  },
  {
    path: '',
    loadComponent: () => import('@core/layout/main/main.layout').then(m => m.MainLayout),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
      },
      {
        path: 'products',
        loadChildren: () => import('@domain/products/products.routes').then(m => m.PRODUCTS_ROUTES),
      },
      {
        path: 'customers',
        loadChildren: () => import('@domain/customers/customers.routes').then(m => m.CUSTOMERS_ROUTES),
      },
      {
        path: 'configurations',
        loadChildren: () => import('@domain/configurations/configurations.routes').then(m => m.CONFIGURATIONS_ROUTES),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
