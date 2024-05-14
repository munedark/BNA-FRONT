import { Component, OnInit, OnDestroy } from '@angular/core';
import { OperationConsultationService } from '../services/operation-consultation.service';
import { OperationCTX } from '../Models/OperationCTX';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { OperationJugement } from '../Models/OperationJugement';
import { FraisGenerauxAux } from '../Models/FraisGenerauxAux';
import { FraisGenerauxNonAux } from '../Models/FraisGenerauxNonAux';
import { OperationCheque } from '../Models/OperationCheque';
import { OperationVirement } from '../Models/OperationVirement';
import { OperationAffectation } from '../Models/OperationAffectaion';
import { FraisGenerauxService } from '../services/frais-generaux.service';
import { OperationFraisInities } from '../Models/OperationFraisInities';
import { TypeOperationService } from '../services/type-operation.service';

@Component({
  selector: 'app-affichage-operations',
  templateUrl: './affichage-operations.component.html',
  styleUrls: ['./affichage-operations.component.scss']
})
export class AffichageOperationsComponent implements OnInit, OnDestroy {
  operations: OperationCTX[] = [];
  NumeroOperation: string = '';
  typeOperation: string = '';
  typeOperationSubscription!: Subscription;
  operationsSubscription!: Subscription;
  
  
  // Data sources
  dataSourceAux: MatTableDataSource<FraisGenerauxAux> = new MatTableDataSource<FraisGenerauxAux>();
  dataSourceTim: MatTableDataSource<FraisGenerauxNonAux> = new MatTableDataSource<FraisGenerauxNonAux>();
  dataSourceEnr: MatTableDataSource<FraisGenerauxNonAux> = new MatTableDataSource<FraisGenerauxNonAux>();
  dataSourceDiver: MatTableDataSource<FraisGenerauxNonAux> = new MatTableDataSource<FraisGenerauxNonAux>();
  dataSourceTimInities: MatTableDataSource<OperationFraisInities> = new MatTableDataSource<OperationFraisInities>();
  dataSourceEnrInities: MatTableDataSource<OperationFraisInities> = new MatTableDataSource<OperationFraisInities>();
  dataSourceDiverInities: MatTableDataSource<OperationFraisInities> = new MatTableDataSource<OperationFraisInities>();
  dataSourceJuge: MatTableDataSource<OperationJugement> = new MatTableDataSource<OperationJugement>();
  dataSourceCheque: MatTableDataSource<OperationCheque> = new MatTableDataSource<OperationCheque>();
  dataSourceVirement: MatTableDataSource<OperationVirement> = new MatTableDataSource<OperationVirement>();
  dataSourceAffectation: MatTableDataSource<OperationAffectation> = new MatTableDataSource<OperationAffectation>();
  
  
  
  // columns
  auxiliaireColumns: string[] = ['typeAuxiliaire', 'natureAuxiliaire', 'mntFrais', 'dateValeurCTX', 'etatOperation'];
  timbrageColumns: string[] = ['typePiece', 'mntFrais', 'dateValeurCTX', 'etatOperation'];
  enregistrementColumns: string[] = ['typePiece', 'numeroPiece', 'mntFrais', 'dateValeurCTX', 'etatOperation'];
  jugementColumns: string[] = ['mntFrais', 'motifOperationCTX', 'numAffaireCTX', 'dateValeurCTX', 'etatOperation'];
  timbrageColumnsCtx: string[] = ['typePiece', 'mntFrais', 'matriculeEmploye', 'dateValeurCTX', 'etatOperation'];
  enregistrementColumnsCtx: string[] = ['typePiece', 'numeroPiece', 'mntFrais', 'matriculeEmploye', 'dateValeurCTX', 'etatOperation'];
  chequeColumns: string[] = ["cheque","mntCheque","ribDonneur","motif",'etatOperation'];
  virementColumns: string[] = ['numVirement','dateOperation','nomBeneficiaire','ribBeneficiaire','montantVirement','motif','nomDonneur','ribDonneur','validation','etatOperation'];
  affectationColumns: string[] = ['typeRecouvrement','mntAffectationPrincipale','mntFrais','dateAffectation','etatOperation'];
 
 
  fraisType!: string;
  operation!: OperationCTX;
  selectedOperation: OperationCTX | undefined;

  constructor(private operationService: OperationConsultationService,
  private typeOperationService :TypeOperationService

  ) {}

  ngOnInit(): void {
    this.typeOperationSubscription = this.operationService.typeOperation$.subscribe(type => {
      this.NumeroOperation = type;
      if(type){
      this.typeOperationService.typeOperationByNumero(type).subscribe((data)=>{this.typeOperation=data.libelleOperation});
      }
    });

    this.operationsSubscription = this.operationService.operationsGenerauxAux$.subscribe(operations => {
      this.dataSourceAux.data = operations.filter(op => op.typeFrais === 'Auxiliaire');
    });
    this.operationsSubscription = this.operationService.operationsGenerauxNonAux$.subscribe(operations => {
      this.dataSourceTim.data = operations.filter(op => op.typeFrais === 'Timbrage');
      this.dataSourceEnr.data = operations.filter(op => op.typeFrais === 'Enregistrement');
      this.dataSourceDiver.data = operations.filter(op => op.typeFrais === 'Divers');
    });
    this.operationsSubscription = this.operationService.operationsInties$.subscribe(operations => {

      this.dataSourceTimInities.data = operations.filter(op => op.typeFrais === 'Timbrage');
      this.dataSourceEnrInities.data = operations.filter(op => op.typeFrais === 'Enregistrement');
      this.dataSourceDiverInities.data = operations.filter(op => op.typeFrais === 'Divers');
      
    });
    this.operationsSubscription = this.operationService.operationsJugement$.subscribe(operations => {
      this.dataSourceJuge.data = operations;
    });    
    this.operationsSubscription = this.operationService.operationsCheque$.subscribe(operations => {
      this.dataSourceCheque.data = operations;
    });
  }

  ngOnDestroy(): void {
    this.typeOperationSubscription.unsubscribe();
    this.operationsSubscription.unsubscribe();
    this.operationService.setTypeOperation('');
    this.operationService.setOperationsGenerauxAux([]);
    this.operationService.setOperationsGenerauxNonAux([]);
    this.operationService.setOperationsInities([]);
    this.operationService.setOperationsJugement([]);
    this.operationService.setOperationsCheque([]);
  }

  openModal(operation: OperationCTX) {
    this.selectedOperation = operation;
  }

  handleRowClick(row: OperationCTX) {
    this.openModal(row);
  }
}
