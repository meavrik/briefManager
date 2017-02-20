import { TaskManagerProjectsModule } from './task-manager-projects/task-manager-projects.module';
import { TaskManagerOverviewModule } from './task-manager-overview/task-manager-overview.module';
import { TaskManagerUsersModule } from './task-manager-users/task-manager-users.module';
import { TaskManagerBriefsModule } from './task-manager-briefs/task-manager-briefs.module';
import { TaskManagerClientsModule } from './task-manager-clients/task-manager-clients.module';

import { MaterialModule } from '@angular/material';
import { TasksService } from './../tasks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerMainComponent } from './task-manager-main.component';
import { TaskManagerTasksListComponent } from './task-manager-tasks-list.component';
import { TaskManagerTasksListItemComponent } from './task-manager-tasks-list-item.component';
import { TaskManagerNewTaskComponent } from './task-manager-new-task.component';

import { TaskManagerMenuComponent } from './task-manager-menu.component';
import { TaskManagerToolbarComponent } from './task-manager-toolbar.component';
import { TaskManagerSidenavComponent } from './task-manager-sidenav.component';
import { TabViewModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),

    TabViewModule,
    TaskManagerClientsModule,
    TaskManagerBriefsModule,
    TaskManagerUsersModule,
    TaskManagerOverviewModule,
    TaskManagerProjectsModule
  ],
  providers: [TasksService],
  declarations: [
    TaskManagerMainComponent,
    TaskManagerMenuComponent,
    TaskManagerToolbarComponent,
    TaskManagerSidenavComponent,
  ],
  exports: [TaskManagerMainComponent],
})
export class TaskManagerModule { }
