import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFraisGenerauxComponent } from './ajout-frais-generaux.component';

describe('AjoutFraisGenerauxComponent', () => {
  let component: AjoutFraisGenerauxComponent;
  let fixture: ComponentFixture<AjoutFraisGenerauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutFraisGenerauxComponent]
    });
    fixture = TestBed.createComponent(AjoutFraisGenerauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
