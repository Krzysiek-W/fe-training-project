import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Currency} from "../../shared/interfaces/currency.interface.";

@Injectable({
  providedIn: 'root'
})
export class ExchangeOfficeApiService {

  constructor(private http: HttpClient) {
  }

  //TODO: REbuild Rename dodać dynamiczne odświeżanie etc.
  public getApiBank() {
    return this.http.get<any>("http://api.nbp.pl/api/exchangerates/tables/c").pipe(
      map(response => {
        return response[0].rates as Currency[];
      })
    );
  }
}
