declare var require: any
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

const projects = require('../../projects/projects.json');

debugger;

@Injectable()
export class ProjectService {
  constructor(private http: Http) { }
  server = "https://s3.eu-west-1.amazonaws.com/michaeldsharp.com";
  endpoint = "/projects/projects.json";

  projects: Array<any>;

  getProjects(): Observable<any> {
    return Observable.of(projects.data.projects);
  }

  parseProjects(data) {
    this.projects = data.data.projects;
    return this.projects;
  }

  getProject(id: string): Observable<any> {
    if (this.projects && this.projects.length > 0) {
      return Observable.of(
        this.projects.filter(function (obj) {
          return obj.id === id;
        })[0]
      );
    } else {
      return this.getProjects().map(
        (res) =>
          res.filter(function (obj) {
            return obj.id === id;
          })[0]
      );
    }
  }
}
