import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrestationsComponent } from './app-prestations.component';

describe('AppPrestationsComponent', () => {
  let component: AppPrestationsComponent;
  let fixture: ComponentFixture<AppPrestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPrestationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
