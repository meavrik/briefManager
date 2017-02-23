import { TaskManagerBriefsModule } from '../task-manager-briefs/task-manager-briefs.module';
import { TaskManagerBriefsNewComponent } from '../task-manager-briefs/task-manager-briefs-new.component';
import { MaterialModule } from '@angular/material';
import { TaskManagerOverviewMainComponent } from './task-manager-overview-main.component';
import { FormsModule } from '@angular/forms';
import {
  AccordionModule,
  FieldsetModule,
  DialogModule,
  TooltipModule,
  ToggleButtonModule,
  DragDropModule,
  MenubarModule,
  ButtonModule,
  SlideMenuModule,
  MessagesModule,
  GrowlModule,
  SplitButtonModule,
  DataTableModule,
  ChipsModule,
  SharedModule
} from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { TaskManagerOverviewItemComponent } from './task-manager-overview-item.component';
import { TaskManagerItemDialogComponent } from './task-manager-item-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ChipsModule,
    SplitButtonModule,
    GrowlModule,
    MessagesModule,
    MenuModule,
    SlideMenuModule,
    ButtonModule,
    MenubarModule,
    DragDropModule,
    ToggleButtonModule,
    TooltipModule,
    FieldsetModule,
    DialogModule,
    TaskManagerBriefsModule,
    AccordionModule,
    MaterialModule.forRoot(),
  ],

  declarations: [TaskManagerOverviewMainComponent,
    TaskManagerOverviewItemComponent,
    TaskManagerItemDialogComponent,
  ],
  exports: [TaskManagerOverviewMainComponent],
  providers: [],

})
export class TaskManagerOverviewModule { }
