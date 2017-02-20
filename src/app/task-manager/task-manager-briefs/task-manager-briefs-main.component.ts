import { LazyLoadEvent } from 'primeng/primeng';
import { Brief } from './brief.model';
import { FormGroup } from '@angular/forms';
import { BriefService } from './brief.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'task-manager-briefs-main',
    template: `
    <p-fieldset #fieldset legend="צור בריף חדש" toggleable="true" [collapsed]="true" (onAfterToggle)="onAfterToggle()">
         <task-manager-briefs-new (save)="save($event.brief)"></task-manager-briefs-new>
    </p-fieldset>
    
    <p-dataTable [value]="this.briefService.collection" [resizableColumns]="true" [reorderableColumns]="true" [paginator]="true" [rows]="10">
        <p-header>רשימת בריפים
        <br/>
         <p-autoComplete id="search" [(ngModel)]="brief" [suggestions]="filteredBriefsSingle" (completeMethod)="filterBriefSingle($event)" placeholder="חפש בריף" field="title"></p-autoComplete>
       
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
    cols: any[] = [];
    filteredBriefsSingle: Brief[];
    briefs: Brief[];

    filterBriefSingle(event) {
        let query = event.query;
        this.briefService.getbriefs().subscribe(briefs => {
            this.filteredBriefsSingle = this.filterbrief(query, briefs);
        });
    }

    filterbrief(query, briefs: Brief[]): Brief[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        /*let filtered : Brief[] = [];
        for(let i = 0; i < briefs.length; i++) {
            let brief = briefs[i];
            if(brief.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(brief);
            }
        }*/

        return briefs.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) == 0);
    }

    constructor(private briefService: BriefService) { }

    ngOnInit() {
        this.briefService.getbriefs().subscribe(briefs => {
            this.briefService.collection = briefs
        });

        this.cols = [
            { field: 'index', header: 'מספר' },
            { field: 'title', header: 'שם' },
            { field: 'assignto', header: 'שיוך' },
            { field: 'status', header: 'סטטוס' },
            { field: 'due', header: 'יעד' },
            { field: 'priority', header: 'priority' },
        ];
    }

    save(newBrief: Brief) {
        newBrief.index = this.briefService.collection.length;
        this.briefService.addBrief(newBrief).subscribe(brief => {
            this.briefService.collection = this.immutablePush(this.briefService.collection, brief);
        });
    }

    immutablePush(arr, newEntry) {
        return [...arr, newEntry]
    }

    onAfterToggle() {
        console.log('onAfterToggle');

    }

}
