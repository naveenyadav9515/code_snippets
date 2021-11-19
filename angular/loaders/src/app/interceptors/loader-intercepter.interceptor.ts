import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Injectable()
export class LoaderIntercepterInterceptor implements HttpInterceptor {

  constructor(public sharedService: SharedService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.sharedService.isLoader.next(true);
    return next.handle(request).pipe(
      delay(3000),
      finalize(
        () => {
          this.sharedService.isLoader.next(false);
        }
      )
    )
  }
}
