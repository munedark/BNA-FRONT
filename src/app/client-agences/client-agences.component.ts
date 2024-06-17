import { Component, OnInit } from '@angular/core';
import { AgencesService } from '../services/agences.service';
import { AgenceBank } from '../Models/AgenceBank';

@Component({
  selector: 'app-client-agences',
  templateUrl: './client-agences.component.html',
  styleUrls: ['./client-agences.component.scss']
})
export class ClientAgencesComponent implements OnInit{
  agences!:AgenceBank[];
constructor(private agenceService:AgencesService){}
  ngOnInit(): void {
    this.agenceService.Agences().subscribe((data)=>{
      this.agences=data;
    })
  }
}
