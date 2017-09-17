import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {OnInit} from '@angular/core';
import {ProjectService} from './projects/project.service';
import {PingService} from './ping/ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProjectService, PingService]
})
export class AppComponent implements OnInit {
  title = 'michaeldsharp.com, under development and coming soon!';
  showingHamburger = false;
  loading = true;

  public constructor(private titleService: Title, private projects: ProjectService, private ping: PingService){
    this.ping.ping()
      .subscribe(res => {
        console.log(res.message);
      });
    this.titleService.setTitle('Mike D Sharp - Portfolio');
    this.showingHamburger = false;
}
  ngOnInit() {
    this.loading = false;
  }

  toggleHamburger() {
    this.showingHamburger = !this.showingHamburger;
  }
}
