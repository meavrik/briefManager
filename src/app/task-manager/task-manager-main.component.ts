import { DialogContent } from './dialog-content';
import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'task-manager-main',
    template: `
    <md-sidenav-layout [class.m2app-dark]="isDarkTheme">
    
    <task-manager-sidenav></task-manager-sidenav>
    <task-manager-toolbar [isDarkTheme]="isDarkTheme"></task-manager-toolbar>

        <div class="app-content">
            <task-manager-menu></task-manager-menu>
    
            <div class="app-content-inner">
                <task-manager-new-task></task-manager-new-task>
                <task-manager-tasks-list [tasks]="_tasks"></task-manager-tasks-list>
            </div>
    
            <md-card>
                <p>Last dialog result: {{lastDialogResult}}</p>
                <button md-raised-button (click)="openDialog()">Comment</button>
            </md-card>
        </div>
    </md-sidenav-layout>

<span class="app-action" [class.m2app-dark]="isDarkTheme">
  <button md-fab><md-icon>add</md-icon></button>
</span>
  `,
})
export class TaskManagerMainComponent {

    isDarkTheme: boolean = false;
    lastDialogResult: string;

    _tasks;
    errorMessage;

    constructor(private _dialog: MdDialog, private _tasksService: TasksService) {

        //this.tickets = _tasksService.tickets;
        this.getTasks();
    }

    getTasks()
    {
        this._tasksService.getTasks().subscribe(_tasks => this._tasks = _tasks, error => this.errorMessage = <any>error);
    }

    openDialog() {
        
        let dialogRef = this._dialog.open(DialogContent);

        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        })
    }
}
