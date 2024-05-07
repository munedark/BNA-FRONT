import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDateJournalComponent } from './admin-date-journal.component';

describe('AdminDateJournalComponent', () => {
  let component: AdminDateJournalComponent;
  let fixture: ComponentFixture<AdminDateJournalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDateJournalComponent]
    });
    fixture = TestBed.createComponent(AdminDateJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
