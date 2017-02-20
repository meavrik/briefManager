import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-manager-overview-item',
  template: `
    <p-toggleButton #butn [(ngModel)]="checked" onIcon="fa-check-square" [onLabel]="title" [offLabel]="title" 
    (click)="onClick()" 
    [style]="{'width':'100%'}"
    class="ui-button-icon-left"
    ></p-toggleButton>
    <br/>
  `,
  styles: []
})
export class TaskManagerOverviewItemComponent implements OnInit {

  @Input() title: string;
  @Input() status: number = 0;

  checked: boolean = false;
  butnClassArr: string[] = ["ui-button-danger", "ui-button-warning", "ui-button-default", "ui-button-success"]
  items: MenuItem[] = [];
  butnClass = "ui-button-danger";

  constructor() {

  }

  ngOnInit() {
    console.log("status= " + this.status);

    this.butnClass = this.butnClassArr[status];
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

  @Output() selected = new EventEmitter<any>();
  onClick() {
    this.selected.emit({ event: event, checked: this.checked });
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
