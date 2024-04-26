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
  displayedColumns: string[] = ['id','produit', 'mntFrais', 'soldeRisque', 'mntEntreePrincipale'];
  @Input() debiteurData: any;
  @Input() numCtx!:number;
  @Input() isDebiteurComponent: boolean = false;
  @Input() isintiesComponent: boolean = false;
  @Input() isAffectationComponent:boolean =false;
  idRisque:number=0;
  risque!: Risque ; 

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
