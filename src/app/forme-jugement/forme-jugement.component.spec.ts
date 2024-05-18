import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeJugementComponent } from './forme-jugement.component';

describe('FormeJugementComponent', () => {
  let component: FormeJugementComponent;
  let fixture: ComponentFixture<FormeJugementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeJugementComponent]
    });
    fixture = TestBed.createComponent(FormeJugementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
