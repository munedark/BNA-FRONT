import { Component, Inject } from '@angular/core';
import { Risque } from '../Models/Risque';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-frais-enregistrement',
  templateUrl: './frais-enregistrement.component.html',
  styleUrls: ['./frais-enregistrement.component.scss']
})
export class FraisEnregistrementComponent {
  risque: Risque;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.risque = data.risque; // Retrieve the risque object passed from the parent component
  }

  ngOnInit(): void {
  }
}
