import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationJugement } from '../Models/OperationJugement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraisJugementService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  submitForm(operation: OperationJugement) {
    return this.http.post<any>(`${this.url}agent/operation-frais-jugement`, operation);
  }
  listValidation(){
    return this.http.get<OperationJugement[]>(`${this.url}agent/operation-frais-jugement/validation`)
  }
  updateOperationCTX(id: number, matriculeValidateur: string, dateValidation: Date, etatOperation: string): Observable<OperationJugement> {
    const url = `${this.url}agent/operation-frais-jugement/${id}`;
    const body = {
      matriculeValidateur,
      dateValidation,
      etatOperation 
    };
    return this.http.put<any>(url, body);
}
operations(){
  return this.http.get<any>(`${this.url}agent/operation-frais-jugement/all`)
}

}
