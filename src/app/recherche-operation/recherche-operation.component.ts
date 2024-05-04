import { Component, OnDestroy } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationConsultationService } from '../services/operation-consultation.service';

@Component({
  selector: 'app-recherche-operation',
  templateUrl: './recherche-operation.component.html',
  styleUrls: ['./recherche-operation.component.scss']
})
export class RechercheOperationComponent implements OnDestroy{
  typeOperation: string = '';
  listeOperation!: OperationCTX[];
 
  constructor(private sharedService: SharedServicesService,private operationService:OperationConsultationService) { }
  ngOnDestroy(): void {
    
  }

  search() {
    this.sharedService.listeOperations(this.typeOperation).subscribe((data) => {
      this.listeOperation = data;
      this.operationService.setOperations(this.listeOperation);
      this.operationService.setTypeOperation(this.typeOperation);
      console.log(this.listeOperation)
    });
  }

}
