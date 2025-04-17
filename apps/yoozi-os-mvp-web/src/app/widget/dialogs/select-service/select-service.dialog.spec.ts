import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServiceDialog } from './select-service.dialog';

describe('SelectServiceDialog', () => {
  let component: SelectServiceDialog;
  let fixture: ComponentFixture<SelectServiceDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectServiceDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectServiceDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
