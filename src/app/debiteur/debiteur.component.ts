import { Component } from '@angular/core';

import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-debiteur',
  templateUrl: './debiteur.component.html',
  styleUrls: ['./debiteur.component.scss']
})
export class DebiteurComponent {
  debiteurData: DebiteurInfo | null = null;

  constructor() { }

  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
  }
}
