import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {CoreModule} from "./modules/core/core.module";
import {EffectsModule} from '@ngrx/effects';
import {ExchangeOfficeComponent} from './exchange-office/exchange-office.component';
import {CommonModule} from "@angular/common";
import {CurrencyComponent} from './exchange-office/currency/currency.component';
import {FormsModule} from "@angular/forms";
import {AlertComponent} from './shared/component/alert/alert.component';
import { ModalComponent } from './shared/component/modal/modal.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ExchangeOfficeComponent,
    CurrencyComponent,
    AlertComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
