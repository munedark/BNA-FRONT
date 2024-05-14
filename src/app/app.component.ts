import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropService } from './services/drop.service';
import { Subscription } from 'rxjs';
import { PageIndisponibleService } from './services/page-indisponible.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contentieux';
  isUserOpen:boolean=false;
  isNotifOpen:boolean=false;
  subscription:Subscription|undefined
  
  
  constructor(private router: Router , private dropService:DropService,private pageDisponibleService:PageIndisponibleService) {
    this.subscription = this.dropService.isUserOpen$.subscribe(isOpen => {
      this.isUserOpen = isOpen;
   });
    this.subscription = this.dropService.isNotifOpen$.subscribe(isOpen => {
      this.isNotifOpen = isOpen;
   });
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
}
  isGestionnairePage():boolean{
    return this.router.url.startsWith('/GESTIONNAIRE');
  }
  isAvailable():boolean{
    // return (this.router.url.startsWith('/GESTIONNAIRE') || this.router.url.startsWith("/login") || this.router.url.startsWith("/VALIDATEUR") || this.router.url.startsWith("/ADMINISTRATEUR") )
  return this.pageDisponibleService.estDansPageNotFound;
  }



}