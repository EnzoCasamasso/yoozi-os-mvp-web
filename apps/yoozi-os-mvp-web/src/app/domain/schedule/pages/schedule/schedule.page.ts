import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceCardComponent } from '@domain/schedule/components/service-card/service-card.component';
import { VirtualScrollComponent } from '@widget/components/virtual-scroll/virtual-scroll.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'yz-schedule',
  imports: [
    CommonModule,
    FormsModule,
    NzTypographyModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzFlexModule,
    ServiceCardComponent,
    NzCalendarModule,
    NzAlertModule,
    NzIconModule,
    VirtualScrollComponent,
    ScrollingModule,
  ],
  templateUrl: './schedule.page.html',
  styleUrl: './schedule.page.scss',
})
export class SchedulePage {
  selectedValue = new Date('2025-04-08');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
}
