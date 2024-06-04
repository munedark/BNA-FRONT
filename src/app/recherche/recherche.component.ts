import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { Risque } from '../Models/Risque';
import { RisqueService } from '../services/risque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent {
  numCtx: number | undefined;
  debiteurData: DebiteurInfo | null = null;
  risquesData: Risque[] | any = null; 
  @Input() isClotureRisque:boolean=false;
  @Output() debiteurDataChange: EventEmitter<DebiteurInfo | null> = new EventEmitter<DebiteurInfo | null>();
  @Output() risques: EventEmitter<Risque[] | null> = new EventEmitter<Risque[] | null>();
  @Output() numCTX: EventEmitter<number>=new EventEmitter<number>();
  constructor(private sharedService: SharedServicesService,private risqueService:RisqueService) { }

  search() {
    if (this.numCtx) {
      this.sharedService.recherche(this.numCtx).subscribe(data => {
        this.debiteurData = data;
        if (!this.debiteurData) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Aucun dossier débiteur trouvé.",
            showConfirmButton: true,
            confirmButtonText: 'OK'
          });
          return;
        }
        this.debiteurDataChange.emit(this.debiteurData);
        this.numCTX.emit(this.numCtx);
        this.risque();
      });
    }
  }

  risque() {
    if (this.numCtx && !this.isClotureRisque) {
      this.sharedService.risques(this.numCtx).subscribe(data => {
        this.risquesData = data;
        this.risques.emit(this.risquesData);
      });
    }
    if (this.numCtx && this.isClotureRisque) {
      this.risqueService.risqueNull().subscribe(data => {
        this.risquesData = data;
        this.risques.emit(this.risquesData);
      });
    }
  }
}
