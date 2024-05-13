import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeOperationService {

  constructor(private http: HttpClient) { }
  url="http://localhost:8080/"
  typeOperation(libelle:string){
    return this.http.get<any>(`${this.url}agent/type-operation/libelle/${libelle}`)
  }
}
