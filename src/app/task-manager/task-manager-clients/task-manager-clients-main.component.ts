import { ClientService } from './client.service';
import { Client } from './Client';
import { Component, OnInit } from '@angular/core';
import { Header ,Footer} from 'primeng/primeng';

@Component({
  selector: 'task-manager-clients-main',
  template: `
    <p-dataTable [value]="clients">
    <p-column field="id" header="id"></p-column>
    <p-column field="name" header="name"></p-column>

      <p-column styleClass="col-button">
          <template let-car="rowData" pTemplate="body">
              <button type="button" pButton icon="fa-edit" label="עריכה"></button>
          </template>
      </p-column>
  </p-dataTable>

  <br/>
    <button pButton icon="fa-external-link-square" label="לקוח חדש"></button>
  `,
  styles: []
})
export class TaskManagerClientsMainComponent implements OnInit {

    clients: Client[];
    cols: any[];

    constructor(private clientsService: ClientService) { }

    ngOnInit() {
        this.clientsService.getClients().subscribe(clients => this.clients = clients);
        
        this.cols = [
            {field: 'id', header: 'id'},
            {field: 'name', header: 'name'},
            {field: 'address', header: 'address'},
            {field: 'brand', header: 'Brand'},
        ];
    }

    onClick(index){

    }

}
