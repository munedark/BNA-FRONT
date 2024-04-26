import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeChequeComponent } from './forme-cheque.component';

describe('FormeChequeComponent', () => {
  let component: FormeChequeComponent;
  let fixture: ComponentFixture<FormeChequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeChequeComponent]
    });
    fixture = TestBed.createComponent(FormeChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
