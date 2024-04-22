import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOperation130Component } from './liste-operation130.component';

describe('ListeOperation130Component', () => {
  let component: ListeOperation130Component;
  let fixture: ComponentFixture<ListeOperation130Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOperation130Component]
    });
    fixture = TestBed.createComponent(ListeOperation130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
