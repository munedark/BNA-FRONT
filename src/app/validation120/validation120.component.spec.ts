import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation120Component } from './validation120.component';

describe('Validation120Component', () => {
  let component: Validation120Component;
  let fixture: ComponentFixture<Validation120Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Validation120Component]
    });
    fixture = TestBed.createComponent(Validation120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
