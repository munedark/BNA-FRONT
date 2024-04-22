import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation110Component } from './validation110.component';

describe('Validation110Component', () => {
  let component: Validation110Component;
  let fixture: ComponentFixture<Validation110Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Validation110Component]
    });
    fixture = TestBed.createComponent(Validation110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
