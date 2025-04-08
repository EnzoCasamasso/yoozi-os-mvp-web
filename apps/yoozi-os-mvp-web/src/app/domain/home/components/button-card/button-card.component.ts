import { Component, Input } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'yz-button-card',
  imports: [NzFlexModule, NzIconModule, NzCardComponent, NzTypographyComponent],
  templateUrl: './button-card.component.html',
  styleUrl: './button-card.component.scss',
})
export class ButtonCardComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string;
}
