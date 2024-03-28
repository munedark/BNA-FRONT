// Inside affichage-risque.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Risque } from '../Models/Risque';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';

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
    this.dialog.open(UserFormComponent, {
      data: { id: risque.id }
    });
  }
  handleRowClick(row: Risque) {
    console.log('Row clicked in parent component:', row.id);
    
  }
  
}
