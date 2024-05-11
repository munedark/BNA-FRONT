import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { OperationService } from '../services/operation.service';
import Swal from 'sweetalert2';
import { DateService } from '../services/date.service';
import { OperationFraisInities } from '../Models/OperationFraisInities';
import { FraisInitiesService } from '../services/frais-inities.service';

@Component({
  selector: 'app-validation110',
  templateUrl: './validation110.component.html',
  styleUrls: ['./validation110.component.scss']
})
export class Validation110Component implements OnInit {
  selectedType: string = 'Auxiliaire';
  operations: OperationFraisInities[] = [];
  matricule!: string;
  decline: boolean = false;
  date!:Date;
  constructor(private sharedService: SharedServicesService,
    private auth: AuthService, 
    private operationService: OperationService,
    private dateService:DateService,
    private fraisInitiesService:FraisInitiesService
    ) { }

  ngOnInit(): void {
    this.fraisInitiesService.listValidation().subscribe((data) => {
      this.operations = data.filter(operation => operation.etatOperation === 'E')});
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
            this.fraisInitiesService.updateOperation(operationId, this.matricule, this.date, 'V').subscribe((data) => { this.refreshOperationsList(); });
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
            this.fraisInitiesService.updateOperation(operationId, this.matricule, this.date, 'R').subscribe((data) => { this.refreshOperationsList(); });
          });
        }
      });
    }
  }
  private refreshOperationsList() {
    this.fraisInitiesService.listValidation().subscribe((data) => {
      this.operations = data.filter(operation => operation.etatOperation === 'E');
      console.log(this.operations);
    });
  }
  
}
