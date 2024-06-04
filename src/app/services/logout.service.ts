// logout.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout(): void {
    // Clear any user authentication data (e.g., token, user info) from local storage or session storage
    localStorage.removeItem('token');

    // Redirect to the login page
    this.router.navigate(['/pageAccueil']);
  }
}
