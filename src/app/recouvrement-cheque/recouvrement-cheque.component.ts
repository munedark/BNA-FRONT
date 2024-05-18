import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-recouvrement-cheque',
  templateUrl: './recouvrement-cheque.component.html',
  styleUrls: ['./recouvrement-cheque.component.scss']
})
export class RecouvrementChequeComponent {

  debiteurData: DebiteurInfo | null = null;

  numCtx!:number;
  isDebiteurComponent: boolean = true;
constructor(){}
  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
  }


  onNumCtxReceived(numCTX:number){
    this.numCtx=numCTX;
  }
}
