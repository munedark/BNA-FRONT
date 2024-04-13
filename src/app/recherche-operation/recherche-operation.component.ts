import { Component, EventEmitter, Output } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { OperationCTX } from '../Models/OperationCTX';

@Component({
  selector: 'app-recherche-operation',
  templateUrl: './recherche-operation.component.html',
  styleUrls: ['./recherche-operation.component.scss']
})
export class RechercheOperationComponent {
  typeOperation: string='' ;
  listeOperation!: OperationCTX[];
  @Output() type: EventEmitter<OperationCTX[]>=new EventEmitter<OperationCTX[]>();
  constructor(private sharedService:SharedServicesService) { }

  search() {
    this.sharedService.listeOperations(this.typeOperation).subscribe((data)=>{this.listeOperation=data;this.type.emit(this.listeOperation);})
        
  }

}
