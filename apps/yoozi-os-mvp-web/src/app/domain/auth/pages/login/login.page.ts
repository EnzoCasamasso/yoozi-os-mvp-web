import { Component, inject, viewChild } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InjectSupabase } from '@shared/functions/inject-supabase.function';
import { eDynamicField } from '@widget/components/dynamic-form/dynamic-field.enum';
import { iDynamicFormConfig } from '@widget/components/dynamic-form/dynamic-form-config.interface';
import { DynamicFormComponent } from '@widget/components/dynamic-form/dynamic-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'yz-login',
  imports: [DynamicFormComponent, NzButtonModule, NzFormModule, NzInputModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export default class LoginPage {
  private supabase = InjectSupabase();
  private notificationService = inject(NzNotificationService);
  private router = inject(Router);

  formConfig: iDynamicFormConfig[] = [
    {
      label: 'email',
      name: 'email',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'email',
      },
      validations: [Validators.required, Validators.email],
      size: 26,
    },
    {
      label: 'Senha',
      name: 'password',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'password',
      },
      showForgotPassword: true,
      forgotPasswordLink: 'forgot-password',
      validations: [Validators.required],
      size: 24,
    },
  ];

  readonly dynamicForm = viewChild.required(DynamicFormComponent);

  async login(): Promise<void> {
    if (!this.dynamicForm().form.valid) {
      this.notificationService.error('Error', 'Please fill out the form');
      return;
    }
    const { email, password } = this.dynamicForm().form.value;
    const { error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error) {
      this.notificationService.error('Erro ao fazer login', 'Verifique suas credenciais');
      return;
    }
    this.router.navigate(['/']);
  }
}
