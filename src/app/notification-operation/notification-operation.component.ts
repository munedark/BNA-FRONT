import { Component, OnInit } from '@angular/core';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-notification-operation',
  templateUrl: './notification-operation.component.html',
  styleUrls: ['./notification-operation.component.scss']
})
export class NotificationOperationComponent implements OnInit {
operations!:OperationCTX[];
constructor(private operationService:OperationService){}
  ngOnInit(): void {
    this.operationService.getOperations().subscribe((data)=>{this.operations=data});
  }
  

}
