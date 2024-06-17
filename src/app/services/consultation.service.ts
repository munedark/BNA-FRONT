import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }

  allAgent(){
    return this.http.get<any>(`${this.url}admin/Profile/role/validator-or-manager`);
  }
  allClients(){
    return this.http.get<any>(`${this.url}admin/Profile/role/client`)
  }

}
