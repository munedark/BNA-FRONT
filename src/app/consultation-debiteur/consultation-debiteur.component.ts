import { Component, OnDestroy, OnInit } from '@angular/core';
import { DossierDebiteur } from '../Models/DossierDebiteur';
import { SharedServicesService } from '../services/shared-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConsDebiteur } from '../Models/ConsDebiteur';

@Component({
  selector: 'app-consultation-debiteur',
  templateUrl: './consultation-debiteur.component.html',
  styleUrls: ['./consultation-debiteur.component.scss']
})
export class ConsultationDebiteurComponent implements OnInit, OnDestroy {
  listeDebiteurs: ConsDebiteur[] = []; // Initialize the array
  dataSource: MatTableDataSource<ConsDebiteur> = new MatTableDataSource<ConsDebiteur>();
  displayedColumns: string[] = ['numero_dossier','nom', 'prenom','cin','solde_recouvrement','etat_Ctx','date_Transfert'];

  constructor(private sharedService: SharedServicesService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.sharedService.listeDebiteurs().subscribe((data: DossierDebiteur[]) => {
      this.listeDebiteurs = data.map(element => ({
        numero_dossier:element.dossierId.numCtx,
        cin:element.compteBancaire.client.cin,
        nom: element.compteBancaire.client.nom,
        prenom: element.compteBancaire.client.prenom,
        solde_recouvrement: element.soldeRecouvrement,
        etat_Ctx: element.etat_CTX ? 'ouvert' : 'fermé', // Convert boolean to string
        date_Transfert: element.dateTransfert
      }));
      

      this.dataSource.data = this.listeDebiteurs; 
    });
  }
}
