import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherAgentComponent } from './rechercher-agent.component';

describe('RechercherAgentComponent', () => {
  let component: RechercherAgentComponent;
  let fixture: ComponentFixture<RechercherAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercherAgentComponent]
    });
    fixture = TestBed.createComponent(RechercherAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
