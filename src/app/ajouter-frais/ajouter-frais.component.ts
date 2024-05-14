import { Component, Input, OnInit } from '@angular/core';

import { AjoutFrais } from '../Models/AjoutFrais';
import { SharedServicesService } from '../services/shared-services.service';
import { DiversPiece } from '../Models/DiversPiece';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { AuxiliaireConvontionnéService } from '../services/auxiliaire-convontionné.service';
import Swal from 'sweetalert2';
import { FraisGenerauxAux } from '../Models/FraisGenerauxAux';
import { FraisGenerauxNonAux } from '../Models/FraisGenerauxNonAux';
import { FraisGenerauxService } from '../services/frais-generaux.service';
import { Auxiliaire } from '../Models/Auxiliaire';
import { DateService } from '../services/date.service';
import { TypeOperationService } from '../services/type-operation.service';

@Component({
  selector: 'app-ajouter-frais',
  templateUrl: './ajouter-frais.component.html',
  styleUrls: ['./ajouter-frais.component.scss']
})
export class AjouterFraisComponent implements OnInit{
  @Input() numDossier!:number;
  diversPieces$ = new BehaviorSubject<DiversPiece[]>([]);
  operationAux:FraisGenerauxAux={} as FraisGenerauxAux;
  operationNonAux:FraisGenerauxNonAux={} as FraisGenerauxNonAux;
  option:DiversPiece={} as DiversPiece;
  matricule!:string;
  avocats!:Auxiliaire[];
  huissiers!:Auxiliaire[];
  experts!:Auxiliaire[];
  
  constructor(private sharedService:SharedServicesService,private auth: AuthService,
    private auxiliaireService:AuxiliaireConvontionnéService,
    private fraisGenerauxService:FraisGenerauxService,
    private dateService:DateService,
    private typeOperationService:TypeOperationService ){
    this.auxiliaireService.avocatConvontionne().subscribe((data)=>{this.avocats=data;})
    this.auxiliaireService.huissierConvontionne().subscribe((data)=>{this.huissiers=data;})
    this.auxiliaireService.expertConvontionne().subscribe((data)=>{this.experts=data ;})

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
    
    // auxiliaire
    if(this.fraisEnregistrement.typeFrais=="Auxiliaire"){
      this.operationAux.dateOperation=new Date();

      this.dateService.getCurrentDate().subscribe((data)=>{
        this.operationAux.dateAjout=data;
      });
        this.operationAux.etatOperation="E";
        if(this.fraisEnregistrement.montantFrais){
        this.operationAux.mntFrais=this.fraisEnregistrement.montantFrais;}
        this.operationAux.typeFrais=this.fraisEnregistrement.typeFrais;
        this.operationAux.matriculeAjout=this.matricule;
        this.operationAux.dateValeurCTX=this.fraisEnregistrement.dateOperation;
        if (this.fraisEnregistrement.RIB && this.fraisEnregistrement.typePaiment=='Virement Tétécomponsé')
          {this.operationAux.rib=parseInt(this.fraisEnregistrement.RIB)}
        this.typeOperationService.typeOperationByNumero('120').subscribe((data) => {
          this.operationAux.typeOperation =data;})
      
        this.operationAux.natureAuxiliaire=this.fraisEnregistrement.natureAuxiliaire;
        
        if(this.fraisEnregistrement.numeroAffaire){
          this.operationAux.numAffaireCTX=this.fraisEnregistrement.numeroAffaire;}
          if(this.fraisEnregistrement.montantHonoraire){
            this.operationAux.mntHonoraire=this.fraisEnregistrement.montantHonoraire;
          }
          if(this.fraisEnregistrement.typeAuxiliaire){
            this.operationAux.typeAuxiliaire=this.fraisEnregistrement.typeAuxiliaire;
          }
          if (this.fraisEnregistrement.nomBeneficiaire && this.fraisEnregistrement.typePaiment=='Chèque BCT')
            {this.operationAux.nomBeneficiaire=this.fraisEnregistrement.nomBeneficiaire;}
          //conventionne
          if(this.fraisEnregistrement.natureAuxiliaire=="Conventionné"){
            this.operationAux.auxiliaire=this.fraisEnregistrement.auxiliaire;
          }
          //non conventionne
          if(this.fraisEnregistrement.natureAuxiliaire=="Non Conventionné"){
            this.operationAux.nomAuxiliaire=this.fraisEnregistrement.nomAuxiliaire;
            this.operationAux.rneAuxiliaire=this.fraisEnregistrement.RneAuxiliaire;
            this.operationAux.prenomAuxiliaire=this.fraisEnregistrement.prenomAuxiliaire;
            if(this.fraisEnregistrement.cinAuxiliaire){
              this.operationAux.cinAuxiliaire=this.fraisEnregistrement.cinAuxiliaire;}
          }
          forkJoin([
          this.sharedService.typePaiment(this.fraisEnregistrement.typePaiment),
          this.sharedService.dossier(this.numDossier)
        ]).subscribe(([typePaimentData, dossierData]) => {
          this.operationAux.typePaiments = typePaimentData;
          this.operationAux.dossierDebiteur = dossierData;
          this.fraisGenerauxService.submitFormAux(this.operationAux).subscribe(
            (response) => {
              console.log('Frais ajouté avec succès:', response);
              console.log(this.operationAux);
              this.resetForm();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Ajouté avec succès",
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                window.location.reload();
              });
            },
            (error) => {
              console.error('Erreur lors de l\'ajout des frais:', error);
              Swal.fire({
                title: 'Error!',
                text: 'tu veux ressayer',
                icon: 'error',
                confirmButtonText: 'oui'
              })
          
            }
          );
        });
      }
    


      // not Auxiliaire
      this.operationNonAux.dateOperation=new Date();
      if(this.fraisEnregistrement.typeFrais!='Auxiliaire'){
        this.dateService.getCurrentDate().subscribe((data)=>{
          this.operationNonAux.dateAjout=data;
        })
        this.operationNonAux.etatOperation="E";
        if(this.fraisEnregistrement.montantFrais){
        this.operationNonAux.mntFrais=this.fraisEnregistrement.montantFrais;}
        this.operationNonAux.typeFrais=this.fraisEnregistrement.typeFrais;
        this.operationNonAux.matriculeAjout=this.matricule;
        this.operationNonAux.dateValeurCTX=this.fraisEnregistrement.dateOperation;
        if (this.fraisEnregistrement.RIB && this.fraisEnregistrement.typePaiment=='Virement Tétécomponsé')
          {this.operationNonAux.rib=parseInt(this.fraisEnregistrement.RIB)}
        this.typeOperationService.typeOperationByNumero('120').subscribe((data) => {
          this.operationNonAux.typeOperation =data;})
        if (this.fraisEnregistrement.typePiece!='Autres'){
          this.operationNonAux.typePiece=this.fraisEnregistrement.typePiece;
        }
        if (this.fraisEnregistrement.typePiece=='Autres'){
          this.operationNonAux.typePiece=this.fraisEnregistrement.autre;
          this.option.typePiece=this.operationNonAux.typePiece;
          this.sharedService.addDiversOptions(this.option).subscribe((data)=>{});
        }
        if (this.fraisEnregistrement.nomBeneficiaire)
          {this.operationNonAux.nomBeneficiaire=this.fraisEnregistrement.nomBeneficiaire;}
        if(this.fraisEnregistrement.typePiece='Enregistrement'){
          if(this.fraisEnregistrement.numeroPiece){
          this.operationNonAux.numeroPiece=this.fraisEnregistrement.numeroPiece;}}
          forkJoin([
            this.sharedService.typePaiment(this.fraisEnregistrement.typePaiment),
            this.sharedService.dossier(this.numDossier)
          ]).subscribe(([typePaimentData, dossierData]) => {
            this.operationNonAux.typePaiments = typePaimentData;
            this.operationNonAux.dossierDebiteur = dossierData;
            this.fraisGenerauxService.submitFormNonAux(this.operationNonAux).subscribe(
              (response) => {
                console.log('Frais ajouté avec succès:', response);
                console.log(this.operationNonAux);
                this.resetForm();
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
                Swal.fire({
                  title: 'Error!',
                  text: 'tu veux ressayer',
                  icon: 'error',
                  confirmButtonText: 'oui'
                })
            
              }
            );
          });
      }
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
