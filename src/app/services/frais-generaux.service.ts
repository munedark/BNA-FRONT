import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FraisGenerauxNonAux } from '../Models/FraisGenerauxNonAux';
import { FraisGenerauxAux } from '../Models/FraisGenerauxAux';
import { Observable } from 'rxjs';
import { Risque } from '../Models/Risque';

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
  listValidationAux(){
    return this.http.get<FraisGenerauxAux[]>(`${this.url}agent/aux/validation`)
  }
  listValidationNonAux(){
    return this.http.get<FraisGenerauxNonAux[]>(`${this.url}agent/nonAux/validation`)
  }

  updateOperationAux(id: number, matriculeValidateur: string, dateValidation: Date, etatOperation: string , risque?:Risque): Observable<FraisGenerauxAux> {
    const url = `${this.url}agent/aux/${id}`;
    const body = {
      matriculeValidateur,
      dateValidation,
      etatOperation ,
      risque
    };
    return this.http.put<any>(url, body);
}
updateOperationNonAux(id: number, matriculeValidateur: string, dateValidation: Date, etatOperation: string, risque?:Risque): Observable<FraisGenerauxNonAux> {
  const url = `${this.url}agent/nonAux/${id}`;
  const body = {
    matriculeValidateur,
    dateValidation,
    etatOperation ,
    risque
  };
  return this.http.put<any>(url, body);
}
allOperationAux(){
  return this.http.get<any>(`${this.url}agent/aux/all`)
}
allOperationNonAux(){
 return this.http.get<any>(`${this.url}agent/nonAux/all`)
}
}
