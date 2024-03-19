import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  ajouterAgent(agentData: any) {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    
    return this.http.get<any>('http://localhost:8080/admin/showAllAgents',  { headers });
  }
}
