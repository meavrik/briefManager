import { ClientService } from './client.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerClientsMainComponent } from './task-manager-clients-main.component';
import {FieldsetModule, DataTableModule,  SharedModule,  ButtonModule} from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    FieldsetModule,
  ],
  providers: [ClientService],
  declarations: [TaskManagerClientsMainComponent],
  exports: [TaskManagerClientsMainComponent]
})
export class TaskManagerClientsModule { }
