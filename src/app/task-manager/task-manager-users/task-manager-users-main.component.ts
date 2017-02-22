import { UsersService } from './users.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { Header ,Footer} from 'primeng/primeng';

@Component({
  selector: 'task-manager-users-main',
  template: `

  <p-fieldset #fieldset legend="משתמש חדש" toggleable="true" [collapsed]="true">
        <task-manager-users-new (save)="save($event.user)"></task-manager-users-new>
  </p-fieldset>

  <p-dataTable [value]="this.userService.collection" selectionMode="single" [(selection)]="selectedUser">
      <p-column styleClass="col-button" header="כינוי" [style]="{'width':'60px'}">
          <template let-user="rowData" pTemplate="body">
             <img src="./resources/starwars/avatar_{{user.avatarId}}.jpeg" style="height:40px"/>
          </template>
      </p-column>

    <p-column field="userId" header="#" [style]="{'width':'40px'}"></p-column>
    <p-column field="name" header="שם" rowspan="4"></p-column>


  </p-dataTable>
  `,
  styles: []
})

export class TaskManagerUsersMainComponent implements OnInit {

    //users: User[];
    //cols: any[];
    selectedUser:User;

    constructor(private userService: UsersService) { }

    ngOnInit() {
        this.userService.getItems().subscribe(users => this.userService.collection = users);
    }

    save(newUser: User) {
        console.log("new user = "+newUser.avatarId);
        
        newUser.userId = this.userService.collection.length;
        this.userService.addItem(newUser).subscribe(user => {
            this.userService.collection = [...this.userService.collection, user];
        });
    }

}
