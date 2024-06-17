import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminServiceService } from '../services/admin-service.service';
import { GestionServiceService } from '../services/gestion-service.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent {
  
    client = {
      nom: '',
      prenom: '',
      email: '',
      numtele: '',
      matricule: '',
      cin: ''
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
  
    constructor(private adminService: AdminServiceService,private gestionService:GestionServiceService) {}
  
    ajouter() {
      const clientData = {
        client: this.client,
        profile: this.profile
      };
      this.gestionService.verifierAgent(this.profile.username).subscribe((data)=>{
        console.log(this.client.cin)
        if(data!=undefined){
          Swal.fire({
            title: 'Error!',
            text: "le client existe déja!",
            icon: 'error',
            confirmButtonText: "D'accord"
          })
        }
        else{
      this.adminService.ajouterClient(clientData).subscribe(
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
      this.client = {
        nom: '',
        prenom: '',
        email: '',
        numtele: '',
        matricule: '',
        cin:''
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
