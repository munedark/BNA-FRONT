import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormeAffectation } from '../Models/FormeAffectation';

@Injectable({
  providedIn: 'root'
})
export class FormeAffectationService {

  constructor(private http:HttpClient) { }
  addForme(formeAffectation:FormeAffectation){
    return this.http.post<any>("http://localhost:8080/agent/affectation",formeAffectation)
  }
}
