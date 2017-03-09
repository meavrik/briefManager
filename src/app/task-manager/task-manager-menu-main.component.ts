import {Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'task-manager-menu-main',
    template: `
      <p-menubar [model]="items"></p-menubar>
  `,
    styles: []
})
export class TaskManagerMenuMainComponent implements OnInit {

    constructor(private router: Router) { }
    private items: MenuItem[];

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
