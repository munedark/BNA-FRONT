import { Component } from '@angular/core';

import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-frais-jugement',
  templateUrl: './frais-jugement.component.html',
  styleUrls: ['./frais-jugement.component.scss']
})
export class FraisJugementComponent {
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | null = null; 
  numCtx!:number;
  isDebiteurComponent: boolean = true;
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
