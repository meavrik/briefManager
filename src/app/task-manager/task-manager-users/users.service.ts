import { RequestOptions, Headers, Http } from '@angular/http';
import { AppConfigService } from './../../app-config.service';
import { LoadDataService } from './../../load-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService extends LoadDataService {

  constructor(http: Http, config: AppConfigService) {
    super(http, config, `users`);

  }
}
