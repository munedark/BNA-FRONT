import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // private stompClient: any;
  // private serverUrl = 'http://localhost:8080/chat';

  // public connect(): void {
  //   const socket = new SockJS(this.serverUrl);
  //   this.stompClient = Stomp.over(socket);
  //   this.stompClient.connect({}, () => {
  //     console.log('Connected to WebSocket');
  //   });
  // }

  // public disconnect(): void {
  //   if (this.stompClient) {
  //     this.stompClient.disconnect();
  //   }
  // }

  // public sendMessage(message: string): void {
  //   this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify({ content: message }));
  // }

  // public addUser(username: string): void {
  //   this.stompClient.send('/app/chat.addUser', {}, JSON.stringify({ sender: username, type: 'JOIN' }));
  // }

  // public onMessageReceived(): Observable<any> {
  //   const subject = new Subject<any>();
  //   this.stompClient.subscribe('/topic/public', (message: any) => {
  //     subject.next(JSON.parse(message.body));
  //   });
  //   return subject.asObservable();
  // }
}
