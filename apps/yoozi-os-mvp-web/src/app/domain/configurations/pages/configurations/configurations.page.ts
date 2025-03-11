import { Component, inject } from '@angular/core';
import { ThemeService } from '@shared/services/theme/theme.service';

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'yz-configurations',
  imports: [NzButtonModule],
  templateUrl: './configurations.page.html',
  styleUrl: './configurations.page.scss',
})
export class ConfigurationsPage {
  private themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
