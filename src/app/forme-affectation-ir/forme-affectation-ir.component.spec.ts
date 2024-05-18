import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeAffectationIrComponent } from './forme-affectation-ir.component';

describe('FormeAffectationIrComponent', () => {
  let component: FormeAffectationIrComponent;
  let fixture: ComponentFixture<FormeAffectationIrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeAffectationIrComponent]
    });
    fixture = TestBed.createComponent(FormeAffectationIrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
