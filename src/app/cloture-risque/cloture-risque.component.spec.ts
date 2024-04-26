import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotureRisqueComponent } from './cloture-risque.component';

describe('ClotureRisqueComponent', () => {
  let component: ClotureRisqueComponent;
  let fixture: ComponentFixture<ClotureRisqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClotureRisqueComponent]
    });
    fixture = TestBed.createComponent(ClotureRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
