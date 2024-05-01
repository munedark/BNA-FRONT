import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgenceBank } from '../Models/AgenceBank';

@Injectable({
  providedIn: 'root'
})
export class AgencesService {

  constructor(private http:HttpClient) { }
  Agences(){
    return this.http.get<any>("http://localhost:8080/agent/agence/all")
  }
  agenceById(id:number){
    return this.http.get<AgenceBank>(`http://localhost:8080/agent/agence/${id}`)
  }
}
