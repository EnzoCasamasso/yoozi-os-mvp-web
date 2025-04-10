import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'yz-skeleton-service-card',
  imports: [CommonModule, NzSkeletonModule, NzCardModule, NzAvatarModule, NzFlexModule],
  templateUrl: './skeleton-service-card.component.html',
  styleUrl: './skeleton-service-card.component.scss',
})
export class SkeletonServiceCardComponent {}
