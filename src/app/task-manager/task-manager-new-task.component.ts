import { BriefTask } from './../task';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    selector: 'task-manager-new-task',
    template: `
    <md-card class="app-input-section">
        
        <form [formGroup]="dataForm">
            
            <p-autoComplete formControlName="title" [suggestions]="results" placeholder="כותרת"></p-autoComplete>
            <p-calendar formControlName="due" [(ngModel)]="value" placeholder="תאריך יעד" [showTime]="true"></p-calendar>
            <br/>
            <br/>
            <textarea rows="5" cols="30" pInputTextarea placeholder="תיאור"></textarea>  
            
             
            <p-dropdown formControlName="client" [options]="clients" [(ngModel)]="selectedClient"></p-dropdown>
            <p-multiSelect formControlName="city" defaultLabel="בחר פורמט" [options]="formats" [(ngModel)]="selectedFormats"></p-multiSelect>
            <br/>
            <input type="text" placeholder="{{val}}"/>
            <p-slider formControlName="step" [(ngModel)]="val" [min]="1" [max]="5"></p-slider>

            <md-menu #formatMenu="mdMenu">
            <button *ngFor="let item of formats" md-menu-item>{{item.name}}</button>
            </md-menu>
        
            <md-menu #assignMenu="mdMenu">
                <button *ngFor="let item of users" md-menu-item>{{item.name}}</button>
            </md-menu>
    
            
            <button (click)="onSave()" class="save-button" md-raised-button color="primary">שמור</button>
        </form>
    </md-card>
  `,
    styles: [`

    `]
})


//  <datepicker [(ngModel)]="model.firstDate" [viewFormat]="'DD/MM/YYYY'" [modelFormat]="'YYYY-MM-DD'"  [id]="'firstDate'" [label]="'To'"></datepicker>

export class TaskManagerNewTaskComponent implements OnInit {
    formats;
    users;
    clients;
    dataForm: FormGroup;
    cities: SelectItem[];
    selectedFormats: any;
    selectedClient: any;
    val: number;
    value: Date;
    _tasks: BriefTask[]=[];

    constructor(private formBuilder: FormBuilder, private _tasksService: TasksService) {
        this.formats = _tasksService.formats;
        this.users = _tasksService.users;
        this.clients = _tasksService.clients;
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
        });
    }

    onSave() {

        console.log("SAVE! ");
        let task: BriefTask = {
            id:1,
            name: "test",
            description: "bla bla"
        }
        //this._tasksService.saveTask(task);

        if (!task) { return; }
        // this._tasksService.addTask(task).subscribe(task  => this._tasks.push(task));
        //this._tasksService.addTask(task).subscribe(task => this.immutablePush(this._tasks, task));

        this._tasksService.addTask(task)
          .then(task => {
            this._tasks.push(task);
          });
    }

    immutablePush(arr, newEntry) {
        return [...arr, newEntry]
    }

    text: string;

    results: string[] = ["apple", "banana", "orange"];

    /*search(event) {
        this._tasksService.getTasks().then(data => {
            this.results = data;
        });
    }*/

}
