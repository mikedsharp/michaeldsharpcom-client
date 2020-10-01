import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { NavComponent } from './shared/nav/nav.component'; 
import {NavHamburgerComponent} from './shared/nav/nav-hamburger.component'; 
import {ContactFormComponent} from './contact/contact-form.component';
import {ProjectTileComponent} from './projects/project-tile.component';

@NgModule({
  declarations: [
    AppComponent, 
    routedComponents, 
    NavComponent, 
    ContactFormComponent, 
    NavHamburgerComponent, 
    ProjectTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
