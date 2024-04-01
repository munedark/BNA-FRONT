import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risque } from '../Models/Risque';
import { FraisEnregistrement } from '../Models/FraisEnregistrement';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private http: HttpClient) { }

  recherche(numCtx:number) {
    return this.http.get<any>(`http://localhost:8080/agent/debiteur/recherche/${numCtx}`);
  }
  risques(numCtx:number){
    return this.http.get(`http://localhost:8080/agent/debiteur/risque/${numCtx}`);
  }
  submitForm(frais:FraisEnregistrement){
    return this.http.post<any>('http://localhost:8080/agent/frais/add', frais );
  }

}
