import { Store } from './store.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'task-manager-main',
    template: `
    <task-manager-toolbar [isDarkTheme]="isDarkTheme"></task-manager-toolbar>
    <md-sidenav-layout [class.m2app-dark]="isDarkTheme">
    
        <div class="app-content">
            <task-manager-sidenav></task-manager-sidenav>
            <task-manager-menu></task-manager-menu>

             <p-tabView  orientation="right">
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
  `,styles:[]
})


export class TaskManagerMainComponent {

    isDarkTheme: boolean = false;
    lastDialogResult: string;

    constructor(private store:Store) {
        this.store.getAllBriefs();
        this.store.getClients();
        this.store.getProjects();
        this.store.getUsers();
    }

    openDialog() {

    }
}
