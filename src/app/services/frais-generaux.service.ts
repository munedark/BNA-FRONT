import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FraisGenerauxNonAux } from '../Models/FraisGenerauxNonAux';
import { FraisGenerauxAux } from '../Models/FraisGenerauxAux';

@Injectable({
  providedIn: 'root'
})
export class FraisGenerauxService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  submitFormAux(operation: FraisGenerauxAux) {
    return this.http.post<any>(`${this.url}agent/aux/add`, operation);
  }
  submitFormNonAux(operation: FraisGenerauxNonAux) {
    return this.http.post<any>(`${this.url}agent/nonAux/add`, operation);
  }
}
