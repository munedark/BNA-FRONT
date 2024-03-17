import { Component } from '@angular/core';
import { LogoutService } from '../services/logout.service';
@Component({
  selector: 'app-validateur',
  templateUrl: './validateur.component.html',
  styleUrls: ['./validateur.component.scss']
})
export class ValidateurComponent {
  isSidebarCollapsed = false;
  visibleSubMenus: boolean[] = [];
 
  constructor(private logoutService: LogoutService) { }

  ngOnInit(): void {
    this.toggleSidebar();
    const token = localStorage.getItem('token');

  }

  isSubMenuVisible(index: number): boolean {
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
