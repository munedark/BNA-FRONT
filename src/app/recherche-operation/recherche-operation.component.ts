import { Component, OnDestroy } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationConsultationService } from '../services/operation-consultation.service';
import { FraisJugementService } from '../services/frais-jugement.service';
import { FraisGenerauxService } from '../services/frais-generaux.service';
import { FraisInitiesService } from '../services/frais-inities.service';
import { OperationJugement } from '../Models/OperationJugement';
import { FraisGenerauxAux } from '../Models/FraisGenerauxAux';
import { FraisGenerauxNonAux } from '../Models/FraisGenerauxNonAux';
import { OperationFraisInities } from '../Models/OperationFraisInities';
import { OperationService } from '../services/operation.service';
import { OperationCheque } from '../Models/OperationCheque';

@Component({
  selector: 'app-recherche-operation',
  templateUrl: './recherche-operation.component.html',
  styleUrls: ['./recherche-operation.component.scss']
})
export class RechercheOperationComponent implements OnDestroy{
  typeOperation: string = '';
  listeOperationJugement!: OperationJugement[];
  listeOperationAux!: FraisGenerauxAux[];
  listeOperationNonAux!: FraisGenerauxNonAux[];
  listeOperationInities!: OperationFraisInities[];
  listOperationCheque!: OperationCheque[];

  constructor(private fraisJugementService: FraisJugementService,
    private operationConsultationService:OperationConsultationService,
  private fraisGenerauxService:FraisGenerauxService,
private fraisInitiesService:FraisInitiesService,
private operationService:OperationService) { }
  ngOnDestroy(): void {
    
  }

  search() {
    if(this.typeOperation=="130"){
    this.fraisJugementService.operations().subscribe((data) => {
      this.listeOperationJugement = data;
      this.operationConsultationService.setOperationsJugement(this.listeOperationJugement);
      this.operationConsultationService.setTypeOperation(this.typeOperation);
    });    }
    if(this.typeOperation=="120"){
    this.fraisGenerauxService.allOperationAux().subscribe((data) => {
      this.listeOperationAux = data;
      this.operationConsultationService.setOperationsGenerauxAux(this.listeOperationAux);
      this.operationConsultationService.setTypeOperation(this.typeOperation);
    });     
    this.fraisGenerauxService.allOperationNonAux().subscribe((data) => {
      this.listeOperationNonAux = data;
      this.operationConsultationService.setOperationsGenerauxNonAux(this.listeOperationNonAux);
      this.operationConsultationService.setTypeOperation(this.typeOperation);
    });   }
     if(this.typeOperation=="110"){
    this.fraisInitiesService.operations().subscribe((data) => {
      this.listeOperationInities = data;
      this.operationConsultationService.setOperationsInities(this.listeOperationInities);
      this.operationConsultationService.setTypeOperation(this.typeOperation);
      console.log(this.listeOperationInities)
    });    
  }
  if(this.typeOperation=="210"){
    this.operationService.allOperationCheque().subscribe((data) => {
      this.listOperationCheque = data;
      this.operationConsultationService.setOperationsCheque(this.listOperationCheque);
      this.operationConsultationService.setTypeOperation(this.typeOperation);
    });    }
  }

}
