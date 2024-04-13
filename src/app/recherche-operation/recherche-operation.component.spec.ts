import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheOperationComponent } from './recherche-operation.component';

describe('RechercheOperationComponent', () => {
  let component: RechercheOperationComponent;
  let fixture: ComponentFixture<RechercheOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheOperationComponent]
    });
    fixture = TestBed.createComponent(RechercheOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
