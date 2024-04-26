import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-pec-affectation',
  templateUrl: './pec-affectation.component.html',
  styleUrls: ['./pec-affectation.component.scss']
})
export class PecAffectationComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; // Store risks data
  numCtx!:number;
  isAffectationComponent: boolean = true;
  constructor() { }

  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
  }

  // Method to receive risks data emitted by RechercheComponent
  onRisquesReceived(risquesData: Risque[] | null) {
    this.risquesData = risquesData;
  }
  onNumCtxReceived(numCTX:number){
    this.numCtx=numCTX;
  }
}
