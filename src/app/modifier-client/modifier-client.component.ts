import { Component } from '@angular/core';
import { Profile } from '../Models/Profile';
import { GestionServiceService } from '../services/gestion-service.service';
import Swal from 'sweetalert2';
import { Client } from '../Models/Client';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent {

  profile!:Profile;
  identifiant!:string;
  exist!:boolean;
  formulaire:boolean=false;
  client = {
    nom: '',
    prenom: '',
    email: '',
    numtele: '',
  };

  constructor(private gestionService:GestionServiceService){}
  rechercher() {
    this.gestionService.verifierAgent(this.identifiant).subscribe((data: Profile ) => {
      this.profile = data;
      if (!this.profile || this.profile.role.roleName === "GESTIONNAIRE" || this.profile.role.roleName==="VALIDATEUR" || this.profile.isEnabled==false) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Aucun client avec cet identifiant.",
          showConfirmButton: true,
          confirmButtonText: 'OK'
        });
        return;
      } 
      else if (this.profile.role.roleName=== "CLIENT"){
        this.formulaire=true
      }
    });
  }
modifier(){
    this.profile.role.id = 2;
  const clientData = {
    client: this.client,
    profile: this.profile
  };
  this.gestionService.modifierClient(this.identifiant,clientData).subscribe((data)=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "modifié avec succès",
      showConfirmButton: false,
      timer: 1500
    })

  },
  (error) => {
    console.error("Erreur lors de duppression du client:", error);
    Swal.fire({
      title: 'Error!',
      text: 'tu veux ressayer',
      icon: 'error',
      confirmButtonText: 'oui'
    })})}

  



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
        id: 0,
        roleName: ''
      },
      personne:{} as Client
    };
  }
}
