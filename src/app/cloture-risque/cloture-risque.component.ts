import { Component } from '@angular/core';
import { Risque } from '../Models/Risque';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-cloture-risque',
  templateUrl: './cloture-risque.component.html',
  styleUrls: ['./cloture-risque.component.scss']
})
export class ClotureRisqueComponent {
  debiteurData: any;
  risquesData: Risque[] | null | undefined;
  numCtx!: number ;
  isClotureRisqueComponent: boolean = true;

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
