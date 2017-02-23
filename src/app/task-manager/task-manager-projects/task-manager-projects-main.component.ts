import { Store } from './../store.service';
import { Project } from './project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-manager-projects-main',
  template: `
    <p-fieldset #fieldset legend="הוסף פרוייקט חדש" toggleable="true" [collapsed]="true" (onAfterToggle)="onAfterToggle()">
        
    </p-fieldset>
    
    <p-dataTable [value]="projects" [resizableColumns]="true" [reorderableColumns]="true" [paginator]="true" [rows]="10" selectionMode="single" [(selection)]="selectedProject">
        <p-header>רשימת פרוייקטים
        <br/>

        </p-header>
        <p-column *ngFor="let item of cols" [field]="item.field" [header]="item.header" [sortable]="true"></p-column>
    </p-dataTable>
  `,
  styles: []
})
export class TaskManagerProjectsMainComponent implements OnInit {
  projects: any[] = [];
  cols: any[];
  selectedProject: Project;

  constructor(private store: Store) { }

  ngOnInit() {
    /*this.projectService.getItems().subscribe(projects => {
            this.projectService.collection = projects
        });*/
    this.store.projects.subscribe(projects => this.projects=projects.filter(a => a._id));

    this.cols = [
      { field: 'index', header: 'מספר' },
      { field: 'title', header: 'שם' },
      { field: 'projectId', header: '#' }
    ];
  }

}
