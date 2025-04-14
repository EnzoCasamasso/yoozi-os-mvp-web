import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NextServicesComponent } from '@domain/schedule/components/next-services/next-services.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'yz-schedule',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzTypographyModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzFlexModule,
    NzCalendarModule,
    NzAlertModule,
    NzIconModule,
    ScrollingModule,
    NextServicesComponent,
  ],
  templateUrl: './schedule.page.html',
  styleUrl: './schedule.page.scss',
})
export class SchedulePage {
  selectedValue = new Date('2025-04-14');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
}
