import { LazyLoadEvent } from 'primeng/primeng';
import { Brief } from './brief.model';
import { FormGroup } from '@angular/forms';
import { BriefService } from './brief.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'task-manager-briefs-main',
    template: `
    
    
    <p-fieldset #fieldset legend="צור בריף חדש" toggleable="true" [collapsed]="true" (onAfterToggle)="onAfterToggle()">
         <task-manager-briefs-new (save)="save($event.title)"></task-manager-briefs-new>
    </p-fieldset>
    
    <p-dataTable [value]="this.briefService.collection" [resizableColumns]="true" [reorderableColumns]="true" [paginator]="true" [rows]="10">
        <p-header>
         <p-autoComplete id="search" [(ngModel)]="brief" [suggestions]="filteredBriefsSingle" (completeMethod)="filterBriefSingle($event)" placeholder="חפש בריף" field="title"></p-autoComplete>
         <br/>
        רשימת בריפים
       
        </p-header>
        <p-column *ngFor="let item of cols" [field]="item.field" [header]="item.header"></p-column>
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
    cols: any[]=[];
    suggestions:string[]=["sdasdas","dddddd"];
    filteredBriefsSingle:Brief[];
    countries:Brief[];

    filterBriefSingle(event) {
        let query = event.query;        
        this.briefService.getbriefs().subscribe(briefs => {
            this.filteredBriefsSingle = this.filterCountry(query, briefs);
        });
    }
    
    filterCountry(query, countries: Brief[]):Brief[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : Brief[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }


    
    constructor(private briefService: BriefService) { }

    ngOnInit() {
        this.briefService.getbriefs().subscribe(briefs => {
            this.briefService.collection = briefs
        });

        this.cols = [
            { field: 'index', header: 'מספר' },
            { field: 'title', header: 'שם' },
            { field: 'description', header: 'תיאור' },
            { field: 'status', header: 'סטטוס' },
            { field: 'due', header: 'יעד' },
            { field: 'priority', header: 'priority' },
        ];
    }

    save(title, description) {
        
        var newBrief: Brief = new Brief(this.briefService.collection.length, title, description);
        this.briefService.addBrief(newBrief).subscribe(brief => {
            this.briefService.collection = this.immutablePush(this.briefService.collection, brief);
            //this.suggestions=this.briefService.collection.map((item)=>item.title);
        });
    }

    immutablePush(arr, newEntry) {
        return [...arr, newEntry]
    }

    onAfterToggle() {
        console.log('onAfterToggle');

    }

}
