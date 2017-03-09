import {AutoCompleteModule, SharedModule,  DataTableModule} from 'primeng/primeng';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerBriefsMainComponent } from './task-manager-briefs-main.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,

  ],
  declarations: [TaskManagerBriefsMainComponent],
  exports: [TaskManagerBriefsMainComponent],
  providers: []
})
export class TaskManagerBriefsModule { }
