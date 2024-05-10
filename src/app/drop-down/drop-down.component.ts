import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode'; 
import { LogoutService } from '../services/logout.service';
import { DropService } from '../services/drop.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  role: string = '';
  matricule: string = '';

  constructor(private logoutService: LogoutService, private auth: AuthService, private dropService: DropService) {}

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const rawRole = decodedToken ? decodedToken.role : 'No Role';
      this.role = rawRole.substring(5); 
      this.matricule = decodedToken ? decodedToken.sub : 'No Matricule';
    }
  }

  logout(): void {
    this.logoutService.logout();
    this.auth.updateUsertoken(null);
    this.dropService.toggleIcon();
  }
}
