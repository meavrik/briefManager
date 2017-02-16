import {RequestOptions, Headers,  Http} from '@angular/http';
import { AppConfigService } from './../../app-config.service';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { LoadDataService } from './../../load-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService extends LoadDataService {

  constructor(private http: Http, private config: AppConfigService) {
    super();

  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.config.getUrl(`users`))
      .map(this.extractData)
      .catch(this.handleError);
  }

  addUser(user: User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.config.getUrl(`users`), JSON.stringify(user), options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
