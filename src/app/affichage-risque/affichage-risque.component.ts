import { Component, Input, OnInit } from '@angular/core';
import { Risque } from '../Models/Risque';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-affichage-risque',
  templateUrl: './affichage-risque.component.html',
  styleUrls: ['./affichage-risque.component.scss']
})
export class AffichageRisqueComponent implements OnInit {
  dataSource: MatTableDataSource<Risque> = new MatTableDataSource<Risque>();
  @Input() risquesData: Risque[] | null = null;

  ngOnInit() {
    if (this.risquesData) {
      this.dataSource.data = this.risquesData; // Update data source with input data
    }
  }
}
