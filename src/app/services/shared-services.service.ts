import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risque } from '../Models/Risque';
import { FraisEnregistrement } from '../Models/FraisEnregistrement';
import { OperationCTX } from '../Models/OperationCTX';
import { forkJoin } from 'rxjs';
import { DossierDebiteur } from '../Models/DossierDebiteur';

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
  submitForm(operation: OperationCTX) {
    return this.http.post<any>('http://localhost:8080/agent/operation-ctx/add', operation);
  }
  dossier(numCtx:number){
    return this.http.get<any>(`http://localhost:8080/agent/dossier-debiteur/dossier/${numCtx}`)
  }
  risqueById(id:number){
    return this.http.get<any>(`http://localhost:8080/agent/risque/${id}`)
   }

}
