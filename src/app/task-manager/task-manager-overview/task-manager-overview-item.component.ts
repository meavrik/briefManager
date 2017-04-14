
import { Brief } from './../task-manager-briefs/brief.model';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//<img src="./resources/starwars/avatar_4.jpeg" alt="Smiley face" >


/*<p-toggleButton #butn [(ngModel)]="checked" onIcon="fa-minus-circle" offIcon="fa-plus-circle" [onLabel]="brief.title" [offLabel]="brief.title" 
      (click)="onClick()" 
      [style]="style"
      class="ui-button-icon-left"
      >

      </p-toggleButton>
    <br/>*/


const colorsArr = [
      {'width':'100%','background-color':'yellow'},
      {'width':'100%','background-color':'red','color':'white'},
      {'width':'100%','background-color':'green','color':'white'},
      {'width':'100%'}];
@Component({
  selector: 'task-manager-overview-item',
  template: `
      <p-accordion>
        <p-accordionTab>
            <p-header>
                <img src="./assets/starwars/avatar_{{avatar}}.jpeg" alt=":)" style="width:20px">
                
                {{brief.title}}
            </p-header>
        
           <strong>{{brief.description}}</strong>
           <p>{{brief.project}}</p>
        </p-accordionTab>
      </p-accordion>
      
  `,
  styles: []
})
export class TaskManagerOverviewItemComponent implements OnInit {

  @Input() brief: Brief;
  @Output() selected = new EventEmitter<any>();

  style;
  checked: boolean = false;
  butnClassArr: string[] = ["ui-button-danger", "ui-button-warning", "ui-button-default", "ui-button-success"]
  items: MenuItem[] = [];
  butnClass = "ui-button-danger";
  avatar:number;

  constructor() {
      this.avatar = Math.floor(Math.random()*9)+1;
  }

  ngOnInit() {
    console.log("status= " + this.brief.status);

    this.butnClass = this.butnClassArr[this.brief.status];
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

    this.style=colorsArr[this.brief.status];
    //this.avatar=this.usersService.collection[this.brief.assignto-1].avatarId;
  }

  
  onClick() {
    this.selected.emit({ event: event, checked: this.checked,brief:this.brief });
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
