import { CommonModule } from '@angular/common';
import { Component, inject, viewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { eDynamicField } from '@widget/components/dynamic-form/dynamic-field.enum';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import { DynamicFormComponent } from '@widget/components/dynamic-form/dynamic-form.component';
import { SelectCustomerDialog } from '@widget/dialogs/select-customer/select-customer.dialog';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'yz-create-schedule',
  imports: [CommonModule, NzCardModule, NzFlexModule, NzIconModule, DynamicFormComponent, NzButtonModule, SelectCustomerDialog],
  providers: [NzNotificationService],
  templateUrl: './create-schedule.page.html',
  styleUrl: './create-schedule.page.scss',
})
export class CreateSchedulePage {
  private notificationService = inject(NzNotificationService);
  readonly scheduleForm = viewChild.required<DynamicFormComponent>('scheduleForm');

  openCustomerModal = false;

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
      onAddOnAfterClick: () => {
        this.openCustomerModal = true;
      },
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

  selectCustomer(ev: any): void {
    console.log('Cliente selecionado', ev);
    this.scheduleForm().form.get('customer')?.setValue(ev.name);
  }

  submit(): void {
    if (!this.scheduleForm().form.valid) {
      this.notificationService.error('Campos inválidos', 'Preencha todos os campos obrigatórios');
      return;
    }
    const form = this.scheduleForm().form.value;
    console.log('Form', form);
  }
}
