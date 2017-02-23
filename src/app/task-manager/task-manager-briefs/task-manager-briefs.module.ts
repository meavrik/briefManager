import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule, DialogModule, EditorModule, SpinnerModule, ChipsModule, FieldsetModule, CalendarModule, SliderModule, MultiSelectModule, InputTextareaModule, DropdownModule, AutoCompleteModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerBriefsMainComponent } from './task-manager-briefs-main.component';
import { TaskManagerBriefsNewComponent } from './task-manager-briefs-new.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    FieldsetModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    DropdownModule,
    InputTextareaModule,
    MultiSelectModule,
    SliderModule,
    CalendarModule,
    ChipsModule,
    SpinnerModule,
    EditorModule,
    MaterialModule.forRoot(),
  ],
  declarations: [TaskManagerBriefsMainComponent, TaskManagerBriefsNewComponent],
  exports: [TaskManagerBriefsMainComponent, TaskManagerBriefsNewComponent],
  providers: []
})
export class TaskManagerBriefsModule { }
