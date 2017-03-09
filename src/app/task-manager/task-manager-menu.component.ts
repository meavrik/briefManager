import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-manager-menu',
  template: `
      
    <md-card>
        
        <button md-raised-button color="primary">צור בריף חדש
            <i class="material-icons">note_add</i>
        </button>

        <button md-raised-button color="primary">הוסף משתמש חדש
            <i class="material-icons">sentiment_satisfied</i>
        </button>

        <button md-raised-button color="primary">ניהול לקוחות
            <i class="material-icons">pageview</i>
        </button>

        <button md-raised-button color="primary">רשימת בריפים
            <i class="material-icons">pageview</i>
        </button>
    </md-card>
  `,
  styles: [
      ]
})
export class TaskManagerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
