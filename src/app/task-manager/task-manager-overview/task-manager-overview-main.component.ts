import { Store } from './../store.service';
import { Brief } from './../task-manager-briefs/brief.model';
import { MenuItem, Message } from 'primeng/primeng';
import { ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-manager-overview-main',
  template: `
  <task-manager-item-dialog *ngIf="selectedBrief" [brief]="selectedBrief"></task-manager-item-dialog>

   <p-growl [value]="msgs"></p-growl>

    <p-dataTable [value]="status" pDroppable="briefs" (onDrop)="drop($event)" [style]="{'flex-align':'start','height':'400px'}">
        <p-header>מבט כללי
        </p-header>
            
        <p-column *ngFor="let item of cols let i = index;" [field]="item.field" [header]="item.header"
          [style]="{'vertical-align':'top'}"
          > 
          <ng-template let-item="rowData" pTemplate="item">
           <task-manager-overview-item *ngFor="let brief of briefsStatusArr[i]" [brief]="brief"
             pDraggable="briefs" 
             (onDragStart)="dragStart($event,brief)" 
             (onDragEnd)="dragEnd($event,i)"
             [ngClass]="{'ui-state-highlight':draggedBrief}"
              >
           </task-manager-overview-item>
          </ng-template>

        </p-column>
    </p-dataTable>
  `,
  styles: []
})
export class TaskManagerOverviewMainComponent {

  selectedBrief: Brief;
  cols: any[];
  status = [{}]
  briefsStatusArr: any[] = [];
  msgs: Message[] = [];
  draggedBrief: Brief;
  briefs: Brief[];

  constructor(private store: Store) {
    this.cols = [
      { field: 'open', header: 'פתוח' },
      { field: 'in-progress', header: 'בעבודה' },
      { field: 'done', header: 'מחכה לאישור' },
      { field: 'status', header: 'מאושר' },
    ];

    this.store.briefs.subscribe(briefs => {
      if (briefs && briefs.length) {
        this.briefsStatusArr = this.cols.map(a => []);
        this.briefs = briefs.filter(brief => !isNaN(brief.status))
        this.briefs.forEach(brief => {
          this.briefsStatusArr[brief.status].push(brief);
        })
      }
    });
  }

  dragStart(event, brief: Brief) {
    console.log('start drag ' + brief.title);
    this.draggedBrief = brief;
  }

  drop(event: DragEvent) {
    console.log('drop ' + event);
    let element = event.toElement;

    if (!(element instanceof HTMLTableCellElement)) {
      do {
        element = element.parentElement
      } while (element && !(element instanceof HTMLTableCellElement))
    }

    if (element instanceof HTMLTableCellElement) {
      if (this.draggedBrief && this.draggedBrief.status != element.cellIndex) {
        this.draggedBrief.status = element.cellIndex;

        this.store.updateBrief(this.draggedBrief);
        this.store.updateBrief(this.draggedBrief);

        this.msgs.push({ severity: 'success', summary: 'סטטוס עודכן בהצלחה', detail: `${this.draggedBrief.title} עודכן לסטטוס ${this.draggedBrief.statusName}` });
      }
    }
  }

  dragEnd(event) {
    console.log('dragEnd ' + event);
  }

}
