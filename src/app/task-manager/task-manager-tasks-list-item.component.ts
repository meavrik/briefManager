import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-manager-tasks-list-item',
  template: `
    <md-card class="app-input-section">
      <h4>{{task.name}}</h4>
      <p>{{task.description}}</p>
    </md-card>
  `,
  styles: [
    `md-card{
        width:90%;
        margin:2px;
    }
    .app-input-section {
      height:100px;
    }
    `]
})
export class TaskManagerTasksListItemComponent {

  @Input() task;
  constructor() { }

}
