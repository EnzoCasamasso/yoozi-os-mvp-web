import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InjectSupabase } from '@shared/functions/inject-supabase.function';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'yz-login',
  imports: [NzButtonModule, NzFormModule, NzInputModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export default class LoginPage {
  private supabase = InjectSupabase();
  private notificationService = inject(NzNotificationService);
  private router = inject(Router);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async login(): Promise<void> {
    if (!this.loginForm.valid) {
      this.notificationService.error('Error', 'Please fill out the form');
      return;
    }
    const { email, password } = this.loginForm.value;
    const { error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error) {
      this.notificationService.error('Erro ao fazer login', 'Verifique suas credenciais');
      return;
    }
    this.router.navigate(['/']);
  }
}
