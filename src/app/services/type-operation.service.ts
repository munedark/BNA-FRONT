import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeOperation } from '../Models/TypeOperation';

@Injectable({
  providedIn: 'root'
})
export class TypeOperationService {

  constructor(private http: HttpClient) { }
  url="http://localhost:8080/"
  typeOperationByNumero(numero:string){
    return this.http.get<TypeOperation>(`${this.url}agent/type-operation/numero/${numero}`)
  }
  typeOperationByLibelle(libelle:string){
    return this.http.get<TypeOperation>(`${this.url}agent/type-operation/libelle/${libelle}`)
  }

}
