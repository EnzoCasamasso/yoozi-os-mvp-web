import { Component, inject, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionService } from '@domain/subscription/services/subscription.service';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import { DynamicFormComponent } from '@widget/components/dynamic-form/dynamic-form.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { COMPANY_FORM_CONFIG } from '@domain/subscription/constants/company-form-config.constant';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'yz-company-details',
  imports: [DynamicFormComponent, NzTypographyModule, NzFlexModule, NzButtonModule, NzIconModule, RouterModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss',
})
export class CompanyDetailsComponent implements AfterViewInit {
  private subscriptionService = inject(SubscriptionService);

  formConfig: iDynamicFormConfig[] = COMPANY_FORM_CONFIG();
  @ViewChild(DynamicFormComponent) dynamicForm!: DynamicFormComponent;

  ngAfterViewInit(): void {
    this.dynamicForm.form.statusChanges.pipe(untilDestroyed(this), debounceTime(300)).subscribe(() => {
      const form = this.subscriptionService.getCompanyForm();
      form.patchValue(this.dynamicForm.form.getRawValue());
    });

    this.dynamicForm.form.patchValue(this.subscriptionService.getCompanyForm().getRawValue());
  }

  submit() {
    this.subscriptionService.submit();
  }
}
