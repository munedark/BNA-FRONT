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
  role:any
  constructor(private logoutService: LogoutService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.usertoken$.subscribe((data:any)=>{
      this.role= data.role
    })
  }


  logout(): void {
    this.logoutService.logout();
  }
  }

