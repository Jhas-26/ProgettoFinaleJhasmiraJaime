/*import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinterceptorInterceptor implements HttpInterceptor {

  tenantID = 'fe_0621';
  brearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTIwNCwiZXhwIjoxNjQzOTA1MjA0fQ.D5zyEp-3vbU0HkaYrB0AW2Ri9__Ogl9_HTdtivDEh-FWVq9si1nzq4OVi9pK1eB-QBGSyIIg-PR97VRdGo127A';


  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {
        headers: request.headers.set("Authorization", this.brearerToken)
          .set("X-TENANT-ID", this.tenantID)
      }
    )
    return next.handle(myRequest);
  }
}*/
