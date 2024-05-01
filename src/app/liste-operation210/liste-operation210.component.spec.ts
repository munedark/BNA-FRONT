import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOperation210Component } from './liste-operation210.component';

describe('ListeOperation210Component', () => {
  let component: ListeOperation210Component;
  let fixture: ComponentFixture<ListeOperation210Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOperation210Component]
    });
    fixture = TestBed.createComponent(ListeOperation210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
