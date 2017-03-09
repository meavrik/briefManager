import {TaskManagerChartsModule} from './task-manager-charts/task-manager-charts.module';
import { NewUserFormComponent } from './forms/new-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBriefFormComponent } from './forms/new-brief-form.component';
import { TaskManagerMenuMainComponent } from './task-manager-menu-main.component';
import { routes } from './../routes';
import { RouterModule } from '@angular/router';
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
import {  EditorModule, 
          ChipsModule, 
          CalendarModule, 
          MultiSelectModule, 
          InputTextareaModule, 
          DropdownModule, 
          AutoCompleteModule, 
          ButtonModule, 
          MenubarModule, 
          TabViewModule, 
          DialogModule, 
          SpinnerModule } from 'primeng/primeng';
import { NewProjectFormComponent } from './forms/new-project-form.component';
import { NewClientFormComponent } from './forms/new-client-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),

    TabViewModule,
    TaskManagerClientsModule,
    TaskManagerBriefsModule,
    TaskManagerUsersModule,
    TaskManagerOverviewModule,
    TaskManagerProjectsModule,

    DialogModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    DropdownModule,
    InputTextareaModule,
    MultiSelectModule,
    CalendarModule,
    ChipsModule,
    EditorModule,
    SpinnerModule,
    TaskManagerChartsModule,


    RouterModule.forRoot(routes),
  ],
  providers: [UserService, Store],
  declarations: [
    TaskManagerMainComponent,
    TaskManagerMenuComponent,
    TaskManagerToolbarComponent,
    TaskManagerSidenavComponent,
    TaskManagerMenuMainComponent,
    NewBriefFormComponent,
    NewUserFormComponent,
    NewProjectFormComponent,
    NewClientFormComponent,
  ],
  exports: [TaskManagerMainComponent],
})
export class TaskManagerModule { }
