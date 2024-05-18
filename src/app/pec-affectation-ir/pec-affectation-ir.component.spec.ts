import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecAffectationIrComponent } from './pec-affectation-ir.component';

describe('PecAffectationIrComponent', () => {
  let component: PecAffectationIrComponent;
  let fixture: ComponentFixture<PecAffectationIrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecAffectationIrComponent]
    });
    fixture = TestBed.createComponent(PecAffectationIrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
