import { Component, OnInit, ViewChild } from '@angular/core';
import { OperationCTX } from '../Models/OperationCTX';
import { SharedServicesService } from '../services/shared-services.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { MatStepper } from '@angular/material/stepper'; 

@Component({
  selector: 'app-validation110',
  templateUrl: './validation110.component.html',
  styleUrls: ['./validation110.component.scss']
})
export class Validation110Component implements OnInit {
  selectedType:string='Enregistrement';
  operations: OperationCTX[] = [];
  matricule!:string;
  decline:boolean=false;

  @ViewChild('stepper') stepper!: MatStepper; // Correct reference

  constructor(private sharedService:SharedServicesService,private auth: AuthService) { }

  ngOnInit(): void {
    this.sharedService.listeOperations('110').subscribe((data)=>{this.operations=data;});
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  approuverOperation() {
    this.stepper.next(); // Proceed to the next step
  }

  rejeterOperation() {
    this.decline = true;
    this.stepper.next(); // Proceed to the next step
  }
}
