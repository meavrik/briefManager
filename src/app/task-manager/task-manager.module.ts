import {ReactiveFormsModule} from '@angular/forms';
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

@NgModule({
  entryComponents: [DialogContent],
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule
  ],
  providers : [TasksService],
  declarations: [DialogContent,TaskManagerMainComponent, TaskManagerTasksListComponent, TaskManagerTasksListItemComponent, TaskManagerNewTaskComponent],
  exports :[TaskManagerMainComponent,TaskManagerNewTaskComponent],
})
export class TaskManagerModule { }
