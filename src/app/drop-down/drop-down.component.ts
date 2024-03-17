import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {jwtDecode} from 'jwt-decode'; // Changed import statement
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  role: string = '';
  matricule: string = '';

  constructor(private logoutService: LogoutService, private auth: AuthService) {}

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.role = decodedToken ? decodedToken.role : 'No Role';
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  logout(): void {
    this.logoutService.logout();
    this.auth.updateUsertoken(null);
  }
}
