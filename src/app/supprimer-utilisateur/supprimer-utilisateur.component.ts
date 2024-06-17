import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { GestionServiceService } from '../services/gestion-service.service';
import { Profile } from '../Models/Profile';

@Component({
  selector: 'app-supprimer-utilisateur',
  templateUrl: './supprimer-utilisateur.component.html',
  styleUrls: ['./supprimer-utilisateur.component.scss']
})
export class SupprimerUtilisateurComponent {
  profile!:Profile|undefined;
  identifiant!:string;
  exist!:boolean;
  constructor(private gestionService:GestionServiceService){}
  supprimer() {
    this.gestionService.verifierAgent(this.identifiant).subscribe((data: Profile | undefined) => {
      this.profile = data;
      if (!this.profile || this.profile.role.roleName === "GESTIONNAIRE" || this.profile.role.roleName==="VALIDATEUR" || this.profile.isEnabled==false) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Aucun Client avec cet identifiant.",
          showConfirmButton: true,
          confirmButtonText: 'OK'
        });
        return;
      } 
      else if (this.profile.role.roleName=== "CLIENT"){
        this.gestionService.deleteAgent(this.identifiant).subscribe((data)=>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Supprimé avec succès",
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
      
        })
      }
    });
  }
}
