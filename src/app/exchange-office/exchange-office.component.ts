import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Currency} from "../shared/interfaces/currency.interface.";
import {ExchangeOfficeApiService} from "../core/services/exchange-office-api.service";

@Component({
  selector: 'app-exchange-office',
  templateUrl: './exchange-office.component.html',
  styleUrls: ['./exchange-office.component.scss']
})
export class ExchangeOfficeComponent implements OnInit {

  constructor(private exchangeOfficeApiService: ExchangeOfficeApiService) {
  }

  currencies: Currency[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.exchangeOfficeApiService.getApiBank().subscribe(data => {
      this.currencies = data;
      console.log(this.currencies)
    });
  }
}
