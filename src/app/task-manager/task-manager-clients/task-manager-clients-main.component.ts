import { Store } from './../store.service';
import { Client } from './Client';
import { Component, OnInit } from '@angular/core';
import { Header, Footer } from 'primeng/primeng';

@Component({
    selector: 'task-manager-clients-main',
    template: `
    <p-dataTable [value]="clients" selectionMode="single" [(selection)]="selectedClient">
    <p-header>רשימת לקוחות
    </p-header>
        <p-column field="clientId" header="#" [style]="{'width':'60px'}"></p-column>
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
