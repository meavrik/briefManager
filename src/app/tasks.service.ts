import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

  formats: any[] = [
    {name: 'A3', width:20,height:30},
    {name: 'A4', width:20,height:30},
    {name: 'A5', width:20,height:30},
    {name: 'A6', width:20,height:30},
    {name: 'Letter', width:20,height:30},
  ];

  users: any[] = [
    {name: 'Dana'},
    {name: 'Avrik'},
    {name: 'Or'},
    {name: 'Yuval'},
    {name: 'Sarai'},
  ];

  tickets: any[] = [
    {
      name: 'משימה 1',
      description:'מיתוג מחדש של הכול + לוגו והרבה דברים יפים', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'משימה',
      description:'עיצוב מגניב של בל בלה', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'משימה',
      description:'עוד דברים יפים', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'משימה',
      description:'מיתוג מחדש של הפלאפל', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'משימה גדולה',
      description:'brand all again', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
  ];


  
  constructor() { }

}
