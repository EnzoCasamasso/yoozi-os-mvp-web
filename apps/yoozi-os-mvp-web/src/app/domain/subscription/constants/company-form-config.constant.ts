import { FormGroup, Validators } from '@angular/forms';
import { eDynamicField } from '@widget/components/dynamic-form/dynamic-field.enum';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import cep from 'cep-promise';
import { UF_LIST } from './ufs.constant';

export const COMPANY_FORM_CONFIG = (): iDynamicFormConfig[] => {
  const enableFields = (form: FormGroup, fields: string[]) => {
    fields.forEach(field => {
      form.get(field)?.enable();
    });
  };

  const disableFields = (form: FormGroup, fields: string[]) => {
    fields.forEach(field => {
      form.get(field)?.disable();
    });
  };

  return [
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
      label: 'CPF/CNPJ',
      name: 'cpf_cnpj',
      type: {
        field: eDynamicField.INPUT,
      },
      mask: '000.000.000-00||00.000.000/0000-00',
      validations: [Validators.required],
      size: 24,
    },
    {
      label: 'CEP',
      name: 'zip_code',
      type: {
        field: eDynamicField.INPUT,
      },
      mask: '00000-000',
      hint: 'Digite o CEP para preecher os campos abaixo.',
      validations: [Validators.required],
      size: 24,
      onChange: async (zipCode, form) => {
        const control = form.get('zip_code');
        if (control?.invalid) return;

        try {
          const address = await cep(zipCode as string);
          form.patchValue({
            street: address.street,
            neighborhood: address.neighborhood,
            city: address.city,
            state: UF_LIST.find(uf => uf.value === address.state)?.name,
            country: 'Brasil',
          });
          disableFields(form, ['city', 'state', 'country']);
        } catch (error) {
          form.patchValue({
            street: null,
            neighborhood: null,
            city: null,
            state: null,
            country: null,
          });
          enableFields(form, ['street', 'neighborhood', 'city', 'state', 'country']);
        }
      },
    },
    {
      label: 'Rua',
      name: 'street',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 18,
    },
    {
      label: 'Número',
      name: 'number',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 6,
    },
    {
      label: 'Complemento',
      name: 'complement',
      type: {
        field: eDynamicField.INPUT,
      },
      size: 12,
    },
    {
      label: 'Bairro',
      name: 'neighborhood',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 12,
    },
    {
      label: 'Cidade',
      name: 'city',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 8,
    },
    {
      label: 'Estado',
      name: 'state',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 8,
    },
    {
      label: 'Pais',
      name: 'country',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 8,
    },
  ];
};
