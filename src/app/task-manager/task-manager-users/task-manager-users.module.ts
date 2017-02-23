import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule, InputTextModule, FieldsetModule, ButtonModule, SharedModule, DataTableModule } from 'primeng/primeng';
import { TaskManagerUsersMainComponent } from './task-manager-users-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerUsersNewComponent } from './task-manager-users-new.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    DropdownModule,
    SharedModule,
    ButtonModule,
    FieldsetModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  declarations: [TaskManagerUsersMainComponent, TaskManagerUsersNewComponent],
  exports: [TaskManagerUsersMainComponent],
  providers: []
})
export class TaskManagerUsersModule { }
