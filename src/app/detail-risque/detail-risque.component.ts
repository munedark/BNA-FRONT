import { Component, Input } from '@angular/core';
import { Risque } from '../Models/Risque';

@Component({
  selector: 'app-detail-risque',
  templateUrl: './detail-risque.component.html',
  styleUrls: ['./detail-risque.component.scss']
})
export class DetailRisqueComponent {
  @Input() risque!:Risque;

}
