import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent 
// implements OnInit 
{
  // public messages: string[] = [];
  // public message: string = '';
  // public username: string = '';

  // constructor(private websocketService: WebSocketService) { }

  // ngOnInit(): void {
  //   this.websocketService.connect();
  //   this.websocketService.onMessageReceived().subscribe((message: any) => {
  //     this.messages.push(message.sender + ': ' + message.content);
  //   });
  // }

  // sendMessage(): void {
  //   if (this.message && this.username) {
  //     this.websocketService.sendMessage(this.message);
  //     this.message = '';
  //   }
  // }

  // addUser(): void {
  //   if (this.username) {
  //     this.websocketService.addUser(this.username);
  //   }
  // }
}
