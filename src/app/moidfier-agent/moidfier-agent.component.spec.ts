import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoidfierAgentComponent } from './moidfier-agent.component';

describe('MoidfierAgentComponent', () => {
  let component: MoidfierAgentComponent;
  let fixture: ComponentFixture<MoidfierAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoidfierAgentComponent]
    });
    fixture = TestBed.createComponent(MoidfierAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
