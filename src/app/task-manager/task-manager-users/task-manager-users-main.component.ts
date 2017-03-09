import { Store } from './../store.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { Header ,Footer} from 'primeng/primeng';

@Component({
  selector: 'task-manager-users-main',
  template: `

  <p-dataTable [value]="users" selectionMode="single" [(selection)]="selectedUser">
      <p-column styleClass="col-button" header="כינוי" [style]="{'width':'60px'}">
          <template let-user="rowData" pTemplate="body">
             <img src="./resources/starwars/avatar_{{user.avatarId}}.jpeg" style="height:40px"/>
          </template>
      </p-column>

    <p-column field="userId" header="#" [style]="{'width':'40px'}"></p-column>
    <p-column field="name" header="שם"></p-column>
  </p-dataTable>
  `,
  styles: []
})

export class TaskManagerUsersMainComponent implements OnInit {

    users: User[]=[];
    selectedUser:User;

    constructor(private store: Store) { }

    ngOnInit() {
        this.store.users.subscribe(users => {
            this.users= users.filter(item=>item.name);
            console.log("users update!!!!! "+this.users.length);
        });
    }

    save(newUser: User) {
        console.log("new user = "+newUser.avatarId);
        this.store.addNewUser(newUser);
        /*newUser.userId = this.userService.collection.length;
        this.userService.addItem(newUser).subscribe(user => {
            this.userService.collection = [...this.userService.collection, user];
        });*/
    }

}
