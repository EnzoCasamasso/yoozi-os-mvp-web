import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit, AfterViewInit } from '@angular/core';

import { SubscriptionService } from '@domain/subscription/services/subscription.service';
import { ProductsApi } from '@domain/subscription/apis/producs.api';
import { LoadingService } from '@shared/services/loading/loading.service';
import { iProduct } from '@domain/subscription/interfaces/product.interface';
import { iPrice } from '@domain/subscription/interfaces/price.interface';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { eSubscriptionStep } from '@domain/subscription/enums/subscription-step.enum';

interface iProductWithPrice extends iProduct {
  price: iPrice | null;
}

@Component({
  imports: [CommonModule, FormsModule, RouterModule, NzFlexModule, NzSpinModule, NzTagModule, NzTypographyModule, NzRadioModule, NzCardModule, NzButtonModule, NzIconModule],
  templateUrl: './select-plan.component.html',
  selector: 'yz-select-plan',
  styleUrl: './select-plan.component.scss',
})
export class SelectPlanComponent implements OnInit, AfterViewInit {
  private productsApi = inject(ProductsApi);
  private subscriptionService = inject(SubscriptionService);
  protected loadingService = inject(LoadingService);

  selectedPrice = '';
  products = signal<iProductWithPrice[]>([]);

  ngOnInit(): void {
    this.subscriptionService.currentStep.set(eSubscriptionStep.PLAN);
    this.load();
  }

  ngAfterViewInit(): void {
    const planForm = this.subscriptionService.getPlanForm();
    const price_id = planForm.get('price_id')?.value;

    if (price_id) this.selectedPrice = price_id;
  }

  async load() {
    this.loadingService.start();

    const products = await this.productsApi.getAll();
    this.products.set(
      products.map(product => {
        const price = product.prices ? product.prices[0] : null;
        return { ...product, price };
      }),
    );

    if (products.length > 0 && !this.selectedPrice) this.selectedPrice = this.products()[0].price?.id || '';

    this.loadingService.stop();
  }

  changePlan(priceId?: string) {
    if (!priceId) return;

    this.selectedPrice = priceId;

    const planForm = this.subscriptionService.getPlanForm();
    planForm.get('price_id')?.setValue(priceId);
  }

  submit() {
    this.subscriptionService.submit();
  }
}
