import { Component } from '@angular/core';
import { VirementService } from '../services/virement.service';

@Component({
  selector: 'app-recherche-date',
  templateUrl: './recherche-date.component.html',
  styleUrls: ['./recherche-date.component.scss']
})
export class RechercheDateComponent {
  date: string = '';

  constructor(private virementService: VirementService) { }

  search() {
    if (this.date) {
      this.virementService.virementByDate(this.date);
    }
  }
}
