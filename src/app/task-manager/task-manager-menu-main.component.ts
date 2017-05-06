import {Router} from '@angular/router';
import { MenuItem, SelectItem } from 'primeng/primeng';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/* <p-menubar [model]="items"></p-menubar>*/
//<p-selectButton [options]="options" [(ngModel)]="selectedOption"></p-selectButton>
@Component({
    selector: 'task-manager-menu-main',
    template: `
     
        <p-accordion class="menu-button">
            <p-accordionTab [selected]="true" (click)="gotopage()">
                <p-header>
                <div style="display:flex">
                    <i class="material-icons" style="border-left:1px solid black;margin-left:20px;padding-left:20px;">home</i>
                    <span>מבט כללי</span>
                </div>
                </p-header>
              <button pButton type="button" label="בריף חדש" (click)="createNew('newBrief')" style="width:100%;"></button>
               
              
            </p-accordionTab>

            <p-accordionTab (click)="gotopage(1)" header="בריפים">
                <p-header>
                    <div style="display:flex">
                        <i class="material-icons" style="border-left:1px solid black;margin-left:20px;padding-left:20px;">playlist_add_check</i>
                        <span>בריפים</span>
                    </div>
                </p-header>
                <button pButton type="button" label="צור חדש" (click)="createNew('newBrief')" style="width:100%;"></button>
            </p-accordionTab>

            <p-accordionTab (click)="gotopage(2)" header="פרוייקטים">
                <p-header>
                    <div style="display:flex">
                        <i class="material-icons" style="border-left:1px solid black;margin-left:20px;padding-left:20px;">assignment</i>
                        <span>פרוייקטים</span>
                    </div>
                </p-header>
                <button pButton type="button" label="צור חדש" (click)="createNew('newProject')" style="width:100%;"></button>
            </p-accordionTab>


            <p-accordionTab (click)="gotopage(3)" header="לקוחות">
                <p-header>
                    <div style="display:flex">
                        <i class="material-icons" style="border-left:1px solid black;margin-left:20px;padding-left:20px;">face</i>
                        <span>לקוחות</span>
                    </div>
                </p-header>
               <button pButton type="button" label="צור חדש" (click)="createNew('newClient')" style="width:100%;margin:0px"></button>
            </p-accordionTab>



            <p-accordionTab (click)="gotopage(4)" header="משתמשים">
                <p-header>
                    <div style="display:flex">
                        <i class="material-icons" style="border-left:1px solid black;margin-left:20px;padding-left:20px;">phone</i>
                        <span>משתמשים</span>
                    </div>
                </p-header>
               <button pButton type="button" label="צור חדש" (click)="createNew('newUser')" style="width:100%;margin:0px"></button>
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
        {label:'לקוח חדש',value:1},
        {label:'פרוייקט חדש',value:2},
        {label:'משתמש חדש',value:3},
        
        ]
    @Output() pickCommand = new EventEmitter<any>();


    gotopage(pageNum:number=0) {
        let pages = ['overview','briefs','projects','clients','users']
        this.router.navigate([pages[pageNum]]);
    }

    createNew(action:string){
        this.pickCommand.emit({ event: event, type: action });
    }

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
