import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotureDossierComponent } from './cloture-dossier.component';

describe('ClotureDossierComponent', () => {
  let component: ClotureDossierComponent;
  let fixture: ComponentFixture<ClotureDossierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClotureDossierComponent]
    });
    fixture = TestBed.createComponent(ClotureDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
