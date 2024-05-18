import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-pec-affectation-principale',
  templateUrl: './pec-affectation-principale.component.html',
  styleUrls: ['./pec-affectation-principale.component.scss']
})
export class PecAffectationPrincipaleComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; 
  numCtx!:number;
  isAffectationComponent: string="principale";
  constructor() { }

  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
  }

  onRisquesReceived(risquesData: Risque[] | null) {
    this.risquesData = risquesData;
  }
  onNumCtxReceived(numCTX:number){
    this.numCtx=numCTX;
  }
}

