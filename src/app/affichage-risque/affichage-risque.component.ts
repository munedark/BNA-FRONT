import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Risque } from '../Models/Risque';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-affichage-risque',
  templateUrl: './affichage-risque.component.html',
  styleUrls: ['./affichage-risque.component.scss']
})
export class AffichageRisqueComponent implements OnInit {
  dataSource: MatTableDataSource<Risque> = new MatTableDataSource<Risque>();
  @Input() risquesData: Risque[] | null = null;
  displayedColumns: string[] = ['id', 'mntFrais', 'soldeRisque', 'mntEntreePrincipale'];
  @Input() debiteurData: any
  @ViewChild('modal') modalContent!: TemplateRef<any>; // ViewChild to get a reference to the modal content

  risque: Risque | null = null; // Property to hold the selected risque data

  constructor(private modalService: NgbModal ) {}

  ngOnInit() {
    if (this.risquesData) {
      this.dataSource.data = this.risquesData;
    }
  }

  openModal(risque: Risque) {
    this.risque = risque; 
   
  }

  handleRowClick(row: Risque) {
    this.openModal(row);
  }



}
