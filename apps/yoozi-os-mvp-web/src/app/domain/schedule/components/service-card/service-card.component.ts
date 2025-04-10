import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'yz-service-card',
  imports: [CommonModule, NzCardModule, NzTypographyModule, NzIconModule, NzSkeletonModule, NzFlexModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input({ required: true }) date!: Date;
  loading = false;
}
