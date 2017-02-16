import { Client } from './Client';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class ClientService {

  _clients: Client[]=[];
  url = "http://localhost:27017/";

  constructor(private http: Http) {
      
  }

  getClients(): Observable<Client[]> {
    return this.http.get(this.url+`getclients`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("clients complete!!!");
    this._clients = body;
    return body || [];
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}