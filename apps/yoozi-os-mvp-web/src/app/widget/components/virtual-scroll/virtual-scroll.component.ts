import { Component, Input, numberAttribute } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NzListComponent } from 'ng-zorro-antd/list';

@Component({
  selector: 'yz-virtual-scroll',
  imports: [CommonModule, ScrollingModule, NzListComponent],
  templateUrl: './virtual-scroll.component.html',
  styleUrl: './virtual-scroll.component.scss',
})
export class VirtualScrollComponent {
  @Input({ transform: numberAttribute }) itemSize!: number;
}
