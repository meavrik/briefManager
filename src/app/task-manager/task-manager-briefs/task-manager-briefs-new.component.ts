import { Client } from './../task-manager-clients/Client';
import { ClientService } from './../task-manager-clients/client.service';
import { Brief } from './brief.model';
import { User } from './../task-manager-users/user.model';
import { UsersService } from './../task-manager-users/users.service';

import { BriefService } from './brief.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
//<textarea #textarea formControlName="description" rows="5" cols="30" pInputTextarea placeholder="תיאור" [style]="dropDownStyle"></textarea> 
@Component({
  selector: 'task-manager-briefs-new',
  template: `

      <form [formGroup]="dataForm" >
          
          <p-autoComplete [(ngModel)]="title" formControlName="title" [suggestions]="results" placeholder="כותרת" [style]="dropDownStyle"></p-autoComplete>
          <p-dropdown class="input" formControlName="user" [options]="users" [(ngModel)]="selectedUser" [style]="dropDownStyle" [required]="true"></p-dropdown>
          <p-calendar formControlName="dueDate" [(ngModel)]="dueDate" placeholder="תאריך יעד" [showIcon]="true" [style]="dropDownStyle">></p-calendar> 
          <br/>
          
          <p-dropdown formControlName="client" [options]="clients" [(ngModel)]="selectedClient" [style]="dropDownStyle"></p-dropdown>
          <p-dropdown formControlName="project" [options]="projects" [(ngModel)]="selectedProject" [style]="dropDownStyle"></p-dropdown>
          <p-spinner formControlName="catalogId" [(ngModel)]="selectedCatlogId" placeholder="מספר קטלוגי" [min]='1' [max]='1000000' [style]="dropDownStyle"></p-spinner>
          <br/>
           <p>תיאור המשימה</p>
          <p-editor #textarea formControlName="description" [(ngModel)]="description" placeholder="" [style]="{'height':'80px'}">
          </p-editor>
          <br/>
          <p-chips formControlName="keys" [(ngModel)]="keys" placeholder="קטגוריות (לדוגמא : פרינט,ווב וכו)"></p-chips>
          <p-chips formControlName="formats" [(ngModel)]="formats" placeholder="פורמטים (A4, A5, Letter)"></p-chips>

          <br/>
          <button pButton type="button" (click)="onClick()" label="שמור" [style]="{'text-align':'left'}"></button>
      </form>
    
  `,
  styles: []
})
export class TaskManagerBriefsNewComponent implements OnInit {
  dataForm: FormGroup;
  dropDownStyle = {'width':'30%','margin':'5px'};

  formats :any[];
  users: any[] = [];
  clients:any[] = [];
  projects:any[] = [{label:'פרוייקט'},{label:'project1'},{label:'project2'}];
  
  selectedFormats: string[];
  selectedClient: string;
  selectedUser: string;
  selectedProject: string;
  selectedCatlogId:number;


  _briefs: Brief[] = [];
  dueDate: Date;
  results = [];
  keys: any[];
  description: string;
  title:string;

  @Output() save = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private briefService: BriefService,
    private usersService: UsersService,
    private clientService: ClientService
    ) 
    
    {
    this.usersService.getUsers().subscribe(users => 
    {
      this.users = users;
      this.users.forEach(item=>item.label=item.name);
      this.users.unshift({label:"משוייך ל"})
    });
    this.clientService.getClients().subscribe(client => 
    {
      this.clients = client;
      this.clients.forEach(item=>item.label=item.name);
      this.clients.unshift({label:"לקוח"})
    });
  }

  onClick() {
    let newBrief:Brief=new Brief(0,this.title,this.description,this.selectedProject,this.selectedUser)
    this.save.emit({ event: event, brief: newBrief });
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      title: '',
      description: '',
      formats:'',
      client: '',
      dueDate: '',
      city: "",
      user: "",
      keys:"",
      project:"",
      catalogId:1000
    });
  }

}
