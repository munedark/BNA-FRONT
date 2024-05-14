import { Component, Input, OnInit } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { FraisEnregistrement } from '../Models/FraisEnregistrement';
import { Risque } from '../Models/Risque';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';
import { OperationJugement } from '../Models/OperationJugement';
import { FraisJugementService } from '../services/frais-jugement.service';
import { DateService } from '../services/date.service';
import { TypeOperationService } from '../services/type-operation.service';

@Component({
  selector: 'app-frais-enregistrement',
  templateUrl: './frais-enregistrement.component.html',
  styleUrls: ['./frais-enregistrement.component.scss']
})
export class FraisEnregistrementComponent implements OnInit {
  @Input() risque!:Risque;
  @Input() numCtx!:number;
  matricule!:string;
  operation: OperationJugement = {} as OperationJugement;
  fraisEnregistrement: FraisEnregistrement = {
    montantFrais: '',
    numeroRouge: '',
    numeroAffaire: '',
    dateDemandeJugement:undefined,
    recetteFinance: ''
  };
numeroRouge: any;

  constructor(private sharedService: SharedServicesService,
    private jugementService:FraisJugementService,
    private auth: AuthService,
    private dateService:DateService ,
    private typeOperationService:TypeOperationService
  ) {}
  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  submitForm() {
    this.typeOperationService.typeOperationByNumero('130').subscribe((data) => {
      this.operation.typeOperation =data;
      });
      this.dateService.getCurrentDate().subscribe((data)=>{
        this.operation.dateAjout=data;
      })
      this.operation.dateOperation=new Date();
        this.operation.typeFrais='Jugement'
        this.operation.etatOperation="E";
        this.operation.mntFrais=parseFloat(this.fraisEnregistrement.montantFrais);
        if(this.fraisEnregistrement.dateDemandeJugement){
        this.operation.dateValeurCTX=this.fraisEnregistrement.dateDemandeJugement;}
        this.operation.matriculeAjout=this.matricule;
        this.operation.numAffaireCTX=parseFloat(this.fraisEnregistrement.numeroAffaire);
        this.operation.recette=this.fraisEnregistrement.recetteFinance;
        this.operation.motifOperationCTX=parseFloat(this.fraisEnregistrement.numeroRouge);
            this.operation.risque=this.risque;
        
        this.sharedService.dossier(this.numCtx).subscribe((data) => {this.operation.dossierDebiteur=data;
          console.log("this is data",data)});
        if(this.operation.risque && this.operation.dossierDebiteur && this.operation.typeOperation){
            this.jugementService.submitForm(this.operation).subscribe(
            (response) => {
              console.log('Frais ajouté avec succès:', response);
              console.log(this.operation);
              this.fraisEnregistrement = { montantFrais: '', numeroRouge: '', numeroAffaire: '', dateDemandeJugement: undefined, recetteFinance: '' };
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Ajouté avec succès",
                showConfirmButton: false,
                timer: 1500
              });

              
            },
            (error) => {
              console.error('Erreur lors de l\'ajout des frais:', error);
              console.log(this.operation);
            }
          );
        }
  }

}
