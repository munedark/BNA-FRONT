import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { virement } from '../Models/virement';
import { VirementService } from '../services/virement.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forme-virment',
  templateUrl: './forme-virment.component.html',
  styleUrls: ['./forme-virment.component.scss']
})
export class FormeVirmentComponent implements OnInit {
  dataSource: MatTableDataSource<virement> = new MatTableDataSource<virement>();
  displayedColumns: string[] = ['numVirement', 'dateOperation', 'montantVirement', 'ribBeneficiaire', 'nomDonneur', 'ribDonneur', 'motif'];
  virement: virement = { // Initialize virement here
    idVirement: 0,
    numVirement: 0,
    dateOperation: new Date(),
    nomBeneficiaire: '',
    ribBeneficiaire: '',
    montantVirement: 0,
    motif: '',
    nomDonneur: '',
    ribDonneur: ''
  };

  constructor(private virementService: VirementService) {}

  ngOnInit() {
    this.virementService.selectedDate$.subscribe(data => {
      if (data) {
        this.dataSource.data = data;
      }
    });
  }

  openModal(virement: virement) {
    this.virement = virement; 
    console.log(virement);
    console.log(virement.dateOperation);
  }

  handleRowClick(row: virement) {
    this.openModal(row);
  }  
}

//     debiteurData!: DebiteurInfo;


  
    // idRisque:number=0;
    // risque!: Risque ; 
  
    // constructor(private modalService: NgbModal, private virementService:VirementService ) {}
  

  

  


  

