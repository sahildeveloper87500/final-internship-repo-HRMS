import { Injectable } from "@angular/core";

import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { ConfigurationService } from './configuration.service';

declare let seon: any
@Injectable()
export class HttpConfigInterceptor {
  constructor(private router: Router, private config: ConfigurationService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req.clone({
      setHeaders: {
        Authorization: `Bearer ` + sessionStorage.getItem("token")
      }
    });
    return next
      .handle(request).pipe(map((event: HttpEvent<any>) => {
        return event;
      })
      );
  }
}
