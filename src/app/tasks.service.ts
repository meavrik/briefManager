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
      name: 'task1',
      description:'bgfb gfbhgfh hfgh fghlfkg;hlkgl hfgh kgf;hk fg;hl kgfl;h', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'task2',
      description:'bgfb gfbhgfh hfgh fghlfkg;hlkgl hfgh kgf;hk fg;hl kgfl;h', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'task3',
      description:'bgfb gfbhgfh hfgh fghlfkg;hlkgl hfgh kgf;hk fg;hl kgfl;h', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'task4',
      description:'bgfb gfbhgfh hfgh fghlfkg;hlkgl hfgh kgf;hk fg;hl kgfl;h', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
    {
      name: 'task5',
      description:'bgfb gfbhgfh hfgh fghlfkg;hlkgl hfgh kgf;hk fg;hl kgfl;h', 
      formats:[{name:"A4"},{name:"A5"},],
      dueData:456546546
    },
  ];


  
  constructor() { }

}
