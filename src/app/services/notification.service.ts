import * as SockJS from 'sockjs-client';
import { Client, Message, Stomp } from '@stomp/stompjs';
export class NotificationService {
  private stompClient: any;

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/ws';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame: any) {
      that.openGlobalSocket();
    });
  }

  openGlobalSocket() {
    this.stompClient.subscribe("/topic/notifications", (message: any) => {
      if (message.body) {
        console.log(message.body);
        // Handle your notification
      }
    });
  }

  sendNotification(notification: any) {
    this.stompClient.send("/app/notify", {}, JSON.stringify(notification));
  }
}
