import { Component } from '@angular/core';
import { InscriptionClientService } from '../services/inscription-client.service';
import Swal from 'sweetalert2';
import { VerifierDto } from '../Models/VerifierDto';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.scss']
})
export class InscriptionClientComponent {
  verifierDto:VerifierDto={} as VerifierDto;
  enregistrement = {
    nom: '',
    prenom: '',
    cin: 0,
    numeroCompte: 0,
    numeroTelephone: '',
    email: '',
    identifiant: '',
    motDePasse: ''
  };

  constructor(private inscriptionService: InscriptionClientService) {}

  submitForm() {
    this.verifierDto.cin=this.enregistrement.cin;
    this.verifierDto.numeroCompte=this.enregistrement.numeroCompte;
    this.inscriptionService.verificationClient(this.verifierDto).subscribe((clientExiste: boolean) => {
      if (!clientExiste) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Client non trouvé.",
          showConfirmButton: true,
          confirmButtonText: 'OK'
        });
      } else {
        this.inscriptionService.identifiantExistant(this.enregistrement.cin.toString()).subscribe((identifiantExiste: boolean) => {
          if (identifiantExiste) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Compte déjà existant.",
              showConfirmButton: true,
              confirmButtonText: 'OK'
            });
          } else {
            this.inscriptionService.inscription(this.enregistrement.cin.toString(), this.enregistrement.motDePasse).subscribe(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Inscription réussie.",
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                window.location.reload();
              });
            },
            (error) => {
              console.error("Erreur lors de l'inscription :", error);
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Une erreur est survenue lors de l'inscription.",
                showConfirmButton: true,
                confirmButtonText: 'OK'
              });
            });
          }
        });
      }
    });
  }
}
