import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { ResponseModel } from '../models/response.model';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          try {
            const responseModel: ResponseModel = event.body;
            if (responseModel.payload) {
              return event.clone({
                body: responseModel.payload,
                status: responseModel.status
              });
            } else {
              return event;
            }
          } catch (e) {
            throw new Error(e);
          }
        }
      }),
      // todo
      catchError(err => {
        //   if (err.status === 401) {
        //       this.router.navigate(['auth/login']);
        //       localStorage.clear();
        //   }
        const error = err.error;
        return throwError(error);
      }));
  }
}

