import { Route } from '@angular/router';

export const CUSTOMERS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('@domain/customers/pages/customers-list/customers-list.page').then(c => c.CustomersListPage),
  },
  {
    path: ':id',
    loadComponent: () => import('@domain/customers/pages/customer-detail/customer-detail.page').then(c => c.CustomerDetailPage),
  },
];
