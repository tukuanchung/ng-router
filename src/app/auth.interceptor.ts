import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const accessToken ='access-token';
    const accessToken = localStorage.getItem('token');
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return next.handle(authRequest);
  }
}
