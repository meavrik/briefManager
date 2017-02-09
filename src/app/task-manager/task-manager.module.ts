import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { DialogContent } from './dialog-content';
import { TasksService } from './../tasks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerMainComponent } from './task-manager-main.component';
import { TaskManagerTasksListComponent } from './task-manager-tasks-list.component';
import { TaskManagerTasksListItemComponent } from './task-manager-tasks-list-item.component';
import { TaskManagerNewTaskComponent } from './task-manager-new-task.component';
import { DatePickerModule } from 'ng2-datepicker';
//import {DatePickerModule} from 'ng2-datepicker-bootstrap';
import { FormsModule } from '@angular/forms';
import { TaskManagerMenuComponent } from './task-manager-menu.component';
import { TaskManagerToolbarComponent } from './task-manager-toolbar.component';
import { TaskManagerSidenavComponent } from './task-manager-sidenav.component';
import { AutoCompleteModule } from 'primeng/primeng';

import {DropdownModule} from 'primeng/primeng';

@NgModule({
  entryComponents: [DialogContent],
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    AutoCompleteModule,
    DropdownModule
  ],
  providers: [TasksService],
  declarations: [
    DialogContent,
    TaskManagerMainComponent,
    TaskManagerTasksListComponent,
    TaskManagerTasksListItemComponent,
    TaskManagerNewTaskComponent,
    TaskManagerMenuComponent,
    TaskManagerToolbarComponent,
    TaskManagerSidenavComponent
  ],
  exports: [TaskManagerMainComponent, TaskManagerNewTaskComponent, TaskManagerSidenavComponent, TaskManagerToolbarComponent],
})
export class TaskManagerModule { }
