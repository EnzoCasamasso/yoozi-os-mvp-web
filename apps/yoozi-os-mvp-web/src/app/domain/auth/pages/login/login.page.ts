import { Component, inject } from '@angular/core';
import { ThemeService } from '@shared/services/theme/theme.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'yz-login',
  imports: [NzButtonModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export default class LoginPage {
  private themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
