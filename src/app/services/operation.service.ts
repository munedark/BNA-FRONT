import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationCheque } from '../Models/OperationCheque';
import { OperationAffectation } from '../Models/OperationAffectaion';
import { Operation } from '../Models/Operation';
import { ClotureRisqueDto } from '../Models/ClotureRisqueDto';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private baseUrl = 'http://localhost:8080/agent/operations';

  constructor(private http: HttpClient) { }

  updateOperationByCheque(id: number, matriculeValidateur: string, dateValidation: Date, etatOperation: string): Observable<OperationCTX> {
    const url = `${this.baseUrl}/update-by-cheque/${id}`;
    const body = {
      matriculeValidateur,
      dateValidation,
      etatOperation 
    };
    return this.http.put<OperationCTX>(url, body);
  }
  updateOperationByAffectation(id: number, matriculeValidateur: string, dateValidation: Date, etatOperation: string): Observable<OperationAffectation> {
    const url = `${this.baseUrl}/update-by-affectation/${id}`;
    const body = {
      matriculeValidateur,
      dateValidation,
      etatOperation 
    };
    return this.http.put<OperationAffectation>(url, body);
  }
  allOperationCheque(){
    return this.http.get<OperationCheque[]>(`${this.baseUrl}/cheque/all`)
  }
  getOperations(){
    return this.http.get<any>("http://localhost:8080/agent/operation-ctx/all")
  }
clotureDossier(operation:Operation){
  return this.http.put<any>("http://localhost:8080/agent/operations/clotureDossier",operation);
}
clotureRisque(crd:ClotureRisqueDto){
  return this.http.put<any>("http://localhost:8080/agent/operations/clotureRisque",crd);
}
ristourne(numCtx:number){
  return this.http.put<any>(`http://localhost:8080/agent/dossier-debiteur/resetSolde/${numCtx}`,{})
}
}
