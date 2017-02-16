import {MaterialModule} from '@angular/material';

import { BriefService } from '../task-manager-briefs/brief.service';
import { TaskManagerOverviewMainComponent } from './task-manager-overview-main.component';
import { FormsModule } from '@angular/forms';
import { AppConfigService } from './../../app-config.service';
import { UsersService } from './../task-manager-users/users.service';
import {DragDropModule, MenubarModule,  ButtonModule,   SlideMenuModule,    MessagesModule,    GrowlModule,    SplitButtonModule,    DataTableModule,    ChipsModule,    SharedModule} from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { TaskManagerOverviewItemComponent } from './task-manager-overview-item.component';

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
    MaterialModule.forRoot(),
  ],
  declarations: [TaskManagerOverviewMainComponent, TaskManagerOverviewItemComponent],
  exports: [TaskManagerOverviewMainComponent],
  providers: [BriefService],

})
export class TaskManagerOverviewModule { }
