import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistourneAgenceComponent } from './ristourne-agence.component';

describe('RistourneAgenceComponent', () => {
  let component: RistourneAgenceComponent;
  let fixture: ComponentFixture<RistourneAgenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RistourneAgenceComponent]
    });
    fixture = TestBed.createComponent(RistourneAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
