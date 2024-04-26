import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecAffectationComponent } from './pec-affectation.component';

describe('PecAffectationComponent', () => {
  let component: PecAffectationComponent;
  let fixture: ComponentFixture<PecAffectationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecAffectationComponent]
    });
    fixture = TestBed.createComponent(PecAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
