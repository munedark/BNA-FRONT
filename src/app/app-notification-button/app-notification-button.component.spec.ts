import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotificationButtonComponent } from './app-notification-button.component';

describe('AppNotificationButtonComponent', () => {
  let component: AppNotificationButtonComponent;
  let fixture: ComponentFixture<AppNotificationButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppNotificationButtonComponent]
    });
    fixture = TestBed.createComponent(AppNotificationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
