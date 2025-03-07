import { inject, Injectable } from '@angular/core';
import { eSubscriptionStep } from '../enums/subscription-step.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private router = inject(Router);

  currentStep = eSubscriptionStep.ADMIN;

  form = new FormGroup({
    admin: new FormGroup({
      name: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
      phone: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null),
    }),
    company: new FormGroup({
      name: new FormControl<string | null>(null),
      cnpj: new FormControl<string | null>(null),
      zip_code: new FormControl<string | null>(null),
      address: new FormControl<string | null>(null),
      number: new FormControl<string | null>(null),
      complement: new FormControl<string | null>(null),
      neighborhood: new FormControl<string | null>(null),
      city: new FormControl<string | null>(null),
      state: new FormControl<string | null>(null),
      country: new FormControl<string | null>(null),
    }),
  });

  constructor() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateStep();
    });
    this.updateStep();
  }

  private updateStep() {
    const url = this.router.url;

    if (url.includes('company')) {
      this.currentStep = eSubscriptionStep.COMPANY;
    } else {
      this.currentStep = eSubscriptionStep.ADMIN;
    }
  }

  getAdminForm() {
    return this.form.get('admin') as FormGroup;
  }

  getCompanyForm() {
    return this.form.get('company') as FormGroup;
  }

  submit() {
    console.log(this.form.value);
  }
}
