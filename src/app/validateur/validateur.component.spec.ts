import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateurComponent } from './validateur.component';

describe('ValidateurComponent', () => {
  let component: ValidateurComponent;
  let fixture: ComponentFixture<ValidateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateurComponent]
    });
    fixture = TestBed.createComponent(ValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
