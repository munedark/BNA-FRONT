import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { SidebarToggleService } from '../services/sidebar-toggle.service';
import { DropService } from '../services/drop.service';
import { Router } from '@angular/router';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit , OnDestroy {
  isSidebarOpen = false;
  private subscription: Subscription;
  currentDate!: string;


  constructor(
    private router: Router,
    private sidebarToggleService: SidebarToggleService,
    private dropService: DropService,
    private dateService: DateService,

  ) {
    this.subscription = this.sidebarToggleService.isSidebarOpen$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
    });
  }

  ngOnInit(): void {
    this.dateService.getCurrentDate().subscribe((date: string) => {
        this.currentDate = date;
        console.log(date)
    });
  
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  
  }

  toggleSidebar(): void {
    this.sidebarToggleService.toggleSidebar();
  }

  toggleUser(): void {
    this.dropService.toggleIcon();
  }  
  toggleNotif(): void {
    this.dropService.toggleBell();
  }
  
  isGestionnairePage():boolean{
    return this.router.url.startsWith('/GESTIONNAIRE/');
  }
  passeJournee(){
    this.dateService.incrementDate().subscribe(()=>{
      window.location.reload();
    });
  }
}
