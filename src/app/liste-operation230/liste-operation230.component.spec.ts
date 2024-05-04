import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOperation230Component } from './liste-operation230.component';

describe('ListeOperation230Component', () => {
  let component: ListeOperation230Component;
  let fixture: ComponentFixture<ListeOperation230Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOperation230Component]
    });
    fixture = TestBed.createComponent(ListeOperation230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
