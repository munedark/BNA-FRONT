import { Component } from '@angular/core';
import { Risque } from '../Models/Risque';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-frais-inities-contentieux',
  templateUrl: './frais-inities-contentieux.component.html',
  styleUrls: ['./frais-inities-contentieux.component.scss']
})
export class FraisInitiesContentieuxComponent {
  debiteurData: DebiteurInfo | null = null; ;
  risquesData: Risque[] | null | undefined;
  numCtx!: number ;
  isintiesComponent: boolean = true;

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
