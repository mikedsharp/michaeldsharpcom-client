import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'; 
 

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { NavComponent } from './shared/nav/nav.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    routedComponents, 
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing, 
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
