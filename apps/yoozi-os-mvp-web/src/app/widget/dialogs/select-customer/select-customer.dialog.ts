import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SearchBarComponent } from '@widget/components/search-bar/search-bar.component';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

//GENERIC INTERFACE
interface ItemData {
  name: string;
  age: number;
  address: string;
  description: string;
}

@Component({
  selector: 'yz-select-customer-dialog',
  imports: [CommonModule, NzModalModule, NzIconModule, NzTableModule, NzFlexModule, NzInputModule, NzButtonModule, NzAvatarModule, NzTypographyModule, SearchBarComponent],
  templateUrl: './select-customer.dialog.html',
  styleUrl: './select-customer.dialog.scss',
})
export class SelectCustomerDialog implements OnInit {
  @Input({ required: true }) isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @Output() selectedCustomer = new EventEmitter<ItemData>();

  //GENERIC DATA
  listOfData: ItemData[] = [];

  ngOnInit(): void {
    const data: ItemData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        description: 'email',
      });
    }
    this.listOfData = data;
  }

  searchCustomer(query: string): void {
    console.log('QueryCustomer:', query);
  }

  selectCustomer(customer: ItemData): void {
    this.selectedCustomer.emit(customer);
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
