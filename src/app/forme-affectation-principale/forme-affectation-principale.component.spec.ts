import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeAffectationPrincipaleComponent } from './forme-affectation-principale.component';

describe('FormeAffectationPrincipaleComponent', () => {
  let component: FormeAffectationPrincipaleComponent;
  let fixture: ComponentFixture<FormeAffectationPrincipaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeAffectationPrincipaleComponent]
    });
    fixture = TestBed.createComponent(FormeAffectationPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
