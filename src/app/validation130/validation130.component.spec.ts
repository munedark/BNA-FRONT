import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation130Component } from './validation130.component';

describe('Validation130Component', () => {
  let component: Validation130Component;
  let fixture: ComponentFixture<Validation130Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Validation130Component]
    });
    fixture = TestBed.createComponent(Validation130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
