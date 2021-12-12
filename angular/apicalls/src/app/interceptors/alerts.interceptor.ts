import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class AlertsInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.status == 200) {
            alert("success with status code " + evt.status)
            console.log(evt);
            evt.body[0].name = "naveen";
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            if (err.status == 0) {
              alert("No Responce with error code "+err.status );
            }
            if (err.status == 404) {
              alert("Not found with error code"+err.status);
            }
          } catch (e) {
            console.log(e)
          }
          //log error 
        }
        return of(err);
      }));

  }
}
