// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/authenticate'; // Update with your backend authentication endpoint

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const authRequest = { "username": username, "password": password };

    return this.http.post<any>(this.apiUrl, authRequest).pipe(
      map((response) => {
        // Authentication successful
        localStorage.setItem('token', response.jwt);
        return response;
      }),
      catchError((error) => {
        // Authentication failed
        return throwError(error);
      })
    );
  }

  logout() {
    // Clear token from local storage
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Check if token exists in local storage
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    // Get token from local storage
    return localStorage.getItem('token');
  }
}
