import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageRisqueComponent } from './affichage-risque.component';

describe('AffichageRisqueComponent', () => {
  let component: AffichageRisqueComponent;
  let fixture: ComponentFixture<AffichageRisqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichageRisqueComponent]
    });
    fixture = TestBed.createComponent(AffichageRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
