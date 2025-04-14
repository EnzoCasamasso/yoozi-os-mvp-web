import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { eDynamicField } from '@widget/components/dynamic-form/dynamic-field.enum';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import { DynamicFormComponent } from '@widget/components/dynamic-form/dynamic-form.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'yz-create-schedule',
  imports: [CommonModule, NzCardModule, NzFlexModule, NzIconModule, DynamicFormComponent, NzButtonModule],
  templateUrl: './create-schedule.page.html',
  styleUrl: './create-schedule.page.scss',
})
export class CreateSchedulePage {
  readonly scheduleForm = viewChild.required<DynamicFormComponent>('scheduleForm');

  formConfig: iDynamicFormConfig[] = [
    {
      type: {
        field: eDynamicField.INPUT,
        typeField: 'text',
      },
      name: 'customer',
      label: 'Cliente',
      addOnAfterIcon: 'person',
      validations: [Validators.required],
      placeholder: 'Infome o cliente',
      size: 12,
    },
    {
      type: {
        field: eDynamicField.DATE_TIME,
        typeField: 'datetime',
      },
      name: 'date',
      label: 'Data e hora',
      validations: [Validators.required],
    },
    {
      type: {
        field: eDynamicField.INPUT,
        typeField: 'text',
      },
      name: 'descriptionService',
      label: 'Descrição do serviço',
      placeholder: 'Informe a descrição do serviço',
      addOnAfterIcon: 'description',
      size: 12,
    },
    {
      type: {
        field: eDynamicField.INPUT,
        typeField: 'text',
      },
      name: 'price',
      label: 'Preço do serviço',
      addOnAfterIcon: 'sell',
      mask: 'separator.2',
      maskSuffix: 'R$',
      initialValue: '0',
      size: 6,
    },
    {
      type: {
        field: eDynamicField.TEXTAREA,
        typeField: 'textarea',
      },
      name: 'observation',
      label: 'Observação',
      placeholder: 'Observação do serviço',
      size: 12,
    },
  ];

  submit(): void {
    const form = this.scheduleForm().form.value;
    console.log('Form', form);
  }
}
