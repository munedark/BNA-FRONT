import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeAffectationComponent } from './forme-affectation.component';

describe('FormeAffectationComponent', () => {
  let component: FormeAffectationComponent;
  let fixture: ComponentFixture<FormeAffectationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeAffectationComponent]
    });
    fixture = TestBed.createComponent(FormeAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
