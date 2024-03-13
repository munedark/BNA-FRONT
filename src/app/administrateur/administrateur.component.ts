// administrateur.component.ts
import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export class AdministrateurComponent implements OnInit {
  isSidebarCollapsed = false;
  visibleSubMenus: boolean[] = [];
 
  constructor(private logoutService: LogoutService) { }

  ngOnInit(): void {
    this.toggleSidebar();
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

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  
  

  logout(): void {
    this.logoutService.logout();
  }
}
