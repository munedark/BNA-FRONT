import { Component, Input } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-affichage-debiteur',
  templateUrl: './affichage-debiteur.component.html',
  styleUrls: ['./affichage-debiteur.component.scss']
})
export class AffichageDebiteurComponent {
  @Input() debiteurData: DebiteurInfo | null = null;
  etatCTX: string = '';

  constructor() {
    this.updateEtatCTX();
  }

  ngOnChanges() {
    this.updateEtatCTX();
  }

  private updateEtatCTX() {
    if (this.debiteurData?.etat_CTX === true) {
      this.etatCTX = "ouvert";
    } else if (this.debiteurData?.etat_CTX === false) {
      this.etatCTX = "fermé";
    }
  }
}
