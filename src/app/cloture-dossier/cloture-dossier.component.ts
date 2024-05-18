import { Component } from '@angular/core';
import { Risque } from '../Models/Risque';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { OperationService } from '../services/operation.service';
import { DateService } from '../services/date.service';
import { Operation } from '../Models/Operation';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

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

  cloture() {
    this.clicked=true;
    this.dateService.getCurrentDate().subscribe((data)=>{
      this.date=data;
    })
    this.operation.dateAjout=this.date;
    this.operation.dateOperation=new Date();
    this.operation.dateValidation=this.date;
    this.operation.etatOperation='V';
    this.operation.matriculeAjout=this.matricule;
    this.operation.matriculeValidateur=this.matricule;
    
    this.operationService.clotureDossier(this.operation)
      .subscribe(() => {

      }, (error) => {
        console.error('Erreur lors de la clôture du dossier : ', error);
      });
  }
}
