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

@Component({
  selector: 'task-manager-briefs-new',
  template: `

      <form [formGroup]="dataForm" >
          <p-autoComplete #title formControlName="title" [suggestions]="results" placeholder="כותרת"></p-autoComplete>
          <p-calendar formControlName="due" [(ngModel)]="value" placeholder="תאריך יעד" [showTime]="true"></p-calendar>
          
          <p-dropdown formControlName="user" [options]="users" [(ngModel)]="selectedUser" placeholder="שייך ל"></p-dropdown>
          <p-dropdown formControlName="client" [options]="clients" [(ngModel)]="selectedClient" placeholder="שייך ל"></p-dropdown>
          <br/>
          <textarea #textarea formControlName="description" rows="5" cols="30" pInputTextarea placeholder="תיאור"></textarea>  
          
          <br/>
          <p-chips formControlName="keys" [(ngModel)]="keys" placeholder="קטגוריות"></p-chips>

          <br/>
          <button type="button" pButton icon="fa-plus" (click)="onClick(title.value,textarea.value)" label="שמור"></button>
      </form>
    
  `,
  styles: []
})
export class TaskManagerBriefsNewComponent implements OnInit {

  formats = [];
  users: SelectItem[] = [];
  clients:Client[] = [{label:"aaaaa",value:"בחר לקוח"}];
  dataForm: FormGroup;
  //cities: SelectItem[];
  selectedFormats: any;
  selectedClient: any;
  selectedUser: any;
  val: number;
  value: Date;
  _briefs: Brief[] = [];
  results = [];
  
  keys: any[];


  @Output() save = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private briefService: BriefService,
    private usersService: UsersService,
    private clientService: ClientService
    ) 
    
    {
    this.usersService.getUsers().subscribe(users => this.users = users);
    this.clientService.getClients().subscribe(client => this.clients = client);
  }

  onClick(title: string, description: string) {
    this.save.emit({ event: event, title: title, description: description });
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      title: '',
      description: '',
      step: '',
      client: '',
      date: '',
      city: "",
      due: "",
      user: "",
      keys:"",
    });
  }

}
