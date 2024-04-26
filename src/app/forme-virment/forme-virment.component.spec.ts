import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeVirmentComponent } from './forme-virment.component';

describe('FormeVirmentComponent', () => {
  let component: FormeVirmentComponent;
  let fixture: ComponentFixture<FormeVirmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeVirmentComponent]
    });
    fixture = TestBed.createComponent(FormeVirmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
