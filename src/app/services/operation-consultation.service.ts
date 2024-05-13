import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationJugement } from '../Models/OperationJugement';
import { FraisGenerauxAux } from '../Models/FraisGenerauxAux';
import { FraisGenerauxNonAux } from '../Models/FraisGenerauxNonAux';
import { OperationFraisInities } from '../Models/OperationFraisInities';

@Injectable({
  providedIn: 'root'
})
export class OperationConsultationService {
  private typeOperationSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private operationsJugement: BehaviorSubject<OperationJugement[]> = new BehaviorSubject<OperationJugement[]>([]);
  private operationsGenerauxAux: BehaviorSubject<FraisGenerauxAux[]> = new BehaviorSubject<FraisGenerauxAux[]>([]);
  private operationsGenerauxNonAux: BehaviorSubject<FraisGenerauxNonAux[]> = new BehaviorSubject<FraisGenerauxNonAux[]>([]);
  private operationsInities: BehaviorSubject<OperationFraisInities[]> = new BehaviorSubject<OperationFraisInities[]>([]);

  typeOperation$ = this.typeOperationSubject.asObservable();
  operationsJugement$ = this.operationsJugement.asObservable();
  operationsGenerauxAux$ = this.operationsGenerauxAux.asObservable();
  operationsGenerauxNonAux$ = this.operationsGenerauxNonAux.asObservable();
  operationsInties$ = this.operationsInities.asObservable();

  constructor() {}

  setTypeOperation(type: string) {
    this.typeOperationSubject.next(type);
  }

  setOperationsJugement(operations: OperationJugement[]) {
    this.operationsJugement.next(operations);
  }  
  setOperationsGenerauxAux(operations: FraisGenerauxAux[]) {
    this.operationsGenerauxAux.next(operations);
  }  
  setOperationsGenerauxNonAux(operations: FraisGenerauxNonAux[]) {
    this.operationsGenerauxNonAux.next(operations);
  } 
   setOperationsInities(operations: OperationFraisInities[]) {
    this.operationsInities.next(operations);
  }
}
