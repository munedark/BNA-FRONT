import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecAffectationPrincipaleComponent } from './pec-affectation-principale.component';

describe('PecAffectationPrincipaleComponent', () => {
  let component: PecAffectationPrincipaleComponent;
  let fixture: ComponentFixture<PecAffectationPrincipaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecAffectationPrincipaleComponent]
    });
    fixture = TestBed.createComponent(PecAffectationPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
