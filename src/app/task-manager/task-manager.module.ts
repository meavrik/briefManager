import {AppConfigService} from '../app-config.service';
import { Store } from './store.service';
import { UserService } from './user.service';
import { TaskManagerProjectsModule } from './task-manager-projects/task-manager-projects.module';
import { TaskManagerOverviewModule } from './task-manager-overview/task-manager-overview.module';
import { TaskManagerUsersModule } from './task-manager-users/task-manager-users.module';
import { TaskManagerBriefsModule } from './task-manager-briefs/task-manager-briefs.module';
import { TaskManagerClientsModule } from './task-manager-clients/task-manager-clients.module';

import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerMainComponent } from './task-manager-main.component';
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
  providers: [UserService, Store,AppConfigService],
  declarations: [
    TaskManagerMainComponent,
    TaskManagerMenuComponent,
    TaskManagerToolbarComponent,
    TaskManagerSidenavComponent,
  ],
  exports: [TaskManagerMainComponent],
})
export class TaskManagerModule { }
