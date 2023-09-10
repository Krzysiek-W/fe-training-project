import {Component, Input} from '@angular/core';
import {Currency} from "../../shared/interfaces/currency.interface.";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {

  @Input() currency!: Currency;
  openModal: boolean = false;

  operationType = 'bid'
  amount = 0;
  calculateValue: number = 0

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  //TODO: do serwisu
  calculateConversion() {
    this.calculateValue = Math.ceil(
      this.amount * (this.operationType === 'bid' ? this.currency.bid : this.currency.ask));
  }

  submitForm() {

  }
}
