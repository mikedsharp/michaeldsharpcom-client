import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'; 

@Component({
    selector: 'project-tile',
    templateUrl: 'project-tile.component.html',
    styleUrls: ['project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {
    @Input() projectMetadata; 
    thumbnailBaseUrl:String; 
    
    constructor() { 
        this.thumbnailBaseUrl = 'https://s3-eu-west-1.amazonaws.com/michaeldsharp.com/assets/thumbs'; 
    }

    ngOnInit() { }
}