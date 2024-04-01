import { Component } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { FraisEnregistrement } from '../Models/FraisEnregistrement';

@Component({
  selector: 'app-frais-enregistrement',
  templateUrl: './frais-enregistrement.component.html',
  styleUrls: ['./frais-enregistrement.component.scss']
})
export class FraisEnregistrementComponent {
  fraisEnregistrement: FraisEnregistrement = {
    montantFrais: '',
    numeroRouge: '',
    numeroAffaire: '',
    dateDemandeJugement: '',
    recetteFinance: ''
  };

  constructor(private sharedService: SharedServicesService) {}

  submitForm() {
    this.sharedService.submitForm(this.fraisEnregistrement).subscribe(
      (response) => {
        console.log('Frais ajouté avec succès:', response);
        // Optionally, reset the form or perform other actions after successful submission
        // this.fraisEnregistrement = { montantFrais: '', numeroRouge: '', numeroAffaire: '', dateDemandeJugement: '', recetteFinance: '' };
      },
      (error) => {
        console.error('Erreur lors de l\'ajout des frais:', error);
        // Optionally, display an error message to the user
      }
    );
  }
}
