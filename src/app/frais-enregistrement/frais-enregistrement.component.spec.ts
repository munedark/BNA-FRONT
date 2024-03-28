import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisEnregistrementComponent } from './frais-enregistrement.component';

describe('FraisEnregistrementComponent', () => {
  let component: FraisEnregistrementComponent;
  let fixture: ComponentFixture<FraisEnregistrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisEnregistrementComponent]
    });
    fixture = TestBed.createComponent(FraisEnregistrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
