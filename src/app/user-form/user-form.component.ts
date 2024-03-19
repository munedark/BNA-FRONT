import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service'; // Update the path as per your project structure

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  agent = {
    nom: '',
    prenom: '',
    email: '',
    numtele: '',
    matricule: ''
  };
  profile = {
    username: '',
    password: '',
    isEnabled: true, // Assuming this is always true for new agents
    role: {
      id: 0,
      roleName: ''
    }
  };

  constructor(private adminService: AdminServiceService) {}

  ajouter() {
    if (this.profile.role.roleName === 'VALIDATEUR') {
      this.profile.role.id = 3;
    } else if (this.profile.role.roleName === 'GESTIONNAIRE') {
      this.profile.role.id = 4;
    }

    const agentData = {
      agent: this.agent,
      profile: this.profile
    };

    this.adminService.ajouterAgent(agentData).subscribe(
      (response) => {
        console.log('Agent added successfully:', response);
        // Optionally, you can reset the form after successful submission
        // this.resetForm();
      },
      (error) => {
        console.error('Error adding agent:', error);
      }
    );
  }

  // Optional: Function to reset the form after submission
  resetForm() {
    this.agent = {
      nom: '',
      prenom: '',
      email: '',
      numtele: '',
      matricule: ''
    };
    this.profile = {
      username: '',
      password: '',
      isEnabled: true,
      role: {
        id: 0,
        roleName: ''
      }
    };
  }
}
