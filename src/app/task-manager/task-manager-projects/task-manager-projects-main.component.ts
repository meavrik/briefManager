import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-manager-projects-main',
  template: `
    <p-fieldset #fieldset legend="הוסף פרוייקט חדש" toggleable="true" [collapsed]="true" (onAfterToggle)="onAfterToggle()">
        
    </p-fieldset>
    
    <p-dataTable [value]="this.projectService.collection" [resizableColumns]="true" [reorderableColumns]="true" [paginator]="true" [rows]="10" selectionMode="single" [(selection)]="selectedProject">
        <p-header>רשימת פרוייקטים
        <br/>

        </p-header>
        <p-column *ngFor="let item of cols" [field]="item.field" [header]="item.header" [sortable]="true"></p-column>
    </p-dataTable>
  `,
  styles: []
})
export class TaskManagerProjectsMainComponent implements OnInit {
  projects
  cols:any[];
  selectedProject:Project;

  constructor(private projectService:ProjectsService) { }
  
  ngOnInit() {
    this.projectService.getItems().subscribe(projects => {
            this.projectService.collection = projects
        });

        this.cols = [
            { field: 'index', header: 'מספר' },
            { field: 'title', header: 'שם' },
            { field: 'projectId', header: '#' }
        ];
  }

}
