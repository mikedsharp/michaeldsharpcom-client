import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 

@Component({
    templateUrl: 'project.component.html', 
    styleUrls: ['project.component.scss'], 
    selector:'project-view'
})
export class ProjectViewComponent implements OnInit {
    private paramSubscription: any; 
    private id: string; 

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.paramSubscription = this.route.params.subscribe(params => {
            this.id = params['id']; 
        }); 

    }
}