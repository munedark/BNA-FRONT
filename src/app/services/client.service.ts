import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url="http://localhost:8080/"
  constructor(private http:HttpClient) { }
  clientInfo(matricule:string){
    return this.http.get<any>(`${this.url}client/info/${matricule}`);
  }
}
