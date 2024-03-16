import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { SidebarToggleService } from '../services/sidebar-toggle.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  isSidebarOpen=false
  private subscription:Subscription
  role: String='';
  matricule: string='';
  
  constructor(private logoutService: LogoutService, private auth: AuthService,private sidebarToggleService: SidebarToggleService)
  {
    this.subscription = this.sidebarToggleService.isSidebarOpen$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen; });
  }

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.role = decodedToken ? decodedToken.role : 'No Role';
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
  }
}
  toggleSidebar(): void {
    this.sidebarToggleService.toggleSidebar();
  }

  logout(): void {
    this.logoutService.logout();
    this.auth.updateUsertoken(null);
  }
}
