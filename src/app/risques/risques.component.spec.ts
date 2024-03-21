import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisquesComponent } from './risques.component';

describe('RisquesComponent', () => {
  let component: RisquesComponent;
  let fixture: ComponentFixture<RisquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RisquesComponent]
    });
    fixture = TestBed.createComponent(RisquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
