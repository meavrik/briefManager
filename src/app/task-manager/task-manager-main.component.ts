import { Client } from './task-manager-clients/Client';
import { Project } from './task-manager-projects/project.model';
import { User } from './task-manager-users/user.model';
import { ActivatedRoute } from '@angular/router';
import { Brief } from './task-manager-briefs/brief.model';
import { Store } from './store.service';
import { Component, OnInit } from '@angular/core';

/*<p-tabView orientation="right">
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
            </p-tabView>*/


@Component({
    selector: 'task-manager-main',
    template: `
    
    <div class="app-content">
        <task-manager-toolbar [isDarkTheme]="isDarkTheme"></task-manager-toolbar>
        <div style="display:flex;flex-direction:row">
            
            <task-manager-menu-main (pickCommand)="selected($event.type)"></task-manager-menu-main>
            <router-outlet></router-outlet>
        </div>
        <md-card>
            <p>Last dialog result: {{lastDialogResult}}</p>
            <button md-raised-button (click)="openDialog()">Comment</button>
        </md-card>

        <p-dialog header="בריף חדש" [(visible)]="displayNewBrief" modal="modal" rtl="true" width="800">
           <new-brief-form (save)="saveBrief($event.brief)"></new-brief-form>
        </p-dialog>
        
        <p-dialog header="משתמש חדש" [(visible)]="displayNewUser" modal="modal" [rtl]="true">
            <new-user-form (save)="saveUser($event.user)"></new-user-form>
         </p-dialog>

         <p-dialog header="פרוייקט חדש" [(visible)]="displayNewProject" modal="modal" [rtl]="true">
            <new-project-form (save)="saveProject($event.project)"></new-project-form>
         </p-dialog>

         <p-dialog header="לקוח חדש" [(visible)]="displayNewClient" modal="modal" [rtl]="true">
            <new-client-form (save)="saveClient($event.client)"></new-client-form>
         </p-dialog>
    </div>

<span class="app-action" [class.m2app-dark]="isDarkTheme">
  <button md-fab><md-icon>add</md-icon></button>
</span>
  `, styles: []
})

export class TaskManagerMainComponent {

    displayNewUser: boolean = false;
    displayNewBrief: boolean = false;
    displayNewProject: boolean = false;
    displayNewClient: boolean = false;
    isDarkTheme: boolean = false;
    lastDialogResult: string;

    constructor(private store: Store, route: ActivatedRoute) {
        this.store.getAllBriefs();
        this.store.getClients();
        this.store.getProjects();
        this.store.getUsers();
    }

    saveBrief(item: Brief) {
        this.displayNewBrief = false;
        this.store.addNewBrief(item);
    }

    saveUser(item: User) {
        this.displayNewUser = false;
        this.store.addNewUser(item);
    }

    saveProject(item: Project) {
        this.displayNewProject = false;
        this.store.addNewProject(item);
    }

    saveClient(item: Client) {
        this.displayNewClient = false;
        this.store.addNewClient(item);
    }

    selected(type: string) {
        console.log("selected = " + type);
        switch (type) {
            case "newBrief":
                this.displayNewBrief = true;
                break;
            case "newUser":
                this.displayNewUser = true;
                break;
            case "newProject":
                this.displayNewProject = true;
                break;
            case "newClient":
                this.displayNewClient = true;
                break;
        }

    }

    openDialog() {

    }
}
