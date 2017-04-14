import { Router } from '@angular/router';
import { Store } from './../store.service';
import { Brief } from './brief.model';
import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
//import "rxjs";

@Component({
    selector: 'task-manager-briefs-main',
    template: `

    <p-dataTable [value]="briefsCollection" 
    [resizableColumns]="true" 
    [reorderableColumns]="true" 
    [paginator]="true" 
    [rows]="10" 
    selectionMode="single" 
    [(selection)]="selectedBrief"
    [editable]="true"
    >
        <p-header>רשימת בריפים
        <p-autoComplete 
                id="search" 
                [(ngModel)]="brief" 
                [suggestions]="filteredBriefsSingle" 
                (completeMethod)="filterBriefSingle($event)" 
                placeholder="חפש בריף" 
                field="title"
                [style]="{'text-align':'right'}"
                >
        
        </p-autoComplete>
       
        </p-header>
        <p-column *ngFor="let item of cols" [field]="item.field" [header]="item.header" [sortable]="true" [editable]="true"></p-column>
        <p-column [field]="due" header="יעד">
            <template let-col let-item="rowData" let-ri="rowIndex" pTemplate="body">
                <span>{{item.due | date}}</span>
            </template>
        </p-column>

        <p-column styleClass="col-button" [style]="{'width':'60px'}">
            <ng-template let-client="rowData" pTemplate="body" >
                <button type="button" pButton (click)="remove(client)" icon="fa-trash"></button>
            </ng-template>
        </p-column>
    </p-dataTable>
  `,
    styles: [
        `#search {
            width:100%
        }`
    ]
})
export class TaskManagerBriefsMainComponent implements OnInit {
    @ViewChild('fieldset') el: ElementRef;
    isOpen: boolean = false;
    selectedBrief: Brief;
    cols: any[] = [];
    filteredBriefsSingle: Brief[];
    briefsCollection: Brief[] = [];

    filterBriefSingle(event) {
        let query = event.query;
        this.store.briefs.subscribe(briefs => {
            this.filteredBriefsSingle = briefs.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) == 0)
        });
    }

    /*filterbrief(query, briefs: Brief[]): Brief[] {
        return briefs.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) == 0);
    }*/

    constructor(private store: Store) { }

    ngOnInit() {
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
    }

    save(newBrief: Brief) {
        this.store.addNewBrief(newBrief);
        this.isOpen = false;
    }

}
