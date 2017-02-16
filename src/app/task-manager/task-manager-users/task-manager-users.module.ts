import {ReactiveFormsModule} from '@angular/forms';
import {FieldsetModule, ButtonModule,  SharedModule,  DataTableModule} from 'primeng/primeng';
import { AppConfigService } from './../../app-config.service';
import { UsersService } from './users.service';
import { TaskManagerUsersMainComponent } from './task-manager-users-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    FieldsetModule,
    ReactiveFormsModule,
  ],
  declarations: [TaskManagerUsersMainComponent],
  exports: [TaskManagerUsersMainComponent],
  providers: [UsersService, AppConfigService]
})
export class TaskManagerUsersModule { }
