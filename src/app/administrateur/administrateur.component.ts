import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { DateService } from '../services/date.service';
import { DateBna } from '../Models/DateBna';



@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export class AdministrateurComponent implements OnInit {
  isSidebarCollapsed = false;
  visibleSubMenus: boolean[] = [];
  title:string="liste des risques";
 
  constructor(
    private logoutService: LogoutService,
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }


  isSubMenuVisible(index: number): boolean {
    if (this.visibleSubMenus[index] === undefined) {
      this.visibleSubMenus[index] = false;
    }
    return this.visibleSubMenus[index];
  }

  toggleSubMenu(index: number): void {
    this.visibleSubMenus[index] = !this.visibleSubMenus[index];
  }

  
  

  logout(): void {
    this.logoutService.logout();
  }
}
