import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOperation120Component } from './liste-operation120.component';

describe('ListeOperation120Component', () => {
  let component: ListeOperation120Component;
  let fixture: ComponentFixture<ListeOperation120Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOperation120Component]
    });
    fixture = TestBed.createComponent(ListeOperation120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
