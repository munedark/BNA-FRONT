import { TestBed } from '@angular/core/testing';

import { WebSocketService } from './app-websocket.service';

describe('AppWebsocketService', () => {
  let service: WebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
