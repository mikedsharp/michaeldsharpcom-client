import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

    constructor() { }

    projects =  [
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

    getProjects(){
        return this.projects; 
    }

    getProject(id:string){
        return this.projects.filter(function(obj){ return obj.id == id; })
    }
}