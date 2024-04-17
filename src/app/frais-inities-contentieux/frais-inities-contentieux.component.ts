import { Component } from '@angular/core';
import { Risque } from '../Models/Risque';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-frais-inities-contentieux',
  templateUrl: './frais-inities-contentieux.component.html',
  styleUrls: ['./frais-inities-contentieux.component.scss']
})
export class FraisInitiesContentieuxComponent {
  debiteurData: any;
  risquesData: Risque[] | null | undefined;
  numCtx!: number ;
  isDebiteurComponent: boolean = false;

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
