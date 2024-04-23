import { Component, Input, OnInit } from '@angular/core';

import { AjoutFrais } from '../Models/AjoutFrais';
import { SharedServicesService } from '../services/shared-services.service';
import { DiversPiece } from '../Models/DiversPiece';
import { OperationCTX } from '../Models/OperationCTX';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { AuxiliaireConvontionnéService } from '../services/auxiliaire-convontionné.service';
import { Avocat } from '../Models/Avocat';
import { Huissier } from '../Models/Huissier';
import { Expert } from '../Models/Expert';
import { Risque } from '../Models/Risque';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forme-frais-inities-contentieux',
  templateUrl: './forme-frais-inities-contentieux.component.html',
  styleUrls: ['./forme-frais-inities-contentieux.component.scss']
})
export class FormeFraisInitiesContentieuxComponent implements OnInit{
  @Input() risque!:Risque;
  @Input() numCtx!:number;
    diversPieces$ = new BehaviorSubject<DiversPiece[]>([]);
    operation:OperationCTX={} as OperationCTX;
    option:DiversPiece={} as DiversPiece;
    matricule!:string;
    avocats!:Avocat[];
    huissiers!:Huissier[];
    experts!:Expert[];
    constructor(private sharedService:SharedServicesService,private auth: AuthService,private auxiliaireService:AuxiliaireConvontionnéService){
      this.auxiliaireService.avocatConvontionne().subscribe((data)=>{this.avocats=data;})
      this.auxiliaireService.huissierConvontionne().subscribe((data)=>{this.huissiers=data})
      this.auxiliaireService.expertConvontionne().subscribe((data)=>{this.experts=data})
    }
    ngOnInit(): void {
      this.sharedService.refreshOption.subscribe(()=>{
        this.getoptions();
  
      })
      this.getoptions();
      const token = this.auth.getToken();
      if (token) {
        const decodedToken: any = jwtDecode(token);
        this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
      }
  
    }
  getoptions(){
    this.sharedService.diverOptions().subscribe((data) => {
      this.diversPieces$.next(data);
    })
  }
    
  
  
  
    fraisEnregistrement: AjoutFrais = {} as AjoutFrais;
  
    submitForm() {
          this.operation.etatOperation="E";
          if(this.fraisEnregistrement.montantFrais){
          this.operation.mntOperation=this.fraisEnregistrement.montantFrais;
          this.operation.mntFrais=this.fraisEnregistrement.montantFrais;}
          this.operation.typeFrais=this.fraisEnregistrement.typeFrais;
          this.operation.matriculeAjout=this.matricule;
          this.operation.dateValeurCTX=this.fraisEnregistrement.dateOperation;
          if (this.fraisEnregistrement.RIB && this.fraisEnregistrement.typePaiment=='Virement Tétécomponsé')
            {this.operation.rib=parseInt(this.fraisEnregistrement.RIB)}
          this.sharedService.typeOperation('110').subscribe((data) => {
          this.operation.typeOperation =data;
          this.operation.matriculeEmploye=this.fraisEnregistrement.matriculeEmploye;
          this.sharedService.risqueById(this.risque.id).subscribe(
            (response)=>{
              this.operation.risque=response;
            },
            (error) => {
              console.error('Erreur lors de l\'ajout des risque:', error);}
          );
          this.sharedService.dossier(this.numCtx).subscribe((data) => {this.operation.dossierDebiteur=data;
            console.log("this is data",data)});
        if(this.fraisEnregistrement.typeFrais!='Auxiliaire'){
          if (this.fraisEnregistrement.typePiece!='Autres'){
            this.operation.typePiece=this.fraisEnregistrement.typePiece;
          }
          if (this.fraisEnregistrement.typePiece=='Autres'){
            this.operation.typePiece=this.fraisEnregistrement.autre;
            this.option.typePiece=this.operation.typePiece;
            this.sharedService.addDiversOptions(this.option).subscribe((data)=>{});
          }
          if (this.fraisEnregistrement.nomBeneficiaire)
            {this.operation.nomBeneficiaire=this.fraisEnregistrement.nomBeneficiaire;}
          if(this.fraisEnregistrement.typePiece='Enregistrement'){
            if(this.fraisEnregistrement.numeroPiece){
            this.operation.numeroPiece=this.fraisEnregistrement.numeroPiece;}}
        }
  
  
  
        forkJoin([
          this.sharedService.typePaiment(this.fraisEnregistrement.typePaiment),
  
        ]).subscribe(([typePaimentData ]) => {
          this.operation.typePaiments = typePaimentData;
          // Add other assignments if needed
    
          // Once all assignments are done, proceed to submitForm
          this.sharedService.submitForm(this.operation).subscribe(
            (response) => {
              console.log('Frais ajouté avec succès:', response);
              console.log(this.operation);
              this.resetForm();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "ajouté avec succès",
                showConfirmButton: false,
                timer: 1500
              });
            },
            (error) => {
              console.error('Erreur lors de l\'ajout des frais:', error);
              console.log(this.operation);
          
            }
          );
        });
      });
          }
  resetForm(){
    this.fraisEnregistrement = { typeFrais: '',
                typeAuxiliaire: '',
                typePiece:'',
                cinAuxiliaire: null,
                nomAuxiliaire: '',
                numeroAffaire: null,
                montantHonoraire: null,
                typePaiment: '',
                natureAuxiliaire: '',
                RneAuxiliaire: '',
                prenomAuxiliaire: '',
                dateOperation: undefined,
                montantFrais: null,
                nomBeneficiaire:'',
                autre:'',
              numeroPiece:null};
  }
  }
  
