  import { Component } from '@angular/core';
  import { OperationCTX } from '../Models/OperationCTX';
  import { SharedServicesService } from '../services/shared-services.service';
  import { AuthService } from '../services/auth.service';
  import { OperationService } from '../services/operation.service';
  import { jwtDecode } from 'jwt-decode';
  import Swal from 'sweetalert2';
  import { Operation } from '../Models/Operation';
  import { ChequeService } from '../services/cheque.service';
import { DateService } from '../services/date.service';

  @Component({
    selector: 'app-validation210',
    templateUrl: './validation210.component.html',
    styleUrls: ['./validation210.component.scss']
  })
  export class Validation210Component {
    operations: Operation[] = [];
    matricule!: string;
    date!:Date;

    constructor(private sharedService: SharedServicesService,    private dateService:DateService, private auth: AuthService, private operationService: OperationService,private chequeService :ChequeService) { }

    ngOnInit(): void {
      this.chequeService.findOperations().subscribe((data) => {
        this.operations = data});
      const token = this.auth.getToken();
      if (token) {
        const decodedToken: any = jwtDecode(token);
        this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
      }
    }

    approuverOperation(operationId?: number) {
      if (operationId !== undefined) {
        this.dateService.getCurrentDate().subscribe((data)=>{
          this.date=data;
        })
        Swal.fire({
          title: "Êtes-vous sûr ?",
          text: "Vous ne pourrez pas annuler cela !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, approuver l'opération"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Approuver!",
              text: "L'opération a été approuvée.",
              icon: "success"
            }).then(() => {
              this.operationService.updateOperationByCheque(operationId, this.matricule, this.date, 'V').subscribe((data) => { this.refreshOperationsList(); });
            });
          }
        });
      }
    }

    rejeterOperation(operationId?: number) {
      if (operationId !== undefined) {
        this.dateService.getCurrentDate().subscribe((data)=>{
          this.date=data;
        })
        Swal.fire({
          title: "Êtes-vous sûr ?",
          text: "Vous ne pourrez pas annuler cela !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, rejeter l'opération"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Rejeter!",
              text: "L'opération a été rejetée.",
              icon: "success"
            }).then(() => {
              this.operationService.updateOperationByCheque(operationId, this.matricule, this.date, 'R').subscribe((data) => { this.refreshOperationsList(); });
            });
          }
        });
      }
    }

    private refreshOperationsList() {
      this.chequeService.findOperations().subscribe((data) => {
        this.operations = data;
      });
    }
    
  }
