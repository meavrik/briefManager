import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfigService } from '../../app-config.service';
import { FieldsetModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerProjectsMainComponent } from './task-manager-projects-main.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, FieldsetModule, DataTableModule, SharedModule
  ],
  declarations: [TaskManagerProjectsMainComponent],
  exports: [TaskManagerProjectsMainComponent],
  providers: []
})
export class TaskManagerProjectsModule { }
