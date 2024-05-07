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
import { FraisInitiesService } from '../services/frais-inities.service';
import { OperationFraisInities } from '../Models/OperationFraisInities';

@Component({
  selector: 'app-forme-frais-inities-contentieux',
  templateUrl: './forme-frais-inities-contentieux.component.html',
  styleUrls: ['./forme-frais-inities-contentieux.component.scss']
})
export class FormeFraisInitiesContentieuxComponent implements OnInit{
  @Input() risque!:Risque;
  @Input() numCtx!:number;
  diversPieces$ = new BehaviorSubject<DiversPiece[]>([]);
  operation:OperationFraisInities={} as OperationFraisInities;
  option:DiversPiece={} as DiversPiece;
  matricule!:string;
  avocats!:Avocat[];
  huissiers!:Huissier[];
  experts!:Expert[];

  constructor(private sharedService:SharedServicesService,private auth: AuthService,private auxiliaireService:AuxiliaireConvontionnéService,private fraisInitiesService:FraisInitiesService){
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
    if(this.fraisEnregistrement.numeroPiece){
    this.operation.numeroPiece=this.fraisEnregistrement.numeroPiece;}
    this.operation.typePiece=this.fraisEnregistrement.typePiece
    this.operation.etatOperation="E";
    if(this.fraisEnregistrement.montantFrais){
      this.operation.mntFrais=this.fraisEnregistrement.montantFrais;
    }
    this.operation.typeFrais=this.fraisEnregistrement.typeFrais;
    this.operation.matriculeAjout=this.matricule;
    this.operation.dateValeurCTX=this.fraisEnregistrement.dateOperation;
    this.sharedService.typeOperation('110').subscribe((data) => {
      this.operation.typeOperation =data;
      this.operation.matriculeEmploye=this.fraisEnregistrement.matriculeEmploye;
      this.operation.risque=this.risque;

      forkJoin([

        this.sharedService.dossier(this.numCtx)
      ]).subscribe(([ dossierData]) => {
        
        this.operation.dossierDebiteur = dossierData;

        this.fraisInitiesService.submitForm(this.operation).subscribe(
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
    this.fraisEnregistrement = { 
      typeFrais: '',
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
      numeroPiece:null
    };
  }
}
