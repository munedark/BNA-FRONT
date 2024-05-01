import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeValidationComponent } from './cheque-validation.component';

describe('ChequeValidationComponent', () => {
  let component: ChequeValidationComponent;
  let fixture: ComponentFixture<ChequeValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeValidationComponent]
    });
    fixture = TestBed.createComponent(ChequeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
