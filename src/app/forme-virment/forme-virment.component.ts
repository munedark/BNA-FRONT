import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { virement } from '../Models/virement';
import { VirementService } from '../services/virement.service';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { SharedServicesService } from '../services/shared-services.service';
import Swal from 'sweetalert2';
import { TypeOperationService } from '../services/type-operation.service';
import { OperationVirement } from '../Models/OperationVirement';
import { DateService } from '../services/date.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-forme-virment',
  templateUrl: './forme-virment.component.html',
  styleUrls: ['./forme-virment.component.scss']
})
export class FormeVirmentComponent implements OnInit {
  dataSource: MatTableDataSource<virement> = new MatTableDataSource<virement>();
  displayedColumns: string[] = ['numVirement', 'dateOperation', 'montantVirement', 'ribBeneficiaire', 'nomDonneur', 'ribDonneur', 'motif'];
  virement: virement = { 
    idVirement: 0,
    numVirement: 0,
    dateOperation: new Date(),
    nomBeneficiaire: '',
    ribBeneficiaire: '',
    montantVirement: 0,
    motif: '',
    nomDonneur: '',
    ribDonneur: '',
    validation:''
  };
  operation: OperationVirement = {} as OperationVirement;
  debiteurData: DebiteurInfo | null = null;
  numCtx!: number;
  isDebiteurComponent: boolean = true;
  matricule!: string;
  submitted: boolean = false; 
  date!:Date;

  constructor(
    private virementService: VirementService,
    private auth: AuthService,
    private sharedService: SharedServicesService,
    private typeOperationService:TypeOperationService,
    private dateService:DateService
  ) {}

  ngOnInit() {
    this.virementService.refreshData();
    this.virementService.selectedDate$.subscribe(data => {
      if (data) {
        this.dataSource.data = data;
      }

    });
    
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }

  
  }

  openModal(virement: virement) {
    this.virement = virement; 
  }

  handleRowClick(row: virement) {
    this.openModal(row);
    this.debiteurData = null;
  }  

  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
  }

  onNumCtxReceived(numCTX: number) {
    this.numCtx = numCTX;
  }

  submit(virement: virement) {
    this.operation.etatOperation = "V";
    this.operation.matriculeAjout = this.matricule;
    this.operation.matriculeValidateur = this.matricule;
    this.dateService.getCurrentDate().subscribe((data)=>
    {this.operation.dateOperation=data;
    })
    this.operation.dateAjout=new Date();
    this.operation.dateValidation=new Date();
    
    this.typeOperationService.typeOperationByNumero('220').subscribe((data) => {
      this.operation.typeOperation = data;

      this.sharedService.dossier(this.numCtx).subscribe((dossierData) => {
        this.operation.dossierDebiteur = dossierData;
        this.operation.virementTelecomponse = virement;

        this.virementService.updateVirement(this.operation).subscribe(
          (response) => {
            console.log('virement validé avec succès:', response);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "validé avec succès",
              showConfirmButton: false,
              timer: 1500
            });
            this.debiteurData = null;
            this.virement.validation = 'validé'; 
          },
          (error) => {
            console.error('Erreur lors de validation:', error);
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du virement:', error);
      });
    });
  }
}
