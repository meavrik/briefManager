import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import 'rxjs';

@Component({
    selector: 'task-manager-new-task',
    template: `
    <md-card class="app-input-section">

        <form [formGroup]="dataForm">
            <p-autoComplete formControlName="name" [suggestions]="results" placeholder="כותרת"></p-autoComplete>
               <p-dropdown [options]="cities" formControlName="city"></p-dropdown>

            <md-input placeholder="שם"></md-input>
            <md-input id="des" #nickname placeholder="תיאור" maxlength="200">
                <md-hint align="end">
                    {{nickname.characterCount}} / 200
                </md-hint>
            </md-input>

            <ng2-datepicker formControlName="date" ></ng2-datepicker>
            
            <button md-button [md-menu-trigger-for]="assignMenu">לקוח</button>
            <button md-button [md-menu-trigger-for]="formatMenu">פורמט</button>
            <button md-button [md-menu-trigger-for]="assignMenu">שייך ל</button>
            
            
            <div>
                <p>חשיבות</p>
                <md-slider tick-interval="auto" > </md-slider>
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
    cities: SelectItem[];
    selectedCity: string;

    constructor(private formBuilder: FormBuilder, private _tasks: TasksService) {
        this.formats = _tasks.formats;
        this.users = _tasks.users;


        this.cities = [];
        this.cities.push({label:'Select City', value:null});
        this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
        this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
        this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
        this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
    }

    ngOnInit() {
        this.dataForm = this.formBuilder.group({
            name:'',
            date: '',
            city:""
        });
    }

    onSave(){
        console.log("SAVE!");
        
    }




    text: string;
    
    results: string[] = ["apple","banana","orange"];
    
    /*search(event) {
        this._tasks.getTasks().then(data => {
            this.results = data;
        });
    }*/

}
