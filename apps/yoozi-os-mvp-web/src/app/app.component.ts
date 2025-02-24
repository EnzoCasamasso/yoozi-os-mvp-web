import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'yz-root',
  template: '<router-outlet/>',
})
export class AppComponent {}
