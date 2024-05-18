import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationCTX } from '../Models/OperationCTX';
import { Subject, forkJoin, tap } from 'rxjs';
import { DiversPiece } from '../Models/DiversPiece';
import { map } from 'rxjs/operators';
import { Risque } from '../Models/Risque';



@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private http: HttpClient) { }
  private _refreshOption$=new Subject<void>();
  get refreshOption(){return this._refreshOption$;}
  url="http://localhost:8080/"
  recherche(numCtx:number) {
    return this.http.get<any>(`${this.url}agent/debiteur/recherche/${numCtx}`);
  }
  risques(numCtx:number){
    return this.http.get<Risque[]>(`${this.url}agent/debiteur/risque/${numCtx}`);
  }
  operationByType(libelle:String){
    return this.http.get(`${this.url}agent/operation-ctx${libelle}`);
  }
  submitForm(operation: OperationCTX) {
    return this.http.post<any>(`${this.url}agent/operation-ctx/add`, operation);
  }
  dossier(numCtx:number){
    return this.http.get<any>(`${this.url}agent/dossier-debiteur/dossier/${numCtx}`)
  }
  risqueById(id:number){
    return this.http.get<any>(`${this.url}agent/risque/${id}`)
  }

  diverOptions(){
    return this.http.get<any>(`${this.url}agent/divers/pieces`)
  }
  addDiversOptions(option:DiversPiece){
    return this.http.post<any>(`${this.url}agent/divers/addPiece`,option)
    .pipe(
      tap(()=>{this._refreshOption$.next();}
    ));
  }
  typePaiment(libelle:string){
    return this.http.get<any>(`${this.url}agent/type-paiment/libelle/${libelle}`)
  }
  listeDebiteurs(){
    return this.http.get<any>(`${this.url}agent/dossier-debiteur/all`)
  }
  listeOperations(libelle:string){
    return this.http.get<any[]>(`${this.url}agent/operation-ctx/libelle/${libelle}`).pipe(
      map(operations => {
        // Format the date for each operation in the list
        return operations.map(operation => {
          operation.dateValeurCTX = new Date(operation.dateValeurCTX).toLocaleDateString();
          return operation;
        });
      })
    );}
}
