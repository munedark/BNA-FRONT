import { Component, OnInit, OnDestroy } from '@angular/core';
import { OperationConsultationService } from '../services/operation-consultation.service';
import { OperationCTX } from '../Models/OperationCTX';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-affichage-operations',
  templateUrl: './affichage-operations.component.html',
  styleUrls: ['./affichage-operations.component.scss']
})
export class AffichageOperationsComponent implements OnInit, OnDestroy {
  operations: OperationCTX[] = [];
  typeOperation: string = '';
  typeOperationSubscription!: Subscription;
  operationsSubscription!: Subscription;
  dataSourceAux: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  dataSourceTim: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  dataSourceEnr: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  dataSourceDiver: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  dataSourceJuge: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  dataSourceCheque: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  dataSourceVirement: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  dataSourceAffectation: MatTableDataSource<OperationCTX> = new MatTableDataSource<OperationCTX>();
  auxiliaireColumns: string[] = ['typeAuxiliaire', 'natureAuxiliaire', 'mntFrais', 'dateValeurCTX', 'etatOperation'];
  timbrageColumns: string[] = ['typePiece', 'mntFrais', 'dateValeurCTX', 'etatOperation'];
  enregistrementColumns: string[] = ['typePiece', 'numeroPiece', 'mntFrais', 'dateValeurCTX', 'etatOperation'];
  jugementColumns: string[] = ['mntFrais', 'motifOperationCTX', 'numAffaireCTX', 'dateValeurCTX', 'etatOperation'];
  timbrageColumnsCtx: string[] = ['typePiece', 'mntFrais', 'matriculeEmploye', 'dateValeurCTX', 'etatOperation'];
  enregistrementColumnsCtx: string[] = ['typePiece', 'numeroPiece', 'mntFrais', 'matriculeEmploye', 'dateValeurCTX', 'etatOperation'];
  chequeColumns: string[] = ["numCheque","mntCheque","ribDonneur","motif",'etatOperation'];
  virementColumns: string[] = ['numVirement','dateOperation','nomBeneficiaire','ribBeneficiaire','montantVirement','motif','nomDonneur','ribDonneur','validation','etatOperation'];
  affectationColumns: string[] = ['typeRecouvrement','mntAffectationPrincipale','mntFrais','dateAffectation','etatOperation'];
  fraisType!: string;
  operation!: OperationCTX;
  selectedOperation: OperationCTX | undefined;

  constructor(private operationService: OperationConsultationService) {}

  ngOnInit(): void {
    this.typeOperationSubscription = this.operationService.typeOperation$.subscribe(type => {
      this.typeOperation = type;
    });

    this.operationsSubscription = this.operationService.operations$.subscribe(operations => {
      this.dataSourceAux.data = operations.filter(op => op.typeFrais === 'Auxiliaire');
      this.dataSourceTim.data = operations.filter(op => op.typeFrais === 'Timbrage');
      this.dataSourceEnr.data = operations.filter(op => op.typeFrais === 'Enregistrement');
      this.dataSourceDiver.data = operations.filter(op => op.typeFrais === 'Divers');
      this.dataSourceJuge.data = operations.filter(op => op.typeOperation?.libelleOperation === '130' || op.typeOperation === undefined);
    });
  }

  ngOnDestroy(): void {
    this.typeOperationSubscription.unsubscribe();
    this.operationsSubscription.unsubscribe();
    this.operationService.setTypeOperation('');
    this.operationService.setOperations([]);
  }

  openModal(operation: OperationCTX) {
    this.selectedOperation = operation;
  }

  handleRowClick(row: OperationCTX) {
    this.openModal(row);
  }
}
