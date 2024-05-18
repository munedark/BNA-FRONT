import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-pec-affectation-ic',
  templateUrl: './pec-affectation-ic.component.html',
  styleUrls: ['./pec-affectation-ic.component.scss']
})
export class PecAffectationIcComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; 
  numCtx!:number;
  isAffectationComponent: string="ic";
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
