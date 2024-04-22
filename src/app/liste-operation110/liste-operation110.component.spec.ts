import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOperation110Component } from './liste-operation110.component';

describe('ListeOperation110Component', () => {
  let component: ListeOperation110Component;
  let fixture: ComponentFixture<ListeOperation110Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOperation110Component]
    });
    fixture = TestBed.createComponent(ListeOperation110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
