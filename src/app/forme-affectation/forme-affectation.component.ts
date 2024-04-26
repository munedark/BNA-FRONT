import { Component, Input } from '@angular/core';
import { Risque } from '../Models/Risque';
import { AuthService } from '../services/auth.service';
import { SharedServicesService } from '../services/shared-services.service';
import { formeAffectation } from '../Models/formeAffectation';

@Component({
  selector: 'app-forme-affectation',
  templateUrl: './forme-affectation.component.html',
  styleUrls: ['./forme-affectation.component.scss']
})
export class FormeAffectationComponent {
    @Input() risque!: Risque;
    @Input() numCtx!: number;
    formeAffectation: formeAffectation = {} as formeAffectation;
    
    constructor(private sharedService: SharedServicesService, private auth: AuthService) {}
    
    ngOnInit(): void {
        this.formeAffectation.nouveauSolde = this.risque.mntEntreePrincipale;
    }

    updateNouveauSolde() {
        if (this.formeAffectation.montantPrincpale && this.risque.mntEntreePrincipale) {
            this.formeAffectation.nouveauSolde = this.risque.mntEntreePrincipale - this.formeAffectation.montantPrincpale;
        }
    }

    submitForm() {
        // Handle form submission if needed
    }
}
