import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeArrangementComponent } from './forme-arrangement.component';

describe('FormeArrangementComponent', () => {
  let component: FormeArrangementComponent;
  let fixture: ComponentFixture<FormeArrangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeArrangementComponent]
    });
    fixture = TestBed.createComponent(FormeArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
