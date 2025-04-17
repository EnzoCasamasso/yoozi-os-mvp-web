import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchBarComponent } from '@widget/components/search-bar/search-bar.component';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

interface TypeServiceData {
  serviceName: string;
  price: number;
  description: string;
}

@Component({
  selector: 'yz-select-service-dialog',
  imports: [CommonModule, NzModalModule, NzIconModule, NzTableModule, NzFlexModule, NzInputModule, NzButtonModule, NzAvatarModule, NzTypographyModule, SearchBarComponent],
  templateUrl: './select-service.dialog.html',
  styleUrl: './select-service.dialog.scss',
})
export class SelectServiceDialog implements OnInit {
  @Input({ required: true }) isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @Output() selectedService = new EventEmitter<TypeServiceData>();

  //GENERIC DATA
  listOfData: TypeServiceData[] = [];

  ngOnInit(): void {
    const data: TypeServiceData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        serviceName: `Troca de parafuso ${i}`,
        price: 100,
        description: 'Troca de parafuso de roda',
      });
    }
    this.listOfData = data;
  }

  searchService(query: string): void {
    console.log('QueryService:', query);
  }

  selectService(customer: TypeServiceData): void {
    this.selectedService.emit(customer);
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
