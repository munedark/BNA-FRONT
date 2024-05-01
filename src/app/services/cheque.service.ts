import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cheque } from '../Models/Cheque';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  constructor(private http:HttpClient) { }
  saveCheque(cheque:Cheque){
    return this.http.post<any>(`http://localhost:8080/agent/cheque/add`,cheque)
  }
}
