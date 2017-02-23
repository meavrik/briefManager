import { Store } from './../store.service';
import { Brief } from './../task-manager-briefs/brief.model';
import { Router } from '@angular/router';
import { MenuItem, Message } from 'primeng/primeng';
import { ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-manager-overview-main',
  template: `
  <p-fieldset #fieldset legend="צור בריף חדש" toggleable="true" [collapsed]="true">
      <task-manager-briefs-new (save)="save($event.brief)"></task-manager-briefs-new>
  </p-fieldset>

  <task-manager-item-dialog *ngIf="selectedBrief" [brief]="selectedBrief"></task-manager-item-dialog>

   <p-growl [value]="msgs"></p-growl>
    <p-menubar [model]="items" *ngIf="briefPicked"></p-menubar>
    
    <p-dataTable [value]="status" pDroppable="briefs" (onDrop)="drop($event)">
        <p-header>מבט כללי

        </p-header>
            
        <p-column *ngFor="let item of cols let i = index;" [field]="item.field" [header]="item.header"
          > 
          <template let-item="rowData" pTemplate="item">
           <task-manager-overview-item *ngFor="let brief of briefsStatusArr[i]" [brief]="brief"
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

  briefSelected(checked: boolean, brief: Brief) {
    this.briefPicked = checked;
    this.selectedBrief = brief;
  }

  selectedBrief: Brief;
  display: boolean = false;
  briefPicked: boolean = false;
  cols: any[];
  status = [{}]
  briefsStatusArr: any[] = [];
  msgs: Message[] = [];
  items: MenuItem[] = [];
  draggedBrief: Brief;
  briefs: Brief[];

  constructor(private store: Store, router: Router) {

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

    this.store.briefs.subscribe(briefs => { 
      this.briefs = briefs; 
      this.briefsStatusArr = this.cols.map(a => []);
        briefs.forEach(brief => {
        this.briefsStatusArr[brief.status].push(brief);
        })
    });
  }

  save(newBrief: Brief) {
    this.store.addNewBrief(newBrief);
  }

  dragStart(event, brief: Brief) {
    console.log('start drag ' + brief.title);
    this.draggedBrief = brief;
  }

  drop(event: DragEvent) {
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
      }
    }
  }

  dragEnd(event) {
    this.draggedBrief = null;
  }

}
