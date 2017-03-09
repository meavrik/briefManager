import { Brief } from '../task-manager-briefs/brief.model';
import { Store } from './../store.service';
import { Client } from './../task-manager-clients/Client';
import { User } from './../task-manager-users/user.model';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'new-brief-form',
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
export class NewBriefFormComponent implements OnInit {
  dataForm: FormGroup;
  dropDownStyle = { 'width': '30%', 'margin': '5px' };

  formats: string[] = [];
  users: any[] = [];
  clients: any[] = [];
  projects: any[] = [];

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

  @Output() save = new EventEmitter<any>();
  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.store.users.subscribe(users => {
      this.users = [...users];
      this.users.forEach(item => { item.label = item.name; item.value = item.userId });
      this.users.unshift({ label: "משוייך ל", value: null })
    });
    this.store.clients.subscribe(clients => {
      this.clients = [...clients];
      this.clients.forEach(item => { item.label = item.value = item.name });
      this.clients.unshift({ label: "לקוח" })
    });
    this.store.projects.subscribe(projects => {
      this.projects = [...projects];
      this.projects.forEach(item => { item.label = item.name; item; item.value = item.projectNumber });
      this.projects.unshift({ label: "פרוייקט" })
    });
  }

  onProjectSelect() {
    console.log("onProjectSelect " + this.selectedProject);
    this.selectedCatlogId = Number.parseFloat(this.selectedProject) + 1;
  }

  onClick() {
    if (this.dataForm.valid) {
      let newBrief: Brief = new Brief(this.title,
        this.description,
        this.selectedProject,
        this.selectedUser,
        this.formats,
        this.selectedClient,
        this.dueDate.getTime()
      )
      this.save.emit({ event: event, brief: newBrief });
      this.title = "";
      this.selectedClient = null;
      this.selectedUser = null;
    }
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: '',
      formats: '',
      client: '',
      dueDate: '',
      user: "",
      keys: "",
      project: "",
      catalogId: 1000
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
  }

}
