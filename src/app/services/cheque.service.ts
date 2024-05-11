import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cheque } from '../Models/Cheque';
import { OperationCheque } from '../Models/OperationCheque';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  saveCheque(cheque:Cheque){
    return this.http.post<any>(`${this.url}agent/cheque/add`,cheque)
  }


  submitForm(operation: OperationCheque) {
    return this.http.post<any>(`${this.url}agent/operations`, operation);
}
findOperations(){
  return this.http.get<any>(`${this.url}agent/operations/chequeNonValide`);
}
}