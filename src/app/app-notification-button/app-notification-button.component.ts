import { Component } from '@angular/core';

@Component({
  selector: 'app-app-notification-button',
  templateUrl: './app-notification-button.component.html',
  styleUrls: ['./app-notification-button.component.scss']
})
export class AppNotificationButtonComponent {
  badgeCount: number = 0;

  constructor() {
    // Simulate fetching the count of new operations
    this.fetchNewOperationsCount();
  }

  fetchNewOperationsCount(): void {
    // Simulate fetching count from the backend (replace this with actual implementation)
    setTimeout(() => {
      // Assuming you fetched the count successfully
      this.badgeCount = 10; // Update badge count (replace with actual count)
    }, 2000); // Simulating a delay of 2 seconds
  }

  onClick(): void {
    // Trigger action when the button is clicked
    // You can implement this according to your UI design
  }
}
