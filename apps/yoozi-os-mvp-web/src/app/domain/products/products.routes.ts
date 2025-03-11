import { Route } from '@angular/router';

export const PRODUCTS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('@domain/products/pages/products-list/products-list.page').then(p => p.ProductsListPage),
  },
  {
    path: ':id',
    loadComponent: () => import('@domain/products/pages/product-detail/product-detail.page').then(p => p.ProductDetailPage),
  },
];
