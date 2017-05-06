import { User } from './../task-manager-users/user.model';
import { Router } from '@angular/router';
import { Store } from './../store.service';
import { Brief } from './brief.model';
import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
//import "rxjs";

@Component({
    selector: 'task-manager-briefs-main',
    template: `

    <p-dataTable [value]="briefsCollection" 

    reorderableColumns="true" 
    paginator="true" 
    [rows]="10" 
    
    [(selection)]="selectedBrief"
    editable="true"
    >
        <p-header>רשימת בריפים
        <p-autoComplete 
                id="search" 
                [(ngModel)]="findBrief" 
                [suggestions]="filteredBriefsSingle" 
                (completeMethod)="filterBriefSingle($event)" 
                placeholder="חפש בריף" 
                field="title"
                [style]="{'text-align':'right'}"
                >
        
        </p-autoComplete>
        
        <button pButton type="button" (click)="onclick()" label="חדש"></button>

        </p-header>

        <p-column styleClass="col-button" header="פעולות" [style]="{'width':'140px','text-align':'center'}">
            <ng-template let-client="rowData" pTemplate="body" >
                <button type="button" pButton (click)="remove(client)" icon="fa-eye"></button>
                <button type="button" pButton (click)="remove(client)" icon="fa-edit"></button>
                <button type="button" pButton (click)="remove(client)" icon="fa-trash"></button>
            </ng-template>
        </p-column>

        <p-column  field="index" header="מספר" [sortable]="true" [editable]="true" [style]="{'width':'50px','text-align':'center'}" ></p-column>
        <p-column  field="title" header="שם" [sortable]="true" editable="true"></p-column>
        <p-column field="assignto" header="משוייך ל" [sortable]="true" [editable]="true" [style]="{'width':'15%'}">
            <ng-template let-brief="rowData" pTemplate="body" >
                <p>{{getUserName(brief)}}</p>
            </ng-template>
        </p-column>
        <p-column  field="status" header="סטטוס" [sortable]="true" [editable]="true" [style]="{'width':'5%','text-align':'center'}"></p-column>
        <p-column  field="priority" header="חשיבות" [sortable]="true" [editable]="true" [style]="{'width':'5%','text-align':'center'}"></p-column>
        <!--<p-column [field]="due" header="יעד">
            <ng-template let-col let-item="rowData" let-ri="rowIndex" pTemplate="body">
                <span>{{item.due | date}}</span>
            </ng-template>
        </p-column>-->

        
    </p-dataTable>
  `,
    styles: [
        `#search {
            width:100%
        }`
    ]
})
export class TaskManagerBriefsMainComponent {
    @ViewChild('fieldset') el: ElementRef;

    isOpen: boolean = false;
    selectedBrief: Brief;
    cols: any[] = [];
    filteredBriefsSingle: Brief[];
    briefsCollection: Brief[] = [];
    findBrief;
    users:User[];

    filterBriefSingle(event) {
        let query = event.query;
        this.store.briefs.subscribe(briefs => {
            this.filteredBriefsSingle = briefs.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) == 0)
        });
    }

    /*filterbrief(query, briefs: Brief[]): Brief[] {
        return briefs.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) == 0);
    }*/

    getUserName(brief) {
    
      return (this.users &&  this.users.length)?this.users[0].name:"";
    }


    constructor(private store: Store) 
    { 
        this.cols = [
            { field: 'index', header: 'מספר' },
            { field: 'title', header: 'שם' },
            { field: 'assignto', header: 'שיוך' },
            { field: 'status', header: 'סטטוס' },
            { field: 'priority', header: 'priority' },
        ];

        this.store.briefs.subscribe(briefs => {
            this.briefsCollection = [...briefs]
        });

         this.store.users.subscribe(users=>{
            this.users = users;
         })



    }

    save(newBrief: Brief) {
        this.store.addNewBrief(newBrief);
        this.isOpen = false;
    }

}
