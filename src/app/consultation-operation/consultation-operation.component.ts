import { Component } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { OperationCTX } from '../Models/OperationCTX';

@Component({
  selector: 'app-consultation-operation',
  templateUrl: './consultation-operation.component.html',
  styleUrls: ['./consultation-operation.component.scss']
})
export class ConsultationOperationComponent {
listOpeartions!:OperationCTX[];
onTypeReceived(type:OperationCTX[]){
  this.listOpeartions=type;
  console.log(this.listOpeartions);
}
constructor(private sharedService:SharedServicesService) {
  
}
}
