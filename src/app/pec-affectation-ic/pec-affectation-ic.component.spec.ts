import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecAffectationIcComponent } from './pec-affectation-ic.component';

describe('PecAffectationIcComponent', () => {
  let component: PecAffectationIcComponent;
  let fixture: ComponentFixture<PecAffectationIcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecAffectationIcComponent]
    });
    fixture = TestBed.createComponent(PecAffectationIcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
