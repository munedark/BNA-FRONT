import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { virement } from '../Models/virement';
import { VirementService } from '../services/virement.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { OperationCTX } from '../Models/OperationCTX';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { SharedServicesService } from '../services/shared-services.service';
import Swal from 'sweetalert2';

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
  operation: OperationCTX = {} as OperationCTX;
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
  ) {}

  ngOnInit() {
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

    this.virementService.submitted$.subscribe(submitted => { 
      this.submitted = submitted;
    });
  }

  openModal(virement: virement) {
    this.virement = virement; 
    console.log(virement);
    console.log(virement.dateOperation);
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

    this.sharedService.typeOperation('220').subscribe((data) => {
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
