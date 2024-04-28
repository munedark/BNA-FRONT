import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-frais-generaux',
  templateUrl: './frais-generaux.component.html',
  styleUrls: ['./frais-generaux.component.scss']
})
export class FraisGenerauxComponent {
  debiteurData: DebiteurInfo | null = null;
  numDossier!:number;
  constructor() { }

  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
    console.log("this is debiteur data", this.debiteurData);
  }
  numCtx(data:number){
    this.numDossier=data;
  }
}
