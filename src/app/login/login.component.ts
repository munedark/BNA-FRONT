import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  invalidLogin:boolean=false;
  loginSuccess:boolean=false;
  errorMessage:String='wrong password or username';
  username:string="";
  password:string="";
  
  constructor(private authService: AuthService , private router:Router) { }

  ngOnInit(): void {
      if(this.authService.isLoggedIn()){
        const token:any = localStorage.getItem('token');
        const decodedToken: any = jwtDecode(token);
        const role = decodedToken.role.substring(5);
        this.router.navigate([`/${role}`]);
      }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.loginSuccess=true;

        const token:any = localStorage.getItem('token');
        const decodedToken: any = jwtDecode(token);
        const role = decodedToken.role.substring(5);
        this.authService.updateUsertoken(decodedToken)

     this.router.navigate([`/${role}`]);

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
