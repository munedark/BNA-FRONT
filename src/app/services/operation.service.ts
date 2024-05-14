import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationCTX } from '../Models/OperationCTX';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private baseUrl = 'http://localhost:8080/agent/operations';

  constructor(private http: HttpClient) { }

  updateOperationByCheque(id: number, matriculeValidateur: string, dateValidation: Date, etatOperation: string): Observable<OperationCTX> {
    const url = `${this.baseUrl}/update-by-cheque/${id}`;
    const body = {
      matriculeValidateur,
      dateValidation,
      etatOperation 
    };
    return this.http.put<OperationCTX>(url, body);
  }
  getOperations(){
    return this.http.get<any>("http://localhost:8080/agent/operation-ctx/all")
  }

}
