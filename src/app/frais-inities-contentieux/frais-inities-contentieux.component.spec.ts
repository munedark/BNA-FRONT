import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisInitiesContentieuxComponent } from './frais-inities-contentieux.component';

describe('FraisInitiesContentieuxComponent', () => {
  let component: FraisInitiesContentieuxComponent;
  let fixture: ComponentFixture<FraisInitiesContentieuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisInitiesContentieuxComponent]
    });
    fixture = TestBed.createComponent(FraisInitiesContentieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
