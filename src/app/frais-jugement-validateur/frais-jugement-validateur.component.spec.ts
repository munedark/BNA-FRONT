import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisJugementValidateurComponent } from './frais-jugement-validateur.component';

describe('FraisJugementValidateurComponent', () => {
  let component: FraisJugementValidateurComponent;
  let fixture: ComponentFixture<FraisJugementValidateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisJugementValidateurComponent]
    });
    fixture = TestBed.createComponent(FraisJugementValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
