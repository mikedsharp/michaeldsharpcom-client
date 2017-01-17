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
            id: 'rebound', 
            bgImage: '../../assets/macbook-splash.png' 
        }, 
         {
            name: 'MapWork', 
            id: 'mapwork', 
            bgImage: '../../assets/macbook-splash.jpg' 
        },
         {
            name: 'BLOCK', 
            id: 'block', 
            bgImage: '../../assets/macbook-splash.jpg' 
        },
         {
            name: 'Alien Invasion', 
            id: 'alien-invasion', 
            bgImage: '../../assets/macbook-splash.png' 
        },
         {
            name: 'Meteor defence', 
            id: 'meteor-defence', 
            bgImage: '../../assets/macbook-splash.jpg' 
        }
    ]; 

    constructor() { }
    ngOnInit() { }
}