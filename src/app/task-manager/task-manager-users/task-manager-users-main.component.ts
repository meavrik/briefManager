import { UsersService } from './users.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { Header ,Footer} from 'primeng/primeng';

@Component({
  selector: 'task-manager-users-main',
  template: `
  <p-dataTable [value]="users">
    <p-column field="id" header="id"></p-column>
    <p-column field="name" header="name"></p-column>
  
      <p-column styleClass="col-button">
          <template let-car="rowData" pTemplate="body">
              <button type="button" pButton icon="fa-edit" label="עריכה"></button>
          </template>
      </p-column>
  </p-dataTable>
  <br/>
  <button pButton icon="fa-external-link-square" label="משתמש חדש"></button>
  `,
  styles: []
})

export class TaskManagerUsersMainComponent implements OnInit {

    users: User[];
    cols: any[];

    constructor(private userService: UsersService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe(users => this.users = users);
        
        this.cols = [
            {field: 'id', header: 'id'},
            {field: 'name', header: 'name'},
        ];
    }

    onClick(index){

    }

}
