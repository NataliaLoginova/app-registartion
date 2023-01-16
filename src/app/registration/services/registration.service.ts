import {Injectable} from "@angular/core";
import {RegistrationApiService} from "./registration-api.service";
import {Observable} from "rxjs";
import {RegistrationField} from "../../mock-data/registration";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(public apiService: RegistrationApiService) {
  }

  getListOfRegistrationFields(): Observable<RegistrationField[]> {
    return this.apiService.getListOfRegistrationFields();
  }

  authorization(authData: { [index: string]: string }): Observable<any> {
    return this.apiService.authorization(authData);
  }
}
