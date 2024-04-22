import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationOperationComponent } from './notification-operation.component';

describe('NotificationOperationComponent', () => {
  let component: NotificationOperationComponent;
  let fixture: ComponentFixture<NotificationOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationOperationComponent]
    });
    fixture = TestBed.createComponent(NotificationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
