import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {

  client = {
    nom: '',
    prenom: '',
    email: '',
    numtele: '',
    
  };  

  profile = {
    username: '',
    password: '',
    isEnabled: true,
    role: {
      id: 2,
      roleName: 'CLIENT'
    }
  };
  errorMessage: string = '';

  constructor(private adminService: AdminServiceService) {}

  ajouter() {
    this.errorMessage = 'wrong input!'; 
      
      const clientData = {
      client: this.client,
      profile: this.profile};

    this.adminService.ajouterClient(clientData).subscribe(
      (response) => {
        console.log('client added successfully:', response);
        // Optionally, reset the form after successful submission
        this.resetForm();
      },
      (error) => {
        console.error('Error adding client:', error);
        this.errorMessage = 'An error occurred while adding the client. Please try again.';
      }
    );
  }

  resetForm() {
    this.client = {
      nom: '',
      prenom: '',
      email: '',
      numtele: '',
      
    };
    this.profile = {
      username: '',
      password: '',
      isEnabled: true,
      role: {
        id: 2,
        roleName: 'CLIENT'
      }
    };
  }
}


