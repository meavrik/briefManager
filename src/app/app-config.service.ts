import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
  
  static BASE_URL: string = "http://localhost:27017/";
  constructor() { }
  
  getUrl(url:string):string {
    return AppConfigService.BASE_URL+url;
  }
}
