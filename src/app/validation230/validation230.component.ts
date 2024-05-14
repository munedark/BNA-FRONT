import { Component } from '@angular/core';
import { OperationCTX } from '../Models/OperationCTX';
import { SharedServicesService } from '../services/shared-services.service';
import { AuthService } from '../services/auth.service';
import { OperationService } from '../services/operation.service';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation230',
  templateUrl: './validation230.component.html',
  styleUrls: ['./validation230.component.scss']
})
export class Validation230Component {
  selectedType: string = 'Auxiliaire';
  operations: OperationCTX[] = [];
  matricule!: string;


  constructor(private sharedService: SharedServicesService, private auth: AuthService, private operationService: OperationService) { }

  ngOnInit(): void {
    this.sharedService.listeOperations('210').subscribe((data) => {
      this.operations = data.filter(operation => operation.etatOperation === 'E')});
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  approuverOperation(operationId?: number) {
    if (operationId !== undefined) {
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
            this.operationService.updateOperationByCheque(operationId, this.matricule, new Date(), 'V').subscribe((data) => { this.refreshOperationsList(); });
          });
        }
      });
    }
  }

  rejeterOperation(operationId?: number) {
    if (operationId !== undefined) {
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
            // this.operationService.updateOperationCTX(operationId, this.matricule, new Date(), 'R').subscribe((data) => { this.refreshOperationsList(); });
          });
        }
      });
    }
  }

  private refreshOperationsList() {
    this.sharedService.listeOperations('210').subscribe((data) => {
      this.operations = data.filter(operation => operation.etatOperation === 'E');
      console.log(this.operations);
    });
  }
  
}
