import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {OnInit} from '@angular/core'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'michaeldsharp.com, under development and coming soon!';
  showingHamburger = false;
  loading = true;  
  
  public constructor(private titleService: Title){
    this.titleService.setTitle('Mike D Sharp - Portfolio'); 
    this.showingHamburger = false; 
}
  ngOnInit(){
    this.loading = false; 
  }

  toggleHamburger(){
    this.showingHamburger = !this.showingHamburger; 
  }
}
