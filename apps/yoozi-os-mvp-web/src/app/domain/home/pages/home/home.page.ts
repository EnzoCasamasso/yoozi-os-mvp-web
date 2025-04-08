import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { ButtonCardComponent } from '@domain/home/components/button-card/button-card.component';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yz-home',
  imports: [CommonModule, FormsModule, NzTypographyComponent, ButtonCardComponent, NzFlexModule, NzCardModule, NzCalendarModule, NzIconModule, NzAlertComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  selectedValue = new Date('2025-04-08');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }

  navigateToPreviousMonth(current: Date): void {
    const newDate = new Date(current);
    newDate.setMonth(newDate.getMonth() - 1);
    this.selectedValue = newDate;
  }

  navigateToNextMonth(current: Date): void {
    const newDate = new Date(current);
    newDate.setMonth(newDate.getMonth() + 1);
    this.selectedValue = newDate;
  }
}
