import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationOperationComponent } from './consultation-operation.component';

describe('ConsultationOperationComponent', () => {
  let component: ConsultationOperationComponent;
  let fixture: ComponentFixture<ConsultationOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationOperationComponent]
    });
    fixture = TestBed.createComponent(ConsultationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
