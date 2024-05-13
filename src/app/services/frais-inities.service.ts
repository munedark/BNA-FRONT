import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationFraisInities } from '../Models/OperationFraisInities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraisInitiesService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  submitForm(operation: OperationFraisInities) {
    return this.http.post<any>(`${this.url}agent/operations-frais-inities`, operation);
  }
  listValidation(){
    return this.http.get<OperationFraisInities[]>(`${this.url}agent/operations-frais-inities/validation`)
  }
  updateOperation(id: number, matriculeValidateur: string, dateValidation: Date, etatOperation: string): Observable<OperationFraisInities> {
    const url = `${this.url}agent/operations-frais-inities/${id}`;
    const body = {
      matriculeValidateur,
      dateValidation,
      etatOperation 
    };
    return this.http.put<any>(url, body);
}
operations(){
  return this.http.get<OperationFraisInities[]>(`${this.url}agent/operations-frais-inities/all`)
}
}
