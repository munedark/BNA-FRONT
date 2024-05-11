import { Component, OnDestroy } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationConsultationService } from '../services/operation-consultation.service';
import { FraisJugementService } from '../services/frais-jugement.service';

@Component({
  selector: 'app-recherche-operation',
  templateUrl: './recherche-operation.component.html',
  styleUrls: ['./recherche-operation.component.scss']
})
export class RechercheOperationComponent implements OnDestroy{
  typeOperation: string = '';
  listeOperation!: OperationCTX[];
 
  constructor(private fraisJugementService: FraisJugementService,private operationService:OperationConsultationService) { }
  ngOnDestroy(): void {
    
  }

  search() {
    if(this.typeOperation=="130")
    this.fraisJugementService.operations().subscribe((data) => {
      this.listeOperation = data;
      this.operationService.setOperations(this.listeOperation);
      this.operationService.setTypeOperation(this.typeOperation);
      console.log(this.listeOperation)
    });
  }

}
