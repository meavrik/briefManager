import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'task-manager-sidenav',
  template: `
    <md-sidenav #sidenav mode="side" class="md-sidenav-left">
        <md-card style="text-align: center">
            <h3>שלום דנה</h3>
            <p>מעצבת</p>
        </md-card>
        <md-card style="text-align: center">
            <button md-raised-button color="primary">Log out
                <i class="material-icons">power_settings_new</i>
            </button>
        </md-card>
    </md-sidenav>
  `,
  styles: []
})
export class TaskManagerSidenavComponent implements OnInit {

  @Output() sidenav;

  constructor()
  { 

  }

  ngOnInit() {
      this.sidenav;
  }

}
