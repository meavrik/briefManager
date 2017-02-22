import { Brief } from './task-manager-briefs/brief.model';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { RequestOptions, Headers, Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Store {

  private baseUrl: string;
  private dataStore: any;
  private _briefs: any;

  constructor(private http: Http, private config: AppConfigService) {
    this.baseUrl = 'http://localhost:27017/';
    this.dataStore = { briefs: [], clients: [], users: [], projects: [] };
    this._briefs = <BehaviorSubject<Brief[]>>new BehaviorSubject([]);
  }

  get briefsCollection() {
    return this.dataStore.briefs;
  }

  get briefs() {
    return this._briefs.asObservable();
  }

  getAllBriefs() {
    this.http.get(`${this.baseUrl}tasks`).map(response => response.json()).subscribe(data => {
      this.dataStore.briefs = data ? data : [];
      this._briefs.next(Object.assign({}, this.dataStore).briefs);
    }, error => console.log('Could not load briefs.'));
  }

  addNewBrief(brief: Brief) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.baseUrl}tasks`, JSON.stringify(brief), options)
      .map(response => response.json() || []).subscribe(data => {
        this.dataStore.briefs.push(data);
        this._briefs.next(Object.assign({}, this.dataStore).briefs);
      }, error => console.log('Could not create brief.'));
  }

  updateBrief(brief: Brief) {
    this.http.put(`${this.baseUrl}tasks`, JSON.stringify(brief))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.briefs.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.briefs[i] = data; }
        });

        this._briefs.next(Object.assign({}, this.dataStore).briefs);
      }, error => console.log('Could not update brief.'));
  }

  /*remove(briefId: number) {
    this.http.delete(`${this.baseUrl}tasks/${briefId}`).subscribe(response => {
      this.dataStore.briefs.forEach((t, i) => {
        if (t.id === briefId) { this.dataStore.briefs.splice(i, 1); }
      });
 
      this._briefs.next(Object.assign({}, this.dataStore).briefs);
    }, error => console.log('Could not delete brief.'));
  }*/
}