import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the JWT token from wherever you store it (e.g., localStorage)
    const authToken = localStorage.getItem('jwtToken');

    // Clone the request and add the Authorization header
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
        },
    });

    // Pass the cloned request instead of the original request to the next handler
    return next.handle(authRequest);
    }
}
