import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegistrationField} from "../../mock-data/registration";

@Injectable({
  providedIn: 'root'
})
export class RegistrationApiService {
  constructor(protected fetcher: HttpClient) {
  }

  getListOfRegistrationFields(): Observable<RegistrationField[]> {
    return this.fetcher.request<RegistrationField[]>('GET', 'api/reqistration-form-fields');
  }

  authorization(authData: { [index: string]: string }): Observable<null> {
    return this.fetcher.request<null>('POST', 'api/authorization', {body: authData});
  }
}
