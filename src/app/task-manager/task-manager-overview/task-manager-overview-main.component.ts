import { Brief } from './../task-manager-briefs/brief.model';
import { Router } from '@angular/router';
import { MenuItem, Message } from 'primeng/primeng';
import { BriefService } from '../task-manager-briefs/brief.service';
import { ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-manager-overview-main',
  template: `
   <p-growl [value]="msgs"></p-growl>
    <p-menubar [model]="items" *ngIf="briefPicked"></p-menubar>
    <p-dataTable [value]="status" pDroppable="briefs" (onDrop)="drop($event)">
        <p-header>מבט כללי
        
        </p-header>
        <p-column *ngFor="let item of cols let i = index;" [field]="item.field" [header]="item.header"
          >
          <template let-item="rowData" pTemplate="item">
           <task-manager-overview-item *ngFor="let brief of briefsStatusArr[i]" [title]="brief.title" [status]="i" 
           pDraggable="briefs" (onDragStart)="dragStart($event,brief)" (onDragEnd)="dragEnd($event,i)"
           [ngClass]="{'ui-state-highlight':draggedBrief}"
           (selected)="briefSelected($event.checked)">
           </task-manager-overview-item>
           
          </template>
        </p-column>
    </p-dataTable>
  `,
  styles: []
})
export class TaskManagerOverviewMainComponent implements OnInit {

  briefSelected(checked:boolean) {
    this.briefPicked = checked;
  }

  briefPicked: boolean = false;
  cols: any[];
  status = [{}]
  briefsStatusArr: any[] = [];
  msgs: Message[] = [];
  items: MenuItem[] = [];
  draggedBrief: Brief;
  briefs: Brief[];

  constructor(private briefService: BriefService, router: Router) {

  }

  ngOnInit() {
    this.items = [
      /*{
        label: 'קדימה', icon: 'fa-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'אחורה', icon: 'fa-close', command: () => {
          this.delete();
        }
      },*/
      { label: 'ערוך', icon: 'fa-paint-brush' },
      {
        label: 'סטטוס', icon: 'fa-edit',
        items: [
          { label: 'פתוח', icon: 'fa-link' },
          { label: 'בעבודה', icon: 'fa-link' },
          { label: 'מחכה לאישור', icon: 'fa-link' },
          { label: 'מאושר', icon: 'fa-link' },
          { label: 'סגור', icon: 'fa-link' },
        ]
      },

      { label: 'מחק', icon: 'delete' },
      { label: 'סיים משימה', icon: 'fa-close' }
    ];

    this.cols = [
      { field: 'open', header: 'פתוח' },
      { field: 'in-progress', header: 'בעבודה' },
      { field: 'done', header: 'מחכה לאישור' },
      { field: 'status', header: 'מאושר' },
    ];


    this.briefService.getbriefs().subscribe(briefs => {

      this.briefs = briefs;
      this.reorder()
    })
  }


  reorder() {
    this.briefsStatusArr = this.cols.map(a => []);
    this.briefs.forEach(brief => {

      //let item= this.cols.find((item)=>item.field===brief.status);
      //let index = this.cols.indexOf(item);
      this.briefsStatusArr[brief.status].push(brief);

    })
  }

  dragStart(event, brief: Brief) {
    console.log('start drag ' + brief.title);

    this.draggedBrief = brief;
  }

  drop(event: DragEvent, colIndex) {
    console.log('drag drop ' + event.toElement);

    if (this.draggedBrief) {
      this.draggedBrief.status++;

      this.briefService.updatebriefs(this.draggedBrief).subscribe(result => { this.reorder() })
      this.reorder();
      //this.briefs.splice(this.findIndex(this.draggedBrief), 1);
      // this.draggedBrief = null;
    }
  }

  dragEnd(event, colIndex) {
    console.log('drag end ' + colIndex);
    this.draggedBrief = null;
  }

}
