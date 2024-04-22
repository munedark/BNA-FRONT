import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { OperationCTX } from '../Models/OperationCTX';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080/ws'); // WebSocket endpoint URL
  }

  // Method to send a message to the WebSocket server
  sendMessage(message: any) {
    this.socket$.next(message);
  }

  // Method to receive messages from the WebSocket server
  getMessage() {
    return this.socket$.asObservable();
  }
}
