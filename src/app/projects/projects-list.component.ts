import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service'; 
import {Observable} from 'rxjs/Observable'; 

@Component({
    templateUrl: 'projects-list.component.html', 
    styleUrls: ['projects-list.component.scss'], 
    selector:'project-list-view'
})
export class ProjectsListViewComponent implements OnInit {
    
    projectListSchema:Array<Object> = [];

    constructor(private projects:ProjectService) { 
       
    }
    
    ngOnInit() {
         this.projects.getProjects()
         .subscribe(data => this.projectListSchema = data);
    
    }
}