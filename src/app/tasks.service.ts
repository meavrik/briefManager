import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class TasksService {

  constructor(private http: Http) {

  }

  getTasks(): Observable<any[]> {

    let url: string = "http://localhost:27017/gettasks/";
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("complete!!!");
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



  formats: any[] = [
    { name: 'A3', width: 20, height: 30 },
    { name: 'A4', width: 20, height: 30 },
    { name: 'A5', width: 20, height: 30 },
    { name: 'A6', width: 20, height: 30 },
    { name: 'Letter', width: 20, height: 30 },
  ];

  users: any[] = [
    { name: 'Dana' },
    { name: 'Avrik' },
    { name: 'Or' },
    { name: 'Yuval' },
    { name: 'Sarai' },
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
