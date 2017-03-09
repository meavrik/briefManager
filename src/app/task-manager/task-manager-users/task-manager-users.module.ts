import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule, InputTextModule, FieldsetModule, ButtonModule, SharedModule, DataTableModule } from 'primeng/primeng';
import { TaskManagerUsersMainComponent } from './task-manager-users-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    DropdownModule,
    SharedModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  declarations: [TaskManagerUsersMainComponent],
  exports: [TaskManagerUsersMainComponent],
  providers: []
})
export class TaskManagerUsersModule { }
