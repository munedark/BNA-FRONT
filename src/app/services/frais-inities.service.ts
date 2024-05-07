import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationFraisInities } from '../Models/OperationFraisInities';

@Injectable({
  providedIn: 'root'
})
export class FraisInitiesService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  submitForm(operation: OperationFraisInities) {
    return this.http.post<any>(`${this.url}agent/operations-frais-inities`, operation);
  }
}
