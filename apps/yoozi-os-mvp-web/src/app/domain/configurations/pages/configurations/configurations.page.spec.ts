import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsPage } from './configurations.page';

describe('ConfigurationsPage', () => {
  let component: ConfigurationsPage;
  let fixture: ComponentFixture<ConfigurationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
