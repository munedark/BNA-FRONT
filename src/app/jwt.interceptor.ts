import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the JWT token from the authentication service
    const token = this.authService.getToken();

    // If a token exists, add it to the request headers
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Pass the modified request to the next handler
    return next.handle(request).pipe(
      catchError((error) => {
        // Check if the error is an unauthorized error (e.g., JWT expired)
        if (error.status === 401 || error.status === 403) {
          // Handle unauthorized error here (e.g., logout and redirect to login page)
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        // Re-throw the error to be caught by the caller
        return throwError(error);
      })
    );
  }
}