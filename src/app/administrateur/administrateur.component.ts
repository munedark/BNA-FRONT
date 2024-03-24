// administrateur.component.ts
import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { jwtDecode } from 'jwt-decode';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export class AdministrateurComponent implements OnInit {
  isSidebarCollapsed = false;
  visibleSubMenus: boolean[] = [];
  title:string="liste des risques";

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['font', 'produit', 'montant']; // Define column names


 
  constructor(private logoutService: LogoutService) {


    
    this.dataSource = new MatTableDataSource<any>([{ font: 'value1', produit: 'value2', montant: 'value3' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' },
    { font: 'value4', produit: 'value5', montant: 'value6' } ]);
   }

  ngOnInit(): void {
    
    const token = localStorage.getItem('token');

  }

  isSubMenuVisible(index: number): boolean {
    // If the sub-menu visibility for the specified index is not defined, initialize it as false
    if (this.visibleSubMenus[index] === undefined) {
      this.visibleSubMenus[index] = false;
    }
    return this.visibleSubMenus[index];
  }

  toggleSubMenu(index: number): void {
    // Toggle the visibility of the sub-menu for the specified index
    this.visibleSubMenus[index] = !this.visibleSubMenus[index];
  }

  
  

  logout(): void {
    this.logoutService.logout();
  }
}
