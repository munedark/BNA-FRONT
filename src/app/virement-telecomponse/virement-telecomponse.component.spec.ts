import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementTelecomponseComponent } from './virement-telecomponse.component';

describe('VirementTelecomponseComponent', () => {
  let component: VirementTelecomponseComponent;
  let fixture: ComponentFixture<VirementTelecomponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementTelecomponseComponent]
    });
    fixture = TestBed.createComponent(VirementTelecomponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
