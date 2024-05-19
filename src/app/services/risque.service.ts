import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risque } from '../Models/Risque';

@Injectable({
  providedIn: 'root'
})
export class RisqueService {
  url="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  risqueNull(){
    return this.http.get(`${this.url}agent/risque/risqueNull`)
  }
}
