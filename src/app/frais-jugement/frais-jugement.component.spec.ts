import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisJugementComponent } from './frais-jugement.component';

describe('FraisJugementComponent', () => {
  let component: FraisJugementComponent;
  let fixture: ComponentFixture<FraisJugementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisJugementComponent]
    });
    fixture = TestBed.createComponent(FraisJugementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
