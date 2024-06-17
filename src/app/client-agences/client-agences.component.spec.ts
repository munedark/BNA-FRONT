import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAgencesComponent } from './client-agences.component';

describe('ClientAgencesComponent', () => {
  let component: ClientAgencesComponent;
  let fixture: ComponentFixture<ClientAgencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAgencesComponent]
    });
    fixture = TestBed.createComponent(ClientAgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
