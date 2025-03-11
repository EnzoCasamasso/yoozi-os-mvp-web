import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListPage } from './customers-list.page';

describe('CustomersListPage', () => {
  let component: CustomersListPage;
  let fixture: ComponentFixture<CustomersListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
