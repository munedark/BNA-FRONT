import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheDateComponent } from './recherche-date.component';

describe('RechercheDateComponent', () => {
  let component: RechercheDateComponent;
  let fixture: ComponentFixture<RechercheDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheDateComponent]
    });
    fixture = TestBed.createComponent(RechercheDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
