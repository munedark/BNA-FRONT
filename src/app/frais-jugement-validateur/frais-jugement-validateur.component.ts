import { Component } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-frais-jugement-validateur',
  templateUrl: './frais-jugement-validateur.component.html',
  styleUrls: ['./frais-jugement-validateur.component.scss']
})
export class FraisJugementValidateurComponent {
  debiteurData: DebiteurInfo | null = null;
  constructor() { }

  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
    console.log("this is debiteur data", this.debiteurData);
  }
}
