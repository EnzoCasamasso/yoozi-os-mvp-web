import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonServiceCardComponent } from './skeleton-service-card.component';

describe('SkeletonServiceCardComponent', () => {
  let component: SkeletonServiceCardComponent;
  let fixture: ComponentFixture<SkeletonServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonServiceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
