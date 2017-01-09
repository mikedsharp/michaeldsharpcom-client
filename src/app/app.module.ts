import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { NavComponent } from './shared/nav/nav.component'; 
import {NavHamburgerComponent} from './shared/nav/nav-hamburger.component'; 
import {ContactFormComponent} from './contact/contact-form.component';

@NgModule({
  declarations: [
    AppComponent, 
    routedComponents, 
    NavComponent, 
    ContactFormComponent, 
    NavHamburgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing, 
    ReactiveFormsModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
