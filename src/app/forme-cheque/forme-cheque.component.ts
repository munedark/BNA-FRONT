import { Component, Input, OnInit } from '@angular/core';
import { AgenceBank } from '../Models/AgenceBank';
import { AgencesService } from '../services/agences.service';
import { Cheque } from '../Models/Cheque';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { SharedServicesService } from '../services/shared-services.service';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { ChequeService } from '../services/cheque.service';
import { OperationCheque } from '../Models/OperationCheque';
import { DateService } from '../services/date.service';
import { DossierDebiteur } from '../Models/DossierDebiteur';
import { TypeOperationService } from '../services/type-operation.service';

@Component({
  selector: 'app-forme-cheque',
  templateUrl: './forme-cheque.component.html',
  styleUrls: ['./forme-cheque.component.scss']
})
export class FormeChequeComponent implements OnInit {
  @Input() numCtx!: number;
  agences!: AgenceBank[];
  cheque: Cheque = {
    numCheque: null,
    mntCheque: null,
    ribDonneur: '',
    agenceCheque: {} as AgenceBank,
    motif: ''
  };
  emplacement!: string;
  matricule!: string;
  operation: OperationCheque = {} as OperationCheque;
  idAgence!: number;
  dossier!:DossierDebiteur;
  constructor(private agence: AgencesService,
              private auth: AuthService,
              private sharedService: SharedServicesService,
              private chequeService: ChequeService,
              private dateService:DateService,
              private typeOperationService:TypeOperationService
          ) { }

  ngOnInit(): void {
    this.agence.Agences().subscribe((data) => {
      this.agences = data;
    });
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  submitForm() {
    this.dateService.getCurrentDate().subscribe((data)=>{
      this.operation.dateAjout=data;
    })
    this.operation.etatOperation = "E";
    this.operation.matriculeAjout = this.matricule;
    this.operation.dateOperation= new Date();
    this.typeOperationService.typeOperationByNumero('210').subscribe((data) => {
      this.operation.typeOperation = data;

      forkJoin([
        this.sharedService.dossier(this.numCtx),
        this.agence.agenceById(this.idAgence),
      ]).subscribe(([dossierData, agence]) => {
        this.operation.dossierDebiteur = dossierData;

        
        this.cheque.agenceCheque.nomAgence = agence.nomAgence;
        this.cheque.agenceCheque.idAgence = agence.idAgence;
        this.chequeService.saveCheque(this.cheque).subscribe((savedCheque) => {
          this.operation.cheque = savedCheque;

          this.chequeService.submitForm(this.operation).subscribe(
            (response) => {
              console.log('Chèque ajouté avec succès:', response);
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
            }
          );
        });
      });
    });
  }

  resetForm() {
    this.cheque.numCheque = null;
    this.cheque.mntCheque = null;
    this.cheque.ribDonneur = '';
    this.cheque.agenceCheque = {} as AgenceBank;
    this.cheque.motif = '';
  }
}
