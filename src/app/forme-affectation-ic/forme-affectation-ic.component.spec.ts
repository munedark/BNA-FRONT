import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeAffectationIcComponent } from './forme-affectation-ic.component';

describe('FormeAffectationIcComponent', () => {
  let component: FormeAffectationIcComponent;
  let fixture: ComponentFixture<FormeAffectationIcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeAffectationIcComponent]
    });
    fixture = TestBed.createComponent(FormeAffectationIcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
