import { Component } from '@angular/core';
import { OperationCTX } from '../Models/OperationCTX';
import { SharedServicesService } from '../services/shared-services.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { OperationService } from '../services/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation130',
  templateUrl: './validation130.component.html',
  styleUrls: ['./validation130.component.scss']
})
export class Validation130Component {
  operations: OperationCTX[] = [];
  selectedType: string = 'Auxiliaire';
  matricule!: string;

  constructor(private sharedService: SharedServicesService, private auth: AuthService, private operationService: OperationService) { }

  ngOnInit(): void {
    this.sharedService.listeOperations('130').subscribe((data) => {
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
      console.log(this.matricule);
      this.operationService.updateOperationCTX(operationId, this.matricule, new Date(),'V').subscribe((data)=>{
        console.log(data);
        this.refreshOperationsList();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "accepté avec succès",
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }
  
  rejeterOperation(operationId?:number) {
    if (operationId !== undefined) {
      this.operationService.updateOperationCTX(operationId, this.matricule, new Date(),'R').subscribe((data)=>{
        console.log(data);
        this.refreshOperationsList();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Refusé avec succès",
          showConfirmButton: false,
          timer: 1500
        });
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
