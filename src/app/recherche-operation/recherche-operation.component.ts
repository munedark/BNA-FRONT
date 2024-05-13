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

  constructor(private fraisJugementService: FraisJugementService,
    private operationService:OperationConsultationService,
  private fraisGenerauxService:FraisGenerauxService,
private fraisInitiesService:FraisInitiesService) { }
  ngOnDestroy(): void {
    
  }

  search() {
    if(this.typeOperation=="130"){
    this.fraisJugementService.operations().subscribe((data) => {
      this.listeOperationJugement = data;
      this.operationService.setOperationsJugement(this.listeOperationJugement);
      this.operationService.setTypeOperation(this.typeOperation);
    });    }
    if(this.typeOperation=="120"){
    this.fraisGenerauxService.allOperationAux().subscribe((data) => {
      this.listeOperationAux = data;
      this.operationService.setOperationsGenerauxAux(this.listeOperationAux);
      this.operationService.setTypeOperation(this.typeOperation);
    });     
    this.fraisGenerauxService.allOperationNonAux().subscribe((data) => {
      this.listeOperationNonAux = data;
      this.operationService.setOperationsGenerauxNonAux(this.listeOperationNonAux);
      this.operationService.setTypeOperation(this.typeOperation);
    });   }
     if(this.typeOperation=="110"){
    this.fraisInitiesService.operations().subscribe((data) => {
      this.listeOperationInities = data;
      this.operationService.setOperationsInities(this.listeOperationInities);
      this.operationService.setTypeOperation(this.typeOperation);
      console.log(this.listeOperationInities)
    });    
  }
  }

}
