import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PingService {

    constructor(private http: Http) { }

    server = 'http://api.michaeldsharp.com';
    endpoint = '/ping';

    ping(): Observable<any> {
        return this.http.get(this.server + this.endpoint)
        .map(res => res.json());
    }
}
