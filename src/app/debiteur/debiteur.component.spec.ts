import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebiteurComponent } from './debiteur.component';

describe('DebiteurComponent', () => {
  let component: DebiteurComponent;
  let fixture: ComponentFixture<DebiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebiteurComponent]
    });
    fixture = TestBed.createComponent(DebiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
