// Inside affichage-risque.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Risque } from '../Models/Risque';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { FraisEnregistrementComponent } from '../frais-enregistrement/frais-enregistrement.component';


@Component({
  selector: 'app-affichage-risque',
  templateUrl: './affichage-risque.component.html',
  styleUrls: ['./affichage-risque.component.scss']
})
export class AffichageRisqueComponent implements OnInit {
  dataSource: MatTableDataSource<Risque> = new MatTableDataSource<Risque>();
  @Input() risquesData: Risque[] | null = null;
  displayedColumns: string[] = ['id', 'mntFrais', 'soldeRisque', 'mntEntreePrincipale'];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    if (this.risquesData) {
      this.dataSource.data = this.risquesData;
    }
  }

  openFormDialog(risque: Risque) {
    this.dialog.open(FraisEnregistrementComponent, {
      data: { risque } // Pass the selected risque object to the dialog
    });
  }
  handleRowClick(row: Risque) {
    console.log('Row clicked in parent component:', row.id);
    this.openFormDialog(row);
  }
  
}
