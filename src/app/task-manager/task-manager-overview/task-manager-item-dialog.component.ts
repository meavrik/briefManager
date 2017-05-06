import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-manager-item-dialog',
  template: `
    <p-dialog header="ערוך"  width="300" responsive="true">
    <p>{{brief}}</p>
        <p-footer>
            <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                <button type="button" pButton icon="fa-close" (click)="display=false" label="No"></button>
                <button type="button" pButton icon="fa-check" (click)="display=false" label="Yes"></button>
            </div>
        </p-footer>
    </p-dialog>
  `,
  styles: []
})
export class TaskManagerItemDialogComponent {
  display:boolean;

  constructor() { }
  @Input() brief;


}
