import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangementComponent } from './arrangement.component';

describe('ArrangementComponent', () => {
  let component: ArrangementComponent;
  let fixture: ComponentFixture<ArrangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrangementComponent]
    });
    fixture = TestBed.createComponent(ArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
