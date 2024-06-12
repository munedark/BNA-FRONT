import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererAgentComponent } from './gerer-agent.component';

describe('GererAgentComponent', () => {
  let component: GererAgentComponent;
  let fixture: ComponentFixture<GererAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererAgentComponent]
    });
    fixture = TestBed.createComponent(GererAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
