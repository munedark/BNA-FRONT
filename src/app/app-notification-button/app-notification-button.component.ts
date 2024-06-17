import { Component } from '@angular/core';

@Component({
  selector: 'app-app-notification-button',
  templateUrl: './app-notification-button.component.html',
  styleUrls: ['./app-notification-button.component.scss']
})
export class AppNotificationButtonComponent {
  badgeCount: number = 0;

  constructor() {
    
    this.fetchNewOperationsCount();
  }

  fetchNewOperationsCount(): void {
    setTimeout(() => {
      this.badgeCount = 10; 
    }, 2000); 
  }

  onClick(): void {
   
  }
}
