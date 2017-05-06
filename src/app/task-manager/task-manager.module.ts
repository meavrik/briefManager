import {SelectButtonModule} from 'primeng/primeng';
import { TaskManagerOverviewItemComponent } from './task-manager-overview/task-manager-overview-item.component';
import { TaskManagerItemDialogComponent } from './task-manager-overview/task-manager-item-dialog.component';
import { TaskManagerOverviewMainComponent } from './task-manager-overview/task-manager-overview-main.component';
import { TaskManagerUsersMainComponent } from './task-manager-users/task-manager-users-main.component';
import { TaskManagerProjectsMainComponent } from './task-manager-projects/task-manager-projects-main.component';
import { TaskManagerClientsMainComponent } from './task-manager-clients/task-manager-clients-main.component';
import { TaskManagerBriefsMainComponent } from './task-manager-briefs/task-manager-briefs-main.component';
import { TaskManagerChartsModule } from './task-manager-charts/task-manager-charts.module';
import { NewUserFormComponent } from './forms/new-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBriefFormComponent } from './forms/new-brief-form.component';
import { TaskManagerMenuMainComponent } from './task-manager-menu-main.component';
import { routes } from './../routes';
import { RouterModule } from '@angular/router';
import { Store } from './store.service';
import { UserService } from './user.service';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerMainComponent } from './task-manager-main.component';
import { TaskManagerMenuComponent } from './task-manager-menu.component';
import { TaskManagerToolbarComponent } from './task-manager-toolbar.component';
import { TaskManagerSidenavComponent } from './task-manager-sidenav.component';
import {

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
  SpinnerModule, DataTableModule, GrowlModule, AccordionModule, PanelModule
} from 'primeng/primeng';
import { NewProjectFormComponent } from './forms/new-project-form.component';
import { NewClientFormComponent } from './forms/new-client-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),

    TabViewModule,

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
    SpinnerModule,
    TaskManagerChartsModule,
    DataTableModule,
    AccordionModule,
    GrowlModule,
    SelectButtonModule,
    PanelModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UserService, Store],
  declarations: [
    TaskManagerMainComponent,
    TaskManagerMenuComponent,
    TaskManagerToolbarComponent,
    TaskManagerSidenavComponent,
    TaskManagerMenuMainComponent,

    TaskManagerBriefsMainComponent,
    TaskManagerClientsMainComponent,
    TaskManagerProjectsMainComponent,
    TaskManagerUsersMainComponent,
    TaskManagerOverviewMainComponent,
    TaskManagerItemDialogComponent,
    TaskManagerOverviewItemComponent,
    
    NewBriefFormComponent,
    NewUserFormComponent,
    NewProjectFormComponent,
    NewClientFormComponent,
  ],
  exports: [TaskManagerMainComponent],
})
export class TaskManagerModule { }
