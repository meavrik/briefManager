import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-manager-overview-item',
  template: `

    <button [ngClass]="butnClass" pButton type="text" [label]="title" ></button>
    <br/>
    <br/>

  `,
  styles: [`.item:{
    background-color:red;
  }`]
})
export class TaskManagerOverviewItemComponent implements OnInit {

  @Input() title:string;
  @Input() status:number=0;

  butnClassArr:string[] = ["ui-button-danger","ui-button-warning","ui-button-default","ui-button-success"]
  items: MenuItem[] = [];
  butnClass = "ui-button-danger";

  constructor() 
  { 

  }

  ngOnInit() {
    console.log("status= "+this.status);
    
    this.butnClass=this.butnClassArr[status];
    this.items = [
      {
        label: '', icon: 'fa-backward', command: () => {
          this.update();
        }
      },
      {
        label: '', icon: 'fa-edit', command: () => {
          this.delete();
        }
      },
      { label: '', icon: 'fa-forward' },
    ];
  }






    




  update() {
    //this.msgs = [];
    //this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    //this.msgs = [];
    //this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
  }


}
