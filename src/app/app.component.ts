import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropService } from './services/drop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contentieux';
  isUserOpen:boolean=false;
  subscription:Subscription|undefined
  
  
  constructor(private router: Router , private dropService:DropService) {
    this.subscription = this.dropService.isUserOpen$.subscribe(isOpen => {
      this.isUserOpen = isOpen;
   });
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
}
}