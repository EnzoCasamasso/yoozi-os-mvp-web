import { Route } from '@angular/router';

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
        loadComponent: () => import('@core/pages/reset-password/reset-password.page'),
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
    children: [
      {
        path: 'products',
        loadChildren: () => import('@domain/products/products.routes').then(m => m.PRODUCTS_ROUTES),
      },
      {
        path: 'customers',
        loadChildren: () => import('@domain/customers/customers.routes').then(m => m.CUSTOMERS_ROUTES),
      },
    ],
  },
];
