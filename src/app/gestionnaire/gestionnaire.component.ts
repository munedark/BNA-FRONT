import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { SharedServicesService } from '../services/shared-services.service';
@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.scss']
})
export class GestionnaireComponent {

  constructor(private sharedService:SharedServicesService,private router:Router) { }

  ngOnInit(): void {
   

  }
  click(){ 
    this.sharedService.recherche(3221).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        // Handle any errors here
      }
    );
  }




  }

