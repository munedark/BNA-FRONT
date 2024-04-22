import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/app-websocket.service';

@Component({
  selector: 'app-validateur',
  templateUrl: './validateur.component.html',
  styleUrls: ['./validateur.component.scss']
})
export class ValidateurComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.webSocketService.getMessage().subscribe(
      (message: any) => {
        console.log('Received message from server:', message);
      },
      (error: any) => {
        console.error('Error in receiving message:', error);
      }
    );
  }

  sendMessage() {
    this.webSocketService.sendMessage({ test: 'Hello from Angular' });
  }
}
