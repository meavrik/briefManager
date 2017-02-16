import { Brief } from './brief.model';
import { LoadDataService } from './../../load-data.service';
import { AppConfigService } from './../../app-config.service';

import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BriefService extends LoadDataService {

  _briefs: Brief[] = [];

  constructor(private http: Http, private config: AppConfigService) {
    super();

  }

  getbriefs(): Observable<Brief[]> {
    return this.http.get(this.config.getUrl(`tasks`))
      .map(this.extractData)
      .catch(this.handleError);
  }

  addBrief(task: Brief): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.config.getUrl(`tasks`), JSON.stringify(task), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updatebriefs(task: Brief): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.config.getUrl(`updatetask`), task, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /*addBrief2222(task: Brief): Promise<BriefTask> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(TASKS_URL, task, options)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }*/


}
