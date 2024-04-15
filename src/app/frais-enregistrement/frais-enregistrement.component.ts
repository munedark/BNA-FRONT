import { Component, Input, OnInit } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { FraisEnregistrement } from '../Models/FraisEnregistrement';
import { OperationCTX } from '../Models/OperationCTX';
import { Risque } from '../Models/Risque';
import { DossierDebiteur } from '../Models/DossierDebiteur';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-frais-enregistrement',
  templateUrl: './frais-enregistrement.component.html',
  styleUrls: ['./frais-enregistrement.component.scss']
})
export class FraisEnregistrementComponent implements OnInit {
  @Input() risque!:Risque;
  @Input() dossierDebiteur!:DossierDebiteur;
  @Input() numCtx!:number;
  matricule!:string;
  operation: OperationCTX = {} as OperationCTX;
  fraisEnregistrement: FraisEnregistrement = {
    montantFrais: '',
    numeroRouge: '',
    numeroAffaire: '',
    dateDemandeJugement:undefined,
    recetteFinance: ''
  };
  

  constructor(private sharedService: SharedServicesService,private auth: AuthService) {}
  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }

  }

  submitForm() {
    this.sharedService.typeOperation('130').subscribe((data) => {
      this.operation.typeOperation =data;
      });
        this.operation.etatOperation="E";
        this.operation.mntOperation=parseFloat(this.fraisEnregistrement.montantFrais);
        this.operation.mntFrais=parseFloat(this.fraisEnregistrement.montantFrais);
        if(this.fraisEnregistrement.dateDemandeJugement){
        this.operation.dateValeurCTX=this.fraisEnregistrement.dateDemandeJugement;}
        this.operation.matriculeAjout=this.matricule;
        this.operation.numAffaireCTX=parseFloat(this.fraisEnregistrement.numeroAffaire);
        this.operation.nomBeneficiairePaiment=this.fraisEnregistrement.recetteFinance;
        this.operation.motifOperationCTX=parseFloat(this.fraisEnregistrement.numeroRouge);
        this.sharedService.risqueById(this.risque.id).subscribe(
          (response)=>{
            this.operation.risque=response;
          },
          (error) => {
            console.error('Erreur lors de l\'ajout des risque:', error);}
        );
        
        this.sharedService.dossier(this.numCtx).subscribe((data) => {this.operation.dossierDebiteur=data;
          console.log("this is data",data)});
        if(this.operation.risque && this.operation.dossierDebiteur && this.operation.typeOperation){
            this.sharedService.submitForm(this.operation).subscribe(
            (response) => {
              console.log('Frais ajouté avec succès:', response);
              console.log(this.operation);

              this.fraisEnregistrement = { montantFrais: '', numeroRouge: '', numeroAffaire: '', dateDemandeJugement: undefined, recetteFinance: '' };
            },
            (error) => {
              console.error('Erreur lors de l\'ajout des frais:', error);
              console.log(this.operation);
              //nzid display l erreur
            }
          );
        }
  }

}
