import { ClientService } from './client.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerClientsMainComponent } from './task-manager-clients-main.component';
import { DataTableModule, SharedModule, ButtonModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
  ],
  providers: [ClientService],
  declarations: [TaskManagerClientsMainComponent],
  exports: [TaskManagerClientsMainComponent]
})
export class TaskManagerClientsModule { }
