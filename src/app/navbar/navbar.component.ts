import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { SidebarToggleService } from '../services/sidebar-toggle.service';
import { DropService } from '../services/drop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  isSidebarOpen = false;
  private subscription: Subscription;

  constructor(
    private auth: AuthService,
    private sidebarToggleService: SidebarToggleService,
    private dropService: DropService
  ) {
    this.subscription = this.sidebarToggleService.isSidebarOpen$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
    });
  }

  ngOnInit(): void {
    
  }

  toggleSidebar(): void {
    this.sidebarToggleService.toggleSidebar();
  }

  toggleUser(): void {
    this.dropService.toggleIcon();
  }
}
