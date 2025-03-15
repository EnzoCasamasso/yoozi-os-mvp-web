import { Validators } from '@angular/forms';
import { Component, AfterViewInit, ViewChild, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { debounceTime } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { DynamicFormComponent } from '@widget/components/dynamic-form/dynamic-form.component';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import { eDynamicField } from '@widget/components/dynamic-form/dynamic-field.enum';
import { SubscriptionService } from '@domain/subscription/services/subscription.service';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { eSubscriptionStep } from '@domain/subscription/enums/subscription-step.enum';

@UntilDestroy()
@Component({
  selector: 'yz-admin-details',
  imports: [DynamicFormComponent, NzTypographyModule, NzFlexModule, NzButtonModule, NzIconModule, RouterModule],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.scss',
})
export class AdminDetailsComponent implements OnInit, AfterViewInit {
  protected subscriptionService = inject(SubscriptionService);

  formConfig: iDynamicFormConfig[] = [
    {
      label: 'Nome',
      name: 'name',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 24,
    },
    {
      label: 'E-mail',
      name: 'email',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required, Validators.email],
      size: 24,
    },
    {
      label: 'Telefone',
      name: 'phone',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'tel',
      },
      mask: '(00) 00000-0000||(00) 0000-0000',
      validations: [Validators.required],
      size: 24,
    },
    {
      label: 'Senha',
      name: 'password',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'password',
      },
      validations: [Validators.required],
      size: 24,
    },
  ];

  ngOnInit() {
    this.subscriptionService.currentStep.set(eSubscriptionStep.ADMIN);
  }

  @ViewChild(DynamicFormComponent) dynamicForm!: DynamicFormComponent;

  ngAfterViewInit(): void {
    this.dynamicForm.form.statusChanges.pipe(untilDestroyed(this), debounceTime(300)).subscribe(() => {
      const form = this.subscriptionService.getAdminForm();
      form.patchValue(this.dynamicForm.form.getRawValue());
    });

    this.dynamicForm.form.patchValue(this.subscriptionService.getAdminForm().getRawValue());
  }
}
