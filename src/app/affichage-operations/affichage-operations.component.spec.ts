import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageOperationsComponent } from './affichage-operations.component';

describe('AffichageOperationsComponent', () => {
  let component: AffichageOperationsComponent;
  let fixture: ComponentFixture<AffichageOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichageOperationsComponent]
    });
    fixture = TestBed.createComponent(AffichageOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
