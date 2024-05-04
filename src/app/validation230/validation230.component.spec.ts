import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation230Component } from './validation230.component';

describe('Validation230Component', () => {
  let component: Validation230Component;
  let fixture: ComponentFixture<Validation230Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Validation230Component]
    });
    fixture = TestBed.createComponent(Validation230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
