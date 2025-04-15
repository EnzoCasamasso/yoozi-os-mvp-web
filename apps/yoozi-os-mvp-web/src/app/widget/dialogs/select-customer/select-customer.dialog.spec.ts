import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomerDialog } from './select-customer.dialog';

describe('SelectCustomerComponent', () => {
  let component: SelectCustomerDialog;
  let fixture: ComponentFixture<SelectCustomerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCustomerDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCustomerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
