import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DateBna } from '../Models/DateBna';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCurrentDate(): Observable<any> {
    return this.http.get<DateBna>(`${this.baseUrl}/date`);
  }

  setDate(newDate: String): Observable<any> {
    return this.http.post<void>(`${this.baseUrl}/admin/date/set`, newDate);
  }

  incrementDate(): Observable<any> {
    return this.http.post<void>(`${this.baseUrl}/agent/date/increment`, null);
  }
}
