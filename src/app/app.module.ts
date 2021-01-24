import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConditionFormComponent } from './condition-form/condition-form.component';
import { ActionButtonsBarComponent } from './action-buttons-bar/action-buttons-bar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ConditionFormComponent, ActionButtonsBarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }