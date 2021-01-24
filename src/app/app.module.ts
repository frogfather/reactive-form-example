import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { ActionButtonsBarComponent } from './action-buttons-bar/action-buttons-bar.component';
import { TransactionHeadComponent } from './transaction-head/transaction-head.component';
import { TransactionBodyComponent } from './transaction-body/transaction-body.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, TransactionFormComponent, ActionButtonsBarComponent, TransactionHeadComponent, TransactionBodyComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }