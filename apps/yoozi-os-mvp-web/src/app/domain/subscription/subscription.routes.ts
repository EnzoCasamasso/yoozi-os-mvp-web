import { Route } from '@angular/router';

export const SUBSCRIPTION_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '',
    title: 'Assinatura',
    loadComponent: () => import('@domain/subscription/pages/subscription/subscription.page'),
    children: [
      {
        path: 'admin',
        loadComponent: () => import('@domain/subscription/comnponents/admin-details/admin-details.component').then(c => c.AdminDetailsComponent),
      },
      {
        path: 'company',
        loadComponent: () => import('@domain/subscription/comnponents/company-details/company-details.component').then(c => c.CompanyDetailsComponent),
      },
    ],
  },
];
