import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { virement } from '../Models/virement';

@Injectable({
  providedIn: 'root'
})
export class VirementService {
  private _selectedDateSource: BehaviorSubject<virement[] | null> = new BehaviorSubject<virement[] | null>(null);
  selectedDate$ = this._selectedDateSource.asObservable();

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
}
