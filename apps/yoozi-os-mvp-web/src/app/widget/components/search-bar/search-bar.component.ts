import { Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, Subject } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'yz-search-bar',
  imports: [FormsModule, NzInputModule, NzButtonModule, NzIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  private destroyRef = inject(DestroyRef);
  @Input({ required: true }) placeholder!: string;
  @Output() queryChange = new EventEmitter<string>();

  private querySubject$ = new Subject<string>();
  query = '';

  constructor() {
    this.querySubject$.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef)).subscribe(query => {
      this.queryChange.emit(query);
    });
  }

  emitQuery(event: string): void {
    this.querySubject$.next(event);
  }
}
