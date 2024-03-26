import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDebiteurComponent } from './affichage-debiteur.component';

describe('AffichageDebiteurComponent', () => {
  let component: AffichageDebiteurComponent;
  let fixture: ComponentFixture<AffichageDebiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichageDebiteurComponent]
    });
    fixture = TestBed.createComponent(AffichageDebiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
