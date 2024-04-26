import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { ChatMessage } from '../Models/chat-message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.getMessage().subscribe((message: ChatMessage) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    const message: ChatMessage = {
      type: 'CHAT',
      content: this.newMessage,
      sender: 'User' // Replace with actual user name logic
    };
    this.webSocketService.sendMessage(message);
    this.newMessage = ''; // Clear the input field
  }
}

