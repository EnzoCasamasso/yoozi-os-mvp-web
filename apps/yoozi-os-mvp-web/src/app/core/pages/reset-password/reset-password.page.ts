import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InjectSupabase } from '@shared/functions/inject-supabase.function';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'yz-reset-password',
  imports: [NzButtonModule, NzFormModule, NzInputModule, FormsModule, RouterModule],
  templateUrl: './reset-password.page.html',
  styleUrl: './reset-password.page.scss',
})
export class ResetPasswordPage {
  private supabase = InjectSupabase();
  private router = inject(Router);
  private notificationService = inject(NzNotificationService);

  newPassword = model('');

  async submit() {
    await this.supabase.auth.updateUser({ password: this.newPassword() });
    this.notificationService.success('Senha alterada', 'Sua senha foi alterada com sucesso');
    this.newPassword.set('');
    this.router.navigate(['/']);
  }
}
