import { Component, Input } from '@angular/core';

import { AjoutFrais } from '../Models/AjoutFrais';

@Component({
  selector: 'app-ajouter-frais',
  templateUrl: './ajouter-frais.component.html',
  styleUrls: ['./ajouter-frais.component.scss']
})
export class AjouterFraisComponent {
  fraisEnregistrement: AjoutFrais = {
    typeFrais: '',
    typeAuxiliaire: '',
    cinAuxiliaire: null,
    nomAuxiliaire: '',
    regime: null,
    numeroAffaire: null,
    montantHonoraire: null,
    typePaiment: '',
    natureAuxiliaire: '',
    RneAuxiliaire: '',
    prenomAuxiliaire: '',
    dateOperation: new Date(),
    montantFrais: null
  };

  submitForm() {
    
  }
}
