import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionService } from '@domain/subscription/services/subscription.service';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import { DynamicFormComponent } from '@widget/components/dynamic-form/dynamic-form.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { COMPANY_FORM_CONFIG } from '@domain/subscription/constants/company-form-config.constant';

@Component({
  selector: 'yz-company-details',
  imports: [DynamicFormComponent, NzTypographyModule, NzFlexModule, NzButtonModule, NzIconModule, RouterModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss',
})
export class CompanyDetailsComponent {
  private subscriptionService = inject(SubscriptionService);

  formConfig: iDynamicFormConfig[] = COMPANY_FORM_CONFIG();

  submit() {
    this.subscriptionService.submit();
  }
}
