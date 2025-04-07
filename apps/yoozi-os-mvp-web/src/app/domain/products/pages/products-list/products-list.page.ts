import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from '@domain/products/components/product-item/product-item.component';
import { VirtualScrollComponent } from '@widget/components/virtual-scroll/virtual-scroll.component';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'yz-products-list',
  imports: [CommonModule, NzListModule, ProductItemComponent, NzFlexModule, NzInputModule, NzButtonModule, NzIconModule, VirtualScrollComponent],
  templateUrl: './products-list.page.html',
  styleUrl: './products-list.page.scss',
})
export class ProductsListPage {}
