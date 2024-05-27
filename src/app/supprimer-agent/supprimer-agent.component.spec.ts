import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerAgentComponent } from './supprimer-agent.component';

describe('SupprimerAgentComponent', () => {
  let component: SupprimerAgentComponent;
  let fixture: ComponentFixture<SupprimerAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimerAgentComponent]
    });
    fixture = TestBed.createComponent(SupprimerAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
