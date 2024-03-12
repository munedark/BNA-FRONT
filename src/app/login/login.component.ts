import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invalidLogin:boolean=false;
  loginSuccess:boolean=false;
  errorMessage:String='wrong password or username';
  successMessage:String='Valid';
  username:string="";
  password:string="";

  constructor(private authService: AuthService , private router:Router) { }
  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.loginSuccess=true;
        this.router.navigate(['/administrateur']); 
        const token = localStorage.getItem('token');
        console.log(token);
      },
      error: (error) => {
        
          this.invalidLogin = true;
          setTimeout(() => {
            this.invalidLogin = false; // Reset invalidLogin after 3 seconds
          }, 3000);
        console.error('Login error:', error);
      }
    });
  }
}
