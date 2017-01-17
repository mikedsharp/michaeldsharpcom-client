import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'projects-list.component.html', 
    styleUrls: ['projects-list.component.scss'], 
    selector:'project-list-view'
})
export class ProjectsListViewComponent implements OnInit {
    projectListSchema = [
        {
            name: 'Project A', 
            url: '', 
            bgImage: '../../assets/macbook-splash.png' 
        }, 
         {
            name: 'Project B', 
            url: '', 
            bgImage: '' 
        },
         {
            name: 'Project C', 
            url: '', 
            bgImage: '' 
        },
         {
            name: 'Project D', 
            url: '', 
            bgImage: '' 
        },
         {
            name: 'Project E', 
            url: '', 
            bgImage: '' 
        }
    ]; 

    constructor() { }

    ngOnInit() { }
}