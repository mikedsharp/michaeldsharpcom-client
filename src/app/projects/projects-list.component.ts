import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service'; 

@Component({
    templateUrl: 'projects-list.component.html', 
    styleUrls: ['projects-list.component.scss'], 
    providers: [ProjectService],
    selector:'project-list-view'
})
export class ProjectsListViewComponent implements OnInit {
    
    projectListSchema:Array<Object>; 

    constructor(private projects:ProjectService) { 
    }
    
    ngOnInit() {
        this.projectListSchema = this.projects.getProjects();     
    }
}