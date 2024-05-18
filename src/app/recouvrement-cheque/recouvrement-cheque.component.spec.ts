import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvrementChequeComponent } from './recouvrement-cheque.component';

describe('RecouvrementChequeComponent', () => {
  let component: RecouvrementChequeComponent;
  let fixture: ComponentFixture<RecouvrementChequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecouvrementChequeComponent]
    });
    fixture = TestBed.createComponent(RecouvrementChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
