import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { SidebarToggleService } from '../services/sidebar-toggle.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isSidebarOpen = false;
  role: String='';
  visibleSubMenus: boolean[] = [];
  private subscription: Subscription | undefined;


  constructor(private auth: AuthService, private sidebarToggleService: SidebarToggleService) {
    this.subscription = this.sidebarToggleService.isSidebarOpen$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
      this.visibleSubMenus = Array(3).fill(false);
    });
  }
  
  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.role = decodedToken ? decodedToken.role : 'No Role';
    }
    
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
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }}
}
