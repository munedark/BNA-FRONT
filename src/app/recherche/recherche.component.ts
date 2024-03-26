import { Component, Output, EventEmitter } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';
import { DebiteurInfo } from '../Models/DebiteurInfo';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent {
  numCtx: number | undefined;
  debiteurData: DebiteurInfo | null = null;
  @Output() debiteurDataChange: EventEmitter<DebiteurInfo | null> = new EventEmitter<DebiteurInfo | null>();

  constructor(private sharedService: SharedServicesService) { }

  search() {
    if (this.numCtx) {
      this.sharedService.recherche(this.numCtx).subscribe(data => {
        this.debiteurData = data;
        console.log(this.debiteurData);
        this.debiteurDataChange.emit(this.debiteurData);
      });
    }
  }
}
