import { Component, OnInit } from '@angular/core';
import { PageIndisponibleService } from '../services/page-indisponible.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private pageIndisponibleService: PageIndisponibleService) { }

  ngOnInit(): void {
    this.pageIndisponibleService.estDansPageNotFound = true; 
  }
  ngOnDestroy(): void {
    this.pageIndisponibleService.estDansPageNotFound = false; 
  }
}
