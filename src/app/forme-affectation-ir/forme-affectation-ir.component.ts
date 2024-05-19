import { Component, Input } from '@angular/core';
import { Risque } from '../Models/Risque';
import { FormeAffectation } from '../Models/FormeAffectation';
import { OperationAffectation } from '../Models/OperationAffectaion';
import { SharedServicesService } from '../services/shared-services.service';
import { TypeOperationService } from '../services/type-operation.service';
import { FormeAffectationService } from '../services/forme-affectation.service';
import { AuthService } from '../services/auth.service';
import { DateService } from '../services/date.service';
import { jwtDecode } from 'jwt-decode';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { DossierDebiteur } from '../Models/DossierDebiteur';
import { data } from 'jquery';

@Component({
  selector: 'app-forme-affectation-ir',
  templateUrl: './forme-affectation-ir.component.html',
  styleUrls: ['./forme-affectation-ir.component.scss']
})
export class FormeAffectationIrComponent {
  @Input() risque!: Risque;
  @Input() numCtx!: number;
  dossier: DossierDebiteur = {} as DossierDebiteur;
  matricule!: string;
  formeAffectation: FormeAffectation = {
    idAffectation: 0,
    typeRecouvrement: '',
    mntAffectationPrincipale: 0,
    dateAffectation: null,
    nouveauSolde: 0
  } as FormeAffectation;
  operation: OperationAffectation = {} as OperationAffectation;

  constructor(private sharedService: SharedServicesService,
              private auth: AuthService,
              private affectationService: FormeAffectationService,
              private typeOperationService: TypeOperationService,
              private dateService: DateService) { }

  ngOnInit(): void {
    this.sharedService.dossier(this.numCtx).subscribe((data) => {
      this.dossier = data;
    })
    this.formeAffectation.nouveauSolde = this.dossier?.soldeRecouvrement;
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  updateNouveauSolde() {
    if (this.formeAffectation.mntAffectationPrincipale && this.dossier.soldeRecouvrement) {
      this.formeAffectation.nouveauSolde = this.dossier.soldeRecouvrement - this.formeAffectation.mntAffectationPrincipale;
    }
  }

  validateMontantPrincipale(): boolean {
    return this.formeAffectation.mntAffectationPrincipale <= this.risque.ir && this.formeAffectation.mntAffectationPrincipale<= this.dossier.soldeRecouvrement;
  }

  submitForm(risque: Risque) {
    if (!this.validateMontantPrincipale()) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Le montant de l'affectation en principal ne doit pas dépasser le montant IR du risque ou le solde de recouvrement.",
        showConfirmButton: true
      });
      return;
    }

    this.formeAffectation.typeAffectation = 'IR';
    this.operation.etatOperation = "E";
    this.operation.matriculeAjout = this.matricule;
    this.dateService.getCurrentDate().subscribe((data) => {
      this.operation.dateOperation = data;
    })
    this.operation.dateAjout = new Date();
    this.typeOperationService.typeOperationByNumero('230').subscribe((data) => {
      this.operation.typeOperation = data;
      this.operation.risque = risque;
      this.operation.dossierDebiteur = this.dossier;

      this.affectationService.addForme(this.formeAffectation).subscribe((data) => {
        this.operation.formeAffectation = data;

        this.affectationService.submitForm(this.operation).subscribe(
          (response) => {
            console.log('Affectation ajouté avec succès:', response);
            this.resetForm();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "ajouté avec succès",
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.error('Erreur lors de l\'ajout des forme:', error);
          }
        );
      });
    });
  }

  resetForm() {
    this.formeAffectation.typeRecouvrement = '';
    this.formeAffectation.mntAffectationPrincipale = 0;
    this.formeAffectation.dateAffectation = null;
    this.formeAffectation.nouveauSolde = 0;
  }
}
