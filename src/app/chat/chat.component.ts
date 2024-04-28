import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';
import { ChatMessage } from '../Models/chat-message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // messages: any[] = [];

  // constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
  //   this.webSocketService.connect().subscribe(message => {
  //     this.messages.push(message);
  //   });
  }
}

