import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../Models/Profile';

@Injectable({
  providedIn: 'root'
})
export class GestionServiceService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  verifierAgent(identifiant:string){
    return this.http.get<Profile>(`${this.url}admin/Profile/username/${identifiant}`)
  }
  deleteAgent(identifiant:string)
  {
    return this.http.put<any>(`${this.url}admin/Profile/disable/${identifiant}`,{})
  }
  modifierAgent(identifiant:string,agentData:any){
    return this.http.put<any>(`${this.url}admin/modifyAgent/${identifiant}`,agentData)
  }
  modifierClient(identifiant:string,clientData:any){
    return this.http.put<any>(`${this.url}admin/modifyClient/${identifiant}`,clientData)
  }
}
