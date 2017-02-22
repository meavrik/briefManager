import { Router } from '@angular/router';
import { Store } from './../store.service';
import { Brief } from './brief.model';
import { BriefService } from './brief.service';
import { Component, OnInit } from '@angular/core';
//import "rxjs";

@Component({
    selector: 'task-manager-briefs-main',
    template: `
    <p-fieldset #fieldset legend="צור בריף חדש" toggleable="true" [collapsed]="true">
         <task-manager-briefs-new (save)="save($event.brief)"></task-manager-briefs-new>
    </p-fieldset>
    
    <p-dataTable [value]="briefsCollection" [resizableColumns]="true" [reorderableColumns]="true" [paginator]="true" [rows]="10" selectionMode="single" [(selection)]="selectedBrief">
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
        <p-column *ngFor="let item of cols" [field]="item.field" [header]="item.header" [sortable]="true"></p-column>
    </p-dataTable>
  `,
    styles: [
        `#search {
            width:100%
        }`
    ]
})
export class TaskManagerBriefsMainComponent implements OnInit {

    brief: Brief;
    selectedBrief: Brief;
    cols: any[] = [];
    filteredBriefsSingle: Brief[];
    briefs: Brief[];
    briefsCollection: Brief[] = [];

    filterBriefSingle(event) {
        let query = event.query;
        /*this.briefService.getItems().subscribe(briefs => {
            this.filteredBriefsSingle = this.filterbrief(query, briefs);
        });*/
    }

    filterbrief(query, briefs: Brief[]): Brief[] {
        return briefs.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) == 0);
    }

    constructor(private briefService: BriefService, private store: Store) { }

    ngOnInit() {
        /*this.briefService.getItems().subscribe(briefs => {
            this.briefService.collection = briefs
        });*/

        this.cols = [
            { field: 'index', header: 'מספר' },
            { field: 'title', header: 'שם' },
            { field: 'assignto', header: 'שיוך' },
            { field: 'status', header: 'סטטוס' },
            { field: 'due', header: 'יעד' },
            { field: 'priority', header: 'priority' },
        ];

        this.briefs = this.store.briefs.subscribe(briefs => {
            this.briefs = briefs;
            this.briefsCollection = [];
            this.briefs.forEach(item => this.briefsCollection.push(item))
        });
    }

    save(newBrief: Brief) {
        //newBrief.index = this.store.
        if (!newBrief) return;

        newBrief.index = this.store.briefsCollection.length;
        console.log('new brief #'+newBrief.index);
        
        this.store.addNewBrief(newBrief);
        /*
        newBrief.index = this.briefService.collection.length;
        this.briefService.addItem(newBrief).subscribe(brief => {
            this.briefService.collection = this.immutablePush(this.briefService.collection, brief);
        });*/
    }

    immutablePush(arr, newEntry) {
        return [...arr, newEntry]
    }

}
