import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode'; // Modified import statement

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {
  invalidLogin = false;
  loginSuccess = false;
  errorMessage = 'Matricule ou mot de passe incorrect'; 
  username = "";
  password = "";
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      const token: any = localStorage.getItem('token');
      const decodedToken: any = jwtDecode(token);
      const role = decodedToken.role.substring(5);
      this.router.navigate([`/${role}`]);
    }
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.loginSuccess = true;

        const token: any = localStorage.getItem('token');
        const decodedToken: any = jwtDecode(token);
        const role = decodedToken.role.substring(5);
        this.authService.updateUsertoken(decodedToken);

        this.router.navigate([`/${role}`]);
      },
      error: (error) => {
        this.invalidLogin = true;
        setTimeout(() => {
          this.invalidLogin = false; 
        }, 3000);
        console.error('Login error:', error);
      }
    });
  }
}
