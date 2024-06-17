import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';
import { AuthService } from '../services/auth.service';
import { TypeOperationService } from '../services/type-operation.service';
import { DateService } from '../services/date.service';
import { OperationService } from '../services/operation.service';
import { SharedServicesService } from '../services/shared-services.service';
import { jwtDecode } from 'jwt-decode';
import { Operation } from '../Models/Operation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ristourne-agence',
  templateUrl: './ristourne-agence.component.html',
  styleUrls: ['./ristourne-agence.component.scss']
})
export class RistourneAgenceComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; 
  numCtx!: number;
  date!: Date;
  matricule!: string;
  clicked:boolean=false;
  operation: Operation={} as Operation;


  constructor(
    private operationService: OperationService,
    private auth: AuthService,

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

  ristourne() {
    this.clicked = true;
    if (!this.allRisquesClotures() || this.debiteurData?.soldeRecouvrement==0) {
      return;
    }
    
    this.operationService.ristourne(this.numCtx)
      .subscribe(() => {
        console.log('ristourne validé avec succès');
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
        console.error('Erreur lors de la ristourne du solde : ', error);
      }); 
  }

}
