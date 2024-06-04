import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.scss']
})
export class InscriptionClientComponent {
  enregistrement = {
    nom: '',
    prenom: '',
    cin: '',
    numeroCompte: '',
    numeroTelephone: '',
    email: '',
    identifiant: '',
    motDePasse: ''
  };
  constructor() {}

  submitForm() {
   
    
  }
}
