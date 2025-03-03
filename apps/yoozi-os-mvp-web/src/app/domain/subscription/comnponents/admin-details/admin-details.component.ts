import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { DynamicFormComponent } from '@widget/components/dynamic-form/dynamic-form.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import { RouterModule } from '@angular/router';
import { eDynamicField } from '@widget/components/dynamic-form/dynamic-field.enum';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'yz-admin-details',
  imports: [DynamicFormComponent, NzTypographyModule, NzFlexModule, NzButtonModule, NzIconModule, RouterModule],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.scss',
})
export class AdminDetailsComponent {
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
}
