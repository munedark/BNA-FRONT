import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisGenerauxValidateurComponent } from './frais-generaux-validateur.component';

describe('FraisGenerauxValidateurComponent', () => {
  let component: FraisGenerauxValidateurComponent;
  let fixture: ComponentFixture<FraisGenerauxValidateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisGenerauxValidateurComponent]
    });
    fixture = TestBed.createComponent(FraisGenerauxValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
