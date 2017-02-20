
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
            
             <p-tabView orientation="top">
            <div class="app-content-inner">
                <p-tabPanel header="מבט כללי" rightIcon="fa-search" >
                    <task-manager-overview-main></task-manager-overview-main>
                </p-tabPanel>

                <p-tabPanel header="ניהול בריפים" rightIcon="fa-book" >
                    <task-manager-briefs-main></task-manager-briefs-main>
                </p-tabPanel>

                <p-tabPanel header="ניהול פרוייקים" rightIcon="fa-book" >
                    <task-manager-projects-main></task-manager-projects-main>
                </p-tabPanel>

                <p-tabPanel header="לקוחות" rightIcon="fa-bookmark-o">
                    <task-manager-clients-main></task-manager-clients-main>
                    
                </p-tabPanel>
                <p-tabPanel header="משתמשים" rightIcon="fa-user" >
                    <task-manager-users-main></task-manager-users-main>
                   
                </p-tabPanel>
                <p-tabPanel header="סטטיסטיקות" rightIcon="fa-bar-chart">
                </p-tabPanel>
                <p-tabPanel header="הגדרות" rightIcon="fa-gear">
                </p-tabPanel>
               
            </div>
             </p-tabView>
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
        
        /*let dialogRef = this._dialog.open(DialogContent);

        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        })*/
    }
}
