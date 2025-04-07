import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzListModule } from 'ng-zorro-antd/list';
import { ProductItemComponent } from '@domain/products/components/product-item/product-item.component';
@Component({
  selector: 'yz-products-list',
  imports: [CommonModule, NzListModule, ProductItemComponent],
  templateUrl: './products-list.page.html',
  styleUrl: './products-list.page.scss',
})
export class ProductsListPage {}
