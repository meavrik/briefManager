import { AppConfigService } from './app-config.service';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

//const headers = new Headers({ 'Content-Type': 'application/json' });
//const options = new RequestOptions({ headers: headers });

@Injectable()
export class LoadDataService {

  collection: any[];

  constructor(private http: Http, private config: AppConfigService, private apiStr: string) {


  }

  getItems(): Observable<any[]> {
    return this.http.get(this.config.getUrl(this.apiStr))
      .map(this.extractData)
      .catch(this.handleError);
  }

  addItem(item: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.config.getUrl(this.apiStr), JSON.stringify(item), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(item: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let bodyString = JSON.stringify(item);

    return this.http.put(`${this.config.getUrl(this.apiStr)}`, bodyString, options)
  }

  protected extractData(res: Response) {
    let body = res.json();
    console.log("data load complete");
    this.collection = body;
    return body || [];
  }

  protected handleError(error: Response | any) {
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
