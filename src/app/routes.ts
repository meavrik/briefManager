import { TaskManagerChartsMainComponent } from './task-manager/task-manager-charts/task-manager-charts-main.component';
import { TaskManagerUsersMainComponent } from './task-manager/task-manager-users/task-manager-users-main.component';
import { TaskManagerClientsMainComponent } from './task-manager/task-manager-clients/task-manager-clients-main.component';
import { TaskManagerBriefsMainComponent } from './task-manager/task-manager-briefs/task-manager-briefs-main.component';
import { TaskManagerProjectsMainComponent } from './task-manager/task-manager-projects/task-manager-projects-main.component';
import { TaskManagerOverviewMainComponent } from './task-manager/task-manager-overview/task-manager-overview-main.component';
import { TaskManagerMainComponent } from './task-manager/task-manager-main.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'overview',
        component: TaskManagerOverviewMainComponent
    },
    {
        path: 'briefs',
        component: TaskManagerBriefsMainComponent
    },
    {
        path: 'projects',
        component: TaskManagerProjectsMainComponent,
        canActivate: [],
        canDeactivate: []
    },
    {
        path: 'clients',
        component: TaskManagerClientsMainComponent
    },
    {
        path: 'users',
        component: TaskManagerUsersMainComponent
    },
    {
        path: 'stats',
        component: TaskManagerChartsMainComponent
    },



];