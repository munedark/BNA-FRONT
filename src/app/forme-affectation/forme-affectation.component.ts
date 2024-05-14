import { Component, Input } from '@angular/core';
import { Risque } from '../Models/Risque';
import { AuthService } from '../services/auth.service';
import { SharedServicesService } from '../services/shared-services.service';
import { FormeAffectation } from '../Models/FormeAffectation';
import { OperationCTX } from '../Models/OperationCTX';
import { FormeAffectationService } from '../services/forme-affectation.service';
import { jwtDecode } from 'jwt-decode';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { OperationAffectation } from '../Models/OperationAffectaion';
import { TypeOperationService } from '../services/type-operation.service';

@Component({
    selector: 'app-forme-affectation',
    templateUrl: './forme-affectation.component.html',
    styleUrls: ['./forme-affectation.component.scss']
})
export class FormeAffectationComponent {
    @Input() risque!: Risque;
    @Input() numCtx!: number;
    matricule!: string;
    formeAffectation: FormeAffectation = {} as FormeAffectation;
    operation:OperationAffectation={} as OperationAffectation;
    constructor(private sharedService: SharedServicesService,
        private auth: AuthService,
        private affectationService:FormeAffectationService,
        private typeOperationService:TypeOperationService
        ) {}
    
    ngOnInit(): void {
        this.formeAffectation.nouveauSolde = this.risque?.mntEntreePrincipale;
        const token = this.auth.getToken();
    if (token) {
        const decodedToken: any = jwtDecode(token);
        this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
    }

    updateNouveauSolde() {
        if (this.formeAffectation.mntAffectationPrincipale && this.risque.mntEntreePrincipale) {
            this.formeAffectation.nouveauSolde = this.risque.mntEntreePrincipale - this.formeAffectation.mntAffectationPrincipale;
        }
    }

    submitForm(risque:Risque) {
    this.operation.etatOperation = "E";
    this.operation.matriculeAjout = this.matricule;

    this.typeOperationService.typeOperationByNumero('230').subscribe((data) => {
    this.operation.typeOperation = data;
    this.operation.risque=risque;
    forkJoin([
        this.sharedService.dossier(this.numCtx),
        this.affectationService.addForme(this.formeAffectation)
    ]).subscribe(([dossierData, data]) => {
        this.operation.dossierDebiteur = dossierData;
        this.operation.formeAffectation=data;
        

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
            console.error('Erreur lors de l\'ajout des frais:', error);
            }
        );
        });
    });
    }
    
    resetForm() {
        this.formeAffectation.typeRecouvrement='';
        this.formeAffectation.mntAffectationPrincipale=0;
        this.formeAffectation.mntFrais=0;
        this.formeAffectation.dateAffectation=null;
        this.formeAffectation.nouveauSolde=0;
    }
}
