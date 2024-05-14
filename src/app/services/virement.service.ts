import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { virement } from '../Models/virement';
import { OperationCTX } from '../Models/OperationCTX';
import { OperationVirement } from '../Models/OperationVirement';

@Injectable({
  providedIn: 'root'
})
export class VirementService {
  private _selectedDateSource: BehaviorSubject<virement[] | null> = new BehaviorSubject<virement[] | null>(null);
  selectedDate$ = this._selectedDateSource.asObservable();
  private _submittedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  submitted$ = this._submittedSource.asObservable();

  constructor(private http: HttpClient) {}

  virementByDate(date: string) {
    this.http.get<virement[]>(`http://localhost:8080/agent/virement/date/${date}`).subscribe(
      (data) => {
        this._selectedDateSource.next(data);
      },
      (error) => {
        console.error('Error fetching virements by date:', error);
      }
    );
  }

  updateVirement(operation: OperationVirement) {
    return this.http.put<any>("http://localhost:8080/agent/operations/update/virement", operation);
  }

  setSubmitted(submitted: boolean) {
    this._submittedSource.next(submitted);
  }

}
