import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-pec-affectation-ir',
  templateUrl: './pec-affectation-ir.component.html',
  styleUrls: ['./pec-affectation-ir.component.scss']
})
export class PecAffectationIrComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; 
  numCtx!:number;
  isAffectationComponent: string="ir";
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

