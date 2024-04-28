import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, StompSubscription, IStompSocket } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // private stompClient!: Client;
  // private serverUrl = 'ws://localhost:8080/chat';
  //   private topic = '/topic/public';

  // constructor() { }

  // connect(): Observable<any> {
  //   return new Observable(observer => {
  //     this.stompClient = new Client();
  //     this.stompClient.webSocketFactory = () => {
  //       return new WebSocket(this.serverUrl) as IStompSocket;
  //     };
  //     this.stompClient.onConnect = () => {
  //       this.stompClient.subscribe(this.topic, message => {
  //         observer.next(JSON.parse(message.body));
  //       });
  //     };
  //     this.stompClient.activate();
  //   });
  // }
}
