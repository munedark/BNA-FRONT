import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Profile } from '../Models/Profile';
import { GestionServiceService } from '../services/gestion-service.service';
import { Agent } from '../Models/Agent';

@Component({
  selector: 'app-moidfier-agent',
  templateUrl: './moidfier-agent.component.html',
  styleUrls: ['./moidfier-agent.component.scss']
})
export class MoidfierAgentComponent {

  profile!:Profile;
  identifiant!:string;
  exist!:boolean;
  formulaire:boolean=false;
  agent = {
    nom: '',
    prenom: '',
    email: '',
    numtele: '',
  };

  constructor(private gestionService:GestionServiceService){}
  rechercher() {
    this.gestionService.verifierAgent(this.identifiant).subscribe((data: Profile ) => {
      this.profile = data;
      if (!this.profile || this.profile.role.roleName === "CLIENT" || this.profile.isEnabled==false) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Aucun agent avec cet identifiant.",
          showConfirmButton: true,
          confirmButtonText: 'OK'
        });
        return;
      } 
      else if (this.profile.role.roleName=== "GESTIONNAIRE" || this.profile.role.roleName==="VALIDATEUR"){
        this.formulaire=true
      }
    });
  }
modifier(){
  if (this.profile.role.roleName === 'VALIDATEUR') {
    this.profile.role.id = 3;
  } else if (this.profile.role.roleName === 'GESTIONNAIRE') {
    this.profile.role.id = 4;
  }

  const agentData = {
    agent: this.agent,
    profile: this.profile
  };
  this.gestionService.modifierAgent(this.identifiant,agentData).subscribe((data)=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "modifié avec succès",
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
    })})}

  



  resetForm() {
    this.agent = {
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
        id: 0,
        roleName: ''
      },
      personne:{} as Agent
    };
  }
}
