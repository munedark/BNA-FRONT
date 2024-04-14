import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OperationCTX } from '../Models/OperationCTX';

@Injectable({
  providedIn: 'root'
})
export class OperationConsultationService {
  private typeOperationSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private operationsSubject: BehaviorSubject<OperationCTX[]> = new BehaviorSubject<OperationCTX[]>([]);

  typeOperation$ = this.typeOperationSubject.asObservable();
  operations$ = this.operationsSubject.asObservable();

  constructor() {}

  setTypeOperation(type: string) {
    this.typeOperationSubject.next(type);
  }

  setOperations(operations: OperationCTX[]) {
    this.operationsSubject.next(operations);
  }
}
