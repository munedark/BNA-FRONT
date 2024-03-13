import { Component } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.scss']
})
export class GestionnaireComponent {
  isSidebarCollapsed = false;
  visibleSubMenus: boolean[] = [];
 
  constructor(private logoutService: LogoutService,private authService:AuthService,private router:Router) { }

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

