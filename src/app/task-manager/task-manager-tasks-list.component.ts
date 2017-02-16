import {Input, Component,  OnInit} from '@angular/core';

@Component({
  selector: 'task-manager-tasks-list',
  template: `
    <md-card class="app-input-section">
      <task-manager-tasks-list-item *ngFor="let task of tasks" [task]="task"></task-manager-tasks-list-item>
    </md-card>
  `,
  styles: [`
        md-card {
          display:flex;
          flex-direction: column;
          
        }

  
  `]
})
export class TaskManagerTasksListComponent {

  @Input() tasks=[];
  constructor() { }
}
