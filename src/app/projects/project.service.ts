import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'; 
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';  

@Injectable()
export class ProjectService {

    constructor(private http:Http) { }

    server = 'http://michaeldsharpcom-api.herokuapp.com'; 
    endpoint = '/projects'; 

    projects: Array<any>; 

    getProjects():Observable<any>{
        
        if(this.projects && this.projects.length > 0){
            return Observable.of(this.projects ); 
        } else {
               var that = this; 
               return this.http.get(this.server + this.endpoint)
                        .map(res =>  that.projects = res.json().data.projects);
        }        
    }

    parseProjects(data){
        this.projects = data.data.projects; 
        return this.projects; 
    }

    getProject(id:string):Observable<any>{
        
        if(this.projects && this.projects.length > 0){
            return Observable.of(this.projects.filter(function(obj){ return obj.id == id; })[0] ); 
        } else {
               return this.getProjects()
                        .map(res => res.filter(function(obj){ return obj.id == id; })[0]);
        }        
    }
}