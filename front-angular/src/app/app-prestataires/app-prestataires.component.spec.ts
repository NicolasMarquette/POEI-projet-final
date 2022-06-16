import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrestatairesComponent } from './app-prestataires.component';

describe('AppPrestatairesComponent', () => {
  let component: AppPrestatairesComponent;
  let fixture: ComponentFixture<AppPrestatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPrestatairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrestatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
