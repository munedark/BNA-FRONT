import { Component, Input } from '@angular/core';

import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-debiteur',
  templateUrl: './debiteur.component.html',
  styleUrls: ['./debiteur.component.scss']
})
export class DebiteurComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; // Store risks data
  numCtx!:number;
  isDebiteurComponent: boolean = true;
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
