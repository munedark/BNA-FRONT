import { Component } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { OperationCTX } from '../Models/OperationCTX';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { OperationService } from '../services/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation120',
  templateUrl: './validation120.component.html',
  styleUrls: ['./validation120.component.scss']
})
export class Validation120Component {
  operations: OperationCTX[] = [];
  selectedType: string = 'Auxiliaire';
  matricule!: string;

  constructor(private sharedService: SharedServicesService, private auth: AuthService, private operationService: OperationService) { }

  ngOnInit(): void {
    this.sharedService.listeOperations('120').subscribe((data) => {
      this.operations = data.filter(operation => operation.etatOperation === 'E');
      console.log(this.operations);
    });
  
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
            text: "L'opération a été approuver.",
            icon: "success"
          }).then(() => {
            this.operationService.updateOperationCTX(operationId, this.matricule, new Date(),'V').subscribe((data)=>{this.refreshOperationsList();});
          });
        }
      });
    
  }
  }
  
  rejeterOperation(operationId?:number) {
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
              this.operationService.updateOperationCTX(operationId, this.matricule, new Date(),'R').subscribe((data)=>{this.refreshOperationsList();});
            });
          }
        });
      
    }
  }
  
  private refreshOperationsList() {
    this.sharedService.listeOperations('120').subscribe((data) => {
      this.operations = data.filter(operation => operation.etatOperation === 'E');
      console.log(this.operations);
    });
  }
  
}
