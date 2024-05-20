import { Component, Input } from '@angular/core';
import { ClotureRisqueDto } from '../Models/ClotureRisqueDto';
import { AuthService } from '../services/auth.service';
import { TypeOperationService } from '../services/type-operation.service';
import { DateService } from '../services/date.service';
import { OperationService } from '../services/operation.service';
import { jwtDecode } from 'jwt-decode';
import { OperationVirement } from '../Models/OperationVirement';
import Swal from 'sweetalert2';
import { SharedServicesService } from '../services/shared-services.service';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-forme-risque-cloture',
  templateUrl: './forme-risque-cloture.component.html',
  styleUrls: ['./forme-risque-cloture.component.scss']
})
export class FormeRisqueClotureComponent {
  crd: ClotureRisqueDto = {} as ClotureRisqueDto;
  operation: OperationVirement = {} as OperationVirement;
  matricule!: string;
  date!: Date;
  typeCloture!: string;
  @Input() numCtx!: number;
  @Input() risque!: Risque;

  constructor(
    private auth: AuthService,
    private typeOperationService: TypeOperationService,
    private dateService: DateService,
    private operationService: OperationService,
    private sharedService: SharedServicesService
  ) {}

  ngOnInit() {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  
  submit() {
    this.operation.etatOperation = "V";
    this.operation.matriculeAjout = this.matricule;
    this.operation.matriculeValidateur = this.matricule;
    this.dateService.getCurrentDate().subscribe((data) => {
      this.operation.dateOperation = data;
    });
    this.operation.dateAjout = new Date();
    this.operation.dateValidation = new Date();
    this.risque.stade = '4- Cloturé';
    this.risque.typeCloture = this.typeCloture;

    this.typeOperationService.typeOperationByNumero('260').subscribe((data) => {
      this.operation.typeOperation = data;
      this.sharedService.dossier(this.numCtx).subscribe((dossierData) => {
        this.operation.dossierDebiteur = dossierData;
        this.crd.operation = this.operation;
        this.crd.risque = this.risque;
        this.operation.risque = this.risque;
        this.operationService.clotureRisque(this.crd).subscribe(
          (response) => {
            console.log('virement validé avec succès');
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Cloturé avec succès",
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              window.location.reload();
            });
          },
          (error) => {
            console.error('Erreur lors de validation:', error);
          }
        );
      });
    });
  }
}
