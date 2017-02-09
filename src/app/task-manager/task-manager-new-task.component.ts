import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'task-manager-new-task',
    template: `
    <md-card class="app-input-section">
        <form [formGroup]="dataForm">
            <md-input placeholder="שם"></md-input>
            <md-input id="des" #nickname placeholder="תיאור" maxlength="200">
                <md-hint align="end">
                    {{nickname.characterCount}} / 200
                </md-hint>
            </md-input>
            <md-datepicker ng-model="myDate" md-placeholder="Enter date"></md-datepicker>
            <ng2-datepicker formControlName="date" ></ng2-datepicker>

            <button md-button [md-menu-trigger-for]="formatMenu">פורמט</button>
            <button md-button [md-menu-trigger-for]="assignMenu">שייך ל</button>
            
            <div>
                <p>חשיבות</p>
                <md-slider tick-interval="auto"> </md-slider>
            </div>

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
    dataForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private _tasks: TasksService) {
        this.formats = _tasks.formats;
        this.users = _tasks.users;
    }

    ngOnInit() {
        this.dataForm = this.formBuilder.group({
            date: ''
        });
    }

    onSave(){
        console.log("SAVE!");
        
    }

}
