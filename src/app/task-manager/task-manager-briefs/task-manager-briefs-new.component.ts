import { ProjectsService } from '../task-manager-projects/projects.service';
import { Client } from './../task-manager-clients/Client';
import { ClientService } from './../task-manager-clients/client.service';
import { Brief } from './brief.model';
import { User } from './../task-manager-users/user.model';
import { UsersService } from './../task-manager-users/users.service';

import { BriefService } from './brief.service';
import {FormControl,  Validators,   FormBuilder,    FormGroup} from '@angular/forms';
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Message, SelectItem,  MenuItem} from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-manager-briefs-new',
  template: `

      <form [formGroup]="dataForm" (ngSubmit)="onSubmit(userform.value)">
          <p-autoComplete [(ngModel)]="title" formControlName="title" [suggestions]="results" placeholder="כותרת" [style]="dropDownStyle"></p-autoComplete>
          <p-dropdown class="input" formControlName="user" [options]="users" [(ngModel)]="selectedUser" [style]="dropDownStyle" [required]="true"></p-dropdown>
          <p-calendar formControlName="dueDate" [(ngModel)]="dueDate" placeholder="תאריך יעד" [showIcon]="true" [style]="dropDownStyle">></p-calendar> 
          <br/>
          
          <p-dropdown formControlName="client" [options]="clients" [(ngModel)]="selectedClient" [style]="dropDownStyle"></p-dropdown>
          <p-dropdown formControlName="project" [options]="projects" [(ngModel)]="selectedProject" [style]="dropDownStyle" (onChange)="onProjectSelect()"></p-dropdown>
          <p-spinner formControlName="catalogId" [disabled]="!selectedProject" [(ngModel)]="selectedCatlogId" placeholder="מספר קטלוגי" [min]='1' [max]='1000000' [style]="dropDownStyle"></p-spinner>
          <br/>
           <p>תיאור המשימה</p>
          <p-editor #textarea formControlName="description" [(ngModel)]="description" placeholder="" [style]="{'height':'80px'}">
          </p-editor>
          <br/>
          <p-chips formControlName="keys" [(ngModel)]="keys" placeholder="קטגוריות (לדוגמא : פרינט,ווב וכו)"></p-chips>
          <p-chips formControlName="formats" [(ngModel)]="formats" placeholder="פורמטים (A4, A5, Letter)"></p-chips>

          <br/>
          <button pButton type="button" (click)="onClick()" [disabled]="!dataForm.valid" label="שמור" [style]="{'text-align':'left'}"></button>
      </form>
    
  `,
  styles: []
})
export class TaskManagerBriefsNewComponent implements OnInit {
  dataForm: FormGroup;
  dropDownStyle = { 'width': '30%', 'margin': '5px' };

  formats: any[];
  users: any[] = [];
  clients: any[] = [];
  projects: any[] = [];

  selectedFormats: string[];
  selectedClient: any;
  selectedUser: number;
  selectedProject: any;
  selectedCatlogId: number;

  _briefs: Brief[] = [];
  dueDate: Date;
  results = [];
  keys: any[];
  description: string;
  title: string;
  
  submitted: boolean;
  msgs: Message[] = [];
  
  @Output() save = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private briefService: BriefService,
    private usersService: UsersService,
    private clientService: ClientService,
    private projectsService: ProjectsService
  ) {
    this.usersService.getItems().subscribe(users => {
      this.users = users;
      this.users.forEach(item => { item.label = item.name; item.value = item.userId });
      this.users.unshift({ label: "משוייך ל" ,value:null})
    });
    this.clientService.getClients().subscribe(client => {
      this.clients = client;
      this.clients.forEach(item => { item.label = item.name; item.value = item.name });
      this.clients.unshift({ label: "לקוח" })
    });

    this.projectsService.getItems().subscribe(projects => {
      this.projects = projects;
      this.projects.forEach(item => { item.label = item.title; item; item.value = item.projectId });
      this.projects.unshift({ label: "פרוייקט" })
    });
  }

  onProjectSelect() {
    console.log("onProjectSelect " + this.selectedProject);
    this.selectedCatlogId = Number.parseFloat(this.selectedProject) + 1;
  }

  onClick() {
    if (this.dataForm.valid){
      let newBrief: Brief = new Brief(this.title, this.description, this.selectedProject, this.selectedUser)
      this.save.emit({ event: event, brief: newBrief });
    }
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      description: '',
      formats: '',
      client: '',
      dueDate: '',
      city: "",
      user: "",
      keys: "",
      project: "",
      catalogId: 1000
    });
  }

  onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
    }

}
