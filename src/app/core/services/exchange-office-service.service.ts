import {Injectable} from '@angular/core';
import {Currency} from "../../shared/interfaces/currency.interface.";

@Injectable({
  providedIn: 'root'
})
export class ExchangeOfficeServiceService {

  constructor() {
  }

  private _currencies: Currency[] = [{
    currency: "Euro",
    code: "EUR",
    bid: 1.2,
    ask: 1.3
  }, {
    currency: "Dollar",
    code: "USD",
    bid: 1.1,
    ask: 1.2
  }
  ]


  get currencies(): Currency[] {
    console.log(this._currencies)
    return this._currencies.slice();
  }
}
