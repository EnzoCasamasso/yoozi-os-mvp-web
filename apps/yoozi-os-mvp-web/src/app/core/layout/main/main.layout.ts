import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { IconDirective } from '@widget/directives/icon/icon.directive';

@Component({
  selector: 'yz-main',
  imports: [NzLayoutModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, RouterModule, NzAvatarModule, IconDirective],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss',
})
export class MainLayout {
  isCollapsed = false;
}
