import { DialogContent } from './dialog-content';
import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'task-manager-main',
    template: `
    <md-sidenav-layout [class.m2app-dark]="isDarkTheme">
    <md-sidenav #sidenav mode="side" class="md-sidenav-left">
        <md-card style="text-align: center">
            <h3>שלום דנה</h3>
            <p>מעצבת</p>
        </md-card>
        <md-card style="text-align: center">
            <button md-raised-button color="primary">Log out
                <i class="material-icons">power_settings_new</i>
            </button>
        </md-card>
    </md-sidenav>

    <md-toolbar color="primary">
        <button class="app-icon-button" (click)="sidenav.toggle()">
             <i class="material-icons app-toolbar-menu">menu</i>
        </button> מערכת ניהול בריפים

        <span class="app-toolbar-filler"></span>
        <button md-button (click)="isDarkTheme = !isDarkTheme" class="brand-logo">DALIA INBAR</button>
    </md-toolbar>

    <div class="app-content">
        <md-card>
            <button md-raised-button color="primary">צור בריף חדש
                <i class="material-icons">note_add</i>
            </button>

            <button md-raised-button color="primary">הוסף משתמש חדש
                <i class="material-icons">sentiment_satisfied</i>
            </button>

            <button md-raised-button color="primary">רשימת בריפים
                <i class="material-icons">pageview</i>
            </button>
        </md-card>

        <div class="app-content-inner">
            
                <task-manager-new-task></task-manager-new-task>

            
             
                <task-manager-tasks-list [tasks]="tickets"></task-manager-tasks-list>

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

    tickets;

    constructor(private _dialog: MdDialog, private _tasks: TasksService) {

        this.tickets = _tasks.tickets;
    }

    openDialog() {
        let dialogRef = this._dialog.open(DialogContent);

        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        })
    }
}
