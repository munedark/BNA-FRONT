import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service'; // Update the path as per your project structure
import Swal from 'sweetalert2';
import { GestionServiceService } from '../services/gestion-service.service';

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
    isEnabled: true, 
    role: {
      id: 0,
      roleName: ''
    }
  };

  constructor(private adminService: AdminServiceService,private gestionService:GestionServiceService) {}

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
    this.gestionService.verifierAgent(this.profile.username).subscribe((data)=>{
      if(data!=undefined){
        Swal.fire({
          title: 'Error!',
          text: "l'agent existe déja!",
          icon: 'error',
          confirmButtonText: "D'accord"
        })
      }
      else{
    this.adminService.ajouterAgent(agentData).subscribe(
      (response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Ajouté avec succès",
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error) => {
        console.error("Erreur lors de duppression de l'agent:", error);
        Swal.fire({
          title: 'Error!',
          text: 'tu veux ressayer',
          icon: 'error',
          confirmButtonText: 'oui'
        })
    
      })}
    })
  }

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
