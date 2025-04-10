import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoadingService } from '@shared/services/loading/loading.service';
import { SkeletonServiceCardComponent } from '../skeleton-service-card/skeleton-service-card.component';

@Component({
  selector: 'yz-next-services',
  imports: [CommonModule, ServiceCardComponent, NzCardModule, NzFlexModule, NzInputModule, NzIconModule, NzButtonModule, SkeletonServiceCardComponent],
  templateUrl: './next-services.component.html',
  styleUrl: './next-services.component.scss',
})
export class NextServicesComponent implements OnInit {
  private loadingService = inject(LoadingService);
  @Input({ required: true }) selectedDate!: Date;
  loading = this.loadingService.loading;

  ngOnInit(): void {
    this.loadingService.start();
    setTimeout(() => {
      this.loadingService.stop();
    }, 1000);
  }
}
