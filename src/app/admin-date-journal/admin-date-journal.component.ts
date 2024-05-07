import { Component } from '@angular/core';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-admin-date-journal',
  templateUrl: './admin-date-journal.component.html',
  styleUrls: ['./admin-date-journal.component.scss']
})
export class AdminDateJournalComponent {

 
  constructor(
    private dateService: DateService
  ) { }
  date!:string;
  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }
  submit() {
    console.log(this.date);
    this.dateService.setDate(this.date).subscribe((data) => {
      window.location.reload();
    });
    
}
}
