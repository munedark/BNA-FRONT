import { Component, OnInit } from '@angular/core';
import { VirementService } from '../services/virement.service';

@Component({
  selector: 'app-recherche-date',
  templateUrl: './recherche-date.component.html',
  styleUrls: ['./recherche-date.component.scss']
})
export class RechercheDateComponent implements OnInit {
  date: string = '';
  formSubmitted: boolean = false;

  constructor(private virementService: VirementService) { }

  ngOnInit() {
    this.virementService.submitted$.subscribe(submitted => {
      this.formSubmitted = submitted;
    });
  }

  search() {
    if (this.date) {
      this.virementService.virementByDate(this.date);
      this.virementService.setSubmitted(this.formSubmitted); 
    }
  }
}
