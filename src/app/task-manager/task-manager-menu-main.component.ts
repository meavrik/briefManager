import {Router} from '@angular/router';
import { MenuItem, SelectItem } from 'primeng/primeng';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/* <p-menubar [model]="items"></p-menubar>*/
@Component({
    selector: 'task-manager-menu-main',
    template: `
     
        <p-accordion class="menu-button">
            <p-accordionTab [selected]="true">
            <p-header>
            <i class="material-icons">home</i>
            </p-header>
               <p-selectButton [options]="options" [(ngModel)]="selectedOption"></p-selectButton>
            </p-accordionTab>
            <p-accordionTab>
            <p-header>
               <i class="material-icons">tab</i>
            </p-header>
            </p-accordionTab>
            <p-accordionTab header="ניהול פרוייקטים">
                Content 3    
            </p-accordionTab>

            <p-accordionTab header="ניהול לקוחות">
                Content 3    
            </p-accordionTab>
        </p-accordion>
  `,
    styles: []
})
export class TaskManagerMenuMainComponent implements OnInit {

    constructor(private router: Router) { }
    private items: MenuItem[];
    selectedOption=0;
    options:SelectItem[] = [
        {label:'בריף חדש',value:0},
        {label:'בריף חדש',value:1},
        {label:'בריף חדש',value:2},
        {label:'בריף חדש',value:30},
        
        ]
    @Output() pickCommand = new EventEmitter<any>();

    ngOnInit() {
        this.items = [
            {
                label: 'מבט כללי',
                command: () => {this.router.navigate(['overview']);}
            },
            {
                label: 'בריפים',
                icon: 'fa-edit',
                command: () => {
                            this.router.navigate(['briefs']);
                        },
                items: [
                    {
                        label: 'חדש',
                        icon: 'fa-plus',
                        command: () =>  this.pickCommand.emit({ event: event, type: "newBrief" })
                    },
                ]
            },
            {
                label: 'לקוחות',
                icon: 'fa-edit',
                command: () => {
                            this.router.navigate(['clients']);
                        },
                items: [
                    {
                        label: 'חדש',
                        icon: 'fa-plus',
                        command: () =>  this.pickCommand.emit({ event: event, type: "newClient" })
                    },
                ]
            },
            {
                label: 'פרוייקטים',
                icon: 'fa-edit',
                command: () => {
                            this.router.navigate(['projects']);
                        },
                items: [
                    {
                        label: 'חדש',
                        icon: 'fa-plus',
                        command: () => this.pickCommand.emit({ event: event, type: "newProject" })
                    },
                ]
            },
            {
                label: 'משתמשים',
                icon: 'fa-edit',
                command: () => {
                            this.router.navigate(['users']);
                        },
                items: [
                    {
                        label: 'חדש',
                        icon: 'fa-plus',
                        command: () =>  this.pickCommand.emit({ event: event, type: "newUser" })
                    },
                ]
            },
            {
                label: 'סטטיסטיקות',
                icon: 'fa-edit',
                command: () => {
                            this.router.navigate(['stats']);
                        },
            }
        ];

        this.router.navigate(['overview']);
    }

}
