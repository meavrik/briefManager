import { BriefTask } from './task';
import { Injectable } from '@angular/core';
import {RequestMethod, Http,  Response,  RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs';

const BASE_URL: string = "http://localhost:27017/";
const TASKS_URL: string = BASE_URL + `gettasks`
@Injectable()
export class TasksService {

  _tasks: BriefTask[] = [];

  constructor(private http: Http) {

  }

  getTasks(): Observable<any[]> {
    return this.http.get(BASE_URL+"tasks")
      .map(this.extractData)
      .catch(this.handleError);
  }

  addTask1(task: BriefTask): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(BASE_URL + "tasks", JSON.stringify(task), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addTask(task: BriefTask): Promise<BriefTask> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(BASE_URL+"tasks", task, options)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("complete!!!");
    this._tasks = body;
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

  /*saveTask(task: any):Observable<any[]> {
   return this.http.get(this.url+`inserttask`)
     .map(function(res: Response){
         let body = res.json();
         console.log("post complete!!!");
         this._tasks = body;
         return body || [];
     })
 }*/




  /*saveTask(task: any) {
   this.http.post(BASE_URL+'inserttask', task).subscribe(function (res) {
      //this._tasks.push(res);
      console.log("post complete!!!"+res.json);
    });
  }*/


  clients: any[] = [
    { label: 'client1', value: 'a3', width: 20, height: 30 },
    { label: 'client2', value: 'a4', width: 20, height: 30 },
    { label: 'client3', value: 'a5', width: 20, height: 30 },
    { label: 'client4', value: 'a6', width: 20, height: 30 },
    { label: 'client5', value: 'a3', width: 20, height: 30 },
  ];

  formats: any[] = [
    { label: 'A3', value: 'a3', width: 20, height: 30 },
    { label: 'A4', value: 'a4', width: 20, height: 30 },
    { label: 'A5', value: 'a5', width: 20, height: 30 },
    { label: 'A6', value: 'a6', width: 20, height: 30 },
    { label: 'Letter', value: 'a3', width: 20, height: 30 },
  ];

  users: any[] = [
    { label: 'Dana' },
    { label: 'Avrik' },
    { label: 'Or' },
    { label: 'Yuval' },
    { label: 'Sarai' },
  ];

  tickets: any[] = [
    {
      name: 'משימה 1',
      description: 'מיתוג מחדש של הכול + לוגו והרבה דברים יפים',
      formats: [{ name: "A4" }, { name: "A5" },],
      dueData: 456546546
    },
    {
      name: 'משימה',
      description: 'עיצוב מגניב של בל בלה',
      formats: [{ name: "A4" }, { name: "A5" },],
      dueData: 456546546
    },
    {
      name: 'משימה',
      description: 'עוד דברים יפים',
      formats: [{ name: "A4" }, { name: "A5" },],
      dueData: 456546546
    },
    {
      name: 'משימה',
      description: 'מיתוג מחדש של הפלאפל',
      formats: [{ name: "A4" }, { name: "A5" },],
      dueData: 456546546
    },
    {
      name: 'משימה גדולה',
      description: 'brand all again',
      formats: [{ name: "A4" }, { name: "A5" },],
      dueData: 456546546
    },
  ];
}
