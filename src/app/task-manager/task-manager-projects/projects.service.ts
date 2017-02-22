import { AppConfigService } from '../../app-config.service';
import { LoadDataService } from './../../load-data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProjectsService extends LoadDataService {

  constructor(http: Http, config: AppConfigService) {
    super(http, config, 'projects');

  }
}