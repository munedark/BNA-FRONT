import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risque } from '../Models/Risque';
import { FraisEnregistrement } from '../Models/FraisEnregistrement';
import { OperationCTX } from '../Models/OperationCTX';
import { Subject, forkJoin, tap } from 'rxjs';
import { DossierDebiteur } from '../Models/DossierDebiteur';
import { DiversPiece } from '../Models/DiversPiece';


@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private http: HttpClient) { }
  private _refreshOption$=new Subject<void>();
  get refreshOption(){return this._refreshOption$;}

  recherche(numCtx:number) {
    return this.http.get<any>(`http://localhost:8080/agent/debiteur/recherche/${numCtx}`);
  }
  risques(numCtx:number){
    return this.http.get(`http://localhost:8080/agent/debiteur/risque/${numCtx}`);
  }
  operationByType(libelle:String){
    return this.http.get(`http://localhost:8080/agent/operation-ctx${libelle}`);
  }
  submitForm(operation: OperationCTX) {
    return this.http.post<any>('http://localhost:8080/agent/operation-ctx/add', operation);
  }
  dossier(numCtx:number){
    return this.http.get<any>(`http://localhost:8080/agent/dossier-debiteur/dossier/${numCtx}`)
  }
  risqueById(id:number){
    return this.http.get<any>(`http://localhost:8080/agent/risque/${id}`)
  }
  typeOperation(libelle:string){
    return this.http.get<any>(`http://localhost:8080/agent/type-operation/libelle/${libelle}`)
  }
  diverOptions(){
    return this.http.get<any>('http://localhost:8080/agent/divers/pieces')
  }
  addDiversOptions(option:DiversPiece){
    return this.http.post<any>('http://localhost:8080/agent/divers/addPiece',option)
    .pipe(
      tap(()=>{this._refreshOption$.next();}
    ));
  }
  typePaiment(libelle:string){
    return this.http.get<any>(`http://localhost:8080/agent/type-paiment/libelle/${libelle}`)
  }

}
