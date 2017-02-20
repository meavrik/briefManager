import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerProjectsMainComponent } from './task-manager-projects-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskManagerProjectsMainComponent],
  exports:[TaskManagerProjectsMainComponent]
})
export class TaskManagerProjectsModule { }
