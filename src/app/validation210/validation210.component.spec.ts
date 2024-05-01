import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation210Component } from './validation210.component';

describe('Validation210Component', () => {
  let component: Validation210Component;
  let fixture: ComponentFixture<Validation210Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Validation210Component]
    });
    fixture = TestBed.createComponent(Validation210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
