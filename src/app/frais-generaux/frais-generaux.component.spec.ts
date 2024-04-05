import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisGenerauxComponent } from './frais-generaux.component';

describe('FraisGenerauxComponent', () => {
  let component: FraisGenerauxComponent;
  let fixture: ComponentFixture<FraisGenerauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisGenerauxComponent]
    });
    fixture = TestBed.createComponent(FraisGenerauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
