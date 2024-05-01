import { Component, OnInit } from '@angular/core';
import { DebiteurInfo } from '../Models/DebiteurInfo';
import { AgencesService } from '../services/agences.service';
import { AgenceBank } from '../Models/AgenceBank';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent {

  debiteurData: DebiteurInfo | null = null;

  numCtx!:number;
  isDebiteurComponent: boolean = true;
constructor(){}
  onDebiteurDataReceived(data: DebiteurInfo | null) {
    this.debiteurData = data;
  }


  onNumCtxReceived(numCTX:number){
    this.numCtx=numCTX;
  }
}
