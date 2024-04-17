import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeFraisInitiesContentieuxComponent } from './forme-frais-inities-contentieux.component';

describe('FormeFraisInitiesContentieuxComponent', () => {
  let component: FormeFraisInitiesContentieuxComponent;
  let fixture: ComponentFixture<FormeFraisInitiesContentieuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeFraisInitiesContentieuxComponent]
    });
    fixture = TestBed.createComponent(FormeFraisInitiesContentieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
