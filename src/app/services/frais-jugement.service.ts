import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationJugement } from '../Models/OperationJugement';

@Injectable({
  providedIn: 'root'
})
export class FraisJugementService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  submitForm(operation: OperationJugement) {
    return this.http.post<any>(`${this.url}agent/operation-frais-jugement`, operation);
  }
}
