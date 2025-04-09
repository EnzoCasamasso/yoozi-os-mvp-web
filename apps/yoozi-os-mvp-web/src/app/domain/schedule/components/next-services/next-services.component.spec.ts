import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextServicesComponent } from './next-services.component';

describe('NextServicesComponent', () => {
  let component: NextServicesComponent;
  let fixture: ComponentFixture<NextServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NextServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
