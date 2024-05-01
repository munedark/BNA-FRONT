import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeRisqueClotureComponent } from './forme-risque-cloture.component';

describe('FormeRisqueClotureComponent', () => {
  let component: FormeRisqueClotureComponent;
  let fixture: ComponentFixture<FormeRisqueClotureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeRisqueClotureComponent]
    });
    fixture = TestBed.createComponent(FormeRisqueClotureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
