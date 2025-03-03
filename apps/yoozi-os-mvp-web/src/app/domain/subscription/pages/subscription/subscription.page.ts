import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'yz-subscription',
  imports: [NzCardModule, RouterModule, NzStepsModule],
  templateUrl: './subscription.page.html',
  styleUrl: './subscription.page.scss',
})
export default class SubscriptionPage {}
