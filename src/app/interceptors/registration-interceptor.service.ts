import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {registrationFormFieldsResponse} from "../mock-data/registration";

@Injectable({
  providedIn: 'root'
})
export class RegistrationInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'api/reqistration-form-fields') {
      return of(new HttpResponse({ status: 200, body: registrationFormFieldsResponse }));
    }
    if (req.url === 'api/authorization') {
      return of(new HttpResponse({ status: 200 }));
    }
    return next.handle(req);
  }

}
