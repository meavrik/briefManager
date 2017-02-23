import { Store } from './../store.service';
import { ClientService } from './client.service';
import { Client } from './Client';
import { Component, OnInit } from '@angular/core';
import { Header, Footer } from 'primeng/primeng';

@Component({
    selector: 'task-manager-clients-main',
    template: `
    <p-fieldset #fieldset legend="לקוח חדש" toggleable="true" [collapsed]="true">
   
    </p-fieldset>
    <p-dataTable [value]="clients" selectionMode="single" [(selection)]="selectedClient">
    <p-header>רשימת לקוחות
    </p-header>
        <p-column field="id" header="#" [style]="{'width':'60px'}"></p-column>
        <p-column field="name" header="שם"></p-column>
    </p-dataTable>
  `,
    styles: []
})
export class TaskManagerClientsMainComponent implements OnInit {

    clients: Client[];
    selectedClient: Client;
    
    constructor(private store: Store) { }

    ngOnInit() {
        this.store.clients.subscribe(clients => this.clients = [...clients]);
    }

    onClick(index) {

    }

}
