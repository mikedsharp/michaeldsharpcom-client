import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FeedbackService {

    domain = 'http://api.michaeldsharp.com'; 
    endpoint = '/feedback'; 

    registerFeedback(liked:boolean){
         return this.http
            .post(this.domain + this.endpoint, {like : liked})
            .map((res:any) => res.json()); 
    }

    private handleError(err: Response){
       return {error: 'could not reach feedback endpoint'}; 
    }

    constructor(private http: Http) { }

}