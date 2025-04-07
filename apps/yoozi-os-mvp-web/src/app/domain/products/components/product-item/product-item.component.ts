import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerComponent } from 'ng-zorro-antd/divider';

@Component({
  selector: 'yz-product-item',
  imports: [CommonModule, NzListModule, NzDividerComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {}
