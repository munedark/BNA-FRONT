import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRisqueComponent } from './detail-risque.component';

describe('DetailRisqueComponent', () => {
  let component: DetailRisqueComponent;
  let fixture: ComponentFixture<DetailRisqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRisqueComponent]
    });
    fixture = TestBed.createComponent(DetailRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
