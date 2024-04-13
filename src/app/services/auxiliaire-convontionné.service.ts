import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuxiliaireConvontionnéService {

  constructor(private http: HttpClient) { }
  url="http://localhost:8080/agent/"
  avocatConvontionne(){
    return this.http.get<any>(`${this.url}avocat/all`)
  }
  expertConvontionne(){
    return this.http.get<any>(`${this.url}expert/all`)
  }
  huissierConvontionne(){
    return this.http.get<any>(`${this.url}huissier/all`)
  }
}
