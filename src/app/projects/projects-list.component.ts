import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'projects-list.component.html', 
    styleUrls: ['projects-list.component.scss'], 
    selector:'project-list-view'
})
export class ProjectsListViewComponent implements OnInit {
    projectListSchema = [
        {
            name: 'Rebound', 
            url: '', 
            bgImage: '../../assets/macbook-splash.png' 
        }, 
         {
            name: 'MapWork', 
            url: '', 
            bgImage: '../../assets/macbook-splash.jpg' 
        },
         {
            name: 'BLOCK', 
            url: '', 
            bgImage: '../../assets/macbook-splash.jpg' 
        },
         {
            name: 'Alien Invasion', 
            url: '', 
            bgImage: '../../assets/macbook-splash.png' 
        },
         {
            name: 'Meteor defence', 
            url: '', 
            bgImage: '../../assets/macbook-splash.jpg' 
        }
    ]; 

    constructor() { }

    ngOnInit() { }
}