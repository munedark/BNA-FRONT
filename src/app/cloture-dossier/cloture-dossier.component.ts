import { Component } from '@angular/core';
import { Risque } from '../Models/Risque';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { OperationService } from '../services/operation.service';
import { DateService } from '../services/date.service';
import { Operation } from '../Models/Operation';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { TypeOperationService } from '../services/type-operation.service';
import { SharedServicesService } from '../services/shared-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cloture-dossier',
  templateUrl: './cloture-dossier.component.html',
  styleUrls: ['./cloture-dossier.component.scss']
})
export class ClotureDossierComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; 
  numCtx!: number;
  operation: Operation={} as Operation;
  date!: Date;
  matricule!: string;
  clicked:boolean=false;


  constructor(
    private operationService: OperationService,
    private dateService: DateService,
    private auth: AuthService,
    private typeOperationService:TypeOperationService,
    private sharedService:SharedServicesService

  ) { 
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
  }

  onRisquesReceived(risquesData: Risque[] | null) {
    this.risquesData = risquesData;
  }

  onNumCtxReceived(numCTX: number){
    this.numCtx = numCTX;
  }

  allRisquesClotures(): boolean {
    if (this.risquesData) {
      for (let risque of this.risquesData) {
        if (risque.stade !== '4- Cloturé') {
          return false;
        }
      }
    }
    return true;
  }

  cloture() {
    this.clicked = true;
    if (!this.allRisquesClotures() || this.debiteurData?.soldeRecouvrement!=0) {
      return;
    }
    this.dateService.getCurrentDate().subscribe((data)=>{
      this.date=data;
    })
    this.operation.etatOperation = "V";
    this.operation.matriculeAjout = this.matricule;
    this.operation.matriculeValidateur = this.matricule;
    this.dateService.getCurrentDate().subscribe((data) => {
      this.operation.dateOperation = data;
    });
    this.operation.dateAjout = new Date();
    this.operation.dateValidation = new Date();

    this.typeOperationService.typeOperationByNumero('270').subscribe((data) => {
      this.operation.typeOperation = data;
      this.sharedService.dossier(this.numCtx).subscribe((dossierData) => {
        this.operation.dossierDebiteur = dossierData;
    
    this.operationService.clotureDossier(this.operation)
      .subscribe(() => {
        console.log('virement validé avec succès');
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cloturé avec succès",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.reload();
        });
      }, (error) => {
        console.error('Erreur lors de la clôture du dossier : ', error);
      });})})
  }
}
