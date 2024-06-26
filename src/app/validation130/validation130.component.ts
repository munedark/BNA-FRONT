import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { OperationJugement } from '../Models/OperationJugement';
import { FraisJugementService } from '../services/frais-jugement.service';

@Component({
  selector: 'app-validation130',
  templateUrl: './validation130.component.html',
  styleUrls: ['./validation130.component.scss']
})
export class Validation130Component {
  operations:  OperationJugement[] = [];
  selectedType: string = 'Auxiliaire';
  matricule!: string;
  constructor(private jugementService:FraisJugementService, 
    private auth: AuthService ) { }

  ngOnInit(): void {
    this.jugementService.listValidation().subscribe((data) => {
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
    console.log(operationId)
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
            this.jugementService.updateOperationCTX(operationId, this.matricule,new Date(),'V').subscribe((data)=>{this.refreshOperationsList();});
          });
        }
      });
    
  }
  }
  
  rejeterOperation(operationId?:number) {
    console.log(operationId)
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
              this.jugementService.updateOperationCTX(operationId, this.matricule,new Date(),'R').subscribe((data)=>{this.refreshOperationsList();});
            });
          }
        });
      
    }
  }
  
  private refreshOperationsList() {
    this.jugementService.listValidation().subscribe((data) => {
      this.operations = data.filter(operation => operation.etatOperation === 'E');
      console.log(this.operations);
    });
  }
}
