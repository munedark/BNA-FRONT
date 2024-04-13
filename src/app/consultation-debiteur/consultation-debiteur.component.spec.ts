import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDebiteurComponent } from './consultation-debiteur.component';

describe('ConsultationDebiteurComponent', () => {
  let component: ConsultationDebiteurComponent;
  let fixture: ComponentFixture<ConsultationDebiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationDebiteurComponent]
    });
    fixture = TestBed.createComponent(ConsultationDebiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
