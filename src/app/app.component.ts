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
    return this.router.url === '/login'|| this.router.url === '/login_client';
}
  isGestionnairePage():boolean{
    return this.router.url.startsWith('/GESTIONNAIRE');
  }
  isAccueilPage():boolean{
    return this.router.url.startsWith('/pageAccueil');
  }
  isAvailable():boolean{
  return this.pageDisponibleService.estDansPageNotFound;

  }

isInscription():boolean{
  return this.router.url === "/inscription"
}


}