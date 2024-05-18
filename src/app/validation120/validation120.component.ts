import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { FraisGenerauxAux } from '../Models/FraisGenerauxAux';
import { FraisGenerauxNonAux } from '../Models/FraisGenerauxNonAux';
import { FraisGenerauxService } from '../services/frais-generaux.service';
import { Risque } from '../Models/Risque';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-validation120',
  templateUrl: './validation120.component.html',
  styleUrls: ['./validation120.component.scss']
})
export class Validation120Component {
  selectedType: string = 'Auxiliaire';
  matricule!: string;
  operationAux: FraisGenerauxAux[]=[];
  operationNonAux: FraisGenerauxNonAux[]=[];
  risques!:Risque[];
  risqueSelected:Risque={} as Risque;
  onRisqueSelection:Boolean=false;
  constructor(
    private auth: AuthService, 
    private operationGerneralService:FraisGenerauxService,
    private risqueService:SharedServicesService
) { }

  ngOnInit(): void {  
    this.operationGerneralService.listValidationAux().subscribe((data) => {
      this.operationAux = data.filter(operation => operation.etatOperation === 'E');
    });  
    this.operationGerneralService.listValidationNonAux().subscribe((data) => {
      this.operationNonAux = data.filter(operation => operation.etatOperation === 'E');
    });  


    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }
  

  approuverOperation(operationId?: number, typeOperation?: string) {
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
            if (typeOperation === "Auxiliaire") {
              this.operationGerneralService.updateOperationAux(operationId, this.matricule,new Date(), 'V',this.risqueSelected).subscribe((data) => {
                this.refreshOperationsListAux();
              });
            }
            if (typeOperation !== "Auxiliaire") {
              this.operationGerneralService.updateOperationNonAux(operationId, this.matricule,new Date(), 'V',this.risqueSelected).subscribe((data) => {
                this.refreshOperationsListNonAux();
              });
            }
          });
        }
      });
    }

    
  }
  
  
  rejeterOperation(operationId?:number, typeOperation?: string) {
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
              if(typeOperation=="Auxiliaire"){
              this.operationGerneralService.updateOperationAux(operationId, this.matricule, new Date(),'R',this.risqueSelected).subscribe((data)=>{this.refreshOperationsListAux();});
              }
              if(typeOperation!="Auxiliaire"){
              this.operationGerneralService.updateOperationNonAux(operationId, this.matricule, new Date(),'R',this.risqueSelected).subscribe((data)=>{this.refreshOperationsListNonAux();});
              }
            });
          }
        });
      
    }
  }
  
  private refreshOperationsListAux() {
    this.operationGerneralService.listValidationAux().subscribe((data) => {
      this.operationAux = data.filter(operation => operation.etatOperation === 'E');
      console.log(this.operationAux);
    });  }
    private refreshOperationsListNonAux() {
    this.operationGerneralService.listValidationNonAux().subscribe((data) => {
      this.operationNonAux = data.filter(operation => operation.etatOperation === 'E');
      console.log(this.operationNonAux);
    });
  }

  onRisqueSelectionTrue(){
    this.onRisqueSelection=true;
    
    console.log(this.onRisqueSelection)
  }
  onRisqueSelectionFalse(numCtx?:number){
    this.onRisqueSelection=false;
    this.risqueSelected={} as Risque;
    console.log(numCtx)
    if(numCtx){this.risqueService.risques(numCtx).subscribe((data)=>
      {
        this.risques=data;
      })}

  }
  affectationRisque(risque:Risque){
    this.risqueSelected=risque;
  }
  
}
