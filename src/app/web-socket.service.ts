
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { ChatMessage } from './Models/chat-message';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080/ws'); 
  }

  sendMessage(message: ChatMessage): void {
    this.socket$.next(message);
  }

  getMessage(): Observable<ChatMessage> {
    return this.socket$.asObservable();
  }
}
