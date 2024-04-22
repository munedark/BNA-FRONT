import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisContentieuxValidateurComponent } from './frais-contentieux-validateur.component';

describe('FraisContentieuxValidateurComponent', () => {
  let component: FraisContentieuxValidateurComponent;
  let fixture: ComponentFixture<FraisContentieuxValidateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisContentieuxValidateurComponent]
    });
    fixture = TestBed.createComponent(FraisContentieuxValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
